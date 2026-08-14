---
title: "Codex Skin Formats Compared: codedrobe vs codextheme vs tmtheme vs preset"
description: "Four skin formats, four engines, one ecosystem. Which format is most portable, which is dying, and how to convert between them when you need to."
pubDate: 2026-08-15
updatedDate: 2026-08-15
tags: ["formats", "ecosystem", "compatibility"]
category: compare
relatedSkins: ["monokai-stone", "solarized", "tokyo-night-ychampion", "vivid-purple-cli"]
---

The Codex skin world is young, which means formats are still settling. Right now four formats float around, and they're not all compatible. Understanding them saves you from downloading a file your engine can't read.

## The four formats

| Format | Engine family | Load mechanism | Portability |
|---|---|---|---|
| `.codedrobe-theme` | Codedrobe-style galleries (codexskins.org) | File import | Medium — a few engines read it |
| `.codextheme` | Desktop managers (Codex Themes desktop) | File import | Medium |
| `tmtheme` | CLI theme ports (bearded, terminal syntax themes) | CLI `/theme` | High — same as editor themes |
| `preset` | Prompt engines (Dream Skin) | Natural-language prompt | Low — engine-specific phrasing |

## `.codedrobe-theme` — the gallery standard

Used by galleries like codexskins.org to distribute ready-made theme files. If you see "Download .codedrobe-theme", this is what you're getting. Supported by a few desktop engines; import is usually one click.

**Good for:** getting a polished, designer-made theme without any config.
**Watch out for:** it's not universal — check that your engine reads this exact extension.

## `.codextheme` — the desktop manager format

The format used by desktop theme managers (notably Codex Themes for desktop). Structurally similar to `.codedrobe-theme`, sometimes interchangeable in practice, but engines don't always accept both.

**Good for:** desktop users with a manager installed.
**Watch out for:** naming overlap with `.codedrobe-theme` — the extensions look alike but aren't guaranteed compatible.

## `tmtheme` — the CLI workhorse

Terminal-theme format ported into Codex CLI (the Bearded ports in this index are the clearest example). This is the same format family as TextMate/editor syntax themes, so the ecosystem is huge — any tmtheme-flavored palette can find its way into Codex CLI with a port script.

**Good for:** CLI users who want the largest possible palette pool.
**Watch out for:** tmtheme files define syntax colors, not always the full UI surface — you may need extra config for panels and chrome.

## `preset` — the prompt format

Not a file at all: a natural-language description that a prompt engine like Dream Skin interprets. "A warm amber night theme, low saturation" is a preset. It lives in the engine's stored preset list.

**Good for:** speed and iteration.
**Watch out for:** zero portability. A preset only means something inside the engine that understands that phrasing.

## How to convert between formats

- **tmtheme ↔ preset:** not directly convertible — one is a spec, one is a description. Rewrite the description from the palette.
- **tmtheme → .codextheme:** often feasible with a small script, since both are structured color specs. Many CLI ports started life this way.
- **codedrobe ↔ codextheme:** sometimes drop-in; test both extensions if your engine accepts either.

The general rule: **structured formats (tmtheme, codedrobe, codextheme) are more interoperable than prose formats (preset).** If you're building a skin library you'll keep for years, favor structured formats.

## Quick FAQ

**Which format is the "official" Codex one?**
There isn't one yet. The ecosystem is deciding by usage; tmtheme-family CLI ports have the most momentum, prompt presets have the most users.

**Will one format win eventually?**
Probably a structured one — that's how editor themes converged. But prompts aren't going away; they serve the "try it fast" use case.

**What should I download for maximum compatibility?**
CLI-natural themes like [Monokai Stone](/skins/monokai-stone/) or [Solarized](/skins/solarized/) that ship as tmtheme/CLI specs — they import into the broadest set of tools. [Tokyo Night](/skins/tokyo-night-ychampion/) and [Vivid Purple (CLI)](/skins/vivid-purple-cli/) are also strong, widely-ported choices.

**How do I know which format a skin uses?**
Every skin detail page in this index lists its install format — that's the tell. Match it to your engine before downloading.

Formats are friction, not features. Pick structured formats for your permanent library, prompts for exploration, and let each skin's detail page tell you which one you're dealing with. Browse the [skin index](/skins/), or see the [engines comparison](/blog/codex-skin-engines-compared/) for the software that reads each format.
