---
title: "Synchronisez votre terminal et votre thème Codex : une seule palette partout"
description: "Évitez que vos yeux ne se réadaptent à chaque changement de volet. Associez le thème de votre terminal et la peau Codex avec la même palette — voici comment procéder, à l’aide des thèmes CLI qui simplifient la tâche."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["terminal", "sync", "palette", "cli"]
category: "tips"
relatedSkins: ["monokai-stone-cli", "solarized-cli", "tokyo-night-ychampion", "bearded-tokyo-night"]
lang: "fr"
---

J’utilisais auparavant une peau sombre Codex et une palette de terminal totalement différente, côte à côte. À chaque fois que je basculais entre les deux, mes yeux effectuaient un léger sursaut — fond différent, couleur d’accent différente, ambiance différente. Cela semblait anodin, mais cela s’accumule tout au long de la journée sous forme d’une distraction sournoise et persistante.

La solution est simple et efficace : **une seule palette, partout**. Même famille de teintes, luminance proche, même couleur d’accent. Cette page vous explique comment aligner votre terminal et votre peau Codex sur une même palette, en partant des thèmes CLI répertoriés dans cet index.

## Pourquoi synchroniser vaut mieux que choisir deux beaux thèmes

Votre système visuel privilégie la continuité. Lorsque le terminal, l’éditeur et le navigateur partagent tous la même teinte de fond et la même couleur d’accent, basculer d’un volet à l’autre ne coûte presque rien à votre cerveau. Lorsqu’ils entrent en conflit, chaque basculement exige une petite réorientation. Des dizaines de basculements par jour, et vous avez consacré une énergie réelle à… rien du tout.

Il y a un second avantage : les captures d’écran et les sessions de programmation en binôme apparaissent cohérentes. « Est-ce bien la même configuration ? » — oui, et c’est précisément le but recherché.

## La voie facile : des thèmes disponibles dans les deux environnements

Certaines palettes sont portées sur plusieurs outils, ce qui rend la synchronisation quasi immédiate :

- **[Tokyo Night](/skins/tokyo-night-ychampion/)** — initialement un thème VS Code, désormais disponible dans cet index pour Codex, avec des variantes CLI comme [Tokyo Night (CLI)](/skins/bearded-tokyo-night/) issues des ports Bearded. Même famille de bleus nocturnes dans les deux cas.
- **[Monokai Stone](/skins/monokai-stone-cli/)** — la palette classique Monokai revisitée en gris pierre. Très largement portée, ce qui signifie que vous trouverez souvent des configurations correspondantes pour votre émulateur de terminal.
- **[Solarized](/skins/solarized-cli/)** — conçu avec des valeurs de luminance CIELAB exactes afin d’assurer une restitution cohérente à travers toutes les applications. La palette la plus « identique partout » qui existe.

Choisissez l’un de ces thèmes et vous êtes à 80 % arrivé : appliquez la peau Codex, puis recherchez la même palette dans le sélecteur de thèmes de votre terminal.

## La voie manuelle : alignement à la main en 4 étapes

Si votre peau Codex préférée n’a pas de version terminale, faites-le manuellement :

1. **Lisez la palette de la peau.** Ouvrez la page détaillée de la peau — les valeurs de couleurs y sont listées. Notez les codes hexadécimaux du fond, du premier plan et de la couleur d’accent.
2. **Créez un fichier de thème terminal.** La plupart des émulateurs (iTerm2, Windows Terminal, kitty, WezTerm) acceptent un thème simple basé sur des codes hexadécimaux. Associez : fond → fond du terminal, premier plan → texte du terminal, accent → curseur ou couleur vive du terminal.
3. **Conservez une luminance proche.** Ne cherchez pas à reproduire exactement la teinte, mais évitez que le terminal soit plus clair ou plus foncé de plus de ~20 % — vos yeux percevront immédiatement ce saut.
4. **Testez dans une session réelle.** Exécutez `ls`, un historique git (`git log`) et passez deux minutes dans `vim`. Si les transitions entre fonds sont imperceptibles, vous avez réussi.

## À quoi ressemble un « assez proche »

Vous n’avez pas besoin d’une identité parfaite pixel par pixel. Une même famille de fonds, une même température de premier plan, une même couleur d’accent — c’est largement suffisant. Par exemple, [Monokai Stone (CLI)](/skins/monokai-stone-cli/) et un terminal sombre standard doté d’un fond gris chaud se marient très bien. L’objectif est la continuité, pas l’identité stricte.

## FAQ rapide

**Dois-je aussi synchroniser mon navigateur ?**  
C’est un plus, pas une obligation. Le couple terminal + éditeur couvre la majorité de vos changements de focus visuel. Ajoutez les outils de développement du navigateur si vous êtes perfectionniste — les mêmes règles s’appliquent.

**Mon émulateur de terminal ne prend pas en charge les thèmes personnalisés.**  
Tous les émulateurs modernes le permettent. Si vous êtes contraint par une configuration verrouillée (en entreprise par exemple), choisissez plutôt une peau Codex qui épouse la palette *par défaut* de votre terminal — la synchronisation inversée fonctionne aussi.

**La synchronisation va-t-elle ralentir mon workflow ?**  
Non. Il s’agit d’une configuration unique. La palette ne concerne que les couleurs ; elle n’a aucun effet sur le démarrage ni sur les performances de Codex.

Téléchargez [Tokyo Night](/skins/tokyo-night-ychampion/) ou [Monokai Stone](/skins/monokai-stone-cli/), appliquez la même palette à votre terminal, et offrez à vos yeux la pause qu’ils méritent. Consultez l’[index complet des peaux](/skins/) et le [guide d’installation](/blog/how-to-install-codex-skins/) si vous souhaitez commencer par les bases.
