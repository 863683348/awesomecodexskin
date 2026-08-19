---
title: "Codex Huidvormen Vergelijking: codedrobe vs codextheme vs tmtheme vs preset"
description: "Vier huidformaten, vier engines, een ecosysteem. Welk formaat is het meest draagbaar, welk is in verval, en hoe converteert u er tussen wanneer u dat nodig heeft."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["formats", "ecosystem", "compatibility"]
category: "compare"
relatedSkins: ["monokai-stone", "solarized", "tokyo-night-ychampion", "vivid-purple-cli"]
lang: "nl"
---

De wereld van Codex-thema's is jong, wat betekent dat de formaten nog steeds stabiliseren. Op dit moment zijn er vier formaten in omloop, en ze zijn niet allemaal compatibel. Het begrijpen ervan bespaart je het downloaden van een bestand dat je engine niet kan lezen.

## De vier formaten

| Formaat | Familie van engines | Ladenmechanisme | Portabiliteit |
|---|---|---|---|
| `.codedrobe-theme` | Codedrobe-stijl gallerijen (codexskins.org) | Bestandsimport | Gemiddeld — enkele engines lezen het |
| `.codextheme` | Bureaubeheerders (Codex Themes desktop) | Bestandsimport | Gemiddeld |
| `tmtheme` | CLI-thema's (bearded, terminal syntaxthema's) | CLI `/theme` | Hoog — hetzelfde als editorthema's |
| `preset` | Prompt engines (Dream Skin) | Natuurlijke taalprompt | Laag — engine-specifieke formulering |

## `.codedrobe-theme` — het galerijstandaard

Gebruikt door gallerijen zoals codexskins.org om klaar gemaakte thema-bestanden te distribueren. Als je "Download .codedrobe-theme" ziet, weet je wat je krijgt. Ondersteund door enkele bureauengines; importeren gebeurt meestal met één klik.

**Goed voor:** het verkrijgen van een opgemaakt, ontwerpergemaakt thema zonder configuratie.
**Let op:** het is niet universeel — controleer of je engine dit exacte bestandstype leest.

## `.codextheme` — het bureaubeheerderformaat

Het formaat dat wordt gebruikt door bureauthemabeheerders (vooral Codex Themes voor desktop). Structuurmatig gelijk aan `.codedrobe-theme`, soms in de praktijk verwisselbaar, maar engines accepteren niet altijd beide.

**Goed voor:** bureaugebruikers met een beheerder geïnstalleerd.
**Let op:** naamoverlapping met `.codedrobe-theme` — de extensies lijken op elkaar, maar zijn niet gegarandeerd compatibel.

## `tmtheme` — het CLI-werkpaard

Terminal-thema-formaat dat naar Codex CLI is geport (de Bearded-ports in deze index zijn het duidelijkste voorbeeld). Dit is hetzelfde formaatfamilie als TextMate/editor syntaxthema's, dus de ecologie is groot — elk tmtheme-gebaseerd kleurenpalet kan via een portscript in Codex CLI terechtkomen.

**Goed voor:** CLI-gebruikers die het grootste mogelijke palet willen.
**Let op:** tmtheme-bestanden definiëren syntaxkleuren, niet altijd de volledige UI-oppervlakte — je kunt extra configuratie nodig hebben voor panelen en chrome.

## `preset` — het promptformaat

Geen bestand eigenlijk: een natuurlijke taalbeschrijving die een promptengine zoals Dream Skin interpreteert. "Een warme ambernachtthema, lage saturatie" is een preset. Het leeft in de opgeslagen presetlijst van de engine.

**Goed voor:** snelheid en iteratie.
**Let op:** geen portabiliteit. Een preset heeft alleen betekenis binnen de engine die die formulering begrijpt.

## Hoe te converteren tussen formaten

- **tmtheme ↔ preset:** niet direct te converteren — één is een specificatie, één is een beschrijving. Herformuleer de beschrijving vanaf het palet.
- **tmtheme → .codextheme:** vaak haalbaar met een klein script, aangezien beide gestructureerde kleurspecificaties zijn. Veel CLI-ports begonnen zo.
- **codedrobe ↔ codextheme:** soms drop-in; test beide extensies als je engine ze accepteert.

Het algemene regel: **gestructureerde formaten (tmtheme, codedrobe, codextheme) zijn meer interoperabel dan prozaformaten (preset).** Als je een themabibliotheek bouwt die jarenlang blijft bestaan, kies dan voor gestructureerde formaten.

## Snelle FAQ

**Welk formaat is het "officiële" Codex-formaat?**
Er is nog geen officiële vorm. Het ecosysteem beslist via gebruik; tmtheme-familie CLI-ports hebben het meeste momentum, presets hebben de meeste gebruikers.

**Zal uiteindelijk één formaat winnen?**
Waarschijnlijk een gestructureerd formaat — dat is hoe editorthema's zich ontwikkelden. Maar prompts verdwijnen niet; ze dienen het "probeer het snel" gebruikscase.

**Wat moet ik downloaden voor maximale compatibiliteit?**
CLI-natuurlijke thema's zoals [Monokai Stone](/skins/monokai-stone/) of [Solarized](/skins/solarized/) die als tmtheme/CLI-specificaties worden geleverd — ze importeren in de breedste set tools. [Tokyo Night](/skins/tokyo-night-ychampion/) en [Vivid Purple (CLI)](/skins/vivid-purple-cli/) zijn ook sterke, breed geporteerde keuzes.

**Hoe weet je welk formaat een thema gebruikt?**
Elke detailpagina van een thema in deze index vermeldt zijn installatieformaat — dat is de teller. Koppel het aan je engine voordat je downloadt.

Formaten zijn hinder, geen functies. Kies gestructureerde formaten voor je permanente bibliotheek, prompts voor exploratie, en laat elke themadetailpagina je vertellen welk formaat je aan het werken bent. Blader door de [thema-index](/skins/), of bekijk de [enginesvergelijking](/blog/codex-skin-engines-compared/) voor het software dat elk formaat leest.
