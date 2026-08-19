---
title: "Cores Altamente Contrastantes de Skins Codex: Acessibilidade que realmente parece bom"
description: "Alto contraste não é cinza feio em fundo preto. Boas skins Codex acessíveis atendem às razões de contraste WCAG, mantendo o caráter — aqui está como escolher e verificar."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["accessibility", "contrast", "wcag"]
category: "tips"
relatedSkins: ["monokai-stone-cli", "vivid-purple", "forest-mist", "blue-enchantress"]
lang: "pt"
---

"Accessível" soa como uma redução. Cinza sobre preto, fontes grandes, sem personalidade. Não precisa ser — algumas das skins do Codex mais impressionantes neste índice também passam nos testes de contraste do WCAG. A chave é saber o que procurar, e algumas skins aqui comprovam isso.

## O número que você realmente precisa: 4,5:1

O WCAG AA para texto normal exige uma razão de contraste de pelo menos **4,5:1** entre o texto e o fundo. Texto grande (18px ou mais, ou 14px em negrito) precisa apenas de 3:1. Código — seu conteúdo principal — é texto normal, então 4,5:1 é o padrão.

Você não precisa ser um designer para verificar. Insira os códigos hex dos elementos de primeiro plano e de fundo de qualquer skin em qualquer verificador de contraste, e você obtém a razão em segundos. Se a cor do texto estiver abaixo de 4,5:1 em relação ao fundo, esse é o problema principal — corrija esse par e você estará em 90% do caminho.

## O que torna uma skin acessível *se sentir* boa

Contraste alto falha quando está alto em todos os lugares. As boas skins mantêm uma hierarquia clara:

- **Texto de código no fundo: ≥ 4,5:1.** Não negociável.
- **Elementos da interface com baixo contraste:** comentários, números de linha, rótulos de painéis podem ficar mais baixos (3:1+), para que o olho não esteja gritando com tudo de uma vez.
- **Uma forte cor de destaque** para cursor/seleção, mantida acima de 3:1 em relação aos seus vizinhos.

[Monokai Stone (CLI)](/skins/monokai-stone-cli/) faz isso bem — as cores da sintaxe permanecem suficientemente claras para leitura enquanto o quadro da interface fica tranquilo. [Forest Mist](/skins/forest-mist/) mostra uma paleta acessível que não precisa ser feia por causa do alto contraste; os verdes suaves ainda atendem ao requisito.

## Cegueira às cores: a verificação extra

A razão de contraste cobre apenas a luminosidade. Se você for daltônico — cerca de 8% dos homens — as distinções entre vermelho e verde desaparecem. Então:

- **Não dependa apenas da cor** para distinguir estados (por exemplo, apenas um ponto vermelho/verde para erros). Combine com um ícone ou uma palavra.
- **Prefira tons azuis/laranjas** em vez de pares vermelho/verde, se possível. [Blue Enchantress](/skins/blue-enchantress/) e [Vivid Purple](/skins/vivid-purple/) são opções seguras nesse aspecto.

Se você compartilhar sua configuração ou publicar screenshots, essas verificações importam para seus leitores também, não apenas para você.

## Como verificar uma skin em 30 segundos

1. Abra a página detalhada da skin — os códigos hex da paleta estão listados lá.
2. Pegue os códigos hex do fundo e do primeiro plano.
3. Execute-os em um verificador de contraste (qualquer um gratuito funciona).
4. Texto com razão menor que 4,5:1 → ajuste ou escolha outra skin deste índice.

## Perguntas Frequentes Rápidas

**Modo escuro é pior para acessibilidade?**
Não necessariamente. A razão de contraste é o que importa, não a escuridão do fundo. Algumas pessoas com astigmatismo preferem o modo claro; outras não. Escolha com base nos seus olhos, depois verifique a razão.

**Posso editar as cores de uma skin para corrigir o contraste?**
Sim, se você estiver confortável editando o arquivo da tema. Aumente a luminosidade do primeiro plano ou escuras o fundo até que o par atinja 4,5:1, salve como uma variante própria.

**Skins acessíveis parecem "chaticas"?**
Apenas se a paleta for plana. As skins deste índice com tons fortes — [Vivid Purple](/skins/vivid-purple/), [Blue Enchantress](/skins/blue-enchantress/) — são chamativas e acessíveis ao mesmo tempo. Contraste e personalidade não são opostos.

Acessibilidade é uma lista de verificação, não uma estética. Verifique a razão de 4,5:1 na skin que você ama, corrija o único par que falha e mantenha o visual. Comece com [Monokai Stone](/skins/monokai-stone-cli/) se quiser uma base confiável, ou navegue pelo [índice completo](/skins/) — o [guia para criar uma skin](/blog/how-to-create-codex-skin/) também mostra onde editar os códigos hex.
