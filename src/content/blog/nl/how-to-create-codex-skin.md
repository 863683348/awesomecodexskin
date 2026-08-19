---
title: "Hoe maak je je eigen Codex-skin (beginnersgids)"
description: "Leer hoe u een aangepaste Codex-skin maakt: kies een engine, selecteer kleuren, schrijf een themavoorinstelling en test deze live. Een praktische stap-voor-staphandleiding voor beginners, zonder programmeerkennis vereist."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["create", "custom", "beginner", "theme"]
category: "guide"
relatedSkins: ["clear-glass", "sakura-pink-dawn", "amber-dusk"]
lang: "nl"
---

Het maken van je eigen Codex-skin is verrassend toegankelijk. De meeste engines accepteren een thema dat is gedefinieerd door een klein aantal kleuren — achtergrond, oppervlak, tekst, accent — uitgedrukt als een prompt of een JSON-bestand. Je hoeft de Codex-app zelf niet aan te passen.

## Stap 1: Kies een engine

Het formaat van je thema hangt af van de engine die je gebruikt:

- **Codex Dream Skin** — thema’s zijn vooraf ingestelde presets of agentprompts. Het makkelijkst om mee te beginnen: beschrijf de kleurenpalet in één zin.
- **Codex Skin Manager** — bevat een themamaker met een visuele kleurkiezer.
- **ReTheme** — ondertekende, bijwerkbaar thema’s; geschikt als je je thema openbaar wilt delen.
- **Codex Themes (desktop)** — `.codextheme`-bestanden met een themamaker op theme.codexguide.ai.

In deze handleiding gebruiken we de promptaanpak (werkt met Dream Skin).

## Stap 2: Kies je kleurenpalet

Een skin bestaat meestal uit 4–6 kleuren:

| Rol | Voorbeeld (licht) | Voorbeeld (donker) |
|---|---|---|
| Achtergrond | `#F5F7FA` | `#0A0A0B` |
| Oppervlak (panelen) | `#FFFFFF` | `#16161A` |
| Tekst | `#1A1B26` | `#E4E4E7` |
| Accent | `#2DD4BF` | `#2DD4BF` |

Houd je aan één accentkleur. Te veel accentkleuren is de nummer 1 fout van beginners.

## Stap 3: Schrijf het thema als een prompt

Een Dream Skin-preset is gewoon een beschrijvende zin:

```text
Codex, pas een aangepast thema toe — een warm amberachtig schemerpalet met donkergrijze koolstofachtige oppervlakken,
zachte amberaccenten en lichtcrème tekst. Rustig, gezellig, ontworpen voor lange leessessies.
```

Sla het op als een preset in de engine en test het. Pas de woordkeuze aan totdat het resultaat overeenkomt met je bedoeling.

## Stap 4: Test op echte inhoud

Open een druk scherm (lang coderegel, veel panelen) voordat je een definitieve keuze maakt. Donkere thema’s zien er vaak geweldig uit op screenshots, maar falen in de praktijk wanneer het contrast tussen panelen te laag is. Controleer:

- Leesbaarheid in de code-editor
- Duidelijke scheiding tussen zijbalk / panelen
- Zichtbaarheid van accentkleuren op knoppen versus links

## Stap 5: Deel het

Engines zoals ReTheme en Codex Skin Manager laten je thema’s exporteren. Je kunt je skin indienen bij deze index via de pagina [Een skin indienen](/submit/) — voeg een previewafbeelding en een installatieprompt toe, zodat anderen je skin met één klik kunnen gebruiken.

## Klaarstaande startpunten

Leen ideeën van bewezen paletten:

- [Clear Glass](/skins/clear-glass/) — glazig licht oppervlak.
- [Sakura Pink Dawn](/skins/sakura-pink-dawn/) — zachte pastelkleuren.
- [Amber Dusk](/skins/amber-dusk/) — warm amber programma-gebaseerd preset.

Of blader door de [volledige index](/skins/) voor meer inspiratie. En als je vastloopt bij de installatiestappen, behandelt de [installatiehandleiding](/blog/how-to-install-codex-skins/) elke methode.
