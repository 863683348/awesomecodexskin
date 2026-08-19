---
title: "Formati degli Skin di Codex confrontati: codedrobe vs codextheme vs tmtheme vs preset"
description: "Quattro formati di tema, quattro motori, un ecosistema. Quale formato è più portatile, quale sta morendo e come convertirli tra loro quando necessario."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["formats", "ecosystem", "compatibility"]
category: "compare"
relatedSkins: ["monokai-stone", "solarized", "tokyo-night-ychampion", "vivid-purple-cli"]
lang: "it"
---

Il mondo delle temi Codex è giovane, il che significa che i formati non sono ancora definitivi. Al momento ci sono quattro formati in circolazione e non sono tutti compatibili. Comprendere questi formati ti salva dal scaricare un file che il tuo motore non può leggere.

## I quattro formati

| Formato | Famiglia del motore | Meccanismo di caricamento | Portabilità |
|---|---|---|---|
| `.codedrobe-theme` | Gallerie a stile Codedrobe (codexskins.org) | Importazione del file | Media — alcuni motori la leggono |
| `.codextheme` | Gestori desktop (Codex Themes desktop) | Importazione del file | Media |
| `tmtheme` | Temi CLI (portati da bearded, temi sintassi terminali) | CLI `/theme` | Alta — uguale dei temi dell'editor |
| `preset` | Motori di prompt (Dream Skin) | Prompt in linguaggio naturale | Bassa — formulazione specifica del motore |

## `.codedrobe-theme` — lo standard delle gallerie

Utilizzato da gallerie come codexskins.org per distribuire file di tema predefiniti. Se vedi "Scarica .codedrobe-theme", è questo che stai ottenendo. Supportato da pochi motori desktop; l'importazione è solitamente un clic.

**Adatto per:** ottenere un tema ben realizzato, creato da un designer, senza alcuna configurazione.
**Attenzione:** non è universale — verifica che il tuo motore legga questa estensione esatta.

## `.codextheme` — il formato per gestori desktop

Il formato utilizzato dai gestori di temi desktop (in particolare Codex Themes per desktop). Strutturalmente simile a `.codedrobe-theme`, a volte intercambiabile nella pratica, ma i motori non accettano sempre entrambi.

**Adatto per:** utenti desktop con un gestore installato.
**Attenzione:** sovrapposizione nei nomi con `.codedrobe-theme` — le estensioni sembrano simili ma non sono garantite compatibili.

## `tmtheme` — il lavoro del CLI

Formato per temi terminali portati in Codex CLI (le porte di Bearded in questo indice sono il chiaro esempio). È lo stesso gruppo di formati dei temi sintassi di TextMate/editor, quindi l'ecosistema è enorme — ogni palette con formato tmtheme può trovare la sua strada in Codex CLI con uno script di porta.

**Adatto per:** utenti CLI che vogliono il maggior numero possibile di palette.
**Attenzione:** i file tmtheme definiscono i colori della sintassi, non sempre l'intera superficie dell'interfaccia — potresti aver bisogno di una configurazione aggiuntiva per pannelli e chrome.

## `preset` — il formato dei prompt

Non è un file affatto: una descrizione in linguaggio naturale che un motore di prompt come Dream Skin interpreta. "Un tema notturno caldo e dorato, bassa saturazione" è un preset. Esiste nella lista dei preset memorizzati nel motore.

**Adatto per:** velocità e iterazione.
**Attenzione:** zero portabilità. Un preset ha senso solo all'interno del motore che comprende quella formulazione.

## Come convertire tra formati

- **tmtheme ↔ preset:** non direttamente convertibile — uno è una specifica, l'altro una descrizione. Riscrivi la descrizione dalla palette.
- **tmtheme → .codextheme:** spesso fattibile con uno script breve, poiché entrambi sono specifiche strutturate di colori. Molti portaggi CLI hanno iniziato così.
- **codedrobe ↔ codextheme:** a volte sostituibili; testa entrambe le estensioni se il tuo motore ne accetta una o l'altra.

La regola generale: **i formati strutturati (tmtheme, codedrobe, codextheme) sono più interoperabili dei formati in prosa (preset)**. Se stai costruendo una libreria di temi che intendi conservare per anni, preferisci i formati strutturati.

## Domande frequenti rapide

**Quale formato è il "ufficiale" di Codex?**
Non ce n'è uno ancora. L'ecosistema decide in base all'uso; i portaggi CLI della famiglia tmtheme hanno la maggiore spinta, i presets dei prompt hanno il maggior numero di utenti.

**Riuscirà un formato a vincere alla fine?**
Probabilmente un formato strutturato — è così che i temi degli editor si sono evoluti. Ma i prompt non scompariranno; servono per il caso d'uso "provalo velocemente".

**Cosa dovrei scaricare per la massima compatibilità?**
Temi naturali per CLI come [Monokai Stone](/skins/monokai-stone/) o [Solarized](/skins/solarized/) che vengono forniti come tmtheme/specifiche CLI — importano nei set di strumenti più vasti. [Tokyo Night](/skins/tokyo-night-ychampion/) e [Vivid Purple (CLI)](/skins/vivid-purple-cli/) sono anche scelte forti, ampiamente portate.

**Come faccio a sapere quale formato usa un tema?**
Ogni pagina dettagliata di un tema in questo indice elenca il suo formato di installazione — è il segnale. Abbinalo al tuo motore prima di scaricarlo.

I formati sono attriti, non funzionalità. Scegli formati strutturati per la tua libreria permanente, i prompt per l'esplorazione, e lascia che ogni pagina dettagliata di un tema ti dica quale stai usando. Sfoglia l'[indice dei temi](/skins/), oppure guarda la [confronto tra motori](/blog/codex-skin-engines-compared/) per il software che legge ciascun formato.
