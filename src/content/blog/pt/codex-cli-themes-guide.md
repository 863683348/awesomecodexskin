---
title: "Temas de CLI do Codex: Como usar /theme e skins de terminal"
description: "Tudo sobre temas de CLI do Codex: instalar temas de sintaxe como Tokyo Night, Monokai Stone e Solarized, usar o comando /theme e gerenciar paletas com ferramentas de CLI."
pubDate: "2026-08-14"
updatedDate: "2026-08-24"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
faq:
  - q: "O que é um tema Codex CLI?"
    a: "Um tema Codex CLI é uma paleta de cores para terminal — fundo, primeiro plano e cores de sintaxe — que mantém seu prompt e saída legíveis. Ao contrário do Codex Desktop, o CLI não tem elementos visuais; os temas mudam apenas as cores."
  - q: "Como aplicar um tema no Codex CLI?"
    a: "Execute o comando /theme integrado no Codex CLI para listar os temas instalados, depois escolha um para aplicá-lo instantaneamente."
  - q: "Como faço para instalar temas de sintaxe como Tokyo Night ou Monokai Stone?"
    a: "Instale um script de tema port (por exemplo, o instalador Bearded Theme Ports), depois execute /theme Tokyo Night (ou /theme Monokai Stone) para aplicá-lo."
  - q: "Por que /theme não mostra nenhum tema?"
    a: "Você ainda não instalou um tema. Execute o script de instalação primeiro, depois reabra o prompt CLI do Codex — /theme listará os temas instalados."
  - q: "Meu paleta de terminal pode corresponder ao tema Codex CLI?"
    a: "Sim — Temas Codex CLI (ychampion/codex-themes) pode exportar a mesma paleta para o seu perfil de terminal, para que o terminal e o Codex CLI fiquem sincronizados."
lang: "pt"
---

Regras rigorosas:
1. Traduza todo o texto legível por humanos, títulos, texto de tabelas e texto de links.
2. NUNCA traduzir: blocos de código, código inline, caminhos de arquivos, comandos de shell, URLs, nomes de produtos (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), tokens numéricos/versão ou nomes de skins visíveis.
3. Mantenha a estrutura de markdown idêntica: mesmos títulos, listas, tabelas, negrito/itálico, citações e destinos de links. Um link como [Monokai Stone](/skins/monokai-stone/) mantém seu URL /path/ inalterado; apenas o texto visível pode ser traduzido.
4. Mantenha qualquer HTML/JSX bruto exatamente como está.
5. Saída APENAS o corpo da markdown traduzida. Nenhum pré-ambulo, nenhum nota, nenhuma cerca de código ao redor da resposta.

Temas do Codex CLI alteram a **paleta de cores do terminal** — fundo, primeiro plano e cores de sintaxe — para que seu prompt e saída permaneçam legíveis no terminal. Você os aplica com o comando `/theme` integrado: execute `/theme` para listar os temas instalados, escolha um e ele será aplicado imediatamente. Ao contrário do Codex Desktop, o CLI não tem chrome visual; um tema é puramente as cores que você vê.

## Começo rápido

1. Instale um tema port (uma vez): `curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh`
2. Abra o Codex CLI e execute `/theme`.
3. Escolha um tema (por exemplo, `/theme Tokyo Night`) — ele é aplicado imediatamente.

## O comando /theme

A forma mais rápida de usar um tema do CLI é o comando integrado `/theme`:

```bash
# no Codex CLI:
/theme
```

Isso lista os temas instalados. Escolha um para aplicar imediatamente.

## Instalando um tema de sintaxe

Temas de sintaxe (como Monokai Stone, Tokyo Night, Solarized) são instalados a partir de um script que porta a paleta para o diretório de temas do Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# depois:
/theme Tokyo Night
```

O repositório Bearded Theme Ports contém mais de 50 variantes Bearded — Solarized, Tokyo Night, Monokai Stone e mais.

## Gerenciando temas com ferramentas de CLI

Duas ferramentas tornam o gerenciamento de temas do CLI sem dor:

- **Codex Themes CLI** (`ychampion/codex-themes`) — CLI Go: validar, visualizar, aplicar, reverter e exportar paletas de terminal correspondentes. Ideal se você quiser que seu terminal e o Codex CLI compartilhem uma paleta.
- **Codepilot** (`charzhu/codepilot`) — uma distribuição do Codex CLI com personalização TUI integrada:

```bash
npm i -g @charzhu/codepilot
# depois execute /skin dentro do TUI para escolher um tema embutido
```

O Codepilot vem com 16 skins TUI embutidas (cores de fundo + superfície).

## Temas CLI populares no índice

| Skin | Estilo | Instalar |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Paleta clássica de sintaxe | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Paleta retro icônica | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Noite Tokyo escura | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Identidade de terminal quente-escuro | `codex-theme apply amber-nocturne` |

## Solução de problemas

- **`/theme` diz que nenhum tema foi instalado** — execute o script de instalação primeiro, depois reabra o prompt.
- **Paleta parece errada** — reinicie o Codex CLI após aplicar; alguns ports armazenam em cache as cores na inicialização.
- **Quer que seu terminal corresponda** — use a exportação do Codex Themes CLI para escrever a mesma paleta no seu perfil de terminal.

Navegue por todos os [skins Mono & Terminal](/skins/category/mono-terminal/) ou comece com o [guia de instalação](/blog/how-to-install-codex-skins/).
