---
title: "Hoe te installeren Codex skins (Desktop & CLI): Het volledige gids"
description: "Stap-voor-stap gids voor het installeren van Codex Desktop en CLI skins — kopieer-plak prompts, thema engines zoals Dream Skin, CLI thema's en hoe te wisselen of verwijderen. Ondersteunt macOS en Windows."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["install", "guide", "desktop", "cli", "themes"]
category: "guide"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
lang: "nl"
---

Codex skins laten je OpenAI Codex Desktop en Codex CLI opnieuw opmaken zodat het werkplekje past bij jouw smaak — een donker laaglichtkleurenpalet voor nachtsessies, een pasteloppervlak voor de dag, of een neonlook gewoon om te spelen.

Deze gids behandelt elke manier om een Codex-skin te installeren, van de eenvoudige installatieprompt tot themamanagers via de CLI.

## Het korte verhaal

De meeste skins op deze index installeren op dezelfde manier:

1. Kies een skin en open de detailpagina.
2. Kopieer de installatieprompt (of download het themabestand, voor `.codedrobe-theme`-skins).
3. Plak de prompt in Codex Desktop of voer de commando uit in Codex CLI.
4. Het themamotor past het kleurenpalet direct aan — geen herstart nodig op de meeste engines.

Dat is het. Skins zijn configuratie, geen code, dus het wisselen is snel en omkeerbaar.

## Methode 1: Kopieer-plak installatieprompt (snellste)

De meeste Codex-skins — vooral engine-presetten van [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin), de open-source injectiemotor — installeren vanuit een enkele natuurlijke taalprompt.

Op de detailpagina van elke skin bevat het **Installatieprompt**-vak een klaar te plakken instructie zoals:

```text
Codex, toepassen van het 'Clear Glass'-lichtthema — een scherp glazen laagverstoringsoppervlak voor mijn werkplek.
```

Kopieer het, open Codex en plak het. De motor leest de prompt en past het kleurenpalet, randen en accentkleuren aan die zijn gedefinieerd in het thema.

> **Tip:** als de prompt een preset toepast, slaat de engine deze op zodat je later met één klik terug kunt gaan naar de standaardinstelling.

## Methode 2: Download een themabestand (.codedrobe-theme)

Sommige skins worden geleverd als een downloadbaar `.codedrobe-theme`-bestand. Voor deze:

1. Klik op **Download .codedrobe-theme** op de skinpagina.
2. Sla het bestand op waar het maar handig is.
3. Open het bestand vanuit Codex Desktop — ondersteunde engines importeren het thema automatisch.

Deze methode is gebruikelijk op galerijen zoals codexskins.org die klaar gemaakte themabestanden hosten.

## Methode 3: Installeer een CLI-thema met een commando

Codex CLI-thema's gebruiken een ander installatiepad. Skins met het `tmtheme`-installatieformaat (bijvoorbeeld de Bearded Theme Ports) installeren met één commando:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# vervolgens in Codex CLI uitvoeren:
/theme Tokyo Night
```

Tools zoals [Codex Themes CLI](https://github.com/ychampion/codex-themes) en [Codepilot](https://github.com/charzhu/codepilot) beheren CLI-thema's voor je — valideren, vooraf tonen, toepassen, terugdraaien en exporteren van overeenkomstige terminalkleurenpalen.

## Welke engines ondersteunen skins?

| Engine | Platforms | Installatie-stijl |
|---|---|---|
| Codex Dream Skin | macOS, Windows | Agent-prompt / preset |
| Codex Skin Manager | macOS, Windows | Ingebouwde manager |
| Codex Themes (desktop) | macOS | .codextheme import |
| ReTheme | macOS, Windows | Opgesegmenteerde gemeenschaps-thema's |
| Codex Themes CLI | Cross-platform | CLI `/theme` |
| Codepilot | Cross-platform (npm) | Ingebouwde TUI `/skin` |

## Hoe een skin wisselen of terugzetten

- **Preset-engines (Dream Skin etc.):** de engine bewaart de standaardpreset — meestal is er een "standaard herstellen"-knop om je oorspronkelijke uiterlijk terug te krijgen.
- **CLI:** `/theme` geeft een lijst van geïnstalleerde thema's; voer het commando opnieuw uit met een ander naam om te wisselen.
- **Thema-bestanden:** herimporteer een vorig `.codedrobe-theme` of voer opnieuw het standaardcommando van de engine uit.

## Populaire skins om mee te beginnen

- [Gothic Void Expedition](/skins/gothic-void-expedition/) — de ingebouwde donkere standaard van de engine.
- [Clear Glass](/skins/clear-glass/) — een glazen lichtoppervlak voor de dag.
- [Monokai Stone](/skins/monokai-stone/) — het klassieke CLI-kleurenpalet.
- [Hatsune Miku](/skins/hatsune-miku/) — blauwgroene vocaloid-energie.

Blader door de [volledige index](/skins/) voor meer dan 100 andere, of lees onze [tutorial](/tutorial/) voor details over engine-instellingen.
