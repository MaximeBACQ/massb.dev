# massb.dev

Personal portfolio site — curated projects plus a technical note on the self-hosted
homelab this site runs on. Static Astro build plus a tiny contact-form relay, no database.

## Stack

- [Astro](https://astro.build) (static output) + TypeScript + Tailwind CSS
- Fonts self-hosted via `@fontsource/*` (no external font CDN calls at runtime)
- No CMS, no database, no external cloud dependency
- `contact-api/`: small Node service that relays the contact form to email over SMTP

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
```

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Running with Docker

Multi-stage build: Node builds the static site, then nginx serves the output.

```sh
docker compose up --build
```

The site is then available at `http://localhost:8080` (override with `WEB_PORT`).
No domain is hardcoded in the image or compose file — put your own reverse proxy
(handling TLS and the public domain) in front of this container.

To build/run the image directly without compose:

```sh
docker build -t massb-dev .
docker run --rm -p 8080:80 massb-dev
```

## Contact form

The contact form posts to `/api/contact`, which nginx forwards to the `contact`
service (`contact-api/`). It sends mail through your own SMTP account:

```sh
cp .env.example .env   # fill in SMTP_HOST / SMTP_USER / SMTP_PASS / MAIL_FROM
docker compose up --build
```

Spam protection is built in (rate limits, single-use form tokens, honeypot,
validation, daily cap) — no captcha or third-party service. If the `contact`
container is down, the site still serves; only the form returns an error.

For local dev, run the relay next to `npm run dev` (Astro proxies `/api` to it):

```sh
cd contact-api && npm install && SMTP_HOST=... MAIL_FROM=... node server.mjs
```

## Security

- **CSP**: Astro emits a `<meta>` CSP with hashes of its own inline scripts
  (`security.csp` in `astro.config.mjs`); nginx adds a per-path CSP header plus
  HSTS, `nosniff`, frame, referrer and permissions policies (`nginx.conf`).
  Adding an external script, font or image origin means updating both.
- **Real client IP**: nginx trusts `X-Forwarded-For` hops from private ranges
  and Cloudflare's published ranges, so rate limits are per visitor. Update the
  Cloudflare list in `nginx.conf` if https://www.cloudflare.com/ips/ changes.
- **Containers**: the web port is published on `127.0.0.1` only (set `WEB_BIND`
  to a private IP if the reverse proxy is on another host, never `0.0.0.0`).
  Both services run read-only with all capabilities dropped except what nginx
  needs, `no-new-privileges`, and memory/pid limits.
- **Supply chain**: GitHub Actions are pinned to commit SHAs; Dependabot opens
  weekly update PRs for npm, Docker base images and actions.
