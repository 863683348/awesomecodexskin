// src/lib/site.ts — site-wide constants (no hardcoded UI chrome colors here)
export const SITE = {
  name: 'Codex Skin Index',
  domain: 'awesomecodexskin.com',
  url: 'https://awesomecodexskin.com',
  tagline:
    'A neutral index of Codex skins, pets & workspace mods — copy one prompt, reskin your workspace.',
  description:
    'Browse, compare, and reach every OpenAI Codex Desktop and CLI skin, theme engine, and gallery from one neutral index.',
};

// GitHub dual-track repo — owner of `awesome-codex-skin-projects`.
export const REPO_OWNER = '863683348';
export const REPO_NAME = 'awesome-codex-skin-projects';
export const REPO_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}`;
export const REPO_PR_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}/pull/new?template=skin-submission.yml`;

export type CategoryMeta = {
  slug: string;
  label: string;
  blurb: string;
};

export const CATEGORIES: CategoryMeta[] = [
  { slug: 'dark-midnight', label: 'Dark & Midnight', blurb: 'Near-black workspaces and low-light palettes built for night coding.' },
  { slug: 'light-airy', label: 'Light & Airy', blurb: 'Glassy, high-key surfaces that stay unobtrusive in daylight.' },
  { slug: 'anime-pop', label: 'Anime & Pop', blurb: 'Character and pop-culture skins with vivid, playful energy.' },
  { slug: 'neon-cyberpunk', label: 'Neon & Cyberpunk', blurb: 'High-contrast neon and mecha palettes for a terminal-future look.' },
  { slug: 'nature-earthy', label: 'Nature & Earthy', blurb: 'Forest, amber, and ink-wash tones for a calm, grounded workspace.' },
  { slug: 'retro-vintage', label: 'Retro & Vintage', blurb: 'Throwback palettes from Solarized to early-2000s window chrome.' },
  { slug: 'pastel-soft', label: 'Pastel & Soft', blurb: 'Low-saturation pinks and rose tones tuned for gentle, all-day use.' },
  { slug: 'mono-terminal', label: 'Mono & Terminal', blurb: 'Syntax and TUI themes for Codex CLI and terminal-first flows.' },
];

export function categoryLabel(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export type Engine = {
  name: string;
  url: string;
  note: string;
  platforms: string;
};

// 9 tools & engines from the awesome-codex-skin-projects README.
export const ENGINES: Engine[] = [
  { name: 'Codex Dream Skin', url: 'https://github.com/Fei-Away/Codex-Dream-Skin', note: 'Core open-source engine (MIT). Local CDP injection over 127.0.0.1, no app modification, one-click restore. macOS and Windows.', platforms: 'macOS, Windows' },
  { name: 'CodexPlusPlus (Codex++)', url: 'https://github.com/BigPizzaV3/CodexPlusPlus', note: 'Desktop client with a built-in skin manager and a theme market that reads community repositories.', platforms: 'macOS, Windows' },
  { name: 'Codex Skin Manager', url: 'https://github.com/hyhang915/Codex-Skin-Manager', note: 'Cross-platform manager with 14 built-in themes, a theme creator, and a Codex Skill for agent-native theme generation.', platforms: 'macOS, Windows' },
  { name: 'Codex Themes (desktop app)', url: 'https://github.com/freestylefly/codex-themes', note: 'Desktop app (theme.codexguide.ai) with a gallery, creator center, and .codextheme import/export compatible with the Dream Skin schema.', platforms: 'macOS' },
  { name: 'ReTheme', url: 'https://github.com/duxweb/ReTheme', note: 'Tauri-based desktop theme engine for Codex and ChatGPT with signed, updatable, community-driven themes.', platforms: 'macOS, Windows' },
  { name: 'Codex Themes CLI', url: 'https://github.com/ychampion/codex-themes', note: 'Go CLI theme manager for Codex CLI: validate, preview, apply, rollback, and export matching terminal palettes.', platforms: 'Cross-platform' },
  { name: 'Codepilot', url: 'https://github.com/charzhu/codepilot', note: 'A Codex CLI distribution with TUI personalization, including built-in /skin themes and terminal pets.', platforms: 'Cross-platform (npm)' },
  { name: 'Bearded Theme Ports', url: 'https://github.com/vufly/bearded-theme-ports', note: '50+ Bearded theme variants ported to Codex CLI (and many other terminals) via .tmTheme syntax themes.', platforms: 'Cross-platform' },
  { name: 'codex-background-theme', url: 'https://github.com/TonyNa-code/codex-background-theme', note: 'Drop your own PNG wallpaper into Codex Desktop with a glass UI treatment.', platforms: 'macOS' },
];
