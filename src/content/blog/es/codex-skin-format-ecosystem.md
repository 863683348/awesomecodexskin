---
title: "Formatos de skins de Codex comparados: codedrobe vs codextheme vs tmtheme vs preset"
description: "Cuatro formatos de skins, cuatro motores, un ecosistema. ¿Cuál formato es más portátil, cuál está muriendo y cómo convertir entre ellos cuando sea necesario."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["formats", "ecosystem", "compatibility"]
category: "compare"
relatedSkins: ["monokai-stone", "solarized", "tokyo-night-ychampion", "vivid-purple-cli"]
lang: "es"
---

La comunidad de skins de Codex es joven, lo que significa que los formatos aún están en proceso de estabilización. Actualmente existen cuatro formatos que circulan, y no todos son compatibles. Comprenderlos te evita descargara un archivo que tu motor no pueda leer.

## Los cuatro formatos

| Formato | Familia del motor | Mecanismo de carga | Portabilidad |
|---|---|---|---|
| `.codedrobe-theme` | Galerías estilo Codedrobe (codexskins.org) | Importación de archivos | Media — unos pocos motores la leen |
| `.codextheme` | Gestores de escritorio (Codex Themes para escritorio) | Importación de archivos | Media |
| `tmtheme` | Temas de línea de comandos (portes de bearded, temas de sintaxis de terminal) | CLI `/theme` | Alta — misma que los temas de editor |
| `preset` | Motores de prompts (Dream Skin) | Prompt de lenguaje natural | Baja — formulación específica del motor |

## `.codedrobe-theme` — el estándar de las galerías

Utilizado por galerías como codexskins.org para distribuir archivos de tema listos para usar. Si ves "Descargar .codedrobe-theme", es lo que obtienes. Soportado por pocos motores de escritorio; la importación suele ser de un solo clic.

**Ideal para:** obtener un tema pulido hecho por un diseñador sin necesidad de configuración.
**Tened cuidado con:** no es universal — comprueba que tu motor lea esta extensión exacta.

## `.codextheme` — el formato del gestor de escritorio

El formato utilizado por los gestores de temas de escritorio (especialmente Codex Themes para escritorio). Estructuralmente similar a `.codedrobe-theme`, a veces intercambiable en la práctica, pero los motores no siempre aceptan ambos.

**Ideal para:** usuarios de escritorio con un gestor instalado.
**Tened cuidado con:** superposición en nombres con `.codedrobe-theme` — las extensiones se parecen pero no garantizan compatibilidad.

## `tmtheme` — el trabajo principal de la CLI

Formato de tema de terminal portado a Codex CLI (los portes de Bearded en este índice son el ejemplo más claro). Es el mismo tipo de formato que los temas de TextMate/editor, por lo que el ecosistema es muy amplio — cualquier paleta con formato tmtheme puede encontrarse en Codex CLI con un script de conversión.

**Ideal para:** usuarios de CLI que quieren el mayor número posible de paletas.
**Tened cuidado con:** los archivos tmtheme definen colores de sintaxis, no siempre toda la superficie de la interfaz — quizás necesites configuración adicional para paneles y chrome.

## `preset` — el formato de prompt

No es un archivo en absoluto: una descripción de lenguaje natural que un motor de prompt como Dream Skin interpreta. "Un tema de noche ámbar cálida, baja saturación" es un preset. Vive en la lista de presets almacenados del motor.

**Ideal para:** velocidad e iteración.
**Tened cuidado con:** ninguna portabilidad. Un preset solo tiene sentido dentro del motor que entiende esa formulación.

## Cómo convertir entre formatos

- **tmtheme ↔ preset:** no se pueden convertir directamente — uno es una especificación, otro una descripción. Reescribe la descripción desde la paleta.
- **tmtheme → .codextheme:** a menudo factible con un pequeño script, ya que ambos son especificaciones estructuradas de color. Muchos portes de CLI comenzaron así.
- **codedrobe ↔ codextheme:** a veces se pueden sustituir directamente; prueba ambas extensiones si tu motor acepta cualquiera.

La regla general: **los formatos estructurados (tmtheme, codedrobe, codextheme) son más interoperables que los formatos de prosa (preset).** Si estás construyendo una biblioteca de skins que mantendrás durante años, elige formatos estructurados.

## Preguntas frecuentes rápidas

**¿Cuál es el formato "oficial" de Codex?**
Aún no hay uno. La comunidad decide mediante su uso; los portes de CLI de la familia tmtheme tienen más impulso, mientras que los presets tienen más usuarios.

**¿Llegará finalmente un formato ganador?**
Probablemente uno estructurado — así es como convergieron los temas de editores. Pero los prompts no desaparecerán; sirven al caso de uso "probarlo rápido".

**¿Qué debo descargar para máxima compatibilidad?**
Temas naturales de CLI como [Monokai Stone](/skins/monokai-stone/) o [Solarized](/skins/solarized/) que se envían como specs de CLI/tmtheme — se importan en el mayor número de herramientas. [Tokyo Night](/skins/tokyo-night-ychampion/) y [Purple Vivid (CLI)](/skins/vivid-purple-cli/) también son buenas opciones, ampliamente portadas.

**¿Cómo sé qué formato usa un skin?**
Cada página de detalles de un skin en este índice enumera su formato de instalación — eso es lo que indica. Asegúrate de coincidir con tu motor antes de descargar.

Los formatos son fricción, no características. Elige formatos estructurados para tu biblioteca permanente, prompts para exploración, y deja que cada página de detalles de skin te indique cuál estás usando. Navega por el [índice de skins](/skins/), o consulta la [comparación de motores](/blog/codex-skin-engines-compared/) para el software que lee cada formato.
