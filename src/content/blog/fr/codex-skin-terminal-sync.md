---
title: "Synchronisez votre terminal et la peau Codex : Un même jeu de couleurs partout"
description: "Arrêtez de faire réadapter vos yeux chaque fois que vous changez de panneaux. Corrélez votre thème de terminal et votre skin Codex avec la même palette — voici comment, avec les thèmes CLI qui rendent cela facile."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["terminal", "sync", "palette", "cli"]
category: "tips"
relatedSkins: ["monokai-stone-cli", "solarized-cli", "tokyo-night-ychampion", "bearded-tokyo-night"]
lang: "fr"
---

DES RÈGLES STRICTES :
1. Traduire toute la prose lisible par un humain, les titres, le texte des tableaux et le texte des liens.
2. JAMAIS traduire : les blocs de code, le code en ligne, les chemins de fichiers, les commandes shell, les URLs, les noms de produits (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), les tokens numériques/version, ou les noms d'habillages.
3. Conserver la structure markdown identique : mêmes titres, listes, tableaux, gras/italique, citations, et destinations de liens. Un lien comme [Monokai Stone](/skins/monokai-stone/) conserve son URL /chemin/ inchangée ; seul le texte visible peut être traduit.
4. Conserver tout HTML/JSX tel quel.
5. Sortir UNIQUEMENT le corps traduit en markdown. Aucune introduction, aucun commentaire, aucune barre de code autour de la réponse.

J'utilisais autrefois un habillage sombre de Codex et une palette de terminal complètement différente côte à côte. Chaque fois que je passais d'un onglet à l'autre, mes yeux faisaient un petit double-tour — fond différent, couleur d'accent différente, ambiance différente. Cela semblait insignifiant, mais cela s'accumulait en une distraction légère toute la journée.

La solution est simple et efficace : **une seule palette, partout**. Même famille de teinte, luminance proche, même accent. Cette page vous montre comment obtenir votre terminal et votre habillage Codex sur la même palette, en commençant par les thèmes CLI dans cet index.

## Pourquoi synchroniser est mieux que choisir deux beaux thèmes

Votre système visuel préfère la continuité. Lorsque le terminal, l'éditeur et le navigateur partagent une tonalité de fond et une couleur d'accent, passer entre les fenêtres coûte presque rien à votre cerveau. Lorsqu'ils sont en conflit, chaque changement est une petite reorientation. Des dizaines de changements par jour, et vous avez gaspillé de la concentration pour rien.

Un deuxième avantage existe : les captures d'écran et les sessions de programmation en binôme ont un aspect cohérent. « Est-ce le même environnement ? » — oui, c'est justement l'objectif.

## Le chemin facile : les thèmes qui sont disponibles dans les deux mondes

Certaines palettes sont portées entre les outils, donc la synchronisation est presque gratuite :

- **[Tokyo Night](/skins/tokyo-night-ychampion/)** — initialement un thème VS Code, maintenant disponible dans cet index pour Codex, avec des variantes CLI comme [Tokyo Night (CLI)](/skins/bearded-tokyo-night/) provenant des ports Bearded. Même famille bleue nuit dans les deux cas.
- **[Monokai Stone](/skins/monokai-stone-cli/)** — la palette classique Monokai en variante grise pierre. Très portée, vous pouvez souvent trouver des configurations correspondantes pour votre émulateur de terminal.
- **[Solarized](/skins/solarized-cli/)** — conçu avec des valeurs de luminance CIELAB exactes pour qu'il s'affiche de manière cohérente entre les applications. La palette la plus "partout pareil" existante.

Choisissez-en un de ces thèmes et vous êtes à 80 % : appliquez l'habillage Codex, puis trouvez la même palette dans le sélecteur de thèmes de votre terminal.

## Le chemin manuel : faire correspondre manuellement en 4 étapes

Si votre habillage Codex préféré n'a pas de version pour le terminal, faites-le manuellement :

1. **Lire la palette de l'habillage.** Ouvrez la page détaillée de l'habillage — les valeurs de couleur y sont listées. Notez les hexadécimaux du fond, du premier plan et de l'accent.
2. **Créer un fichier de thème terminal.** La plupart des émulateurs (iTerm2, Windows Terminal, kitty, WezTerm) acceptent un thème basé sur des codes hexadécimaux simples. Mappez : fond → fond du terminal, premier plan → texte du terminal, accent → curseur/bright color du terminal.
3. **Maintenir une luminance proche.** Ne pas matcher exactement la teinte, mais permettre au terminal d'être plus clair ou plus sombre de plus de 20 % — vos yeux remarqueront le saut.
4. **Tester dans une session réelle.** Exécutez `ls`, un journal git, et `vim` pendant deux minutes. Si les bords du fond sont invisibles, vous êtes prêt.

## À quoi ressemble "assez proche"

Vous n'avez pas besoin d'une égalité hexadécimale parfaite. Même famille de fond, même température de premier plan, même accent — c'est suffisant. [Monokai Stone (CLI)](/skins/monokai-stone-cli/) vs un terminal sombre par défaut avec un fond gris chaud semble bien ensemble. L'objectif est la continuité, pas l'identité.

## FAQ rapide

**Ai-je besoin de synchroniser le navigateur aussi ?**
C'est utile, mais pas obligatoire. La combinaison terminal + éditeur couvre la majorité de vos changements de regard. Ajoutez les outils de développement du navigateur si vous êtes obsessionnel — les mêmes règles s'appliquent.

**Mon émulateur de terminal ne prend pas les thèmes personnalisés.**
Tous les modernes le font. Si vous êtes coincé avec une configuration entreprise verrouillée, choisissez l'habillage Codex qui correspond à la palette *par défaut* de votre terminal — la synchronisation inverse fonctionne aussi.

**Synchroniser va-t-il me ralentir ?**
Non. C'est une configuration unique. La palette est juste des couleurs ; elle n'affecte pas le démarrage ou les performances de Codex du tout.

Prenez [Tokyo Night](/skins/tokyo-night-ychampion/) ou [Monokai Stone](/skins/monokai-stone-cli/), appliquez la même palette à votre terminal, et offrez à vos yeux la pause qu'ils méritent. Index complet des habillages [ici](/skins/) et [guide d'installation](/blog/how-to-install-codex-skins/) si vous avez besoin des bases en premier lieu.
