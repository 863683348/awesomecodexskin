---
title: "如何在 Codex CLI 中更改主题：/theme 命令与终端配色方案"
description: "在 Codex CLI 中更改主题的分步指南——使用 `/theme` 命令、安装 Tokyo Night 和 Monokai Stone 等语法调色板，以及匹配您的终端。"
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "zh"
---

在 Codex CLI 中切换主题的流程与 Codex Desktop 不同。Codex CLI 主题不更改视觉界面元素，而是替换**终端配色方案**——包括背景色、前景色及语法高亮颜色——从而确保您的命令提示符、自动补全建议和命令输出在 Shell 中始终保持清晰可读。

以下是从一键式 `/theme` 切换器到安装全新配色方案的完整操作流程。

## 最快捷的方式：`/theme`

Codex CLI 内置了主题命令。在命令行中输入：

```bash
/theme
```

即可列出当前已安装的所有主题。使用方向键（或直接键入主题名称）即可即时启用某一个主题——无需重启应用。若您已安装如 Tokyo Night 这类语法配色方案，它将以其准确名称出现在该列表中：

```bash
/theme Tokyo Night
```

## 首先安装新的配色方案

`/theme` 仅显示您已安装的主题。语法配色方案（如 Tokyo Night、Monokai Stone、Solarized）需通过专用脚本安装，该脚本会将配色方案导入 Codex CLI 的主题目录：

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# 然后列出并应用：
/theme
```

Bearded Theme Ports 仓库提供了 50 多种变体——包括 Solarized、Tokyo Night、Monokai Stone 等——让您几秒钟内即可试用多种配色方案。

## 使用主题管理器实现回滚与终端同步

若您频繁切换主题，CLI 主题管理器可消除手动配置的不确定性：

- **Codex Themes CLI**（`ychampion/codex-themes`）——一款 Go 编写的 CLI 工具，支持**校验、预览、应用、回滚及导出**配色方案至您的终端配置文件。使用 `codex-theme apply <name>` 应用主题；一条命令即可切回上一主题。
- **Codepilot**（`charzhu/codepilot`）——一款内置 TUI 的 Codex CLI 发行版：

```bash
npm i -g @charzhu/codepilot
# 在 TUI 中运行 `/skin`，从 16 种内置皮肤中任选其一
```

## 统一终端与编辑器配色

当终端、CLI 和编辑器共用同一套配色方案时，整体视觉效果最佳。借助 Codex Themes CLI，您可将同一套配色导出至终端配置文件，一次应用即实现 Shell 与 Codex CLI 的色彩一致。再搭配已移植的编辑器主题（例如 VS Code 中的 Tokyo Night），即可打造风格统一的开发工作区。

## 快速参考：主流 CLI 配色方案

| 皮肤 | 风格 | 应用方式 |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | 经典语法配色 | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | 深蓝底色，低眩光 | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | 标志性复古配色 | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | 温暖深色终端风格 | `codex-theme apply amber-nocturne-cli` |

## 故障排查

- **主题未出现在 `/theme` 列表中** —— 请先运行安装脚本，然后重新打开命令行提示符。
- **切换后颜色显示异常** —— 重启 Codex CLI；部分配色方案会在启动时缓存颜色值。
- **希望 Shell 也使用相同配色** —— 使用 Codex Themes CLI 的导出功能，将配色写入您的终端配置文件。

浏览全部 [Mono & Terminal 皮肤](/skins/category/mono-terminal/)，或阅读 [完整的 CLI 主题指南](/blog/codex-cli-themes-guide/) 获取更详尽的信息。
