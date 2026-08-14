---
title: "Codex CLI Themes: How to Use /theme and Terminal Skins"
description: "Everything about Codex CLI themes: installing syntax themes like Tokyo Night, Monokai Stone and Solarized, using the /theme command, and managing palettes with CLI tools."
pubDate: 2026-08-14
updatedDate: 2026-08-14
tags: ["cli", "terminal", "themes", "syntax"]
category: guide
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
---

Codex CLI doesn't use the same skin system as Codex Desktop. Instead of visual chrome, CLI themes change the **terminal color palette** — background, foreground and syntax colors — so your prompt and output stay readable in the terminal.

## The /theme command

The fastest way to use a CLI theme is the built-in `/theme` command:

```bash
# in Codex CLI:
/theme
```

This lists installed themes. Pick one to apply instantly.

## Installing a syntax theme

Syntax themes (like Monokai Stone, Tokyo Night, Solarized) install from a script that ports the palette into Codex CLI's theme directory:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# then:
/theme Tokyo Night
```

The Bearded Theme Ports repo carries 50+ Bearded variants — Solarized, Tokyo Night, Monokai Stone and more.

## Managing themes with CLI tools

Two tools make CLI theme management painless:

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go CLI: validate, preview, apply, rollback and export matching terminal palettes. Ideal if you want your terminal and Codex CLI to share a palette.
- **Codepilot** (`charzhu/codepilot`) — a Codex CLI distribution with built-in TUI personalization:

```bash
npm i -g @charzhu/codepilot
# then run /skin inside the TUI to pick a built-in theme
```

Codepilot ships 16 built-in TUI skins (background + surface colors).

## Popular CLI themes in the index

| Skin | Style | Install |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Classic syntax palette | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Iconic retro palette | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Dark blue Tokyo Night | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Warm-dark terminal identity | `codex-theme apply amber-nocturne` |

## Troubleshooting

- **`/theme` says no themes installed** — run the install script first, then reopen the prompt.
- **Palette looks wrong** — restart Codex CLI after applying; some ports cache colors at startup.
- **Want your terminal to match** — use Codex Themes CLI's export to write the same palette to your terminal profile.

Browse all [Mono & Terminal skins](/skins/category/mono-terminal/) or start with the [install guide](/blog/how-to-install-codex-skins/).
