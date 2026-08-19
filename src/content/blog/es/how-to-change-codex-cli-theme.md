---
title: "Cómo cambiar el tema en Codex CLI: /theme y paletas de terminal"
description: "Guía paso a paso para cambiar el tema en Codex CLI — el comando /theme, instalar paletas de sintaxis como Tokyo Night y Monokai Stone, y adaptar tu terminal."
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "es"
---

Cambiar el tema en Codex CLI es un proceso diferente al de Codex Desktop. En lugar de la apariencia visual, un tema de Codex CLI intercambia la **paleta de colores de terminal** — fondo, primer plano y colores de sintaxis — para que su indicador, autocompletaciones y salida permanezcan legibles en la terminal.

Aquí está el flujo completo, desde el selector de un solo comando `/theme` hasta instalar paletas nuevas.

## La forma más rápida: /theme

Codex CLI incluye un comando de tema integrado. Abra un indicador y escriba:

```bash
/theme
```

Esto muestra todos los temas actualmente instalados. Presione las teclas de flecha (o escriba el nombre) para aplicar uno inmediatamente — no se requiere reinicio. Si instaló un tema de sintaxis como Tokyo Night, aparece en esta lista bajo su nombre exacto:

```bash
/theme Tokyo Night
```

## Instale una nueva paleta primero

`/theme` solo muestra los temas que ha instalado. Las paletas de sintaxis (Tokyo Night, Monokai Stone, Solarized) se instalan desde un script que convierte la paleta en el directorio de temas de Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# luego liste y aplique:
/theme
```

El repositorio Bearded Theme Ports ofrece más de 50 variantes — Solarized, Tokyo Night, Monokai Stone y más — para que pueda probar varias paletas en segundos.

## Use un administrador de temas para revertir y sincronizar la terminal

Si cambia con frecuencia los temas, un gestor de CLI elimina la incertidumbre:

- **Codex Themes CLI** (`ychampion/codex-themes`) — CLI de Go que puede **validar, previsualizar, aplicar, revertir y exportar** una paleta coincidente a su perfil de terminal. Aplicarlo con `codex-theme apply <nombre>`; vuelva atrás con un solo comando.
- **Codepilot** (`charzhu/codepilot`) — una distribución de Codex CLI con una interfaz TUI integrada:

```bash
npm i -g @charzhu/codepilot
# ejecute /skin dentro de la TUI para elegir uno de los 16 skins integrados
```

## Ajuste su terminal y editor

Una paleta luce mejor cuando terminal, CLI y editor comparten la misma. Con Codex Themes CLI, exporta los mismos colores a su perfil de terminal, por lo que la terminal y Codex CLI coinciden después de un solo ajuste. Combine con un tema de editor portado (por ejemplo, Tokyo Night en VS Code) para un espacio de trabajo consistente.

## Referencia rápida: paletas populares de CLI

| Skin | Estilo | Aplicar |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | Paleta clásica de sintaxis | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | Oscuro azul, baja luminosidad | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | Paleta retro icónica | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | Identidad de terminal oscura cálida | `codex-theme apply amber-nocturne-cli` |

## Solución de problemas

- **El tema no aparece en `/theme`** — ejecute primero el script de instalación, luego vuelva a abrir el indicador.
- **Los colores parecen incorrectos después de cambiar** — reinicie Codex CLI; algunas conversiones almacenan en caché los colores al inicio.
- **Quieres la misma paleta en la terminal** — use la función de exportación de Codex Themes CLI para escribir la paleta en su perfil de terminal.

Explore todos los [Temas Mono & Terminal](/skins/category/mono-terminal/), o lea la [guía completa de temas de CLI](/blog/codex-cli-themes-guide/) para obtener toda la información.
