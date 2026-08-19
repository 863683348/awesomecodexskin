---
title: "Temi Codex CLI: come utilizzare /theme e le skin per il terminale"
description: "Tutto sulle tematiche CLI di Codex: installazione di temi di sintassi come Tokyo Night, Monokai Stone e Solarized, utilizzo del comando `/theme` e gestione delle palette con strumenti CLI."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "it"
---

Codex CLI non utilizza lo stesso sistema di skin di Codex Desktop. Invece di modificare l’interfaccia visiva, i temi per CLI modificano la **tavolozza dei colori del terminale** — colore di sfondo, colore del primo piano e colori della sintassi — in modo che prompt ed output rimangano leggibili nel terminale.

## Il comando `/theme`

Il modo più rapido per utilizzare un tema CLI è il comando integrato `/theme`:

```bash
# in Codex CLI:
/theme
```

Questo elenca i temi installati. Selezionane uno per applicarlo immediatamente.

## Installazione di un tema di sintassi

I temi di sintassi (come Monokai Stone, Tokyo Night, Solarized) vengono installati tramite uno script che converte la relativa tavolozza nella directory dei temi di Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# quindi:
/theme Tokyo Night
```

Il repository Bearded Theme Ports include oltre 50 varianti Bearded — Solarized, Tokyo Night, Monokai Stone e molti altri.

## Gestione dei temi con strumenti CLI

Due strumenti semplificano notevolmente la gestione dei temi CLI:

- **Codex Themes CLI** (`ychampion/codex-themes`) — CLI scritto in Go: convalida, anteprima, applica, annulla e esporta tavolozze di colori compatibili con il terminale. Ideale se desideri che il tuo terminale e Codex CLI condividano la stessa tavolozza.
- **Codepilot** (`charzhu/codepilot`) — una distribuzione di Codex CLI con personalizzazione TUI integrata:

```bash
npm i -g @charzhu/codepilot
# quindi esegui /skin all’interno della TUI per scegliere un tema predefinito
```

Codepilot include 16 skin TUI integrate (colori di sfondo + superficie).

## Temi CLI popolari nell’indice

| Skin | Stile | Installazione |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Tavolozza classica per la sintassi | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Iconica tavolozza retrò | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Tokyo Night scura con tonalità blu | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Identità terminale calda e scura | `codex-theme apply amber-nocturne` |

## Risoluzione dei problemi

- **`/theme` indica che non sono stati installati temi** — esegui prima lo script di installazione, quindi riapri il prompt.
- **La tavolozza appare corrotta** — riavvia Codex CLI dopo aver applicato il tema; alcuni porting memorizzano nella cache i colori all’avvio.
- **Vuoi che il tuo terminale corrisponda** — usa l’opzione *export* di Codex Themes CLI per scrivere la stessa tavolozza nel profilo del tuo terminale.

Esplora tutti i temi [Mono & Terminal](/skins/category/mono-terminal/) oppure inizia con la [guida all’installazione](/blog/how-to-install-codex-skins/).
