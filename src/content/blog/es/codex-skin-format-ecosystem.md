---
title: "Formatos de temas Codex comparados: codedrobe frente a codextheme frente a tmtheme frente a preset"
description: "Cuatro formatos de skin, cuatro motores, un único ecosistema. ¿Qué formato es el más portable?, ¿cuál está desapareciendo? y cómo convertir entre ellos cuando sea necesario."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["formats", "ecosystem", "compatibility"]
category: "compare"
relatedSkins: ["monokai-stone", "solarized", "tokyo-night-ychampion", "vivid-purple-cli"]
lang: "es"
---

El mundo de las skins de Codex es joven, lo que significa que los formatos aún están en proceso de consolidación. Actualmente circulan cuatro formatos, y no todos son compatibles entre sí. Comprenderlos te evitará descargar un archivo que tu motor no pueda leer.

## Los cuatro formatos

| Formato | Familia de motores | Mecanismo de carga | Portabilidad |
|---|---|---|---|
| `.codedrobe-theme` | Galerías estilo Codedrobe (codexskins.org) | Importación de archivo | Media — algunos motores lo leen |
| `.codextheme` | Gestores de temas para escritorio (Codex Themes para escritorio) | Importación de archivo | Media |
| `tmtheme` | Puertos para CLI (bearded, temas de sintaxis para terminal) | CLI `/theme` | Alta — igual que los temas de editores |
| `preset` | Motores de prompts (Dream Skin) | Prompt en lenguaje natural | Baja — depende de la formulación específica del motor |

## `.codedrobe-theme` — el estándar de las galerías

Utilizado por galerías como codexskins.org para distribuir archivos de temas listos para usar. Si ves «Descargar .codedrobe-theme», ese es el formato que estás obteniendo. Es compatible con varios motores para escritorio; su importación suele requerir solo un clic.

**Recomendado para:** obtener un tema pulido, diseñado profesionalmente, sin necesidad de configuración.
**Atención:** no es universal — verifica que tu motor soporte exactamente esta extensión.

## `.codextheme` — el formato de los gestores de escritorio

Formato usado por los gestores de temas para escritorio (notablemente Codex Themes para escritorio). Estructuralmente similar a `.codedrobe-theme`, y en la práctica a veces intercambiable, aunque los motores no siempre aceptan ambos.

**Recomendado para:** usuarios de escritorio que tengan instalado un gestor de temas.
**Atención:** superposición en la nomenclatura con `.codedrobe-theme` — las extensiones se parecen, pero no están garantizados su compatibilidad mutua.

## `tmtheme` — el trabajo pesado de la CLI

Formato de temas para terminal adaptado a Codex CLI (los puertos Bearded incluidos en este índice son el ejemplo más claro). Pertenece a la misma familia de formatos que los temas de sintaxis de TextMate/editores, por lo que su ecosistema es muy amplio: cualquier paleta en formato tmtheme puede integrarse en Codex CLI mediante un script de conversión.

**Recomendado para:** usuarios de CLI que deseen acceder al mayor abanico posible de paletas.
**Atención:** los archivos tmtheme definen colores de sintaxis, no necesariamente toda la superficie de la interfaz de usuario — podrías necesitar configuración adicional para paneles y elementos cromáticos (chrome).

## `preset` — el formato basado en prompts

No es un archivo en absoluto: se trata de una descripción en lenguaje natural que interpreta un motor de prompts como Dream Skin. Por ejemplo, «un tema nocturno cálido en ámbar, baja saturación» es un preset. Reside en la lista de presets almacenados dentro del motor.

**Recomendado para:** velocidad y experimentación iterativa.
**Atención:** carece totalmente de portabilidad. Un preset solo tiene significado dentro del motor que entiende esa formulación específica.

## Cómo convertir entre formatos

- **tmtheme ↔ preset:** no son directamente convertibles — uno es una especificación técnica, el otro una descripción textual. Deberás reformular manualmente la descripción a partir de la paleta.
- **tmtheme → .codextheme:** suele ser factible mediante un pequeño script, ya que ambos son especificaciones estructuradas de colores. Muchos puertos para CLI comenzaron precisamente así.
- **codedrobe ↔ codextheme:** a veces son intercambiables sin cambios; prueba ambas extensiones si tu motor acepta cualquiera de ellas.

Regla general: **los formatos estructurados (tmtheme, codedrobe, codextheme) son más interoperables que los formatos basados en texto (preset).** Si estás construyendo una biblioteca de skins destinada a durar años, prioriza los formatos estructurados.

## Preguntas frecuentes rápidas

**¿Cuál es el formato «oficial» de Codex?**  
De momento, ninguno. El ecosistema lo está definiendo mediante el uso real; los puertos CLI de la familia tmtheme cuentan con mayor impulso, mientras que los presets basados en prompts tienen más usuarios.

**¿Acabará imponiéndose un único formato?**  
Probablemente uno estructurado — así fue como convergieron los temas de editores. Sin embargo, los prompts no desaparecerán: cumplen una función clave en el caso de uso «probarlo rápidamente».

**¿Qué formato debería descargar para lograr la máxima compatibilidad?**  
Temas nativos de CLI como [Monokai Stone](/skins/monokai-stone/) o [Solarized](/skins/solarized/), que se distribuyen como especificaciones tmtheme/CLI — estos se importan en el mayor número posible de herramientas. También son excelentes opciones ampliamente portadas como [Tokyo Night](/skins/tokyo-night-ychampion/) y [Vivid Purple (CLI)](/skins/vivid-purple-cli/).

**¿Cómo identifico qué formato utiliza una skin?**  
Cada página de detalles de skin en este índice indica su formato de instalación — esa es la pista definitiva. Compáralo con las capacidades de tu motor antes de descargar.

Los formatos suponen fricción, no características. Elige formatos estructurados para tu biblioteca permanente, usa prompts para explorar, y deja que la página de detalles de cada skin te indique con cuál formato estás trabajando. Explora el [índice de skins](/skins/) o consulta la [comparativa de motores de skins de Codex](/blog/codex-skin-engines-compared/) para conocer qué software lee cada formato.
