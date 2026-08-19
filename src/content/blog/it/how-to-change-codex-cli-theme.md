---
title: "Come cambiare il tema in Codex CLI: /theme e tavolozze del terminale"
description: "Guida passo-passo per cambiare il tema in Codex CLI — il comando `/theme`, l’installazione di palette sintattiche come Tokyo Night e Monokai Stone e l’allineamento con il tuo terminale."
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "it"
---

Cambiare il tema in Codex CLI è un processo diverso rispetto a Codex Desktop. Invece di modificare l’interfaccia grafica, un tema per Codex CLI sostituisce la **tavolozza dei colori del terminale** — sfondo, primo piano e colori della sintassi — in modo che prompt, autocompletamenti e output rimangano leggibili nella shell.

Di seguito è riportato l’intero flusso operativo, dal comando rapido `/theme` fino all’installazione di nuove tavolozze.

## Il metodo più veloce: `/theme`

Codex CLI include un comando integrato per i temi. Apri un prompt e digita:

```bash
/theme
```

Questo elenca tutti i temi attualmente installati. Usa i tasti freccia (o digita il nome esatto) per applicarne uno istantaneamente — non è necessario riavviare l’applicazione. Se hai installato un tema sintattico come Tokyo Night, apparirà in questo elenco con il suo nome esatto:

```bash
/theme Tokyo Night
```

## Installa prima una nuova tavolozza

Il comando `/theme` mostra soltanto i temi già installati. Le tavolozze sintattiche (Tokyo Night, Monokai Stone, Solarized) vengono installate tramite uno script che importa la tavolozza nella cartella temi di Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# quindi elenca e applica:
/theme
```

Il repository Bearded Theme Ports contiene oltre 50 varianti — tra cui Solarized, Tokyo Night, Monokai Stone e molte altre — permettendoti di provare diverse tavolozze in pochi secondi.

## Usa un gestore temi per annullare le modifiche e sincronizzare il terminale

Se cambi spesso tema, un gestore CLI elimina ogni incertezza:

- **Codex Themes CLI** (`ychampion/codex-themes`) — CLI scritta in Go che può **convalidare, anteprimare, applicare, annullare e esportare** una tavolozza corrispondente nel profilo del tuo terminale. Applica un tema con `codex-theme apply <nome>`; torna indietro con un singolo comando.
- **Codepilot** (`charzhu/codepilot`) — una distribuzione di Codex CLI dotata di un’interfaccia TUI integrata:

```bash
npm i -g @charzhu/codepilot
# esegui /skin all’interno della TUI per scegliere uno dei 16 skin predefiniti
```

## Allinea terminale ed editor

Una tavolozza appare al meglio quando terminale, CLI ed editor la condividono. Con Codex Themes CLI puoi esportare gli stessi colori nel profilo del tuo terminale, così che shell e Codex CLI risultino coerenti dopo una singola applicazione. Abbinarlo a un tema editor portato (ad esempio Tokyo Night in VS Code) garantisce un ambiente di lavoro uniforme.

## Riferimento rapido: tavolozze CLI popolari

| Skin | Stile | Applica |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | Tavolozza sintattica classica | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | Blu scuro, basso abbagliamento | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | Iconica tavolozza retrò | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | Identità terminale calda e scura | `codex-theme apply amber-nocturne-cli` |

## Risoluzione dei problemi

- **Il tema non compare in `/theme`** — esegui prima lo script di installazione, quindi riapri il prompt.
- **I colori appaiono errati dopo il cambio** — riavvia Codex CLI; alcune versioni memorizzano nella cache i colori all’avvio.
- **Vuoi usare la stessa tavolozza anche nella shell** — usa la funzione *export* di Codex Themes CLI per scrivere la tavolozza nel profilo del tuo terminale.

Esplora tutti i [skin Mono & Terminal](/skins/category/mono-terminal/), oppure consulta la [guida completa ai temi CLI](/blog/codex-cli-themes-guide/) per avere una visione d’insieme.
