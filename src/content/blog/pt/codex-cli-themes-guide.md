---
title: "Temas de CLI do Codex: Como usar /theme e skins de terminal"
description: "Tudo sobre temas de CLI do Codex: instalando temas de sintaxe como Tokyo Night, Monokai Stone e Solarized, usando o comando /theme e gerenciando paletas com ferramentas de CLI."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "pt"
---

REGRAS RIGOROSAS:
1. Traduza todo o texto legível por humanos, títulos, texto de tabelas e texto de links.
2. NUNCA traduza: blocos de código, código inline, caminhos de arquivos, comandos de shell, URLs, nomes de produtos (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), tokens numéricos/versiones ou nomes de skins.
3. Mantenha a estrutura de markdown idêntica: mesmos títulos, listas, tabelas, negrito/itálico, citações e destinos de links. Um link como [Monokai Stone](/skins/monokai-stone/) mantém seu caminho /path/ inalterado; apenas o texto visível pode ser traduzido.
4. Mantenha qualquer HTML/JSX bruto exatamente como está.
5. Saída APENAS o corpo traduzido do markdown. Nenhum pré-ambulo, nenhuma nota, nenhum recinto de código ao redor da resposta.

O Codex CLI não usa o mesmo sistema de skins do Codex Desktop. Em vez de chrome visual, os temas CLI alteram a **paleta de cores do terminal** - fundo, primeiro plano e cores de sintaxe - para que seu prompt e saída permaneçam legíveis no terminal.

## O comando /theme

A forma mais rápida de usar um tema CLI é o comando embutido /theme:

```bash
# no Codex CLI:
/theme
```

Isso lista os temas instalados. Escolha um para aplicar imediatamente.

## Instalando um tema de sintaxe

Temas de sintaxe (como Monokai Stone, Tokyo Night, Solarized) são instalados por um script que transporta a paleta para o diretório de temas do Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# depois:
/theme Tokyo Night
```

O repositório Bearded Theme Ports contém mais de 50 variantes Bearded - Solarized, Tokyo Night, Monokai Stone e muito mais.

## Gerenciando temas com ferramentas de CLI

Duas ferramentas tornam o gerenciamento de temas CLI sem dor:

- **Codex Themes CLI** (`ychampion/codex-themes`) - CLI Go: validar, visualizar, aplicar, reverter e exportar paletas de terminal correspondentes. Ideal se você quiser que seu terminal e o Codex CLI compartilhem uma paleta.
- **Codepilot** (`charzhu/codepilot`) - uma distribuição do Codex CLI com personalização TUI integrada:

```bash
npm i -g @charzhu/codepilot
# depois execute /skin dentro do TUI para escolher um tema interno
```

O Codepilot vem com 16 skins TUI internos (cores de fundo + superfície).

## Temas CLI populares no índice

| Skin | Estilo | Instalar |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Paleta clássica de sintaxe | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Paleta retro icônica | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Tokyo Night azul escuro | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Identidade de terminal quente-escura | `codex-theme apply amber-nocturne` |

## Solução de problemas

- **`/theme` diz que nenhum tema foi instalado** - execute o script de instalação primeiro, depois reinicie o prompt.
- **A paleta parece errada** - reinicie o Codex CLI após aplicar; alguns ports armazenam em cache as cores na inicialização.
- **Quer que seu terminal corresponda** - use a exportação do Codex Themes CLI para escrever a mesma paleta no seu perfil de terminal.

Navegue por todos os [skins Mono & Terminal](/skins/category/mono-terminal/) ou comece com o [guia de instalação](/blog/how-to-install-codex-skins/).
