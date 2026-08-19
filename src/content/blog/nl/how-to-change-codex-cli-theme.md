---
title: "Hoe het thema in Codex CLI wijzigen: /theme en terminalpaletten"
description: "Stap-voor-stap handleiding voor het wijzigen van het thema in Codex CLI — de `/theme`-opdracht, het installeren van syntaxpaletten zoals Tokyo Night en Monokai Stone, en het afstemmen op uw terminal."
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "nl"
---

Het wijzigen van het thema in Codex CLI verloopt anders dan in Codex Desktop. In plaats van visuele elementen wordt bij een Codex CLI-thema de **kleurenpaletten van de terminal** gewijzigd — achtergrond, voorgrond en syntaxis-kleuren — zodat uw prompt, automatische aanvullingen en uitvoer leesbaar blijven in de shell.

Hieronder vindt u de volledige werkwijze, van de eenvoudige `/theme`-schakelaar met één opdracht tot het installeren van geheel nieuwe kleurenpaletten.

## De snelste manier: `/theme`

Codex CLI bevat een ingebouwen thema-opdracht. Open een prompt en typ:

```bash
/theme
```

Dit toont een lijst van alle momenteel geïnstalleerde thema’s. Gebruik de pijltjestoetsen (of typ de naam) om er direct één toe te passen — een herstart is niet nodig. Als u een syntaxis-thema zoals Tokyo Night hebt geïnstalleerd, verschijnt dit in de lijst onder precies die naam:

```bash
/theme Tokyo Night
```

## Installeer eerst een nieuw palet

`/theme` toont alleen thema’s die u al hebt geïnstalleerd. Syntaxis-paletten (zoals Tokyo Night, Monokai Stone en Solarized) worden geïnstalleerd via een script dat het palet naar de themamap van Codex CLI kopieert:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# vervolgens lijst en pas toe:
/theme
```

De Bearded Theme Ports-repository bevat meer dan 50 varianten — waaronder Solarized, Tokyo Night en Monokai Stone — zodat u binnen enkele seconden meerdere paletten kunt testen.

## Gebruik een themabeheerder voor terugdraaien en synchronisatie met de terminal

Als u vaak van thema wisselt, verwijdert een CLI-beheerder de onzekerheid:

- **Codex Themes CLI** (`ychampion/codex-themes`) — een Go-CLI waarmee u een overeenkomend palet kunt **valideren, voorvertonen, toepassen, terugdraaien en exporteren** naar uw terminalprofiel. Pas toe met `codex-theme apply <naam>`; keer terug met één opdracht.
- **Codepilot** (`charzhu/codepilot`) — een Codex CLI-distributie met een ingebouwde TUI:

```bash
npm i -g @charzhu/codepilot
# voer /skin uit binnen de TUI om één van de 16 ingebouwde skins te kiezen
```

## Synchroniseer uw terminal en editor

Een palet ziet er het beste uit wanneer terminal, CLI en editor hetzelfde gebruiken. Met Codex Themes CLI kunt u dezelfde kleuren exporteren naar uw terminalprofiel, zodat de shell en Codex CLI na één toepassing perfect op elkaar aansluiten. Combineer dit met een geporteerde editor-thema (bijvoorbeeld Tokyo Night in VS Code) voor een consistente werkruimte.

## Snelle naslag: populaire CLI-paletten

| Skin | Stijl | Toepassen |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | Klassiek syntaxis-palet | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | Donkerblauw, weinig schittering | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | Iconisch retro-palet | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | Warm-donkere terminalidentiteit | `codex-theme apply amber-nocturne-cli` |

## Probleemoplossing

- **Thema verschijnt niet in `/theme`** — voer eerst het installatiescript uit en open daarna opnieuw de prompt.
- **Kleuren zien er verkeerd uit na het wisselen** — herstart Codex CLI; sommige ports cachen kleuren bij het opstarten.
- **U wilt hetzelfde palet ook in de shell** — gebruik de exportfunctie van Codex Themes CLI om het palet naar uw terminalprofiel te schrijven.

Bekijk alle [Mono & Terminal-skins](/skins/category/mono-terminal/), of lees de [volledige gids voor CLI-thema’s](/blog/codex-cli-themes-guide/) voor het complete overzicht.
