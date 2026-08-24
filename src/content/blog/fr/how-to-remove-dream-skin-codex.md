---
title: "Comment supprimer / désinstaller le thème Codex Dream"
description: "Désinstaller proprement le thème Codex Dream Skin et restaurer l'apparence par défaut de Codex sur macOS et Windows – supprimer les préréglages, réinitialiser le thème actif et effacer la configuration résiduelle."
pubDate: "2026-08-20"
updatedDate: "2026-08-24"
tags: ["dream-skin", "uninstall", "tips"]
category: "tips"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "solarized"]
faq:
  - q: "Uninstallation de Dream Skin supprimera-t-elle ma peau appliquée ?"
    a: "Si vous réinitialisez d'abord aux paramètres par défaut, non — Codex revient à son thème intégré. Les présélections personnalisées stockées par Dream Skin sont supprimées avec l'application."
  - q: "Puis-je réinstaller la peau Codex Dream plus tard ?"
    a: "Oui, Dream Skin est gratuit et open source ; réinstallez-le depuis le dépôt officiel et les invites de vos pages de skin fonctionnent toujours."
  - q: "Supprimer Dream Skin affecte-t-il les autres moteurs ?"
    a: "Non, mais installez un seul appliquateur actif à la fois pour éviter le conflit last-one-wins."
lang: "fr"
---

RÉGLAGES STRICTS :
1. Traduire toutes les textes lisibles par un humain, titres, texte de tableaux et texte des liens.
2. JAMAIS traduire : blocs de code, code en ligne, chemins de fichiers, commandes shell, URLs, noms de produits (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), tokens numériques/version, ou noms d'habillages.
3. Conserver la structure markdown identique : mêmes titres, listes, tableaux, gras/italique, citations, et destinations de liens. Un lien comme [Monokai Stone](/skins/monokai-stone/) garde son URL /chemin/ inchangée ; seul le texte visible peut être traduit.
4. Conserver tout HTML/JSX tel quel.
5. Sortie UNIQUEMENT le corps traduit en markdown. Aucune introduction, aucun commentaire, aucune barre de code autour de la réponse.

Vous avez changé d'avis, ou vous passez à un autre moteur ? Supprimer Dream Skin de Codex est simple, mais il faut le faire *proprement* — une désinstallation incomplète laisse le thème actif et peut entrer en conflit silencieusement avec votre prochain moteur. Voici comment le supprimer correctement sur macOS et Windows.

## Avant de commencer : réinitialisez d'abord le thème actif

Dream Skin peut actuellement être l'**applier actif** de votre thème Codex. Désinstaller l'application alors qu'elle est toujours active peut laisser un thème personnalisé bloqué sans moyen de le gérer.

1. Ouvrez Dream Skin.
2. Utilisez **Restaurer par défaut** pour ramener Codex à son apparence originale.
3. Confirmez que le thème par défaut s'affiche dans Codex avant de continuer.

Si vous passez à un autre moteur comme [Codex Skin Manager](/blog/codex-skin-manager-guide/), installez-le d'abord, définissez-le comme nouvel applier actif, puis désinstallez Dream Skin — cela évite tout écart où aucun moteur ne peut changer le thème.

## Suppression sur macOS

1. Fermez Dream Skin et Codex Desktop.
2. Glissez l'application Dream Skin depuis Applications vers la Corbeille.
3. Videz le dossier de configuration résiduel (s'il existe) : `~/Library/Application Support/Codex-Dream-Skin/` (ou le nom exact du dossier de votre installation).
4. Videz la Corbeille.

## Suppression sur Windows

1. Fermez Dream Skin et Codex Desktop.
2. Désinstallez via **Paramètres → Applications → Applications installées** (ou le Panneau de configuration "Ajouter ou supprimer des programmes").
3. Supprimez le dossier de données résiduel s'il reste : `%APPDATA%\Codex-Dream-Skin` (ou là où votre installation a stocké les préférences).
4. Si vous avez installé à partir de la source ou via un gestionnaire de paquets, exécutez la commande de désinstallation correspondante.

## Vérifiez qu'il ne reste rien

Après la désinstallation, vérifiez :

- Codex affiche le **thème par défaut** (il devrait, si vous avez réinitialisé le thème actif en premier).
- Aucun processus Dream Skin n'est en cours d'exécution (vérifiez dans le Moniteur d'activité / Gestionnaire des tâches).
- Aucun autre moteur ne se bat pour être l'applier — si vous avez installé un autre moteur, assurez-vous qu'il est actif.

## Passer à un autre moteur ?

La plupart des gens désinstallent Dream Skin pour passer à quelque chose d'autre. Pas sûrquel moteur convient ? Le comparatif [Dream Skin vs Skin Manager](/blog/codex-dream-skin-vs-skin-manager/) compare les deux options de bureau. Deux chemins courants :

- **Vers une interface graphique de galerie :** [Guide de Codex Skin Manager](/blog/codex-skin-manager-guide/)
- **Vers un thémage en CLI :** la [comparaison des moteurs](/blog/codex-skin-engines-compared/) couvre les options en CLI comme Codex Themes CLI et Codepilot

Et si vous voulez simplement un autre *habillage* plutôt qu'un autre *moteur*, consultez l'[index des habillages](/skins/) — changer d'habillage est toujours plus rapide que changer de moteur.

## FAQ rapide

**La désinstallation de Dream Skin supprimera-t-elle mon habillage appliqué ?**
Si vous avez réinitialisé vers le thème par défaut en premier, non — Codex revient à son thème intégré. Les présélections personnalisées stockées par Dream Skin sont supprimées avec l'application.

**Puis-je le réinstaller plus tard ?**
Oui, Dream Skin est gratuit et open source ; réinstallez-le depuis le dépôt officiel et les invites de vos pages d'habillage fonctionnent encore.

**La suppression de Dream Skin affecte-t-elle les autres moteurs ?**
Non, mais installez uniquement un applier actif à la fois pour éviter le conflit du dernier gagnant.
