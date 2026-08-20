---
title: "Cómo instalar y usar la piel Codex Dream (paso a paso)"
description: "Instalar la piel Codex Dream en macOS y Windows, pegar los ajustes predeterminados de la solicitud, cambiar las pieles instantáneamente y resolver problemas comunes de \"no aplicación\"."
pubDate: "2026-08-20"
updatedDate: "2026-08-20"
tags: ["dream-skin", "install", "guide"]
category: "guide"
relatedSkins: ["amber-nocturne", "blue-enchantress", "clear-glass", "cyber-neon"]
lang: "es"
---

REGLAS ESTRICTAS:
1. Traduzca todo el texto legible por humanos, títulos, texto de tablas y texto de enlaces.
2. NUNCA traduzca: bloques de código, código en línea, rutas de archivos, comandos de shell, URLs, nombres de productos (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), tokens numéricos/versiones o nombres de skins visibles.
3. Mantenga la estructura de markdown idéntica: mismos títulos, listas, tablas, negrita/itálica, citas, y destinos de enlaces. Un enlace como [Monokai Stone](/skins/monokai-stone/) mantiene su URL /path/ sin cambios; solo el texto visible puede ser traducido.
4. Mantenga cualquier HTML/JSX sin modificar.
5. Salida SOLO el cuerpo traducido en markdown. Sin introducción, sin notas, sin delimitadores de código alrededor de la respuesta.

Dream Skin es la forma más rápida de cambiar cómo se ve Codex Desktop, e instalarlo toma unos cinco minutos. Esta guía recorre la configuración en macOS y Windows, cómo aplicar prompts preestablecidos, cambiar skins y resolver los dos problemas más comunes que la gente enfrenta.

## Lo que necesitas

- **Codex Desktop** instalado (macOS 12+ o Windows 10+)
- Aproximadamente 5 minutos
- No se necesita licencia pagada — Dream Skin es gratuito y de código abierto

## Paso 1 — Obtener Dream Skin

Descargue la última versión desde el repositorio oficial **Fei-Away/Codex-Dream-Skin**. Puede:

1. Clonar el repositorio y ejecutarlo desde el código fuente, o
2. Tomar la versión empaquetada para su plataforma desde la página de versiones.

Si no está seguro qué versión elegir, la versión de construcción es la más amigable para uso diario.

## Paso 2 — Iniciar y confirmar que está activo

Abra Dream Skin y verifique que esté establecido como **aplicador activo** para Codex. Debería ver que el indicador de estado del motor cambie a "conectado" o "activo".

> Si Dream Skin y otro motor (como [Codex Skin Manager](/blog/codex-skin-manager-guide/)) están instalados, asegúrese de que solo uno esté establecido como aplicador principal — el último que aplica gana, y un silencioso "¿por qué mi skin no cambia?" casi siempre es este conflicto.

## Paso 3 — Aplicar una skin con un prompt

El ciclo principal es copiar y pegar:

1. Abra cualquier página de skin en el [Índice de skins de Codex](/skins/).
2. Copie el **prompt de instalación** (la mayoría de las skins muestran uno, por ejemplo: *"aplicar el tema oscuro Amber Nocturne — ámbar cálido sobre carbón profundo para programación nocturna"*).
3. Péguelo en Codex Desktop.
4. Dream Skin interpreta el prompt y aplica el preset correspondiente — normalmente de inmediato, sin reinicio.

Probar [Amber Nocturne](/skins/amber-nocturne/) o [Clear Glass](/skins/clear-glass/) de esta manera muestra el ciclo en menos de un minuto.

## Paso 4 — Cambiar o restaurar el predeterminado

- **Cambiar skins:** pega un nuevo prompt — Dream Skin reemplaza el preset activo.
- **Restaurar la apariencia predeterminada:** use el botón "restaurar predeterminado" del motor para volver al tema original de Codex.

## Paso 5 — Gestionar presets que te gusten

Cuando encuentres una apariencia digna de conservar, guarda el preset en la lista de presets de Dream Skin. Es aquí donde notarás la única debilidad de Dream Skin — es excelente para aplicar, pero menos para organizar una gran biblioteca. Para coleccionistas intensivos, combinarlo con un [gestor de estilo de galería](/blog/codex-skin-manager-guide/) es la solución común.

## Solución de problemas

### "La skin no se aplica"

Compruebe, en orden:

1. **Conflicto de motor** — ¿otro motor también está establecido como aplicador activo? Desactívelo.
2. **Discrepancia de versión** — Dream Skin interpreta prompts; un prompt ligeramente diferente puede dar lugar a un preset distinto. Copie el prompt exacto desde la página de la skin.
3. **Reiniciar** — algunos motores almacenan en caché su estado de tema; un rápido reinicio de Codex lo resuelve.

### "No puedo desinstalarlo"

Vea la guía dedicada [Eliminar Dream Skin](/blog/how-to-remove-dream-skin-codex/) para una desinstalación limpia en ambos sistemas.

### "Los prompts se aplican pero se ven diferentes al preview"

Eso es variación de interpretación, inherente a los motores basados en prompts. Para resultados exactos pixel a pixel, use un motor basado en archivo o el determinístico [Skin Manager](/blog/codex-dream-skin-vs-skin-manager/).

## Relacionado

- [Reseña de Dream Skin](/blog/codex-dream-skin-review/) — ¿vale la pena instalar?
- [Alternativas mejores de Dream Skin](/blog/codex-dream-skin-alternatives/) — seis otros motores comparados
- [Cómo instalar skins de Codex](/blog/how-to-install-codex-skins/) — todos los métodos de instalación en todos los motores
