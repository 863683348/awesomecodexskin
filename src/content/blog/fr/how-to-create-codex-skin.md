---
title: "Comment créer votre propre skin Codex (guide pour débutants)"
description: "Découvrez comment créer un skin Codex personnalisé : sélectionnez un moteur, choisissez des couleurs, rédigez un préréglage de thème et testez-le en direct. Un guide pratique pour les débutants, sans nécessité de coder."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["create", "custom", "beginner", "theme"]
category: "guide"
relatedSkins: ["clear-glass", "sakura-pink-dawn", "amber-dusk"]
lang: "fr"
---

Créer votre propre thème Codex est surprenamment accessible. La plupart des moteurs acceptent un thème défini par un petit ensemble de couleurs — arrière-plan, surface, texte, accent — exprimé sous forme d'une requête ou d'un fichier JSON. Vous n'avez pas besoin de modifier l'application Codex elle-même.

## Étape 1 : Choisissez un moteur

Votre format de thème dépend du moteur que vous utilisez :

- **Codex Dream Skin** — les thèmes sont des présélections ou des prompts d'agent. Le plus facile à commencer : décrivez le palette en une phrase.
- **Codex Skin Manager** — inclut un créateur de thèmes avec un sélecteur visuel.
- **ReTheme** — des thèmes signés et mis à jour ; idéal si vous souhaitez les partager publiquement.
- **Codex Themes (bureau)** — des fichiers `.codextheme` avec un centre de création à theme.codexguide.ai.

Pour ce guide, nous utiliserons l'approche par prompt (qui fonctionne avec Dream Skin).

## Étape 2 : Choisissez votre palette

Un thème se compose principalement de 4 à 6 couleurs :

| Rôle | Exemple (clair) | Exemple (sombre) |
|---|---|---|
| Arrière-plan | `#F5F7FA` | `#0A0A0B` |
| Surface (panneaux) | `#FFFFFF` | `#16161A` |
| Texte | `#1A1B26` | `#E4E4E7` |
| Accent | `#2DD4BF` | `#2DD4BF` |

Restez sur un seul accent. Trop d'accents est la première erreur des débutants.

## Étape 3 : Écrivez le thème sous forme de prompt

Un preset Dream Skin est simplement une phrase descriptive :

```text
Codex, appliquez un thème personnalisé — une palette d'ambre chaud avec des surfaces de charbon sombre,
des accents d'ambre doux et un texte crème clair. Calme, confortable, conçu pour des sessions de lecture longues.
```

Enregistrez-le en tant que preset dans le moteur, puis testez-le. Itérez sur les mots jusqu'à ce que le résultat corresponde à votre intention.

## Étape 4 : Testez sur du contenu réel

Ouvrez un écran chargé (longue code, nombreux panneaux) avant de prendre une décision. Les thèmes sombres ont bonne allure sur les captures d'écran mais échouent en pratique lorsqu'on a trop peu de contraste entre les panneaux. Vérifiez :

- La lisibilité de l'éditeur de code
- La séparation de la barre latérale / des panneaux
- La visibilité de l'accent sur les boutons par rapport aux liens

## Étape 5 : Partagez-le

Les moteurs comme ReTheme et Codex Skin Manager vous permettent d'exporter les thèmes. Vous pouvez soumettre votre thème à cet index via la page [Soumettre un thème](/submit/) — incluez une image de prévisualisation et un prompt d'installation afin que d'autres puissent l'utiliser en un clic.

## Points de départ prêts à l'emploi

Prenez des idées auprès de palettes éprouvées :

- [Clear Glass](/skins/clear-glass/) — surface claire transparente.
- [Sakura Pink Dawn](/skins/sakura-pink-dawn/) — pastel doux.
- [Amber Dusk](/skins/amber-dusk/) — preset programmé en ambre chaud.

Ou consultez l'[index complet](/skins/) pour plus d'inspiration. Et si vous bloquez sur les étapes d'installation, le [guide d'installation](/blog/how-to-install-codex-skins/) couvre toutes les méthodes.
