---
title: "Como Instalar Skins Codex (Desktop e CLI): O Guia Completo"
description: "Guia passo a passo para instalar skins Codex Desktop e CLI — prompts de cópia-colagem, motores de temas como Dream Skin, temas da CLI e como alternar ou desinstalar. Cobre macOS e Windows."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["install", "guide", "desktop", "cli", "themes"]
category: "guide"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
lang: "pt"
---

Temas do Codex permitem redefinir o visual do Codex Desktop e Codex CLI para que o ambiente corresponda ao seu gosto — um esquema de cores escuro para sessões noturnas, uma superfície pastel para o dia ou um look neon apenas por diversão.

Este guia aborda todas as formas de instalar um tema do Codex, desde o prompt de instalação de uma cópia até gerenciadores de temas da CLI.

## Versão rápida

A maioria dos temas no índice do Codex é instalada da mesma forma:

1. Escolha um tema e abra sua página de detalhes.
2. Copie o prompt de instalação (ou baixe o arquivo do tema, para temas .codedrobe-theme).
3. Cole o prompt no Codex Desktop ou execute o comando na Codex CLI.
4. O motor de temas aplica a paleta imediatamente — não é necessário reiniciar na maioria dos motores.

Pronto. Temas são configurações, não código, então a troca é rápida e reversível.

## Método 1: Prompt de instalação por cópia e colagem (mais rápido)

A maioria dos temas do Codex — especialmente os presets do motor do [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin), o motor de injeção de código aberto — é instalada a partir de um único prompt em linguagem natural.

Na página de detalhes de qualquer tema, a caixa **Prompt de instalação** contém uma instrução pronta para colar, como:

```text
Codex, aplique o tema claro 'Clear Glass' — uma superfície limpa e sem distrações para meu ambiente de trabalho.
```

Copie-o, abra o Codex e cole. O motor lê o prompt e aplica a paleta, bordas e cores de destaque definidas no tema.

> **Dica:** se o prompt aplicar um preset, o motor o armazena para que você possa voltar ao padrão posteriormente com um clique.

## Método 2: Baixar um arquivo de tema (.codedrobe-theme)

Alguns temas são fornecidos como um arquivo .codedrobe-theme baixável. Para esses:

1. Clique em **Baixar .codedrobe-theme** na página do tema.
2. Salve o arquivo em qualquer local conveniente.
3. Abra-o no Codex Desktop — os motores compatíveis importam o tema automaticamente.

Este método é comum em galerias como codexskins.org que hospedam arquivos de tema prontos.

## Método 3: Instalar um tema da CLI com um comando

Temas da CLI do Codex usam um caminho diferente de instalação. Temas com o formato de instalação `tmtheme` (por exemplo, os Bearded Theme Ports) são instalados com um único comando:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# depois, na Codex CLI execute:
/theme Tokyo Night
```

Ferramentas como [Codex Themes CLI](https://github.com/ychampion/codex-themes) e [Codepilot](https://github.com/charzhu/codepilot) gerenciam temas da CLI para você — validar, pré-visualizar, aplicar, reverter e exportar paletas de terminal correspondentes.

## Quais motores suportam temas?

| Motor | Plataformas | Estilo de instalação |
|---|---|---|
| Codex Dream Skin | macOS, Windows | Prompt / preset |
| Codex Skin Manager | macOS, Windows | Gerenciador integrado |
| Codex Themes (desktop) | macOS | Importação .codextheme |
| ReTheme | macOS, Windows | Temas da comunidade assinados |
| Codex Themes CLI | Multiplataforma | CLI `/theme` |
| Codepilot | Multiplataforma (npm) | TUI integrado `/skin` |

## Como alternar ou reverter um tema

- **Motores de preset (Dream Skin etc.):** o motor mantém o preset padrão — geralmente um botão "restaurar padrão" retorna a aparência original.
- **CLI:** `/theme` lista os temas instalados; execute novamente o comando com outro nome para alternar.
- **Arquivos de tema:** reimporte um .codedrobe-theme anterior ou execute novamente o padrão do motor.

## Temas populares para começar

- [Gothic Void Expedition](/skins/gothic-void-expedition/) — o padrão escuro integrado do motor.
- [Clear Glass](/skins/clear-glass/) — uma superfície clara para o dia.
- [Monokai Stone](/skins/monokai-stone/) — a paleta clássica da CLI.
- [Hatsune Miku](/skins/hatsune-miku/) — energia vocaloid azul-verde.

Navegue pelo [índice completo](/skins/) para mais de 100, ou leia nosso [tutorial](/tutorial/) para detalhes sobre configuração de nível de motor.
