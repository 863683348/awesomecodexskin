---
title: "Codex CLI Themen: Wie man /theme und Terminal-Skins verwendet"
description: "Alles über Codex CLI-Themen: Syntaxthemen wie Tokyo Night, Monokai Stone und Solarized installieren, den /theme-Befehl verwenden und Paletten mit CLI-Tools verwalten."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "de"
---

STRICTE REGELN:
1. Übersetze alle menschlich lesbaren Texte, Überschriften, Tabellen-Texte und Link-Texte.
2. NIEMALS übersetzen: Codeblöcke, Inline-Code, Dateipfade, Shell-Befehle, URLs, Produktbezeichnungen (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), numerische/Versionstoken oder Hautanzeigen-Namen.
3. Halte die Markdown-Struktur identisch: gleiche Überschriften, Listen, Tabellen, fette/Kursivschreibweise, Zitaten und Link-Ziele. Ein Link wie [Monokai Stone](/skins/monokai-stone/) behält seine /path/ URL unverändert; nur der sichtbare Text kann übersetzt werden.
4. Halte jeglichen Roh-HTML/JSX genau so bei.
5. Gib NUR den übersetzten Markdown-Text aus. Kein Vorwort, keine Notizen, keine Code-Fenster um die Antwort.

Codex CLI verwendet nicht dasselbe Hautsystem wie Codex Desktop. Anstatt visueller Chrome ändern CLI-Hauts die **Terminal-Farbpalette** – Hintergrund, Vordergrund und Syntaxfarben – damit Ihr Prompt und Ihre Ausgabe im Terminal lesbar bleiben.

## Der /theme Befehl

Der schnellste Weg, eine CLI-Haut zu verwenden, ist der eingebaute /theme Befehl:

```bash
# in Codex CLI:
/theme
```

Dies listet installierte Hauts auf. Wählen Sie eine aus, um sie sofort anzuwenden.

## Installieren einer Syntaxhaut

Syntaxhauts (wie Monokai Stone, Tokyo Night, Solarized) installieren sich über einen Skript, das die Palette in den Theme-Ordner von Codex CLI portiert:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# dann:
/theme Tokyo Night
```

Das Bearded Theme Ports Repo enthält 50+ Bearded-Varianten – Solarized, Tokyo Night, Monokai Stone und mehr.

## Verwalten von Hauts mit CLI-Tools

Zwei Tools machen die CLI-Hautverwaltung schmerzlos:

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go CLI: Validieren, Vorschau, Anwenden, Rückgängig machen und Exportieren passender Terminal-Paletten. Ideal, wenn Sie möchten, dass Ihr Terminal und Codex CLI dieselbe Palette teilen.
- **Codepilot** (`charzhu/codepilot`) — eine Codex CLI-Distribution mit integrierter TUI-Personalisierung:

```bash
npm i -g @charzhu/codepilot
# dann führen Sie /skin im TUI aus, um eine eingebaute Haut auszuwählen
```

Codepilot verfügt über 16 eingebaute TUI-Hauts (Hintergrund + Oberflächenfarben).

## Beliebte CLI-Hauts im Index

| Haut | Stil | Installieren |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Klassische Syntax-Palette | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Ikonische Retro-Palette | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Dunkelblauer Tokyo Night | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Warm-dunkler Terminal-Identität | `codex-theme apply amber-nocturne` |

## Problembehebung

- **`/theme` sagt, keine Hauts installiert** – Führen Sie zunächst das Installations-Skript aus, dann öffnen Sie den Prompt erneut.
- **Palette sieht falsch aus** – Starten Sie Codex CLI nach dem Anwenden neu; einige Ports speichern Farben beim Start.
- **Möchten Sie, dass Ihr Terminal übereinstimmt** – Verwenden Sie den Export des Codex Themes CLI, um dieselbe Palette in Ihre Terminal-Profildatei zu schreiben.

Alle [Mono & Terminal-Hauts](/skins/category/mono-terminal/) durchsuchen oder mit dem [Installationsleitfaden](/blog/how-to-install-codex-skins/) beginnen.
