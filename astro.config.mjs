// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Emits a <meta> CSP on every page with hashes of Astro's own inline
  // scripts/styles, so injected scripts can't run. nginx.conf adds the
  // header-only directives (frame-ancestors etc.) on top.
  security: {
    csp: {
      styleDirective: {
        // style="" attributes (code-block highlighting, hero font) stay allowed.
        resources: ["'self'", { resource: "'unsafe-inline'", kind: "attribute" }],
      },
    },
  },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    // In dev, forward the contact form to a locally running contact-api
    // (`node contact-api/server.mjs`); in production nginx does this.
    server: {
      proxy: { '/api': 'http://localhost:3000' },
    },
  },
});
