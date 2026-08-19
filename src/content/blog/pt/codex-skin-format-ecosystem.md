---
title: "Formatos de Tema Codex Comparados: codedrobe vs codextheme vs tmtheme vs preset"
description: "Quatro formatos de skin, quatro mecanismos, um único ecossistema. Qual formato é o mais portátil, qual está em declínio e como converter entre eles quando necessário."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["formats", "ecosystem", "compatibility"]
category: "compare"
relatedSkins: ["monokai-stone", "solarized", "tokyo-night-ychampion", "vivid-purple-cli"]
lang: "pt"
---

O mundo das skins Codex é jovem, o que significa que os formatos ainda estão se estabilizando. Atualmente, quatro formatos circulam, e nem todos são compatíveis entre si. Entendê-los evita que você baixe um arquivo que seu mecanismo não consiga ler.

## Os quatro formatos

| Formato | Família de mecanismos | Mecanismo de carregamento | Portabilidade |
|---|---|---|---|
| `.codedrobe-theme` | Galerias no estilo Codedrobe (codexskins.org) | Importação de arquivo | Média — poucos mecanismos o leem |
| `.codextheme` | Gerenciadores desktop (Codex Themes desktop) | Importação de arquivo | Média |
| `tmtheme` | Portes para CLI (bearded, temas de sintaxe para terminal) | CLI `/theme` | Alta — igual ao dos temas de editores |
| `preset` | Mecanismos baseados em prompts (Dream Skin) | Prompt em linguagem natural | Baixa — depende da fraseologia específica do mecanismo |

## `.codedrobe-theme` — o padrão das galerias

Usado por galerias como codexskins.org para distribuir arquivos de tema prontos para uso. Se você vir “Baixar .codedrobe-theme”, é isso que estará obtendo. Suportado por alguns mecanismos desktop; a importação geralmente exige apenas um clique.

**Indicado para:** obter um tema polido, feito por designers, sem qualquer configuração.
**Atenção:** não é universal — verifique se seu mecanismo lê exatamente essa extensão.

## `.codextheme` — o formato dos gerenciadores desktop

Formato usado por gerenciadores de temas desktop (notavelmente o Codex Themes para desktop). Estruturalmente semelhante ao `.codedrobe-theme`, às vezes intercambiável na prática, mas os mecanismos nem sempre aceitam ambos.

**Indicado para:** usuários desktop que já têm um gerenciador instalado.
**Atenção:** sobreposição de nomes com `.codedrobe-theme` — as extensões parecem semelhantes, mas não há garantia de compatibilidade.

## `tmtheme` — o trabalho pesado da CLI

Formato de temas para terminal adaptado ao Codex CLI (os portes Bearded neste índice são o exemplo mais claro). Trata-se da mesma família de formatos usada por temas de sintaxe de editores como TextMate, logo o ecossistema é vasto — qualquer paleta no estilo tmtheme pode ser integrada ao Codex CLI com um simples script de conversão.

**Indicado para:** usuários de CLI que desejam o maior leque possível de paletas.
**Atenção:** arquivos tmtheme definem cores de sintaxe, nem sempre toda a superfície da interface — talvez seja necessário configurar manualmente painéis e elementos cromados (chrome).

## `preset` — o formato baseado em prompts

Não é um arquivo: trata-se de uma descrição em linguagem natural interpretada por um mecanismo baseado em prompts, como o Dream Skin. “Um tema noturno em âmbar quente, com baixa saturação” é um preset. Ele reside na lista de presets armazenados dentro do próprio mecanismo.

**Indicado para:** velocidade e iteração rápida.
**Atenção:** nenhuma portabilidade. Um preset só tem significado dentro do mecanismo que entende aquela fraseologia específica.

## Como converter entre formatos

- **tmtheme ↔ preset:** não há conversão direta — um é uma especificação estruturada, o outro é uma descrição textual. Reescreva a descrição com base na paleta.
- **tmtheme → .codextheme:** muitas vezes viável com um pequeno script, pois ambos são especificações estruturadas de cores. Muitos portes para CLI começaram exatamente assim.
- **codedrobe ↔ codextheme:** às vezes funcionam como substitutos diretos; teste ambas as extensões se seu mecanismo aceitar qualquer uma delas.

Regra geral: **formatos estruturados (tmtheme, codedrobe, codextheme) são mais interoperáveis do que formatos baseados em texto (preset).** Se você está construindo uma biblioteca de skins para usar por anos, priorize os formatos estruturados.

## Perguntas frequentes rápidas

**Qual formato é o “oficial” Codex?**  
Ainda não há um. O ecossistema está definindo isso pela adoção prática; os portes CLI da família tmtheme têm o maior impulso atualmente, enquanto os presets baseados em prompts têm o maior número de usuários.

**Um único formato acabará prevalecendo?**  
Provavelmente um formato estruturado — foi assim que os temas de editores convergiram. No entanto, os prompts não desaparecerão; eles atendem à necessidade de “testar rapidamente”.

**O que devo baixar para máxima compatibilidade?**  
Temas nativos da CLI, como [Monokai Stone](/skins/monokai-stone/) ou [Solarized](/skins/solarized/), disponibilizados como especificações tmtheme/CLI — eles são importáveis pelo maior número possível de ferramentas. [Tokyo Night](/skins/tokyo-night-ychampion/) e [Vivid Purple (CLI)](/skins/vivid-purple-cli/) também são excelentes opções, amplamente portadas.

**Como saber qual formato uma skin utiliza?**  
Toda página de detalhes de skin neste índice lista seu formato de instalação — essa é a informação-chave. Compare-o com o suportado pelo seu mecanismo antes de baixar.

Formatos são fricção, não recursos. Escolha formatos estruturados para sua biblioteca permanente, use prompts para exploração e deixe cada página de detalhes da skin indicar qual formato você está utilizando. Navegue pelo [índice de skins](/skins/) ou consulte a [comparação de mecanismos](/blog/codex-skin-engines-compared/) para saber quais softwares leem cada formato.
