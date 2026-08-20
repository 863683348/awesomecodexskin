// src/lib/skin-content.ts
// Programmatic content enrichment for skin detail pages.
//
// Many community-imported skins only carry a one-line description. Instead of
// hand-editing 115 frontmatter files, we derive useful, honest copy from the
// data each skin already has (category, mood, color, platform, install format).
// Skins that DO provide `features` / `bestFor` / `faq` in frontmatter get their
// real content first; these functions are the fallback layer that guarantees
// no detail page is ever a thin one-liner.
import type { Skin } from './skins.ts';
import { categoryLabel } from './site.ts';

const CATEGORY_BLURBS: Record<string, string> = {
  'dark-midnight':
    'A dark, low-light palette designed to keep your workspace comfortable for night coding sessions.',
  'light-airy':
    'A bright, high-key surface that stays readable and unobtrusive during daytime work.',
  'anime-pop':
    'A character or pop-culture inspired palette that brings personality and energy to the UI.',
  'neon-cyberpunk':
    'A high-contrast neon palette with vivid accents for a terminal-future look.',
  'nature-earthy':
    'A calm, grounded palette drawn from forest, amber and ink-wash tones.',
  'retro-vintage':
    'A throwback palette that leans on classic terminal and early-2000s window chrome.',
  'pastel-soft':
    'A low-saturation pastel palette tuned for gentle, all-day viewing comfort.',
  'mono-terminal':
    'A terminal-first palette focused on syntax clarity and command-line workflows.',
  other: 'A community-contributed Codex skin with its own distinctive look.',
  gaming:
    'A gaming or character themed palette with bold, high-energy styling.',
};

const MOOD_TRAITS: Record<string, string[]> = {
  balanced: ['Balanced contrast for all-day use', 'Legible text on both panels and background'],
  clean: ['Uncluttered, minimal surface', 'Reduced visual noise around panels'],
  soft: ['Gentle color transitions', 'Low-contrast accents that avoid eye strain'],
  warm: ['Warm undertones for a cozy feel', 'Comfortable for long reading sessions'],
  vivid: ['High-saturation accents', 'Strong visual identity per panel'],
  vibrant: ['Bold, energetic palette', 'Accent colors that pop against the base'],
  tranquil: ['Calm, muted palette', 'Easy on the eyes during deep work'],
  solemn: ['Subdued, formal palette', 'Understated highlights'],
  serene: ['Smooth, peaceful color flow', 'Soft borders and quiet accents'],
  playful: ['Fun, expressive accents', 'Characterful details throughout'],
  mysterious: ['Shadowed, moody surfaces', 'Muted highlights with depth'],
  glowing: ['Luminous accents', 'Warm ambient glow in key areas'],
  gentle: ['Softly rounded visual weight', 'Restful, low-stimulation colors'],
  futuristic: ['Sci-fi inspired geometry', 'Cool-toned accents'],
  ethereal: ['Airy, translucent feel', 'Dreamy pastel highlights'],
  energetic: ['Lively accent palette', 'High visual energy in panels'],
  dreamy: ['Soft-focus, pastel tones', 'Gently blended surfaces'],
  nostalgic: ['Retro-inspired palette', 'Familiar, warm associations'],
  terminal: ['Terminal-first contrast', 'Syntax-friendly accent mapping'],
  spirited: ['Bold strokes of color', 'Expressive, motivated mood'],
};

export function categoryBlurb(category: string): string {
  return CATEGORY_BLURBS[category] ?? CATEGORY_BLURBS.other;
}

export function derivedFeatures(skin: Skin): string[] {
  const d = skin.data;
  const traits = MOOD_TRAITS[d.mood] ?? MOOD_TRAITS.balanced;
  const platform =
    d.platform === 'codex-cli'
      ? 'Built for Codex CLI'
      : d.platform === 'both'
        ? 'Works on Codex Desktop and CLI'
        : 'Built for Codex Desktop';
  const install =
    d.installFormat === 'tmtheme'
      ? 'Installs with a single /theme command'
      : d.installFormat === 'codedrobe-theme'
        ? 'Ships as a downloadable .codedrobe-theme file'
        : 'Applies with one copy-paste install prompt';
  return [
    `${categoryLabel(d.category)} palette in ${d.mood} mood`,
    ...traits.slice(0, 2),
    platform,
    install,
  ];
}

export function derivedBestFor(skin: Skin): string[] {
  const d = skin.data;
  const byCategory: Record<string, string[]> = {
    'dark-midnight': ['Night coding sessions', 'Reducing screen glare after dark'],
    'light-airy': ['Daytime work environments', 'Bright rooms and natural light'],
    'anime-pop': ['Fans of character aesthetics', 'Making the workspace feel personal'],
    'neon-cyberpunk': ['Cyberpunk and sci-fi fans', 'High-energy, statement desktops'],
    'nature-earthy': ['Calm, grounded work sessions', 'Nature-inspired palettes'],
    'retro-vintage': ['Classic terminal nostalgia', 'Retro-inspired setups'],
    'pastel-soft': ['Long reading sessions', 'Sensitive to high-contrast screens'],
    'mono-terminal': ['Terminal-first workflows', 'CLI-heavy development'],
    other: ['Trying something different', 'Expanding your skin collection'],
    gaming: ['Gaming-themed setups', 'Character-inspired workspaces'],
  };
  return byCategory[d.category] ?? ['Everyday coding', 'Personalizing your workspace'];
}

export function skinTitle(skin: Skin): string {
  const d = skin.data;
  const p = d.platform === 'codex-cli' ? 'CLI' : 'Desktop';
  const suffix = ` — Free ${p} Skin | Download & Install`;
  const budget = 60 - suffix.length;
  const name = d.name.trim();
  if (name.length <= budget) return `${name}${suffix}`;
  const keep = Math.max(10, budget - 1);
  return `${name.slice(0, keep).trimEnd()}…${suffix}`;
}

export function buildSkinDescription(skin: Skin): string {
  const d = skin.data;
  const platform =
    d.platform === 'both'
      ? 'Codex Desktop & CLI'
      : d.platform === 'codex-cli'
        ? 'Codex CLI'
        : 'Codex Desktop';
  const fmt =
    d.installFormat === 'tmtheme'
      ? 'a single /theme command'
      : d.installFormat === 'codedrobe-theme'
        ? 'a downloadable theme file'
        : 'a copy-paste install prompt';
  const base = d.description.trim().replace(/[.…\s]+$/, '');
  const hook = ` Free ${categoryLabel(d.category).toLowerCase()} skin for ${platform} — installs with ${fmt}, no paid license needed.`;
  const full = `${base}.${hook}`;
  return full.length > 158 ? `${full.slice(0, 155).trimEnd()}…` : full;
}

export function buildSkinFaq(skin: Skin): { q: string; a: string }[] {
  const d = skin.data;
  const fmtLabel =
    d.installFormat === 'tmtheme'
      ? 'a /theme command in Codex CLI'
      : d.installFormat === 'codedrobe-theme'
        ? 'downloading the .codedrobe-theme file'
        : 'copying the install prompt';
  const platformLabel =
    d.platform === 'both'
      ? 'both Codex Desktop and Codex CLI'
      : d.platform === 'codex-cli'
        ? 'Codex CLI'
        : 'Codex Desktop';
  return [
    {
      q: `How do I install ${d.name}?`,
      a: `Install ${d.name} by ${fmtLabel}${d.installFormat === 'prompt' ? ' and pasting it into Codex' : ''}. The exact steps depend on your theme engine — see the source link on this page for the authoritative guide.`,
    },
    {
      q: `Is ${d.name} free to use?`,
      a: `Yes — ${d.name} is a free, open-source Codex skin. You can install it without any paid license, and the source is linked on this page.`,
    },
    {
      q: `Which platforms is ${d.name} compatible with?`,
      a: `${d.name} works on ${platformLabel}.`,
    },
    {
      q: `Does ${d.name} work on macOS and Windows?`,
      a:
        d.platform === 'both'
          ? `Yes — ${d.name} works on both macOS and Windows, so you can use the same skin across machines.`
          : d.platform === 'codex-cli'
            ? `${d.name} is a Codex CLI theme, which works on macOS, Windows and Linux wherever the CLI runs.`
            : `Yes — ${d.name} is a Codex Desktop skin and works on both macOS and Windows.`,
    },
    {
      q: `How do I switch away from ${d.name} or uninstall it?`,
      a: `To switch to another skin, just apply a different one — most engines replace the active theme instantly and keep a "restore default" option. To fully uninstall, first restore the default theme, then remove the engine's files; the skin itself is just configuration and won't break Codex if left in place.`,
    },
  ];
}
