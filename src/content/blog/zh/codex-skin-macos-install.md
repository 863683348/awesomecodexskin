---
title: "macOS 上安装 Codex 皮肤：桌面端、CLI 与访达导入"
description: "在 macOS 上装 Codex 皮肤的正确做法：Codex 真正读取的配置目录、桌面端的预设提示词、访达里拖入 .codedrobe-theme 文件、CLI 用 /theme 切换，以及怎么过掉 Gatekeeper 拦截。含路径对照表与常见故障排查。"
pubDate: "2026-10-24"
tags: ["guide", "macos", "安装", "cli"]
category: "guide"
relatedSkins: ["clear-glass", "forest-mist", "hatsune-miku", "solarized"]
lang: "zh"
faq:
  - q: "macOS 把 Codex 皮肤配置存在哪里？"
    a: "桌面端预设写在 ~/Library/Application Support/Codex/，CLI 主题写在 ~/.codex/themes/。两者是两套独立的存储，在其中一个应用皮肤不会影响另一个。"
  - q: "为什么 macOS 提示主题文件来自身份不明的开发者？"
    a: "Gatekeeper 会拦截未经公证的 .codedrobe-theme 文件。右键点开选择「打开」确认一次即可；也可以在终端用 xattr -d com.apple.quarantine 清掉隔离标记。"
  - q: "桌面端和 CLI 能用同一款皮肤吗？"
    a: "只有同时提供两种格式的皮肤才行。多数角色类和浅色系皮肤是桌面端预设，而 Solarized 这类 bearded 移植版是 CLI 的 /theme 条目。"
---

# macOS 上安装 Codex 皮肤：桌面端、CLI 与访达导入

在 macOS 上装 Codex 皮肤，其实是两件看起来很像、实际毫不相干的事。桌面应用读的是引擎预设和 `.codedrobe-theme` 文件包，CLI 读的是 `~/.codex/` 下的主题目录，靠斜杠命令切换。两者的配置各存各的，在一边应用皮肤，另一边不会有任何变化。动手前先确认你用的是哪个 Codex。macOS 上「皮肤不生效」的反馈里，有一半都是装错了地方。

## macOS 上 Codex 的配置目录

| 项目 | 路径 | 写入方式 |
| --- | --- | --- |
| 桌面端预设 | `~/Library/Application Support/Codex/` | 引擎在收到预设提示词或导入文件包后写入 |
| CLI 主题 | `~/.codex/themes/` | 由安装脚本写入，用 `/theme` 选择 |
| CLI 设置 | `~/.codex/config.toml` | 记录当前主题名与高亮选项 |
| 下载的文件包 | `~/Downloads/` | Safari 存放 `.codedrobe-theme` 的位置 |

`~/Library` 开头的路径在访达里默认隐藏。访达里按 Shift+Cmd+G 粘贴路径，或者在终端执行 `open ~/Library/Application\ Support/Codex/`。

## 用预设提示词应用桌面端皮肤

本站索引里多数皮肤给的是一段可复制的提示词，而不是文件。打开 Codex 桌面端，把皮肤页上的提示词粘进去，引擎会替你把预设写好。[Clear Glass](/skins/clear-glass/) 是 Dream Skin 引擎内置的浅色预设：

```
Codex, apply the 'Clear Glass' light theme, a clean glassy low-distraction surface for my workspace.
```

[Forest Mist](/skins/forest-mist/) 用法相同，归入自然大地类：

```
Codex, switch my workspace to the 'Forest Mist' engine preset, a misty forest theme.
```

改动在下一轮面板重绘时生效。如果界面看起来只更新了一半，关掉窗口重开就行，不必重新安装，面板没刷新是最常见的原因。

## 在访达里导入 .codedrobe-theme 文件

1. 从皮肤来源页下载主题文件包。
2. 双击打开，或者把它拖到 Dock 上的 Codex 桌面端图标。
3. 如果 macOS 拒绝打开，右键点击文件选择「打开」，确认一次即可，之后 Gatekeeper 会记住这个例外。
4. 在皮肤选择器里选中导入的主题并应用。

第 3 步的拦截来自 Gatekeeper，不是文件坏了。社区文件包基本都没做公证，macOS 下载时会给它加隔离标记。习惯用终端的话，`xattr -d com.apple.quarantine ~/Downloads/theme.codedrobe-theme` 可以直接清掉标记，免去弹窗。

## 在 macOS 上装 CLI 主题

CLI 主题由移植脚本安装。macOS 从 Catalina 起默认 shell 是 zsh，所以脚本写入的是 `~/.zshrc` 而不是 `~/.bash_profile`。[Solarized](/skins/solarized/) 是标准示例：

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
```

然后在 Codex CLI 里执行：

```
/theme Solarized
```

如果 `/theme` 没有任何返回，通常是主题目录不存在，或者 `~/.codex` 不在 CLI 读取的路径上。先跑 `ls ~/.codex/themes/` 看看。列表为空说明脚本没跑完，多数情况是脚本执行中途 shell 重启了。

## 让终端配色跟皮肤对上

Codex 皮肤和 iTerm2 配色对不上，只会让人分心。把皮肤的色板导出，在 iTerm2 的 Profiles、Colors、Color Presets、Import 里导入即可。完整步骤见[从 Codex 皮肤导出终端配色](/blog/export-terminal-palette-from-codex-skin/)。

## 装完没反应时的排查顺序

- 装错了对象。桌面端预设到不了 CLI，重装之前先确认你给哪个端换了皮肤。
- 两个引擎写同一个文件。Dream Skin 和 CLI 移植版同时指向一份配置时，最后写入的那个说了算，详见[多引擎共存：Dream Skin + CLI 同时用不打架](/blog/run-multiple-codex-skin-engines-without-conflicts/)。
- 文件包损坏。导入失败的 `.codedrobe-theme` 往往是浏览器改过后缀的压缩包，用 curl 重新下载。
- 引擎版本漂移。Codex 更新后旧预设可能解析不了，格式背景见 [Codex 皮肤文件格式全解](/blog/codex-skin-file-formats-explained/)。

## 常见问题

**需要装 Homebrew 吗？** 不需要。Homebrew 用来装 CLI 本身，皮肤靠提示词、文件包导入或移植脚本就能应用。

**升级 macOS 后皮肤还在吗？** 通常在。`~/Library` 和 `~/` 都会在原地升级中保留；换新机器迁移时记得把配置目录一起拷过去。

**Gatekeeper 报警是不是说明皮肤不安全？** 它只说明文件没签名，而社区皮肤全都没签名。把安装脚本读一遍再管道给 shell，这事儿不管有没有签名都该做。

---

完整的皮肤索引在 [awesomecodexskin 首页](/)，白天写代码的话可以直接看[浅色通透系列](/skins/clear-glass/)。
