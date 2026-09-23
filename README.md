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
