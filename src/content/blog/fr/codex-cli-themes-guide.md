---
title: "Thèmes Codex CLI : Comment utiliser /theme et les thèmes de terminal"
description: "Tout sur les thèmes Codex CLI : installer des thèmes de syntaxe comme Tokyo Night, Monokai Stone et Solarized, utiliser la commande /theme, et gérer les palettes avec des outils en ligne de commande."
pubDate: "2026-08-14"
updatedDate: "2026-08-24"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
faq:
  - q: "Qu'est-ce qu'un thème Codex CLI ?"
    a: "Un thème Codex CLI est une palette de couleurs pour terminal — fond, premier plan et couleurs de syntaxe — qui maintient votre invite et vos sorties lisibles. Contrairement à Codex Desktop, CLI n'a pas de chrome visuel ; les thèmes ne modifient que les couleurs."
  - q: "Comment appliquer un thème dans Codex CLI ?"
    a: "Exécutez la commande /theme intégrée dans le CLI Codex pour lister les thèmes installés, puis sélectionnez-en un pour l'appliquer immédiatement."
  - q: "Comment installer des thèmes syntaxiques comme Tokyo Night ou Monokai Stone ?"
    a: "Installez un script de port de thème (par exemple, l'installeur Bearded Theme Ports), puis exécutez /theme Tokyo Night (ou /theme Monokai Stone) pour l'appliquer."
  - q: "Pourquoi /theme ne montre-t-il aucun thème ?"
    a: "Vous n'avez pas encore installé un thème. Exécutez d'abord le script d'installation, puis rouvrez l'invite de commande Codex CLI — /theme listera les thèmes installés."
  - q: "Peut-on que le palette de mon terminal corresponde à mon thème Codex CLI ?"
    a: "Oui — Themes Codex CLI (ychampion/codex-thèmes) peut exporter la même palette à votre profil de terminal afin que le terminal et le CLI Codex restent synchronisés."
lang: "fr"
---

LES RÈGLES STRICTES :
1. Traduisez toute prose lisible par un humain, les titres, le texte des tableaux et le texte des liens.
2. JAMAIS traduire : les blocs de code, le code en ligne, les chemins de fichiers, les commandes shell, les URLs, les noms de produits (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), les tokens numériques/version, ou les noms d'habillages visibles.
3. Gardez la structure markdown identique : mêmes titres, listes, tableaux, gras/italique, citations, et destinations de liens. Un lien comme [Monokai Stone](/skins/monokai-stone/) conserve son URL /chemin/ inchangée ; seul le texte visible peut être traduit.
4. Gardez tout HTML/JSX brut exactement tel quel.
5. Affichez UNIQUEMENT le corps du markdown traduit. Aucune introduction, aucun commentaire, aucune barre de code autour de la réponse.

Les thèmes Codex CLI modifient la **palette de couleurs du terminal** - fond, premier plan et couleurs de syntaxe - afin que votre invite et vos sorties restent lisibles dans le terminal. Vous les appliquez avec la commande intégrée `/theme` : exécutez `/theme` pour lister les thèmes installés, sélectionnez-en un, et il s'applique immédiatement. Contrairement à Codex Desktop, le CLI n'a pas de chrome visuel ; un thème est uniquement les couleurs que vous voyez.

## Démarrage rapide

1. Installez un port de thème (une seule fois) : `curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh`
2. Ouvrez Codex CLI et exécutez `/theme`.
3. Sélectionnez un thème (par exemple, `/theme Tokyo Night`) - il s'applique immédiatement.

## La commande /theme

Le moyen le plus rapide d'utiliser un thème CLI est la commande intégrée `/theme` :

```bash
# dans Codex CLI :
/theme
```

Cela liste les thèmes installés. Sélectionnez-en un pour l'appliquer immédiatement.

## Installation d'un thème de syntaxe

Les thèmes de syntaxe (comme Monokai Stone, Tokyo Night, Solarized) s'installent à partir d'un script qui transfère la palette dans le répertoire de thèmes de Codex CLI :

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# puis :
/theme Tokyo Night
```

Le dépôt Bearded Theme Ports propose plus de 50 variantes Bearded - Solarized, Tokyo Night, Monokai Stone et bien d'autres.

## Gestion des thèmes avec des outils CLI

Deux outils rendent la gestion des thèmes CLI simple :

- **Codex Themes CLI** (`ychampion/codex-themes`) - CLI Go : valider, prévisualiser, appliquer, annuler et exporter des palettes de terminaux correspondantes. Idéal si vous souhaitez que votre terminal et Codex CLI partagent une palette.
- **Codepilot** (`charzhu/codepilot`) - une distribution Codex CLI avec personnalisation TUI intégrée :

```bash
npm i -g @charzhu/codepilot
# puis exécutez /skin à l'intérieur du TUI pour choisir un thème intégré
```

Codepilot inclut 16 peaux TUI intégrées (couleurs de fond + surface).

## Thèmes CLI populaires dans l'index

| Peau | Style | Installation |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Palette classique de syntaxe | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Palette rétro iconique | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Tokyo Night bleu foncé | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Identité de terminal chaude et sombre | `codex-theme apply amber-nocturne` |

## Dépannage

- **`/theme` indique qu'aucun thème n'est installé** - exécutez d'abord le script d'installation, puis rouvrez la fenêtre de commande.
- **La palette semble incorrecte** - redémarrez Codex CLI après l'avoir appliqué ; certaines ports mettent en cache les couleurs au démarrage.
- **Vous souhaitez que votre terminal soit identique** - utilisez l'export du Codex Themes CLI pour écrire la même palette dans votre profil de terminal.

Parcourir tous les [Thèmes Mono & Terminal](/skins/category/mono-terminal/) ou commencer avec le [guide d'installation](/blog/how-to-install-codex-skins/).
