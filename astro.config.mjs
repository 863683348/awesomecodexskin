// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Static output → portable: deploy to Cloudflare Pages, Vercel, Netlify, or any static host (no adapter required).
export default defineConfig({
  site: 'https://awesomecodexskin.com',
  output: 'static',
  // Always emit trailing slashes so sitemap URLs, canonical links and <a href>
  // all share the same URL shape (avoids canonical/sitemap conflicts).
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // One consolidated sitemap at /sitemap.xml (the conventional root path)
      // instead of the default /sitemap-index.xml + /sitemap-0.xml split.
      // Google, Bing and Yandex all look for /sitemap.xml first.
      entryLimit: 50000,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
