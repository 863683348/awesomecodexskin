---
title: "Comment changer le thème dans Codex CLI : `/theme` et palettes de terminal"
description: "Guide pas à pas pour changer le thème dans Codex CLI — la commande `/theme`, l’installation de palettes de syntaxe telles que Tokyo Night et Monokai Stone, et l’adaptation à votre terminal."
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "fr"
---

Changer le thème dans Codex CLI suit un processus différent de celui de Codex Desktop. Plutôt que de modifier une interface graphique, un thème Codex CLI remplace la **palette de couleurs du terminal** — arrière-plan, premier plan et couleurs syntaxiques — afin que votre invite, vos suggestions automatiques et vos sorties restent lisibles dans le shell.

Voici le flux de travail complet, depuis le commutateur `/theme` en une seule commande jusqu’à l’installation de nouvelles palettes.

## La méthode la plus rapide : `/theme`

Codex CLI intègre une commande thème intégrée. Ouvrez une invite et saisissez :

```bash
/theme
```

Cela affiche la liste de tous les thèmes actuellement installés. Utilisez les flèches (ou tapez directement le nom) pour appliquer immédiatement un thème — aucun redémarrage requis. Si vous avez installé un thème syntaxique comme Tokyo Night, il apparaît dans cette liste sous son nom exact :

```bash
/theme Tokyo Night
```

## Installer d’abord une nouvelle palette

La commande `/theme` n’affiche que les thèmes déjà installés. Les palettes syntaxiques (Tokyo Night, Monokai Stone, Solarized) s’installent via un script qui intègre la palette dans le répertoire des thèmes de Codex CLI :

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# puis listez et appliquez :
/theme
```

Le dépôt Bearded Theme Ports propose plus de 50 variantes — Solarized, Tokyo Night, Monokai Stone, etc. — ce qui vous permet de tester plusieurs palettes en quelques secondes.

## Utiliser un gestionnaire de thèmes pour annuler les modifications et synchroniser le terminal

Si vous changez fréquemment de thème, un gestionnaire CLI élimine toute incertitude :

- **Codex Themes CLI** (`ychampion/codex-themes`) — Une application CLI écrite en Go capable de **valider, prévisualiser, appliquer, annuler et exporter** une palette compatible vers votre profil terminal. Appliquez un thème avec `codex-theme apply <nom>` ; revenez au précédent en une seule commande.
- **Codepilot** (`charzhu/codepilot`) — une distribution Codex CLI dotée d’une interface TUI intégrée :

```bash
npm i -g @charzhu/codepilot
# exécutez /skin dans la TUI pour choisir l’un des 16 skins intégrés
```

## Harmoniser terminal et éditeur

Une palette donne le meilleur d’elle-même lorsque le terminal, l’interface CLI et l’éditeur la partagent. Avec Codex Themes CLI, vous exportez les mêmes couleurs vers votre profil terminal, garantissant ainsi une cohérence entre le shell et Codex CLI après une seule application. Associez-la à un thème éditeur adapté (par exemple Tokyo Night dans VS Code) pour obtenir un espace de travail entièrement homogène.

## Référence rapide : palettes CLI populaires

| Skin | Style | Application |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | Palette syntaxique classique | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | Bleu foncé, faible éblouissement | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | Palette rétro emblématique | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | Identité terminale chaude et sombre | `codex-theme apply amber-nocturne-cli` |

## Dépannage

- **Le thème n’apparaît pas dans `/theme`** — exécutez d’abord le script d’installation, puis rouvrez l’invite.
- **Les couleurs semblent incorrectes après le changement** — redémarrez Codex CLI ; certaines versions mettent en cache les couleurs au démarrage.
- **Vous souhaitez utiliser la même palette dans le shell** — utilisez la fonction d’exportation de Codex Themes CLI pour écrire la palette dans votre profil terminal.

Parcourez toutes les [skins Mono & Terminal](/skins/category/mono-terminal/), ou consultez le [guide complet des thèmes CLI](/blog/codex-cli-themes-guide/) pour une vue d’ensemble complète.
