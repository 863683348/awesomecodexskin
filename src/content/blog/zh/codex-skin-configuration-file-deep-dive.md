---
title: "Codex 皮肤配置文件详解"
description: "Codex 皮肤配置文件在 Windows、macOS、Linux 上分别放在哪里，Codex 主题 JSON 的结构怎么组织，以及哪些改动能在下次更新后保留。"
pubDate: "2026-10-19"
tags: ["codex skin config file", "codex theme json structure", "config location", "codex skin guide"]
category: "guide"
lang: "zh"
relatedSkins: ["monokai-stone", "solarized", "monokai-stone-cli", "clear-glass"]
---

**Codex 皮肤配置文件**是 Codex 在往屏幕上画第一个字符之前要读的那个文件。多数人从来不打开它，这也没问题，直到某次主题只应用了一半，或者你改过的颜色在一次更新后又变回去了。到那时问题总会拆成同样两半：文件放在哪，以及文件里面写的是什么。本文把这两半都讲清楚，最后再用一节讲真正会让你赔上一个下午的部分，也就是哪些改动会被下次更新覆盖。

## 各平台上的配置文件位置

**配置文件位置**在不同平台上并不一致，桌面版和 CLI 各自维护独立的文件。靠猜的结果是改了一份早已过期的副本，然后得出"程序无视了我"的结论。

| 平台 | 引擎 | 常见配置文件位置 |
| --- | --- | --- |
| Windows | Codex Desktop | `%APPDATA%\Codex\themes.json` |
| Windows | Codex CLI | `%USERPROFILE%\.codex\config.json` |
| macOS | Codex Desktop | `~/Library/Application Support/Codex/themes.json` |
| macOS | Codex CLI | `~/.codex/config.json` |
| Linux | Codex Desktop | `~/.config/Codex/themes.json` |
| Linux | Codex CLI | `~/.codex/config.json` |

动手之前有两点值得先确认。第一，如果引擎自带查询路径的命令，先跑一次，因为便携版或沙箱安装会把整个目录挪走。第二，看看你正在工作的仓库里有没有项目级配置。项目级文件优先于用户级文件，而从编辑器的角度看这是正确行为，所以你不会收到任何提示，告诉你用户级的改动被忽略了。

## Codex 主题 JSON 的结构

打开文件，里面的结构没有名字听起来那么复杂。颜色放在一张扁平的映射表里，键是 token、值是颜色，所有装饰性的东西都放在别处。

```json
{
  "name": "monokai-stone",
  "type": "dark",
  "colors": {
    "editor.background": "#272822",
    "editor.foreground": "#F8F8F2",
    "editorCursor.foreground": "#F8F8F2",
    "terminal.ansiRed": "#F92672"
  },
  "tokenColors": [
    {
      "scope": ["comment", "punctuation.definition.comment"],
      "settings": { "foreground": "#75715E", "fontStyle": "italic" }
    }
  ],
  "semanticHighlighting": true
}
```

`colors` 管的是表面：背景、前景、光标、选区，以及集成终端用的那套 ANSI 调色板。`tokenColors` 管语法高亮，它按 scope 匹配而不是按语言匹配，所以一条配置能同时覆盖六种文件类型里的注释。

两条规则冲突时的查找顺序很关键。scope 越具体优先级越高，所以 `comment.line.double-slash` 压过 `comment`；scope 具体程度相同时，靠后的条目压过靠前的。某个颜色死活改不动，原因几乎总是后面有一条 scope 更窄的条目，而不是文件坏了。

## 动手之前值得先认识的几个键

你想要的绝大多数效果，靠六个左右的 token 就能做到，剩下的属于喜欢折腾的人的领域。

- `editor.background` 和 `editor.foreground` 决定基础对比度，其它颜色都以它为参照被评判。
- `editorCursor.foreground` 最容易被漏掉。在低对比度调色板上光标会看不见，而你会去怪主题，而不是这一个 token。
- `terminal.ansi*` 覆盖八个 ANSI 色加各自的亮色变体。除非你也用集成终端，否则别动它们，因为为编辑器语法调出来的调色板可能让 `ls` 的输出没法看。
- `editor.selection.background` 需要和你选中搜索结果时的高亮保持可区分，后者用的是另一个 token。
- `semanticHighlighting` 为 true 时，语言服务器可以覆盖你的 scope 配色。如果精心调好的注释色一直被改回去，把它关掉。

最后这一条解释了整整一类"昨天还好好的"反馈。主题文件没问题，是另一层在往里塞颜色。

## 更新会覆盖什么，又会放过什么

大家就是在这里丢工作的。通用规则是：引擎拥有它自己写的文件，而只读取的文件它不会动。

1. 应用目录里的文件在更新时会被替换，别把手调的颜色放在那儿。
2. 用户配置目录里的文件通常是被读取而不是被重写，所以改动能保留。
3. 由引擎根据你当前设置生成的文件，只要设置一变就会重新生成，这会悄悄丢掉你手动加进去的东西。

想让改动永久生效，就把自己的副本放在两条路径之外，再让引擎指向它，或者用软链接挂进去。版本控制是这件事的另一半。一行 diff 就能告诉你更新到底是改了键名，还是把整个文件重置了，这两种情况需要的修法不一样。

## 看懂报错，而不是靠猜

文件格式出错会导致三种结果之一，而且它们很好区分。

- 主题加载了，但有一个颜色不对：这是值写错了，通常是十六进制字符串少了开头的 `#`，或者写了三位而解析器要六位。
- 主题加载了，但语法高亮很平：JSON 解析通过了，只是 `tokenColors` 里的 scope 和语法实际发出的 scope 对不上。
- 什么都没加载，你拿到默认调色板：JSON 根本没解析成功。最常见的原因是最后一项后面多了个逗号，扫一眼是看不出来的。

有一个习惯能省掉大部分这类麻烦：重新加载之前先校验文件。随便一个 JSON 校验工具都行，粘贴到即将被你改坏的编辑器里的临时缓冲区里也行。

## 常见问题

### 能不能让多台机器共用一份配置文件？

可以，软链接是最省事的做法。把真文件放在 dotfiles 仓库里，在各台机器上链接到对应的配置文件位置，版本控制里的那份就始终是唯一真源。备份和同步整个皮肤库是另一个相关问题，答案在 [Codex 皮肤管理器指南](/blog/codex-skin-manager-guide/)。

### CLI 和桌面版读的是同一个文件吗？

不是。它们有各自的配置文件位置和略有差异的 token 集合，所以同一个调色板可能在一边正常、另一边不对。想让两边一致，就先调好一边再导出，而不是两边各改一遍。导出方法见 [从 Codex 皮肤导出终端调色板](/blog/export-terminal-palette-from-codex-skin/)。

### 为什么重启之后我的改动就没了？

要么这个文件是被生成的而不是被读取的，要么项目级配置压过了它。先查项目目录，因为这两者里它排除起来更快。

### 直接删掉文件重来安全吗？

安全，而且常常比排查更快。引擎会在下次启动时重新生成一份默认配置。代价是丢掉自定义颜色，所以先复制到别处，而不是直接删。

## 让这个文件为你省一次事

搞清楚**配置文件位置**的意义在于不用再猜。挑出最碍眼的两个 token，在你自己那份纳入版本管理的副本里改掉，然后重新加载。想要值得抄的调色板，去 [awesomecodexskin.com](/) 逛；想让终端那半边跟上，就翻[博客索引](/blog/)。本页关联的四款皮肤是套不错的起始组合：一暗、一亮、一个 CLI 变体、一款大量使用透明效果的，合起来正好覆盖上面提到的每一个 token。
