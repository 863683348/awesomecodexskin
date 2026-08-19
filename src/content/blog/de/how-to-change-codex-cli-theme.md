---
title: "Wie man das Theme in Codex CLI ändert: /theme & Terminal-Paletten"
description: "Schritt-für-Schritt-Anleitung zur Änderung des Themes in Codex CLI – der /theme-Befehl, das Installieren von Syntax-Paletten wie Tokyo Night und Monokai Stone sowie die Anpassung Ihrer Terminal-Oberfläche."
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "de"
---

STRICT RULES:
1. Übersetze alle menschlich lesbaren Prosa, Überschriften, Tabellen-Text und Link-Text.
2. NIEMALS übersetzen: Codeblöcke, Inline-Code, Dateipfade, Shell-Befehle, URLs, Produktbezeichnungen (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), numerische/Versionstoken oder Hautanzeigen.
3. Halte die Markdown-Struktur identisch: gleiche Überschriften, Listen, Tabellen, Fett/Kursiv, Zitaten und Linkziele. Ein Link wie [Monokai Stone](/skins/monokai-stone/) behält seine /path/ URL unverändert; nur der sichtbare Text kann übersetzt werden.
4. Halte jede rohe HTML/JSX genau so bei.
5. Gib NUR den übersetzten Markdown-Body aus. Kein Präambel, keine Notizen, keine Code-Fächer um die Antwort.

Das Ändern des Themes in Codex CLI ist ein anderer Prozess als bei Codex Desktop. Anstatt visueller Chrome ändert ein Codex CLI Theme das **Terminal-Farbschema** – Hintergrund, Vordergrund und Syntaxfarben – damit Ihr Prompt, Autocompletions und Ausgabe im Shell lesbar bleiben.

Hier ist der vollständige Workflow, von dem einzeiligen `/theme`-Wechsel bis hin zum Installieren neuer Paletten.

## Der schnellste Weg: /theme

Codex CLI verfügt über einen eingebauten Theme-Befehl. Öffnen Sie eine Eingabeaufforderung und geben Sie ein:

```bash
/theme
```

Dies listet alle derzeit installierten Themen auf. Drücken Sie die Pfeiltasten (oder geben Sie den Namen ein), um eines sofort anzuwenden – kein Neustart erforderlich. Wenn Sie ein Syntax-Theme wie Tokyo Night installiert haben, erscheint es in dieser Liste unter seinem exakten Namen:

```bash
/theme Tokyo Night
```

## Installieren Sie zuerst eine neue Palette

`/theme` zeigt nur Themen an, die Sie installiert haben. Syntax-Paletten (Tokyo Night, Monokai Stone, Solarized) installieren Sie mit einem Skript, das die Palette in das Theme-Verzeichnis von Codex CLI portiert:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# dann auflisten und anwenden:
/theme
```

Das Bearded Theme Ports-Repo enthält über 50 Varianten – Solarized, Tokyo Night, Monokai Stone usw. – sodass Sie mehrere Paletten in Sekunden testen können.

## Verwenden Sie einen Theme-Manager für Rollbacks und Terminal-Synchronisation

Wenn Sie häufig Themen wechseln, entfernt ein CLI-Manager das Raten:

- **Codex Themes CLI** (`ychampion/codex-themes`) – Go CLI, die **Validierung, Vorschau, Anwendung, Rückgängigmachung und Export** einer passenden Palette in Ihre Terminal-Profil ermöglicht. Anwenden mit `codex-theme apply <name>`; wechseln Sie mit einem Befehl zurück.
- **Codepilot** (`charzhu/codepilot`) – eine Codex CLI-Distribution mit integrierter TUI:

```bash
npm i -g @charzhu/codepilot
# führen Sie /skin innerhalb der TUI aus, um eines der 16 integrierten Skins auszuwählen
```

## Passen Sie Ihr Terminal und Editor an

Eine Palette sieht am besten aus, wenn Terminal, CLI und Editor sie teilen. Mit Codex Themes CLI exportieren Sie dieselben Farben in Ihr Terminalprofil, sodass die Shell und Codex CLI nach einem einzigen Anwenden übereinstimmen. Kombinieren Sie es mit einem portierten Editor-Theme (z. B. Tokyo Night in VS Code), um einen konsistenten Arbeitsbereich zu erhalten.

## Kurzübersicht: beliebte CLI-Paletten

| Haut | Stil | Anwenden |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | Klassisches Syntax-Schema | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | Dunkelblau, geringe Blendung | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | Ikonisches Retro-Schema | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | Warm-dunkles Terminal-Identität | `codex-theme apply amber-nocturne-cli` |

## Problemlösung

- **Das Thema erscheint nicht in `/theme`** – Führen Sie zunächst das Installations-Skript aus, dann öffnen Sie die Eingabeaufforderung erneut.
- **Farben sehen nach dem Wechsel falsch aus** – Starten Sie Codex CLI neu; einige Ports speichern Farben beim Start.
- **Möchten Sie dasselbe Schema im Terminal** – Verwenden Sie die Exportfunktion von Codex Themes CLI, um das Schema in Ihr Terminalprofil zu schreiben.

Durchsuchen Sie alle [Mono & Terminal-Hauts](/skins/category/mono-terminal/), oder lesen Sie den [vollständigen CLI-Themen-Guide](/blog/codex-cli-themes-guide/), um das vollständige Bild zu erhalten.
