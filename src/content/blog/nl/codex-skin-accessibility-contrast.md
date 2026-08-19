---
title: "Hoog-contrast Codex-thema's: Toegankelijkheid die er echt goed uitziet"
description: "Hoge contrast is niet vervelend grijs op zwart. Goede toegankelijke Codex-thema's voldoen aan WCAG-contrastverhoudingen terwijl ze hun karakter behouden — zo kiest en controleert u ze."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["accessibility", "contrast", "wcag"]
category: "tips"
relatedSkins: ["monokai-stone-cli", "vivid-purple", "forest-mist", "blue-enchantress"]
lang: "nl"
---

"Zichtbaar" klinkt als een afwaardering. Grijze tekst op donker, grote letters, geen persoonlijkheid. Het hoeft niet zo te zijn — sommige van de meest indrukwekkende Codex-thema's in deze index voldoen ook aan de WCAG-contrastcriteria. Het geheim is te weten wat je moet zoeken, en een paar thema's hier tonen dat aan.

## Het getal dat echt belangrijk is: 4,5:1

WCAG AA voor normale tekst vereist een contrastverhouding van minstens **4,5:1** tussen tekst en achtergrond. Grote tekst (18px of groter of 14px vet) heeft slechts 3:1 nodig. Code — uw hoofdinhoud — is normale tekst, dus 4,5:1 is het doel.

U hoeft geen ontwerper te zijn om dit te controleren. Voeg elke voorgrond- en achtergrond-hexcode van een thema in een willekeurige contrastchecker, en u krijgt het verhouding binnen seconden. Als uw tekscolor onder 4,5:1 zit op zijn achtergrond, is dat het hele probleem — corrigeer die ene combinatie en u bent al 90% op weg.

## Wat maakt een zichtbaar thema er goed uit

Hoge contrast faalt alleen wanneer het overal hoog is. Goede thema's houden een duidelijke hiërarchie:

- **Code-tekst op achtergrond: ≥ 4,5:1.** Onbetwistbaar.
- **Verdunde UI-chrome:** commentaren, regelnummers, paneellabels kunnen lager zitten (3:1+), zodat het oog niet meteen schreeuwt tegen alles tegelijk.
- **Eén sterke accent** voor cursor/selectie, gehouden boven 3:1 ten opzichte van zijn buren.

[Monokai Stone (CLI)](/skins/monokai-stone-cli/) doet dit goed — de syntaxkleuren blijven helder genoeg om te lezen terwijl het UI-rammement stil blijft. [Forest Mist](/skins/forest-mist/) toont een zichtbare kleurenpalet dat niet hoefde te zijn high-contrast-erg; de gedempte groenen voldoen nog steeds aan de eis.

## Kleurenblindheid: de extra controle

Contrastverhouding dekt alleen helderheid. Als u kleurenblind bent — ongeveer 8% van mannen — verdwijnen rode/groene onderscheidingen. Dus:

- **Vertrouw niet alleen op kleur** om statussen te onderscheiden (bijvoorbeeld alleen een rode/groene punt voor fouten). Combineer het met een pictogram of een woord.
- **Kies blauw/oranje accenten** in plaats van rode/groene paren waar mogelijk. [Blue Enchantress](/skins/blue-enchantress/) en [Vivid Purple](/skins/vivid-purple/) zijn beide veilige keuzes op die as.

Als u uw instelling delen of screenshots publiceren, tellen deze controles ook voor uw lezers, niet alleen voor u.

## Hoe een thema in 30 seconden te controleren

1. Open de detailpagina van het thema — de kleurencodes staan daar vermeld.
2. Haal de achtergrond- en voorgrondcodes op.
3. Voer ze door een contrastchecker (elke gratis versie werkt).
4. Tekst onder 4,5:1 → aanpassen of een ander thema kiezen uit deze index.

## Snelle FAQ

**Is donkere modus slechter voor zichtbaarheid?**
Niet per se. De contrastverhouding is wat belangrijk is, niet de helderheid van de achtergrond. Sommige mensen met astigmatisme prefereren lichte modus; anderen niet. Kies op basis van uw ogen, en controleer dan de verhouding.

**Kan ik de kleuren van een thema aanpassen om het contrast te verbeteren?**
Ja, als u comfortabel bent met het bewerken van het themabestand. Verhoog de helderheid van de voorgrond of verdonker de achtergrond tot de combinatie 4,5:1 bereikt, en sla het op als uw eigen variant.

**Lijken zichtbare thema's "saai"?**
Alleen als de kleurenpalet plat is. De thema's in deze index met sterke accenten — [Vivid Purple](/skins/vivid-purple/), [Blue Enchantress](/skins/blue-enchantress/) — zijn luid en zichtbaar tegelijk. Contrast en persoonlijkheid zijn geen tegenstellingen.

Zichtbaarheid is een checklist, geen esthetiek. Controleer de 4,5:1-verhouding op welk thema u ook leuk vindt, corrigeer de ene combinatie die faalt, en houd de look. Begin bij [Monokai Stone](/skins/monokai-stone-cli/) als u een bekend goed uitgangspunt wilt, of blader door de [volledige index](/skins/) — de [gids voor het maken van een thema](/blog/how-to-create-codex-skin/) laat ook zien waar u de hexcodes kunt bewerken.
