---
title: "Codex-Skin-Formate im Vergleich: codedrobe vs. codextheme vs. tmtheme vs. preset"
description: "Vier Skin-Formate, vier Engines, ein Ökosystem. Welches Format ist am portabelsten, welches ist veraltet, und wie konvertiert man zwischen ihnen, wenn es nötig ist?"
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["formats", "ecosystem", "compatibility"]
category: "compare"
relatedSkins: ["monokai-stone", "solarized", "tokyo-night-ychampion", "vivid-purple-cli"]
lang: "de"
---

Die Welt der Codex-Skins ist jung, was bedeutet, dass sich die Formate noch nicht endgültig etabliert haben. Derzeit kursieren vier verschiedene Formate, die jedoch nicht alle miteinander kompatibel sind. Ein Verständnis dieser Formate erspart Ihnen das Herunterladen einer Datei, die Ihr Skin-Engine nicht lesen kann.

## Die vier Formate

| Format | Engine-Familie | Lade-Mechanismus | Portabilität |
|---|---|---|---|
| `.codedrobe-theme` | Galerien im Codedrobe-Stil (codexskins.org) | Datei-Import | Mittel — einige Engines unterstützen es |
| `.codextheme` | Desktop-Manager (Codex Themes für Desktop) | Datei-Import | Mittel |
| `tmtheme` | CLI-Themen-Ports (bearded, Terminal-Syntax-Themes) | CLI `/theme` | Hoch — identisch mit Editor-Themen |
| `preset` | Prompt-Engines (Dream Skin) | Natürlichsprachlicher Prompt | Niedrig — engine-spezifische Formulierung erforderlich |

## `.codedrobe-theme` — der Galerie-Standard

Wird von Galerien wie codexskins.org verwendet, um fertige Theme-Dateien zu verteilen. Wenn Sie „Download .codedrobe-theme“ sehen, erhalten Sie genau dieses Format. Wird von einigen Desktop-Engines unterstützt; der Import erfolgt meist per Mausklick.

**Gut geeignet für:** ein professionell gestaltetes, vom Designer erstelltes Theme ohne jegliche Konfiguration.  
**Achtung:** Es ist nicht universell einsetzbar – prüfen Sie vorab, ob Ihre Engine diese genaue Dateierweiterung unterstützt.

## `.codextheme` — das Desktop-Manager-Format

Das Format, das von Desktop-Theme-Managern verwendet wird (insbesondere von Codex Themes für Desktop). Strukturell ähnlich wie `.codedrobe-theme`, in der Praxis manchmal austauschbar, doch akzeptieren Engines beide Formate nicht immer.

**Gut geeignet für:** Desktop-Nutzer mit installiertem Manager.  
**Achtung:** Namensüberschneidung mit `.codedrobe-theme` – die Erweiterungen sehen sich ähnlich, sind aber nicht zwangsläufig kompatibel.

## `tmtheme` — der CLI-Arbeitspferd

Terminal-Theme-Format, das in die Codex CLI portiert wurde (die Bearded-Ports in diesem Index sind das deutlichste Beispiel). Dieses Format gehört derselben Familie an wie TextMate-/Editor-Syntax-Themes – das Ökosystem ist daher sehr groß: Jede tmtheme-basierte Farbpalette lässt sich mit einem Port-Skript in die Codex CLI übernehmen.

**Gut geeignet für:** CLI-Nutzer, die Zugriff auf den größtmöglichen Pool an Farbpaletten wünschen.  
**Achtung:** tmtheme-Dateien definieren Syntax-Farben, nicht notwendigerweise die gesamte UI-Oberfläche – für Panels und Chrome benötigen Sie möglicherweise zusätzliche Konfiguration.

## `preset` — das Prompt-Format

Kein Dateiformat im eigentlichen Sinne: eine natürlichsprachliche Beschreibung, die von einer Prompt-Engine wie Dream Skin interpretiert wird. „Ein warmes Bernstein-Nacht-Theme mit geringer Sättigung“ ist ein Preset. Es wird in der internen Liste gespeicherter Presets der Engine verwaltet.

**Gut geeignet für:** Schnelligkeit und iterative Anpassung.  
**Achtung:** Keine Portabilität – ein Preset hat nur innerhalb derjenigen Engine eine Bedeutung, die diese Formulierung versteht.

## Wie Sie zwischen den Formaten konvertieren

- **tmtheme ↔ preset:** Nicht direkt konvertierbar – eines ist eine Spezifikation, das andere eine Beschreibung. Schreiben Sie die Beschreibung neu, ausgehend von der Farbpalette.  
- **tmtheme → .codextheme:** Oft machbar mit einem kleinen Skript, da beide strukturierte Farbspezifikationen darstellen. Viele CLI-Ports entstanden ursprünglich auf diese Weise.  
- **codedrobe ↔ codextheme:** Manchmal direkt austauschbar; testen Sie beide Erweiterungen, falls Ihre Engine beide akzeptiert.

Allgemeine Regel: **Strukturierte Formate (tmtheme, codedrobe, codextheme) sind interoperabler als prozessuale Formate (preset).** Falls Sie eine Skin-Bibliothek aufbauen, die Sie langfristig nutzen möchten, bevorzugen Sie strukturierte Formate.

## Schnelle FAQ

**Welches Format ist das „offizielle“ Codex-Format?**  
Es gibt noch keins. Das Ökosystem entscheidet sich durch Nutzung – tmtheme-basierte CLI-Ports haben derzeit die meiste Dynamik, Prompt-Presets die meisten Nutzer.

**Wird sich langfristig ein Format durchsetzen?**  
Wahrscheinlich ein strukturiertes Format – so wie sich auch Editor-Themes konsolidiert haben. Prompt-basierte Lösungen bleiben jedoch erhalten, da sie den Anwendungsfall „schnell ausprobieren“ bedienen.

**Welches Format sollte ich für maximale Kompatibilität herunterladen?**  
CLI-native Themes wie [Monokai Stone](/skins/monokai-stone/) oder [Solarized](/skins/solarized/), die als tmtheme/CLI-Spezifikationen ausgeliefert werden – sie lassen sich in die breiteste Palette an Tools importieren. Auch [Tokyo Night](/skins/tokyo-night-ychampion/) und [Vivid Purple (CLI)](/skins/vivid-purple-cli/) sind stark portierte und weit verbreitete Optionen.

**Wie erkenne ich, welches Format ein Skin verwendet?**  
Jede Skin-Detailseite in diesem Index listet das Installationsformat explizit auf – das ist der entscheidende Hinweis. Vergleichen Sie es vor dem Download mit der Kompatibilität Ihrer Engine.

Formate sind Reibungsverluste, keine Features. Wählen Sie strukturierte Formate für Ihre dauerhafte Bibliothek, Prompts für die Erkundung – und lassen Sie sich von jeder Skin-Detailseite sagen, mit welchem Format Sie es gerade zu tun haben. Durchsuchen Sie den [Skin-Index](/skins/), oder werfen Sie einen Blick auf den [Vergleich der Skin-Engines](/blog/codex-skin-engines-compared/), um zu erfahren, welche Software jedes Format liest.
