---
title: "How to Install Codex Skins on macOS: Desktop, CLI and Finder"
description: "Install Codex skins on macOS the right way: the config paths Codex actually reads, preset prompts for the desktop app, drag-and-drop .codedrobe-theme files in Finder, CLI themes via /theme, and how to get past the Gatekeeper prompt."
pubDate: 2026-10-24
tags: [guide, macos, install, cli]
category: guide
relatedSkins: [clear-glass, forest-mist, hatsune-miku, solarized]
lang: "en"
faq:
  - q: "Where does macOS store Codex skin configuration?"
    a: "Desktop presets live under ~/Library/Application Support/Codex/. CLI themes live in ~/.codex/themes/. They are separate stores, so applying a skin in one does not change the other."
  - q: "Why does macOS say the theme file is from an unidentified developer?"
    a: "Gatekeeper flags downloaded .codedrobe-theme bundles that are not notarized. Right-click the file and choose Open once, or clear the flag with xattr -d com.apple.quarantine on the file."
  - q: "Can I use the same skin for the desktop app and the CLI?"
    a: "Only if the skin ships both formats. Most character and light-airy skins are desktop presets, while the bearded ports such as Solarized are CLI /theme entries."
---

# How to Install Codex Skins on macOS: Desktop, CLI and Finder

Installing Codex skins on macOS splits into two jobs that look similar and are not. The desktop app reads engine presets and `.codedrobe-theme` bundles. The CLI reads a theme directory under `~/.codex/` and switches with a slash command. They keep separate config stores, so a skin you apply in one does nothing at all to the other. Work out which Codex you actually use before you start, because half the "skin not applying" reports on macOS come from installing in the wrong place.

## Where macOS keeps Codex configuration

| What | Path | How it is written |
| --- | --- | --- |
| Desktop presets | `~/Library/Application Support/Codex/` | Written by the engine after a preset prompt or a bundle import |
| CLI themes | `~/.codex/themes/` | Written by the installer script, selected with `/theme` |
| CLI settings | `~/.codex/config.toml` | Active theme name and highlight options |
| Downloaded bundles | `~/Downloads/` | Where Safari puts `.codedrobe-theme` files |

Paths starting with `~/Library` are hidden in Finder by default. Use Shift+Cmd+G in Finder and paste the path, or run `open ~/Library/Application\ Support/Codex/` in Terminal.

## Apply a desktop skin from a preset prompt

Most skins in this index ship as a copy-paste prompt rather than a file. Open Codex Desktop, paste the prompt from the skin page, and the engine writes the preset for you. [Clear Glass](/skins/clear-glass/) is a light-airy preset built into the Dream Skin engine:

```
Codex, apply the 'Clear Glass' light theme, a clean glassy low-distraction surface for my workspace.
```

[Forest Mist](/skins/forest-mist/) works the same way and lands in the nature-earthy group:

```
Codex, switch my workspace to the 'Forest Mist' engine preset, a misty forest theme.
```

The change takes effect on the next panel repaint. If the interface looks half-updated, close the window and reopen it rather than reinstalling, because a stale panel is the usual cause.

## Import a `.codedrobe-theme` file through Finder

1. Download the theme bundle from the skin's source page.
2. Double-click it, or drag it onto the Codex Desktop icon in the Dock.
3. If macOS refuses to open it, right-click the file, choose Open, and confirm once. Gatekeeper remembers the exception afterwards.
4. Pick the imported theme from the skin picker and apply it.

The refusal in step 3 is Gatekeeper, not a broken file. Community bundles are rarely notarized, so macOS quarantines them on download. If you prefer the terminal, `xattr -d com.apple.quarantine ~/Downloads/theme.codedrobe-theme` clears the flag without the dialog.

## Install a CLI theme on macOS

CLI themes come from port scripts, and macOS has shipped zsh as the default shell since Catalina, so the installer writes to `~/.zshrc` rather than `~/.bash_profile`. [Solarized](/skins/solarized/) is the standard example:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
```

Then inside Codex CLI:

```
/theme Solarized
```

If `/theme` returns nothing, the theme directory is missing or `~/.codex` is not on the path the CLI reads. Run `ls ~/.codex/themes/` first. An empty listing means the installer did not finish, usually because the shell restarted mid-script.

## Pair the skin with your terminal

A Codex skin that clashes with iTerm2 is distracting rather than helpful. Export the palette from the skin and import it into iTerm2 under Profiles, Colors, Color Presets, Import. The full walkthrough is in [Export a Terminal Palette From a Codex Skin](/blog/export-terminal-palette-from-codex-skin/).

## When nothing changes

- Wrong target. Desktop presets do not reach the CLI. Check which app you skinned before reinstalling.
- Two engines writing the same file. Running Dream Skin and a CLI port against one config leaves whichever wrote last in charge. See [Run Multiple Codex Skin Engines Without Conflicts](/blog/run-multiple-codex-skin-engines-without-conflicts/).
- Corrupted bundle. A `.codedrobe-theme` that fails to import is usually a zip renamed by the browser. Re-download it with curl.
- Engine version drift. After a Codex update, old presets may stop resolving. The format background is in [Codex Skin File Formats Explained](/blog/codex-skin-file-formats-explained/).

## FAQ

**Do I need Homebrew for any of this?** No. Homebrew installs the CLI itself, but skins are applied with prompts, bundle imports, or the port script.

**Will a skin survive an macOS upgrade?** Usually. `~/Library` and `~/` both survive in-place upgrades, though a migration to a new machine needs the config folder copied across.

**Is Gatekeeper a sign the skin is unsafe?** It is a sign the file is unsigned, which is every community skin. Read the install script before piping it to a shell, which is worth doing regardless of the signature.

---

Browse the full skin index on the [awesomecodexskin home page](/), or go straight to the [light and airy collection](/skins/clear-glass/) if you code in daylight.
