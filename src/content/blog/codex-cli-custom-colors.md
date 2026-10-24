---
title: "Custom Colors in Codex CLI: Edit Hex Values Directly"
description: "Change a single colour in Codex CLI without touching preset packs: where theme files live, what each colour key controls, a worked example editing a hex value, contrast checks to run before you keep it, and fixes for when nothing repaints."
pubDate: 2026-10-25
tags: [guide, cli, colors, config]
category: guide
relatedSkins: [monokai-stone-cli, solarized-cli, tokyo-night-ychampion, bearded-tokyo-night]
lang: "en"
faq:
  - q: "Do I have to edit the installed theme file directly?"
    a: "You can copy it under a new name first, which keeps the original intact. The CLI reads whatever file the theme name points at, so a renamed copy works the same way."
  - q: "Can I go back to the shipped colours?"
    a: "Delete your copy, or re-run the port script that installed the theme. Either one restores the original file with the default values."
  - q: "Will a custom colour break my other skins?"
    a: "No. Colours are read per theme file, so changing one theme leaves the rest of your library untouched."
  - q: "Does this work on Windows as well as macOS?"
    a: "The paths differ, the keys do not. Windows keeps themes under %USERPROFILE%\\.codex\\themes\\, while macOS and Linux use ~/.codex/themes/."
---

# Custom Colors in Codex CLI: Edit Hex Values Directly

Preset packs cover most of what people want, and then one colour is wrong. The comment grey reads too dim on your monitor, or the string green fights the rest of your syntax theme. Codex CLI custom colors is the answer to that specific problem: open the theme file, change one hex value, save, reload. No new engine and no reinstall. This guide covers where the CLI keeps its colour settings, what each colour key controls, a worked example that changes one value, and the contrast checks worth running before you keep the result.

## Where the CLI keeps colour settings

| Item | Path | Notes |
| --- | --- | --- |
| Installed themes | `~/.codex/themes/` | One file per theme, named after the theme |
| Active theme | `~/.codex/config.toml` | Holds the theme name and highlight flags |
| Shell wiring | `~/.zshrc` / `~/.bashrc` | Added by the installer, not by skins |
| Exported palettes | wherever you save them | Used for terminal matching later |

Themes installed from a port script land in `~/.codex/themes/` with the theme name as the file name. If you imported a preset through the desktop app instead, it never touched this directory. That is the first thing to confirm when the CLI shows a theme you never applied there.

## The colour keys that matter

Most CLI theme files expose the same small set of keys. Knowing them is most of what you need before you edit codex theme hex values.

- `background` / `foreground`: the base surface and default text. These two set the contrast floor for everything drawn on top.
- `accent`: the brand colour used for the cursor, selection and panel borders.
- `comment`: secondary text. Drop it too far and inline notes vanish on a bright panel.
- `keyword`, `string`, `function`, `number`: the syntax groups. Most themes define four to six of them.
- `error`, `warning`, `success`: diagnostic colours, and the easiest group to break because the three sit next to each other.

Any key a theme file leaves out falls back to the CLI default, so a shorter file is not a broken file.

## Changing one value: a worked example

Say the comment colour is too faint against a dark background. Open the theme file and find the line:

```toml
[colors]
comment = "#6b7280"
```

Raise it to a lighter grey and save:

```toml
[colors]
comment = "#8b95a5"
```

Then inside Codex CLI:

```
/theme Solarized
```

If that theme was already active, switch away and back once. The CLI reads the file when a theme is applied rather than watching it for changes.

## Contrast checks before you keep the change

Editing a value is quick. Living with a bad one is not. Three checks take about a minute.

- Compare the new value against `background`, not against white. A comment grey that reads well on a light theme can disappear on a dark one.
- Change one key at a time. Editing four colours together makes it impossible to tell which one caused the problem.
- Keep `error` and `warning` apart in hue. Red and amber sit close together, and readers with colour vision deficiency lose the difference.

The background on all of this is in [High-Contrast Codex Skins: Accessibility That Looks Good](/blog/high-contrast-codex-skins-accessibility/).

## When the change does not show up

- Wrong theme file. Two themes can share a base name. Check that the file you edited is the one named in `config.toml`.
- Two engines writing the same file. Running Dream Skin next to a CLI port leaves whichever wrote last in charge. See [Run Multiple Codex Skin Engines Without Conflicts](/blog/run-multiple-codex-skin-engines-without-conflicts/).
- Stale panel. Close the window and reopen it before you reinstall anything.
- Format drift. Old theme files can stop resolving after an engine update. The formats are compared in [Codex Skin File Formats Explained](/blog/codex-skin-file-formats-explained/).

## FAQ

**Do I have to edit the installed theme file directly?** You can copy it under a new name first, which keeps the original intact. The CLI reads whatever file the theme name points at.

**Can I go back to the shipped colours?** Delete your copy, or re-run the port script. Either one restores the original file.

**Will a custom colour break my other skins?** No. Colours are read per theme file, so changing one theme leaves the rest of your library alone.

**Does this work on Windows as well as macOS?** The paths differ, the keys do not. Windows keeps themes under `%USERPROFILE%\.codex\themes\`.

---

Browse the full skin index on the [awesomecodexskin home page](/), or start from the [Solarized CLI port](/skins/solarized-cli/) if you want a known-good file to copy.
