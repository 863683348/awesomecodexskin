---
title: "Codex CLI Themen: Wie man /theme und Terminal-Designs verwendet"
description: "Alles über Codex CLI-Themen: Syntaxthemen wie Tokyo Night, Monokai Stone und Solarized installieren, den /theme-Befehl verwenden und Paletten mit CLI-Tools verwalten."
pubDate: "2026-08-14"
updatedDate: "2026-08-24"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
faq:
  - q: "Was ist ein Codex CLI-Thema?"
    a: "Ein Codex CLI-Thema ist ein Terminal-Farbschema – Hintergrund, Vordergrund und Syntaxfarben – das Ihre Eingabeaufforderung und Ausgabe lesbar hält. Im Gegensatz zu Codex Desktop hat CLI kein visuelles Chrome; Themen ändern nur Farben."
  - q: "Wie wende ich ein Thema in Codex CLI an?"
    a: "Führen Sie den integrierten /theme-Befehl in Codex CLI aus, um installierte Themes anzuzeigen, und wählen Sie eines aus, um es sofort anzuwenden."
  - q: "Wie installiere ich Syntax-Themen wie Tokyo Night oder Monokai Stone?"
    a: "Ein Themes-Port-Skript installieren (z. B. der Bearded Theme Ports-Installer), dann /theme Tokyo Night ausführen (oder /theme Monokai Stone), um es anzuwenden."
  - q: "Warum werden keine Themen angezeigt?"
    a: "Sie haben noch kein Thema installiert. Führen Sie zuerst das Installations-Skript aus, dann öffnen Sie die Codex CLI-Eingabeaufforderung erneut — /theme listet die installierten Themen auf."
  - q: "Kann meine Terminal-Palette mit meinem Codex CLI-Theme übereinstimmen?"
    a: "Ja – Codex Themes CLI (ychampion/codex-themes) kann dasselbe Farbschema in Ihre Terminal-Profildatei exportieren, damit Terminal und Codex CLI synchronisiert bleiben."
lang: "de"
---

STRICTE REGELN:
1. Übersetze alle menschlich lesbaren Texte, Überschriften, Tabelleninhalte und Linktexte.
2. NICHT übersetzen: Codeblöcke, Inline-Code, Dateipfade, Shell-Befehle, URLs, Produktbezeichnungen (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), numerische/Versionstoken oder Hautanzeigenamen.
3. Halte die Markdown-Struktur identisch: gleiche Überschriften, Listen, Tabellen, Fett-/Kursivschreibweise, Zitate und Linkziele. Ein Link wie [Monokai Stone](/skins/monokai-stone/) behält seine /Pfad/-URL unverändert; nur der sichtbare Text kann übersetzt werden.
4. Halte jeglichen Roh-HTML/JSX genau so, wie er ist.
5. Gib NUR den übersetzten Markdown-Text aus. Kein Vorwort, keine Notizen, keine Code-Fenster um die Antwort.

Codex CLI-Themen ändern das **Terminal-Farbschema** – Hintergrund, Vordergrund und Syntaxfarben – damit Ihr Prompt und Ihre Ausgabe im Terminal lesbar bleiben. Sie wenden sie mit dem integrierten `/theme`-Befehl an: führen Sie `/theme` aus, um installierte Themen aufzulisten, wählen Sie eines aus und es wird sofort angewandt. Im Gegensatz zu Codex Desktop hat die CLI kein visuelles Chrome; ein Thema ist rein die Farben, die Sie sehen.

## Schnellstart

1. Installieren Sie ein Theme-Port (einmalig): `curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh`
2. Öffnen Sie Codex CLI und führen Sie `/theme` aus.
3. Wählen Sie ein Thema (z. B. `/theme Tokyo Night`) – es wird sofort angewandt.

## Der /theme-Befehl

Der schnellste Weg, ein CLI-Thema zu verwenden, ist der integrierte `/theme`-Befehl:

```bash
# in Codex CLI:
/theme
```

Dies listet installierte Themen auf. Wählen Sie eines aus, um es sofort anzuwenden.

## Installieren eines Syntax-Themas

Syntax-Themen (wie Monokai Stone, Tokyo Night, Solarized) werden über einen Skript installiert, das das Farbschema in das Theme-Verzeichnis von Codex CLI portiert:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# dann:
/theme Tokyo Night
```

Das Bearded Theme Ports-Repo enthält 50+ Bearded-Varianten – Solarized, Tokyo Night, Monokai Stone und mehr.

## Verwalten von Themen mit CLI-Tools

Zwei Tools machen die CLI-Themenverwaltung schmerzlos:

- **Codex Themes CLI** (`ychampion/codex-themes`) – Go CLI: Validieren, Vorschau, Anwenden, Rückgängig machen und Exportieren passender Terminal-Paletten. Ideal, wenn Sie möchten, dass Ihr Terminal und Codex CLI dieselbe Palette teilen.
- **Codepilot** (`charzhu/codepilot`) – eine Codex CLI-Distribution mit integrierter TUI-Personalisierung:

```bash
npm i -g @charzhu/codepilot
# dann führen Sie /skin im TUI aus, um ein integriertes Thema auszuwählen
```

Codepilot beinhaltet 16 integrierte TUI-Hauten (Hintergrund + Oberflächenfarben).

## Beliebte CLI-Themen im Index

| Haut | Stil | Installieren |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Klassisches Syntax-Schema | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Ikonisches Retro-Schema | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Dunkelblauer Tokyo Night | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Warm-dunkler Terminal-Identität | `codex-theme apply amber-nocturne` |

## Problemlösung

- **`/theme` meldet keine installierten Themen** – Führen Sie zunächst das Installations-Skript aus, dann öffnen Sie die Eingabeaufforderung neu.
- **Das Farbschema sieht falsch aus** – Starten Sie Codex CLI nach dem Anwenden neu; einige Ports speichern Farben im Cache beim Start.
- **Möchten Sie, dass Ihr Terminal übereinstimmt** – Verwenden Sie den Export des Codex Themes CLI, um dasselbe Farbschema in Ihre Terminal-Profildatei zu schreiben.

Durchsuchen Sie alle [Mono & Terminal-Hauten](/skins/category/mono-terminal/) oder beginnen Sie mit dem [Installationsleitfaden](/blog/how-to-install-codex-skins/).
