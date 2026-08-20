---
title: "Wie man das Codex Dream Skin entfernen / deinstallieren kann"
description: "Reinigen Sie die Deinstallation des Codex Dream Skin und stellen Sie das Standard-Codex-Design auf macOS und Windows wieder her – entfernen Sie Vorlagen, setzen Sie das aktive Thema zurück und löschen Sie verbleibende Konfigurationen."
pubDate: "2026-08-20"
updatedDate: "2026-08-20"
tags: ["dream-skin", "uninstall", "tips"]
category: "tips"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "solarized"]
lang: "de"
---

STRICTE REGELN:
1. Übersetze alle menschlich lesbaren Prosa, Überschriften, Tabellen-Text und Link-Text.
2. Übersetze NIE: Codeblöcke, Inline-Code, Dateipfade, Shell-Befehle, URLs, Produktbezeichnungen (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), numerische/Versionstoken oder Hautanzeigen-Namen.
3. Halte die Markdown-Struktur identisch: gleiche Überschriften, Listen, Tabellen, fette/Kursivschreibweise, Zitierungen und Link-Ziele. Ein Link wie [Monokai Stone](/skins/monokai-stone/) behält seine /path/-URL unverändert; nur der sichtbare Text darf übersetzt werden.
4. Halte jede Roh-HTML/JSX genau so bei.
5. Gib NUR den übersetzten Markdown-Body aus. Keine Einleitung, keine Notizen, keine Code-Fenster um die Antwort.

Änderung der Meinung oder Wechsel zu einem anderen Engine? Das Entfernen von Codex Dream Skin ist einfach, aber es ist wichtig, es *sauber* zu entfernen – eine halbvolle Deinstallation lässt das aktive Thema angewandt und kann stillschweigend mit Ihrem nächsten Engine konfliktieren. Hier ist die Vorgehensweise, um es richtig auf macOS und Windows zu entfernen.

## Vor Beginn: Setzen Sie zuerst das aktive Thema zurück

Dream Skin könnte derzeit der **aktive Anwender** Ihres Codex-Themas sein. Das Entfernen der App, während sie noch aktiv ist, kann ein benutzerdefiniertes Thema zurücklassen, das nicht mehr verwaltet werden kann.

1. Öffnen Sie Dream Skin.
2. Verwenden Sie **Standard wiederherstellen**, um Codex in sein ursprüngliches Aussehen zurückzusetzen.
3. Bestätigen Sie, dass das Standardthema in Codex angezeigt wird, bevor Sie fortfahren.

Wenn Sie zu einem anderen Engine wie [Codex Skin Manager](/blog/codex-skin-manager-guide/) wechseln, installieren Sie diesen zunächst, setzen Sie ihn als neuen aktiven Anwender und deinstallieren Sie dann Dream Skin – dies vermeidet eine Lücke, in der kein Engine das Thema ändern kann.

## Entfernen auf macOS

1. Beenden Sie Dream Skin und Codex Desktop.
2. Ziehen Sie die Dream Skin-App aus "Anwendungen" in den Papierkorb.
3. Löschen Sie den verbleibenden Konfigurationsordner (falls vorhanden): `~/Library/Application Support/Codex-Dream-Skin/` (oder den genauen Ordnername aus Ihrer Installation).
4. Leeren Sie den Papierkorb.

## Entfernen auf Windows

1. Schließen Sie Dream Skin und Codex Desktop.
2. Deinstallieren Sie über **Einstellungen → Apps → Installierte Apps** (oder das Control Panel "Programm hinzufügen oder entfernen").
3. Löschen Sie den verbleibenden Datenordner, falls er noch vorhanden ist: `%APPDATA%\Codex-Dream-Skin` (oder wo immer Ihre Installation die Voreinstellungen gespeichert hat).
4. Wenn Sie aus dem Quellcode installiert haben oder über einen Paketmanager, führen Sie den entsprechenden Deinstallationsbefehl aus.

## Prüfen, ob nichts zurückgeblieben ist

Nach der Deinstallation bestätigen Sie:

- Codex zeigt das **Standardthema** an (es sollte das Fall sein, wenn Sie zuerst das aktive Thema zurückgesetzt haben).
- Es läuft kein Dream Skin-Prozess (überprüfen Sie Activity Monitor / Task Manager).
- Kein zweiter Engine kämpft darum, der Anwender zu sein – wenn Sie eine andere Engine installiert haben, stellen Sie sicher, dass diese die aktive ist.

## Wechseln Sie stattdessen zu einer anderen Engine?

Die meisten Menschen entfernen Dream Skin, um etwas anderes zu verwenden. Die beiden gängigen Wege sind:

- **Zur Galerie-UI:** [Codex Skin Manager Guide](/blog/codex-skin-manager-guide/)
- **Zur CLI-Theming:** Der [Engines Vergleich](/blog/codex-skin-engines-compared/) behandelt CLI-Optionen wie Codex Themes CLI und Codepilot

Und wenn Sie einfach ein anderes *Skin* statt eines anderen *Engines* möchten, durchsuchen Sie den [Skin-Index](/skins/) – das Wechseln von Skins ist immer schneller als das Wechseln von Engines.

## Kurzfassung FAQ

**Wird das Entfernen von Dream Skin mein angewandtes Skin löschen?**
Wenn Sie zuerst auf Standard zurückgesetzt haben, nein – Codex kehrt zu seinem eingebauten Thema zurück. Benutzerdefinierte Voreinstellungen, die von Dream Skin gespeichert wurden, werden mit der App gelöscht.

**Kann ich später neu installieren?**
Ja, Dream Skin ist kostenlos und open source; Sie können es von der offiziellen Repo neu installieren und Ihre Skin-Seiten-Erinnerungen funktionieren weiterhin.

**Hat das Entfernen von Dream Skin Auswirkungen auf andere Engines?**
Nein, aber installieren Sie nur einen aktiven Anwender gleichzeitig, um den letzten Gewinner-Konflikt zu vermeiden.
