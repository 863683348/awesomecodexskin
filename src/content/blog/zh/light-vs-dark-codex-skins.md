---
title: "浅色还是深色 Codex 皮肤：按你的工作方式选"
description: "选浅色还是深色 Codex 皮肤，主要看你写代码的房间。这篇给出适合日间光线的皮肤选择、深色与浅色优劣互换的时机，以及在一台机器上同时跑两套皮肤的做法。"
pubDate: "2026-10-06"
updatedDate: "2026-10-06"
tags: ["compare", "light-airy", "dark-midnight", "skin-guide"]
category: "compare"
relatedSkins: ["clear-glass", "berry-light-journal", "gothic-void-expedition", "amber-nocturne"]
faq:
  - q: "长时间写代码更适合哪一边？"
    a: "光看时长分不出胜负。房间亮的时候浅色更扛得住，房间暗的时候深色更扛得住；真正让眼睛累的是两者错配，而不是写了几个小时。"
  - q: "同一台机器上能同时用一套浅色和一套深色吗？"
    a: "可以。两套都装上，用 prompt 或 /theme 命令切换。Codex Desktop 的预设（比如 Clear Glass）和 codex-themes 工具管理的 CLI 配色走两条路，彼此不会被覆盖。"
  - q: "浅色皮肤是不是比深色少做对比度检查？"
    a: "本站收录的浅色皮肤多数刻意压低对比，文字与背景的比值很容易达标。深色皮肤会把对比拉高，读到一定程度容易在细字周围出现光晕。两种都建议先用 /blog/codex-skin-accessibility-contrast/ 里的方法过一遍。"
  - q: "有没有一款白天晚上都能用的？"
    a: "接近有，但差一点。琥珀夜曲这类暖调中深色比近黑色更能扛住白天的房间光，如果你不想一天切换两次，它是折中选择。"
lang: "zh"
---

# 浅色还是深色 Codex 皮肤：按你的工作方式选

浅色还是深色 Codex 皮肤，多数人是按习惯选的，然后为这个选择辩护好几年。顺序其实反了。适合日间光线的那一套，和你晚上十一点想要的那一套，回答的是同一个问题的两个答案，而选哪个主要取决于你写代码的房间。下面说清楚两边各自的实际代价、深色与浅色在什么时候互相翻盘，以及怎么在一台机器上同时留着两套皮肤，又不让切换变成一件麻烦事。

## 房间的决定权比口味大

有三件事重要，其中只有一件是个人偏好：

- 环境光。明亮的白天里，深色界面就像在一片暗环境里凿出一个发亮的小方块。让眼睛累的是这种错配，不是亮度本身。
- 屏幕表面。亮面屏的反光会把浅色主题冲淡，也会把深色主题压灰。磨砂屏在同一盏灯下表现完全不同。
- 日落之后的时长。如果你的工作大部分在天黑前完成，默认答案是浅色；大部分在天黑后，那就是深色。

偏好当然存在，但它决定的是你留哪一款浅色或哪一款深色，而不是你站哪一边。本站所有皮肤不是 `light-airy` 就是 `dark-midnight`，可以先按这个筛，再去争具体配色。

## 浅色皮肤赢在哪

浅色主题有两件事做得好：日光下读得准，以及背景不发光时代码依然清楚。下面两款都是 Codex Desktop 里一句话 prompt 就能装的。

| 皮肤 | 分类 | 底色 | 安装方式 | 来源 |
|---|---|---|---|---|
| Clear Glass | `light-airy` | `#E8EFF5` | prompt | Codex Dream Skin（Fei-Away） |
| Berry (light journal) | `light-airy` | `#DCEEF2` | prompt | 社区投稿 |

Clear Glass 用半透明面板配上高明度的 `#E8EFF5`，白天几乎会隐身，让代码成为屏幕上最亮的东西。写这篇时它记录到 1,620 次安装和 305 个赞，排在浅色一侧靠前的位置。Berry (light journal) 底色调得更冷一点，`#DCEEF2`，质感更像纸而不像玻璃，安装数 530。

缺点也说清楚：这两款在天一黑就把优势全丢掉。没开灯的房间里，一块浅色面板就是一盏对着脸的灯。

## 深色皮肤赢在哪

两种情况偏向深色，而且不是人们常提的那两种。第一种是房间确实暗。第二种是长时间以读为主的场景，因为语法配色在深底上分得更开。

| 皮肤 | 分类 | 底色 | 安装方式 | 平台 |
|---|---|---|---|---|
| Gothic Void Expedition | `dark-midnight` | `#1A1A2E` | prompt | Codex Desktop |
| amber-nocturne | `dark-midnight` | `#3B2F1E` | `codex-theme apply` | Codex CLI |

Gothic Void Expedition 是 Dream Skin 引擎的默认预设，也是全站安装量最高的一款，2,103 次安装、412 个赞。底色接近纯黑加一层微弱的地平线光，而且它是上手最安全的深色皮肤，因为发布它的引擎顺带负责一键还原。amber-nocturne 来自用 Go 写的 codex-themes CLI，底色 `#3B2F1E` 属于暖调深色而非冷调，用 `codex-theme apply amber-nocturne` 装上。

暖调深色值得单独说一句。阳光充足的房间里，近黑面很难读；暖棕色的深面明显好读得多。如果你不愿意一天切两次，这个差别比任何口味之争都重要。

## 对比度：为什么两边都能过关

| 维度 | 浅色皮肤 | 深色皮肤 |
|---|---|---|
| 常见底色 | `#E8EFF5`、`#DCEEF2` | `#1A1A2E`、`#3B2F1E` |
| 文字对比 | 强，容易稳在 7:1 以上 | 强，但纯白容易起光晕 |
| 失败模式 | 眩光和反光 | 细字周围发糊 |
| 最配的场景 | 白天、磨砂屏 | 暗房间、高 dpi 屏 |

只要做得规范，两行都能达到无障碍标准。真正出问题的通常不是底色，而是配对选择：中灰的注释色在浅底上会消失，纯白正文在黑底上会发糊。底色越深，越该把正文纯白换成 `#E6E6E6` 这类。

## 一天切两次，怎么做不麻烦

切换只有在超过十秒时才烦人。一次设好就行：

1. 装一个浅色预设和一个深色预设，都用 prompt 格式，各自一句话喂给 Codex Desktop。
2. 用 CLI 的话，装一次 codex-themes 工具，把 `codex-theme list` 放在手边。`codex-theme apply` 换配色时不碰配置文件。
3. 把两句安装 prompt 抄进贴在编辑器旁边的便签。每天早上打同一句话，比回忆自己到底想装哪个更快。
4. 按房间变化切，别按时间切。入夜开灯，或者有人拉开窗帘，才是真正的触发点。

两套都挂在同一个 `/skins/` 筛选结果里，就不用为第二套来回翻了。

## 五分钟内挑出来

按顺序读，读到第一条符合自己的就停：

- 大部分工作在日落前 → 从 `/skins/clear-glass/` 的 Clear Glass 开始。
- 大部分工作在天黑后 → 从 `/skins/gothic-void-expedition/` 的 Gothic Void Expedition 开始。
- 不想一天切两次 → 从 `/skins/amber-nocturne/` 这类暖调深色开始，它比近黑色更耐受白天的光。
- 主要在 Codex CLI 里干活 → `codex-theme apply` 让你完全不用打开 Desktop 就能换配色。
- 还是拿不定 → 现在先装 Clear Glass，今晚再配一个深色搭档。前后十分钟，明天你就会知道自己伸手要的是哪一个。

## 常见问题

**浅色主题真的更不伤眼吗？**
在亮房间里是。伤眼的根源是屏幕亮度和房间亮度不匹配，而浅色皮肤更贴合有灯光的房间。房间一暗，同样的论证就指向另一边了。

**Codex 皮肤要不要和终端主题统一？**
统一有好处，而且两个方向都好做。好处是截图和共享屏幕时观感一致；反方向的做法写在 `/blog/export-terminal-palette-from-codex-skin/`。

**哪一边的皮肤更多？**
深色多，而且不是多一点。想选配色空间最大，先在 `/skins/` 里按 `dark-midnight` 筛，再去读 `/blog/best-light-codex-skins/`，看看真正好用的浅色其实少到几款就够了。

**装完还能回到默认吗？**
能，两个平台都能。Dream Skin 对自己的预设支持一键还原，`codex-theme` 也是怎么装上就怎么退回。

## 相关皮肤

- [Clear Glass](/skins/clear-glass/) - 清爽的浅色搭档，日间工位首选
- [Berry (light journal)](/skins/berry-light-journal/) - 像纸一样的浅色调，适合以读为主的工作
- [Gothic Void Expedition](/skins/gothic-void-expedition/) - 深色一侧的默认款，全站安装量最高
- [amber-nocturne](/skins/amber-nocturne/) - 暖调深色，适合偶尔要见光的 CLI 用户

---

*这些皮肤都收录在 [awesomecodexskin.com](https://awesomecodexskin.com)。你可以在 [/skins/](/skins/) 按分类筛完整的 103 条索引，先看 [安装指南](/blog/how-to-install-codex-skins/)，用 [无障碍对比度指南](/blog/codex-skin-accessibility-contrast/) 核数据。已发布的同类比较还有 [Codex 浅色与深色皮肤对比](/blog/codex-light-vs-dark-skins/) 和 [最佳深色 Codex 皮肤](/blog/best-dark-codex-skins/)。其余文章见 [/blog](/blog)。*

---
