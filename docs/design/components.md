# Core Components — Token Spec & States

> Build-ready component contracts. All colors via `var(--token)`; icons = Lucide (16/20/24px); no emoji; no purple→pink gradient; focus always visible.

---

## 1. Gallery card (skin card)

**Used on:** Home, `/skins`, `/skins/category/:slug`, Related on detail.

**Structure:**
- `<article>` `background: var(--surface)`, `border: 1px solid var(--border)`, `border-radius: var(--radius-md)`, `padding: var(--space-4)`, `overflow: hidden`.
- Thumbnail: `aspect-ratio: 16/9`, `object-fit: cover`, `background: var(--surface-warm)` (while loading). Lazy + `srcset`.
- Body: title (`--fg`, text-lg, weight emphasize 510), one-line description (`--muted`, text-sm, truncate 1 line), tag pills (category/mood: `border: 1px solid var(--border)`, `color: var(--muted)`, `border-radius: var(--radius-pill)`, text-xs), meta row: author (Lucide `user` 16px + `--meta`), installs (Lucide `download` 16px + `--meta`).
- Hover affordance: border → `var(--accent)` + `translateY(-2px)` over `var(--motion-fast)`; **no shadow growth**.
- Hover overlay (optional, `≥lg`): `Copy prompt` (Lucide `copy` 20px) + `View` (Lucide `arrow-up-right` 20px) buttons appearing at bottom of thumb.

**States:**
| State | Treatment |
|-------|-----------|
| Default | as above |
| Hover | border `--accent`, translateY(-2px) |
| Focus (keyboard) | `box-shadow: var(--focus-ring)` on the card link |
| Loading | skeleton: `--surface-warm` blocks + shimmer (Lucide-free SVG shimmer, NOT emoji) |
| Error (img fail) | `--surface` placeholder + Lucide `image-off` 24px + "Source may have changed" (`--meta`) |
| Empty grid | see Empty state component |

**Token budget:** card uses 0 `--accent` at rest; accent appears only on hover/active → stays within ≤2/viewport.

---

## 2. Filter bar (sticky)

**Used on:** Home (below Hero), `/skins`, `/skins/category/:slug`.

- Container: `position: sticky; top: <navbar-height>`, `background: var(--surface)`, `border-bottom: 1px solid var(--border)`, `z-index` above grid.
- Category chips: `border-radius: var(--radius-pill)`, `border: 1px solid var(--border)`, `color: var(--muted)`, text-sm. **Active** → `color: var(--accent)`, `border-color: var(--accent)`, subtle `box-shadow: 0 0 0 1px var(--accent)` (ring, not fill) — keeps accent budget low.
- Dark/Light toggle: Lucide `moon`/`sun` 16px.
- Sort: Lucide `arrow-down-up` 16px + label.
- `<lg`: collapses to a `Filter` button (Lucide `list-filter` 20px) opening a bottom sheet/drawer with the same facets.

**States:** Default / Active (one chip) / Multiple-active (AND logic, all active chips show `--accent` ring) / Disabled (when no results → bar stays, grid shows empty state).

---

## 3. Copy button

**Used on:** Detail install block, Prompt generator, Install tutorial, Theme previewer (render).

- `<button>`: Lucide `copy` 20px + label "Copy" (text-sm). `background: var(--surface)`, `border: 1px solid var(--border)`, `border-radius: var(--radius-sm)`, `color: var(--fg)`.
- Hover: `border-color: var(--accent)`, text `var(--accent)`.
- **Success:** swap icon → Lucide `check` 20px, label → "Copied", text + icon `var(--success)`. Revert after ~2000ms (`var(--motion-base)`).
- Clipboard via `navigator.clipboard.writeText`; fallback to `execCommand` for non-secure contexts.
- `aria-live="polite"` announces "Copied" for screen readers.

**States:** Default / Hover / Focus (`--focus-ring`) / Active (`:active` bg `var(--surface-warm)`) / Success (`--success`).

---

## 4. Install block

**Used on:** Detail `/skins/:slug`.

- Wrapper: `background: var(--surface-warm)`, `border: 1px solid var(--border)`, `border-radius: var(--radius-md)`, `padding: var(--space-4)`.
- Code area: `<pre>` + `<code>` with `font-family: var(--font-mono)`, `color: var(--fg)`, `font-size: text-sm`, horizontal scroll if long. Preserve whitespace.
- Header row: label "Install prompt" (`--meta`, text-xs, `tracking-caps 0.08em`) + Copy button (see above, right-aligned).
- Optional: tab switch between "Prompt" and "theme.json" (Lucide `file-code` 16px). Active tab underline `var(--accent)`.

**States:** Populated (code shown) / Loading (skeleton mono lines) / Error (if prompt missing → "No prompt provided — see source link" with Lucide `link` 16px).

---

## 5. Empty state

**Used on:** `/skins` & category (no matches), submit queue empty, search zero-results.

- Centered block within content area: Lucide icon 24px (`search-x` for no-results / `package-open` for empty index) in `--muted`, `margin-bottom: var(--space-4)`.
- Heading (`--fg`, text-xl, weight announce 600): e.g. "No skins match".
- Subcopy (`--muted`, text-base): exactly — *"No skins match — clear filters / submit the first"* (Spec §10). For empty index: *"The index is warming up — submit the first skin."*
- Actions: `Clear filters` (`--accent` button) + `Submit a skin` (ghost). **No emoji ever.**

**States:** Default (visible) / With-filters (show Clear) / Index-empty (show Submit primary).

---

## 6. Sponsor slot (SPONSORED / FEATURED)

**Used on:** Home featured row + optionally inline in grid.

- Distinct from organic: `background: var(--surface-warm)`, `border: 1px solid var(--border)`, small label "SPONSORED" (`--meta`, text-xs, `tracking-caps 0.08em`, Lucide `badge` 16px optional).
- Honest separation: do NOT disguise as organic card. Slightly different bg + explicit label.
- CTA / banner links out with `rel="nofollow noopener"` + sponsor UTM (Spec §9: click carries sponsor UTM).
- Static placement, clearly marked, never animated/deceptive.

**States:** Default / Hover (border `--accent`) / Focus (`--focus-ring`).

---

## Cross-cutting state matrix (every interactive surface)

| State | Required | Token/icon rule |
|-------|----------|-----------------|
| Default | [PASS] | on-token colors |
| Hover | [PASS] | border/accent shift, 150ms |
| Focus-visible | [PASS] | `box-shadow: var(--focus-ring)` — never removed |
| Active | [PASS] | `:active` bg `var(--surface-warm)` |
| Disabled | [PASS] | `opacity: 0.5`, `aria-disabled` |
| Loading | [PASS] | SVG skeleton shimmer (no emoji) |
| Error | [PASS] | `--danger` text + Lucide `alert-triangle`/`image-off` |
| Empty | [PASS] | Empty-state component (above) |
| Success | [RISK] | `--success` + Lucide `check` |

**A11y non-negotiables:** all interactive ≥44×44px touch target; icon-only buttons get `aria-label`; color never sole carrier of meaning; `prefers-reduced-motion` honored globally (see `design-tokens.css`).
