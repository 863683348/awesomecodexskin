---
title: "Comment installer et utiliser la peau Codex Dream (étape par étape)"
description: "Installez le skin Codex Dream sur macOS et Windows, collez les préréglages de prompt, changez de skin instantanément et résolvez les problèmes courants de « non-application »."
pubDate: "2026-08-20"
updatedDate: "2026-08-20"
tags: ["dream-skin", "install", "guide"]
category: "guide"
relatedSkins: ["amber-nocturne", "blue-enchantress", "clear-glass", "cyber-neon"]
lang: "fr"
---

LES RÈGLES STRICTES :
1. Traduire toutes les phrases lisibles par un humain, les titres, le texte des tableaux et le texte des liens.
2. JAMAIS traduire : les blocs de code, le code en ligne, les chemins de fichiers, les commandes shell, les URLs, les noms de produits (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), les tokens numériques/version, ou les noms d'habillages.
3. Conserver la structure markdown identique : mêmes titres, listes, tableaux, gras/italique, citations, et destinations de liens. Un lien comme [Monokai Stone](/skins/monokai-stone/) conserve son URL /chemin/ inchangée ; seul le texte visible peut être traduit.
4. Conserver tout HTML/JSX tel quel.
5. Sortir UNIQUEMENT le corps traduit en markdown. Aucune introduction, aucun commentaire, aucune barre de code autour de la réponse.

Dream Skin est le moyen le plus rapide de changer l'apparence de Codex Desktop, et l'installation prend environ cinq minutes. Ce guide explique comment configurer Dream Skin sur macOS et Windows, comment appliquer des prompts prédéfinis, changer d'habillage, et résoudre les deux problèmes les plus courants.

## Ce dont vous avez besoin

- **Codex Desktop** installé (macOS 12+ ou Windows 10+)
- Environ 5 minutes
- Aucune licence payante — Dream Skin est gratuit et open source

## Étape 1 - Obtenir Dream Skin

Téléchargez la dernière version depuis le dépôt officiel **Fei-Away/Codex-Dream-Skin**. Vous pouvez soit :

1. Cloner le dépôt et l'exécuter à partir de la source, soit
2. Télécharger la version empaquetée pour votre plateforme depuis la page des Releases.

Si vous ne savez pas quelle version choisir, la version de build est la plus conviviale pour une utilisation quotidienne.

## Étape 2 - Lancer et confirmer qu'il est actif

Ouvrez Dream Skin et vérifiez qu'il est défini comme **applier actif** pour Codex. Vous devriez voir l'indicateur d'état du moteur passer à "connecté" ou "actif".

> Si Dream Skin et un autre moteur (comme [Codex Skin Manager](/blog/codex-skin-manager-guide/)) sont tous les deux installés, assurez-vous qu'un seul est défini comme applier principal — le dernier qui s'applique gagne, et une question silencieuse "pourquoi mon habillage ne change-t-il pas ?" est presque toujours cette confusion.

## Étape 3 - Appliquer un habillage avec un prompt

La boucle principale est copier-coller :

1. Ouvrez n'importe quelle page d'habillage dans l'[Index des habillages Codex](/skins/).
2. Copiez le **prompt d'installation** (la plupart des habillages en affichent un, par exemple *"appliquez le thème sombre Amber Nocturne — ambré chaud sur charbon profond pour le codage de nuit"*).
3. Coller-le dans Codex Desktop.
4. Dream Skin interprète le prompt et applique le preset correspondant — généralement instantanément, sans redémarrage.

Essayer [Amber Nocturne](/skins/amber-nocturne/) ou [Clear Glass](/skins/clear-glass/) de cette façon montre la boucle en moins d'une minute.

## Étape 4 - Changer ou restaurer le défaut

- **Changer d'habillage** : coller un nouveau prompt — Dream Skin remplace le preset actif.
- **Restaurer l'apparence par défaut** : utiliser le bouton "restaurer le défaut" du moteur pour revenir au thème original de Codex.

## Étape 5 - Gérer les presets que vous aimez

Lorsque vous trouvez un look à conserver, enregistrez le preset dans la liste des presets de Dream Skin. C'est là que vous remarquerez la faiblesse unique de Dream Skin — il est excellent pour appliquer, mais moins bon pour organiser une grande bibliothèque. Pour les collectionneurs sérieux, coupler avec un [gestionnaire en mode galerie](/blog/codex-skin-manager-guide/) est la solution courante.

## Dépannage

### "L'habillage n'est pas appliqué"

Vérifiez, dans l'ordre :

1. **Conflit de moteur** — un autre moteur est-il également défini comme applier actif ? Désactivez-le.
2. **Incompatibilité de version** — Dream Skin interprète les prompts ; un prompt légèrement différent peut aboutir à un preset différent. Copiez le prompt exact depuis la page de l'habillage.
3. **Redémarrage** — certains moteurs mettent en cache leur état de thème ; un redémarrage rapide de Codex le résout.

### "Je ne peux pas le désinstaller"

Consultez le guide dédié [Comment désinstaller Dream Skin](/blog/how-to-remove-dream-skin-codex/) pour une désinstallation propre sur les deux plateformes.

### "Les prompts s'appliquent mais ont un aspect différent de la prévisualisation"

C'est une variation d'interprétation, inhérente aux moteurs basés sur des prompts. Pour des résultats pixel par pixel, utilisez un moteur basé sur un fichier ou le gestionnaire déterministe [Skin Manager](/blog/codex-dream-skin-vs-skin-manager/).

## Liens connexes

- [Avis sur Dream Skin](/blog/codex-dream-skin-review/) — vaut-il le coup d'être installé ?
- [Alternatives à Dream Skin](/blog/codex-dream-skin-alternatives/) — six autres moteurs comparés
- [Comment installer des habillages Codex](/blog/how-to-install-codex-skins/) — toutes les méthodes d'installation via tous les moteurs
