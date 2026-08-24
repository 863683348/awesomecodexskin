---
title: "Codex CLI thema's: Hoe te gebruiken /theme en Terminal huiden"
description: "Alles over Codex CLI thema's: het installeren van syntax thema's zoals Tokyo Night, Monokai Stone en Solarized, het gebruik van de /theme commando, en het beheren van paletten met CLI tools."
pubDate: "2026-08-14"
updatedDate: "2026-08-24"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
faq:
  - q: "Wat is een Codex CLI thema?"
    a: "Een Codex CLI-thema is een terminalkleurenspel — achtergrond, voorgrond en syntaxiskleuren — die je prompt en output leesbaar houdt. In tegenstelling tot Codex Desktop heeft CLI geen visuele chrome; thema's veranderen alleen kleuren."
  - q: "Hoe voeg ik een thema toe in Codex CLI?"
    a: "Voer de ingebouwde /theme-opdracht binnen Codex CLI uit om de geïnstalleerde thema's te vermelden, kies er dan een om het direct toe te passen."
  - q: "Hoe installeer ik syntax-thema's zoals Tokyo Night of Monokai Stone?"
    a: "Installeer een thema port script (bijv. de Bearded Theme Ports installatie), voer daarna /theme Tokyo Night (of /theme Monokai Stone) uit om het te gebruiken."
  - q: "Waarom worden er geen thema's getoond bij /theme?"
    a: "U heeft nog geen thema geïnstalleerd. Voer eerst het installatiescript uit, open daarna de Codex CLI-prompt opnieuw — /theme geeft de geïnstalleerde thema's weer."
  - q: "Kan mijn terminalkleurenset overeenkomen met mijn Codex CLI-thema?"
    a: "Ja — Codex Themes CLI (ychampion/codex-themes) kan hetzelfde kleurenpalet naar je terminalprofiel exporteren zodat de terminal en Codex CLI in synchronisatie blijven."
lang: "nl"
---

STRICTE REGELS:
1. Vertaal alle menselijke leesbare tekst, koppen, tabeltekst en linktekst.
2. NOOIT vertalen: codeblokken, inline code, bestandspaden, shellcommando's, URLs, productnamen (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), numerieke/version tokens, of huidige huidennamen.
3. Houd de markdownstructuur identiek: dezelfde koppen, lijsten, tabellen, vet/koers, blokken citaat, en linkdoelen. Een link zoals [Monokai Stone](/skins/monokai-stone/) behoudt zijn /path/ URL onveranderd; alleen de zichtbare tekst mag worden vertaald.
4. Houd elke ruwe HTML/JSX precies zo.
5. Geef ALLEEN het vertaalde markdown-lichaam weer. Geen voorwoord, geen opmerkingen, geen codevleugels om het antwoord heen.

Codex CLI-thema's veranderen de **terminalkleurenpalet** - achtergrond, voorgrond en syntaxiskleuren - zodat je prompt en output leesbaar blijven in de terminal. Je past ze aan met het ingebouwde `/theme`-commando: voer `/theme` uit om geïnstalleerde thema's te tonen, kies er een en het wordt direct toegepast. In tegenstelling tot Codex Desktop heeft de CLI geen visuele chrome; een thema is puur de kleuren die je ziet.

## Snelle start

1. Installeer een thema-port (eenmalig): `curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh`
2. Open Codex CLI en voer `/theme` uit.
3. Kies een thema (bijv. `/theme Tokyo Night`) - het wordt direct toegepast.

## Het /theme-commando

Het snelste middel om een CLI-thema te gebruiken is het ingebouwde `/theme`-commando:

```bash
# in Codex CLI:
/theme
```

Hiermee worden geïnstalleerde thema's getoond. Kies er een om het direct toe te passen.

## Een syntaxthema installeren

Syntaxthema's (zoals Monokai Stone, Tokyo Night, Solarized) worden geïnstalleerd via een script dat het palet naar de themamap van Codex CLI port:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# vervolgens:
/theme Tokyo Night
```

De repo Bearded Theme Ports bevat meer dan 50 Bearded-variante - Solarized, Tokyo Night, Monokai Stone en meer.

## Thema's beheren met CLI-tools

Twee tools maken het beheren van CLI-thema's pijnloos:

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go CLI: valideren, vooraf tonen, toepassen, terugdraaien en exporteren van overeenkomende terminalpaletten. Ideaal als je wilt dat je terminal en Codex CLI hetzelfde palet delen.
- **Codepilot** (`charzhu/codepilot`) — een Codex CLI-distributie met ingebouwde TUI-personalisatie:

```bash
npm i -g @charzhu/codepilot
# voer vervolgens /skin binnen de TUI uit om een ingebouwd thema te kiezen
```

Codepilot bevat 16 ingebouwde TUI-skins (achtergrond + oppervlaktekleuren).

## Populaire CLI-thema's in de index

| Themap | Stijl | Install |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Klassiek syntaxpalet | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Iconisch retro-palet | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Donkerblauwe Tokyo Night | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Warm-donkere terminaalidentiteit | `codex-theme apply amber-nocturne` |

## Probleemoplossing

- **`/theme` zegt geen thema's geïnstalleerd** — voer eerst het installatiescript uit, en open daarna het promptvenster opnieuw.
- **Palet ziet er verkeerd uit** — herstart Codex CLI na het toepassen; sommige ports cache kleuren bij opstarten.
- **Wil je dat je terminal er hetzelfde uitziet** — gebruik de exportfunctie van Codex Themes CLI om hetzelfde palet naar je terminalprofiel te schrijven.

Blader door alle [Mono & Terminal-skins](/skins/category/mono-terminal/) of begin met de [installatiehandleiding](/blog/how-to-install-codex-skins/).
