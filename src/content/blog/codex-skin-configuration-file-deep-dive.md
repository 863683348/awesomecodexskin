---
title: "Codex Skin Configuration File: Deep Dive"
description: "Where the codex skin config file sits on Windows, macOS and Linux, how the codex theme json structure is organized, and which edits survive the next update."
pubDate: "2026-10-19"
tags: ["codex skin config file", "codex theme json structure", "config location", "codex skin guide"]
category: "guide"
lang: "en"
relatedSkins: ["monokai-stone", "solarized", "monokai-stone-cli", "clear-glass"]
---

A **codex skin config file** is the file Codex reads before it paints a single character on screen. Most people never open it, and that is fine right up until a theme half applies or a color you changed comes back after an update. Then the question always splits the same way: where does the file sit, and what does the inside of it mean. This guide covers both, then spends a section on the part that actually costs you an afternoon, which is knowing which edits the next update overwrites.

## Where the config file lives on each platform

The **config location** is not the same across platforms, and the desktop app and the CLI keep separate files. Guessing at it is how people end up editing a stale copy and then concluding the app ignored them.

| Platform | Engine | Typical config location |
| --- | --- | --- |
| Windows | Codex Desktop | `%APPDATA%\Codex\themes.json` |
| Windows | Codex CLI | `%USERPROFILE%\.codex\config.json` |
| macOS | Codex Desktop | `~/Library/Application Support/Codex/themes.json` |
| macOS | Codex CLI | `~/.codex/config.json` |
| Linux | Codex Desktop | `~/.config/Codex/themes.json` |
| Linux | Codex CLI | `~/.codex/config.json` |

Two things worth checking before you edit anything. First, run the engine's own path command if it has one, because a portable or sandboxed install relocates the whole directory. Second, look for a project-level override in the repo you are working in. A project file wins over the user file, and from the editor's point of view that is correct behavior, so you get no warning that your user-level edit is being ignored.

## How the codex theme json structure is laid out

Open the file and the shape is less exotic than the name suggests. Colors sit in a flat map of token to value, and everything decorative goes somewhere else.

```json
{
  "name": "monokai-stone",
  "type": "dark",
  "colors": {
    "editor.background": "#272822",
    "editor.foreground": "#F8F8F2",
    "editorCursor.foreground": "#F8F8F2",
    "terminal.ansiRed": "#F92672"
  },
  "tokenColors": [
    {
      "scope": ["comment", "punctuation.definition.comment"],
      "settings": { "foreground": "#75715E", "fontStyle": "italic" }
    }
  ],
  "semanticHighlighting": true
}
```

`colors` handles surfaces: the background, the foreground, the cursor, the selection, the ANSI palette the integrated terminal uses. `tokenColors` handles syntax, and it matches by scope rather than by language, which is why one entry can cover comments in six file types at once.

The lookup order matters when two entries fight. More specific scopes win over less specific ones, so `comment.line.double-slash` beats `comment`. Later entries win over earlier ones when the scopes are equally specific. If a color refuses to change, the cause is almost always a later entry with a narrower scope, not a broken file.

## The keys worth knowing before you touch anything

You can get most of what you want out of about six tokens, and the rest are for people who enjoy this sort of thing.

- `editor.background` and `editor.foreground` set the base contrast everything else is judged against.
- `editorCursor.foreground` is the one people forget. On a low-contrast palette the cursor disappears and you blame the theme instead of the one token.
- `terminal.ansi*` covers the eight ANSI colors plus the bright variants. Leave these alone unless you also use the integrated terminal, because a palette tuned for editor syntax can make `ls` output unreadable.
- `editor.selection.background` needs to stay visible against the selection you get from find-in-file, which uses a different token.
- `semanticHighlighting`, when true, lets the language server override your scope colors. Turn it off if a carefully tuned comment color keeps reverting.

That last one explains a whole category of "it worked yesterday" reports. The theme file is fine. A different layer is now feeding colors in.

## What an update overwrites and what it leaves alone

This is where people lose work. The general rule: the engine owns files it writes, and it leaves files it only reads.

1. A file inside the application directory will be replaced on update. Do not put hand-tuned colors there.
2. A file in your user config directory is normally read, not rewritten, so edits survive.
3. A file the engine generated from your current settings gets regenerated whenever those settings change, which silently drops anything you added by hand.

If you want the edits to be permanent, keep your own copy outside both paths and point the engine at it, or symlink it into place. Version control is the other half of the answer. A one-line diff tells you whether the update changed a key name or reset the whole file, and those two need different fixes.

## Reading the error instead of guessing

A malformed file produces one of three outcomes, and they are easy to tell apart.

- The theme loads and one color is wrong: that is a bad value, usually a hex string missing its leading `#` or using three digits where the parser wants six.
- The theme loads and syntax highlighting is flat: the JSON parsed, but `tokenColors` scopes do not match what the grammar emits.
- Nothing loads and you get the default palette: the JSON did not parse at all. A trailing comma after the last array item is the usual culprit, and it is invisible if you are skimming.

One habit saves most of this: validate the file before you reload it. Any JSON linter does, and so does pasting it into a scratch buffer in the editor you are about to break.

## FAQ

### Can I keep one config file in sync across machines?

Yes, and a symlink is the least fiddly option. Keep the real file in a dotfiles repo, link it into the config location on each machine, and the version-controlled copy stays the source of truth. Backing up and syncing a whole skin library is a related problem with its own answer, covered in [Codex Skin Manager Guide](/blog/codex-skin-manager-guide/).

### Do the CLI and the desktop app read the same file?

No. They have separate config locations and slightly different token sets, which is why a palette can look right in one and wrong in the other. If you want them matched, tune one and export, rather than editing both by hand. The export route is described in [Export a Terminal Palette from a Codex Skin](/blog/export-terminal-palette-from-codex-skin/).

### Why does my edit disappear after restarting?

Either the file is generated rather than read, or a project-level override is winning. Check the project directory first, because that is the faster of the two to rule out.

### Is it safe to delete the file and start over?

Safe, and often faster than debugging. Engines regenerate a default config on next launch. You lose custom colors, so copy the file somewhere else first instead of deleting it outright.

## Make the file work for you once

The point of knowing the **config location** is that you stop guessing. Pick the two tokens that bother you most, change them in your own versioned copy, and reload. Browse [awesomecodexskin.com](/) for palettes worth copying, and use the [blog index](/blog/) when you want the terminal side to match. The four skins linked on this page are a reasonable starting set: one dark, one light, one CLI variant, one with heavy transparency, which between them exercise every token above.
