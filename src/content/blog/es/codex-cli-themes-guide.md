---
title: "Temas de Codex CLI: Cómo usar /theme y skins de terminal"
description: "Todo sobre los temas de Codex CLI: instalar temas de sintaxis como Tokyo Night, Monokai Stone y Solarized, usar el comando /theme y gestionar paletas con herramientas de línea de comandos."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "es"
---

REGLAS ESTRICTAS:
1. Traduce todo el texto legible por humanos, títulos, texto de tablas y texto de enlaces.
2. NUNCA traduzcas: bloques de código, código inline, rutas de archivos, comandos de shell, URLs, nombres de productos (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), tokens numéricos/versiones o nombres de skins visibles.
3. Mantén la estructura de markdown idéntica: mismos títulos, listas, tablas, negrita/itálica, citas, y destinos de enlaces. Un enlace como [Monokai Stone](/skins/monokai-stone/) mantiene su URL /path/ sin cambios; solo el texto visible puede ser traducido.
4. Mantén cualquier HTML/JSX sin modificar.
5. Salida SOLO el cuerpo traducido en markdown. Sin introducción, sin notas, sin delimitadores de código alrededor de la respuesta.

Codex CLI no utiliza el mismo sistema de skins que Codex Desktop. En lugar de chrome visual, los temas de línea de comandos cambian la **paleta de colores del terminal** - fondo, primer plano y colores de sintaxis - para que su prompt y salida permanezcan legibles en el terminal.

## El comando /theme

La forma más rápida de usar un tema de línea de comandos es el comando integrado /theme:

```bash
# en Codex CLI:
/theme
```

Esto lista los temas instalados. Elija uno para aplicarlo instantáneamente.

## Instalando un tema de sintaxis

Los temas de sintaxis (como Monokai Stone, Tokyo Night, Solarized) se instalan desde un script que traslada la paleta a la carpeta de temas de Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# luego:
/theme Tokyo Night
```

El repositorio Bearded Theme Ports incluye 50+ variantes de Bearded - Solarized, Tokyo Night, Monokai Stone y más.

## Gestión de temas con herramientas de CLI

Dos herramientas hacen que la gestión de temas de CLI sea sencilla:

- **Codex Themes CLI** (`ychampion/codex-themes`) — CLI de Go: validar, previsualizar, aplicar, revertir y exportar paletas de terminal coincidentes. Ideal si desea que su terminal y Codex CLI compartan una paleta.
- **Codepilot** (`charzhu/codepilot`) — una distribución de Codex CLI con personalización TUI integrada:

```bash
npm i -g @charzhu/codepilot
# luego ejecute /skin dentro del TUI para elegir un tema predeterminado
```

Codepilot incluye 16 skins TUI predeterminados (colores de fondo + superficie).

## Temas de CLI populares en el índice

| Skin | Estilo | Instalar |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Paleta clásica de sintaxis | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Paleta retro icónica | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Noche Tokyo oscura | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Identidad de terminal oscura cálida | `codex-theme apply amber-nocturne` |

## Solución de problemas

- **`/theme` dice que no hay temas instalados** - ejecute primero el script de instalación, luego vuelva a abrir el prompt.
- **La paleta parece incorrecta** - reinicie Codex CLI después de aplicarla; algunos ports almacenan en caché los colores al iniciar.
- **Quieres que tu terminal coincida** - use la exportación de Codex Themes CLI para escribir la misma paleta en su perfil de terminal.

Explora todos los [Skins Mono & Terminal](/skins/category/mono-terminal/) o empieza con la [guía de instalación](/blog/how-to-install-codex-skins/).
