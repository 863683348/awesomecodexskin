---
title: "How to Change the Theme in Codex CLI: /theme & Terminal Palettes"
description: "Step-by-step guide to changing the theme in Codex CLI — the /theme command, installing syntax palettes like Tokyo Night and Monokai Stone, and matching your terminal."
pubDate: 2026-08-19
updatedDate: 2026-08-19
tags: ["cli", "themes", "how-to", "terminal"]
category: guide
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
---

Changing the theme in Codex CLI is a different process from Codex Desktop. Instead of visual chrome, a Codex CLI theme swaps the **terminal color palette** — background, foreground, and syntax colors — so your prompt, autocompletions and output stay readable in the shell.

Here is the complete workflow, from the one-command `/theme` switcher to installing brand-new palettes.

## The fastest way: /theme

Codex CLI ships a built-in theme command. Open a prompt and type:

```bash
/theme
```

This lists every theme currently installed. Press the arrow keys (or type the name) to apply one instantly — no restart required. If you installed a syntax theme like Tokyo Night, it appears in this list under its exact name:

```bash
/theme Tokyo Night
```

## Install a new palette first

`/theme` only shows themes you have installed. Syntax palettes (Tokyo Night, Monokai Stone, Solarized) install from a script that ports the palette into Codex CLI's theme directory:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# then list and apply:
/theme
```

The Bearded Theme Ports repo carries 50+ variants — Solarized, Tokyo Night, Monokai Stone and more — so you can test several palettes in seconds.

## Use a theme manager for rollback and terminal sync

If you change themes often, a CLI manager removes the guesswork:

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go CLI that can **validate, preview, apply, roll back, and export** a matching palette to your terminal profile. Apply with `codex-theme apply <name>`; switch back with one command.
- **Codepilot** (`charzhu/codepilot`) — a Codex CLI distribution with a built-in TUI:

```bash
npm i -g @charzhu/codepilot
# run /skin inside the TUI to pick one of 16 built-in skins
```

## Match your terminal and editor

A palette looks best when terminal, CLI and editor share it. With Codex Themes CLI you export the same colors to your terminal profile, so the shell and Codex CLI match after one apply. Pair it with a ported editor theme (e.g. Tokyo Night in VS Code) for a consistent workspace.

## Quick reference: popular CLI palettes

| Skin | Style | Apply |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | Classic syntax palette | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | Dark blue, low glare | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | Iconic retro palette | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | Warm-dark terminal identity | `codex-theme apply amber-nocturne-cli` |

## Troubleshooting

- **Theme doesn't appear in `/theme`** — run the install script first, then reopen the prompt.
- **Colors look wrong after switching** — restart Codex CLI; some ports cache colors at startup.
- **Want the same palette in the shell** — use Codex Themes CLI's export to write the palette to your terminal profile.

Browse all [Mono & Terminal skins](/skins/category/mono-terminal/), or read the [full CLI themes guide](/blog/codex-cli-themes-guide/) for the complete picture.
