---
title: "Formats de peau Codex comparés : codedrobe vs codextheme vs tmtheme vs preset"
description: "Quatre formats de peau, quatre moteurs, un écosystème. Quel format est le plus portable, lequel est en déclin, et comment convertir entre eux lorsque c'est nécessaire."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["formats", "ecosystem", "compatibility"]
category: "compare"
relatedSkins: ["monokai-stone", "solarized", "tokyo-night-ychampion", "vivid-purple-cli"]
lang: "fr"
---

Le monde des thèmes Codex est jeune, ce qui signifie que les formats sont encore en train de se stabiliser. Actuellement, quatre formats circulent, et ils ne sont pas tous compatibles. Comprendre ces formats vous évitera de télécharger un fichier que votre moteur ne peut pas lire.

## Les quatre formats

| Format | Famille du moteur | Mécanisme de chargement | Portabilité |
|---|---|---|---|
| `.codedrobe-theme` | Galeries de type Codedrobe (codexskins.org) | Import de fichier | Moyenne — quelques moteurs l'acceptent |
| `.codextheme` | Gestionnaires de bureau (Codex Themes desktop) | Import de fichier | Moyenne |
| `tmtheme` | Thèmes CLI (ports Bearded, thèmes syntaxiques pour terminaux) | CLI `/theme` | Élevée — identique aux thèmes d'éditeur |
| `preset` | Moteurs de prompts (Dream Skin) | Description en langage naturel | Faible — formulation spécifique au moteur |

## `.codedrobe-theme` — le standard des galeries

Utilisé par des galeries comme codexskins.org pour distribuer des fichiers de thèmes prêts à l'emploi. Si vous voyez "Télécharger .codedrobe-theme", c'est ce que vous obtenez. Pris en charge par quelques moteurs de bureau ; l'import est généralement d'un seul clic.

**Idéal pour :** obtenir un thème soigné, conçu par un designer, sans configuration.
**À surveiller :** ce format n'est pas universel — vérifiez que votre moteur lit cette extension exacte.

## `.codextheme` — le format du gestionnaire de bureau

Le format utilisé par les gestionnaires de thèmes de bureau (notamment Codex Themes pour le bureau). Structuralement similaire à `.codedrobe-theme`, parfois interchangeable en pratique, mais les moteurs n'acceptent pas toujours les deux.

**Idéal pour :** les utilisateurs de bureau ayant un gestionnaire installé.
**À surveiller :** une confusion possible avec `.codedrobe-theme` — les extensions ressemblent, mais elles ne sont pas garanties compatibles.

## `tmtheme` — le cheval de bataille des CLI

Format de thème terminal porté dans Codex CLI (les ports Bearded dans cet index en sont le meilleur exemple). C'est la même famille de formats que les thèmes syntaxiques de TextMate/éditeur, donc l'écosystème est important — tout palette de type tmtheme peut trouver son chemin dans Codex CLI grâce à un script de port.

**Idéal pour :** les utilisateurs de CLI souhaitant bénéficier de la plus grande palette possible.
**À surveiller :** les fichiers tmtheme définissent les couleurs de syntaxe, pas toujours toutes les surfaces de l'interface — vous aurez peut-être besoin de configurations supplémentaires pour les panneaux et la chrome.

## `preset` — le format de prompt

Pas un fichier du tout : une description en langage naturel interprétée par un moteur de prompt comme Dream Skin. "Un thème nocturne ambré chaud, faible saturation" est un preset. Il vit dans la liste des presets stockés dans le moteur.

**Idéal pour :** rapidité et itération.
**À surveiller :** aucune portabilité. Un preset n'a de sens que dans le moteur qui comprend cette formulation.

## Comment convertir entre les formats

- **tmtheme ↔ preset :** non convertible directement — l'un est une spécification, l'autre une description. Réécrivez la description à partir de la palette.
- **tmtheme → .codextheme :** souvent réalisable avec un petit script, car les deux sont des spécifications de couleur structurées. De nombreux ports CLI ont commencé ainsi.
- **codedrobe ↔ codextheme :** parfois interchangeables ; testez les deux extensions si votre moteur en accepte une ou l'autre.

Règle générale : **les formats structurés (tmtheme, codedrobe, codextheme) sont plus interopérables que les formats en prose (preset).** Si vous construisez une bibliothèque de thèmes que vous conserverez pendant des années, privilégiez les formats structurés.

## FAQ rapide

**Quel est le format « officiel » de Codex ?**
Il n'y en a pas encore. L'écosystème décide par l'usage ; les ports CLI de la famille tmtheme ont le plus de momentum, les presets de prompts ont le plus d'utilisateurs.

**Un format gagnera-t-il finalement ?**
Probablement un format structuré — c'est ainsi que les thèmes d'éditeurs se sont convergés. Mais les prompts ne disparaîtront pas ; ils servent le cas d'usage « essayer rapidement ».

**Quel format dois-je télécharger pour la meilleure compatibilité ?**
Des thèmes CLI naturels comme [Monokai Stone](/skins/monokai-stone/) ou [Solarized](/skins/solarized/) qui s'offrent en tant que tmtheme/CLI specs — ils s'importent dans l'ensemble le plus large d'outils. [Tokyo Night](/skins/tokyo-night-ychampion/) et [Vivid Purple (CLI)](/skins/vivid-purple-cli/) sont également de bons choix largement portés.

**Comment savoir quel format utilise un thème ?**
Chaque page détaillant un thème dans cet index indique son format d'installation — c'est le signe. Corrélez-le à votre moteur avant de télécharger.

Les formats sont des obstacles, pas des fonctionnalités. Choisissez les formats structurés pour votre bibliothèque permanente, les prompts pour l'exploration, et laissez chaque page détaillant un thème vous indiquer lequel vous traitez. Parcourez l'[index des thèmes](/skins/), ou consultez la [comparaison des moteurs](/blog/codex-skin-engines-compared/) pour le logiciel qui lit chaque format.
