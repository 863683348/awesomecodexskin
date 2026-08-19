---
title: "Cómo crear tu propia piel de Codex (Guía para principiantes)"
description: "Aprende cómo crear una piel personalizada de Codex: elige un motor, selecciona colores, escribe un conjunto de tema y pruébalo en vivo. Un recorrido práctico para principiantes sin necesidad de programación."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["create", "custom", "beginner", "theme"]
category: "guide"
relatedSkins: ["clear-glass", "sakura-pink-dawn", "amber-dusk"]
lang: "es"
---

Crear tu propia piel de Codex es sorprendentemente accesible. La mayoría de los motores aceptan un tema definido por un pequeño conjunto de colores: fondo, superficie, texto, acento, expresado como una solicitud o un archivo JSON. No necesitas tocar la aplicación Codex en sí misma.

## Paso 1: Elige un motor

El formato de tu tema depende del motor que uses:

- **Codex Dream Skin** — los temas son conjuntos de configuración o solicitudes de agente. Es más fácil comenzar: describe el paleta en una oración.
- **Codex Skin Manager** — incluye un creador de temas con un selector visual.
- **ReTheme** — temas firmados y actualizables; ideal si quieres compartir públicamente.
- **Codex Themes (escritorio)** — archivos `.codextheme` con un centro de creación en theme.codexguide.ai.

Para este tutorial usaremos el enfoque de solicitud (funciona con Dream Skin).

## Paso 2: Elige tu paleta

Una piel está compuesta principalmente por 4–6 colores:

| Rol | Ejemplo (claro) | Ejemplo (oscuro) |
|---|---|---|
| Fondo | `#F5F7FA` | `#0A0A0B` |
| Superficie (paneles) | `#FFFFFF` | `#16161A` |
| Texto | `#1A1B26` | `#E4E4E7` |
| Acento | `#2DD4BF` | `#2DD4BF` |

Mantén un solo acento. Demasiados tonos de acento es el error número uno de principiantes.

## Paso 3: Escribe el tema como una solicitud

Un conjunto de configuración de Dream Skin es simplemente una oración descriptiva:

```text
Codex, aplica un tema personalizado — una paleta de amarillo cálido al atardecer con superficies de carbón oscuro, acentos suaves de amarillo y texto de crema clara. Silencioso, acogedor, diseñado para sesiones largas de lectura.
```

Guárdalo como un conjunto de configuración en el motor, luego pruébalo. Itera las palabras hasta que el resultado coincida con tu intención.

## Paso 4: Prueba en contenido real

Abre una pantalla ocupada (código largo, muchos paneles) antes de tomar una decisión. Los temas oscuros se ven bien en capturas de pantalla y fallan en la práctica cuando el contraste de los paneles es demasiado bajo. Verifica:

- Legibilidad del editor de código
- Separación de la barra lateral / panel
- Visibilidad del acento en botones frente a enlaces

## Paso 5: Comparte el tema

Los motores como ReTheme y Codex Skin Manager te permiten exportar temas. Puedes enviar tu piel a este índice mediante la página [Enviar una piel](/submit/) — incluye una imagen de vista previa e el prompt de instalación para que otros puedan usarlo con un solo clic.

## Puntos de partida listos

Roba ideas de paletas probadas:

- [Clear Glass](/skins/clear-glass/) — superficie brillante.
- [Sakura Pink Dawn](/skins/sakura-pink-dawn/) — tonos pastel suaves.
- [Amber Dusk](/skins/amber-dusk/) — conjunto programático de amarillo cálido.

O navega por el [índice completo](/skins/) para más inspiración. Y si te atascas en los pasos de instalación, la [guía de instalación](/blog/how-to-install-codex-skins/) cubre cada método.
