---
title: "最佳奇幻主题 Codex 皮肤：三国、西游与修真"
description: "奇幻是 Codex 皮肤索引里最大的一个未命名群体，分类导航里根本找不到它。从三国、西游到修真，四款值得先装的皮肤，以及各自的一行安装命令。"
pubDate: "2026-11-01"
updatedDate: "2026-11-01"
tags: ["best-of", "fantasy", "mythology", "community-skins"]
category: "best-of"
relatedSkins: ["three-kingdoms", "journey-to-west", "han-li-mortal-path", "luo-feng-domain"]
lang: "zh"
faq:
  - q: "Codex 皮肤索引为什么没有奇幻分类？"
    a: "八个策展分类覆盖暗色、浅色、动漫、霓虹、自然、复古、马卡龙和单色终端。无法干净归入其中任何一类的社区导入皮肤会落到 other 桶里，多数神话与修真题材都在那里，所以要用搜索或这篇盘点来找，而不是靠分类导航。"
  - q: "奇幻皮肤能在 CLI 上用吗？"
    a: "不能。这里推荐的四款都面向 Codex Desktop。如果终端里想要接近的观感，库里的 Solarized CLI 与 Tokyo Night CLI 最接近。"
  - q: "这些皮肤收费吗？"
    a: "不收费。索引里的皮肤全部由社区贡献，安装免费，包括这里推荐的四款，它们来自 Wangnov 的 awesome-codex-skins 仓库。"
  - q: "为什么这些皮肤的色块是灰的？"
    a: "索引对在取色功能上线前导入的条目存的是占位灰，所以判断配色要看预览图，不要看卡片上的色块。"
---

# 最佳奇幻主题 Codex 皮肤：三国、西游与修真

在 Codex 皮肤索引里搜「奇幻」，什么有用的结果都不会出现，因为根本没有奇幻这个分类。八个策展分类覆盖暗色、浅色、动漫、霓虹、自然、复古、马卡龙和单色终端，凡是无法干净归入其中一类的，都被丢进 `other`。多数神话、王朝和修真题材的皮肤最后都落在那里。这篇盘点把它们从那个桶里拣出来，先说我会最先装的四款。

## 为什么奇幻皮肤不好找

`other` 是索引里最大的一组，也是最难浏览的一组。里面的皮肤在元数据里共用一个占位灰，所以分类页看上去是一面完全相同的卡片墙，尽管它们的实际配色差别极大。按更新时间排序有一点用，按名字搜索更有用，前提是你已经知道名字。

这是个真实的缺口，不是外观问题。想要三国或修真题材的人，很少会去搜「other」。下面这四款在索引里都带着 `featured: true`，正因为如此它们才能出现在首页上，而它们所属的分类对它们毫无帮助。

## 四款推荐

### Three Kingdoms：王朝灰配暖铜

Three Kingdoms 来自 Wangnov 仓库，配色正如其名：石灰、暗铜，只有强调色里才出现一点红。它读起来是历史感，而不是魔法感，这也是四款里最适合放在工作机上的一款。如果你想要一款背后有故事、同时 diff 视图旁边一点霓虹都没有的主题，从这一款开始。

### Journey to the West：长路上的赭黄

Journey to the West 是这组里最暖的一款。赭黄与土黄为主，取自标题所指的那段取经意象，对比度在明亮房间里也撑得住。它是四款里最适合白天工作的一款，其余三款都偏暗。

### 青竹问道：竹绿与慢功夫

索引里这一款的 slug 是 `han-li-mortal-path`，中文名写作青竹问道。它是修真题材的那一款：冷绿、克制，明显比另外三款安静。修真小说讲的是很长时间里极缓慢的提升，而一个让窗口保持安静的主题，比一个戏剧化的主题更贴合那种心境。

### 罗峰·陨墨星域：书架另一端的科幻

罗峰·陨墨星域是个异类，我差点把它拿掉。它的出处是科幻而不是神话，所以你拿到的是深空色调，而不是庙堂配色。我留下它，是因为它和另外几款属于同一个阅读书架，而且喜欢修真这一头的人通常也读这一本。把它当作奇幻这一组的远端，而不是完全对位的一款。

## 四款一览

| 皮肤 | 题材来源 | 观感 | 平台 | 安装命令 |
|------|---------|------|------|---------|
| Three Kingdoms | 王朝历史 | 克制、有历史感 | Codex Desktop | `/theme three-kingdoms` |
| Journey to the West | 取经神话 | 温暖、明亮 | Codex Desktop | `/theme journey-to-west` |
| 青竹问道 | 修真 | 冷、安静 | Codex Desktop | `/theme han-li-mortal-path` |
| 罗峰·陨墨星域 | 太空歌剧 | 深沉、饱和 | Codex Desktop | `/theme luo-feng-domain` |

## 安装：每款一条命令

1. 打开 Codex Desktop，运行 `/theme three-kingdoms`（或你想要的那款的 slug）。
2. 等待重载。如果没有变化，单独运行 `/theme`，列出引擎当前持有的全部预设。

四款都以提示词预设的形式提供，没有文件要下载，也没有压缩包要解开。如果命令返回未知主题的错误，说明你的引擎还没拉取社区预设列表，重启一次 Codex 通常能解决。

想在正式应用之前先看效果，[如何在应用前预览 Codex 皮肤](/blog/how-to-preview-codex-skin-before-applying/) 里的步骤大约两分钟就能走完。

如果表格还定不下来，这样选：

- 想要背后有故事、同时不抢注意力的主题：Three Kingdoms。
- 白天工作，想要暖色调：Journey to the West。
- 想让窗口在六小时里彻底消失：青竹问道。
- 修真之外也读太空歌剧：罗峰·陨墨星域。

## FAQ

**Codex 皮肤索引为什么没有奇幻分类？** 八个策展分类覆盖暗色、浅色、动漫、霓虹、自然、复古、马卡龙和单色终端。无法干净归入其中任何一类的社区导入皮肤会落到 `other` 桶里，多数神话与修真题材都在那里。

**奇幻皮肤能在 CLI 上用吗？** 不能。这里推荐的四款都面向 Codex Desktop。库里的 Solarized CLI 与 Tokyo Night CLI 是最接近的终端配色。

**这些皮肤收费吗？** 不收费。索引里的皮肤全部由社区贡献，安装免费，包括来自 Wangnov awesome-codex-skins 仓库的这四款。

**四款里哪一款长时间阅读最舒服？** 青竹问道，因为它的饱和度最低。Journey to the West 的对比度最强，如果你在光线很足的地方工作，选它。

## 相关皮肤

- [Three Kingdoms](/skins/three-kingdoms/) - 王朝灰，铜色强调
- [Journey to the West](/skins/journey-to-west/) - 赭黄，四款里最亮
- [青竹问道](/skins/han-li-mortal-path/) - 冷竹绿，为安静而做
- [罗峰·陨墨星域](/skins/luo-feng-domain/) - 深空色调，科幻那一端

同一书架上的其他皮肤，均为社区导入：[Celestial Court](/skins/celestial-court/)、[Ming Imperial](/skins/ming-imperial/)、[Underworld Tribunal](/skins/underworld-yama/)、[Western Pure Land](/skins/western-pure-land/)、[日轮净域](/skins/kurumi-sunward-onmyoji/)、[往生司殿](/skins/dasiming-soul-passage/)、[曜月谪仙 Moonlit Immortal](/skins/codex-theme-moonlit-immortal/)、[长白守门](/skins/zhang-qiling-bronze-gate/)、[鹿灵梦境](/skins/yao-deer-spirit-grove/)、[司缘堂](/skins/shaosiyuan-fateweave/)、[迷魂狐影](/skins/yu-linglong-foxfire-enchant/)。

带预览图的完整皮肤库：[awesomecodexskin.com](/) 收录全部 103 款皮肤；如果你想把切换动作脚本化，[Codex 皮肤命令速查表](/blog/codex-skin-command-cheat-sheet/) 列出了全部 `/theme` 与 `/skin` 参数。
