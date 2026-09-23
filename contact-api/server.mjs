// Contact form relay: the only dynamic piece of the site. Receives the form
// from the static page (proxied by the web container's nginx at /api/contact)
// and forwards it by SMTP. Everything is in-memory — a restart just resets
// the rate limits and invalidates outstanding form tokens.

import { createServer } from "node:http";
import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import nodemailer from "nodemailer";

// Empty values count as unset: env_file passes `KEY=` through as "".
const env = (name, fallback) => process.env[name] || fallback;

const PORT = Number(env("PORT", "3000"));
const CONTACT_TO = env("CONTACT_TO", "maxime.bacq@massb.dev");
const MAIL_FROM = env("MAIL_FROM", env("SMTP_USER", ""));
// Without a configured secret, a random one per process is fine: tokens only
// need to survive the few minutes someone spends typing.
const TOKEN_SECRET = env("TOKEN_SECRET", "") || randomBytes(32).toString("hex");

const TOKEN_MIN_AGE_MS = 3_000; // faster than a human can fill the form
const TOKEN_MAX_AGE_MS = 60 * 60_000;
const MAX_BODY_BYTES = 16 * 1024;
const MAX_LINKS = 3;

const LIMITS = {
  perIpWindow: { max: 3, ms: 10 * 60_000 },
  perIpDay: { max: 10, ms: 24 * 60 * 60_000 },
  // Hard ceiling on what can reach the inbox, whatever the source.
  globalDay: { max: Number(env("DAILY_CAP", "50")), ms: 24 * 60 * 60_000 },
};

const transporter = nodemailer.createTransport({
  host: env("SMTP_HOST", ""),
  port: Number(env("SMTP_PORT", "587")),
  secure: env("SMTP_SECURE", "false") === "true",
  // With secure=false, insist on the STARTTLS upgrade instead of silently
  // falling back to plaintext (which would expose the SMTP password).
  requireTLS: true,
  auth: env("SMTP_USER", "")
    ? { user: env("SMTP_USER"), pass: env("SMTP_PASS", "") }
    : undefined,
});

// ---- form tokens -----------------------------------------------------------

const sign = (payload) =>
  createHmac("sha256", TOKEN_SECRET).update(payload).digest("base64url");

function issueToken() {
  const payload = `${randomBytes(12).toString("base64url")}.${Date.now()}`;
  return `${payload}.${sign(payload)}`;
}

const usedTokens = new Map(); // token id -> expiry

function consumeToken(token) {
  if (typeof token !== "string") return "invalid";
  const [id, issued, sig] = token.split(".");
  if (!id || !issued || !sig) return "invalid";

  const expected = Buffer.from(sign(`${id}.${issued}`));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) {
    return "invalid";
  }

  const age = Date.now() - Number(issued);
  if (!(age >= 0) || age > TOKEN_MAX_AGE_MS) return "expired";
  if (age < TOKEN_MIN_AGE_MS) return "too-fast";
  if (usedTokens.has(id)) return "invalid";

  usedTokens.set(id, Number(issued) + TOKEN_MAX_AGE_MS);
  return "ok";
}

// ---- rate limiting ---------------------------------------------------------

const hits = new Map(); // key -> timestamps

function recentHits(key, windowMs) {
  const cutoff = Date.now() - windowMs;
  const list = (hits.get(key) ?? []).filter((t) => t > cutoff);
  hits.set(key, list);
  return list;
}

function isLimited(ip) {
  return (
    recentHits(`ip:${ip}`, LIMITS.perIpWindow.ms).length >= LIMITS.perIpWindow.max ||
    recentHits(`ipday:${ip}`, LIMITS.perIpDay.ms).length >= LIMITS.perIpDay.max ||
    recentHits("global", LIMITS.globalDay.ms).length >= LIMITS.globalDay.max
  );
}

function recordHit(ip) {
  const now = Date.now();
  for (const key of [`ip:${ip}`, `ipday:${ip}`, "global"]) {
    hits.set(key, [...(hits.get(key) ?? []), now]);
  }
}

setInterval(() => {
  const now = Date.now();
  for (const [id, expiry] of usedTokens) if (expiry < now) usedTokens.delete(id);
  for (const key of hits.keys()) recentHits(key, LIMITS.perIpDay.ms);
  for (const [key, list] of hits) if (list.length === 0) hits.delete(key);
}, 10 * 60_000).unref();

// ---- validation ------------------------------------------------------------

const EMAIL_RE = /^[^\s@<>()"',;:]+@[^\s@<>()"',;:]+\.[^\s@<>()"',;:]{2,}$/;

function validate(body) {
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const errors = {};

  // CR/LF would let someone smuggle extra mail headers through name/email.
  if (!name || name.length > 100 || /[\r\n]/.test(name)) errors.name = "invalid";
  if (email.length > 254 || !EMAIL_RE.test(email)) errors.email = "invalid";
  if (message.length < 10 || message.length > 5000) errors.message = "length";
  else if ((message.match(/https?:\/\/|www\./gi) ?? []).length > MAX_LINKS) {
    errors.message = "links";
  }

  return { name, email, message, errors };
}

// ---- http ------------------------------------------------------------------

function send(res, status, data) {
  res.writeHead(status, {
    "content-type": "application/json",
    "cache-control": "no-store",
  });
  res.end(JSON.stringify(data));
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(new Error("too-large"));
        req.destroy();
      } else chunks.push(chunk);
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
      } catch {
        reject(new Error("bad-json"));
      }
    });
    req.on("error", reject);
  });
}

// nginx in the web container sets X-Real-IP after resolving the real client
// address from the reverse proxy in front of it (see nginx.conf).
const clientIp = (req) => req.headers["x-real-ip"] || req.socket.remoteAddress || "unknown";

async function handleSubmit(req, res) {
  if (!String(req.headers["content-type"]).startsWith("application/json")) {
    return send(res, 415, { error: "invalid" });
  }

  let body;
  try {
    body = await readJson(req);
  } catch {
    return send(res, 400, { error: "invalid" });
  }
  if (typeof body !== "object" || body === null) return send(res, 400, { error: "invalid" });

  const ip = clientIp(req);
  if (isLimited(ip)) return send(res, 429, { error: "rate-limited" });

  const tokenState = consumeToken(body.token);
  if (tokenState !== "ok") return send(res, 400, { error: tokenState });

  // Honeypot: a field hidden from people. Bots that fill it get a fake
  // success so they have no signal to adapt to.
  if (typeof body.website === "string" && body.website !== "") {
    recordHit(ip);
    return send(res, 200, { ok: true });
  }

  const { name, email, message, errors } = validate(body);
  if (Object.keys(errors).length > 0) return send(res, 422, { error: "fields", fields: errors });

  recordHit(ip);
  try {
    await transporter.sendMail({
      from: { name: "massb.dev contact", address: MAIL_FROM },
      to: CONTACT_TO,
      replyTo: { name, address: email },
      subject: `[massb.dev] Message from ${name}`,
      text: `${message}\n\n--\n${name} <${email}>\nSent from the massb.dev contact form (${ip})`,
    });
  } catch (err) {
    console.error("sendMail failed:", err.message);
    return send(res, 502, { error: "mail" });
  }
  send(res, 200, { ok: true });
}

createServer((req, res) => {
  const path = (req.url ?? "").split("?")[0];
  if (req.method === "GET" && path === "/api/contact/token") {
    return send(res, 200, { token: issueToken() });
  }
  if (req.method === "POST" && path === "/api/contact") {
    return handleSubmit(req, res).catch((err) => {
      console.error(err);
      send(res, 500, { error: "server" });
    });
  }
  if (req.method === "GET" && path === "/healthz") return send(res, 200, { ok: true });
  send(res, 404, { error: "not-found" });
}).listen(PORT, () => {
  if (!env("SMTP_HOST", "")) console.warn("SMTP_HOST is not set — messages will fail to send.");
  console.log(`contact-api listening on :${PORT}`);
});
