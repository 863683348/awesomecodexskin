---
title: "Hoe verwijder je / oninstalleer je Codex Dream Skin"
description: "Schone ongebruik van Codex Dream Skin en herstel de standaard Codex-uitstraling op macOS en Windows — verwijder voorinstellingen, reset het actieve thema en verwijder overblijvende configuratie."
pubDate: "2026-08-20"
updatedDate: "2026-08-20"
tags: ["dream-skin", "uninstall", "tips"]
category: "tips"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "solarized"]
lang: "nl"
---

STRICTE REGELS:
1. Vertaal alle menselijke leesbare tekst, kopjes, tabeltekst en linktekst.
2. NOOIT vertalen: codeblokken, inline code, bestandspaden, shellcommando's, URLs, productnamen (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), numerieke/version tokens, of huidennamen.
3. Houd de markdown-structuur identiek: dezelfde koppen, lijsten, tabellen, vet/italic, blokken citaat, en linkdoelen. Een link zoals [Monokai Stone](/skins/monokai-stone/) behoudt zijn /pad/ URL ongewijzigd; alleen de zichtbare tekst mag worden vertaald.
4. Houd elke ruwe HTML/JSX precies zo.
5. Geef ALLEEN de vertaalde markdown-tekst weer. Geen voorwoord, geen opmerkingen, geen codevouchers rond het antwoord.

Wijzigt u uw mening of wilt u overgaan naar een ander engine? Het verwijderen van Codex Dream Skin is eenvoudig, maar het doen *op de juiste manier* maakt uit - een half-verwijderen laat het actieve thema toegepast en kan stilzwijgend conflicteren met uw volgende engine. Hier is hoe u het correct verwijdert op macOS en Windows.

## Voordat u begint: reset eerst het actieve thema

Dream Skin kan momenteel het **actieve toepasser** van uw Codex-thema zijn. Het verwijderen van de app terwijl deze nog actief is, kan een aangepast thema vastleggen zonder manier om het te beheren.

1. Open Dream Skin.
2. Gebruik **Standaard herstellen** om Codex terug te brengen naar er originele uiterlijk.
3. Bevestig dat het standaardthema wordt getoond in Codex voordat u doorgaat.

Als u overgaat naar een ander engine zoals [Codex Skin Manager](/blog/codex-skin-manager-guide/), installeer die eerst, stel het in als nieuwe actieve toepasser, en verwijder dan Dream Skin - dit voorkomt eventuele leegte waarin geen engine het thema kan veranderen.

## Verwijderen op macOS

1. Sluit Dream Skin en Codex Desktop af.
2. Sleep de Dream Skin-app van de map "Toepassingen" naar de Prullenbak.
3. Verwijder het resterende configuratiebestand (indien aanwezig): `~/Library/Application Support/Codex-Dream-Skin/` (of de exacte mapnaam van uw installatie).
4. Leeg de Prullenbak.

## Verwijderen op Windows

1. Sluit Dream Skin en Codex Desktop af.
2. Verwijder via **Instellingen → Apps → Geïnstalleerde apps** (of het Control Panel "Programma's toevoegen of verwijderen").
3. Verwijder het resterende gegevensmap indien deze nog aanwezig is: `%APPDATA%\Codex-Dream-Skin` (of waar uw installatie presets heeft geschreven).
4. Als u van broncode of via een pakketbeheerder hebt geïnstalleerd, voer het overeenkomstige verwijderingscommando uit.

## Controleer of niets achterblijft

Na het verwijderen, bevestig:

- Codex toont het **standaardthema** (het zou moeten zijn, als u eerst het actieve thema hebt gereset).
- Er draait geen Dream Skin-proces (controleer Activity Monitor / Taakbeheer).
- Er is geen tweede engine die nu probeert de toepasser te zijn - als u een andere engine hebt geïnstalleerd, zorg er dan voor dat deze de actieve is.

## In plaats daarvan engines wisselen?

De meeste mensen verwijderen Dream Skin om iets anders te gebruiken. De twee veelvoorkomende paden:

- **Naar een galerij UI:** [Codex Skin Manager handleiding](/blog/codex-skin-manager-guide/)
- **Naar CLI theming:** de [engines vergelijking](/blog/codex-skin-engines-compared/) dekt CLI opties zoals Codex Themes CLI en Codepilot

En als u gewoon een ander *huid* wilt in plaats van een ander *engine*, blader door de [huid index](/skins/) - het wisselen van huiden is altijd sneller dan het wisselen van engines.

## Snelle FAQ

**Verwijderen van Dream Skin verwijdert mijn aangebrachte huid?**
Als u eerst naar standaard hebt gereset, nee - Codex keert terug naar zijn ingebouwde thema. Aangepaste instellingen die door Dream Skin zijn opgeslagen, worden verwijderd met de app.

**Kan ik later opnieuw installeren?**
Ja, Dream Skin is gratis en open source; herinstalleer vanaf de officiële repo en uw huidpagina's' prompt werkt nog steeds.

**Beïnvloedt het verwijderen van Dream Skin andere engines?**
Nee, maar installeer slechts één actieve toepasser tegelijk om het laatste-wint conflict te voorkomen.
