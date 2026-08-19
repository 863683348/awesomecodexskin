---
title: "Formati dei temi Codex a confronto: codedrobe vs codextheme vs tmtheme vs preset"
description: "Quattro formati di skin, quattro motori, un unico ecosistema. Quale formato è il più portabile, quale sta scomparendo e come convertire tra di essi quando necessario."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["formats", "ecosystem", "compatibility"]
category: "compare"
relatedSkins: ["monokai-stone", "solarized", "tokyo-night-ychampion", "vivid-purple-cli"]
lang: "it"
---

Il mondo delle skin Codex è giovane, il che significa che i formati sono ancora in fase di stabilizzazione. Attualmente circolano quattro formati, e non tutti sono compatibili tra loro. Comprenderli ti evita di scaricare un file che il tuo motore non riesce a leggere.

## I quattro formati

| Formato | Famiglia di motori | Meccanismo di caricamento | Portabilità |
|---|---|---|---|
| `.codedrobe-theme` | Gallerie in stile Codedrobe (codexskins.org) | Importazione file | Media — pochi motori lo supportano |
| `.codextheme` | Gestori desktop (Codex Themes per desktop) | Importazione file | Media |
| `tmtheme` | Porting per CLI (bearded, temi sintassi per terminale) | CLI `/theme` | Alta — identica a quella dei temi per editor |
| `preset` | Motori basati su prompt (Dream Skin) | Prompt in linguaggio naturale | Bassa — dipende dalla formulazione specifica del motore |

## `.codedrobe-theme` — lo standard delle gallerie

Utilizzato da gallerie come codexskins.org per distribuire file tema pronti all’uso. Se vedi la voce «Scarica .codedrobe-theme», è proprio questo il formato che stai ottenendo. Supportato da alcuni motori desktop; l’importazione richiede di solito un solo clic.

**Ideale per:** ottenere un tema curato e realizzato da designer, senza alcuna configurazione.
**Attenzione:** non è universale — verifica che il tuo motore supporti esattamente questa estensione.

## `.codextheme` — il formato per gestori desktop

Formato utilizzato dai gestori di temi desktop (in particolare Codex Themes per desktop). Strutturalmente simile a `.codedrobe-theme`, talvolta intercambiabile nella pratica, ma i motori non accettano sempre entrambi.

**Ideale per:** utenti desktop che dispongono già di un gestore installato.
**Attenzione:** sovrapposizione nei nomi con `.codedrobe-theme` — le estensioni appaiono simili, ma non sono garantite compatibili.

## `tmtheme` — il lavoro quotidiano per CLI

Formato originariamente concepito per temi terminali, adottato ora anche da Codex CLI (i porting Bearded presenti in questo indice ne sono l’esempio più chiaro). È lo stesso formato usato dai temi sintassi di TextMate e degli editor, quindi l’ecosistema è vastissimo: qualsiasi palette in formato tmtheme può essere integrata in Codex CLI tramite uno script di porting.

**Ideale per:** utenti CLI che desiderano accedere al più ampio catalogo possibile di palette.
**Attenzione:** i file tmtheme definiscono i colori della sintassi, non necessariamente l’intera interfaccia utente — potresti aver bisogno di configurazioni aggiuntive per pannelli e elementi cromati (chrome).

## `preset` — il formato basato su prompt

Non si tratta affatto di un file: è una descrizione in linguaggio naturale interpretata da un motore basato su prompt, come Dream Skin. Ad esempio, «Un tema notturno in tonalità ambrate calde, bassa saturazione» è un preset. Risiede nell’elenco di preset memorizzati all’interno del motore.

**Ideale per:** velocità e iterazione rapida.
**Attenzione:** zero portabilità. Un preset ha significato solo all’interno del motore che ne comprende la formulazione specifica.

## Come convertire tra i formati

- **tmtheme ↔ preset:** non convertibile direttamente — uno è una specifica strutturata, l’altro una descrizione testuale. Riscrivi la descrizione partendo dalla palette.
- **tmtheme → .codextheme:** spesso fattibile con uno script semplice, dato che entrambi sono specifiche strutturate di colori. Molti porting CLI hanno avuto origine proprio così.
- **codedrobe ↔ codextheme:** a volte sostituibile direttamente; prova entrambe le estensioni se il tuo motore ne accetta almeno una.

Regola generale: **i formati strutturati (tmtheme, codedrobe, codextheme) sono più interoperabili rispetto ai formati testuali (preset).** Se stai costruendo una libreria di skin destinata a durare anni, privilegia i formati strutturati.

## FAQ veloce

**Quale formato è il «formato ufficiale» Codex?**  
Ancora nessuno. L’ecosistema sta decidendo in base all’uso reale: i porting CLI della famiglia tmtheme godono attualmente del maggior slancio, mentre i preset basati su prompt contano il maggior numero di utenti.

**Un formato alla fine prevarrà sugli altri?**  
Probabilmente uno strutturato — è quanto successo anche per i temi degli editor. Tuttavia, i prompt non scompariranno: soddisfano perfettamente l’esigenza di «provare subito».

**Cosa devo scaricare per massimizzare la compatibilità?**  
Temi naturali per CLI come [Monokai Stone](/skins/monokai-stone/) o [Solarized](/skins/solarized/), forniti come specifiche tmtheme/CLI — questi possono essere importati nel più ampio insieme di strumenti. Anche [Tokyo Night](/skins/tokyo-night-ychampion/) e [Vivid Purple (CLI)](/skins/vivid-purple-cli/) sono scelte solide e ampiamente portate.

**Come faccio a sapere quale formato usa una skin?**  
Ogni pagina dettagliata di una skin in questo indice indica esplicitamente il suo formato di installazione — è questo il segnale da osservare. Confrontalo con il tuo motore prima di procedere al download.

I formati rappresentano attrito, non funzionalità. Scegli formati strutturati per la tua libreria permanente, ricorri ai prompt per l’esplorazione, e lascia che ogni pagina dettagliata di una skin ti indichi esattamente con quale formato hai a che fare. Esplora l’[indice delle skin](/skins/), oppure consulta il [confronto tra motori](/blog/codex-skin-engines-compared/) per scoprire quali software supportano ciascun formato.
