---
title: "New Codex Skins This Month: The October 2026 Roundup"
description: "New codex skins have been quiet this month, so this codex skin release roundup covers the four freshest entries in the index, where monthly new skins come from, and how to check one before you install it."
pubDate: 2026-10-05
updatedDate: 2026-10-05
tags: ["news", "roundup", "new-skins", "codex-skin"]
category: news
relatedSkins: ["codex-theme-moonlit-immortal", "codex-theme-potion-workshop", "codex-theme-starcap-teemo", "codex-theme-blue-window"]
faq:
  - q: "How often does this index add new codex skins?"
    a: "In bursts, not on a schedule. The 2026-08-26 batch added four entries from freestylefly/codex-themes, and nothing has landed since. A quiet month is normal; the sync pipeline only runs when an upstream repo publishes something."
  - q: "Are the newest monthly new skins free?"
    a: "Yes. Every entry in this index comes from a public repository or from an engine author shipping presets, and none of them asks for payment before you can apply the palette."
  - q: "Why do new arrivals sit in the other category?"
    a: "Classification lags behind import. A sync pulls the files first and sorts them later, so brand new entries almost always start uncategorised and move into a curated category once somebody reviews the palette."
  - q: "How do I apply one of the four newest skins?"
    a: "These four are manual installs. Open the skin page, follow the sourceUrl to freestylefly/codex-themes, and copy the palette into your config. If you would rather use a one-line paste, pick a skin marked installFormat: prompt instead."
---

# New Codex Skins This Month: The October 2026 Roundup

New codex skins arrive in bursts rather than on a calendar. This month's codex skin release roundup is a short one: nothing new landed in the index through September, and the four entries added on 2026-08-26 are still the freshest thing here. Saying that plainly beats padding a list to fill a page, so what follows is what actually changed, the four newest skins with their real install paths, and how the pipeline behind monthly new skins works when it does run.

## What changed in the index this month

Four things are worth recording for October 2026:

- The index holds 103 entries. It sat at 99 when the category plan was drafted in August, so the growth is real but slow.
- The last arrival batch was 2026-08-26, four skins pulled from `freestylefly/codex-themes`.
- September and the first week of October produced zero new entries.
- Category distribution did not move. The unclassified bucket still holds most of the library, which is where new arrivals land by default.

That is a quiet month by any measure. It is also the honest picture, and a monthly column that reports an empty month is more useful next quarter than one that inflates four imports into a trend.

## The four newest codex skins

All four came in together, all four come from the same repository, and all four are manual installs rather than one-line prompts.

| Skin | Slug | Source | Install | Category |
|---|---|---|---|---|
| 曜月谪仙 Moonlit Immortal | `codex-theme-moonlit-immortal` | `freestylefly/codex-themes` | manual | other |
| 魔法药水铺 Potion Workshop | `codex-theme-potion-workshop` | `freestylefly/codex-themes` | manual | other |
| 星愿提莫 Starcap Teemo | `codex-theme-starcap-teemo` | `freestylefly/codex-themes` | manual | other |
| 蓝窗信使 Blue Window | `codex-theme-blue-window` | `freestylefly/codex-themes` | manual | other |

The names are the author's own, and the Chinese half of each is what you will see in the index. If you were expecting a batch from `Wangnov/awesome-codex-skins` instead, that repo is still the largest single contributor overall; it just did not publish anything this cycle.

## Where monthly new skins come from

The index does not write skins. It collects them, and the collection has four upstream sources:

1. `Wangnov/awesome-codex-skins`, the biggest contributor, importing in batches.
2. `HeiGeAi/heige-codex-skin-studio`, which adds character and fandom palettes.
3. `freestylefly/codex-themes`, the source of the current newest four.
4. `Fei-Away/Codex-Dream-Skin`, which ships the presets bundled with the Dream Skin engine.

`scripts/sync-community-skins.mjs` in this repo does the pulling. When an upstream repo adds files, the sync creates the matching entries; when it is quiet, nothing happens. That is the whole mechanism, and it explains why arrivals cluster instead of trickling.

## Checking a new skin before you install it

Four checks take under a minute and catch most of what goes wrong with a fresh entry:

1. Open `sourceUrl` and confirm it lands on a real skin definition, not an account root.
2. Compare `updatedAt` against your engine version. All four above carry 2026-08-26, which is after the last major desktop release, so they should render correctly.
3. Read `installFormat`. A `prompt` format means you paste one sentence into Codex Desktop; `manual` means you copy hex values into a config file yourself.
4. Apply it, then revert once. Knowing the rollback path before you need it is the difference between a two-minute experiment and an afternoon.

The four newest are all `manual`, which is worth knowing before you start. They are fine skins; they just ask for a little more work than the prompt-based ones.

## What the index is watching next

Two things. The unclassified bucket needs sorting, and every batch that gets classified frees up a new best-of column. Separately, the CLI side of the library is thinner than the desktop side, so ports that work in Codex CLI remain the most useful kind of submission. If you have made one, the upstream repos above are where it would enter this index.

## FAQ

**Did any skin get removed this month?**
No. Nothing was added and nothing was dropped. The last removal was in August, when 16 non-skin entries were cleaned out of the `freestylefly/codex-themes` import.

**Are quiet months a sign the ecosystem is slowing?**
Not really. Four public repos driving one index will produce uneven output. A month with no releases says more about those four repos than about Codex skinning in general.

**Can I get a skin I made into the index?**
Publish it in a public repo with a clear palette and a licence. The sync pipeline reads public repositories, so anything in one of the four sources above will show up on the next run.

## Related Skins

- [曜月谪仙 Moonlit Immortal](/skins/codex-theme-moonlit-immortal/) - newest arrival, manual install
- [魔法药水铺 Potion Workshop](/skins/codex-theme-potion-workshop/) - newest arrival, manual install
- [星愿提莫 Starcap Teemo](/skins/codex-theme-starcap-teemo/) - newest arrival, manual install
- [蓝窗信使 Blue Window](/skins/codex-theme-blue-window/) - newest arrival, manual install

---

*Browse the [full skin index](/skins/) to see all 103 entries, read the [install guide](/blog/how-to-install-codex-skins/) for your first one, or check the [command cheat sheet](/blog/codex-skin-command-cheat-sheet/) if you switch by terminal.*

---
