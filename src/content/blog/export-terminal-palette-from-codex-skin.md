---
title: "Export a Terminal Palette From Your Codex Skin"
description: "Turn any Codex skin into a matching terminal color scheme for iTerm2, Windows Terminal, Alacritty, and Kitty — with a repeatable extraction workflow instead of guesswork."
pubDate: 2026-09-21
tags: ["codex", "theming", "terminal", "workflow"]
category: "Guide"
relatedSkins: ["midnight-synth", "paper-ink", "retro-amber"]
---

## Why your editor and terminal never match

You spend an afternoon tuning a Codex skin until the syntax highlighting reads exactly the way you want, then you switch to a terminal window and it looks like a completely different application. The reason is almost always the same: the skin defines its colors for the editor's token model, and the terminal needs a completely different set of sixteen slots — eight normal and eight bright — for which there is no automatic mapping.

The fix is not to eyeball it. Every Codex skin carries the semantic color values it uses for surfaces, text, accents, and syntax, and those values are enough to derive a coherent ANSI palette. What follows is a workflow that turns a skin into a terminal theme file you can actually keep in version control.

## Step 1 — Pull the palette out of the skin

Open the skin source and locate the color block. You are looking for four families of values:

- **Background and foreground**: the base surface and the primary text color.
- **Accent colors**: typically two or three, used for selections, links, and active states.
- **Syntax colors**: strings, keywords, types, comments, and numbers.
- **Dimmed variants**: the muted tones used for line numbers and inactive UI.

Copy the hex values out into a plain text file before you do anything else. Having them in one place makes the rest of this process mechanical rather than creative.

## Step 2 — Map syntax colors onto the ANSI sixteen

The ANSI palette is older than any modern theme system, and its slots are named for colors that no longer describe what they are used for. The mapping that works in practice is built around which tokens appear most often in real terminal output.

| ANSI slot | Typical use | Take it from |
| --- | --- | --- |
| black / bright black | comments, dim output | skin's dimmed text |
| red / bright red | errors, deleted lines | skin's error or string color |
| green / bright green | success, additions | skin's string color |
| yellow / bright yellow | warnings, keys | skin's number or type color |
| blue / bright blue | paths, directories | skin's accent 1 |
| magenta / bright magenta | keywords, tags | skin's keyword color |
| cyan / bright cyan | types, symbols | skin's accent 2 |
| white / bright white | default text | skin's foreground |

Two rules keep the result readable. First, the *bright* variant of each color should be a lighter version of the normal one, not a different hue — this is what makes bold text legible without losing its semantic meaning. Second, red and green must remain distinguishable for users with the most common form of color vision deficiency, which in practice means pushing red toward orange and green toward teal rather than using pure hues.

## Step 3 — Check contrast before you commit

A palette that looks good in the editor can be genuinely unreadable in a terminal, because terminals use the foreground color for far more text at far smaller weights. Measure the contrast ratio between your foreground and background using the WCAG formula and aim for at least 7:1. Anything below 4.5:1 will be painful during long sessions.

Pay particular attention to the *dimmed* slots. Many skins define a muted color that works fine for line numbers in an editor and becomes invisible against a terminal background at small font sizes.

## Step 4 — Write the theme files

Once you have sixteen hex values in a fixed order, generating theme files is a templating exercise. Every terminal accepts some form of structured color file:

- **iTerm2** uses a plist with keys for each ANSI slot plus background, foreground, cursor, and selection.
- **Windows Terminal** uses a JSON scheme object with the same sixteen ANSI names in camelCase, alongside `background`, `foreground`, and `cursorColor`.
- **Alacritty** uses a TOML block with `normal` and `bright` sub-tables.
- **Kitty** uses a flat key-value format where each slot is a numbered `color` entry.

Keep a single source of truth — a small JSON file with the sixteen values — and generate the four output formats from it with a short script. When you update the skin, you regenerate rather than hand-edit four files and lose track of which one is current.

## Step 5 — Verify against real output

Open a directory with mixed file types, run a command that produces an error, and run `git diff`. These three views exercise paths, error text, and added and removed lines — the majority of the ANSI palette — in about ten seconds. If any slot is hard to distinguish from its neighbor, adjust the source JSON and regenerate.

## The maintenance habit that makes this sustainable

The reason most custom terminal themes drift out of sync with their editor is that they are edited directly, in place, in four different formats. Treat the sixteen hex values as the artifact and the four theme files as build output. Commit the JSON, generate the rest, and this becomes a five-minute job the next time you change your skin instead of an afternoon of guessing.

If you want a skin whose palette is already documented in extractable form, browse the skin gallery and start from one that publishes its color values alongside the theme itself.
