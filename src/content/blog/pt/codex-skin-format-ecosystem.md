---
title: "Formatos de skins do Codex Comparados: codedrobe vs codextheme vs tmtheme vs preset"
description: "Quatro formatos de skins, quatro engines, uma ecossistema. Qual formato é mais portátil, qual está morrendo e como converter entre eles quando necessário."
pubDate: "2026-08-15"
updatedDate: "2026-08-15"
tags: ["formats", "ecosystem", "compatibility"]
category: "compare"
relatedSkins: ["monokai-stone", "solarized", "tokyo-night-ychampion", "vivid-purple-cli"]
lang: "pt"
---

O mundo de skins do Codex é novo, o que significa que os formatos ainda estão se estabilizando. Atualmente, existem quatro formatos em circulação e eles não são todos compatíveis. Compreender esses formatos evita que você baixe um arquivo que seu motor não consiga ler.

## Os quatro formatos

| Formato | Família do motor | Mecanismo de carregamento | Portabilidade |
|---|---|---|---|
| `.codedrobe-theme` | Galerias estilo Codedrobe (codexskins.org) | Importação de arquivo | Média — alguns motores leem |
| `.codextheme` | Gerenciadores de desktop (Codex Themes desktop) | Importação de arquivo | Média |
| `tmtheme` | Temas CLI (portas Bearded, temas de sintaxe para terminal) | CLI `/theme` | Alta — mesma que temas de editor |
| `preset` | Motores de prompt (Dream Skin) | Prompt de linguagem natural | Baixa — fraseologia específica do motor |

## `.codedrobe-theme` — o padrão da galeria

Usado por galerias como codexskins.org para distribuir arquivos de tema prontos. Se você ver "Baixar .codedrobe-theme", este é o que você está recebendo. Suportado por poucos motores de desktop; a importação geralmente é de um clique.

**Bom para:** obter um tema pronto, feito por um designer, sem configuração.
**Cuidado com:** ele não é universal — verifique se seu motor lê esta extensão exata.

## `.codextheme` — o formato do gerenciador de desktop

O formato usado pelos gerenciadores de temas de desktop (notavelmente Codex Themes para desktop). Estruturalmente similar ao `.codedrobe-theme`, às vezes intercambiável na prática, mas os motores nem sempre aceitam ambos.

**Bom para:** usuários de desktop com um gerenciador instalado.
**Cuidado com:** sobreposição de nomes com `.codedrobe-theme` — as extensões parecem similares, mas não são garantidamente compatíveis.

## `tmtheme` — o trabalho do CLI

Formato de tema de terminal portado para Codex CLI (as portas Bearded neste índice são o exemplo mais claro). Este é o mesmo família de formato dos temas de sintaxe de TextMate/editor, então o ecossistema é grande — qualquer paleta com tmtheme pode encontrar seu caminho para o Codex CLI com um script de porta.

**Bom para:** usuários de CLI que querem a maior quantidade possível de paletas.
**Cuidado com:** arquivos tmtheme definem cores de sintaxe, nem sempre a superfície completa da interface — você pode precisar de configuração adicional para painéis e chrome.

## `preset` — o formato de prompt

Não é um arquivo de fato: uma descrição de linguagem natural que um motor de prompt como Dream Skin interpreta. "Um tema noturno amarelo-âmbar quente, baixa saturação" é um preset. Ele vive na lista de presets armazenados no motor.

**Bom para:** velocidade e iteração.
**Cuidado com:** zero portabilidade. Um preset só faz sentido dentro do motor que entende essa fraseologia.

## Como converter entre formatos

- **tmtheme ↔ preset:** não é diretamente conversível — um é um especificação, outro é uma descrição. Reescreva a descrição com base na paleta.
- **tmtheme → .codextheme:** frequentemente viável com um pequeno script, já que ambos são especificações de cores estruturadas. Muitas portas CLI começaram assim.
- **codedrobe ↔ codextheme:** às vezes é direto; teste ambas as extensões se seu motor aceitar qualquer uma.

Regra geral: **formatos estruturados (tmtheme, codedrobe, codextheme) são mais interoperáveis do que formatos de prosa (preset).** Se você estiver criando uma biblioteca de skins que manterá por anos, prefira formatos estruturados.

## Perguntas Frequentes Rápidas

**Qual é o formato "oficial" do Codex?**
Não há nenhum ainda. O ecossistema está decidindo pelo uso; as portas de CLI da família tmtheme têm mais momentum, enquanto os presets têm mais usuários.

**Um formato vencerá no final?**
Probavelmente um formato estruturado — é assim que os temas de editores convergiram. Mas prompts não vão desaparecer; eles atendem ao caso de uso "experimente rápido".

**O que devo baixar para máxima compatibilidade?**
Temas naturais de CLI como [Monokai Stone](/skins/monokai-stone/) ou [Solarized](/skins/solarized/) que chegam como tmtheme/espécies de CLI — eles importam para o maior número de ferramentas. [Tokyo Night](/skins/tokyo-night-ychampion/) e [Purple Vivid (CLI)](/skins/vivid-purple-cli/) também são boas escolhas, amplamente portadas.

**Como eu sei qual formato uma skin usa?**
Cada página de detalhes de skin em índice lista seu formato de instalação — é isso que revela. Correlacione-o com seu motor antes de baixar.

Formatos são fricções, não funcionalidades. Escolha formatos estruturados para sua biblioteca permanente, prompts para exploração, e deixe cada página de detalhes de skin dizer qual você está lidando. Navegue pelo [índice de skins](/skins/), ou veja a [comparação de engines](/blog/codex-skin-engines-compared/) para o software que lê cada formato.
