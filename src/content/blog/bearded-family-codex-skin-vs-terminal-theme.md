---
title: "Codex Skin vs Terminal Theme: Inside the Bearded Family"
description: "A bearded codex theme is a terminal palette repackaged for Codex CLI. Using Tokyo Night (CLI) and the other Tokyo Night ports, here's what changes when the same hex codes move from your emulator into an agent session."
pubDate: 2026-10-11
updatedDate: 2026-10-11
tags: ["bearded-theme", "terminal", "compare", "palette-family"]
category: compare
relatedSkins: ["bearded-tokyo-night", "tokyo-night-ychampion", "monokai-stone-cli", "solarized-cli"]
---

A bearded codex theme starts its life somewhere else. Bearded Theme Ports, the collection vufly maintains, carries 50+ variants of classic terminal palettes, and one of them landed in this index as [Tokyo Night (CLI)](/skins/bearded-tokyo-night/): the same #1A1B26 night blue you know from the emulator, shipped as a `.tmTheme` file and activated with `/theme Tokyo Night`. Identical hex codes. A different job once they're rendering an agent session instead of a shell prompt.

That gap is what makes the Tokyo Night family worth studying. Four entries in this index share one palette origin, and they did not arrive the same way.

## What a terminal theme controls

Your emulator reads a palette file and colors 16 ANSI slots plus foreground, background, and cursor. That's the whole surface. Tokyo Night in Windows Terminal or iTerm2 changes background to a deep blue-gray, sets accent colors for red/green/yellow/blue, and stops there.

The file stays in the emulator's own config directory. Switching terminals means finding the equivalent format again, and every emulator invented its own.

## What changes after the port to Codex

A Codex skin isn't applied by your terminal. It's read by Codex itself, so it colors everything the tool renders: prompts, diffs, tool-call output, status lines, streaming text. The emulator sitting underneath keeps whatever palette it had.

That's the practical difference. A terminal theme colors your shell. A Codex skin colors your agent, and the two can disagree badly if you set them independently. The [terminal sync guide](/blog/codex-skin-terminal-sync/) is the fix most people end up needing.

The install path also changes:

1. Run the collection's installer script (it pulls from the `bearded-theme-ports` repo).
2. Start Codex CLI.
3. Type `/theme Tokyo Night`.

No app settings dialog, no per-emulator JSON. One installer, then a slash command you can repeat to switch back and forth. If it goes sideways, the [uninstall and reset walkthrough](/blog/how-to-uninstall-reset-codex-skin/) covers cleaning up.

| | Terminal theme | Codex skin (bearded port) |
|---|---|---|
| Applies to | one emulator | Codex CLI session output |
| File format | whatever that emulator supports | `.tmTheme` |
| Installed via | app preferences or settings JSON | installer script, then `/theme` |
| Follows your dotfiles | yes | only if your theme dir syncs |
| Swappable mid-session | usually not | yes, with `/theme` |

## Four ports of one palette

The family neatly shows how theme family migration drifts. All four trace back to the same Tokyo Night design, and none of them are byte-identical:

- [Tokyo Night (CLI)](/skins/bearded-tokyo-night/) is the Bearded port: a `tmtheme` format, Codex CLI, catalogued under dark-midnight. 980 recorded installs, 188 likes, which makes it the most-used member of the family by a wide margin.
- [Tokyo Night (ychampion)](/skins/tokyo-night-ychampion/) is a desktop-side entry delivered as a prompt install rather than a theme file.
- [ychampion Tokyo Night](/skins/ychampion-tokyo-night/) comes from the Go-based Codex Themes CLI, and it bolts a branded status line onto the standard palette.
- [Tokyo Night (CLI)](/skins/tokyo-night-cli/) is a separate desktop-prompt entry that reuses the same name.

Same origin, four different install formats, four different authors' tuning choices. Contrast gets nudged. Accent handling gets reinterpreted. If you have ever swapped between two "identical" themes and felt something was off, that's why.

The [file formats explainer](/blog/codex-skin-file-formats-explained/) goes deeper on why structured theme files behave differently from prompt-based presets.

## Family ports or one-off skins

The bearded series codex approach buys you portability. Palettes like Tokyo Night, Monokai Stone, and Solarized have been ported to dozens of tools, so whatever editor or terminal you pick up next probably has an entry waiting. This index carries [Monokai Stone (CLI)](/skins/monokai-stone-cli/) at 1,500 installs and [Solarized (CLI)](/skins/solarized-cli/) at 1,340, both in the mono-terminal category, both descendants of the same migration pattern.

One-off original skins trade that for personality. A character palette like the Naraka or anime entries looks like nothing else, and if you stream or share screenshots regularly that matters more than portability. The tradeoff shows up when you switch tools and have to leave it behind.

A reasonable split: pick one family port as your daily driver, keep one distinctive skin for times when the workspace shows up on camera.

## Quick FAQ

**Do I still need the terminal theme installed?**
No. Codex reads its own. Keeping both installed is only useful if you want the surfaces to match visually, which is what the [sync guide](/blog/codex-skin-terminal-sync/) sets up.

**Why does the Bearded port look slightly different from Tokyo Night in my editor?**
Different authors re-tune accents and contrast when porting. The collection has 50+ variants for exactly this reason. Try two and keep whichever reads better at your font size.

**Can a bearded codex theme slow Codex down?**
No measurable difference. It's a palette file read at startup. The [performance notes](/blog/codex-skin-performance/) have measurements if you want the details.

**What if I'm on Codex Desktop rather than CLI?**
Check the platform tag on the skin page. The Bearded port targets `codex-cli`; the ychampion entries are desktop-oriented. The [CLI vs Desktop comparison](/blog/codex-cli-vs-desktop-skins/) explains which install routes work on each.

## Try the family yourself

Start with [Tokyo Night (CLI)](/skins/bearded-tokyo-night/) since it's the most faithful to the original, then compare it against the [ychampion variant](/skins/tokyo-night-ychampion/) to feel how much a port can drift. Every skin is catalogued on awesomecodexskin.com with its install format, palette hex, and compatible platform listed on the detail page. Browse the [full skin index](/skins/) to find other palette families, and the [install guide](/blog/how-to-install-codex-skins/) covers each method step by step.
