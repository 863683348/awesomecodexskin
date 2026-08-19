---
title: "Thèmes Codex CLI : Comment utiliser la commande /theme et les habillages de terminal"
description: "Tout sur les thèmes Codex CLI : installation de thèmes de coloration syntaxique tels que Tokyo Night, Monokai Stone et Solarized, utilisation de la commande `/theme` et gestion des palettes à l’aide d’outils CLI."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "fr"
---

Codex CLI n’utilise pas le même système de thèmes que Codex Desktop. Au lieu d’ajouter une surcouche visuelle, les thèmes CLI modifient la **palette de couleurs du terminal** — arrière-plan, premier plan et couleurs de syntaxe — afin que votre invite et vos sorties restent lisibles dans le terminal.

## La commande `/theme`

La méthode la plus rapide pour appliquer un thème CLI est la commande intégrée `/theme` :

```bash
# dans Codex CLI :
/theme
```

Celle-ci affiche la liste des thèmes installés. Sélectionnez-en un pour l’appliquer immédiatement.

## Installer un thème de syntaxe

Les thèmes de syntaxe (comme Monokai Stone, Tokyo Night ou Solarized) s’installent via un script qui intègre leur palette dans le répertoire des thèmes de Codex CLI :

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# puis :
/theme Tokyo Night
```

Le dépôt Bearded Theme Ports propose plus de 50 variantes Bearded — Solarized, Tokyo Night, Monokai Stone, et bien d’autres encore.

## Gérer les thèmes avec des outils CLI

Deux outils simplifient grandement la gestion des thèmes CLI :

- **Codex Themes CLI** (`ychampion/codex-themes`) — CLI écrit en Go : valider, prévisualiser, appliquer, annuler ou exporter des palettes terminales correspondantes. Idéal si vous souhaitez que votre terminal et Codex CLI partagent la même palette.
- **Codepilot** (`charzhu/codepilot`) — une distribution de Codex CLI dotée d’une personnalisation TUI intégrée :

```bash
npm i -g @charzhu/codepilot
# puis exécutez /skin depuis l’interface TUI pour choisir un thème intégré
```

Codepilot inclut 16 thèmes TUI intégrés (couleurs d’arrière-plan + surfaces).

## Thèmes CLI populaires dans l’index

| Thème | Style | Installation |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Palette classique de syntaxe | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Palette rétro emblématique | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Tokyo Night aux teintes bleu foncé | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Identité terminale chaude et sombre | `codex-theme apply amber-nocturne` |

## Dépannage

- **`/theme` indique « aucun thème installé »** — exécutez d’abord le script d’installation, puis rouvrez l’invite.
- **La palette semble incorrecte** — redémarrez Codex CLI après application ; certains ports mettent en cache les couleurs au démarrage.
- **Vous souhaitez synchroniser votre terminal** — utilisez l’export de Codex Themes CLI pour écrire cette même palette dans le profil de votre terminal.

Parcourez tous les [thèmes Mono & Terminal](/skins/category/mono-terminal/) ou commencez par le [guide d’installation](/blog/how-to-install-codex-skins/).
