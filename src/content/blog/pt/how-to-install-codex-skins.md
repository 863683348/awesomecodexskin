---
title: "Como instalar temas Codex (Desktop e CLI): O guia completo"
description: "Guia passo a passo para instalar os temas do Codex Desktop e CLI — comandos prontos para copiar e colar, mecanismos de temas como Dream Skin, temas para CLI e como alternar ou desinstalar. Abrange macOS e Windows."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["install", "guide", "desktop", "cli", "themes"]
category: "guide"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
lang: "pt"
---

As skins Codex permitem que você personalize a aparência do OpenAI Codex Desktop e do Codex CLI, fazendo com que o ambiente de trabalho reflita seu gosto pessoal — seja com uma paleta escura e suave para sessões noturnas, uma superfície pastel para o dia ou um visual neon só por diversão.

Este guia aborda todos os métodos disponíveis para instalar uma skin Codex, desde o prompt de instalação em um único passo até gerenciadores de temas via linha de comando.

## Versão resumida

A maioria das skins deste índice é instalada da mesma forma:

1. Escolha uma skin e abra sua página de detalhes.
2. Copie o prompt de instalação (ou baixe o arquivo de tema, no caso de skins no formato `.codedrobe-theme`).
3. Cole o prompt no Codex Desktop ou execute o comando no Codex CLI.
4. O mecanismo de temas aplica imediatamente a paleta — na maioria dos mecanismos, nenhuma reinicialização é necessária.

É só isso. As skins são configurações, não código, portanto alternar entre elas é rápido e totalmente reversível.

## Método 1: Instalação por cópia e colagem do prompt (o mais rápido)

A maioria das skins Codex — especialmente as predefinições de mecanismo provenientes do [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin), o mecanismo de injeção de código-fonte aberto — é instalada a partir de um único prompt em linguagem natural.

Na página de detalhes de qualquer skin, a caixa **Prompt de instalação** contém uma instrução pronta para colar, como:

```text
Codex, aplique o tema claro 'Clear Glass' — uma superfície limpa, translúcida e com baixa distração para meu workspace.
```

Copie-o, abra o Codex e cole. O mecanismo lê o prompt e aplica a paleta, as bordas e as cores de destaque definidas no tema.

> **Dica:** se o prompt aplicar uma predefinição, o mecanismo a armazena, permitindo que você volte ao tema padrão com um único clique posteriormente.

## Método 2: Baixar um arquivo de tema (`.codedrobe-theme`)

Algumas skins são distribuídas como arquivos `.codedrobe-theme` para download. Para essas:

1. Clique em **Baixar .codedrobe-theme** na página da skin.
2. Salve o arquivo em qualquer local conveniente.
3. Abra-o diretamente no Codex Desktop — mecanismos compatíveis importam automaticamente o tema.

Esse método é comum em galerias como codexskins.org, que hospedam arquivos de temas prontos para uso.

## Método 3: Instalar um tema CLI com um comando

Temas para Codex CLI seguem um caminho de instalação distinto. Skins com o formato de instalação `tmtheme` (por exemplo, as versões adaptadas do Bearded Theme) são instaladas com um único comando:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# depois, no Codex CLI, execute:
/theme Tokyo Night
```

Ferramentas como [Codex Themes CLI](https://github.com/ychampion/codex-themes) e [Codepilot](https://github.com/charzhu/codepilot) gerenciam temas CLI para você — validando, visualizando, aplicando, revertendo e exportando paletas correspondentes para o terminal.

## Quais mecanismos suportam skins?

| Mecanismo | Plataformas | Estilo de instalação |
|---|---|---|
| Codex Dream Skin | macOS, Windows | Prompt de agente / predefinição |
| Codex Skin Manager | macOS, Windows | Gerenciador integrado |
| Codex Themes (desktop) | macOS | Importação de `.codextheme` |
| ReTheme | macOS, Windows | Temas comunitários assinados |
| Codex Themes CLI | Multiplataforma | CLI `/theme` |
| Codepilot | Multiplataforma (npm) | TUI integrada `/skin` |

## Como alternar ou reverter uma skin

- **Mecanismos com predefinições (Dream Skin etc.):** o mecanismo mantém a predefinição original — normalmente, um botão “restaurar padrão” devolve sua aparência inicial.
- **CLI:** o comando `/theme` lista os temas instalados; basta executá-lo novamente com outro nome para alternar.
- **Arquivos de tema:** reimporte um arquivo `.codedrobe-theme` anterior ou execute novamente a restauração padrão do mecanismo.

## Skins populares para começar

- [Gothic Void Expedition](/skins/gothic-void-expedition/) — o tema escuro padrão integrado ao mecanismo.
- [Clear Glass](/skins/clear-glass/) — uma superfície translúcida clara ideal para o dia.
- [Monokai Stone](/skins/monokai-stone/) — a paleta clássica para CLI.
- [Hatsune Miku](/skins/hatsune-miku/) — energia vocalóide em tons azul-esverdeados.

Explore o [índice completo](/skins/) com mais de 100 skins, ou leia nosso [tutorial](/tutorial/) para obter detalhes sobre a configuração avançada dos mecanismos.
