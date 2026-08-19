---
title: "Codex CLI-thema’s: hoe u /theme en terminalskins gebruikt"
description: "Alles over Codex CLI-thema’s: installeren van syntactische thema’s zoals Tokyo Night, Monokai Stone en Solarized, gebruik van de `/theme`-opdracht en beheren van paletten met CLI-hulpmiddelen."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "nl"
---

Codex CLI maakt geen gebruik van hetzelfde skin-systeem als Codex Desktop. In plaats van visuele interface-elementen wijzigen CLI-thema’s de **kleurenpaletten van de terminal** — achtergrond-, voorgrond- en syntaxis-kleuren — zodat uw prompt en uitvoer leesbaar blijven in de terminal.

## De `/theme`-opdracht

De snelste manier om een CLI-thema te gebruiken, is de ingebouwde `/theme`-opdracht:

```bash
# in Codex CLI:
/theme
```

Dit toont een lijst van geïnstalleerde thema’s. Kies er één om het direct toe te passen.

## Een syntaxis-thema installeren

Syntaxis-thema’s (zoals Monokai Stone, Tokyo Night en Solarized) worden geïnstalleerd via een script dat het kleurenpalet naar de themamap van Codex CLI overbrengt:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# vervolgens:
/theme Tokyo Night
```

De Bearded Theme Ports-repository bevat meer dan 50 Bearded-varianten — waaronder Solarized, Tokyo Night, Monokai Stone en nog veel meer.

## Thema’s beheren met CLI-hulpmiddelen

Twee hulpmiddelen maken het beheren van CLI-thema’s eenvoudig:

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go-gebaseerde CLI: valideer, bekijk een voorbeeld van, pas toe, herstel of exporteer overeenkomende terminalpaletten. Ideaal als u wilt dat uw terminal en Codex CLI hetzelfde palet delen.
- **Codepilot** (`charzhu/codepilot`) — een Codex CLI-distributie met ingebouwde TUI-persoonlijking:

```bash
npm i -g @charzhu/codepilot
# voer vervolgens /skin uit binnen de TUI om een ingebouwd thema te kiezen
```

Codepilot wordt geleverd met 16 ingebouwde TUI-skins (achtergrond- + oppervlaktekleuren).

## Populaire CLI-thema’s in de index

| Skin | Stijl | Installatie |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Klassiek syntaxispalet | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Iconisch retro-palet | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Donkerblauw Tokyo Night | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Warm-donkere terminalidentiteit | `codex-theme apply amber-nocturne` |

## Problemen oplossen

- **`/theme` meldt ‘geen thema’s geïnstalleerd’** — voer eerst het installatiescript uit en open de prompt daarna opnieuw.
- **Het palet ziet er verkeerd uit** — start Codex CLI opnieuw nadat u het thema hebt toegepast; sommige portingen cachen kleuren bij het opstarten.
- **U wilt dat uw terminal overeenkomt** — gebruik de exportfunctie van Codex Themes CLI om hetzelfde palet naar uw terminalprofiel te schrijven.

Bekijk alle [Mono & Terminal-skins](/skins/category/mono-terminal/) of begin met de [installatiehandleiding](/blog/how-to-install-codex-skins/).
