---
title: "Codex CLI 主题：如何使用 /theme 和终端皮肤"
description: "关于Codex CLI主题的一切：安装如Tokyo Night、Monokai Stone和Solarized等语法主题，使用/theme命令，以及通过CLI工具管理调色板。"
pubDate: "2026-08-14"
updatedDate: "2026-08-24"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
faq:
  - q: "什么是 Codex CLI 主题？"
    a: "一个 Codex CLI 主题是一个终端配色方案——背景、前景和语法颜色——它保持您的提示符和输出可读。与 Codex Desktop 不同，CLI 没有视觉装饰；主题仅更改颜色。"
  - q: "如何在 Codex CLI 中应用主题？"
    a: "在 Codex CLI 内运行内置的 /theme 命令以列出已安装的主题，然后选择一个主题即可立即应用。"
  - q: "如何安装像东京之夜或Monokai Stone这样的语法主题？"
    a: "安装主题端口脚本（例如 Bearded Theme Ports 安装程序），然后运行 /theme Tokyo Night（或 /theme Monokai Stone）以应用它。"
  - q: "为什么 /theme 没有任何主题？"
    a: "您尚未安装任何主题。请先运行安装脚本，然后重新打开 Codex CLI 提示符 — /theme 命令将列出已安装的主题。"
  - q: "我的终端调色板能与我的Codex CLI主题匹配吗？"
    a: "是的——Codex 主题 CLI（ychampion/codex-themes）可以将相同的调色板导出到你的终端配置文件中，使终端和 Codex CLI 保持同步。"
lang: "zh"
---

Codex CLI 主题会更改**终端颜色调色板**——背景、前景和语法颜色——使您的提示符和输出在终端中保持可读性。您可以通过内置的 `/theme` 命令应用它们：运行 `/theme` 以列出已安装的主题，选择一个主题，它会立即生效。与 Codex Desktop 不同，CLI 没有视觉界面；主题仅仅是您看到的颜色。

## 快速入门

1. 安装一个主题端口（一次性）：`curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh`
2. 打开 Codex CLI 并运行 `/theme`。
3. 选择一个主题（例如 `/theme Tokyo Night`）——它会立即生效。

## /theme 命令

使用 CLI 主题最快的方法是内置的 `/theme` 命令：

```bash
# 在 Codex CLI 中：
/theme
```

这将列出已安装的主题。选择一个即可立即应用。

## 安装语法主题

语法主题（如 Monokai Stone、Tokyo Night、Solarized）通过脚本安装，该脚本将调色板移植到 Codex CLI 的主题目录中：

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# 然后：
/theme Tokyo Night
```

Bearded Theme Ports 仓库包含 50 多种 Bearded 变体——Solarized、Tokyo Night、Monokai Stone 等。

## 使用 CLI 工具管理主题

两个工具让 CLI 主题管理变得轻松：

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go CLI：验证、预览、应用、回滚和导出匹配的终端调色板。如果您希望终端和 Codex CLI 共享一个调色板，这是理想的选择。
- **Codepilot** (`charzhu/codepilot`) — 一个带有内置 TUI 自定义功能的 Codex CLI 发行版：

```bash
npm i -g @charzhu/codepilot
# 然后在 TUI 中运行 /skin 来选择一个内置主题
```

Codepilot 提供了 16 种内置的 TUI 皮肤（背景 + 表面颜色）。

## 索引中的流行 CLI 主题

| 皮肤 | 风格 | 安装 |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | 经典语法调色板 | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | 经典复古调色板 | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | 深蓝色东京之夜 | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | 温暖的深色终端身份 | `codex-theme apply amber-nocturne` |

## 故障排除

- **`/theme` 显示没有安装主题** —— 首先运行安装脚本，然后重新打开提示符。
- **调色板显示不正确** —— 应用后重启 Codex CLI；一些端口会在启动时缓存颜色。
- **想要终端匹配** —— 使用 Codex Themes CLI 的导出功能将相同的调色板写入您的终端配置文件。

浏览所有 [单色与终端皮肤](/skins/category/mono-terminal/) 或从 [安装指南](/blog/how-to-install-codex-skins/) 开始。
