---
title: "Fundas de Codex de Alto Contraste: Accesibilidad que realmente se ve bien"
description: "Un alto contraste no es un gris oscuro. Buenas fundas Codex accesibles cumplen con las proporciones de contraste WCAG manteniendo su personalidad: así es como elegirlas y comprobarlas."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["accessibility", "contrast", "wcag"]
category: "tips"
relatedSkins: ["monokai-stone-cli", "vivid-purple", "forest-mist", "blue-enchantress"]
lang: "es"
---

"Accesible" suena como una reducción. Gris sobre negro, fuentes grandes, sin personalidad. No tiene por qué serlo — algunas de las skins de Codex más impactantes en este índice también cumplen los requisitos de contraste WCAG. La clave es saber qué buscar, y un par de skins aquí lo demuestran.

## El número que realmente necesitas: 4,5:1

WCAG AA para texto normal requiere una relación de contraste de al menos **4,5:1** entre el texto y el fondo. El texto grande (18px o más o 14px en negrita) solo necesita 3:1. El código — tu contenido principal — es texto normal, así que 4,5:1 es el estándar.

No necesitas ser diseñador para comprobarlo. Introduce los códigos hex de primer plano y fondo de cualquier skin en cualquier verificador de contraste, y obtienes la relación en segundos. Si el color del texto está por debajo de 4,5:1 en su fondo, ese es todo el problema — corrige ese par y estarás al 90% de camino.

## Qué hace que una skin accesible se sienta bien

Un alto contraste falla cuando es alto en todas partes. Las buenas skins mantienen una jerarquía clara:

- **Texto de código en fondo: ≥ 4,5:1.** Indiscutible.
- **Elementos de interfaz con bajo contraste:** comentarios, números de línea, etiquetas de panel pueden estar más bajos (3:1+), para que la vista no se esté gritando a todo a la vez.
- **Un fuerte acento** para el cursor/selección, mantenido por encima de 3:1 respecto a sus vecinos.

[Monokai Stone (CLI)](/skins/monokai-stone-cli/) lo hace bien — los colores de sintaxis permanecen lo suficientemente brillantes como para leerlos mientras que el marco de la interfaz se mantiene tranquilo. [Forest Mist](/skins/forest-mist/) muestra una paleta accesible que no tiene que ser fea de alto contraste; los verdes atenuados aún superan el umbral.

## Ceguera al color: la revisión adicional

La relación de contraste solo cubre la luminosidad. Si eres daltoniano — aproximadamente el 8% de los hombres — las distinciones entre rojo y verde desaparecen. Por tanto:

- **No dependas únicamente del color** para distinguir estados (por ejemplo, solo un punto rojo/verde para errores). Combínalo con un icono o una palabra.
- **Prefiere acentos azules/anaranjados** en lugar de pares rojo/verde donde sea posible. [Blue Enchantress](/skins/blue-enchantress/) y [Vivid Purple](/skins/vivid-purple/) son apuestas seguras en este eje.

Si compartes tu configuración o publicas capturas de pantalla, estos controles son importantes para tus lectores, no solo para ti.

## Cómo comprobar una skin en 30 segundos

1. Abre la página de detalles de la skin — allí se listan los códigos hex de la paleta.
2. Toma los códigos hex de fondo y primer plano.
3. Ejecútalos en un verificador de contraste (cualquiera funciona).
4. Texto por debajo de 4,5:1 → ajusta o elige otra skin de este índice.

## Preguntas frecuentes rápidas

**¿Es peor el modo oscuro para la accesibilidad?**
No necesariamente. Lo que importa es la relación de contraste, no la luminosidad del fondo. Algunas personas con astigmatismo prefieren el modo claro; otras no. Elige según tus ojos, y luego verifica la relación.

**¿Puedo editar los colores de una skin para corregir el contraste?**
Sí, si te sientes cómodo editando el archivo del tema. Aumenta la luminosidad del primer plano o oscurece el fondo hasta que el par supere los 4,5:1, y guardarlo como tu propia variante.

**¿Las skins accesibles se ven "aburridas"?**
Solo si la paleta es plana. Las skins de este índice con acentos fuertes — [Vivid Purple](/skins/vivid-purple/), [Blue Enchantress](/skins/blue-enchantress/) — son llamativas y accesibles al mismo tiempo. El contraste y la personalidad no son opuestos.

La accesibilidad es una lista de verificación, no un estilo. Verifica la relación de 4,5:1 en cualquier skin que ames, corrige el único par que falla, y mantén el aspecto. Empieza desde [Monokai Stone](/skins/monokai-stone-cli/) si quieres una base conocida y confiable, o navega por el [índice completo](/skins/) — también el [guía para crear una skin](/blog/how-to-create-codex-skin/) muestra dónde editar los códigos hex.
