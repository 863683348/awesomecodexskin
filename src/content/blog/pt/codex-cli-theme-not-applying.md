---
title: "Tema Codex CLI Não Está Funcionando? Corrija em 5 Passos"
description: "Tema Codex CLI não está sendo aplicado ou mostrando cores incorretas? Diagnose e corrija problemas de /theme — instalação ausente, cache obsoleto, arquivo de paleta incorreto e sincronização do terminal."
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "troubleshooting", "fix"]
category: "guide"
relatedSkins: ["tokyo-night-cli", "monokai-stone-cli", "solarized-cli"]
lang: "pt"
---

`/theme` não retorna nada, as cores não mudam ou a paleta parece incorreta? Problemas com temas do Codex CLI quase sempre são causados por uma das cinco razões abaixo. Aqui está como diagnosticar e corrigir cada uma em ordem.

## 1. O tema não foi instalado (mais comum)

`/theme` lista apenas os temas que existem no diretório de temas do Codex CLI. Se você nunca executou um script de instalação, a lista estará vazia ou mostrará apenas o padrão.

**Solução:** instale primeiro uma paleta:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
```

Em seguida, reabra o prompt e execute `/theme` novamente — a nova paleta deve aparecer com o nome exato.

## 2. Cache de cores obsoleto ao iniciar

Alguns ports armazenam em cache as cores quando o Codex CLI inicia. Após aplicar um tema, a paleta pode parecer incorreta até a próxima execução.

**Solução:** reinicie o Codex CLI após aplicar o tema, depois execute `/theme` novamente com o mesmo nome. Se a paleta correta aparecer, o cache era o problema.

## 3. O nome do tema não coincide

`/theme` corresponde aos nomes dos temas exatamente. `Tokyo Night` não é o mesmo que `tokyo-night` ou `TokyoNight`.

**Solução:** execute `/theme` sem argumentos e copie o nome exato da lista, depois aplique-o literalmente.

## 4. Arquivo de paleta incorreto ou incompleto

Uma paleta copiada de um script de portagem pode estar incompleta — faltando chaves de fundo, foreground ou sintaxe. Isso se manifesta como cores quase padrão com uma ou duas mudanças.

**Solução:** execute novamente o script de instalação para obter o tema completo, ou use um gerenciador para validar o arquivo:

```bash
# O Codex Themes CLI valida a paleta antes de aplicá-la:
codex-theme validate <name>
codex-theme apply <name>
```

## 5. Terminal e CLI desalinhados

Se o *terminal* estiver correto mas o Codex CLI não (ou vice-versa), os dois estão lendo configurações diferentes. Temas do CLI são apenas paletas — eles não alteram seu perfil de terminal.

**Solução:** exporte a mesma paleta para ambos. O Codex Themes CLI pode escrever as mesmas cores no seu perfil de terminal, então uma aplicação sincroniza ambas as superfícies:

```bash
codex-theme export <name> --to-terminal
```

## Ainda preso?

Reinicie para um estado limpo: desinstale a paleta, reinicie, reinstale e aplique com o nome exato. Se uma pele específica tiver um problema, navegue pela [categoria Mono & Terminal](/skins/category/mono-terminal/) para as últimas variantes de paleta, ou verifique o [guia de temas do CLI](/blog/codex-cli-themes-guide/) para o fluxo completo de instalação.
