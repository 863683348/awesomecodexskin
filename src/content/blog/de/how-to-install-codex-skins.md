---
title: "So installieren Sie Codex-Skins (Desktop & CLI): Der umfassende Leitfaden"
description: "Schritt-für-Schritt-Anleitung zum Installieren von Codex Desktop- und CLI-Skins – Kopier- und Einfüge-Anweisungen, Theme-Engines wie Dream Skin, CLI-Themes sowie Anleitungen zum Wechseln oder Deinstallieren. Umfasst macOS und Windows."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["install", "guide", "desktop", "cli", "themes"]
category: "guide"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
lang: "de"
---

Codex-Skins ermöglichen es Ihnen, OpenAI Codex Desktop und Codex CLI neu zu gestalten, sodass Ihr Arbeitsbereich Ihrem persönlichen Geschmack entspricht – etwa mit einer dunklen, lichtarmen Farbpalette für nächtliche Sessions, einer pastellfarbenen Oberfläche für den Tag oder einem Neon-Look einfach nur zum Spaß.

In dieser Anleitung werden alle Möglichkeiten beschrieben, einen Codex-Skin zu installieren – von der Ein-Klick-Installationsanweisung bis hin zu Theme-Managern für die Kommandozeile.

## Die Kurzfassung

Die meisten Skins in diesem Index werden auf dieselbe Weise installiert:

1. Wählen Sie einen Skin aus und öffnen Sie dessen Detailseite.
2. Kopieren Sie die Installationsanweisung (oder laden Sie die Theme-Datei herunter, falls es sich um einen `.codedrobe-theme`-Skin handelt).
3. Fügen Sie die Anweisung in Codex Desktop ein oder führen Sie den Befehl in Codex CLI aus.
4. Die Theme-Engine wendet die Farbpalette sofort an – bei den meisten Engines ist kein Neustart erforderlich.

Das war’s schon. Skins sind reine Konfiguration – kein Code – daher ist das Wechseln schnell und jederzeit rückgängig machbar.

## Methode 1: Installationsanweisung per Kopieren und Einfügen (schnellste Methode)

Die meisten Codex-Skins – insbesondere Engine-Voreinstellungen von [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin), der quelloffenen Injection-Engine – lassen sich über eine einzige, natürlichsprachliche Anweisung installieren.

Auf der Detailseite eines beliebigen Skins enthält das Feld **Installationsanweisung** eine sofort einsatzbereite Anweisung wie beispielsweise:

```text
Codex, wende das helle Theme „Clear Glass“ an – eine klare, glasartige, ablenkungsarme Oberfläche für meinen Arbeitsbereich.
```

Kopieren Sie diese Zeile, öffnen Sie Codex und fügen Sie sie ein. Die Engine liest die Anweisung und wendet die im Theme definierte Farbpalette, die Rahmen sowie Akzentfarben an.

> **Tipp:** Falls die Anweisung eine Voreinstellung anwendet, speichert die Engine diese, sodass Sie später mit nur einem Klick wieder zum Standard-Theme zurückkehren können.

## Methode 2: Herunterladen einer Theme-Datei (`.codedrobe-theme`)

Einige Skins werden als herunterladbare `.codedrobe-theme`-Datei bereitgestellt. Für diese gilt:

1. Klicken Sie auf der Skin-Seite auf **.codedrobe-theme herunterladen**.
2. Speichern Sie die Datei an einem beliebigen, praktischen Ort.
3. Öffnen Sie die Datei direkt in Codex Desktop – unterstützte Engines importieren das Theme automatisch.

Diese Methode ist besonders verbreitet auf Galerien wie codexskins.org, die fertige Theme-Dateien hosten.

## Methode 3: Installieren eines CLI-Themes über einen Befehl

Codex CLI-Themes folgen einem anderen Installationsweg. Skins mit dem `tmtheme`-Installationsformat (z. B. die Bearded Theme Ports) werden mit einem einzigen Befehl installiert:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# danach in Codex CLI ausführen:
/theme Tokyo Night
```

Tools wie [Codex Themes CLI](https://github.com/ychampion/codex-themes) und [Codepilot](https://github.com/charzhu/codepilot) verwalten CLI-Themes für Sie – sie validieren, zeigen Vorschauen an, wenden Themes an, ermöglichen Rückkehr zu vorherigen Versionen und exportieren passende Terminal-Farbpaletten.

## Welche Engines unterstützen Skins?

| Engine | Plattformen | Installationsart |
|---|---|---|
| Codex Dream Skin | macOS, Windows | Agent-Anweisung / Voreinstellung |
| Codex Skin Manager | macOS, Windows | Integrierter Manager |
| Codex Themes (Desktop) | macOS | `.codextheme`-Import |
| ReTheme | macOS, Windows | Signierte Community-Themes |
| Codex Themes CLI | Plattformübergreifend | CLI `/theme` |
| Codepilot | Plattformübergreifend (npm) | Integrierte TUI `/skin` |

## So wechseln oder setzen Sie einen Skin zurück

- **Voreinstellungs-Engines (z. B. Dream Skin):** Die Engine behält die Standardvoreinstellung bei – üblicherweise gibt es eine Schaltfläche „Standard wiederherstellen“, mit der Sie Ihr ursprüngliches Aussehen zurückbekommen.
- **CLI:** Mit `/theme` werden alle installierten Themes aufgelistet; führen Sie den Befehl erneut mit einem anderen Namen aus, um zu wechseln.
- **Theme-Dateien:** Importieren Sie einfach eine frühere `.codedrobe-theme`-Datei erneut oder führen Sie die Standardfunktion der Engine erneut aus.

## Beliebte Skins zum Einstieg

- [Gothic Void Expedition](/skins/gothic-void-expedition/) — die integrierte dunkle Standardvorgabe der Engine.
- [Clear Glass](/skins/clear-glass/) — eine glasklare, helle Oberfläche für den Tag.
- [Monokai Stone](/skins/monokai-stone/) — die klassische CLI-Farbpalette.
- [Hatsune Miku](/skins/hatsune-miku/) — energiegeladene Blau-Grün-Töne im Vocaloid-Stil.

Stöbern Sie im [vollständigen Index](/skins/) nach über 100 weiteren Skins oder lesen Sie unser [Tutorial](/tutorial/), um detaillierte Informationen zur Einrichtung auf Engine-Ebene zu erhalten.
