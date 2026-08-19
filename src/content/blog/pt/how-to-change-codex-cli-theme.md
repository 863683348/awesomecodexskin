---
title: "Como Alterar o Tema no Codex CLI: /theme e Paletas de Terminal"
description: "Guia passo a passo para alterar o tema no Codex CLI — o comando /theme, instalação de paletas de sintaxe como Tokyo Night e Monokai Stone, e personalização do seu terminal."
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "pt"
---

REGRAS RIGOROSAS:
1. Traduza todo o texto legível por humanos, títulos, texto de tabelas e texto de links.
2. NUNCA traduza: blocos de código, código inline, caminhos de arquivos, comandos de shell, URLs, nomes de produtos (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), tokens numéricos/versão ou nomes de skins.
3. Mantenha a estrutura de markdown idêntica: mesmos títulos, listas, tabelas, negrito/itálico, citações e destinos de links. Um link como [Monokai Stone](/skins/monokai-stone/) mantém seu caminho /path/ inalterado; apenas o texto visível pode ser traduzido.
4. Mantenha qualquer HTML/JSX bruto exatamente como está.
5. Saída APENAS o corpo traduzido do markdown. Nenhum pré-ambiente, nenhuma nota, nenhuma marcação de código em volta da resposta.

Alterar o tema no Codex CLI é um processo diferente do Codex Desktop. Em vez de chrome visual, um tema do Codex CLI troca a **paleta de cores do terminal** — fundo, primeiro plano e cores de sintaxe — para que seu prompt, autocompletions e saída permaneçam legíveis no shell.

Aqui está o fluxo completo, desde o alternador de uma única linha `/theme` até instalar novas paletas.

## O caminho mais rápido: /theme

O Codex CLI vem com um comando de tema integrado. Abra um prompt e digite:

```bash
/theme
```

Isso lista todos os temas atualmente instalados. Pressione as teclas de seta (ou digite o nome) para aplicar um instantaneamente — sem necessidade de reiniciar. Se você instalou um tema de sintaxe como Tokyo Night, ele aparece nesta lista com o nome exato:

```bash
/theme Tokyo Night
```

## Instale uma nova paleta primeiro

`/theme` só mostra temas que você já instalou. As paletas de sintaxe (Tokyo Night, Monokai Stone, Solarized) são instaladas a partir de um script que porta a paleta para o diretório de temas do Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# depois liste e aplique:
/theme
```

O repositório Bearded Theme Ports contém mais de 50 variantes — Solarized, Tokyo Night, Monokai Stone e mais — então você pode testar várias paletas em segundos.

## Use um gerenciador de tema para rollback e sincronização do terminal

Se você muda de temas frequentemente, um gerenciador de CLI remove o palpite:

- **Codex Themes CLI** (`ychampion/codex-themes`) — CLI Go que pode **validar, visualizar, aplicar, reverter e exportar** uma paleta correspondente para o seu perfil de terminal. Aplique com `codex-theme apply <name>`; volte com um único comando.
- **Codepilot** (`charzhu/codepilot`) — uma distribuição do Codex CLI com uma interface de usuário baseada em texto (TUI):

```bash
npm i -g @charzhu/codepilot
# execute /skin dentro da TUI para escolher uma das 16 skins integradas
```

## Alinhe seu terminal e editor

Uma paleta fica melhor quando terminal, CLI e editor compartilham a mesma. Com o Codex Themes CLI, você exporta as mesmas cores para o seu perfil de terminal, então o shell e o Codex CLI coincidem após uma aplicação. Combine-o com um tema de editor portado (por exemplo, Tokyo Night no VS Code) para um ambiente consistente.

## Referência rápida: paletas populares do CLI

| Skin | Estilo | Aplicar |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | Paleta clássica de sintaxe | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | Azul escuro, baixa luminosidade | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | Paleta retro icônica | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | Identidade de terminal quente-escuro | `codex-theme apply amber-nocturne-cli` |

## Solução de problemas

- **O tema não aparece no `/theme`** — execute o script de instalação primeiro, depois reabra o prompt.
- **As cores parecem erradas após a mudança** — reinicie o Codex CLI; algumas portas armazenam em cache as cores na inicialização.
- **Quer a mesma paleta no shell** — use a exportação do Codex Themes CLI para escrever a paleta no seu perfil de terminal.

Navegue por todos os [Temas Mono & Terminal](/skins/category/mono-terminal/), ou leia o [guia completo sobre temas do CLI](/blog/codex-cli-themes-guide/) para obter a imagem completa.
