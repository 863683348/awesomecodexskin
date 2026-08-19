---
title: "Thèmes Codex CLI : Comment utiliser /theme et les thèmes de terminal"
description: "Tout sur les thèmes Codex CLI : installer des thèmes de syntaxe comme Tokyo Night, Monokai Stone et Solarized, utiliser la commande /theme, et gérer les palettes avec des outils en ligne de commande."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "fr"
---

LES RÈGLES STRICTES :
1. Traduisez tout le texte lisible par un humain, les titres, le texte des tableaux et les textes des liens.
2. NE traduisez JAMAIS : les blocs de code, le code en ligne, les chemins de fichiers, les commandes shell, les URLs, les noms de produits (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), les tokens numériques/version, ou les noms d'habits d'affichage.
3. Gardez la structure markdown identique : mêmes titres, listes, tableaux, gras/italique, citations, et destinations de liens. Un lien comme [Monokai Stone](/skins/monokai-stone/) garde son URL /chemin/ inchangée ; seul le texte visible peut être traduit.
4. Gardez tout HTML/JSX brut exactement tel quel.
5. Affichez UNIQUEMENT le corps du markdown traduit. Aucune introduction, aucun commentaire, aucune barre de code autour de la réponse.

Codex CLI n'utilise pas le même système de thèmes que Codex Desktop. Au lieu de chrome visuel, les thèmes CLI modifient la **palette de couleurs du terminal** - fond, premier plan et couleurs de syntaxe - afin que votre invite et vos sorties restent lisibles dans le terminal.

## La commande /theme

La façon la plus rapide d'utiliser un thème CLI est la commande intégrée /theme :

```bash
# dans Codex CLI :
/theme
```

Cela liste les thèmes installés. Choisissez-en un pour l'appliquer immédiatement.

## Installation d'un thème de syntaxe

Les thèmes de syntaxe (comme Monokai Stone, Tokyo Night, Solarized) s'installent à partir d'un script qui transfère la palette dans le répertoire des thèmes de Codex CLI :

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# puis :
/theme Tokyo Night
```

Le dépôt Bearded Theme Ports propose plus de 50 variantes Bearded - Solarized, Tokyo Night, Monokai Stone et bien d'autres.

## Gestion des thèmes avec des outils CLI

Deux outils rendent la gestion des thèmes CLI sans douleur :

- **Codex Themes CLI** (`ychampion/codex-themes`) — CLI Go : valider, prévisualiser, appliquer, annuler et exporter des palettes de terminaux correspondantes. Idéal si vous souhaitez que votre terminal et Codex CLI partagent une palette.
- **Codepilot** (`charzhu/codepilot`) — une distribution Codex CLI avec personnalisation TUI intégrée :

```bash
npm i -g @charzhu/codepilot
# puis exécutez /skin à l'intérieur du TUI pour choisir un thème intégré
```

Codepilot inclut 16 peaux TUI intégrées (couleurs de fond + surface).

## Thèmes CLI populaires dans l'index

| Peau | Style | Installation |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Palette de syntaxe classique | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Palette rétro iconique | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Tokyo Night bleu foncé | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Identité de terminal chaude et sombre | `codex-theme apply amber-nocturne` |

## Dépannage

- **`/theme` indique qu'aucun thème n'est installé** - exécutez d'abord le script d'installation, puis rouvrez la fenêtre de commande.
- **La palette a l'air incorrecte** - redémarrez Codex CLI après l'avoir appliqué ; certaines portes stockent les couleurs en cache au démarrage.
- **Vous souhaitez que votre terminal corresponde** - utilisez l'export du Codex Themes CLI pour écrire la même palette dans votre profil de terminal.

Parcourir tous les [Thèmes Mono & Terminal](/skins/category/mono-terminal/) ou commencer par le [guide d'installation](/blog/how-to-install-codex-skins/).
