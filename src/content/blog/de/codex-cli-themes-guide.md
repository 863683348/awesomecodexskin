---
title: "Codex-CLI-Themes: So verwenden Sie `/theme` und Terminal-Skins"
description: "Alles über Codex-CLI-Themes: Installation von Syntax-Themes wie Tokyo Night, Monokai Stone und Solarized, Nutzung des `/theme`-Befehls sowie Verwaltung von Farbpaletten mit CLI-Tools."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "de"
---

Codex CLI verwendet nicht dasselbe Skin-System wie Codex Desktop. Anstelle visueller Oberflächenelemente ändern CLI-Themes die **Terminal-Farbpalette** – also Hintergrund-, Vordergrund- und Syntaxfarben –, sodass Ihre Eingabeaufforderung und Ausgabe im Terminal gut lesbar bleiben.

## Der `/theme`-Befehl

Der schnellste Weg, ein CLI-Theme zu verwenden, ist der integrierte `/theme`-Befehl:

```bash
# in Codex CLI:
/theme
```

Dies listet die installierten Themes auf. Wählen Sie eines aus, um es sofort anzuwenden.

## Installation eines Syntax-Themes

Syntax-Themes (wie Monokai Stone, Tokyo Night oder Solarized) werden über ein Skript installiert, das die Farbpalette in das Theme-Verzeichnis von Codex CLI überträgt:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# danach:
/theme Tokyo Night
```

Das Repository *Bearded Theme Ports* enthält über 50 Bearded-Varianten – darunter Solarized, Tokyo Night, Monokai Stone und viele mehr.

## Verwaltung von Themes mit CLI-Tools

Zwei Tools erleichtern die Verwaltung von CLI-Themes erheblich:

- **Codex Themes CLI** (`ychampion/codex-themes`) – Go-basiertes CLI: Validierung, Vorschau, Anwendung, Rückgängigmachen und Export kompatibler Terminal-Paletten. Ideal, wenn Sie dieselbe Farbpalette sowohl in Ihrem Terminal als auch in Codex CLI nutzen möchten.
- **Codepilot** (`charzhu/codepilot`) – eine Codex CLI-Distribution mit integrierter TUI-Personalisierung:

```bash
npm i -g @charzhu/codepilot
# danach /skin innerhalb der TUI ausführen, um ein integriertes Theme auszuwählen
```

Codepilot enthält 16 integrierte TUI-Skins (Hintergrund- + Oberflächenfarben).

## Beliebte CLI-Themes im Index

| Skin | Stil | Installation |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Klassische Syntax-Palette | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Ikonische Retro-Palette | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Dunkelblaues Tokyo Night | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Warm-dunkle Terminal-Identität | `codex-theme apply amber-nocturne` |

## Fehlerbehebung

- **`/theme` meldet „keine Themes installiert“** – führen Sie zunächst das Installations-Skript aus und öffnen Sie die Eingabeaufforderung neu.
- **Die Palette sieht falsch aus** – starten Sie Codex CLI nach der Anwendung neu; einige Portierungen cachen Farben beim Start.
- **Sie möchten, dass Ihr Terminal dieselbe Palette nutzt** – verwenden Sie den Export-Befehl von Codex Themes CLI, um die gleiche Palette in Ihr Terminal-Profil zu schreiben.

Durchsuchen Sie alle [Mono- & Terminal-Skins](/skins/category/mono-terminal/) oder beginnen Sie mit der [Installationsanleitung](/blog/how-to-install-codex-skins/).
