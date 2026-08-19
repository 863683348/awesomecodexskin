---
title: "Skins de Codex de alto contraste: accesibilidad que realmente tiene buen aspecto"
description: "El alto contraste no es simplemente un gris desagradable sobre negro. Las buenas skins accesibles de Codex cumplen las proporciones de contraste WCAG sin sacrificar su personalidad; aquí te explicamos cómo seleccionarlas y comprobarlas."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["accessibility", "contrast", "wcag"]
category: "tips"
relatedSkins: ["monokai-stone-cli", "vivid-purple", "forest-mist", "blue-enchantress"]
lang: "es"
---

«Accesible» suena como una degradación. Gris sobre negro, fuentes grandes, sin personalidad. Pero no tiene por qué ser así: algunas de las skins de Codex más impactantes de este índice también cumplen los requisitos de contraste WCAG. El truco está en saber qué buscar, y varias skins de esta lista lo demuestran.

## El número que realmente necesitas: 4,5:1

WCAG AA exige un ratio de contraste de al menos **4,5:1** entre el texto y su fondo para texto normal. El texto grande (18 px o más, o 14 px en negrita) solo requiere 3:1. El código —tu contenido principal— se considera texto normal, así que 4,5:1 es la barrera mínima obligatoria.

No necesitas ser diseñador para comprobarlo. Simplemente introduce los valores hexadecimales del color de primer plano y del fondo de cualquier skin en cualquier verificador de contraste, y obtendrás el ratio en cuestión de segundos. Si el color de tu texto cae por debajo de 4,5:1 sobre su fondo, ese es exactamente el problema: corrige ese único par y ya habrás resuelto el 90 % del asunto.

## Qué hace que una skin accesible *se sienta* agradable

El alto contraste falla únicamente cuando está presente en todas partes. Las buenas skins mantienen una jerarquía clara:

- **Texto de código sobre el fondo: ≥ 4,5:1.** Imprescindible e innegociable.  
- **Elementos de interfaz atenuados:** comentarios, números de línea y etiquetas de paneles pueden tener un contraste menor (≥ 3:1), para que la vista no reciba estímulos intensos simultáneos en todos los elementos.  
- **Un único acento fuerte**, por ejemplo para el cursor o la selección, mantenido siempre por encima de 3:1 frente a sus vecinos inmediatos.

[Monokai Stone (CLI)](/skins/monokai-stone-cli/) lo hace bien: los colores de sintaxis permanecen suficientemente brillantes para una lectura cómoda, mientras que el marco de la interfaz se mantiene discreto. [Forest Mist](/skins/forest-mist/) muestra una paleta accesible que no tiene por qué ser fea ni agresiva visualmente; sus verdes apagados siguen cumpliendo holgadamente el umbral mínimo.

## Daltonismo: la comprobación adicional

El ratio de contraste solo evalúa la luminosidad. Si tienes daltonismo —aproximadamente el 8 % de los hombres—, las diferencias entre rojo y verde desaparecen. Por tanto:

- **No confíes únicamente en el color** para distinguir estados (por ejemplo, usar solo un punto rojo o verde para indicar errores). Añade un icono o una palabra que refuerce la distinción.  
- **Prefiere acentos azules o naranjas** frente a pares rojo/verde siempre que sea posible. [Blue Enchantress](/skins/blue-enchantress/) y [Vivid Purple](/skins/vivid-purple/) son opciones seguras desde este punto de vista.

Si compartes tu configuración o publicas capturas de pantalla, estas comprobaciones también importan para tus lectores, no solo para ti.

## Cómo comprobar una skin en 30 segundos

1. Abre la página de detalles de la skin: allí aparecen listados los valores hexadecimales de su paleta.  
2. Copia los valores hexadecimales del fondo y del primer plano.  
3. Introdúcelos en cualquier verificador de contraste (cualquiera gratuito funciona).  
4. Si el texto resulta inferior a 4,5:1, ajusta esos colores o elige otra skin de este índice.

## Preguntas frecuentes rápidas

**¿Es el modo oscuro peor para la accesibilidad?**  
No intrínsecamente. Lo que importa es el ratio de contraste, no la claridad u oscuridad del fondo. Algunas personas con astigmatismo prefieren el modo claro; otras, no. Elige según lo que mejor vean tus ojos, y luego verifica el ratio.

**¿Puedo editar los colores de una skin para corregir el contraste?**  
Sí, si te sientes cómodo editando el archivo del tema. Aumenta ligeramente la luminosidad del color de primer plano o oscurece un poco el fondo hasta que el par alcance 4,5:1, y guárdalo como tu propia variante.

**¿Las skins accesibles parecen «aburridas»?**  
Solo si su paleta es plana y monótona. Las skins de este índice con acentos contundentes —como [Vivid Purple](/skins/vivid-purple/) o [Blue Enchantress](/skins/blue-enchantress/)— son a la vez llamativas y accesibles. Contraste y personalidad no son conceptos opuestos.

La accesibilidad es una lista de verificación, no un estilo estético. Verifica el ratio 4,5:1 en cualquier skin que te guste, corrige el único par que no lo cumpla y conserva el aspecto visual que prefieras. Empieza con [Monokai Stone](/skins/monokai-stone-cli/) si buscas una base probada y fiable, o explora el [índice completo](/skins/); además, la [guía para crear una skin de Codex](/blog/how-to-create-codex-skin/) también explica dónde editar los valores hexadecimales.
