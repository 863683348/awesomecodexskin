---
title: "Codex CLI 主题：如何使用 /theme 和终端皮肤"
description: "关于 Codex CLI 主题的所有内容：安装 Tokyo Night、Monokai Stone 和 Solarized 等语法主题，使用 `/theme` 命令，以及通过 CLI 工具管理调色板。"
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "zh"
---

Codex CLI 并未采用与 Codex Desktop 相同的皮肤系统。CLI 主题不改变视觉边框（visual chrome），而是调整**终端配色方案**——包括背景色、前景色及语法高亮颜色——从而确保您的命令提示符与输出内容在终端中始终保持清晰可读。

## `/theme` 命令

使用 CLI 主题最快捷的方式是内置的 `/theme` 命令：

```bash
# 在 Codex CLI 中执行：
/theme
```

该命令将列出所有已安装的主题，从中任选其一即可立即启用。

## 安装语法主题

语法主题（例如 Monokai Stone、Tokyo Night、Solarized）通过专用脚本安装，该脚本会将配色方案自动适配并写入 Codex CLI 的主题目录：

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# 然后执行：
/theme Tokyo Night
```

Bearded Theme Ports 仓库提供了 50 多种 Bearded 风格变体，涵盖 Solarized、Tokyo Night、Monokai Stone 等主流配色方案。

## 使用 CLI 工具管理主题

以下两款工具可大幅简化 CLI 主题管理工作：

- **Codex Themes CLI**（`ychampion/codex-themes`）——基于 Go 编写的命令行工具：支持配色方案校验、预览、应用、回滚及导出功能，特别适合希望终端与 Codex CLI 共享同一套配色方案的用户。
- **Codepilot**（`charzhu/codepilot`）——一款集成了 TUI 个性化功能的 Codex CLI 发行版：

```bash
npm i -g @charzhu/codepilot
# 然后在 TUI 界面中运行 /skin 命令，即可选择内置主题
```

Codepilot 自带 16 种内置 TUI 皮肤（含背景色与界面表层色组合）。

## 索引中热门的 CLI 主题

| 皮肤 | 风格 | 安装方式 |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | 经典语法配色方案 | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | 标志性的复古配色方案 | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | 深蓝调东京夜风格 | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | 温暖深色系终端风格 | `codex-theme apply amber-nocturne` |

## 故障排查

- **`/theme` 提示“未安装任何主题”** —— 请先运行安装脚本，再重新打开终端会话。
- **配色显示异常** —— 应用新主题后，请重启 Codex CLI；部分移植版本会在启动时缓存配色。
- **希望终端配色与 Codex CLI 保持一致** —— 可使用 Codex Themes CLI 的导出功能，将当前配色方案写入您的终端配置文件。

浏览全部 [Mono 与终端皮肤](/skins/category/mono-terminal/)，或从 [安装指南](/blog/how-to-install-codex-skins/) 开始上手。
