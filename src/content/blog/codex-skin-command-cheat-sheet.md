---
title: "Codex Skin Command Reference Cheat Sheet"
description: "Every codex skin command in one table: /theme, /skin, listing installed themes, switching from the terminal, and rolling back. Copy, paste, done."
pubDate: 2026-10-03
updatedDate: 2026-10-03
tags: ["commands", "cli", "tips", "cheat-sheet"]
category: tips
relatedSkins: ["monokai-stone-cli", "solarized-cli", "tokyo-night-cli", "vivid-purple-cli"]
faq:
  - q: "What are the codex skin commands?"
    a: "There are three families: /theme and /theme <Name> inside Codex CLI, /skin inside the Codepilot TUI, and the codex-theme subcommands (apply, rollback, export) from Codex Themes CLI. The install script is a one-time shell command, not a TUI command."
  - q: "How do I list installed codex skins?"
    a: "Run /theme inside Codex CLI. It prints every theme port you have installed and lets you pick one. If the list is empty, run the Bearded Theme Ports install script first, then reopen the prompt."
  - q: "Can I switch a codex skin from the terminal without opening a picker?"
    a: "Yes. /theme Tokyo Night applies the theme directly by name inside Codex CLI, and codex-theme apply <slug> does the same from a normal shell using the index slug."
  - q: "Why does /theme show nothing?"
    a: "No theme port has been installed yet. Run the install script, restart Codex CLI, and the /theme command list will populate."
---

Codex skin commands are few, but they live in three different places: the CLI, the Codepilot TUI, and a separate Go tool. This cheat sheet puts the whole set in one table so you can copy and move on.

## The command table

| Command | Where | What it does |
|---|---|---|
| `/theme` | Codex CLI | Prints the installed theme list and opens the picker |
| `/theme <Name>` | Codex CLI | Applies a theme by name, e.g. `/theme Tokyo Night` |
| `/skin` | Codepilot TUI | Picks one of the 16 built-in TUI skins |
| `codex-theme apply <slug>` | Codex Themes CLI | Applies a skin using its index slug |
| `codex-theme rollback` | Codex Themes CLI | Undoes the last apply |
| `codex-theme export` | Codex Themes CLI | Writes the same palette to your terminal profile |
| Bearded Theme Ports install script | shell | One-time install that makes `/theme` useful |

Install command, once per machine:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
```

## How to list installed codex skins

1. Open Codex CLI and run `/theme`.
2. The `/theme` command list shows every port currently installed — nothing more, nothing less.
3. If it is empty, run the install script above, close the prompt, and open it again. Ports are read at startup.

Codex Themes CLI adds a preview step before you commit: `codex-theme preview <slug>` renders the palette without writing it, which is the safer order when you are testing something like [Tokyo Night CLI](/skins/tokyo-night-cli/) against a light terminal.

## Switch a codex skin from the terminal

You do not have to use the picker. Name the theme and it applies immediately:

```bash
# inside Codex CLI
/theme Monokai Stone
/theme Solarized

# from a normal shell, using the index slug
codex-theme apply amber-nocturne
```

Two things worth knowing. Some ports cache colors at startup, so if the palette looks wrong after an apply, restart Codex CLI before you assume it failed. And `codex-theme rollback` is faster than re-applying the previous theme by name when you are comparing two candidates.

## Codex skin shortcuts worth memorising

- **Name matching is forgiving.** `/theme Monokai Stone` works without quoting the space in the CLI prompt.
- **Arrow keys plus Enter** beats typing the full name when the list is short.
- **Preview, then apply.** `codex-theme preview` before `codex-theme apply` saves a restart each time.
- **Export once.** `codex-theme export` writes the same palette to your terminal profile, so the prompt and Codex stop disagreeing.
- **Rollback before experimenting.** One `codex-theme rollback` undoes a bad apply.

## When a command quietly does nothing

- **`/theme` prints nothing** — no port installed yet. Run the install script and reopen the prompt.
- **Palette looks wrong after apply** — restart Codex CLI; ports cache colors at startup.
- **`/skin` is not recognised** — it only exists inside the Codepilot TUI (`npm i -g @charzhu/codepilot`), not in stock Codex CLI.
- **Desktop does not respond to `/theme`** — CLI skins are palette-only. Desktop skins are installed differently; the [install guide](/blog/how-to-install-codex-skins/) covers both paths.
- **Two themes with the same name** — ports with identical display names collide in the picker. Apply by slug with `codex-theme apply` instead, which is unambiguous.
- **Changes vanish after an update** — a Codex update can reset the theme directory. Re-run `/theme` and reapply; if it keeps happening, keep the install script in your dotfiles so restoring takes one command.
- **The terminal outside Codex still looks different** — `/theme` only colors Codex. Run `codex-theme export` once and the surrounding prompt, selection highlight and background follow the same palette.

A useful habit: keep a note of the exact command that produced the look you settled on. Six months later, when you rebuild a machine, that one line is faster than re-reading the whole picker.

## Where to go next

The four skins referenced here are all in the [Mono & Terminal category](/skins/category/mono-terminal/): [Monokai Stone CLI](/skins/monokai-stone-cli/), [Solarized CLI](/skins/solarized-cli/), [Tokyo Night CLI](/skins/tokyo-night-cli/) and [Vivid Purple CLI](/skins/vivid-purple-cli/). If you want the reasoning behind each install format, [Codex skin file formats explained](/blog/codex-skin-file-formats-explained/) is the companion read, and the [skin index](/skins/) lists everything currently catalogued.
