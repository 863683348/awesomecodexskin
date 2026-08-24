---
title: "Cómo eliminar / desinstalar la piel de sueño Codex"
description: "Desinstalar limpiamente la piel de sueño de Codex y restaurar la apariencia predeterminada de Codex en macOS y Windows: eliminar las configuraciones predeterminadas, restablecer el tema activo y borrar la configuración residual."
pubDate: "2026-08-20"
updatedDate: "2026-08-24"
tags: ["dream-skin", "uninstall", "tips"]
category: "tips"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "solarized"]
faq:
  - q: "¿Desinstalar Dream Skin eliminará mi piel aplicada?"
    a: "Si restableces a los predeterminados primero, no — Codex vuelve a su tema integrado. Los ajustes personalizados guardados por Dream Skin se eliminan con la aplicación."
  - q: "¿Puedo reinstalar la piel Codex Dream más tarde?"
    a: "Sí, Dream Skin es gratis y de código abierto; vuelve a instalarlo desde el repositorio oficial y los recordatorios de tus páginas de skin aún funcionan."
  - q: "¿Afecta la eliminación de Dream Skin a otros motores?"
    a: "No, pero instale solo un aplicador activo a la vez para evitar el conflicto último-gana."
lang: "es"
---

REGLAS ESTRICAS:
1. Traduce todo el texto legible por humanos, títulos, texto de tablas y texto de enlaces.
2. NUNCA traduzcas: bloques de código, código en línea, rutas de archivos, comandos de shell, URLs, nombres de productos (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), tokens numéricos/versiones o nombres de skins.
3. Mantén la estructura de markdown idéntica: mismos títulos, listas, tablas, negrita/itálica, citas, y destinos de enlaces. Un enlace como [Monokai Stone](/skins/monokai-stone/) mantiene su URL /path/ sin cambios; solo el texto visible puede ser traducido.
4. Mantén cualquier HTML/JSX sin modificar.
5. Salida SOLO el cuerpo traducido del markdown. Sin introducción, sin notas, sin cruces de código alrededor de la respuesta.

Cambiaste de opinión, o estás pasando a un motor diferente? Eliminar Dream Skin de Codex es sencillo, pero hacerlo *limpiamente* importa — una desinstalación incompleta deja el tema activo aplicado y puede causar conflictos silenciosos con tu próximo motor. Así es como debes eliminarlo correctamente en macOS y Windows.

## Antes de comenzar: restablece primero el tema activo

Dream Skin podría estar actualmente como **aplicador activo** de tu tema de Codex. Desinstalar la aplicación mientras aún está activa puede dejar un tema personalizado atrapado sin forma de gestionarlo.

1. Abre Dream Skin.
2. Usa **Restablecer predeterminado** para devolver a Codex a su aspecto original.
3. Confirma que el tema predeterminado se muestra en Codex antes de continuar.

Si te mudas a otro motor como [Codex Skin Manager](/blog/codex-skin-manager-guide/), instálalo primero, configúralo como nuevo aplicador activo y luego desinstala Dream Skin — esto evita cualquier brecha donde ningún motor pueda cambiar el tema.

## Eliminar en macOS

1. Cierra Dream Skin y Codex Desktop.
2. Arrastra la app Dream Skin desde Aplicaciones a la Papelera.
3. Limpia la carpeta de configuración restante (si existe): `~/Library/Application Support/Codex-Dream-Skin/` (o el nombre exacto de la carpeta de tu instalación).
4. Vacía la Papelera.

## Eliminar en Windows

1. Cierra Dream Skin y Codex Desktop.
2. Desinstala mediante **Configuración → Apps → Aplicaciones instaladas** (o el Panel de control "Agregar o quitar programas").
3. Elimina la carpeta de datos restante si aún existe: `%APPDATA%\Codex-Dream-Skin` (o donde tu instalación haya escrito las configuraciones predeterminadas).
4. Si instalaste desde código fuente o mediante un gestor de paquetes, ejecuta el comando de desinstalación correspondiente.

## Comprueba que no queda nada atrás

Después de desinstalar, confirma:

- Codex muestra el **tema predeterminado** (debería hacerlo, si primero restableciste el tema activo).
- No hay proceso de Dream Skin en ejecución (verifica en el Monitor de actividad / Administrador de tareas).
- No hay segundo motor luchando por ser el aplicador — si instalaste otro motor, asegúrate de que sea el activo.

## ¿Quieres cambiar de motor en su lugar?

La mayoría de la gente elimina Dream Skin para pasar a algo diferente. ¿No estás seguro cuál motor se adapta a ti? El artículo [Dream Skin vs Skin Manager](/blog/codex-dream-skin-vs-skin-manager/) compara las dos opciones de escritorio. Los dos caminos comunes son:

- **A una interfaz de galería:** [Guía de Codex Skin Manager](/blog/codex-skin-manager-guide/)
- **A tematización por CLI:** el [comparativo de motores](/blog/codex-skin-engines-compared/) cubre opciones por CLI como Codex Themes CLI y Codepilot

Y si solo quieres un *skin* diferente en lugar de un *motor* diferente, navega por el [índice de skins](/skins/) — cambiar skins siempre es más rápido que cambiar motores.

## Preguntas frecuentes rápidas

**¿Eliminar Dream Skin borrará mi skin aplicado?**
Si primero restableciste a predeterminado, no — Codex vuelve a su tema integrado. Los ajustes personalizados almacenados por Dream Skin se eliminan con la aplicación.

**¿Puedo reinstalarlo después?**
Sí, Dream Skin es gratuito y de código abierto; reinstálalo desde el repositorio oficial y los avisos de tus páginas de skins siguen funcionando.

**¿Eliminar Dream Skin afecta a otros motores?**
No, pero solo instala un aplicador activo a la vez para evitar conflictos de "último en ganar".
