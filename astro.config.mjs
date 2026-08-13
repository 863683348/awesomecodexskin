// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Static output → portable: deploy to Cloudflare Pages, Vercel, Netlify, or any static host (no adapter required).
export default defineConfig({
  site: 'https://awesomecodexskin.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
