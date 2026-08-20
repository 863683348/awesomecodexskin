---
title: "Wie man die Codex Dream-Haut installiert und verwendet (Schritt für Schritt)"
description: "Codex Dream Skin auf macOS und Windows installieren, Prompt-Voreinstellungen einfügen, Skins sofort wechseln und häufige „nicht anwendbare“ Probleme beheben."
pubDate: "2026-08-20"
updatedDate: "2026-08-20"
tags: ["dream-skin", "install", "guide"]
category: "guide"
relatedSkins: ["amber-nocturne", "blue-enchantress", "clear-glass", "cyber-neon"]
lang: "de"
---

Schnelle Regeln:
1. Übersetze alle menschlich lesbaren Texte, Überschriften, Tabellen-Texte und Link-Texte.
2. NIEMALS übersetzen: Codeblöcke, Inline-Code, Dateipfade, Shell-Befehle, URLs, Produktbezeichnungen (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), numerische/Versionstoken oder Hautanzeigen-Namen.
3. Halte die Markdown-Struktur identisch: gleiche Überschriften, Listen, Tabellen, Fett/Kursiv, Zitate und Link-Ziele. Ein Link wie [Monokai Stone](/skins/monokai-stone/) behält seine /Pfad/-URL unverändert; nur der sichtbare Text kann übersetzt werden.
4. Halte jede Roh-HTML/JSX genau so bei.
5. Gib NUR den übersetzten Markdown-Body aus. Kein Präambel, keine Notizen, keine Code-Fenster um die Antwort.

Codex Dream Skin ist der schnellste Weg, um auszusehen, wie Codex Desktop aussieht, und die Installation dauert etwa fünf Minuten. Dieser Leitfaden führt durch die Einrichtung unter macOS und Windows, wie man voreingestellte Prompts anwendet, Skins wechselt und die zwei häufigsten Probleme behebt, mit denen Menschen konfrontiert werden.

## Was Sie benötigen

- **Codex Desktop** installiert (macOS 12+ oder Windows 10+)
- Etwa 5 Minuten
- Keine kostenpflichtige Lizenz – Dream Skin ist kostenlos und open source

## Schritt 1 – Holen Sie sich Dream Skin

Laden Sie die neueste Version vom offiziellen **Fei-Away/Codex-Dream-Skin**-Repository herunter. Sie können entweder:

1. Das Repo klonen und es von Quellcode aus ausführen, oder
2. Die verpackte Version für Ihre Plattform vom Releases-Seite abholen.

Wenn Sie nicht sicher sind, welche Version Sie wählen sollen, ist die Release-Build die freundlichste für den täglichen Gebrauch.

## Schritt 2 – Starten und bestätigen Sie, dass es aktiv ist

Öffnen Sie Dream Skin und prüfen Sie, ob es als **aktiver Anwender** für Codex gesetzt ist. Sie sollten sehen, dass der Engine-Status-Indikator auf „verbunden“ oder „aktiv“ wechselt.

> Wenn Dream Skin und eine andere Engine (wie [Codex Skin Manager](/blog/codex-skin-manager-guide/)) installiert sind, stellen Sie sicher, dass nur eine als primärer Anwender gesetzt ist – die letzte, die angewandt wird, gewinnt, und ein stummer „Warum ändert sich meine Haut nicht?“ ist fast immer dieser Konflikt.

## Schritt 3 – Wenden Sie eine Haut mit einem Prompt an

Der Kernloop ist Kopieren-Einfügen:

1. Öffnen Sie irgendeine Hautseite im [Codex Skin Index](/skins/).
2. Kopieren Sie den **Installationsprompt** (die meisten Hauten zeigen einen an, z. B. *„wende das dunkle Amber Nocturne Theme an – warmes Amber auf tiefem Kohle für nächtliches Codieren“*).
3. Fügen Sie ihn in Codex Desktop ein.
4. Dream Skin interpretiert den Prompt und wendet das passende Voreinstellung an – meist sofort, ohne Neustart.

Das Ausprobieren von [Amber Nocturne](/skins/amber-nocturne/) oder [Clear Glass](/skins/clear-glass/) zeigt den Loop innerhalb einer Minute.

## Schritt 4 – Wechseln oder das Standard-Design wiederherstellen

- **Haut wechseln:** fügen Sie einen neuen Prompt ein – Dream Skin ersetzt die aktive Voreinstellung.
- **Standard-Design wiederherstellen:** verwenden Sie die „Standard zurücksetzen“-Schaltfläche der Engine, um zum ursprünglichen Codex-Design zurückzukehren.

## Schritt 5 – Verwalten Sie die Voreinstellungen, die Ihnen gefallen

Wenn Sie ein Design gefunden haben, das erhalten werden sollte, speichern Sie die Voreinstellung in der Liste von Dream Skin. Dies ist der Punkt, an dem Sie bemerken werden, dass Dream Skin seine eine Schwäche hat – es ist großartig beim Anwenden, aber schwächer bei der Organisation einer großen Bibliothek. Für Sammler ist es üblich, es mit einem [Galerie-artigen Manager](/blog/codex-skin-manager-guide/) zu kombinieren.

## Problembehandlung

### „Die Haut wird nicht angewandt“

Überprüfen Sie in der Reihenfolge:

1. **Engine-Konflikt** – ist eine andere Engine auch als aktiver Anwender gesetzt? Deaktivieren Sie sie.
2. **Version-Mismatch** – Dream Skin interpretiert Prompts; ein leicht unterschiedlicher Prompt kann auf eine andere Voreinstellung landen. Kopieren Sie den exakten Prompt von der Hautseite.
3. **Neustarten** – einige Engines cache ihre Themen-Zustände; ein schnelles Neustarten von Codex löst das Problem.

### „Ich kann es nicht deinstallieren“

Siehe den speziellen [Entfernungsguide für Dream Skin](/blog/how-to-remove-dream-skin-codex/) für eine saubere Deinstallation auf beiden Plattformen.

### „Prompts werden angewandt, aber sehen anders aus als im Vorschau“

Das ist Interpretations-Variation, die inhärent zu prompt-basierten Engines ist. Für pixelgenaue Ergebnisse verwenden Sie eine dateibasierte Engine oder die deterministische [Skin Manager](/blog/codex-dream-skin-vs-skin-manager/).

## Verwandtes

- [Codex Dream Skin Review](/blog/codex-dream-skin-review/) – lohnt es sich zu installieren?
- [Beste Codex Dream Skin Alternativen](/blog/codex-dream-skin-alternatives/) – sechs andere Engines im Vergleich
- [Wie man Codex-Hauts installiert](/blog/how-to-install-codex-skins/) – jeder Installationsmethoden über alle Engines
