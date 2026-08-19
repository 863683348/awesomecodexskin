---
title: "Codex CLI thema's: Hoe te gebruiken /theme en Terminal huiden"
description: "Alles over Codex CLI thema's: het installeren van syntax thema's zoals Tokyo Night, Monokai Stone en Solarized, het gebruik van de /theme commando, en het beheren van paletten met CLI tools."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "nl"
---

STRICTE REGELS:
1. Vertaal alle menselijke leesbare proza, koppen, tabeltekst en linktekst.
2. NOOIT vertalen: codeblokken, inline code, bestandspaden, shellcommando's, URLs, productnamen (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), numerieke-versietokens of huidennamen.
3. Houd de markdown-structuur identiek: dezelfde koppen, lijsten, tabellen, vet/italic, blockquotes en linkdoeleinden. Een link zoals [Monokai Stone](/skins/monokai-stone/) behoudt zijn /path/ URL onveranderd; alleen de zichtbare tekst mag worden vertaald.
4. Houd elke ruwe HTML/JSX precies zo.
5. Geef ALLEEN de vertaalde markdown-tekst weer. Geen voorwoord, geen notities, geen codevouchers om het antwoord te omringen.

Codex CLI gebruikt niet hetzelfde huidensysteem als Codex Desktop. In plaats van visuele chrome veranderen CLI-thema's de **terminalkleurenpalet** - achtergrond, voorgrond en syntaxkleuren - zodat je prompt en uitvoer leesbaar blijven in de terminal.

## De /theme-opdracht

De snelste manier om een CLI-thema te gebruiken is de ingebouwde /theme-opdracht:

```bash
# in Codex CLI:
/theme
```

Hiermee worden geïnstalleerde thema's gelijst. Kies er eentje om direct toe te passen.

## Installeren van een syntaxthema

Syntaxthema's (zoals Monokai Stone, Tokyo Night, Solarized) installeren via een script dat het palet naar de themamap van Codex CLI port:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# vervolgens:
/theme Tokyo Night
```

Het Bearded Theme Ports-opslagplaats bevat 50+ Bearded-variante - Solarized, Tokyo Night, Monokai Stone en meer.

## Thema's beheren met CLI-hulpmiddelen

Twee tools maken het beheren van CLI-thema's pijnloos:

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go CLI: valideren, vooraf tonen, toepassen, terugdraaien en exporteren van overeenkomende terminalpaletten. Ideaal als je je terminal en Codex CLI wilt laten delen met een palet.
- **Codepilot** (`charzhu/codepilot`) — een Codex CLI-distributie met ingebouwde TUI-personalisatie:

```bash
npm i -g @charzhu/codepilot
# voer vervolgens /skin binnen de TUI uit om een ingebouwd thema te kiezen
```

Codepilot bevat 16 ingebouwde TUI-huiden (achtergrond + oppervlaktekleuren).

## Populaire CLI-thema's in de index

| Huid | Stijl | Install |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Klassiek syntaxpalet | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Iconisch retro-palet | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Donkerblauwe Tokyo Night | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Warm-donkere terminalidentiteit | `codex-theme apply amber-nocturne` |

## Probleemoplossing

- **`/theme` zegt geen thema's geïnstalleerd** — voer eerst het installatiescript uit, dan herstart de prompt.
- **Palet ziet er verkeerd uit** — herstart Codex CLI na het toepassen; sommige ports cache kleuren bij opstarten.
- **Wilt uw terminal erover heen gaan** — gebruik de exportfunctie van Codex Themes CLI om hetzelfde palet naar uw terminalprofiel te schrijven.

Blader door alle [Mono & Terminal huiden](/skins/category/mono-terminal/) of begin met de [installatiehandleiding](/blog/how-to-install-codex-skins/).
