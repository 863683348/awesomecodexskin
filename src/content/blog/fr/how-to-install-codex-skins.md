---
title: "Comment installer les thèmes Codex (version bureau et CLI) : le guide complet"
description: "Guide pas à pas pour installer les thèmes Codex Desktop et CLI — invites prêtes à copier-coller, moteurs de thèmes comme Dream Skin, thèmes CLI, ainsi que les méthodes pour basculer entre thèmes ou les désinstaller. Compatible avec macOS et Windows."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["install", "guide", "desktop", "cli", "themes"]
category: "guide"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
lang: "fr"
---

Les skins Codex vous permettent de personnaliser l’apparence d’OpenAI Codex Desktop et de Codex CLI afin que votre espace de travail corresponde à vos goûts : une palette sombre et peu lumineuse pour les sessions nocturnes, une surface pastel pour la journée, ou un style néon rien que pour le plaisir.

Ce guide présente toutes les méthodes d’installation d’un skin Codex, depuis l’invite d’installation en un seul clic jusqu’aux gestionnaires de thèmes en ligne de commande.

## Version abrégée

La plupart des skins répertoriés ici s’installent de la même manière :

1. Choisissez un skin et ouvrez sa page de détails.
2. Copiez l’invite d’installation (ou téléchargez le fichier de thème, pour les skins au format `.codedrobe-theme`).
3. Collez l’invite dans Codex Desktop ou exécutez la commande dans Codex CLI.
4. Le moteur de thèmes applique immédiatement la palette — aucun redémarrage n’est requis sur la plupart des moteurs.

C’est tout. Les skins sont des configurations, pas du code : leur activation est donc rapide et entièrement réversible.

## Méthode 1 : Installation par copier-coller de l’invite (la plus rapide)

La plupart des skins Codex — notamment les préréglages de moteur issus de [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin), le moteur open-source d’injection — s’installent à partir d’une seule invite rédigée en langage naturel.

Sur la page de détails de n’importe quel skin, la zone **Invite d’installation** contient une instruction prête à être collée, par exemple :

```text
Codex, applique le thème clair « Clear Glass » — une surface vitrée épurée et peu distrayante pour mon espace de travail.
```

Copiez-la, ouvrez Codex et collez-la. Le moteur analyse l’invite et applique la palette, les bordures et les couleurs d’accent définies dans le thème.

> **Astuce :** si l’invite applique un préréglage, le moteur le conserve en mémoire, ce qui vous permet de revenir ultérieurement au thème par défaut en un seul clic.

## Méthode 2 : Téléchargement d’un fichier de thème (`.codedrobe-theme`)

Certains skins sont fournis sous forme de fichier `.codedrobe-theme` téléchargeable. Pour ceux-ci :

1. Cliquez sur **Télécharger .codedrobe-theme** sur la page du skin.
2. Enregistrez le fichier à l’emplacement de votre choix.
3. Ouvrez-le depuis Codex Desktop — les moteurs compatibles importent automatiquement le thème.

Cette méthode est courante sur des galeries comme codexskins.org, qui hébergent des fichiers de thèmes prêts à l’emploi.

## Méthode 3 : Installation d’un thème CLI via une commande

Les thèmes destinés à Codex CLI suivent un processus d’installation différent. Les skins utilisant le format d’installation `tmtheme` (par exemple les ports du thème Bearded) s’installent avec une seule commande :

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# puis, dans Codex CLI, exécutez :
/theme Tokyo Night
```

Des outils tels que [Codex Themes CLI](https://github.com/ychampion/codex-themes) et [Codepilot](https://github.com/charzhu/codepilot) gèrent pour vous les thèmes CLI : ils valident, prévisualisent, appliquent, annulent ou exportent les palettes terminales correspondantes.

## Quels moteurs prennent en charge les skins ?

| Moteur | Plates-formes | Mode d’installation |
|---|---|---|
| Codex Dream Skin | macOS, Windows | Invite d’agent / préréglage |
| Codex Skin Manager | macOS, Windows | Gestionnaire intégré |
| Codex Themes (desktop) | macOS | Importation de fichiers `.codextheme` |
| ReTheme | macOS, Windows | Thèmes communautaires signés |
| Codex Themes CLI | Multiplateforme | Commande CLI `/theme` |
| Codepilot | Multiplateforme (npm) | Interface TUI intégrée `/skin` |

## Comment changer ou rétablir un skin

- **Moteurs basés sur des préréglages (Dream Skin, etc.) :** le moteur conserve le préréglage par défaut — généralement, un bouton « Restaurer la valeur par défaut » vous ramène à l’apparence initiale.
- **CLI :** la commande `/theme` liste les thèmes installés ; relancez-la avec un autre nom pour basculer vers un autre thème.
- **Fichiers de thème :** réimportez un ancien fichier `.codedrobe-theme`, ou réexécutez le préréglage par défaut du moteur.

## Premiers skins populaires à essayer

- [Gothic Void Expedition](/skins/gothic-void-expedition/) — le thème sombre intégré par défaut du moteur.
- [Clear Glass](/skins/clear-glass/) — une surface claire et vitrée, idéale pour la journée.
- [Monokai Stone](/skins/monokai-stone/) — la palette classique pour les interfaces CLI.
- [Hatsune Miku](/skins/hatsune-miku/) — une énergie bleu-vert inspirée de la vocaloid.

Parcourez l’[index complet](/skins/) pour découvrir plus de 100 autres skins, ou consultez notre [tutoriel](/tutorial/) pour obtenir des détails techniques sur la configuration des moteurs.
