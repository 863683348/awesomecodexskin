---
title: "Comment installer les thèmes Codex (Bureau et CLI) : Le guide complet"
description: "Guide pas à pas pour installer les thèmes Codex Desktop et CLI — prompts copier-coller, moteurs de thèmes comme Dream Skin, thèmes en ligne de commande, et comment basculer ou désinstaller. Couvre macOS et Windows."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["install", "guide", "desktop", "cli", "themes"]
category: "guide"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
lang: "fr"
---

Les thèmes Codex vous permettent de redécorer OpenAI Codex Desktop et Codex CLI afin que l'environnement de travail corresponde à votre goût — un jeu de couleurs sombres pour les sessions nocturnes, une surface pastel pour la journée, ou un look néon juste pour le fun.

Ce guide couvre toutes les façons d'installer un thème Codex, du prompt d'installation en une seule étape jusqu'aux gestionnaires de thèmes CLI.

## La version courte

La plupart des thèmes Codex sur cet index s'installent de la même manière :

1. Choisissez un thème et ouvrez sa page détaillée.
2. Copiez le prompt d'installation (ou téléchargez le fichier de thème, pour les thèmes `.codedrobe-theme`).
3. Coller le prompt dans Codex Desktop ou exécuter la commande dans Codex CLI.
4. Le moteur de thème applique immédiatement la palette — aucun redémarrage n'est nécessaire sur la plupart des moteurs.

C'est tout. Les thèmes sont des configurations, pas du code, donc le changement est rapide et réversible.

## Méthode 1 : Installation par copier-coller (la plus rapide)

La plupart des thèmes Codex — notamment les présets de moteur provenant de [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin), le moteur d'injection open source — s'installent à partir d'un seul prompt naturel.

Sur la page détaillée de n'importe quel thème, la boîte **Prompt d'installation** contient une instruction prête à coller comme :

```text
Codex, appliquez le thème 'Clear Glass' clair — une surface sans distractions avec un effet vitreux pour mon espace de travail.
```

Copiez-le, ouvrez Codex et collez-le. Le moteur lit le prompt et applique la palette, les bordures et les couleurs d'accent définies dans le thème.

> **Conseil :** si le prompt applique un preset, le moteur le stocke afin que vous puissiez revenir au défaut ultérieurement avec un simple clic.

## Méthode 2 : Télécharger un fichier de thème (.codedrobe-theme)

Certains thèmes sont fournis sous forme d'un fichier `.codedrobe-theme` téléchargeable. Pour ceux-ci :

1. Cliquez sur **Télécharger .codedrobe-theme** sur la page du thème.
2. Enregistrez le fichier n'importe où.
3. Ouvrez-le depuis Codex Desktop — les moteurs pris en charge l'importent automatiquement.

Cette méthode est courante sur des galeries comme codexskins.org qui hébergent des fichiers de thèmes prêts à l'emploi.

## Méthode 3 : Installer un thème CLI avec une commande

Les thèmes CLI Codex utilisent un chemin d'installation différent. Les thèmes avec le format d'installation `tmtheme` (par exemple, les ports de thèmes Bearded) s'installent avec une seule commande :

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# puis dans Codex CLI :
/theme Tokyo Night
```

Des outils comme [Codex Themes CLI](https://github.com/ychampion/codex-themes) et [Codepilot](https://github.com/charzhu/codepilot) gèrent les thèmes CLI pour vous — valident, prévisualisent, appliquent, annulent et exportent des palettes de terminal correspondantes.

## Quels moteurs prennent en charge les thèmes ?

| Moteur | Plateformes | Style d'installation |
|---|---|---|
| Codex Dream Skin | macOS, Windows | Prompt / preset |
| Codex Skin Manager | macOS, Windows | Gestionnaire intégré |
| Codex Themes (desktop) | macOS | Import .codextheme |
| ReTheme | macOS, Windows | Thèmes communautaires signés |
| Codex Themes CLI | Multiplateforme | CLI `/theme` |
| Codepilot | Multiplateforme (npm) | TUI intégré `/skin` |

## Comment changer ou restaurer un thème

- **Moteurs de presets (Dream Skin etc.) :** le moteur conserve le preset par défaut — généralement un bouton "restaurer le défaut" vous ramène à votre apparence initiale.
- **CLI :** `/theme` liste les thèmes installés ; relancez la commande avec un autre nom pour changer.
- **Fichiers de thèmes :** réimportez un précédent `.codedrobe-theme` ou relancez le défaut du moteur.

## Thèmes populaires pour commencer

- [Gothic Void Expedition](/skins/gothic-void-expedition/) — le thème sombre par défaut intégré au moteur.
- [Clear Glass](/skins/clear-glass/) — une surface claire avec un effet vitreux pour la journée.
- [Monokai Stone](/skins/monokai-stone/) — la palette classique CLI.
- [Hatsune Miku](/skins/hatsune-miku/) — énergie bleu-vert de vocaloid.

Parcourez l'[index complet](/skins/) pour plus de 100 thèmes, ou lisez notre [tutoriel](/tutorial/) pour obtenir des détails sur la configuration au niveau du moteur.
