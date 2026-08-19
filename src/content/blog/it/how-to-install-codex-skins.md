---
title: "Come installare le skin Codex (Desktop e CLI): la guida completa"
description: "Guida passo-passo per l’installazione dei temi Codex Desktop e CLI — comandi pronti da copiare e incollare, motori di temi come Dream Skin, temi CLI e istruzioni su come cambiare o disinstallare i temi. Compatibile con macOS e Windows."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["install", "guide", "desktop", "cli", "themes"]
category: "guide"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
lang: "it"
---

I temi Codex ti permettono di personalizzare l’aspetto di OpenAI Codex Desktop e Codex CLI in modo che l’area di lavoro rispecchi i tuoi gusti: una palette scura a bassa luminosità per le sessioni notturne, una superficie pastello per il giorno o un look al neon semplicemente per divertimento.

Questa guida illustra tutti i metodi disponibili per installare un tema Codex, dal prompt di installazione in un solo passaggio ai gestori di temi da riga di comando.

## Versione breve

La maggior parte dei temi presenti in questo indice si installa nello stesso modo:

1. Scegli un tema e apri la sua pagina dettagliata.
2. Copia il prompt di installazione (oppure scarica il file del tema, per i temi in formato `.codedrobe-theme`).
3. Incolla il prompt in Codex Desktop oppure esegui il comando in Codex CLI.
4. Il motore temi applica immediatamente la palette — nella maggior parte dei casi non è necessario riavviare l’applicazione.

È tutto qui. I temi sono configurazioni, non codice: cambiarli è quindi rapido e completamente reversibile.

## Metodo 1: Installazione tramite copia-incolla del prompt (il più veloce)

La maggior parte dei temi Codex — in particolare i preset integrati nel motore open source [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin) — si installa con un singolo prompt in linguaggio naturale.

Nella pagina dettagliata di ogni tema, la casella **Install prompt** contiene un’istruzione pronta per essere incollata, ad esempio:

```text
Codex, applica il tema chiaro 'Clear Glass' — una superficie trasparente e pulita, a bassa distrazione, per il mio ambiente di lavoro.
```

Copiala, apri Codex e incollala. Il motore legge il prompt e applica la palette, i bordi e i colori di accento definiti nel tema.

> **Suggerimento:** se il prompt applica un preset, il motore lo memorizza, consentendoti di ripristinare facilmente il tema predefinito in seguito con un solo clic.

## Metodo 2: Download di un file tema (`.codedrobe-theme`)

Alcuni temi vengono distribuiti come file scaricabile con estensione `.codedrobe-theme`. Per questi:

1. Clicca su **Download .codedrobe-theme** nella pagina del tema.
2. Salva il file in una posizione comoda.
3. Aprilo da Codex Desktop — i motori supportati importano automaticamente il tema.

Questo metodo è diffuso nelle gallerie come codexskins.org, che ospitano file tema già pronti all’uso.

## Metodo 3: Installazione di un tema CLI tramite comando

I temi per Codex CLI seguono un percorso di installazione diverso. I temi con formato di installazione `tmtheme` (ad esempio le versioni adattate del Bearded Theme) si installano con un singolo comando:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# quindi, in Codex CLI esegui:
/theme Tokyo Night
```

Strumenti come [Codex Themes CLI](https://github.com/ychampion/codex-themes) e [Codepilot](https://github.com/charzhu/codepilot) gestiscono per te i temi CLI: ne verificano la validità, ne consentono l’anteprima, l’applicazione, il ripristino e l’esportazione di palette corrispondenti per il terminale.

## Quali motori supportano i temi?

| Motore | Piattaforme | Metodo di installazione |
|---|---|---|
| Codex Dream Skin | macOS, Windows | Prompt agente / preset |
| Codex Skin Manager | macOS, Windows | Gestore integrato |
| Codex Themes (desktop) | macOS | Importazione di file `.codextheme` |
| ReTheme | macOS, Windows | Temi della community firmati |
| Codex Themes CLI | Multi-piattaforma | Comando CLI `/theme` |
| Codepilot | Multi-piattaforma (npm) | TUI integrata `/skin` |

## Come cambiare o ripristinare un tema

- **Motori basati su preset (Dream Skin ecc.):** il motore conserva il preset predefinito — di solito un pulsante «Ripristina predefinito» riporta l’aspetto originale.
- **CLI:** il comando `/theme` elenca i temi installati; eseguilo nuovamente specificando un altro nome per passare a un tema diverso.
- **File tema:** reimporta un precedente file `.codedrobe-theme` oppure esegui nuovamente il comando predefinito del motore.

## Temi popolari con cui iniziare

- [Gothic Void Expedition](/skins/gothic-void-expedition/) — il tema scuro predefinito integrato nel motore.
- [Clear Glass](/skins/clear-glass/) — una superficie trasparente e chiara per l’uso diurno.
- [Monokai Stone](/skins/monokai-stone/) — la classica palette CLI.
- [Hatsune Miku](/skins/hatsune-miku/) — energia vocaloid nei toni blu-verde.

Esplora l’[indice completo](/skins/) per scoprire oltre 100 altri temi, oppure consulta la nostra [guida introduttiva](/tutorial/) per i dettagli sulla configurazione a livello di motore.
