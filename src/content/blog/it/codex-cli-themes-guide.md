---
title: "Temi CLI di Codex: Come usare /theme e Skin per il terminale"
description: "Tutto sui temi Codex CLI: installazione di temi sintassi come Tokyo Night, Monokai Stone e Solarized, utilizzo del comando /theme e gestione delle palette con strumenti CLI."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "it"
---

REGOLE STRETTI:
1. Traduci tutta la prosa leggibile da umani, intestazioni, testo delle tabelle e testo dei collegamenti.
2. MAI tradurre: blocchi di codice, codice inline, percorsi dei file, comandi shell, URL, nomi dei prodotti (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), token numerici/versione, o nomi visualizzati per le skin.
3. Mantieni la struttura markdown identica: stesse intestazioni, elenchi, tabelle, grassetto/italic, citazioni e destinazioni dei collegamenti. Un collegamento come [Monokai Stone](/skins/monokai-stone/) mantiene invariato il percorso /path/; solo il testo visibile può essere tradotto.
4. Mantieni esattamente come sono qualsiasi HTML/JSX grezzo.
5. Fornisci SOLO il corpo del markdown tradotto. Nessun preambolo, nessuna nota, nessun fence di codice intorno alla risposta.

Codex CLI non utilizza lo stesso sistema di skin di Codex Desktop. Al posto del chrome visivo, i temi CLI modificano la **paletta dei colori del terminale** - sfondo, colore di primo piano e colori della sintassi - in modo che il tuo prompt e l'output siano leggibili nel terminale.

## Il comando /theme

Il modo più veloce per utilizzare un tema CLI è il comando integrato /theme:

```bash
# in Codex CLI:
/theme
```

Questo elenca i temi installati. Scegli uno per applicarlo istantaneamente.

## Installazione di un tema di sintassi

I temi di sintassi (come Monokai Stone, Tokyo Night, Solarized) vengono installati da uno script che porta la paletta nel directory dei temi di Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# poi:
/theme Tokyo Night
```

La repo Bearded Theme Ports include 50+ varianti Bearded - Solarized, Tokyo Night, Monokai Stone e altro ancora.

## Gestione dei temi con strumenti CLI

Due strumenti rendono gestire i temi CLI semplice:

- **Codex Themes CLI** (`ychampion/codex-themes`) — CLI Go: convalida, anteprima, applica, rollback ed esporta palette del terminale corrispondenti. Ideale se desideri che il tuo terminale e Codex CLI condividano una palette.
- **Codepilot** (`charzhu/codepilot`) — una distribuzione Codex CLI con personalizzazione TUI integrata:

```bash
npm i -g @charzhu/codepilot
# quindi esegui /skin all'interno del TUI per scegliere un tema predefinito
```

Codepilot include 16 skins TUI predefinite (colore di sfondo + superficie).

## Temi CLI popolari nell'indice

| Skin | Stile | Installa |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Palette classica per la sintassi | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Palette retrò iconica | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Notte blu di Tokyo | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Identità del terminale caldo-scuro | `codex-theme apply amber-nocturne` |

## Risoluzione dei problemi

- **/theme dice che non ci sono temi installati** - esegui prima lo script di installazione, quindi riapri il prompt.
- **La palette sembra sbagliata** - riavvia Codex CLI dopo l'applicazione; alcune porte memorizzano i colori in cache all'avvio.
- **Vuoi che il tuo terminale abbia lo stesso aspetto** - usa l'esportazione di Codex Themes CLI per scrivere la stessa palette nel tuo profilo del terminale.

Esplora tutti i [temi Mono & Terminal](/skins/category/mono-terminal/) o inizia con la [guida all'installazione](/blog/how-to-install-codex-skins/).
