---
title: "Formats de thèmes Codex comparés : codedrobe vs codextheme vs tmtheme vs preset"
description: "Quatre formats de thème, quatre moteurs, un seul écosystème. Quel format est le plus portable, lequel est en voie de disparition, et comment convertir entre eux lorsque nécessaire."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["formats", "ecosystem", "compatibility"]
category: "compare"
relatedSkins: ["monokai-stone", "solarized", "tokyo-night-ychampion", "vivid-purple-cli"]
lang: "fr"
---

Le monde des skins Codex est encore jeune, ce qui signifie que les formats ne sont pas encore stabilisés. Actuellement, quatre formats circulent, et ils ne sont pas tous compatibles entre eux. Comprendre leurs différences vous évite de télécharger un fichier que votre moteur ne saura pas interpréter.

## Les quatre formats

| Format | Famille de moteurs | Mécanisme de chargement | Portabilité |
|---|---|---|---|
| `.codedrobe-theme` | Galeries au style Codedrobe (codexskins.org) | Importation de fichier | Moyenne — quelques moteurs le prennent en charge |
| `.codextheme` | Gestionnaires de skins pour bureau (Codex Themes desktop) | Importation de fichier | Moyenne |
| `tmtheme` | Ports thématiques pour CLI (bearded, thèmes syntaxiques pour terminal) | CLI via `/theme` | Élevée — identique aux thèmes d’éditeurs |
| `preset` | Moteurs basés sur les invites (Dream Skin) | Invite en langage naturel | Faible — formulation spécifique à chaque moteur |

## `.codedrobe-theme` — le format standard des galeries

Utilisé par des galeries comme codexskins.org pour distribuer des fichiers de thème prêts à l’emploi. Si vous voyez « Télécharger .codedrobe-theme », c’est ce format que vous obtenez. Pris en charge par quelques moteurs bureautiques ; l’importation se fait généralement en un seul clic.

**Idéal pour :** obtenir un thème soigné, conçu par un créateur, sans aucune configuration.
**À surveiller :** ce format n’est pas universel — vérifiez que votre moteur accepte bien cette extension exacte.

## `.codextheme` — le format des gestionnaires bureautiques

Format utilisé par les gestionnaires de thèmes bureautiques (notamment Codex Themes pour bureau). Structurellement similaire à `.codedrobe-theme`, parfois interchangeable en pratique, mais les moteurs n’acceptent pas toujours les deux formats indifféremment.

**Idéal pour :** les utilisateurs de bureau disposant d’un gestionnaire installé.
**À surveiller :** chevauchement nominal avec `.codedrobe-theme` — les extensions se ressemblent, mais leur compatibilité n’est pas garantie.

## `tmtheme` — le format robuste pour CLI

Format de thème terminal adapté à Codex CLI (les ports Bearded répertoriés ici constituent l’exemple le plus clair). Il s’agit de la même famille de formats que les thèmes syntaxiques TextMate/éditeurs, donc l’écosystème est très vaste — toute palette au format tmtheme peut être intégrée à Codex CLI à l’aide d’un script de portage.

**Idéal pour :** les utilisateurs CLI souhaitant disposer du plus large éventail de palettes disponibles.
**À surveiller :** les fichiers tmtheme définissent principalement les couleurs syntaxiques, pas nécessairement l’intégralité de l’interface utilisateur — une configuration supplémentaire peut être requise pour les panneaux et les éléments chromes.

## `preset` — le format fondé sur les invites

Il ne s’agit pas d’un fichier : il s’agit d’une description en langage naturel interprétée par un moteur basé sur les invites, tel que Dream Skin. Par exemple, « Un thème nocturne aux teintes ambrées chaudes, faible saturation » constitue un preset. Celui-ci réside dans la liste des presets stockés au sein du moteur.

**Idéal pour :** rapidité et itération.
**À surveiller :** zéro portabilité. Un preset n’a de sens que dans le moteur capable d’interpréter précisément cette formulation.

## Comment convertir d’un format à un autre

- **tmtheme ↔ preset :** conversion impossible directement — l’un est une spécification technique, l’autre une description textuelle. Reformulez la description à partir de la palette.
- **tmtheme → .codextheme :** souvent réalisable à l’aide d’un petit script, car les deux formats reposent sur des spécifications structurées de couleurs. De nombreux ports CLI ont débuté ainsi.
- **codedrobe ↔ codextheme :** parfois interchangeables sans modification ; testez les deux extensions si votre moteur en accepte plusieurs.

Règle générale : **les formats structurés (tmtheme, codedrobe, codextheme) sont plus interopérables que les formats textuels (preset).** Si vous construisez une bibliothèque de skins destinée à durer plusieurs années, privilégiez les formats structurés.

## FAQ rapide

**Quel format est le « format officiel » Codex ?**  
Il n’en existe pas encore un. L’écosystème tranchera progressivement selon l’usage ; les ports CLI de la famille tmtheme bénéficient actuellement du plus fort élan, tandis que les presets basés sur les invites comptent le plus grand nombre d’utilisateurs.

**Un format finira-t-il par s’imposer ?**  
Probablement un format structuré — c’est ainsi que les thèmes d’éditeurs se sont standardisés. Toutefois, les invites ne disparaîtront pas : elles répondent parfaitement au besoin d’« essayer rapidement ».

**Quel format dois-je télécharger pour une compatibilité maximale ?**  
Privilégiez les thèmes natifs CLI comme [Monokai Stone](/skins/monokai-stone/) ou [Solarized](/skins/solarized/), fournis au format tmtheme/CLI — ils s’importent dans le plus grand nombre d’outils. [Tokyo Night](/skins/tokyo-night-ychampion/) et [Vivid Purple (CLI)](/skins/vivid-purple-cli/) sont également des choix solides, largement portés.

**Comment savoir quel format utilise un skin ?**  
Chaque page détaillée d’un skin dans cet index indique son format d’installation — c’est là qu’il faut regarder. Vérifiez sa compatibilité avec votre moteur avant tout téléchargement.

Les formats représentent une friction, non une fonctionnalité. Optez pour les formats structurés dans votre bibliothèque permanente, utilisez les invites pour l’exploration, et laissez chaque page détaillée de skin vous indiquer le format concerné. Parcourez l’[index des skins](/skins/), ou consultez la [comparaison des moteurs](/blog/codex-skin-engines-compared/) pour identifier les logiciels capables de lire chaque format.
