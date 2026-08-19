---
title: "Temas do Codex CLI: Como usar o comando /theme e skins para terminal"
description: "Tudo sobre temas do Codex CLI: instalação de temas de sintaxe como Tokyo Night, Monokai Stone e Solarized, uso do comando `/theme` e gerenciamento de paletas com ferramentas da linha de comando."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "pt"
---

O Codex CLI não utiliza o mesmo sistema de skins do Codex Desktop. Em vez de elementos visuais (chrome), os temas para CLI alteram a **paleta de cores do terminal** — cores de fundo, primeiro plano e de sintaxe — garantindo que seu prompt e saída permaneçam legíveis no terminal.

## O comando `/theme`

A forma mais rápida de usar um tema para CLI é pelo comando interno `/theme`:

```bash
# no Codex CLI:
/theme
```

Isso lista os temas instalados. Basta escolher um para aplicá-lo instantaneamente.

## Instalando um tema de sintaxe

Temas de sintaxe (como Monokai Stone, Tokyo Night e Solarized) são instalados por meio de um script que converte sua paleta para o diretório de temas do Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# em seguida:
/theme Tokyo Night
```

O repositório Bearded Theme Ports inclui mais de 50 variações Bearded — Solarized, Tokyo Night, Monokai Stone e muitos outros.

## Gerenciando temas com ferramentas CLI

Duas ferramentas simplificam muito o gerenciamento de temas para CLI:

- **Codex Themes CLI** (`ychampion/codex-themes`) — CLI em Go: valida, visualiza, aplica, reverte e exporta paletas de terminal compatíveis. Ideal se você deseja que seu terminal e o Codex CLI compartilhem a mesma paleta.
- **Codepilot** (`charzhu/codepilot`) — uma distribuição do Codex CLI com personalização TUI integrada:

```bash
npm i -g @charzhu/codepilot
# em seguida, execute /skin dentro da interface TUI para escolher um tema embutido
```

O Codepilot inclui 16 skins TUI embutidas (cores de fundo + superfície).

## Temas populares para CLI no índice

| Skin | Estilo | Instalação |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Paleta clássica de sintaxe | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Paleta retrô icônica | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Tokyo Night em azul escuro | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Identidade terminal quente-escura | `codex-theme apply amber-nocturne` |

## Solução de problemas

- **O comando `/theme` informa que nenhum tema está instalado** — execute primeiro o script de instalação e, em seguida, reinicie o prompt.
- **A paleta parece incorreta** — reinicie o Codex CLI após a aplicação; algumas versões armazenam em cache as cores na inicialização.
- **Deseja que seu terminal tenha a mesma paleta** — use o recurso de exportação do Codex Themes CLI para gravar essa paleta no perfil do seu terminal.

Explore todas as [skins Mono & Terminal](/skins/category/mono-terminal/) ou comece com o [guia de instalação](/blog/how-to-install-codex-skins/).
