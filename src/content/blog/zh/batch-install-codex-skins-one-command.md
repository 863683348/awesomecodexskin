---
title: "一条命令批量安装 Codex 皮肤"
description: "批量安装 codex 皮肤用一行命令就能把四五个主题装进机器。一次安装多个 codex 主题的循环写法、批量皮肤安装在回滚与启动缓存上的表现，以及适合放进第一批的四个皮肤。"
pubDate: "2026-10-14"
updatedDate: "2026-10-14"
tags: ["批量安装-codex-皮肤", "安装多个-codex-主题", "批量皮肤安装", "技巧"]
category: "tips"
relatedSkins: ["monokai-stone-cli", "solarized-cli", "tokyo-night-cli", "vivid-purple-cli"]
lang: "zh"
faq:
  - q: "能在 Windows 上用一条命令安装多个 codex 主题吗？"
    a: "上面那个循环在 PowerShell 里改一点语法就能跑，用 Git Bash 则照原样可用。Windows 安装那篇给了 PowerShell 写法。"
  - q: "批量皮肤安装会拖慢 Codex 吗？"
    a: "不会。apply 只是写入一份配色，不增加运行时开销。具体数字在性能那篇。"
  - q: "循环里有一个 slug 写错了会怎样？"
    a: "那一次失败，其余继续。失败的 apply 会保留上一个主题，所以打错字只丢一个皮肤，不会毁掉整批。"
  - q: "一批放几个皮肤合适？"
    a: "四到五个。够做对比，又不至于让选择器长到看不清名字。"
---

在已经顺手的机器上，一次装一个皮肤没什么问题。换成新笔记本、重装系统或者第二台工作站，就不是那么回事了，批量安装 codex 皮肤这时候才显出价值。一个循环能在一次选择器的时间里装好四五个主题，而批量皮肤安装碰巧也是来回对比配色最快的办法，你不用先定下来再住进去。awesomecodexskin.com 的索引现在已经收了 103 个皮肤，真正费工夫的是把范围收窄。挑好想要的再一次性装上，反倒是最轻松的部分。

## 批量皮肤安装为什么比一个个装划算

每台机器上有三件事要做，跟你想要几个皮肤无关：跑一次安装脚本、Codex 在启动时读取主题目录、重启一次让配色生效。做一次然后装五个，或者做五次每次装一个。前一种快得多。

第二个理由是对比。配色靠记忆判断不准。四个主题同时躺在你的 `/theme` 列表里，你可以在一个会话里来回切，而不是靠回忆三次重启之前那个暖暗色到底什么样。预览那篇讲了切换时该盯哪些地方。

## 一次安装多个 codex 主题的循环

安装脚本跑一次，然后按 slug 循环应用。全部内容就这些：

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh

for s in monokai-stone-cli solarized-cli tokyo-night-cli vivid-purple-cli; do
  codex-theme apply "$s"
done
```

循环跑完重启 Codex CLI。端口在启动阶段缓存配色，apply 之后配色看着没变，多数情况只是没刷新，不是坏了。命令速查那篇列了其余的指令，包括想在提示框里切而不是在 shell 里切时可以用的 `/theme <Name>`。

把这个循环写进 dotfiles，重装系统就只剩一次粘贴。这段值得留着，因为半年后你不会记得当初定下来的是哪四个 slug。

## 第一批该放什么

四个 CLI 皮肤覆盖了索引里的主要风格，而且安装格式都是 `prompt`，走同一条安装路径，批量处理很干净：

| 皮肤 | 主色 | 分类 | 情绪 | 安装量 |
|---|---|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | `#272822` | mono-terminal | balanced | 1,500 |
| [Solarized (CLI)](/skins/solarized-cli/) | `#FDF6E3` | mono-terminal | balanced | 1,340 |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | `#1A1B26` | dark-midnight | balanced | 980 |
| [Vivid Purple (CLI)](/skins/vivid-purple-cli/) | `#A020F0` | other | balanced | 620 |

[Monokai Stone (CLI)](/skins/monokai-stone-cli/) 是索引里应用最多的端口，1,500 次安装；[Solarized (CLI)](/skins/solarized-cli/) 的 `#FDF6E3` 正好是它的浅色对照。[Tokyo Night (CLI)](/skins/tokyo-night-cli/) 归在 `dark-midnight`，[Vivid Purple (CLI)](/skins/vivid-purple-cli/) 则适合你想看看高饱和主色到什么程度才开始刺眼。两暗一浅一跳，是能用的第一批。

一批控制在四到五个。再多，`/theme` 选择器就长到你不再认真看名字，你为了对比而跑的这一批就白跑了。

## 批量应用解决不了的事

- **回滚只撤一步。** `codex-theme rollback` 撤销的是最后一次 apply，不是整个循环。整批装错了就按 slug 重新应用你想要的那个，别连着回滚四次。
- **平台不匹配不会因为循环消失。** 这四个在索引里标的是 `codex-desktop`，走的却是 CLI 路径。桌面版安装是另一条路，安装指南里讲了。
- **重名照样会撞。** [Monokai Stone (CLI)](/skins/monokai-stone-cli/) 和非 CLI 的 Mono 端口在选择器里同名。按 slug 应用正是让循环不会有歧义的原因。
- **Codex 更新可能重置主题目录。** 遇到这种情况重跑循环，别手工一个个补。如果你同时跑多个引擎，先看多引擎共存那篇。

在同一个循环里把 `codex-theme preview "$s"` 放在 apply 前一行，多敲一次就能先看后装。往天天用的机器上装的时候值得这么做。

## 常见问题

**能在 Windows 上用一条命令安装多个 codex 主题吗？**
上面那个循环在 PowerShell 里改一点语法就能跑，用 Git Bash 则照原样可用。Windows 安装那篇给了 PowerShell 写法。

**批量皮肤安装会拖慢 Codex 吗？**
不会。apply 只是写入一份配色，不增加运行时开销。具体数字在性能那篇。

**循环里有一个 slug 写错了会怎样？**
那一次失败，其余继续。失败的 apply 会保留上一个主题，所以打错字只丢一个皮肤，不会毁掉整批。

**一批放几个皮肤合适？**
四到五个。够做对比，又不至于让选择器长到看不清名字。

## 今天就跑第一批

复制这个循环，换成你要的 slug，重启提示框。awesomecodexskin.com 上每个皮肤的详情页都标了安装格式、主色 hex 和平台标签，列清单花的时间比安装还长。完整目录在 [/skins/](/skins/)，安装指南逐步讲了每种方法，其余文章在 [/blog](/blog)。
