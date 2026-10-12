---
title: "如何在应用前预览 Codex 皮肤"
description: "预览 codex 皮肤只要两分钟，能省掉一次重装。桌面版与 CLI 两种 codex 皮肤预览方法、先看后装的检查清单，以及应用前该盯住哪几处。"
pubDate: "2026-10-13"
updatedDate: "2026-10-13"
tags: ["预览-codex-皮肤", "皮肤预览", "指南", "先看后装"]
category: "guide"
relatedSkins: ["clear-glass", "monokai-stone", "amber-nocturne", "vivid-purple-cli"]
lang: "zh"
faq:
  - q: "预览会拖慢 Codex 吗？"
    a: "不会。预览读取配色的方式和正常启动一样，想看具体数字可以读性能那篇。"
  - q: "能在 Codex CLI 里预览桌面版皮肤吗？"
    a: "不能。两个引擎读取的格式不同，为 CLI 做的 .tmTheme 端口在桌面版里不会渲染。先看皮肤页上的平台标签。"
  - q: "应用之后不喜欢怎么办？"
    a: "照着卸载重置那篇跑一遍重置步骤。皮肤只在主题目录里写东西，不会动到别处。"
  - q: "每个皮肤都要预览吗？"
    a: "不用。换平台、从浅色切深色、或者挑一个要盯一整天的皮肤时再预览。"
---

装皮肤很快，装完发现不喜欢再回滚就慢了。麻烦在于 Codex 在启动阶段读取配色，你看到的"配色不对"很可能只是没刷新。预览 codex 皮肤这一步能在动手之前把问题挑出来，而桌面版和 CLI 的做法并不一样。这篇把两条路都讲清楚，附一份两分钟能跑完的 codex 皮肤预览清单。想在天天用的机器上先看后装，下面这个顺序比选哪个工具更重要。

## 预览能给你看什么，不能给你看什么

预览会把配色渲染到真实界面上：面板、语法着色、状态栏。它看不出这套主题在第六个小时里是什么感觉。色卡上的对比度和滚动屏幕上的对比度是两件事，所以眼疲劳设置单独写了一篇。

动手前有两个前提得先说清：

- 预览效果取决于你打开的文件。同一个主题在 Python 文件里和在 YAML 文件里长得不一样，因为语法着色是按语言分的。请打开你真正常写的那种文件。
- 预览挑不出平台不匹配。为 `codex-cli` 做的 `.tmTheme` 在桌面版里始终不显示，预览再好看也没用。CLI 与桌面版的对比那篇列了哪种安装方式在哪边能用。

## 桌面版：先看皮肤页，再粘贴

[Clear Glass](/skins/clear-glass/) 是桌面版预览路径最典型的例子。它的页面给出 `#E8EFF5` 主色、`light-airy` 分类、clean 的情绪标签和 `prompt` 安装格式，整套方案在改配置之前就摊在你面前。应用只需要往 Codex 里粘一句：

```
Codex, apply the 'Clear Glass' light theme: a clean glassy low-distraction surface for my workspace.
```

它来自 Fei-Away 的 Codex Dream Skin 引擎，1,620 次安装、305 个赞，在索引里标记为精选。桌面版预览有一个缺口：皮肤页上的截图是静态渲染，它没法告诉你主色压在你的编辑器背景或终端上是什么样。如果你桌面版和 CLI 同时开着，两边都要看。

## CLI：先 `codex-theme preview`，再 `codex-theme apply`

CLI 这边给的是真的预览命令，不是一张图。基于 Go 的 Codex Themes CLI 能渲染配色而不写入：

```bash
codex-theme preview amber-nocturne
codex-theme apply amber-nocturne
```

[amber-nocturne](/skins/amber-nocturne/) 来自 ychampion，主色 `#3B2F1E`，归入 `dark-midnight`，情绪是 warm，410 次安装、66 个赞。它的安装格式是 `tmtheme`，预览命令的意义就是让你在文件落盘之前先看到这套暖暗色调。

Bearded Theme Ports 走的是另一条路。[Monokai Stone (CLI)](/skins/monokai-stone/) 先跑脚本安装，再在会话里选：

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
/theme Monokai Stone
```

这条路没有 dry-run 开关。最接近预览的做法是应用之后打开一个你熟悉的文件，心里记着 `codex-theme rollback`。1,500 次安装、290 个赞，它是这里用得最多的 CLI 端口，翻车概率不高。

## 四条预览路径摆在一起

| 路径 | 平台 | 预览方式 | 回滚 | 示例皮肤 |
|---|---|---|---|---|
| 皮肤页加粘贴 | codex-desktop | 静态渲染、主色 hex、分类 | 重置步骤 | [Clear Glass](/skins/clear-glass/) |
| `codex-theme preview` | codex-cli | 实时渲染，不写盘 | `codex-theme rollback` | [amber-nocturne](/skins/amber-nocturne/) |
| 安装脚本加 `/theme` | codex-cli | 应用后再看 | `/theme` 换一个 | [Monokai Stone (CLI)](/skins/monokai-stone/) |
| 画廊提示词 | codex-desktop | 静态渲染 | 重置步骤 | [Vivid Purple (CLI)](/skins/vivid-purple-cli/) |

第二行是唯一不写任何东西的路径。一次要对比好几个候选的时候，就用这条路，其余的跳过。

## 两分钟检查清单

- 打开一个你最常写的语言的文件。语法着色按语言走，某个主题可能在 Python 里很强、在 YAML 里很平。
- 读一个函数体，不要通读整篇。视线停在屏幕中段，主色难看就是难看在这里。
- 看一眼状态栏和 diff 侧栏。这两处是预览最容易骗人的地方，因为画廊色卡上都没有。
- 把屏幕调暗一次。能在低亮度下站住的配色，才是晚上十一点还能用的配色。夜间护眼那篇讲得更细。
- 拿主色和你的终端对一下。两边不一致就跑 `codex-theme export`，或者读终端同步那篇。

## 今天就预览一个

用桌面版想要浅色界面，就打开 [Clear Glass](/skins/clear-glass/)；在 CLI 上就跑 `codex-theme preview amber-nocturne`。awesomecodexskin.com 上每个皮肤都在详情页标了安装格式、主色 hex 和适用平台，预览在你安装任何东西之前就开始了。安装指南逐条讲了每种方法，完整索引在 [/skins/](/skins/)，其余文章在 [/blog](/blog)。
