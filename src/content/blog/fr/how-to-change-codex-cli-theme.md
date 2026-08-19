---
title: "Comment changer le thème dans Codex CLI : /theme et palettes de terminal"
description: "Guide pas à pas pour changer le thème dans Codex CLI — la commande /theme, l'installation des palettes de syntaxe comme Tokyo Night et Monokai Stone, et l'adaptation à votre terminal."
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "fr"
---

MODÈLES DE THÈMES STRICTS :
1. Traduire toutes les phrases lisibles par un humain, les titres, le texte des tableaux et le texte des liens.
2. JAMAIS traduire : les blocs de code, le code en ligne, les chemins de fichiers, les commandes shell, les URLs, les noms de produits (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), les jetons numériques/version, ou les noms d'affichage de thèmes.
3. Conserver la structure markdown identique : mêmes titres, listes, tableaux, gras/italique, citations, et destinations de lien. Un lien comme [Monokai Stone](/skins/monokai-stone/) conserve son URL /chemin/ inchangée ; seul le texte visible peut être traduit.
4. Conserver exactement les HTML/JSX bruts.
5. Sortie SEULEMENT le corps du markdown traduit. Aucune introduction, aucun commentaire, aucune barre de code autour de la réponse.

Changer le thème dans Codex CLI est un processus différent de celui de Codex Desktop. Au lieu de l'interface visuelle, un thème Codex CLI échange la **palette de couleurs du terminal** - fond, premier plan et couleurs de syntaxe - afin que votre invite, vos complétions automatiques et vos sorties restent lisibles dans le shell.

Voici le workflow complet, du commutateur à une seule commande `/theme` à l'installation de nouvelles palettes.

## La méthode la plus rapide : /theme

Codex CLI dispose d'une commande de thème intégrée. Ouvrez une invite et tapez :

```bash
/theme
```

Cela liste tous les thèmes actuellement installés. Appuyez sur les touches fléchées (ou tapez le nom) pour appliquer instantanément l'un d'eux - sans redémarrage requis. Si vous avez installé un thème de syntaxe comme Tokyo Night, il apparaît dans cette liste sous son nom exact :

```bash
/theme Tokyo Night
```

## Installez d'abord une nouvelle palette

`/theme` ne montre que les thèmes que vous avez installés. Les palettes de syntaxe (Tokyo Night, Monokai Stone, Solarized) s'installent à partir d'un script qui transfère la palette dans le répertoire de thèmes de Codex CLI :

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# puis listez et appliquez :
/theme
```

Le dépôt Bearded Theme Ports propose plus de 50 variantes - Solarized, Tokyo Night, Monokai Stone et bien d'autres - vous permettant de tester plusieurs palettes en quelques secondes.

## Utilisez un gestionnaire de thèmes pour l'annulation et la synchronisation du terminal

Si vous changez souvent de thèmes, un gestionnaire CLI élimine les incertitudes :

- **Codex Themes CLI** (`ychampion/codex-themes`) — CLI Go qui peut **valider, prévisualiser, appliquer, annuler et exporter** une palette correspondante vers votre profil de terminal. Appliquez avec `codex-theme apply <nom>` ; revenez en arrière avec une seule commande.
- **Codepilot** (`charzhu/codepilot`) — une distribution Codex CLI avec un TUI intégré :

```bash
npm i -g @charzhu/codepilot
# exécutez /skin à l'intérieur du TUI pour choisir l'une des 16 peau intégrées
```

## Corréléz votre terminal et votre éditeur

Une palette a meilleure allure lorsqu'elle est partagée entre le terminal, le CLI et l'éditeur. Avec Codex Themes CLI, vous exportez les mêmes couleurs vers votre profil de terminal, donc le shell et Codex CLI correspondent après une seule application. Associez-le à un thème d'éditeur porté (par exemple, Tokyo Night dans VS Code) pour un espace de travail cohérent.

## Référence rapide : palettes CLI populaires

| Peau | Style | Appliquer |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | Palette classique de syntaxe | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | Noir bleu, faible éblouissement | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | Palette rétro iconique | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | Identité de terminal sombre chaude | `codex-theme apply amber-nocturne-cli` |

## Dépannage

- **Le thème n'apparaît pas dans `/theme`** — exécutez d'abord le script d'installation, puis rouvrez l'invite.
- **Les couleurs semblent incorrectes après le changement** — redémarrez Codex CLI ; certaines ports stockent en cache les couleurs au démarrage.
- **Souhaitez-vous la même palette dans le shell** — utilisez l'export de Codex Themes CLI pour écrire la palette dans votre profil de terminal.

Parcourir toutes les [peaux Mono & Terminal](/skins/category/mono-terminal/), ou lire le [guide complet des thèmes CLI](/blog/codex-cli-themes-guide/) pour la vision complète.
