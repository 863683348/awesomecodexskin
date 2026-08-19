---
title: "Wie man Codex-Skins installiert (Desktop & CLI): Der vollständige Leitfaden"
description: "Schritt-für-Schritt-Anleitung zur Installation von Codex Desktop- und CLI-Skins – Kopieren-Einfügen-Anweisungen, Theme-Engines wie Dream Skin, CLI-Themen und wie man wechselt oder deinstalliert. Deckt macOS und Windows ab."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["install", "guide", "desktop", "cli", "themes"]
category: "guide"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
lang: "de"
---

Codex-Skins ermöglichen es Ihnen, OpenAI Codex Desktop und Codex CLI neu zu gestalten, sodass der Arbeitsbereich Ihrem Geschmack entspricht – eine dunkle, niedrige Lichtpalette für Nachtsitzungen, eine pastellige Oberfläche für den Tag oder ein neonfarbener Look einfach zum Spaß.

Dieser Leitfaden behandelt alle Möglichkeiten, ein Codex-Skin zu installieren, von der Einfachinstallation bis hin zu CLI-Themen-Manager.

## Die kurze Version

Die meisten Skins auf dieser Indexseite werden auf die gleiche Weise installiert:

1. Wählen Sie ein Skin aus und öffnen Sie dessen Detailseite.
2. Kopieren Sie den Installationsprompt (oder laden Sie die Theme-Datei herunter, bei .codedrobe-theme-Skins).
3. Fügen Sie den Prompt in Codex Desktop ein oder führen Sie den Befehl in Codex CLI aus.
4. Das Thema wird sofort angewandt – kein Neustart ist auf den meisten Engines notwendig.

Das ist es. Skins sind Konfiguration, keine Code, daher ist das Wechseln schnell und umkehrbar.

## Methode 1: Kopieren-Einfügen-Installationsprompt (am schnellsten)

Die meisten Codex-Skins – insbesondere Engine-Voreinstellungen von [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin), dem Open-Source-Injektionsmotor – werden über einen einzelnen natürlichsprachlichen Prompt installiert.

Auf der Detailseite eines jeden Skins enthält der **Installationsprompt** ein bereit zum Einfügen Anweisung wie:

```text
Codex, wende das 'Clear Glass' Lichtthema an – eine saubere, gläserne, niedrig-störende Oberfläche für meinen Arbeitsbereich.
```

Kopieren Sie es, öffnen Sie Codex und fügen Sie es ein. Der Motor liest den Prompt und wendet die im Thema definierte Palette, Ränder und Akzentfarben an.

> **Tipp:** Wenn der Prompt eine Voreinstellung anwendet, speichert der Motor sie, sodass Sie später mit einem Klick auf die Standardvorgabe zurückkehren können.

## Methode 2: Herunterladen einer Theme-Datei (.codedrobe-theme)

Einige Skins werden als herunterladbare .codedrobe-theme-Datei geliefert. Für diese:

1. Klicken Sie auf **Download .codedrobe-theme** auf der Skin-Seite.
2. Speichern Sie die Datei an einem beliebigen Ort.
3. Öffnen Sie sie aus Codex Desktop – unterstützte Engines importieren das Thema automatisch.

Diese Methode ist üblich auf Galerien wie codexskins.org, die fertiggestellte Theme-Dateien hosten.

## Methode 3: Installieren eines CLI-Themes mit einem Befehl

Codex CLI-Themen verwenden einen anderen Installationspfad. Skins mit dem `tmtheme` Installationsformat (zum Beispiel das Bearded Theme Ports) werden mit einem Befehl installiert:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# dann in Codex CLI folgendes ausführen:
/theme Tokyo Night
```

Tools wie [Codex Themes CLI](https://github.com/ychampion/codex-themes) und [Codepilot](https://github.com/charzhu/codepilot) verwalten CLI-Themen für Sie – Validierung, Vorschau, Anwenden, Rückgängigmachen und Export passender Terminal-Paletten.

## Welche Engines unterstützen Skins?

| Engine | Plattformen | Installationsstil |
|---|---|---|
| Codex Dream Skin | macOS, Windows | Agent-Prompt / Voreinstellung |
| Codex Skin Manager | macOS, Windows | Eingebautes Management |
| Codex Themes (desktop) | macOS | .codextheme Import |
| ReTheme | macOS, Windows | Signierte Community-Themen |
| Codex Themes CLI | Plattformübergreifend | CLI `/theme` |
| Codepilot | Plattformübergreifend (npm) | Eingebautes TUI `/skin` |

## Wie wechseln oder widerrufen Sie ein Skin?

- **Voreinstellungs-Engines (Dream Skin usw.):** Die Engine speichert die Standardvorgabe – normalerweise gibt es eine "Standardwiederherstellung" Schaltfläche, um Ihr ursprüngliches Aussehen wiederherzustellen.
- **CLI:** `/theme` listet installierte Themen auf; führen Sie den Befehl erneut mit einem anderen Namen aus, um zu wechseln.
- **Theme-Dateien:** Importieren Sie eine vorherige .codedrobe-theme-Datei erneut oder führen Sie die Standardvorgabe des Motors erneut aus.

## Beliebte Skins, um loszulegen

- [Gothic Void Expedition](/skins/gothic-void-expedition/) – die eingebaute dunkle Standardvorgabe der Engine.
- [Clear Glass](/skins/clear-glass/) – eine gläserne Lichtoberfläche für den Tag.
- [Monokai Stone](/skins/monokai-stone/) – die klassische CLI-Palette.
- [Hatsune Miku](/skins/hatsune-miku/) – blau-grüne Vocaloid-Energie.

Stöbern Sie durch den [vollen Index](/skins/) für über 100 weitere oder lesen Sie unseren [Tutorial](/tutorial/) für Details zur Engine-Einrichtung.
