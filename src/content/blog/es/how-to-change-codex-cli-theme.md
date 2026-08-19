---
title: "Cómo cambiar el tema en Codex CLI: /theme y paletas de terminal"
description: "Guía paso a paso para cambiar el tema en Codex CLI: el comando `/theme`, la instalación de paletas de sintaxis como Tokyo Night y Monokai Stone, y la coincidencia con tu terminal."
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "es"
---

Cambiar el tema en Codex CLI es un proceso distinto al de Codex Desktop. En lugar de modificar elementos visuales, un tema de Codex CLI sustituye la **paleta de colores del terminal** —fondo, primer plano y colores de sintaxis— para que tu indicador (prompt), las autocompletaciones y la salida sigan siendo legibles en la terminal.

A continuación se describe el flujo de trabajo completo, desde el conmutador `/theme` de un solo comando hasta la instalación de nuevas paletas.

## La forma más rápida: `/theme`

Codex CLI incluye un comando integrado para gestionar temas. Abre un indicador y escribe:

```bash
/theme
```

Esto muestra todos los temas actualmente instalados. Usa las teclas de dirección (o escribe directamente el nombre) para aplicar uno al instante: no es necesario reiniciar. Si has instalado un tema de sintaxis como Tokyo Night, aparecerá en esta lista con su nombre exacto:

```bash
/theme Tokyo Night
```

## Instala primero una nueva paleta

El comando `/theme` solo muestra los temas que ya tienes instalados. Las paletas de sintaxis (Tokyo Night, Monokai Stone, Solarized) se instalan mediante un script que importa la paleta al directorio de temas de Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# luego enumera y aplica:
/theme
```

El repositorio Bearded Theme Ports incluye más de 50 variantes —Solarized, Tokyo Night, Monokai Stone y muchas más—, lo que te permite probar varias paletas en cuestión de segundos.

## Usa un gestor de temas para deshacer cambios y sincronizar con la terminal

Si cambias de tema con frecuencia, un gestor CLI elimina la incertidumbre:

- **Codex Themes CLI** (`ychampion/codex-themes`) — una CLI escrita en Go que puede **validar, previsualizar, aplicar, deshacer y exportar** una paleta coincidente a tu perfil de terminal. Aplica un tema con `codex-theme apply <nombre>` y reviértelo con un solo comando.
- **Codepilot** (`charzhu/codepilot`) — una distribución de Codex CLI con una interfaz TUI integrada:

```bash
npm i -g @charzhu/codepilot
# ejecuta /skin dentro de la TUI para elegir entre 16 skins integradas
```

## Sincroniza tu terminal y tu editor

Una paleta luce mejor cuando la terminal, la CLI y el editor la comparten. Con Codex Themes CLI puedes exportar los mismos colores a tu perfil de terminal, de modo que la terminal y Codex CLI coincidan tras una única aplicación. Combínalo con un tema de editor portado (por ejemplo, Tokyo Night en VS Code) para conseguir un entorno de trabajo coherente.

## Referencia rápida: paletas CLI populares

| Skin | Estilo | Aplicar |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | Paleta clásica de sintaxis | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | Azul oscuro, bajo deslumbramiento | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | Paleta retro icónica | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | Identidad cálida y oscura para la terminal | `codex-theme apply amber-nocturne-cli` |

## Solución de problemas

- **El tema no aparece en `/theme`**: ejecuta primero el script de instalación y vuelve a abrir el indicador.
- **Los colores parecen incorrectos tras cambiar de tema**: reinicia Codex CLI; algunos puertos almacenan en caché los colores al inicio.
- **Quieres usar la misma paleta en la terminal**: usa la función *export* de Codex Themes CLI para escribir la paleta en tu perfil de terminal.

Explora todas las [skins Mono y Terminal](/skins/category/mono-terminal/), o consulta la [guía completa de temas para CLI](/blog/codex-cli-themes-guide/) para obtener una visión integral.
