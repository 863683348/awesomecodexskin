---
title: "Codex Skin-Formate im Vergleich: codedrobe vs codextheme vs tmtheme vs preset"
description: "Vier Skin-Formate, vier Engines, ein Ökosystem. Welches Format ist am portabelsten, welches veraltet, und wie man sie konvertiert, wenn es nötig ist."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["formats", "ecosystem", "compatibility"]
category: "compare"
relatedSkins: ["monokai-stone", "solarized", "tokyo-night-ychampion", "vivid-purple-cli"]
lang: "de"
---

Die Welt der Codex-Skins ist jung, was bedeutet, dass die Formate noch nicht vollständig festgelegt sind. Derzeit gibt es vier Formate, die im Umlauf sind, und sie sind nicht alle kompatibel. Das Verständnis dieser Formate spart Ihnen das Herunterladen einer Datei, die Ihr Engine nicht lesen kann.

## Die vier Formate

| Format | Engine-Familie | Lade-Mechanismus | Portabilität |
|---|---|---|---|
| `.codedrobe-theme` | Codedrobe-style-Galerien (codexskins.org) | Datei-Import | Mittel — einige Engines lesen es |
| `.codextheme` | Desktop-Manager (Codex Themes desktop) | Datei-Import | Mittel |
| `tmtheme` | CLI-Themen-Ports (bearded, Terminal-Syntaxthemen) | CLI `/theme` | Hoch — gleich wie bei Editor-Themen |
| `preset` | Prompt-Engines (Dream Skin) | Natürlichsprachiger Prompt | Niedrig — engine-spezifische Formulierung |

## `.codedrobe-theme` — das Galerie-Standardformat

Wird von Galerien wie codexskins.org verwendet, um fertige Theme-Dateien zu verteilen. Wenn Sie "Download .codedrobe-theme" sehen, erhalten Sie genau dieses Format. Es wird von einigen Desktop-Engines unterstützt; der Import erfolgt meist mit einem Klick.

**Gut für:** das Erhalten eines polierten, von Designern erstellten Themes ohne Konfiguration.
**Achtung:** Es ist nicht universell — prüfen Sie, ob Ihre Engine diese Endung liest.

## `.codextheme` — das Desktop-Manager-Format

Das Format, das von Desktop-Theme-Manager (insbesondere Codex Themes für Desktop) verwendet wird. Strukturell ähnlich zu `.codedrobe-theme`, manchmal in der Praxis austauschbar, aber Engines akzeptieren nicht immer beide.

**Gut für:** Desktop-Nutzer mit installiertem Manager.
**Achtung:** Namensüberlappung mit `.codedrobe-theme` — die Endungen sehen ähnlich aus, aber sind nicht garantiert kompatibel.

## `tmtheme` — das CLI-Werkzeug

Terminal-Themen-Format, portiert in Codex CLI (die Bearded-Ports in diesem Index sind das klarste Beispiel). Dieses Format ist dieselbe Familienart wie TextMate/Editor-Syntaxthemen, daher ist das Ökosystem groß — jedes tmtheme-basierte Farbschema kann mit einem Port-Script in Codex CLI eingebunden werden.

**Gut für:** CLI-Nutzer, die den größten möglichen Farbpalette-Pool benötigen.
**Achtung:** tmtheme-Dateien definieren Syntax-Farben, nicht immer die gesamte UI-Oberfläche — Sie können zusätzliche Konfiguration für Panels und Chrome benötigen.

## `preset` — das Prompt-Format

Keine Datei überhaupt: eine natürlichsprachige Beschreibung, die eine Prompt-Engine wie Dream Skin interpretiert. „Ein warmes Amber-Nacht-Theme, geringe Sättigung“ ist ein preset. Es lebt in der gespeicherten Preset-Liste der Engine.

**Gut für:** Geschwindigkeit und Iteration.
**Achtung:** Keine Portabilität. Ein preset hat nur Bedeutung innerhalb der Engine, die diese Formulierung versteht.

## Wie man zwischen Formaten konvertiert

- **tmtheme ↔ preset:** nicht direkt konvertierbar — eines ist eine Spezifikation, das andere eine Beschreibung. Schreiben Sie die Beschreibung neu aus der Palette.
- **tmtheme → .codextheme:** oft mit einem kleinen Skript möglich, da beide strukturierte Farbspezifikationen sind. Viele CLI-Ports begannen auf diese Weise.
- **codedrobe ↔ codextheme:** manchmal einsetzbar; testen Sie beide Endungen, wenn Ihre Engine beide akzeptiert.

Die allgemeine Regel: **Strukturierte Formate (tmtheme, codedrobe, codextheme) sind interoperabler als Prose-Formate (preset).** Wenn Sie eine Skin-Bibliothek bauen, die Sie über Jahre verwenden möchten, bevorzugen Sie strukturierte Formate.

## Kurzfassung FAQ

**Welches Format ist das „offizielle“ Codex-Format?**
Es gibt noch keines. Das Ökosystem entscheidet sich durch Nutzung; tmtheme-familienbasierte CLI-Ports haben den größten Schwung, Prompt-Presets haben die meisten Nutzer.

**Wird eines der Formate letztendlich gewinnen?**
Wahrscheinlich ein strukturiertes — so haben sich Editor-Themen entwickelt. Aber Prompts verschwinden nicht; sie dienen dem „schnellen Ausprobieren“-Anwendungsfall.

**Was sollte ich für maximale Kompatibilität herunterladen?**
CLI-natürliche Themen wie [Monokai Stone](/skins/monokai-stone/) oder [Solarized](/skins/solarized/), die als tmtheme/CLI-Spezifikationen geliefert werden — sie importieren sich in die breiteste Menge an Tools. [Tokyo Night](/skins/tokyo-night-ychampion/) und [Vivid Purple (CLI)](/skins/vivid-purple-cli/) sind ebenfalls starke, weit portierte Optionen.

**Wie erkennen Sie, welches Format ein Skin verwendet?**
Jede Detailseite eines Skins in diesem Index listet sein Installationsformat auf — das ist der Hinweis. Passen Sie es vor dem Herunterladen Ihrem Engine an.

Formate sind Reibung, keine Funktionen. Wählen Sie strukturierte Formate für Ihre permanente Bibliothek, Prompts für Exploration und lassen Sie jede Skin-Detailseite Ihnen sagen, welches Sie gerade verwenden. Durchstöbern Sie den [Skin-Index](/skins/), oder schauen Sie sich die [Engines-Vergleich](/blog/codex-skin-engines-compared/) an, um die Software zu finden, die jedes Format liest.
