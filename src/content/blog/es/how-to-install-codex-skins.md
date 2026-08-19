---
title: "Cómo instalar skins de Codex (escritorio y CLI): la guía completa"
description: "Guía paso a paso para instalar los temas de Codex Desktop y CLI: comandos listos para copiar y pegar, motores de temas como Dream Skin, temas para CLI y cómo cambiarlos o desinstalarlos. Compatible con macOS y Windows."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["install", "guide", "desktop", "cli", "themes"]
category: "guide"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
lang: "es"
---

Las skins de Codex te permiten personalizar la apariencia de OpenAI Codex Desktop y Codex CLI para que el entorno de trabajo se adapte a tus preferencias: una paleta oscura y suave para sesiones nocturnas, una superficie pastel para el día o un estilo neón simplemente por diversión.

Esta guía explica todos los métodos disponibles para instalar una skin de Codex, desde el sencillo comando de instalación por copia y pegado hasta los gestores de temas para CLI.

## Versión resumida

La mayoría de las skins de este índice se instalan del mismo modo:

1. Elige una skin y abre su página de detalles.
2. Copia el comando de instalación (o descarga el archivo del tema, en el caso de skins con formato `.codedrobe-theme`).
3. Pégalo en Codex Desktop o ejecuta el comando en Codex CLI.
4. El motor de temas aplica inmediatamente la paleta — en la mayoría de los motores no es necesario reiniciar la aplicación.

Eso es todo. Las skins son configuraciones, no código, por lo que cambiarlas es rápido y completamente reversible.

## Método 1: Instalación mediante copia y pegado del comando (el más rápido)

La mayoría de las skins de Codex —especialmente los ajustes predefinidos del motor de inyección de código abierto [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin)— se instalan con un único comando escrito en lenguaje natural.

En la página de detalles de cualquier skin, el cuadro **Comando de instalación** contiene una instrucción lista para copiar y pegar, como esta:

```text
Codex, aplica el tema claro 'Clear Glass' — una superficie limpia y acristalada, con mínima distracción, para mi entorno de trabajo.
```

Cópiala, ábrela en Codex y pégala. El motor interpreta el comando y aplica la paleta, los bordes y los colores de acento definidos en el tema.

> **Consejo:** si el comando aplica un ajuste predefinido, el motor lo almacena internamente, de modo que podrás volver al tema predeterminado con un solo clic.

## Método 2: Descarga de un archivo de tema (`.codedrobe-theme`)

Algunas skins se distribuyen como archivos descargables con extensión `.codedrobe-theme`. Para instalarlas:

1. Haz clic en **Descargar .codedrobe-theme** en la página de la skin.
2. Guarda el archivo en la ubicación que prefieras.
3. Ábrelo desde Codex Desktop — los motores compatibles importan automáticamente el tema.

Este método es habitual en galerías como codexskins.org, que alojan archivos de temas listos para usar.

## Método 3: Instalación de una skin para CLI mediante comando

Las skins para Codex CLI siguen una ruta de instalación distinta. Las skins con formato `tmtheme` (por ejemplo, las versiones adaptadas del tema Bearded Theme Ports) se instalan con un único comando:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# luego, en Codex CLI, ejecuta:
/theme Tokyo Night
```

Herramientas como [Codex Themes CLI](https://github.com/ychampion/codex-themes) y [Codepilot](https://github.com/charzhu/codepilot) gestionan automáticamente las skins para CLI: validan, previzualizan, aplican, revierten y exportan paletas coincidentes para tu terminal.

## ¿Qué motores soportan skins?

| Motor | Plataformas | Método de instalación |
|---|---|---|
| Codex Dream Skin | macOS, Windows | Comando del agente / ajuste predefinido |
| Codex Skin Manager | macOS, Windows | Gestor integrado |
| Codex Themes (escritorio) | macOS | Importación de archivos `.codextheme` |
| ReTheme | macOS, Windows | Temas comunitarios firmados |
| Codex Themes CLI | Multiplataforma | Comando `/theme` en CLI |
| Codepilot | Multiplataforma (npm) | TUI integrada con comando `/skin` |

## Cómo cambiar o revertir una skin

- **Motores con ajustes predefinidos (Dream Skin, etc.):** el motor conserva el ajuste predeterminado original — normalmente un botón «Restaurar predeterminado» devuelve tu apariencia inicial.
- **CLI:** el comando `/theme` muestra la lista de temas instalados; vuelve a ejecutarlo con otro nombre para cambiar de tema.
- **Archivos de tema:** vuelve a importar un archivo `.codedrobe-theme` anterior o vuelve a ejecutar el ajuste predeterminado del motor.

## Skins populares para empezar

- [Gothic Void Expedition](/skins/gothic-void-expedition/) — el tema oscuro predeterminado integrado en el motor.
- [Clear Glass](/skins/clear-glass/) — una superficie clara y acristalada ideal para el día.
- [Monokai Stone](/skins/monokai-stone/) — la clásica paleta para CLI.
- [Hatsune Miku](/skins/hatsune-miku/) — energía vocaloid en tonos azul-verde.

Explora el [índice completo](/skins/) para descubrir más de 100 skins adicionales, o consulta nuestro [tutorial](/tutorial/) para conocer los detalles técnicos de la configuración a nivel de motor.
