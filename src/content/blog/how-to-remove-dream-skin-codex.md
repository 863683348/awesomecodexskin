---
title: "How to Remove / Uninstall Codex Dream Skin"
description: "Cleanly uninstall Codex Dream Skin and restore the default Codex look on macOS and Windows — remove presets, reset the active theme, and clear leftover config."
pubDate: 2026-08-20
updatedDate: 2026-08-20
tags: ["dream-skin", "uninstall", "tips"]
category: tips
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "solarized"]
---

Changed your mind, or switching to a different engine? Removing Codex Dream Skin is straightforward, but doing it *cleanly* matters — a half-uninstall leaves the active theme applied and can silently conflict with your next engine. Here's how to remove it properly on macOS and Windows.

## Before you start: reset the active theme first

Dream Skin may currently be the **active applier** of your Codex theme. Uninstalling the app while it's still active can leave a custom theme stuck with no way to manage it.

1. Open Dream Skin.
2. Use **Restore default** to return Codex to its original look.
3. Confirm the default theme is showing in Codex before you continue.

If you're moving to another engine like [Codex Skin Manager](/blog/codex-skin-manager-guide/), install that first, set it as the new active applier, then uninstall Dream Skin — this avoids any gap where no engine can change the theme.

## Remove on macOS

1. Quit Dream Skin and Codex Desktop.
2. Drag the Dream Skin app from Applications to the Trash.
3. Clear the leftover config folder (if present): `~/Library/Application Support/Codex-Dream-Skin/` (or the exact folder name from your install).
4. Empty the Trash.

## Remove on Windows

1. Close Dream Skin and Codex Desktop.
2. Uninstall via **Settings → Apps → Installed apps** (or the Control Panel "Add or remove programs").
3. Delete the leftover data folder if it remains: `%APPDATA%\Codex-Dream-Skin` (or wherever your install wrote presets).
4. If you installed from source or via a package manager, run the matching uninstall command.

## Check nothing is left behind

After uninstalling, confirm:

- Codex shows the **default theme** (it should, if you reset the active theme first).
- No Dream Skin process is running (check Activity Monitor / Task Manager).
- No second engine is now fighting to be the applier — if you installed another engine, make sure it's the active one.

## Switching engines instead?

Most people uninstall Dream Skin to move to something else. The two common paths:

- **To a gallery UI:** [Codex Skin Manager guide](/blog/codex-skin-manager-guide/)
- **To CLI theming:** the [engines comparison](/blog/codex-skin-engines-compared/) covers CLI options like Codex Themes CLI and Codepilot

And if you just want a different *skin* rather than a different *engine*, browse the [skin index](/skins/) — switching skins is always faster than switching engines.

## Quick FAQ

**Will uninstalling Dream Skin delete my applied skin?**
If you reset to default first, no — Codex returns to its built-in theme. Custom presets stored by Dream Skin are removed with the app.

**Can I reinstall later?**
Yes, Dream Skin is free and open source; reinstall from the official repo and your skin pages' prompts still work.

**Does removing Dream Skin affect other engines?**
No, but only install one active applier at a time to avoid the last-one-wins conflict.
