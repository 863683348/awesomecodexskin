---
title: "Batch Install Codex Skins: One Command"
description: "A batch install codex skins pass puts four or five themes on a machine in one line. The loop to install multiple codex themes at once, how a bulk skin install behaves with rollback and startup caching, and which four skins to start with."
pubDate: "2026-10-14"
updatedDate: "2026-10-14"
tags: ["batch-install-codex-skins", "install-multiple-codex-themes", "bulk-skin-install", "tips"]
category: "tips"
relatedSkins: ["monokai-stone-cli", "solarized-cli", "tokyo-night-cli", "vivid-purple-cli"]
faq:
  - q: "Can I install multiple codex themes in one command on Windows?"
    a: "The loop above works in PowerShell with minor syntax changes, or under Git Bash as written. The Windows install walkthrough has the PowerShell form."
  - q: "Does a bulk skin install slow Codex down?"
    a: "No. An apply writes a palette; it does not add runtime work. Timings are in the performance notes."
  - q: "What if one slug in the loop is wrong?"
    a: "That iteration fails and the rest continue. A failed apply leaves the previous theme in place, so a typo costs you one skin rather than the batch."
  - q: "How many skins should a batch hold?"
    a: "Four or five. Enough to compare, few enough that the picker stays readable."
---

Installing one skin at a time is fine on a machine you already like. It is a poor fit for a fresh laptop, a rebuild, or a second workstation, which is where a batch install codex skins pass earns its keep. One loop applies four or five themes in less time than a single picker session, and a bulk skin install also happens to be the quickest way to compare palettes back to back before you pick one to live in. The index at awesomecodexskin.com now catalogues 103 skins, so narrowing the set is the real work. Picking the ones you want and applying them in one shot is the easy part.

## Why a bulk skin install beats one at a time

Three things happen once per machine no matter how many skins you want: the install script runs, Codex reads the theme directory at startup, and you restart the prompt so the colors land. Do those once and apply five themes, or do them five times and apply one each. The first option is faster by a wide margin.

The second reason is comparison. Palettes are hard to judge from memory. When four themes sit in your `/theme` list at once, you can flip between them in one session instead of trying to recall what a warm dark looked like three restarts ago. The [preview write-up](/blog/how-to-preview-codex-skin-before-applying/) covers what to look at while you flip.

## The one-command loop to install multiple codex themes

Run the install script once, then apply by slug in a loop. This is the whole thing:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh

for s in monokai-stone-cli solarized-cli tokyo-night-cli vivid-purple-cli; do
  codex-theme apply "$s"
done
```

Restart Codex CLI after the loop finishes. Ports cache colors at startup, so a palette that looks unchanged right after an apply is usually just unrefreshed rather than broken. The [command cheat sheet](/blog/codex-skin-command-cheat-sheet/) lists the rest of the vocabulary, including `/theme <Name>` if you would rather switch inside the prompt than from a shell.

Write the loop into your dotfiles and a rebuild becomes one paste. That is the part worth keeping, because six months later you will not remember which four slugs you settled on.

## What to put in your first batch

Four CLI skins cover the range of what the index offers, and all four are `prompt` format with the same install route, so they batch cleanly:

| Skin | Accent | Category | Mood | Installs |
|---|---|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | `#272822` | mono-terminal | balanced | 1,500 |
| [Solarized (CLI)](/skins/solarized-cli/) | `#FDF6E3` | mono-terminal | balanced | 1,340 |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | `#1A1B26` | dark-midnight | balanced | 980 |
| [Vivid Purple (CLI)](/skins/vivid-purple-cli/) | `#A020F0` | other | balanced | 620 |

[Monokai Stone (CLI)](/skins/monokai-stone-cli/) is the most-applied port in the index at 1,500 installs, and [Solarized (CLI)](/skins/solarized-cli/) at `#FDF6E3` is the light counterweight to it. [Tokyo Night (CLI)](/skins/tokyo-night-cli/) sits in `dark-midnight`, and [Vivid Purple (CLI)](/skins/vivid-purple-cli/) is the one to include when you want to see how far a saturated accent goes before it starts hurting. Two dark, one light, one loud is a workable first batch.

Keep the batch to four or five. Past that, the `/theme` picker gets long enough that you stop reading names properly, which defeats the comparison you ran the batch for.

## What a bulk apply does not fix

- **Rollback only undoes one step.** `codex-theme rollback` reverses the last apply, not the whole loop. If the batch was a mistake, reapply the theme you want by slug instead of rolling back four times.
- **Platform mismatch survives the loop.** These four are `codex-desktop` tagged in the index and applied through the CLI route. Desktop install is a separate path, covered in the [install guide](/blog/how-to-install-codex-skins/).
- **Duplicate display names still collide.** [Monokai Stone (CLI)](/skins/monokai-stone-cli/) and the non-CLI Mono port share a name in the picker. Applying by slug is what makes the loop unambiguous.
- **A Codex update can reset the theme directory.** When that happens, rerun the loop rather than reapplying by hand. If you run several engines side by side, the [multi-engine notes](/blog/run-multiple-codex-skin-engines-without-conflicts/) are worth a read first.

Running `codex-theme preview "$s"` inside the same loop, one line before the apply, adds a look-before-you-commit step at the cost of one extra keystroke. Use it when the batch is going onto a machine you work on every day.

## Quick FAQ

**Can I install multiple codex themes in one command on Windows?**
The loop above works in PowerShell with minor syntax changes, or under Git Bash as written. The [Windows install walkthrough](/blog/install-codex-skin-windows/) has the PowerShell form.

**Does a bulk skin install slow Codex down?**
No. An apply writes a palette; it does not add runtime work. Timings are in the [performance notes](/blog/codex-skin-performance/).

**What if one slug in the loop is wrong?**
That iteration fails and the rest continue. A failed apply leaves the previous theme in place, so a typo costs you one skin rather than the batch.

**How many skins should a batch hold?**
Four or five. Enough to compare, few enough that the picker stays readable.

## Run your first batch today

Copy the loop, swap in the slugs you want, and restart the prompt. awesomecodexskin.com lists every skin with its install format, accent hex and platform tag on the detail page, so building the list takes longer than applying it. The full catalogue sits at [/skins/](/skins/), the [install guide](/blog/how-to-install-codex-skins/) walks each method step by step, and the rest of the write-ups are at [/blog](/blog).
