---
title: "So erstellen Sie Ihre eigene Codex-Oberfläche (Anfängerhandbuch)"
description: "Erfahren Sie, wie Sie eine benutzerdefinierte Codex-Oberfläche erstellen: Wählen Sie eine Engine, entscheiden Sie sich für Farben, schreiben Sie ein Theme-Preset und testen Sie es live. Eine praktische Anleitung für Einsteiger – ohne Programmierkenntnisse erforderlich."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["create", "custom", "beginner", "theme"]
category: "guide"
relatedSkins: ["clear-glass", "sakura-pink-dawn", "amber-dusk"]
lang: "de"
---

Das Erstellen Ihres eigenen Codex-Skins ist überraschend zugänglich. Die meisten Engines akzeptieren ein Theme, das durch eine kleine Farbpalette definiert ist – Hintergrund, Oberfläche, Text und Akzent – entweder als Prompt oder als JSON-Datei. Sie müssen die Codex-Anwendung selbst nicht modifizieren.

## Schritt 1: Wählen Sie eine Engine

Das Format Ihres Themes hängt von der verwendeten Engine ab:

- **Codex Dream Skin** – Themes sind vorgefertigte Presets oder Agent-Prompts. Am einfachsten für den Einstieg: Beschreiben Sie Ihre Farbpalette in einem Satz.
- **Codex Skin Manager** – enthält einen Theme-Creator mit visuellem Farbwähler.
- **ReTheme** – signierte, aktualisierbare Themes; ideal, wenn Sie Ihr Theme öffentlich teilen möchten.
- **Codex Themes (desktop)** – `.codextheme`-Dateien mit einem Creator-Center unter theme.codexguide.ai.

In dieser Anleitung verwenden wir den Prompt-Ansatz (kompatibel mit Dream Skin).

## Schritt 2: Wählen Sie Ihre Farbpalette

Ein Skin besteht meist aus 4–6 Farben:

| Rolle | Beispiel (hell) | Beispiel (dunkel) |
|---|---|---|
| Hintergrund | `#F5F7FA` | `#0A0A0B` |
| Oberfläche (Panels) | `#FFFFFF` | `#16161A` |
| Text | `#1A1B26` | `#E4E4E7` |
| Akzent | `#2DD4BF` | `#2DD4BF` |

Verwenden Sie nur einen Akzent. Zu viele Akzentfarben sind der häufigste Anfängerfehler.

## Schritt 3: Formulieren Sie das Theme als Prompt

Ein Dream-Skin-Preset ist lediglich ein beschreibender Satz:

```text
Codex, wende ein benutzerdefiniertes Theme an – eine warme Bernstein-Dämmerungs-Palette mit dunklen Kohle-Oberflächen, sanften Bernstein-Akzenten und hellcremefarbenem Text. Ruhevolle, gemütliche Gestaltung, optimiert für lange Lese- und Arbeitsphasen.
```

Speichern Sie diesen Text als Preset in Ihrer Engine und testen Sie das Ergebnis. Passen Sie die Formulierung so lange an, bis das visuelle Ergebnis Ihren Vorstellungen entspricht.

## Schritt 4: Testen Sie am echten Inhalt

Öffnen Sie vor der endgültigen Entscheidung einen komplexen Bildschirm (z. B. mit langem Code oder vielen Panels). Dunkle Themes wirken in Screenshots oft sehr ansprechend, versagen aber in der Praxis häufig bei zu geringem Kontrast zwischen Panels. Prüfen Sie folgende Punkte:

- Lesbarkeit im Code-Editor  
- Abgrenzung von Sidebar / Panels  
- Sichtbarkeit des Akzents auf Buttons im Vergleich zu Links  

## Schritt 5: Teilen Sie Ihr Theme

Engines wie ReTheme und Codex Skin Manager ermöglichen das Exportieren von Themes. Sie können Ihr Skin über die Seite [Submit a skin](/submit/) in diesen Index einreichen – fügen Sie bitte ein Vorschaubild sowie den Installations-Prompt hinzu, damit andere Nutzer es mit nur einem Klick installieren können.

## Fertige Ausgangspunkte

Nutzen Sie bewährte Paletten als Inspiration:

- [Clear Glass](/skins/clear-glass/) – glasklare helle Oberfläche.  
- [Sakura Pink Dawn](/skins/sakura-pink-dawn/) – zartes Pastell.  
- [Amber Dusk](/skins/amber-dusk/) – warmes Bernstein-Programm-Preset.  

Oder stöbern Sie im [vollständigen Index](/skins/) nach weiteren Ideen. Falls Sie bei den Installations-Schritten unsicher sind, hilft Ihnen der [install guide](/blog/how-to-install-codex-skins/) weiter – darin werden alle Installationsmethoden detailliert beschrieben.
