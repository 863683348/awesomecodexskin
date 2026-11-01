---
title: "夜猫子专属 Codex 皮肤：四款深夜写码不刺眼的深色选择"
description: "多数深色 Codex 皮肤在午夜之后依然刺眼，因为背景压到全黑、前景色却保持满饱和。四款把饱和度从前景里抽掉的皮肤，附各自的安装命令。"
pubDate: "2026-11-02"
updatedDate: "2026-11-02"
tags: ["best-of", "night-coding", "dark-theme", "eye-care"]
category: "best-of"
relatedSkins: ["gothic-void-expedition", "mythic-guardian-noir", "heige-genshin-night", "amber-nocturne"]
lang: "zh"
faq:
  - q: "深色 Codex 皮肤在夜间真的更护眼吗？"
    a: "它们降低了总光输出，这确实有帮助。但如果前景色仍然满饱和，这点收益就没了，所以文字颜色比背景有多黑更重要。"
  - q: "暖色深色皮肤之上还要再开蓝光过滤吗？"
    a: "不要。两者叠加会把所有颜色推向橙色，同时破坏色彩准确度，而你读语法高亮时正需要这个准确度。"
  - q: "这些皮肤能在 Codex CLI 上用吗？"
    a: "Gothic Void Expedition、Mythic Guardian Noir 和 Genshin Night 都面向 Codex Desktop。amber-nocturne 是 CLI 那一款，用 codex-theme apply amber-nocturne 安装。"
  - q: "为什么有些皮肤卡片上的色块是灰的？"
    a: "索引对在取色功能上线前导入的条目存的是占位灰。amber-nocturne 就是这样，但它真实的配色是 #3B2F1E。判断配色请看预览图。"
---

# 夜猫子专属 Codex 皮肤：四款深夜写码不刺眼的深色选择

过了午夜还在写代码，多数深色主题会以同一种方式失效：背景压到全黑，前景色却保持满饱和，一小时后你就开始眯着眼看纯青色的关键字压在纯黑上。瞳孔已经为暗环境放大了，配色却还在往里面灌满强度的颜色。

把屏幕亮度调低解决不了这个问题。真正有用的是一套背景够暗、同时把饱和度从前景里抽掉的配色。索引里 103 款皮肤中，有四款做得足够好，我会一直装着它们。

## 夜间真正伤眼的是什么

两件事：对比度过高，以及前景色偏蓝。

WCAG 把对比度当成下限，在光线充足的办公室里这个思路是对的。到了凌晨两点，算法就反过来了。纯白配纯黑测出来是 21:1，这是能达到的最大值，同时也是最容易让眼睛发酸的组合。在暗房间里，7:1 到 10:1 左右读起来一样清楚，而同样的文字炫光会小得多。

蓝光是另一半。短波长的光在眼内散射更多，所以在亮度相同的前提下，一个饱和的蓝或青色关键字，每个字符造成的负担都比琥珀色或暖灰更大。暖色深色配色存在的全部理由就在这里，也是下面这份清单里 amber-nocturne 入选的原因，尽管它跑在 CLI 上而不是桌面端。

## 四款推荐

### Gothic Void Expedition：默认预设，仍然是深色里最好的一款

Gothic Void Expedition 是 Codex Dream Skin 的内置预设，也就是说你已经有了。它的背景是 #1A1A2E，一个接近黑的深蓝而不是纯黑，背景里那一点蓝正是让前景文字不发光的原因。它的安装数是 2,103，全库最高。

我反复回到这一款，因为它从不抢注意力。配色里没有任何东西跑在满饱和上，diff 视图看了四个小时仍然可读，这一点是霓虹那一端的皮肤比不了的。

### Mythic Guardian Noir：更暗，也更安静

Mythic Guardian Noir 的背景是 #1C1C28，比 Gothic Void 稍浅一点，但强调色压得更低。它来自 ChannelerH 的皮肤包。Gothic Void 还留着一点科幻感，这一款则更接近中性：灰色加一点被压暗的紫，语法色里找不到任何强势的色相。

如果你觉得 Gothic Void 还是有点吵，选这一款。它是四款里装饰最少的一款。

### Genshin Night：桌面端的暖色选择

Genshin Night 来自 HeiGeAi 皮肤工作室，是这里面向桌面的暖色款。多数暖色深色配色都活在 CLI 上，所以想在 Codex Desktop 里用暖色调，就选它。它几乎完全避开了光谱的蓝端。

### amber-nocturne：终端里的暖色深色

amber-nocturne 是 CLI 主题，背景 #3B2F1E，一个暖调的棕黑而不是蓝黑。如果你一晚上的时间在 Codex Desktop 和终端之间切分，终端里跑这一款，桌面端用上面三款之一。两者不会完全一致，这没什么关系，因为终端恰恰是你读整段文字最少的地方。

## 四款一览

| 皮肤 | 背景 | 运行平台 | 冷暖 | 安装 |
|------|------|----------|------|------|
| Gothic Void Expedition | #1A1A2E | Codex Desktop | 冷调深蓝 | `/theme gothic-void-expedition` |
| Mythic Guardian Noir | #1C1C28 | Codex Desktop | 中性 | `/theme mythic-guardian-noir` |
| Genshin Night | 深色偏暖 | Codex Desktop | 暖 | `/theme heige-genshin-night` |
| amber-nocturne | #3B2F1E | Codex CLI | 暖棕 | `codex-theme apply amber-nocturne` |

## 安装步骤

1. 打开 Codex Desktop，运行 `/theme gothic-void-expedition`，或者你想要那一款的 slug。
2. amber-nocturne 要先装 Codex Themes CLI 工具，再运行 `codex-theme apply amber-nocturne`。
3. 等一轮。通过提示词应用的皮肤有时要多发一条消息，颜色才会稳定下来。

索引里的皮肤全部免费、由社区贡献，所以这里没有任何授权环节。

## 同时值得改的几个设置

- 把显示器亮度压到低于房间环境光的水平。如果屏幕是周围最亮的物体，什么配色都救不了你的眼睛。
- 关掉桌面端的蓝光过滤，或者给它设个时间表。在已经偏暖的深色配色上再叠一层，所有东西都会变成橙色。
- 单独检查终端模拟器。Codex CLI 的颜色来自皮肤，但外层的模拟器保留自己的配置。

## 该选哪一款

- 想要安装量最大、最稳妥的默认款：Gothic Void Expedition。
- 觉得多数深色主题太吵：Mythic Guardian Noir。
- 想在 Codex Desktop 里要暖色调：Genshin Night。
- 一晚上大部分时间在终端里：amber-nocturne。

## FAQ

**深色 Codex 皮肤在夜间真的更护眼吗？** 它们降低了总光输出，这确实有帮助。但如果前景色仍然满饱和，这点收益就没了，所以文字颜色比背景有多黑更重要。

**暖色深色皮肤之上还要再开蓝光过滤吗？** 不要。两者叠加会把所有颜色推向橙色，同时破坏色彩准确度，而你读语法高亮时正需要这个准确度。

**这些皮肤能在 Codex CLI 上用吗？** Gothic Void Expedition、Mythic Guardian Noir 和 Genshin Night 都面向 Codex Desktop。amber-nocturne 是 CLI 那一款，用 `codex-theme apply amber-nocturne` 安装。

**为什么有些皮肤卡片上的色块是灰的？** 索引对在取色功能上线前导入的条目存的是占位灰。amber-nocturne 就是这样，但它真实的配色是 #3B2F1E。判断配色请看预览图。

## 相关皮肤

- [Gothic Void Expedition](/skins/gothic-void-expedition/) - 内置预设，冷调深蓝
- [Mythic Guardian Noir](/skins/mythic-guardian-noir/) - 四款里最安静
- [Genshin Night](/skins/heige-genshin-night/) - 桌面端的暖色深色
- [amber-nocturne](/skins/amber-nocturne/) - CLI 的暖调棕黑

深色一端另外几款也值得看：[Solarized](/skins/solarized/)、[TPC GUTS Command Terminal](/skins/guts-terminal/)、[赤练无明](/skins/ning-hongye-crimson-night/)。

关于本站：awesomecodexskin.com 收录全部 103 款 Codex 皮肤并带预览图。如果你想把切换动作脚本化，[Codex 皮肤命令速查表](/blog/codex-skin-command-cheat-sheet/) 列出了全部 `/theme` 与 `/skin` 参数；护眼那一部分见 [夜间写码的 7 条护眼设置](/blog/codex-skin-night-eye-care/) 与 [减轻眼疲劳指南](/blog/reduce-eye-strain-codex-skin-settings/)。
