---
title: "Comment supprimer / désinstaller le thème Codex Dream"
description: "Désinstaller proprement le thème Codex Dream Skin et restaurer l'apparence par défaut de Codex sur macOS et Windows – supprimer les préréglages, réinitialiser le thème actif et effacer la configuration résiduelle."
pubDate: "2026-08-20"
updatedDate: "2026-08-20"
tags: ["dream-skin", "uninstall", "tips"]
category: "tips"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "solarized"]
lang: "fr"
---

Règles strictes :
1. Traduire toutes les parties textuelles lisibles par un humain, les titres, le texte des tableaux et les textes des liens.
2. NE JAMAIS traduire : les blocs de code, le code en ligne, les chemins de fichiers, les commandes en ligne de commande, les URLs, les noms de produits (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), les tokens numériques/version, ou les noms d'habillage visibles.
3. Conserver la structure markdown identique : mêmes titres, listes, tableaux, gras/italique, citations, et destinations de liens. Un lien comme [Monokai Stone](/skins/monokai-stone/) conserve son URL /chemin/ inchangée ; seul le texte visible peut être traduit.
4. Conserver tout HTML/JSX brut tel quel.
5. N'afficher QUE le corps du markdown traduit. Aucune introduction, aucun commentaire, aucune barre de code autour de la réponse.

Vous avez changé d'avis, ou vous passez à un autre moteur ? Supprimer Dream Skin de Codex est simple, mais il est important de le faire correctement — une désinstallation incomplète laisse le thème actif et peut entraver silencieusement votre prochain moteur. Voici comment le supprimer correctement sur macOS et Windows.

## Avant de commencer : réinitialisez d'abord le thème actif

Dream Skin peut actuellement être l'**appliqueur actif** de votre thème Codex. Désinstaller l'application alors qu'elle est toujours active peut laisser un thème personnalisé bloqué sans moyen de le gérer.

1. Ouvrez Dream Skin.
2. Utilisez **Restaurer par défaut** pour ramener Codex à son apparence originale.
3. Confirmez que le thème par défaut s'affiche dans Codex avant de continuer.

Si vous passez à un autre moteur comme [Codex Skin Manager](/blog/codex-skin-manager-guide/), installez-le d'abord, définissez-le comme nouvel appliqueur actif, puis désinstallez Dream Skin — cela évite tout moment où aucun moteur ne peut changer le thème.

## Suppression sur macOS

1. Fermez Dream Skin et Codex Desktop.
2. Glissez l'application Dream Skin depuis Applications vers la Corbeille.
3. Videz le dossier de configuration restant (s'il est présent) : `~/Library/Application Support/Codex-Dream-Skin/` (ou le nom exact du dossier de votre installation).
4. Videz la Corbeille.

## Suppression sur Windows

1. Fermez Dream Skin et Codex Desktop.
2. Désinstallez via **Paramètres → Applications → Applications installées** (ou le Panneau de configuration "Ajouter ou supprimer des programmes").
3. Supprimez le dossier de données restant s'il existe encore : `%APPDATA%\Codex-Dream-Skin` (ou l'endroit où votre installation a stocké les paramètres).
4. Si vous avez installé à partir de la source ou via un gestionnaire de paquets, exécutez la commande de désinstallation correspondante.

## Vérifiez qu'il ne reste rien

Après la désinstallation, vérifiez :

- Codex affiche le **thème par défaut** (il devrait, si vous avez réinitialisé le thème actif auparavant).
- Aucun processus Dream Skin ne s'exécute (vérifiez dans le Moniteur d'activité / Gestionnaire des tâches).
- Aucun autre moteur ne se bat pour être l'appliqueur — si vous avez installé un autre moteur, assurez-vous qu'il est actif.

## Passer à un autre moteur ?

La plupart des gens désinstallent Dream Skin pour passer à quelque chose d'autre. Les deux chemins courants sont :

- **Vers une interface graphique :** [Guide de Codex Skin Manager](/blog/codex-skin-manager-guide/)
- **Vers un thémage en ligne de commande :** le [comparatif des moteurs](/blog/codex-skin-engines-compared/) couvre les options en ligne de commande comme Codex Themes CLI et Codepilot

Et si vous voulez simplement un autre *habillage* plutôt qu'un autre *moteur*, consultez l'[index des habillages](/skins/) — changer d'habillage est toujours plus rapide que de changer de moteur.

## FAQ rapide

**La désinstallation de Dream Skin supprimera-t-elle mon habillage appliqué ?**
Si vous avez d'abord réinitialisé vers le thème par défaut, non — Codex revient à son thème intégré. Les présélections personnalisées stockées par Dream Skin sont supprimées avec l'application.

**Puis-je le réinstaller plus tard ?**
Oui, Dream Skin est gratuit et open source ; réinstallez-le depuis le dépôt officiel et les invites de vos pages d'habillage fonctionnent toujours.

**La suppression de Dream Skin affecte-t-elle les autres moteurs ?**
Non, mais installez uniquement un seul appliqueur actif à la fois pour éviter le conflit du dernier gagnant.
