---
title: "Vergelijking van Codex-skinformaten: codedrobe versus codextheme versus tmtheme versus preset"
description: "Vier skinformaten, vier engines, één ecosysteem. Welk formaat is het meest draagbaar, welk formaat verdwijnt, en hoe converteer je ertussen als dat nodig is."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["formats", "ecosystem", "compatibility"]
category: "compare"
relatedSkins: ["monokai-stone", "solarized", "tokyo-night-ychampion", "vivid-purple-cli"]
lang: "nl"
---

De wereld van Codex-skins is jong, wat betekent dat de formaten nog in ontwikkeling zijn. Op dit moment circuleren vier formaten, en ze zijn niet allemaal onderling compatibel. Een goed begrip van deze formaten bespaart u de moeite om een bestand te downloaden dat uw engine niet kan lezen.

## De vier formaten

| Formaat | Enginefamilie | Laadmechanisme | Draagbaarheid |
|---|---|---|---|
| `.codedrobe-theme` | Galerijen in Codedrobe-stijl (codexskins.org) | Bestandsimport | Gemiddeld — een paar engines ondersteunen dit formaat |
| `.codextheme` | Desktopbeheerders (Codex Themes voor desktop) | Bestandsimport | Gemiddeld |
| `tmtheme` | CLI-themepoorten (bearded, terminal syntax-thema’s) | CLI `/theme` | Hoog — identiek aan editorthema’s |
| `preset` | Promptengines (Dream Skin) | Natuurlijke-taalprompt | Laag — engine-specifieke formulering |

## `.codedrobe-theme` — de galerijstandaard

Gebruikt door galeries zoals codexskins.org om kant-en-klaar gemaakte themabestanden te verspreiden. Als u ‘Download .codedrobe-theme’ ziet staan, dan is dit het bestand dat u ontvangt. Ondersteund door een aantal desktopengines; importeren gebeurt meestal met één klik.

**Handig voor:** het verkrijgen van een afgewerkt, door een ontwerper gemaakt thema zonder enige configuratie.
**Let op:** het is niet universeel — controleer of uw engine deze exacte extensie ondersteunt.

## `.codextheme` — het desktopbeheerderformaat

Het formaat dat wordt gebruikt door desktopthemabeheerders (met name Codex Themes voor desktop). Structureel vergelijkbaar met `.codedrobe-theme`, soms in de praktijk uitwisselbaar, maar engines accepteren beide formaten niet altijd.

**Handig voor:** desktopgebruikers met een geïnstalleerde beheerder.
**Let op:** naamoverlapping met `.codedrobe-theme` — de extensies lijken op elkaar, maar zijn niet gegarandeerd compatibel.

## `tmtheme` — de CLI-werkpaard

Een terminalthemaformaat dat is geporteerd naar Codex CLI (de Bearded-poorten in deze index zijn het duidelijkste voorbeeld). Dit behoort tot dezelfde formaatfamilie als TextMate/editor-syntaxthema’s, waardoor het ecosysteem enorm is — elk tmtheme-gebaseerd palet kan via een portscript in Codex CLI worden geïmporteerd.

**Handig voor:** CLI-gebruikers die toegang willen tot het grootst mogelijke paletaanbod.
**Let op:** tmtheme-bestanden definiëren syntaxkleuren, niet altijd het volledige UI-oppervlak — u hebt mogelijk extra configuratie nodig voor panelen en chrome.

## `preset` — het promptformaat

Geen bestand op zich: een beschrijving in natuurlijke taal die door een promptengine zoals Dream Skin wordt geïnterpreteerd. ‘Een warm amber nachtthema met lage verzadiging’ is een preset. Het bevindt zich in de opgeslagen presetlijst van de engine.

**Handig voor:** snelheid en iteratie.
**Let op:** geen draagbaarheid. Een preset heeft alleen betekenis binnen de engine die die specifieke formulering begrijpt.

## Hoe u tussen formaten kunt converteren

- **tmtheme ↔ preset:** niet direct omzetbaar — het ene is een specificatie, het andere een beschrijving. Herschrijf de beschrijving op basis van het palet.
- **tmtheme → .codextheme:** vaak haalbaar met een klein script, aangezien beide gestructureerde kleurspecificaties zijn. Veel CLI-poorten zijn op deze manier begonnen.
- **codedrobe ↔ codextheme:** soms direct inzetbaar; test beide extensies als uw engine beide accepteert.

De algemene regel: **gestructureerde formaten (tmtheme, codedrobe, codextheme) zijn beter onderling bruikbaar dan prozaformaten (preset).** Als u een skinbibliotheek bouwt die jarenlang blijft bestaan, kiest u best voor gestructureerde formaten.

## Snelle FAQ

**Welk formaat is het ‘officiële’ Codex-formaat?**  
Er is er nog geen. Het ecosysteem bepaalt dit op basis van gebruik; tmtheme-gebaseerde CLI-poorten hebben momenteel de meeste momentum, terwijl promptpresets het grootst aantal gebruikers hebben.

**Zal uiteindelijk één formaat de overhand krijgen?**  
Waarschijnlijk een gestructureerd formaat — zo is het ook gegaan met editorthema’s. Maar prompts verdwijnen niet; zij dienen het gebruiksscenario ‘probeer het snel’.

**Welk formaat moet ik downloaden voor maximale compatibiliteit?**  
CLI-natuurlijke thema’s zoals [Monokai Stone](/skins/monokai-stone/) of [Solarized](/skins/solarized/), die als tmtheme/CLI-specificaties worden geleverd — zij kunnen in het breedste scala aan tools worden geïmporteerd. Ook [Tokyo Night](/skins/tokyo-night-ychampion/) en [Vivid Purple (CLI)](/skins/vivid-purple-cli/) zijn sterke, veelgeporteerde keuzes.

**Hoe weet ik welk formaat een skin gebruikt?**  
Elke skin-detailpagina in deze index vermeldt het installatieformaat — dat is het signaal. Vergelijk het met uw engine voordat u downloadt.

Formaten zijn wrijving, geen functies. Kies gestructureerde formaten voor uw permanente bibliotheek, prompts voor exploratie, en laat elke skin-detailpagina u vertellen met welk formaat u te maken hebt. Blader door de [skinindex](/skins/), of bekijk de [vergelijking van engines](/blog/codex-skin-engines-compared/) om te zien welke software elk formaat ondersteunt.
