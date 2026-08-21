# Awesome Codex Skin

A **neutral index of OpenAI Codex Desktop & CLI skins, theme engines, and galleries** —
filter by mood, color, and platform, then copy a single install prompt. Includes pets &
workspace mods, available in **12 languages**.

A curated, searchable catalog with instant filtering, per-skin copy-paste install
prompts, a live theme previewer, and a prompt generator.

Built with **Astro 6 + Tailwind CSS v4 + Lucide icons**, shipped as a static site
(Cloudflare Pages or Vercel).

## Dual-track

This repo is the **website**. The curated index / backlink source is a companion
repo: [`awesome-codex-skin-projects`](https://github.com/863683348/awesome-codex-skin-projects).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview
```

> Requires Node 22. Vite is pinned to 7 via `package.json` `overrides`
> (Astro 6 ships expecting Vite 7, not 8).

## Config

- `PUBLIC_WEB3FORMS_KEY` — Web3Forms key for the submit form. Copy
  `.env.example` to `.env` and fill it in (see `.env.example` for why the
  `PUBLIC_` prefix matters).
- Site URL is set in `astro.config.mjs` (`site: https://awesomecodexskin.com`).

## Structure

- `src/content/skins/` — skin entries (Markdown + frontmatter, Zod-validated).
- `src/components/` — UI components & client islands.
- `src/pages/` — routes (home, /skins, detail, category, faq, install, tutorial, submit, tools).
- `public/previews/` — skin preview images.

## Notes on safety

Applying a skin only injects CSS over the local `127.0.0.1` loopback — it never
touches your API key and is one-click reversible. See `/install` and `/faq` on the
live site.

## License

Index content is CC0 (see the companion repo). Site code is MIT unless noted.
