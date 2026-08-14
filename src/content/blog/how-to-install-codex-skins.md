---
title: "How to Install Codex Skins (Desktop & CLI): The Complete Guide"
description: "Step-by-step guide to installing Codex Desktop and CLI skins — copy-paste prompts, theme engines like Dream Skin, CLI themes, and how to switch or uninstall. Covers macOS and Windows."
pubDate: 2026-08-14
updatedDate: 2026-08-14
tags: ["install", "guide", "desktop", "cli", "themes"]
category: guide
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
---

Codex skins let you reskin OpenAI Codex Desktop and Codex CLI so the workspace matches your taste — a dark low-light palette for night sessions, a pastel surface for daytime, or a neon look just for fun.

This guide covers every way to install a Codex skin, from the one-copy install prompt to CLI theme managers.

## The short version

Most skins on this index install the same way:

1. Pick a skin and open its detail page.
2. Copy the install prompt (or download the theme file, for `.codedrobe-theme` skins).
3. Paste the prompt into Codex Desktop or run the command in Codex CLI.
4. The theme engine applies the palette immediately — no restart needed on most engines.

That's it. Skins are configuration, not code, so switching is fast and reversible.

## Method 1: Copy-paste install prompt (fastest)

Most Codex skins — especially engine presets from [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin), the open-source injection engine — install from a single natural-language prompt.

On the detail page of any skin, the **Install prompt** box contains a ready-to-paste instruction like:

```text
Codex, apply the 'Clear Glass' light theme — a clean glassy low-distraction surface for my workspace.
```

Copy it, open Codex, and paste. The engine reads the prompt and applies the palette, borders and accent colors defined in the theme.

> **Tip:** if the prompt applies a preset, the engine stores it so you can switch back to the default later with one click.

## Method 2: Download a theme file (.codedrobe-theme)

Some skins ship as a downloadable `.codedrobe-theme` file. For these:

1. Click **Download .codedrobe-theme** on the skin page.
2. Save the file anywhere convenient.
3. Open it from Codex Desktop — supported engines import the theme automatically.

This method is common on galleries like codexskins.org that host ready-made theme files.

## Method 3: Install a CLI theme with a command

Codex CLI themes use a different install path. Skins with the `tmtheme` install format (for example the Bearded Theme Ports) install with one command:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# then in Codex CLI run:
/theme Tokyo Night
```

Tools like [Codex Themes CLI](https://github.com/ychampion/codex-themes) and [Codepilot](https://github.com/charzhu/codepilot) manage CLI themes for you — validate, preview, apply, roll back, and export matching terminal palettes.

## Which engines support skins?

| Engine | Platforms | Install style |
|---|---|---|
| Codex Dream Skin | macOS, Windows | Agent prompt / preset |
| Codex Skin Manager | macOS, Windows | Built-in manager |
| Codex Themes (desktop) | macOS | .codextheme import |
| ReTheme | macOS, Windows | Signed community themes |
| Codex Themes CLI | Cross-platform | CLI `/theme` |
| Codepilot | Cross-platform (npm) | Built-in TUI `/skin` |

## How to switch or revert a skin

- **Preset engines (Dream Skin etc.):** the engine keeps the default preset — usually a "restore default" button returns your original look.
- **CLI:** `/theme` lists installed themes; re-run the command with another name to switch.
- **Theme files:** re-import a previous `.codedrobe-theme` or re-run the engine's default.

## Popular skins to start with

- [Gothic Void Expedition](/skins/gothic-void-expedition/) — the engine's built-in dark default.
- [Clear Glass](/skins/clear-glass/) — a glassy light surface for daytime.
- [Monokai Stone](/skins/monokai-stone/) — the classic CLI palette.
- [Hatsune Miku](/skins/hatsune-miku/) — blue-green vocaloid energy.

Browse the [full index](/skins/) for 100+ more, or read our [tutorial](/tutorial/) for engine-level setup details.
