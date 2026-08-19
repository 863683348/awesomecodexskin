---
title: "Come cambiare il tema in Codex CLI: /theme e palette del terminale"
description: "Guida passo passo per cambiare il tema in Codex CLI — il comando /theme, l'installazione di paletti di sintassi come Tokyo Night e Monokai Stone, e l'abbinamento del terminale."
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "it"
---

REGOLE STRETTISSIME:
1. Traduci tutta la prosa leggibile dagli umani, i titoli, il testo delle tabelle e il testo dei collegamenti.
2. MAI tradurre: blocchi di codice, codice inline, percorsi di file, comandi della shell, URL, nomi di prodotti (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), token numerici/versioni, o nomi di temi visualizzati.
3. Mantieni la struttura markdown identica: stessi titoli, elenchi, tabelle, grassetto/italic, citazioni, e destinazioni dei collegamenti. Un collegamento come [Monokai Stone](/skins/monokai-stone/) mantiene invariato il percorso /path/; solo il testo visibile può essere tradotto.
4. Mantieni esattamente come sono qualsiasi HTML/JSX grezzo.
5. Fornisci SOLO il corpo del markdown tradotto. Nessuna introduzione, nessuna nota, nessun fence di codice intorno alla risposta.

Modificare il tema in Codex CLI è un processo diverso da Codex Desktop. Invece di chrome visivo, un tema Codex CLI scambia la **paletta dei colori del terminale** - sfondo, primo piano e colori della sintassi - in modo che il prompt, le completazioni automatiche e l'output siano leggibili nella shell.

Ecco il processo completo, dal commutatore a comando singolo `/theme` all'installazione di nuove palette.

## Il modo più veloce: /theme

Codex CLI include un comando tema integrato. Apri un prompt e digita:

```bash
/theme
```

Questo elenca ogni tema attualmente installato. Premi le frecce (o digita il nome) per applicarne uno istantaneamente - senza bisogno di riavviare. Se hai installato un tema della sintassi come Tokyo Night, appare in questa lista con il suo nome esatto:

```bash
/theme Tokyo Night
```

## Installa prima una nuova paletta

`/theme` mostra solo i temi che hai installato. Le palette della sintassi (Tokyo Night, Monokai Stone, Solarized) si installano da uno script che porta la paletta nel directory dei temi di Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# poi elenca e applica:
/theme
```

La repository Bearded Theme Ports include oltre 50 varianti - Solarized, Tokyo Night, Monokai Stone e altro ancora - così puoi testare diverse palette in pochi secondi.

## Usa un gestore tema per il rollback e sincronizzazione del terminale

Se cambi spesso i temi, un gestore CLI elimina l'incertezza:

- **Codex Themes CLI** (`ychampion/codex-themes`) — CLI Go che può **validare, previsualizzare, applicare, tornare indietro e esportare** una paletta corrispondente al tuo profilo del terminale. Applica con `codex-theme apply <name>`; torna indietro con un comando.
- **Codepilot** (`charzhu/codepilot`) — una distribuzione Codex CLI con un TUI integrato:

```bash
npm i -g @charzhu/codepilot
# esegui /skin all'interno del TUI per scegliere uno dei 16 skins integrati
```

## Abbinare il terminale e l'editor

Una paletta ha l'aspetto migliore quando terminale, CLI e editor la condividono. Con Codex Themes CLI esporti gli stessi colori nel tuo profilo del terminale, quindi shell e Codex CLI si abbinano dopo un'unica applicazione. Abbinalo a un tema dell'editor portato (es. Tokyo Night in VS Code) per un ambiente di lavoro coerente.

## Riferimento rapido: palette CLI popolari

| Tema | Stile | Applica |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | Palette classica della sintassi | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | Blu scuro, bassa luminosità | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | Palette retrò iconica | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | Identità del terminale caldo-scuro | `codex-theme apply amber-nocturne-cli` |

## Risoluzione dei problemi

- **Il tema non appare in `/theme`** — esegui prima lo script di installazione, poi rivedi il prompt.
- **I colori sembrano sbagliati dopo aver cambiato** — riavvia Codex CLI; alcune porte memorizzano i colori in cache all'avvio.
- **Vuoi la stessa paletta nella shell** — usa l'esportazione di Codex Themes CLI per scrivere la paletta nel tuo profilo del terminale.

Esplora tutti i [temi Mono & Terminale](/skins/category/mono-terminal/), oppure leggi la [guida completa sui temi CLI](/blog/codex-cli-themes-guide/) per l'intera immagine.
