---
title: "Cómo instalar skins de Codex (Escritorio y CLI): La guía completa"
description: "Guía paso a paso para instalar las skins de Codex Desktop y CLI — prompts de copiar y pegar, motores de temas como Dream Skin, temas de línea de comandos y cómo cambiar o desinstalar. Cubre macOS y Windows."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["install", "guide", "desktop", "cli", "themes"]
category: "guide"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
lang: "es"
---

Los temas de Codex te permiten personalizar el aspecto de Codex Desktop y Codex CLI para que el entorno se ajuste a tu estilo: un paleta oscura para sesiones nocturnas, una superficie pastel para el día o un aspecto neón simplemente por diversión.

Este manual cubre todas las formas de instalar un tema de Codex, desde el aviso de instalación de un solo clic hasta los gestores de temas de la línea de comandos.

## La versión rápida

La mayoría de los temas de Codex se instalan de la misma manera:

1. Elige un tema y abre su página de detalles.
2. Copia el aviso de instalación (o descarga el archivo del tema, para temas .codedrobe-theme).
3. Pega el aviso en Codex Desktop o ejecuta el comando en Codex CLI.
4. El motor de temas aplica el paleta inmediatamente, sin necesidad de reiniciar en la mayoría de los motores.

Eso es todo. Los temas son configuraciones, no código, por lo que cambiarlos es rápido y reversible.

## Método 1: Instalación por copiar y pegar (más rápido)

La mayoría de los temas de Codex — especialmente los conjuntos de motores de [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin), el motor de inyección de código abierto — se instalan mediante un único aviso de lenguaje natural.

En la página de detalles de cualquier tema, el cuadro **Prompt de instalación** contiene una instrucción lista para pegar como:

```text
Codex, aplica el tema 'Clear Glass' claro — una superficie limpia y sin distracciones para mi espacio de trabajo.
```

Cópialo, abre Codex y pégalo. El motor lee el aviso y aplica el paleta, bordes y colores de énfasis definidos en el tema.

> **Consejo:** si el aviso aplica un conjunto predeterminado, el motor lo guarda para que puedas volver al predeterminado con un solo clic más tarde.

## Método 2: Descargar un archivo de tema (.codedrobe-theme)

Algunos temas se envían como un archivo descargable .codedrobe-theme. Para estos:

1. Haz clic en **Descargar .codedrobe-theme** en la página del tema.
2. Guarda el archivo donde sea conveniente.
3. Ábrelo desde Codex Desktop — los motores compatibles importan el tema automáticamente.

Este método es común en galerías como codexskins.org que alojan archivos de tema listos para usar.

## Método 3: Instalar un tema de la línea de comandos con un comando

Los temas de la línea de comandos de Codex usan una ruta de instalación diferente. Los temas con el formato de instalación `tmtheme` (por ejemplo, Bearded Theme Ports) se instalan con un único comando:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# luego en Codex CLI ejecuta:
/theme Tokyo Night
```

Herramientas como [Codex Themes CLI](https://github.com/ychampion/codex-themes) y [Codepilot](https://github.com/charzhu/codepilot) gestionan temas de la línea de comandos para ti — validar, previsualizar, aplicar, revertir y exportar paletas de terminal coincidentes.

## ¿Qué motores admiten temas?

| Motor | Plataformas | Estilo de instalación |
|---|---|---|
| Codex Dream Skin | macOS, Windows | Prompt / conjunto predeterminado |
| Codex Skin Manager | macOS, Windows | Gestor integrado |
| Codex Themes (escritorio) | macOS | Importar .codextheme |
| ReTheme | macOS, Windows | Temas de la comunidad firmados |
| Codex Themes CLI | Multiplataforma | CLI `/theme` |
| Codepilot | Multiplataforma (npm) | TUI integrado `/skin` |

## Cómo cambiar o revertir un tema

- **Motores de conjunto (Dream Skin etc.):** el motor mantiene el conjunto predeterminado — normalmente un botón "restaurar predeterminado" devuelve tu aspecto original.
- **Línea de comandos:** `/theme` muestra los temas instalados; vuelve a ejecutar el comando con otro nombre para cambiar.
- **Archivos de tema:** vuelve a importar un .codedrobe-theme anterior o vuelve a ejecutar el predeterminado del motor.

## Temas populares para empezar

- [Gothic Void Expedition](/skins/gothic-void-expedition/) — el modo oscuro predeterminado del motor.
- [Clear Glass](/skins/clear-glass/) — una superficie clara para el día.
- [Monokai Stone](/skins/monokai-stone/) — el paleta clásico de la línea de comandos.
- [Hatsune Miku](/skins/hatsune-miku/) — energía vocaloid azul-verde.

Explora el [índice completo](/skins/) para más de 100, o lee nuestro [tutorial](/tutorial/) para detalles sobre la configuración a nivel de motor.
