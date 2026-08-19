---
title: "如何安装 Codex 皮肤（桌面版与命令行版）：完整指南"
description: "分步指南：安装 Codex Desktop 和 CLI 主题皮肤——包含可直接复制粘贴的命令、Dream Skin 等主题引擎、CLI 主题，以及如何切换或卸载主题。涵盖 macOS 和 Windows 系统。"
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["install", "guide", "desktop", "cli", "themes"]
category: "guide"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
lang: "zh"
---

Codex 皮肤可让您自定义 OpenAI Codex Desktop 和 Codex CLI 的外观，使工作区风格契合您的个人审美——例如适合夜间使用的深色低光配色、适合日间使用的柔和粉彩界面，或仅为趣味而设的霓虹风格。

本指南涵盖所有安装 Codex 皮肤的方式，从一键复制粘贴安装提示，到使用命令行主题管理工具。

## 快速入门

本索引中大多数皮肤的安装方式相同：

1. 选择一款皮肤，并打开其详情页面。
2. 复制安装提示（若为 `.codedrobe-theme` 格式皮肤，则下载主题文件）。
3. 将提示粘贴至 Codex Desktop 中，或在 Codex CLI 中运行对应命令。
4. 主题引擎将立即应用配色方案——多数引擎无需重启即可生效。

仅此而已。皮肤本质是配置而非代码，因此切换快速且可逆。

## 方法一：复制粘贴安装提示（最快）

大多数 Codex 皮肤——尤其是来自开源注入引擎 [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin) 的引擎预设——均可通过一条自然语言提示完成安装。

在任一皮肤的详情页面中，“**安装提示**”框内会显示一条可直接复制粘贴的指令，例如：

```text
Codex，应用“Clear Glass”浅色主题——为我的工作区提供干净通透、低干扰的玻璃质感界面。
```

复制该提示，在 Codex 中打开并粘贴。引擎将解析提示，并自动应用该主题所定义的配色、边框与强调色。

> **提示：** 若提示应用的是预设方案，引擎会将其保存下来，您日后可通过单击一次即恢复默认主题。

## 方法二：下载主题文件（`.codedrobe-theme`）

部分皮肤以可下载的 `.codedrobe-theme` 文件形式分发。操作步骤如下：

1. 在皮肤页面点击 **下载 .codedrobe-theme**。
2. 将文件保存至任意方便的位置。
3. 在 Codex Desktop 中直接打开该文件——受支持的引擎将自动导入该主题。

此方法常见于 codexskins.org 等托管现成主题文件的主题图库。

## 方法三：使用命令行安装 CLI 主题

Codex CLI 主题采用不同的安装路径。采用 `tmtheme` 安装格式的皮肤（例如 Bearded Theme Ports）可通过单条命令完成安装：

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# 然后在 Codex CLI 中运行：
/theme Tokyo Night
```

[Codex Themes CLI](https://github.com/ychampion/codex-themes) 和 [Codepilot](https://github.com/charzhu/codepilot) 等工具可为您统一管理 CLI 主题——支持校验、预览、应用、回滚，以及导出匹配的终端配色方案。

## 哪些引擎支持皮肤？

| 引擎 | 支持平台 | 安装方式 |
|---|---|---|
| Codex Dream Skin | macOS、Windows | 智能体提示 / 预设 |
| Codex Skin Manager | macOS、Windows | 内置管理器 |
| Codex Themes（桌面版） | macOS | `.codextheme` 导入 |
| ReTheme | macOS、Windows | 已签名社区主题 |
| Codex Themes CLI | 跨平台 | CLI `/theme` 命令 |
| Codepilot | 跨平台（npm） | 内置 TUI `/skin` 命令 |

## 如何切换或还原皮肤

- **预设类引擎（如 Dream Skin 等）：** 引擎会保留原始默认预设——通常只需点击“恢复默认”按钮，即可一键还原初始外观。
- **CLI：** 执行 `/theme` 可列出已安装主题；再次运行该命令并指定其他主题名称即可切换。
- **主题文件：** 重新导入此前保存的 `.codedrobe-theme` 文件，或重新运行引擎的默认初始化流程。

## 推荐初学者尝试的热门皮肤

- [Gothic Void Expedition](/skins/gothic-void-expedition/) —— 引擎内置的深色默认主题。
- [Clear Glass](/skins/clear-glass/) —— 明亮通透的玻璃质感界面，适合日间使用。
- [Monokai Stone](/skins/monokai-stone/) —— 经典 CLI 配色方案。
- [Hatsune Miku](/skins/hatsune-miku/) —— 充满蓝绿色调活力的初音未来风格。

浏览 [完整皮肤索引](/skins/)，探索 100+ 款更多主题；或阅读我们的 [教程](/tutorial/)，了解各引擎的详细配置说明。
