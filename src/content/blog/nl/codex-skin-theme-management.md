---
title: "Beheer uw Codex-huidbibliotheek: maak back-ups, verwijder duplicaten en wissel snel"
description: "Skins verzamelen zich snel. Een klein systeem — archiveren, duplicaten verwijderen, bestanden correct benoemen — houdt je Codex-skinbibliotheek netjes en houdt je wisseltijd onder de tien seconden."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["management", "backup", "organization"]
category: "tips"
relatedSkins: ["sakura-pink-dawn", "hatsune-miku", "cyber-neon", "berry-light"]
lang: "nl"
---

Drie maanden nadat ik begon met het verzamelen van Codex-skins was mijn setup een puinhoop: 40 thema’s in één map, drie ervan bijna identiek, en geen idee welke ik daadwerkelijk gebruikte. De wisseltool toonde ze allemaal, dus het kiezen duurde langer dan het daarna gebruiken. Daarna besteedde ik twintig minuten aan het bouwen van een systeem dat het voor goed oplost.

Als u op dit punt bent — of het wilt voorkomen — dan volgt hier het complete systeem. Het is klein: archiveren, verwijderen van duplicaten, en goed benoemen.

## Stap 1: Één map, één bestand per skin

Plaats elk skinbestand in één enkele map, met één bestand per thema. De meeste engines doen dit al standaard. De regel die u later bespaart: **bewerk nooit de gedeelde kopie**. Als u een skin wilt aanpassen, kopieer deze dan eerst naar een submap zoals “persoonlijk” en pas de kopie aan. Op die manier blijft uw bibliotheek schoon en worden uw aanpassingen niet overschreven door updates.

## Stap 2: Geef bestanden een naam alsof het een inventaris is

Een bestand genaamd `theme-final-2.md` is een val. Gebruik een consistente naamgevingsconventie:

```
[familie]-[variantie]-[bron].codextheme
```

Voorbeelden uit deze index, correct benoemd: [Sakura Pink Dawn](/skins/sakura-pink-dawn/), [Hatsune Miku](/skins/hatsune-miku/), [Cyber Neon](/skins/cyber-neon/), [Berry (light)](/skins/berry-light/). Wanneer de bestandsnaam overeenkomt met hoe het thema eruitziet, wordt de map doorzoekbaar — u hoeft geen bestanden meer te openen om te herinneren welk thema welk is.

## Stap 3: Verwijder duplicaten één keer per maand

Mensen verzamelen duplicaten niet bewust; skins worden gekopieerd, opnieuw gedownload of hernoemd. Eenmaal per maand voert u een snelle controle uit:

- Sorteer op bestandsgrootte — bijna identieke groottes met vergelijkbare namen zijn vaak verdacht.
- Open twee kandidaat-bestanden naast elkaar en vergelijk de kleurpalet-hexwaarden.
- Behoud de versie van de oorspronkelijke bron; verwijder of archiveer de kopie.

Tijdens mijn opruimactie vond ik drie “donkerblauwe” thema’s met exact hetzelfde palet onder verschillende namen. Eén bleef over.

## Stap 4: Maak een back-up van de configuratie, niet alleen van de bestanden

Skins zijn gewoon bestanden — maar het *actieve thema* dat u hebt gekozen, staat opgeslagen in uw Codex-configuratie. Maak daarom een back-up van beide:

1. De skins-map (een zip-bestand of een git-repo werkt prima).
2. Het configuratiebestand waarin staat welk thema actief is (het is klein — plak het overal waar u wilt).

Als u van machine wisselt, herstelt u beide en bent u precies waar u gebleven was. Dit is het verschil tussen “Ik heb mijn setup kwijt” en “tien minuten om alles te herstellen”.

## Stap 5: Houd een korte wissellijst bij

Uw dagelijkse realiteit is 3–5 skins, niet 40. Kies ze op basis van uw stemming:

- [Sakura Pink Dawn](/skins/sakura-pink-dawn/) — pastel, zacht, voor creatieve sessies.
- [Hatsune Miku](/skins/hatsune-miku/) — helder, energiek, als u een vonk nodig hebt.
- [Cyber Neon](/skins/cyber-neon/) — luid, voor demo’s en late-nachtfocus.
- [Berry (light)](/skins/berry-light/) — de rustige daglichtstandaard.

Alles wat daarbuiten valt, leeft in het archief. Minder keuzes = snellere wisseling — en dat is immers het hele doel van een themasysteem.

## Snelle FAQ

**Waar slaat Codex mijn skins en configuratie op?**  
Dat hangt af van uw engine en besturingssysteem, maar meestal in de gebruikersconfiguratiemap (bijv. `~/.config/codex` of `~/Library/Application Support/Codex`). Raadpleeg de documentatie van uw engine — en maak een back-up van die map, niet alleen van individuele bestanden.

**Moet ik mijn skins in git opnemen?**  
Ja, als u al met git werkt. Een privé-repo met de skins-map én de configuratie is de goedkoopste en perfecte back-up. Push na elke inhoudelijke wijziging.

**Kan ik te veel skins hebben?**  
Alleen als ze uw werk vertragen of de opstarttijd verlengen — zie onze [prestatietips](/blog/codex-skin-performance/). Wat betreft opslagruimte is 40 skins niets. Wat betreft keuze: uw wissellijst moet kort blijven.

Een uur opruimen nu bespaart u later op zoek te moeten gaan naar “welk thema gebruikte ik ook alweer?”. Archiveer de oude skins, behoud uw favorieten — zoals [Sakura Pink Dawn](/skins/sakura-pink-dawn/) en [Cyber Neon](/skins/cyber-neon/) — en maak een back-up van zowel de bestanden als de configuratie. Blader door de [volledige index](/skins/) om uw korte lijst samen te stellen, of bekijk de [installatiehandleiding](/blog/how-to-install-codex-skins/) als u net begint.
