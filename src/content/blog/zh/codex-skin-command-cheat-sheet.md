---
title: "Codex 皮肤命令速查表"
description: "一张表收齐所有 codex 皮肤命令：/theme、/skin、列出已安装主题、从终端切换、回滚。复制、粘贴、完事。"
pubDate: "2026-10-03"
updatedDate: "2026-10-03"
tags: ["commands", "cli", "tips", "cheat-sheet"]
category: "tips"
relatedSkins: ["monokai-stone-cli", "solarized-cli", "tokyo-night-cli", "vivid-purple-cli"]
lang: "zh"
faq:
  - q: "codex 皮肤命令一共有哪些？"
    a: "分三族：Codex CLI 里的 /theme 与 /theme <名称>；Codepilot TUI 里的 /skin；以及 Codex Themes CLI 的 codex-theme 子命令（apply、rollback、export）。安装脚本是一次性的 shell 命令，不属于 TUI 命令。"
  - q: "怎么列出已安装的 codex 皮肤？"
    a: "在 Codex CLI 里运行 /theme。它会打印当前安装的所有主题端口，并让你挑一个。如果列表是空的，先跑一次 Bearded Theme Ports 安装脚本，再重新打开提示符。"
  - q: "能不能不开选择器，直接从终端切换 codex 皮肤？"
    a: "可以。Codex CLI 里用 /theme Tokyo Night 按名称直接应用；在普通 shell 里用 codex-theme apply <slug> 按索引 slug 应用。"
  - q: "为什么 /theme 什么都没显示？"
    a: "说明还没有安装任何主题端口。先跑安装脚本，重启 Codex CLI，/theme 的命令列表就会填满了。"
---

codex 皮肤命令数量不多，却分散在三个地方：CLI、Codepilot TUI，还有一个独立的 Go 工具。第一次装皮肤的时候大家都会卡在同一个地方 —— 不知道该在哪条提示符里敲哪个命令。这张速查表把它们收进一张表，标明每条命令该在哪儿执行、会改到什么，方便你复制完就走，不用再翻三份文档。

## 命令表

| 命令 | 位置 | 作用 |
|---|---|---|
| `/theme` | Codex CLI | 打印已安装主题列表并打开选择器 |
| `/theme <名称>` | Codex CLI | 按名称应用主题，例如 `/theme Tokyo Night` |
| `/skin` | Codepilot TUI | 挑一个内置的 TUI 皮肤（共 16 个） |
| `codex-theme apply <slug>` | Codex Themes CLI | 按索引 slug 应用皮肤 |
| `codex-theme rollback` | Codex Themes CLI | 撤销上一次应用 |
| `codex-theme export` | Codex Themes CLI | 把同一套配色写进你的终端配置 |
| Bearded Theme Ports 安装脚本 | shell | 一次性安装，让 `/theme` 变得有内容 |

每台机器跑一次的安装命令：

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
```

## 怎么列出已安装的 codex 皮肤

1. 打开 Codex CLI，运行 `/theme`。
2. `/theme` 的命令列表会显示当前装好的所有端口 —— 有多少显示多少，不会多也不会少。
3. 如果是空的，先跑上面的安装脚本，关掉提示符再打开。端口是在启动时读取的。

Codex Themes CLI 在正式应用之前多了一步预览：先 `codex-theme preview <slug>` 渲染出配色但不写入，这在你想拿 [Tokyo Night CLI](/skins/tokyo-night-cli/) 对着浅色终端做对比时，是更稳妥的顺序。

## 从终端切换 codex 皮肤

不必打开选择器。直接点名，主题立刻应用：

```bash
# 在 Codex CLI 里
/theme Monokai Stone
/theme Solarized

# 在普通 shell 里，用索引 slug
codex-theme apply amber-nocturne
```

两件事值得记住。有些端口在启动时会缓存配色，所以应用之后如果配色不对，先重启 Codex CLI，别急着判定失败。另外在对比两个候选时，`codex-theme rollback` 比重新按名字应用上一个主题更快。

## 值得记住的 codex 皮肤快捷用法

- **名称匹配很宽松。** 在 CLI 提示符里，`/theme Monokai Stone` 中间的空格不用加引号。
- **方向键加回车** 在列表不长的时候比打全名更快。
- **先预览再应用。** `codex-theme preview` 放在 `codex-theme apply` 前面，每次能省掉一次重启。
- **导出一次就够。** `codex-theme export` 把同一套配色写进终端配置，提示符和 Codex 就不再各说各话。
- **动手之前先记住回滚。** 一次 `codex-theme rollback` 就能撤销一次不满意的应用。

## 命令悄悄没反应的时候

- **`/theme` 什么都不打印** —— 还没装端口。跑安装脚本，再打开提示符。
- **应用之后配色不对** —— 重启 Codex CLI，端口在启动阶段缓存配色。
- **`/skin` 不被识别** —— 它只存在于 Codepilot TUI（`npm i -g @charzhu/codepilot`）里，原版 Codex CLI 没有。
- **桌面版对 `/theme` 没反应** —— CLI 皮肤只改配色。桌面版皮肤的安装方式不同，两条路都写在[安装指南](/blog/how-to-install-codex-skins/)里。
- **两个主题同名** —— 显示名称完全一样的端口在选择器里会撞车。改用 `codex-theme apply` 按 slug 应用，不会有歧义。
- **更新之后改动没了** —— Codex 升级可能重置主题目录。重新跑一次 `/theme` 再应用一次；如果反复发生，就把安装脚本放进你的 dotfiles，恢复只需要一条命令。
- **Codex 外面的终端还是不一样** —— `/theme` 只给 Codex 上色。跑一次 `codex-theme export`，提示符、选中高亮和背景就会跟着同一套配色走。

一个值得养成的习惯：把你最后定下来那套效果对应的命令原样记下来。半年后重装机器时，那一行比重新读一遍选择器快得多。

## 接下来看什么

这里提到的四款皮肤都在[单色与终端分类](/skins/category/mono-terminal/)里：[Monokai Stone CLI](/skins/monokai-stone-cli/)、[Solarized CLI](/skins/solarized-cli/)、[Tokyo Night CLI](/skins/tokyo-night-cli/) 和 [Vivid Purple CLI](/skins/vivid-purple-cli/)。如果你想知道每种安装格式背后的区别，可以接着看[Codex 皮肤文件格式详解](/blog/codex-skin-file-formats-explained/)；[皮肤索引](/skins/)里则是目前收录的全部条目。刚上手、还没装过任何端口的话，照着[安装指南](/blog/how-to-install-codex-skins/)走一遍，再回来看这张表会更顺。
