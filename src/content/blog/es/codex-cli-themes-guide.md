---
title: "Temas de Codex CLI: Cómo usar /theme y skins de terminal"
description: "Todo sobre los temas de Codex CLI: instalar temas de sintaxis como Tokyo Night, Monokai Stone y Solarized, usar el comando /theme y gestionar paletas con herramientas de línea de comandos."
pubDate: "2026-08-14"
updatedDate: "2026-08-24"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
faq:
  - q: "¿Qué es un tema Codex CLI?"
    a: "Un tema Codex CLI es un juego de colores para terminal — fondo, texto y colores de sintaxis — que mantiene tu prompt y salida legibles. A diferencia de Codex Desktop, CLI no tiene elementos visuales; los temas cambian solo los colores."
  - q: "¿Cómo aplico un tema en Codex CLI?"
    a: "Ejecuta el comando /theme integrado dentro de Codex CLI para listar los temas instalados, luego elige uno para aplicarlo de inmediato."
  - q: "¿Cómo instalo temas de sintaxis como Tokyo Night o Monokai Stone?"
    a: "Instale un script de puerto de tema (por ejemplo, el instalador de puertos de temas Bearded), luego ejecute /theme Tokyo Night (o /theme Monokai Stone) para aplicarlo."
  - q: "¿Por qué /theme no muestra ningún tema?"
    a: "Aún no has instalado un tema. Ejecuta primero el script de instalación, luego vuelve a abrir el prompt de Codex CLI — /theme mostrará los temas instalados."
  - q: "¿Puede coincidir mi paleta de terminal con mi tema CLI de Codex?"
    a: "Sí — Temas Codex CLI (ychampion/codex-themes) puede exportar el mismo juego de colores a tu perfil de terminal para que el terminal y el CLI de Codex estén sincronizados."
lang: "es"
---

Reglas estrictas:
1. Traducir todo el texto legible por humanos, títulos, texto de tablas y texto de enlaces.
2. NUNCA traduzcas: bloques de código, código inline, rutas de archivos, comandos de shell, URLs, nombres de productos (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), tokens numéricos/versiones o nombres de skins visibles.
3. Mantener la estructura de markdown idéntica: mismos títulos, listas, tablas, negrita/itálica, citas, y destinos de enlaces. Un enlace como [Monokai Stone](/skins/monokai-stone/) mantiene su URL /path/ sin cambios; solo el texto visible puede ser traducido.
4. Mantener cualquier HTML/JSX sin modificar.
5. Salida SOLO el cuerpo traducido en markdown. Sin introducción, sin notas, sin delimitadores de código alrededor de la respuesta.

Los temas de Codex CLI cambian la **paleta de colores de la terminal** - fondo, primer plano y colores de sintaxis - para que su indicador y salida permanezcan legibles en la terminal. Los aplicas con el comando integrado `/theme`: ejecuta `/theme` para listar los temas instalados, elige uno y se aplica de inmediato. A diferencia de Codex Desktop, CLI no tiene chrome visual; un tema es puramente los colores que ves.

## Comienzo rápido

1. Instala un puerto de tema (una vez): `curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh`
2. Abre Codex CLI y ejecuta `/theme`.
3. Elige un tema (por ejemplo, `/theme Tokyo Night`) — se aplica de inmediato.

## El comando /theme

La forma más rápida de usar un tema de CLI es el comando integrado `/theme`:

```bash
# en Codex CLI:
/theme
```

Esto lista los temas instalados. Elige uno para aplicarlo de inmediato.

## Instalando un tema de sintaxis

Los temas de sintaxis (como Monokai Stone, Tokyo Night, Solarized) se instalan desde un script que traslada la paleta al directorio de temas de Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# luego:
/theme Tokyo Night
```

El repositorio Bearded Theme Ports incluye 50+ variantes de Bearded — Solarized, Tokyo Night, Monokai Stone y más.

## Gestión de temas con herramientas de CLI

Dos herramientas hacen que la gestión de temas de CLI sea sencilla:

- **Codex Themes CLI** (`ychampion/codex-themes`) — CLI de Go: validar, previsualizar, aplicar, retroceder y exportar paletas de terminal coincidentes. Ideal si quieres que tu terminal y Codex CLI compartan una paleta.
- **Codepilot** (`charzhu/codepilot`) — una distribución de Codex CLI con personalización TUI integrada:

```bash
npm i -g @charzhu/codepilot
# luego ejecuta /skin dentro del TUI para elegir un tema integrado
```

Codepilot incluye 16 skins TUI integrados (colores de fondo + superficie).

## Temas de CLI populares en el índice

| Skin | Estilo | Instalar |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Paleta clásica de sintaxis | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Paleta retro icónica | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Noche azul oscura de Tokyo | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Identidad de terminal oscura cálida | `codex-theme apply amber-nocturne` |

## Solución de problemas

- **`/theme` dice que no hay temas instalados** — ejecuta primero el script de instalación y luego vuelve a abrir el prompt.
- **La paleta parece incorrecta** — reinicia Codex CLI después de aplicarla; algunos puertos guardan en caché los colores al iniciar.
- **Quieres que tu terminal coincida** — usa la función de exportación de Codex Themes CLI para escribir la misma paleta en tu perfil de terminal.

Explora todos los [Temas Mono y Terminal](/skins/category/mono-terminal/) o empieza con la [guía de instalación](/blog/how-to-install-codex-skins/).
