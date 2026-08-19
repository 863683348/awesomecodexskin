---
title: "Hoe de thema te wijzigen in Codex CLI: /theme & Terminal paletten"
description: "Stap-voor-stap gids voor het wijzigen van het thema in Codex CLI — de /theme opdracht, het installeren van syntax paletten zoals Tokyo Night en Monokai Stone, en het aanpassen van je terminal."
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "nl"
---

STRICTE REGELS:
1. Vertaal alle menselijke leesbare proza, kopjes, tabeltekst en linktekst.
2. NOOIT vertalen: codeblokken, inline code, bestandsnamen, shellcommando's, URLs, productnamen (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), numerieke/version tokens, of huidige thema namen.
3. Houd de markdown structuur identiek: dezelfde koppen, lijsten, tabellen, vet/koers, citaten, en linkbestemmingen. Een link zoals [Monokai Stone](/skins/monokai-stone/) behoudt zijn /pad/ URL onveranderd; alleen de zichtbare tekst mag worden vertaald.
4. Houd elke ruwe HTML/JSX precies zo.
5. Geef ALLEEN het vertaalde markdown lichaam. Geen voorwoord, geen notities, geen codevouchers om het antwoord.

Het veranderen van het thema in Codex CLI is een ander proces dan in Codex Desktop. In plaats van visuele chrome, wisselt een Codex CLI thema de **terminal kleurenpalet** - achtergrond, voorgrond en syntaxiskleuren - zodat uw prompt, autocompleet en output leesbaar blijven in de shell.

Hier is het volledige werkstroom, van de één-opdracht `/theme` schakelaar tot het installeren van nieuwe paletten.

## De snelste manier: /theme

Codex CLI bevat een ingebouwd themacommando. Open een prompt en typ:

```bash
/theme
```

Dit geeft elke momenteel geïnstalleerde thema weer. Druk op de pijltoetsen (of typ de naam) om er direct eentje te gebruiken — geen herstart vereist. Als u een syntaxthema als Tokyo Night hebt geïnstalleerd, verschijnt het in deze lijst onder zijn exacte naam:

```bash
/theme Tokyo Night
```

## Installeer eerst een nieuw palet

`/theme` toont alleen thema's die u hebt geïnstalleerd. Syntaxpaletten (Tokyo Night, Monokai Stone, Solarized) installeren via een script dat het palet naar Codex CLI's themamap port:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# vervolgens lijst en toepassen:
/theme
```

De Bearded Theme Ports repo bevat 50+ varianten - Solarized, Tokyo Night, Monokai Stone en meer - zodat u meerdere paletten in seconden kunt testen.

## Gebruik een themamanager voor terugdraaien en terminal synchronisatie

Als u vaak thema's verandert, verwijdert een CLI-beheerder het geraden:

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go CLI die kan **valideren, vooraf tonen, toepassen, terugdraaien en exporteren** van een passend palet naar uw terminalprofiel. Toepassen met `codex-theme apply <naam>`; terugkeren met één commando.
- **Codepilot** (`charzhu/codepilot`) — een Codex CLI distributie met een ingebouwde TUI:

```bash
npm i -g @charzhu/codepilot
# voer /skin binnen de TUI uit om een van de 16 ingebouwde skins te kiezen
```

## Pas je terminal en editor aan

Een palet ziet er het beste uit wanneer terminal, CLI en editor hetzelfde delen. Met Codex Themes CLI exporteert u dezelfde kleuren naar uw terminalprofiel, zodat de shell en Codex CLI na één toepassing overeenkomen. Koppel het aan een geporteerde editor-thema (bijv. Tokyo Night in VS Code) voor een consistent werkplek.

## Snelle referentie: populaire CLI-paletten

| Themas | Stijl | Toepassen |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | Klassiek syntaxpalet | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | Donkerblauw, laag glinsteren | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | Iconische retro-palet | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | Warm-donker terminalidentiteit | `codex-theme apply amber-nocturne-cli` |

## Probleemoplossing

- **Thema verschijnt niet in `/theme`** — voer eerst het installatiescript uit, en open vervolgens de prompt opnieuw.
- **Kleuren zien er verkeerd uit na het wisselen** — herstart Codex CLI; sommige ports cache kleuren bij opstart.
- **Wilt hetzelfde palet in de shell** — gebruik de exportfunctie van Codex Themes CLI om het palet naar uw terminalprofiel te schrijven.

Blader door alle [Mono & Terminal skins](/skins/category/mono-terminal/), of lees de [volledige CLI-thema's gids](/blog/codex-cli-themes-guide/) voor het volledige beeld.
