---
title: "Temi CLI di Codex: Come usare /theme e Skin per il terminale"
description: "Tutto sui temi Codex CLI: installazione di temi sintassi come Tokyo Night, Monokai Stone e Solarized, utilizzo del comando /theme e gestione delle palette con strumenti CLI."
pubDate: "2026-08-14"
updatedDate: "2026-08-24"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
faq:
  - q: "Cos'è un tema Codex CLI?"
    a: "Un tema Codex CLI è un piano colori per terminale — sfondo, testo e colori della sintassi — che mantiene il tuo prompt e l'output leggibili. A differenza di Codex Desktop, CLI non ha elementi visivi; i temi cambiano solo i colori."
  - q: "Come faccio a applicare un tema in Codex CLI?"
    a: "Esegui il comando /theme integrato all'interno del CLI di Codex per elencare i temi installati, quindi selezionane uno per applicarlo istantaneamente."
  - q: "Come faccio ad installare temi di sintassi come Tokyo Night o Monokai Stone?"
    a: "Installa un script per i temi portati (ad esempio, l'installer dei temi portati Bearded), poi esegui /theme Tokyo Night (o /theme Monokai Stone) per applicarlo."
  - q: "Perché /theme non mostra nessun tema?"
    a: "Non hai ancora installato un tema. Esegui prima lo script di installazione, poi riaccedi al prompt Codex CLI — /theme elencherà i temi installati."
  - q: "Può il mio palette del terminale corrispondere al mio tema Codex CLI?"
    a: "Sì — Codex Themes CLI (ychampion/codex-themes) può esportare la stessa palette nel tuo profilo del terminale in modo che il terminale e Codex CLI rimangano sincronizzati."
lang: "it"
---

REGOLE STRETTISSIME:
1. Traduci tutta la prosa leggibile da umani, i titoli, il testo delle tabelle e il testo dei collegamenti.
2. MAI tradurre: blocchi di codice, codice inline, percorsi di file, comandi della shell, URL, nomi di prodotti (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), token numerici/versioni o nomi di temi visualizzati.
3. Mantieni la struttura markdown identica: stessi titoli, elenchi, tabelle, grassetto/italic, citazioni e destinazioni dei collegamenti. Un collegamento come [Monokai Stone](/skins/monokai-stone/) mantiene invariata la sua URL /path/; solo il testo visibile può essere tradotto.
4. Mantieni qualsiasi HTML/JSX grezzo esattamente come è.
5. Fornisci SOLO il corpo del markdown tradotto. Nessun preambolo, nessuna nota, nessun fence di codice intorno alla risposta.

I temi Codex CLI modificano la **paletta dei colori del terminale** - sfondo, primo piano e colori della sintassi - in modo che il tuo prompt e l'output rimangano leggibili nel terminale. Li applichi con il comando integrato `/theme`: esegui `/theme` per elencare i temi installati, scegli uno e viene applicato immediatamente. A differenza di Codex Desktop, CLI non ha chrome visivo; un tema è puramente i colori che vedi.

## Avvio rapido

1. Installa un port di tema (una volta sola): `curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh`
2. Apri Codex CLI ed esegui `/theme`.
3. Scegli un tema (ad esempio `/theme Tokyo Night`) - viene applicato immediatamente.

## Il comando /theme

Il modo più veloce per utilizzare un tema CLI è il comando integrato `/theme`:

```bash
# nel Codex CLI:
/theme
```

Questo elenca i temi installati. Scegline uno per applicarlo immediatamente.

## Installazione di un tema di sintassi

I temi di sintassi (come Monokai Stone, Tokyo Night, Solarized) si installano da uno script che porta la paletta nel directory dei temi di Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# poi:
/theme Tokyo Night
```

La repo Bearded Theme Ports include oltre 50 varianti Bearded - Solarized, Tokyo Night, Monokai Stone e altro ancora.

## Gestione dei temi con strumenti CLI

Due strumenti rendono gestire i temi CLI semplice:

- **Codex Themes CLI** (`ychampion/codex-themes`) - CLI Go: validare, anteprima, applicare, annullare e esportare le palette del terminale corrispondenti. Ideale se desideri che il tuo terminale e Codex CLI condividano una palette.
- **Codepilot** (`charzhu/codepilot`) - una distribuzione Codex CLI con personalizzazione TUI integrata:

```bash
npm i -g @charzhu/codepilot
# quindi esegui /skin all'interno del TUI per scegliere un tema predefinito
```

Codepilot include 16 skins TUI predefinite (colore di sfondo + superficie).

## Temi CLI popolari nell'indice

| Tema | Stile | Installa |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Palette classica di sintassi | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Palette retrò iconica | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Tokyo Night blu scuro | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Identità del terminale caldo-scuro | `codex-theme apply amber-nocturne` |

## Risoluzione dei problemi

- **`/theme` dice che non sono installati temi** - esegui prima lo script di installazione, poi riapri il prompt.
- **La palette sembra sbagliata** - riavvia Codex CLI dopo l'applicazione; alcuni porti memorizzano i colori in cache all'avvio.
- **Vuoi che il tuo terminale corrisponda** - usa l'esportazione del Codex Themes CLI per scrivere la stessa palette nel tuo profilo del terminale.

Esplora tutti i [Temi Mono & Terminal](/skins/category/mono-terminal/) o inizia con la [guida all'installazione](/blog/how-to-install-codex-skins/).
