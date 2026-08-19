---
title: "Codex 皮肤格式对比：codedrobe 与 codextheme 与 tmtheme 与 preset"
description: "四种皮肤格式，四种引擎，一个生态系统。哪种格式最便携？哪种正在消亡？需要时如何在它们之间转换？"
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["formats", "ecosystem", "compatibility"]
category: "compare"
relatedSkins: ["monokai-stone", "solarized", "tokyo-night-ychampion", "vivid-purple-cli"]
lang: "zh"
---

Codex 皮肤生态尚处早期，这意味着相关格式仍在演进定型中。目前共有四种格式并存，且彼此并不完全兼容。了解它们，可避免下载到您的引擎无法识别的文件。

## 四种格式

| 格式 | 引擎类型 | 加载方式 | 可移植性 |
|---|---|---|---|
| `.codedrobe-theme` | Codedrobe 风格图库（如 codexskins.org） | 文件导入 | 中等 — 少数引擎支持读取 |
| `.codextheme` | 桌面管理器（如 Codex Themes for desktop） | 文件导入 | 中等 |
| `tmtheme` | CLI 主题移植版（如 bearded、终端语法主题） | CLI `/theme` 命令加载 | 高 — 与编辑器主题格式一致 |
| `preset` | 提示引擎（如 Dream Skin） | 自然语言提示词 | 低 — 依赖特定引擎对措辞的理解 |

## `.codedrobe-theme` — 图库标准格式

由 codexskins.org 等在线图库用于分发开箱即用的主题文件。若您看到“下载 .codedrobe-theme”，所获即为此格式。部分桌面端引擎已支持；通常只需单击即可完成导入。

**适用场景：** 快速获取经专业设计师打磨、无需额外配置的主题。  
**注意事项：** 并非通用格式 — 下载前请确认您的引擎明确支持该扩展名。

## `.codextheme` — 桌面管理器专用格式

桌面主题管理器（尤其是 Codex Themes for desktop）所采用的格式。结构上与 `.codedrobe-theme` 相近，实践中有时可互换，但引擎未必同时兼容两者。

**适用场景：** 已安装桌面管理器的用户。  
**注意事项：** 扩展名与 `.codedrobe-theme` 易混淆 — 二者外观相似，但无兼容性保证。

## `tmtheme` — CLI 核心工作格式

源自终端主题的 `tmtheme` 格式，已成功适配至 Codex CLI（本索引中 bearded 系列移植版即为最清晰范例）。该格式与 TextMate / 编辑器语法主题同源，生态极为庞大 — 任何符合 `tmtheme` 规范的调色板，均可通过移植脚本轻松接入 Codex CLI。

**适用场景：** CLI 用户，追求最丰富的调色板选择。  
**注意事项：** `tmtheme` 文件主要定义语法着色，未必覆盖完整 UI 表面（如面板、边框等）— 您可能需额外配置以补全视觉元素。

## `preset` — 提示词格式

它并非文件：而是一段自然语言描述，由 Dream Skin 等提示引擎解析执行。“暖琥珀色夜主题，低饱和度”即为一个 `preset`。此类描述存储于引擎自身的预设列表中。

**适用场景：** 快速尝试与高频迭代。  
**注意事项：** 完全不可移植 — 同一 `preset` 仅在理解该表述逻辑的引擎内有效。

## 格式间如何转换？

- **tmtheme ↔ preset：** 无法直接互转 — 前者是结构化规范，后者是语义化描述。需基于调色板重新撰写描述文本。  
- **tmtheme → .codextheme：** 通常可行，借助简易脚本即可完成。因二者均为结构化色彩定义，当前多数 CLI 移植版均由此路径起步。  
- **codedrobe ↔ codextheme：** 有时可直接替换使用；若您的引擎同时接受两种扩展名，建议逐一测试。

通用原则：**结构化格式（tmtheme、codedrobe、codextheme）比纯文本格式（preset）具备更强互操作性。** 若您正构建长期维护的皮肤库，请优先选用结构化格式。

## 快问快答

**哪一种才是 Codex “官方” 格式？**  
目前尚无官方定论。整个生态正通过实际使用情况逐步形成共识：`tmtheme` 系列 CLI 移植版势头最强，而提示类 `preset` 用户基数最大。

**未来是否会统一为单一格式？**  
大概率将收敛至某一种结构化格式 — 这正是编辑器主题的发展路径。但提示词不会消失，它始终服务于“快速尝鲜”这一核心需求。

**为获得最高兼容性，我该下载哪种格式？**  
推荐选择原生适配 CLI 的主题，例如 [Monokai Stone](/skins/monokai-stone/) 或 [Solarized](/skins/solarized/)（均以 `tmtheme`/CLI 规范发布）—— 它们可导入最广泛的工具链。[Tokyo Night](/skins/tokyo-night-ychampion/) 与 [Vivid Purple (CLI)](/skins/vivid-purple-cli/) 同样广受移植，亦属优质之选。

**如何判断某个皮肤采用何种格式？**  
本索引中每个皮肤详情页均明确标注其安装格式 — 此即关键标识。下载前，请务必核对格式与您所用引擎的兼容性。

格式本质是摩擦点，而非功能亮点。为永久收藏的皮肤库，请选用结构化格式；为探索与实验，请使用提示词；而每个皮肤详情页，会如实告诉您当前面对的是哪一种格式。欢迎浏览 [皮肤索引](/skins/)，或参阅 [引擎对比指南](/blog/codex-skin-engines-compared/)，了解各格式对应的支持软件。
