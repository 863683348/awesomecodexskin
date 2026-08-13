# Page Design Prompts — Codex Skin Index

> **For frontend (Astro 6 + Tailwind v4 `@theme` + Lucide).** Each page is a build-ready brief.
> All colors reference `var(--token)` from `design-tokens.css`. **No raw hex except `#fff`/`#000`.**
> Icons = **Lucide** (`@lucide/astro`), sizes **16 / 20 / 24px**, never emoji.
> Register: Brand (site-as-product portal) + Product discipline (tool-like, dense, honest).
> Axes: `DESIGN_VARIANCE=5` · `MOTION_INTENSITY=4` · `VISUAL_DENSITY=6` · default theme **dark**.

---

## Global chrome (applies to every page)

- **Top bar** (sticky, `--surface`, `--border` bottom hairline): wordmark (inline SVG text mark, NOT an icon) + nav `Skins / Pets↗ / Skin Generator↗ / Categories / Submit` + theme toggle (Lucide `sun`/`moon`, 16px) + `Submit` button (`--accent`).
- **Footer** (all pages): 8-category index links, sister-site cross-links (Pets / Skin Generator — traffic loop), RSS (Lucide `rss` 16px), GitHub backlink → `awesome-codex-skin-projects` (Lucide `github` 16px, `rel="nofollow noopener"`), `EN`. Domain `awesomecodexskin.com`.
- **Container**: `.container { max-width: var(--container-max); margin-inline: auto; padding-inline: var(--space-4); }`
- **Theme switch**: toggles `data-theme` on `<html>`, persists `localStorage`, no page reload.
- **Accent budget**: ≤2 visible `--accent` uses per viewport (logo + one live CTA/active chip). Semantic colors only for status.

---

## 1. Home `/`

**Layout (asymmetric, NOT centered template):**
- Two-column Hero on `≥lg`: left ~55% / right ~45%. Single column on `<lg`.
- Left column (left-aligned): `h1` (display, `-0.02em`, ≤40px) with concrete value, e.g. *"A neutral index of Codex skins, pets & workspace mods — copy one prompt, reskin your workspace."* — **no "Welcome to"**. One-line subcopy (`--muted`, text-base). Inline search box (Lucide `search` 16px, `--border`, focus → `--focus-ring`) + primary CTA `Browse all skins` (`--accent` bg) + secondary `Submit a skin` (ghost / `--border`).
- Right column: **real skin preview strip** — 3–4 `16:9` thumbnails pulled from the `skins` collection (see §"Real preview sourcing" below). Labeled `FEATURED` (ALL-CAPS, `tracking-caps 0.08em`, `--meta`). First screen shows real content, not abstract art.
- Below: **sticky filter/sort bar** (`--surface`, sticky top under navbar): category chips (8), Dark/Light toggle (Lucide `moon`/`sun`), Sort (`newest` / `popular` — Lucide `arrow-down-up` 16px). Active chip uses `--accent` text + `--accent` 1px ring.
- **Gallery grid** (`gap: var(--space-6)`, `padding: var(--space-4)` cards): skin cards (see `components.md` → gallery card).
- **SPONSORED / FEATURED** row: visually distinct ( `--surface-warm` bg + small `sponsored` label, Lucide `badge`/custom 16px) — honest, not deceptive, separated from organic grid.
- **Submit CTA band**: `--surface-warm` block, heading + `Submit your skin` button.
- Footer.

**Token use:** bg `--bg`, cards `--surface`, hover border `--accent`, labels `--meta`, CTA `--accent`/`--accent-on`.
**Responsive:** `<lg` → single column, preview strip becomes horizontal scroll of 16:9 thumbs; sticky bar collapses to a `filter` (Lucide, 20px) drawer trigger.
**P0 compliance:**
- [PASS] No emoji (Lucide throughout).
- [PASS] No purple→pink gradient (chrome + single teal only).
- [PASS] No "Welcome to"/Lorem — copy is concrete.
- [PASS] Hero left-aligned asymmetric + first screen = real previews.
- [RISK] Risk: if `skins` collection has <3 entries at build, render a labeled `--surface-warm` placeholder block ("Previews coming as the index fills") — **never** an emoji or abstract gradient.

---

## 2. Browse list `/skins`

**Layout:**
- Page header: `h1` "All skins" + result count ("`N` skins" in `--muted`, text-sm).
- `≥lg`: left **facet sidebar** (`--surface`, `--border` right hairline, sticky), main = gallery grid + pagination.
- Facets: **Category** (8 checkboxes w/ Lucide `check` 16px when active), **Mood** (text input/chips), **Color** (native `<input type="color">` swatch + hex), **Platform** (Codex Desktop / Codex CLI — Lucide `monitor`/`terminal` 16px), **Sort**.
- Main: gallery grid (same card as home), result count sticky above grid, pagination (`--border` pills, active = `--accent`).
- **Empty state** (see `components.md`): "No skins match — clear filters / submit the first" + `Clear filters` (`--accent`) + `Submit a skin` buttons. **No emoji.**

**Token use:** sidebar `--surface`, active facet `--accent`, dividers `--border-soft`.
**Responsive:** `<lg` → sidebar becomes a top `Filter` (Lucide 20px) drawer/sheet; grid 1–2 cols.
**P0 compliance:** [RISK] Risk — facet icons + empty-state icon must be Lucide, not emoji. Active-filter contrasts must meet 4.5:1 (use `--accent-on` on filled chips).

---

## 3. Category `/skins/category/:slug`

- Identical structure to `/skins`, pre-filtered by `:slug` (one of 8 categories). Header shows category name (`h1`) + count + a one-line plain-English description of the category (from taxonomy, no fluff).
- Sidebar facets preset: that category checked; user can still add Mood/Color/Platform.
- Same empty/loading/pagination states.

**Token use / Responsive / P0:** same as `/skins`. Category `:slug` maps to 8 canonical slugs (dark-midnight, light-airy, anime-pop, neon-cyberpunk, nature-earthy, retro-vintage, pastel-soft, mono-terminal).

---

## 4. Skin detail `/skins/:slug`

**Layout:**
- **Large preview** (`--surface`, `--radius-lg`, `aspect-ratio: 16/9`) — full workspace screenshot. Thumbnail strip below (light/dark variants, detail crops) — click swaps main image (Lucide `image` 16px on thumb if missing → labeled "Source may have changed" placeholder, **no emoji**).
- Header block: title (`h1`, display), author (Lucide `user` 16px + name), description (`--fg-2`), tag pills (category/mood — `--border`, text `--muted`), stats (installs Lucide `download` 16px, likes Lucide `heart` 16px, updated date — `--meta`).
- **Install block** (`--surface`, `--radius-md`, mono font): shows copy-paste prompt or `theme.json`. `Copy` button (Lucide `copy` 20px) → on success swaps to Lucide `check` + "Copied" text (`--success`), reverts after ~2s. **No gradient text.**
- **Compatible with**: Codex Desktop / Codex CLI badges (Lucide `monitor`/`terminal` 16px).
- **Related skins**: same category / mood — 3–4 mini cards (reuse gallery card, compact).
- **Report / suggest fix** link (Lucide `flag` 16px) → opens `/submit` prefilled or mailto.

**Token use:** preview bg `--surface`, code block `--surface-warm` + `--font-mono`, install button `--accent`.
**Responsive:** `<lg` → preview full-width, thumbnails horizontal scroll, install block stacks above fold.
**P0 compliance:** [RISK] Risk — copy feedback must use Lucide `check`, not [PASS]. Prompt text must be real (from entry frontmatter), never Lorem.

---

## 5. FAQ / Tutorial `/faq`

**Layout:**
- `h1` "FAQ & install help" (no "Welcome to").
- **Safety boundary** callout (`--surface-warm`, `--border`, Lucide `shield-check` 24px): plain-English security notes (what a skin can/can't do, verify sources, macOS quarantine note).
- Accordion / `<details>` Q&A list (Lucide `chevron-down` 16px), real questions from PRD (how to install, restore default, CLI vs Desktop, fix broken preview). Honest, specific answers.
- **HowTo JSON-LD** injected for install steps (structured data, invisible to UI but SEO).
- Link out to `/install` and `/tutorial` for long-form.

**Token use:** callout `--surface-warm`, questions `--fg`, dividers `--border-soft`.
**Responsive:** single column, details full width.
**P0 compliance:** [PASS] Real Q&A, no placeholder. [RISK] Keep tone specific; avoid marketing fluff words ("seamless/unleash").

---

## 6. Submit `/submit`

**Layout:**
- `h1` "Submit a skin" + one-line "Get your skin indexed and linked from the GitHub repo."
- Two-column `≥lg`: **form** (left ~60%) + **live preview panel** (right ~40%, sticky).
- Form fields (all with visible `<label>`): Name, Author, Category (select, 8), Mood, Color (swatch + hex), Preview image URL, Prompt or theme.json (textarea, `--font-mono`), Source link, "Paid inclusion" checkbox (pre-reserved field). Honeypot `botcheck` hidden field (Web3Forms).
- **Live preview**: as fields fill, render a gallery-card preview in real time (reuse card component) — proves the listing before submit.
- Submit → **pending-review success state** (Lucide `check-circle` 24px, `--success`, "Thanks — your skin is in the review queue").
- Client validation: required fields, URL format, 1–64 char search-safe name.

**Token use:** inputs `--surface` + `--border`, focus `--focus-ring`, preview panel `--surface-warm`, submit `--accent`.
**Responsive:** `<lg` → stack, preview panel below form (non-sticky).
**P0 compliance:** [RISK] Risk — success/error icons Lucide only; error text near field (not top-only); never emoji in validation.

---

## 7. Theme previewer `/tools/theme-preview`  (P1 — build if slack in P0)

**Layout:**
- `h1` "Theme previewer" + subcopy "Paste a `theme.json` to preview how it reskins Codex."
- Left: textarea (`--font-mono`) to paste JSON; `Render` button (`--accent`).
- Right: sandboxed `<iframe sandbox>` rendering a mock Codex workspace tinted by the parsed theme (bg/text/accent from JSON). Invalid JSON → inline error (Lucide `alert-triangle` 16px, `--warn`).
- Read-only; no persistence required.

**Token use:** editor `--surface`, iframe frame `--border`, button `--accent`.
**Responsive:** stack `<lg`.
**P0 compliance:** [PASS] chrome neutral + single teal; Lucide icons; no gradient. [RISK] Do not let the preview itself emit purple→pink gradients (that's user content, but the *chrome* stays on-token).

---

## 8. Prompt generator `/tools/prompt-generator`  (P1 — build if slack in P0)

**Layout:**
- `h1` "Prompt generator" + subcopy "Build a copy-paste reskin prompt from your preferences."
- Inputs: Category (8), Mood, Color (swatch), Platform. Output: assembled prompt string in a `--font-mono` block + `Copy` (Lucide `copy` 20px → `check`/`Copied`).
- Pure client-side string templating; no backend.

**Token use:** same as install block on detail page.
**Responsive:** stack `<lg`.
**P0 compliance:** [PASS] Lucide copy feedback; concrete output, no Lorem.

---

## 9. Install / Tutorial `/install` (or `/tutorial`)

**Layout:**
- `h1` "Install a skin" (or "Tutorials").
- **3-step How-it-works** (Lucide `1`/`2`/`3` numeric or `download`/`clipboard`/`monitor` 24px, NOT emoji): ① Pick a skin ② Copy the prompt ③ Paste in Codex Desktop/CLI.
- **Dual-platform steps**: tabs/sections for **Codex Desktop** (macOS Apple Silicon / Windows) and **Codex CLI**, each with exact commands in `--font-mono` blocks + `Copy`.
- **Troubleshooting / recovery**: restore default, fix "Source may have changed", quarantine on macOS — honest, specific.
- Reuses FAQ safety callout component.

**Token use:** step icons `--accent` (≤2 on screen), code `--surface-warm` + `--font-mono`, tabs active `--accent`.
**Responsive:** steps stack `<lg`; platform sections become tabs on mobile.
**P0 compliance:** [PASS] Real steps + commands; HowTo JSON-LD; no "Welcome to".

---

## Real preview sourcing (where frontend finds first-screen skins)

The Hero's "real skin preview" must come from **real data**, not stock art:

1. **Primary source = the `skins` Content Collection** (`src/content/skins/*.md`, Zod v4 frontmatter per Architect). Each entry carries `preview` / `thumbnail` image fields (remote URL or `/public` asset). Frontend logic for the Hero right column:
   - Query collection sorted by `featured` desc then `popularity` desc.
   - Take the first **3–4** entries that have a valid, non-empty `preview` image.
   - Render as 16:9 thumbnails (lazy-loaded, `srcset` if available).
2. **Repo track feeds the collection**: PM/Architect populate 20–30 real skins (incl. screenshots) in `awesome-codex-skin-projects`; those screenshots are the canonical preview assets. Until then, use the collection's own `preview` fields.
3. **Fallback (build-time, <3 valid previews):** render a `--surface-warm` labeled placeholder block — "Previews populate as the index grows" — with a `Submit your skin` button. **Never** an emoji, gradient blob, or 3D abstract shape.
4. **Image failure at runtime:** `<img onerror>` → swap to a `--surface` placeholder with Lucide `image-off` 24px + "Source may have changed" (`--meta`). This satisfies Spec §10 error-state requirement.

> Hand-off note for frontend: do NOT hardcode preview URLs in the Hero. Bind to the collection query so the index stays the single source of truth (Spec §6 / §13 dual-track loop).
