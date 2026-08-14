// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Static output → portable: deploy to Cloudflare Pages, Vercel, Netlify, or any static host (no adapter required).
export default defineConfig({
  site: 'https://awesomecodexskin.com',
  output: 'static',
  i18n: {
    // 12 locales matching public-holidays.shop. English (default) sits at the root path
    // (no /en/ prefix) so legacy URLs stay valid; every other locale gets a /<locale>/ prefix.
    locales: [
      'en', 'zh', 'ja', 'ko', 'es', 'de', 'fr', 'pt', 'it', 'ru', 'ar', 'nl',
    ],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  // Always emit trailing slashes so sitemap URLs, canonical links and <a href>
  // all share the same URL shape (avoids canonical/sitemap conflicts).
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // One consolidated sitemap at /sitemap.xml (the conventional root path)
      // instead of the default /sitemap-index.xml + /sitemap-0.xml split.
      // Google, Bing and Yandex all look for /sitemap.xml first.
      entryLimit: 50000,
      // i18n config: generate <xhtml:link rel="alternate" hreflang="..."> for each locale variant
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          zh: 'zh-CN',
          ja: 'ja-JP',
          ko: 'ko-KR',
          es: 'es-ES',
          de: 'de-DE',
          fr: 'fr-FR',
          pt: 'pt-BR',
          it: 'it-IT',
          ru: 'ru-RU',
          ar: 'ar',
          nl: 'nl-NL',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
