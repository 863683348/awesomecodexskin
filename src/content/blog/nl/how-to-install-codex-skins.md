---
title: "Hoe Codex-skins (Desktop & CLI) te installeren: De complete gids"
description: "Stap-voor-stap handleiding voor het installeren van Codex Desktop- en CLI-thema’s — inclusief kopieer-plak-opdrachten, thema-engines zoals Dream Skin, CLI-thema’s en uitleg over het wisselen of verwijderen ervan. Geldt voor macOS en Windows."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["install", "guide", "desktop", "cli", "themes"]
category: "guide"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
lang: "nl"
---

Codex-skins laten u OpenAI Codex Desktop en Codex CLI opnieuw uitkleden, zodat de werkruimte aansluit bij uw persoonlijke smaak — een donkere, lage-verlichtingspalet voor nachtsessies, een pastelachtig oppervlak voor overdag of een neonstijl puur voor plezier.

Deze handleiding behandelt alle manieren om een Codex-skin te installeren, van de eenvoudige kopieer-plak-installatieprompt tot CLI-themabeheerders.

## De korte versie

De meeste skins in deze index worden op dezelfde manier geïnstalleerd:

1. Kies een skin en open de bijbehorende detailpagina.
2. Kopieer de installatieprompt (of download het themabestand, voor `.codedrobe-theme`-skins).
3. Plak de prompt in Codex Desktop of voer de opdracht uit in Codex CLI.
4. De thememotor past het palet direct toe — op de meeste motoren is geen herstart nodig.

Dat is alles. Skins zijn configuratie, geen code, dus wisselen gaat snel en is volledig omkeerbaar.

## Methode 1: Kopiëren en plakken van de installatieprompt (snelst)

De meeste Codex-skins — met name enginevoorstellingen van [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin), de open-source injectiemotor — worden geïnstalleerd via één natuurlijke taalprompt.

Op de detailpagina van elke skin bevat het vak **Installatieprompt** een kant-en-klaar te plakken instructie zoals:

```text
Codex, pas het lichte thema 'Clear Glass' toe — een strak, glasachtig, afleidingsarm oppervlak voor mijn werkruimte.
```

Kopieer deze, open Codex en plak hem. De motor leest de prompt en past het palet, de randen en de accentkleuren toe zoals gedefinieerd in het thema.

> **Tip:** als de prompt een voorinstelling toepast, slaat de motor deze op, zodat u later met één klik terug kunt keren naar de standaardinstelling.

## Methode 2: Download een themabestand (.codedrobe-theme)

Sommige skins worden geleverd als een downloadbaar `.codedrobe-theme`-bestand. Voor deze skins:

1. Klik op **Download .codedrobe-theme** op de skinpagina.
2. Sla het bestand op een geschikte locatie op.
3. Open het bestand vanuit Codex Desktop — ondersteunde motoren importeren het thema automatisch.

Deze methode komt veelvuldig voor op galerijen zoals codexskins.org die kant-en-klaar gemaakte themabestanden hosten.

## Methode 3: Installeer een CLI-thema met een opdracht

Codex CLI-thema’s gebruiken een andere installatiemethode. Skins met het `tmtheme`-installatieformaat (bijvoorbeeld de Bearded Theme Ports) worden geïnstalleerd met één opdracht:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# vervolgens in Codex CLI uitvoeren:
/theme Tokyo Night
```

Hulpmiddelen zoals [Codex Themes CLI](https://github.com/ychampion/codex-themes) en [Codepilot](https://github.com/charzhu/codepilot) beheren CLI-thema’s voor u — ze valideren, tonen een voorbeeld, passen toe, maken ongedaan en exporteren overeenkomstige terminalpaletten.

## Welke motoren ondersteunen skins?

| Motor | Platforms | Installatiestijl |
|---|---|---|
| Codex Dream Skin | macOS, Windows | Agentprompt / voorinstelling |
| Codex Skin Manager | macOS, Windows | Ingebouwde beheerder |
| Codex Themes (desktop) | macOS | .codextheme-import |
| ReTheme | macOS, Windows | Gesigneerde community-thema’s |
| Codex Themes CLI | Platformonafhankelijk | CLI `/theme` |
| Codepilot | Platformonafhankelijk (npm) | Ingebouwde TUI `/skin` |

## Hoe een skin te wijzigen of terug te zetten

- **Voorinstellingsmotoren (zoals Dream Skin):** de motor bewaart de standaardvoorinstelling — meestal keert een knop ‘standaard herstellen’ uw oorspronkelijke weergave terug.
- **CLI:** `/theme` geeft een lijst van geïnstalleerde thema’s; voer de opdracht opnieuw uit met een andere naam om te wisselen.
- **Themabestanden:** importeer een eerder `.codedrobe-theme`-bestand opnieuw of voer de standaardfunctie van de motor opnieuw uit.

## Populaire skins om mee te beginnen

- [Gothic Void Expedition](/skins/gothic-void-expedition/) — de ingebouwde donkere standaard van de motor.
- [Clear Glass](/skins/clear-glass/) — een glasachtig licht oppervlak voor overdag.
- [Monokai Stone](/skins/monokai-stone/) — het klassieke CLI-palet.
- [Hatsune Miku](/skins/hatsune-miku/) — blauwgroene Vocaloid-energie.

Bekijk de [volledige index](/skins/) voor meer dan 100 aanvullende skins, of lees onze [handleiding](/tutorial/) voor gedetailleerde informatie over de installatie op motor-niveau.
