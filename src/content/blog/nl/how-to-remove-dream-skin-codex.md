---
title: "Hoe verwijder je / oninstalleer je Codex Dream Skin"
description: "Schone ongebruik van Codex Dream Skin en herstel de standaard Codex-uitstraling op macOS en Windows — verwijder voorinstellingen, reset het actieve thema en wis overgebleven configuratie."
pubDate: "2026-08-20"
updatedDate: "2026-08-24"
tags: ["dream-skin", "uninstall", "tips"]
category: "tips"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "solarized"]
faq:
  - q: "Zal het verwijderen van Dream Skin mijn aangebrachte huid verwijderen?"
    a: "Als u eerst naar de standaardinstellingen terugkeert, niet — Codex keert terug naar zijn ingebouwde thema. Aangepaste voorinstellingen die zijn opgeslagen door Dream Skin worden verwijderd met de app."
  - q: "Kan ik de Codex Dream Skin later opnieuw installeren?"
    a: "Ja, Dream Skin is gratis en open source; herinstalleer vanaf de officiële repo en de prompts van je skin-pagina's werken nog steeds."
  - q: "Heeft het verwijderen van Dream Skin invloed op andere engines?"
    a: "Nee, maar installeer op een gegeven moment alleen maar één actieve applier om de laatste-wint-conflict te voorkomen."
lang: "nl"
---

STRICTE REGELS:
1. Vertaal alle menselijke leesbare tekst, koppen, tabeltekst en linktekst.
2. NOOIT vertalen: codeblokken, inline code, bestandsnamen, shellcommando's, URLs, productnamen (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), numerieke-versietokens of huidige huidennamen.
3. Houd de markdown-structuur identiek: dezelfde koppen, lijsten, tabellen, vet/italic, blockquotes en linkdoelen. Een link zoals [Monokai Stone](/skins/monokai-stone/) behoudt zijn /pad/ URL ongewijzigd; alleen het zichtbare tekst kan worden vertaald.
4. Houd elke ruwe HTML/JSX precies zo.
5. Geef ALLEEN de vertaalde markdown-tekst weer. Geen voorwoord, geen aantekeningen, geen codevinkjes om het antwoord heen.

Veranderd je mening, of switcht naar een andere engine? Het verwijderen van Codex Dream Skin is eenvoudig, maar het moet *netjes* gebeuren — een half-verwijderen laat het actieve thema toegepast en kan stilzwijgend conflicten veroorzaken met je volgende engine. Zo verwijder je het correct op macOS en Windows.

## Voor je begint: reset eerst het actieve thema

Dream Skin kan momenteel het **actieve toepassers** van je Codex-thema zijn. Het verwijderen van de app terwijl deze nog actief is, kan een aangepast thema achterlaten zonder manier om het te beheren.

1. Open Dream Skin.
2. Gebruik **Standaard herstellen** om Codex terug te brengen naar er originele uiterlijk.
3. Bevestig dat het standaardthema wordt getoond in Codex voordat je verder gaat.

Als je overgaat naar een andere engine zoals [Codex Skin Manager](/blog/codex-skin-manager-guide/), installeer die eerst, stel het als nieuw actief toepassers in, en verwijder dan Dream Skin — dit voorkomt een gat waarin geen engine het thema kan veranderen.

## Verwijderen op macOS

1. Sluit Dream Skin en Codex Desktop af.
2. Sleep de Dream Skin-app van de map "Toepassingen" naar de prullenbak.
3. Verwijder het resterende configuratiebestand (indien aanwezig): `~/Library/Application Support/Codex-Dream-Skin/` (of de exacte mapnaam van je installatie).
4. Leeg de prullenbak.

## Verwijderen op Windows

1. Sluit Dream Skin en Codex Desktop af.
2. Verwijder via **Instellingen → Apps → Geïnstalleerde apps** (of het Control Panel "Programma's toevoegen of verwijderen").
3. Verwijder het resterende gegevensmap indien aanwezig: `%APPDATA%\Codex-Dream-Skin` (of waar je installatie de voorinstellingen heeft geschreven).
4. Als je van broncode of via een pakketbeheerder hebt geïnstalleerd, voer het overeenkomstige verwijderingscommando uit.

## Controleer of er niets achterblijft

Na het verwijderen, controleer:

- Codex toont het **standaardthema** (het zou moeten zijn, als je eerst het actieve thema hebt gereset).
- Er loopt geen Dream Skin-proces (controleer Activity Monitor / Takenbeheer).
- Er is geen tweede engine die nu probeert het toepassers te zijn — als je een andere engine hebt geïnstalleerd, zorg er dan voor dat deze actief is.

## Overwachten naar een andere engine?

De meeste mensen verwijderen Dream Skin om iets anders te gebruiken. Weet je niet welke engine past? De [Dream Skin vs Skin Manager](/blog/codex-dream-skin-vs-skin-manager/) vergelijking legt de twee desktop-opties uit. De twee gangbare paden:

- **Naar een galerij UI:** [Codex Skin Manager handleiding](/blog/codex-skin-manager-guide/)
- **Naar CLI-thematiek:** de [engines vergelijking](/blog/codex-skin-engines-compared/) behandelt CLI-opties zoals Codex Themes CLI en Codepilot

En als je gewoon een ander *huid* wilt in plaats van een ander *engine*, blader door de [huidindex](/skins/) — het wisselen van huiden is altijd sneller dan het wisselen van engines.

## Snelle FAQ

**Zal het verwijderen van Dream Skin mijn aangebrachte huid wissen?**
Als je eerst naar standaard hebt gereset, nee — Codex keert terug naar zijn ingebouwde thema. Aangepaste voorinstellingen die door Dream Skin zijn opgeslagen, worden verwijderd met de app.

**Kan ik het later opnieuw installeren?**
Ja, Dream Skin is gratis en open source; herinstallatie vanaf de officiële repo en je huidpagina's' prompts werken nog steeds.

**Heeft het verwijderen van Dream Skin invloed op andere engines?**
Nee, maar installeer slechts één actief toepassers tegelijk om het laatste-wint-conflict te vermijden.
