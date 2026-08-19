---
title: "Temas de Codex CLI: Cómo usar `/theme` y las skins de terminal"
description: "Todo sobre los temas de Codex CLI: cómo instalar temas de sintaxis como Tokyo Night, Monokai Stone y Solarized, usar el comando `/theme` y gestionar paletas con herramientas de CLI."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "es"
---

Codex CLI no utiliza el mismo sistema de skins que Codex Desktop. En lugar de elementos visuales («chrome»), los temas para CLI modifican la **paleta de colores del terminal** —fondo, primer plano y colores de sintaxis— para garantizar que tu indicador (prompt) y la salida sigan siendo legibles en el terminal.

## El comando `/theme`

La forma más rápida de usar un tema para CLI es mediante el comando integrado `/theme`:

```bash
# en Codex CLI:
/theme
```

Esto muestra una lista de los temas instalados. Selecciona uno para aplicarlo de inmediato.

## Instalar un tema de sintaxis

Los temas de sintaxis (como Monokai Stone, Tokyo Night o Solarized) se instalan mediante un script que importa su paleta al directorio de temas de Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# luego:
/theme Tokyo Night
```

El repositorio Bearded Theme Ports incluye más de 50 variantes Bearded: Solarized, Tokyo Night, Monokai Stone y muchas más.

## Gestionar temas con herramientas CLI

Dos herramientas simplifican enormemente la gestión de temas para CLI:

- **Codex Themes CLI** (`ychampion/codex-themes`) — CLI escrita en Go: valida, previsualiza, aplica, revierte y exporta paletas de terminal compatibles. Ideal si deseas que tu terminal y Codex CLI compartan la misma paleta.
- **Codepilot** (`charzhu/codepilot`) — una distribución de Codex CLI con personalización integrada mediante interfaz TUI:

```bash
npm i -g @charzhu/codepilot
# luego ejecuta /skin dentro de la TUI para elegir un tema integrado
```

Codepilot incluye 16 skins TUI integradas (colores de fondo + superficie).

## Temas CLI populares en el índice

| Skin | Estilo | Instalación |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Paleta clásica de sintaxis | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Iconica paleta retro | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Versión oscura azulada de Tokyo Night | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Identidad terminal cálida y oscura | `codex-theme apply amber-nocturne` |

## Solución de problemas

- **`/theme` indica que no hay temas instalados** — ejecuta primero el script de instalación y vuelve a abrir el prompt.
- **La paleta parece incorrecta** — reinicia Codex CLI tras aplicarla; algunos puertos almacenan en caché los colores al inicio.
- **Quieres que tu terminal coincida con Codex CLI** — usa la función de exportación de Codex Themes CLI para escribir la misma paleta en el perfil de tu terminal.

Explora todas las [skins Mono y Terminal](/skins/category/mono-terminal/) o empieza con la [guía de instalación](/blog/how-to-install-codex-skins/).
