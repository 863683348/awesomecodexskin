---
title: "How to Install & Use Codex Dream Skin (Step-by-Step)"
description: "Install Codex Dream Skin on macOS and Windows, paste prompt presets, switch skins instantly, and fix common 'not applying' problems."
pubDate: 2026-08-20
updatedDate: 2026-08-20
tags: ["dream-skin", "install", "guide"]
category: guide
relatedSkins: ["amber-nocturne", "blue-enchantress", "clear-glass", "cyber-neon"]
---

Codex Dream Skin is the fastest way to change how Codex Desktop looks, and installing it takes about five minutes. This guide walks through setup on macOS and Windows, how to apply preset prompts, switch skins, and fix the two most common problems people hit.

## What you need

- **Codex Desktop** installed (macOS 12+ or Windows 10+)
- About 5 minutes
- No paid license — Dream Skin is free and open source

## Step 1 — Get Dream Skin

Download the latest release from the official **Fei-Away/Codex-Dream-Skin** repository. You can either:

1. Clone the repo and run it from source, or
2. Grab the packaged release for your platform from the Releases page.

If you're not sure which version to pick, the release build is the friendliest for daily use.

## Step 2 — Launch and confirm it's active

Open Dream Skin and check that it's set as your **active applier** for Codex. You should see the engine status indicator switch to "connected" or "active".

> If Dream Skin and another engine (like [Codex Skin Manager](/blog/codex-skin-manager-guide/)) are both installed, make sure only one is set as the primary applier — the last one that applies wins, and a silent "why is my skin not changing?" is almost always this conflict.

## Step 3 — Apply a skin with a prompt

The core loop is copy-paste:

1. Open any skin page in the [Codex Skin Index](/skins/).
2. Copy the **install prompt** (most skins show one, e.g. *"apply the Amber Nocturne dark theme — warm amber on deep charcoal for night coding"*).
3. Paste it into Codex Desktop.
4. Dream Skin interprets the prompt and applies the matching preset — usually instantly, no restart.

Trying [Amber Nocturne](/skins/amber-nocturne/) or [Clear Glass](/skins/clear-glass/) this way shows the loop in under a minute.

## Step 4 — Switch or restore the default

- **Switch skins:** paste a new prompt — Dream Skin replaces the active preset.
- **Restore the default look:** use the engine's "restore default" button to go back to the original Codex theme.

## Step 5 — Manage presets you like

When you find a look worth keeping, save the preset in Dream Skin's preset list. This is where you'll notice Dream Skin's one weakness — it's great at applying, weaker at organizing a large library. For heavy collectors, pairing it with a [gallery-style manager](/blog/codex-skin-manager-guide/) is the common fix.

## Troubleshooting

### "The skin isn't applying"

Check, in order:

1. **Engine conflict** — is another engine also set as active applier? Disable it.
2. **Version mismatch** — Dream Skin interprets prompts; a slightly different prompt can land on a different preset. Copy the exact prompt from the skin page.
3. **Restart** — a few engines cache their theme state; a quick restart of Codex resolves it.

### "I can't uninstall it"

See the dedicated [remove Dream Skin guide](/blog/how-to-remove-dream-skin-codex/) for a clean uninstall on both platforms.

### "Prompts apply but look different than the preview"

That's interpretation variance, inherent to prompt-based engines. For pixel-exact results, use a file-based engine or the deterministic [Skin Manager](/blog/codex-dream-skin-vs-skin-manager/).

## Related

- [Codex Dream Skin Review](/blog/codex-dream-skin-review/) — is it worth installing?
- [Best Codex Dream Skin Alternatives](/blog/codex-dream-skin-alternatives/) — six other engines compared
- [How to Install Codex Skins](/blog/how-to-install-codex-skins/) — every install method across all engines
