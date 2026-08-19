---
title: "So ändern Sie das Thema in Codex CLI: /theme und Terminal-Paletten"
description: "Schritt-für-Schritt-Anleitung zum Ändern des Themes in Codex CLI – der Befehl `/theme`, das Installieren von Syntax-Paletten wie Tokyo Night und Monokai Stone sowie die Anpassung an Ihr Terminal."
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "de"
---

Das Ändern des Themes in Codex CLI unterscheidet sich vom Vorgehen in Codex Desktop. Statt visueller Oberflächenelemente tauscht ein Codex-CLI-Theme die **Farbpalette des Terminals** aus – also Hintergrund-, Vordergrund- und Syntaxfarben – damit Ihre Eingabeaufforderung, Autovervollständigungen und Ausgaben im Terminal weiterhin gut lesbar bleiben.

Im Folgenden finden Sie den vollständigen Ablauf – von der Ein-Kommando-Umschaltfunktion `/theme` bis hin zur Installation brandneuer Farbpaletten.

## Der schnellste Weg: `/theme`

Codex CLI enthält einen integrierten Theme-Befehl. Öffnen Sie einfach eine Eingabeaufforderung und geben Sie ein:

```bash
/theme
```

Dadurch wird eine Liste aller derzeit installierten Themes angezeigt. Navigieren Sie mit den Pfeiltasten (oder geben Sie den Namen direkt ein), um ein Theme sofort anzuwenden – ein Neustart ist nicht erforderlich. Falls Sie ein Syntax-Theme wie Tokyo Night installiert haben, erscheint es in dieser Liste unter genau diesem Namen:

```bash
/theme Tokyo Night
```

## Zuerst eine neue Palette installieren

Der Befehl `/theme` zeigt nur bereits installierte Themes an. Syntaxpaletten (z. B. Tokyo Night, Monokai Stone oder Solarized) werden über ein Skript installiert, das die Palette in das Theme-Verzeichnis von Codex CLI überträgt:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# danach auflisten und anwenden:
/theme
```

Das Repository *Bearded Theme Ports* enthält über 50 Varianten – darunter Solarized, Tokyo Night, Monokai Stone und viele mehr – sodass Sie mehrere Paletten innerhalb weniger Sekunden testen können.

## Verwenden Sie einen Theme-Manager für Rollback und Terminal-Synchronisierung

Falls Sie häufig zwischen Themes wechseln, entfällt mit einem CLI-Manager das Raten:

- **Codex Themes CLI** (`ychampion/codex-themes`) – Eine Go-basierte CLI, mit der Sie Paletten **validieren, vorab anzeigen, anwenden, zurücksetzen und exportieren** können – inklusive automatischer Übertragung der passenden Farben in Ihr Terminalprofil. Wenden Sie ein Theme mit `codex-theme apply <name>` an; kehren Sie mit einem einzigen Befehl zurück.
- **Codepilot** (`charzhu/codepilot`) – eine Codex-CLI-Distribution mit eingebauter TUI:

```bash
npm i -g @charzhu/codepilot
# führen Sie innerhalb der TUI den Befehl `/skin` aus, um eines von 16 integrierten Skins auszuwählen
```

## Passen Sie Terminal und Editor aneinander an

Eine Farbpalette wirkt am besten, wenn Terminal, CLI und Editor dieselbe verwenden. Mit Codex Themes CLI können Sie dieselben Farben in Ihr Terminalprofil exportieren – so stimmen Shell und Codex CLI nach nur einem Anwenden perfekt überein. Kombinieren Sie dies mit einem portierten Editor-Theme (z. B. Tokyo Night für VS Code), um einen konsistenten Arbeitsbereich zu erhalten.

## Schnellreferenz: Beliebte CLI-Paletten

| Skin | Stil | Anwenden |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | Klassische Syntaxpalette | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | Dunkelblau, geringe Blendung | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | Ikonomische Retro-Palette | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | Warm-dunkle Terminal-Identität | `codex-theme apply amber-nocturne-cli` |

## Fehlerbehebung

- **Theme erscheint nicht in `/theme`** – Führen Sie zunächst das Installations-Skript aus und öffnen Sie die Eingabeaufforderung neu.
- **Farben sehen nach dem Wechsel falsch aus** – Starten Sie Codex CLI neu; einige Ports cachen Farben beim Start.
- **Sie möchten dieselbe Palette auch im Terminal nutzen** – Verwenden Sie den Export-Befehl von Codex Themes CLI, um die Palette in Ihr Terminalprofil zu schreiben.

Durchsuchen Sie alle [Mono- & Terminal-Skins](/skins/category/mono-terminal/) oder lesen Sie den [vollständigen Leitfaden zu Codex-CLI-Themes](/blog/codex-cli-themes-guide/), um den kompletten Überblick zu erhalten.
