---
title: "如何移除/卸载 Codex 梦幻皮肤"
description: "干净地卸载 Codex 梦幻皮肤并在 macOS 和 Windows 上恢复默认的 Codex 外观——删除预设，重置活动主题，并清除残留配置。"
pubDate: "2026-08-20"
updatedDate: "2026-08-24"
tags: ["dream-skin", "uninstall", "tips"]
category: "tips"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "solarized"]
faq:
  - q: "卸载 Dream Skin 会删除我应用的皮肤吗？"
    a: "如果首先恢复默认设置，那么 —— Codex 会恢复到其内置主题。由 Dream Skin 存储的自定义预设将随应用一起被删除。"
  - q: "我可以稍后重新安装 Codex Dream Skin 吗？"
    a: "是的，Dream Skin 是免费且开源的；从官方仓库重新安装后，您的皮肤页面提示仍然有效。"
  - q: "移除梦幻皮肤会影响其他引擎吗？"
    a: "不，但一次只能安装一个活动的适配器，以避免最后胜出的冲突。"
lang: "zh"
---

更改主意，或切换到其他引擎？移除 Codex Dream Skin 非常简单，但**彻底卸载**很重要——部分卸载会保留当前主题并可能与下一个引擎产生静默冲突。以下是 macOS 和 Windows 上的正确移除方法。

## 开始前：先重置当前主题

Dream Skin 可能是当前 **Codex 主题的激活应用者**。在它仍处于激活状态时卸载应用程序，可能会导致自定义主题无法管理。

1. 打开 Dream Skin。
2. 使用 **恢复默认** 将 Codex 恢复为原始外观。
3. 在继续之前，请确认 Codex 中显示的是默认主题。

如果您要切换到其他引擎（如 [Codex Skin Manager](/blog/codex-skin-manager-guide/)），请先安装该引擎，将其设置为新的激活应用者，然后再卸载 Dream Skin —— 这可以避免没有引擎可以更改主题的空白期。

## 在 macOS 上移除

1. 退出 Dream Skin 和 Codex Desktop。
2. 将 Dream Skin 应用程序从“应用程序”拖到“废纸篓”。
3. 清理残留的配置文件夹（如果存在）：`~/Library/Application Support/Codex-Dream-Skin/`（或您安装时的精确文件夹名称）。
4. 清空废纸篓。

## 在 Windows 上移除

1. 关闭 Dream Skin 和 Codex Desktop。
2. 通过 **设置 → 应用 → 已安装的应用程序**（或控制面板中的“添加或删除程序”）进行卸载。
3. 如果还存在残留数据文件夹，请删除它：`%APPDATA%\Codex-Dream-Skin`（或您的安装写入的任何位置）。
4. 如果您是从源代码安装或通过包管理器安装的，请运行对应的卸载命令。

## 确认没有遗留内容

卸载后，请确认：

- Codex 显示的是 **默认主题**（如果您首先重置了当前主题，它应该如此）。
- 没有 Dream Skin 进程正在运行（检查活动监视器 / 任务管理器）。
- 没有第二个引擎现在试图成为应用者——如果您安装了另一个引擎，请确保它是当前激活的。

## 转换到其他引擎？

大多数人卸载 Dream Skin 是为了切换到其他引擎。不确定哪种引擎适合您？[Dream Skin vs Skin Manager](/blog/codex-dream-skin-vs-skin-manager/) 对比分析了两种桌面选项。常见的两种路径如下：

- **转向画廊界面：** [Codex Skin Manager 指南](/blog/codex-skin-manager-guide/)
- **转向 CLI 主题：** [引擎对比](/blog/codex-skin-engines-compared/) 介绍了像 Codex Themes CLI 和 Codepilot 这样的 CLI 选项

如果您只是想要一个不同的 *皮肤* 而不是不同的 *引擎*，请浏览 [皮肤索引](/skins/) —— 切换皮肤总是比切换引擎更快。

## 快速常见问题

**卸载 Dream Skin 会删除我应用的皮肤吗？**
如果您首先重置为默认主题，不会 —— Codex 会返回其内置主题。Dream Skin 存储的自定义预设会随应用程序一起被删除。

**我可以之后重新安装吗？**
可以，Dream Skin 是免费开源的；您可以从官方仓库重新安装，您的皮肤页面提示仍然有效。

**移除 Dream Skin 会影响其他引擎吗？**
不会，但请只安装一个激活的应用者以避免最后胜出的冲突。
