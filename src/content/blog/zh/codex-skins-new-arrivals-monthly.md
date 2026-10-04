---
title: "本月新入库 Codex 皮肤：2026 年 10 月盘点"
description: "本月新 codex 皮肤为零。这期盘点列出索引里最新的四个条目、月度新皮肤的来源仓库，以及装之前该验的四个点。"
pubDate: "2026-10-05"
updatedDate: "2026-10-05"
tags: ["news", "roundup", "new-skins", "codex-skin"]
category: "news"
lang: "zh"
relatedSkins: ["codex-theme-moonlit-immortal", "codex-theme-potion-workshop", "codex-theme-starcap-teemo", "codex-theme-blue-window"]
faq:
  - q: "这个索引多久加一次新 codex 皮肤？"
    a: "成批加，没有固定周期。2026-08-26 那批从 freestylefly/codex-themes 进了四个，之后再没有新增。安静的月份很正常，同步脚本只在上游仓库发了东西时才跑。"
  - q: "最新的月度新皮肤收费吗？"
    a: "不收费。索引里每个条目都来自公开仓库，或来自引擎作者自带的预设包，没有一个需要你先付钱才能应用配色。"
  - q: "为什么新入库的都落在 other 分类？"
    a: "归类比导入慢。同步先把文件拉进来，之后再分类，所以全新的条目基本都从 other（未归类）起步，有人看过配色之后才会挪进精选类目。"
  - q: "这四个最新的皮肤怎么装上？"
    a: "它们都是手动安装。打开皮肤页，顺 sourceUrl 到 freestylefly/codex-themes，把色值抄进你的配置。想一行粘贴搞定，就挑标着 installFormat: prompt 的皮肤。"
---

# 本月新入库 Codex 皮肤：2026 年 10 月盘点

新 codex 皮肤是成批来的，不按日历走。本月这期 codex skin release roundup（新皮肤发布盘点）内容不多：整个 9 月索引没有新增条目，最近的一批还是 2026-08-26 那四个。与其把四个导入硬写成一种趋势，不如把实话说清楚。下面是本月真正发生的变化、四个最新皮肤的真实安装方式，以及月度新皮肤（monthly new skins）背后的同步机制在什么时候才会跑起来。

## 本月索引发生了什么

2026 年 10 月这期有四条值得记下来：

- 索引现有 103 个条目。8 月写分类规划时是 99 个，确实在涨，只是涨得慢。
- 最近一批是 2026-08-26，四个皮肤来自 `freestylefly/codex-themes`。
- 9 月和 10 月第一周，新增为零。
- 分类分布没有变化。未归类区仍然装着库里的大部分条目，而新皮肤默认就落在这里。

按任何标准这都算清淡的一个月。但这也是真实情况，而且一个敢写"本月无新增"的月度栏目，到下个季度比一个把四次导入吹成趋势的栏目有用得多。

## 四个最新的 Codex 皮肤

四个是一起进来的，来自同一个仓库，而且都是手动安装，不是一句话粘贴就能搞定。

| 皮肤 | slug | 来源 | 安装方式 | 分类 |
|---|---|---|---|---|
| 曜月谪仙 Moonlit Immortal | `codex-theme-moonlit-immortal` | `freestylefly/codex-themes` | 手动 | other |
| 魔法药水铺 Potion Workshop | `codex-theme-potion-workshop` | `freestylefly/codex-themes` | 手动 | other |
| 星愿提莫 Starcap Teemo | `codex-theme-starcap-teemo` | `freestylefly/codex-themes` | 手动 | other |
| 蓝窗信使 Blue Window | `codex-theme-blue-window` | `freestylefly/codex-themes` | 手动 | other |

名字都是作者自己起的，索引里显示的是带中文的那一半。如果你原本以为这批会来自 `Wangnov/awesome-codex-skins`，也正常，它依然是整体上最大的单一来源，只是这个周期没有发新东西。

## 月度新皮肤从哪来

索引自己不写皮肤，只做收集。上游有四个来源：

1. `Wangnov/awesome-codex-skins`，贡献最多，按批导入。
2. `HeiGeAi/heige-codex-skin-studio`，补的是角色向和粉丝向配色。
3. `freestylefly/codex-themes`，当前最新这四个的来源。
4. `Fei-Away/Codex-Dream-Skin`，随 Dream Skin 引擎一起发布的预设包。

拉取动作由本仓库的 `scripts/sync-community-skins.mjs` 完成。上游仓库加了文件，同步就建条目；上游安静，这里就没动静。机制就这么简单，这也解释了为什么新皮肤总是扎堆出现而不是细水长流。

## 装之前先怎么验一个新皮肤

下面四条不到一分钟能过完，能挡掉新条目里大部分的问题：

1. 打开 `sourceUrl`，确认它落在真实的皮肤定义上，而不是某个账户根目录。
2. 把 `updatedAt` 和你的引擎版本对一下。上面四个都是 2026-08-26，在桌面端上一个大版本之后，渲染应该没问题。
3. 看 `installFormat`。`prompt` 表示往 Codex Desktop 里粘一句话就行；`manual` 表示要自己把色值抄进配置文件。
4. 应用之后立刻回滚一次。先摸清退路在哪，决定了这是一次两分钟的尝试还是要耗一下午。

四个最新的全是 `manual`，动手之前最好知道这一点。皮肤本身没问题，只是比提示词型的多费点事。

## 索引接下来在看什么

两件事。一是未归类区需要整理，每清理完一批就能腾出一篇新的精选栏目。二是 CLI 侧的皮肤比桌面侧薄，能在 Codex CLI 里跑的移植版仍然是最有价值的投稿类型。你自己做过的话，往上面四个仓库发，就有机会进到这个索引里。

## 常见问题

**这个月有皮肤被下架吗？**
没有。没新增，也没删除。上一次清理是 8 月，把 `freestylefly/codex-themes` 导入里 16 个非皮肤条目剔除了。

**安静的月份是不是说明生态在变慢？**
未必。四个公开仓库供着一个索引，产出本来就不平均。某个月没有新发布，说明的是这四个仓库的情况，不是 Codex 换肤这件事整体的情况。

**我自己做的皮肤能进索引吗？**
公开发到仓库里，配色清楚、授权明确即可。同步脚本读的是公开仓库，进了上面四个来源之一，下一轮同步就会出现在索引里。

## 相关皮肤

- [曜月谪仙 Moonlit Immortal](/skins/codex-theme-moonlit-immortal/) - 最新入库，手动安装
- [魔法药水铺 Potion Workshop](/skins/codex-theme-potion-workshop/) - 最新入库，手动安装
- [星愿提莫 Starcap Teemo](/skins/codex-theme-starcap-teemo/) - 最新入库，手动安装
- [蓝窗信使 Blue Window](/skins/codex-theme-blue-window/) - 最新入库，手动安装

---

*到 [完整皮肤索引](/skins/) 看全部 103 个条目，读 [安装指南](/blog/how-to-install-codex-skins/) 装上第一个，或者翻 [命令速查表](/blog/codex-skin-command-cheat-sheet/) 用终端切换。*
