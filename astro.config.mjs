// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
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
