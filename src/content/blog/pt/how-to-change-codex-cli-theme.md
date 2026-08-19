---
title: "Como alterar o tema no Codex CLI: /theme e paletas de terminal"
description: "Guia passo a passo para alterar o tema no Codex CLI — o comando `/theme`, instalação de paletas de sintaxe como Tokyo Night e Monokai Stone, e correspondência com seu terminal."
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "pt"
---

Alterar o tema no Codex CLI é um processo diferente do usado no Codex Desktop. Em vez de alterar elementos visuais, um tema do Codex CLI substitui a **paleta de cores do terminal** — ou seja, as cores de fundo, de primeiro plano e de sintaxe — para garantir que seu prompt, sugestões automáticas e saída permaneçam legíveis no shell.

Abaixo está o fluxo completo, desde o comando único `/theme` até a instalação de novas paletas.

## A maneira mais rápida: `/theme`

O Codex CLI inclui um comando interno de tema. Abra um prompt e digite:

```bash
/theme
```

Isso lista todos os temas atualmente instalados. Use as setas (ou digite o nome exato) para aplicar um tema imediatamente — sem necessidade de reiniciar. Se você instalou um tema de sintaxe como Tokyo Night, ele aparecerá nessa lista com seu nome exato:

```bash
/theme Tokyo Night
```

## Primeiro, instale uma nova paleta

O comando `/theme` só mostra temas que já foram instalados. Paletas de sintaxe (como Tokyo Night, Monokai Stone e Solarized) são instaladas por meio de um script que importa a paleta para o diretório de temas do Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# em seguida, liste e aplique:
/theme
```

O repositório Bearded Theme Ports oferece mais de 50 variações — incluindo Solarized, Tokyo Night, Monokai Stone e muitas outras — permitindo testar diversas paletas em segundos.

## Use um gerenciador de temas para desfazer alterações e sincronizar com o terminal

Se você altera temas com frequência, um gerenciador CLI elimina a necessidade de adivinhações:

- **Codex Themes CLI** (`ychampion/codex-themes`) — uma CLI em Go capaz de **validar, visualizar, aplicar, reverter e exportar** uma paleta compatível para o perfil do seu terminal. Aplique com `codex-theme apply <nome>`; volte ao tema anterior com um único comando.
- **Codepilot** (`charzhu/codepilot`) — uma distribuição do Codex CLI com uma interface TUI integrada:

```bash
npm i -g @charzhu/codepilot
# execute /skin dentro da TUI para escolher entre 16 skins embutidas
```

## Alinhe seu terminal e editor

Uma paleta tem melhor aparência quando terminal, CLI e editor a compartilham. Com o Codex Themes CLI, você exporta as mesmas cores para o perfil do seu terminal, fazendo com que o shell e o Codex CLI fiquem perfeitamente alinhados após uma única aplicação. Combine isso com um tema de editor portado (por exemplo, Tokyo Night no VS Code) para obter um ambiente de trabalho consistente.

## Referência rápida: paletas populares para CLI

| Skin | Estilo | Aplicar |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | Paleta clássica de sintaxe | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | Azul escuro, baixo brilho | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | Paleta retrô icônica | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | Identidade terminal quente-escura | `codex-theme apply amber-nocturne-cli` |

## Solução de problemas

- **O tema não aparece em `/theme`** — execute primeiro o script de instalação e, em seguida, reabra o prompt.
- **As cores parecem incorretas após a troca** — reinicie o Codex CLI; algumas versões armazenam em cache as cores na inicialização.
- **Quer usar a mesma paleta no shell** — use o comando *export* do Codex Themes CLI para gravar a paleta no perfil do seu terminal.

Explore todas as [skins Mono & Terminal](/skins/category/mono-terminal/), ou leia o [guia completo de temas para CLI](/blog/codex-cli-themes-guide/) para obter uma visão completa.
