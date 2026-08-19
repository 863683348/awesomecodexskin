---
title: "Come installare gli skin di Codex (Desktop e CLI): La guida completa"
description: "Guida passo passo per installare gli skin Codex Desktop e CLI — prompt copia-incolla, engine temi come Dream Skin, temi CLI e come cambiare o disinstallare. Copre macOS e Windows."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["install", "guide", "desktop", "cli", "themes"]
category: "guide"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
lang: "it"
---

I temi Codex ti permettono di personalizzare l'aspetto di Codex Desktop e Codex CLI in modo che l'ambiente di lavoro corrisponda al tuo gusto: un palette scura a bassa luminosità per le sessioni notturne, una superficie pastello per il giorno o un look neon per divertimento.

Questo tutorial copre ogni modo per installare un tema Codex, dalla finestra di installazione con un solo clic fino ai gestori di temi della CLI.

## La versione breve

La maggior parte dei temi su questo indice si installa nello stesso modo:

1. Scegli un tema e apri la sua pagina dettagliata.
2. Copia il prompt di installazione (o scarica il file del tema, per i temi .codedrobe-theme).
3. Incolla il prompt in Codex Desktop o esegui il comando nella Codex CLI.
4. Il motore del tema applica immediatamente la palette — non è necessario riavviare sulla maggior parte dei motori.

Ecco tutto. I temi sono configurazioni, non codice, quindi lo switch è veloce e reversibile.

## Metodo 1: Installazione con copia e incolla (più rapida)

La maggior parte dei temi Codex — specialmente gli preset del motore da [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin), il motore open-source per l'iniezione — si installano da un singolo prompt naturale.

Nella pagina dettagliata di qualsiasi tema, la sezione **Install prompt** contiene un'istruzione pronta per incollare come:

```text
Codex, applica il tema 'Clear Glass' chiaro — una superficie pulita e senza distrazione per il mio ambiente di lavoro.
```

Copia questa istruzione, apri Codex e incolla. Il motore legge il prompt e applica la palette, bordi e colori di accentuazione definiti nel tema.

> **Consiglio:** se il prompt applica un preset, il motore lo memorizza in modo da poter tornare al default con un clic.

## Metodo 2: Scarica un file del tema (.codedrobe-theme)

Alcuni temi vengono forniti come file .codedrobe-theme scaricabile. Per questi:

1. Clicca su **Download .codedrobe-theme** sulla pagina del tema.
2. Salva il file dove preferisci.
3. Apri il file da Codex Desktop — i motori supportati importano automaticamente il tema.

Questo metodo è comune sui siti come codexskins.org che ospitano file di tema predefiniti.

## Metodo 3: Installa un tema CLI con un comando

I temi Codex CLI utilizzano un percorso di installazione diverso. I temi con formato di installazione `tmtheme` (ad esempio i Bearded Theme Ports) si installano con un singolo comando:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# poi in Codex CLI esegui:
/theme Tokyo Night
```

Strumenti come [Codex Themes CLI](https://github.com/ychampion/codex-themes) e [Codepilot](https://github.com/charzhu/codepilot) gestiscono i temi CLI per te — validano, mostrano anteprime, applicano, annullano e esportano palette terminali compatibili.

## Quali motori supportano i temi?

| Motore | Piattaforme | Stile di installazione |
|---|---|---|
| Codex Dream Skin | macOS, Windows | Prompt / preset |
| Codex Skin Manager | macOS, Windows | Gestore integrato |
| Codex Themes (desktop) | macOS | Import .codextheme |
| ReTheme | macOS, Windows | Temi della comunità firmati |
| Codex Themes CLI | Cross-platform | CLI `/theme` |
| Codepilot | Cross-platform (npm) | TUI integrato `/skin` |

## Come cambiare o ripristinare un tema

- **Motori con preset (Dream Skin ecc.):** il motore conserva il preset predefinito — di solito un pulsante "Ripristina predefinito" torna alla tua impostazione originale.
- **CLI:** `/theme` elenca i temi installati; riesegui il comando con un altro nome per cambiare.
- **File del tema:** riconferma un precedente .codedrobe-theme o riesegui il predefinito del motore.

## Temi popolari per iniziare

- [Gothic Void Expedition](/skins/gothic-void-expedition/) — il tema predefinito scuro del motore.
- [Clear Glass](/skins/clear-glass/) — una superficie chiara con effetto vetro per il giorno.
- [Monokai Stone](/skins/monokai-stone/) — la classica palette CLI.
- [Hatsune Miku](/skins/hatsune-miku/) — energia vocaloid blu-verde.

Esplora l'[indice completo](/skins/) per oltre 100 temi in più, oppure leggi la nostra [guida](/tutorial/) per dettagli sull'impostazione a livello di motore.
