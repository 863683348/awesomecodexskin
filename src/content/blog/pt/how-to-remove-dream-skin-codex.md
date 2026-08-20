---
title: "Como Remover / Desinstalar Codex Dream Skin"
description: "Desinstale limposamente a Pele de Sonho Codex e restaure o visual padrão do Codex no macOS e Windows — remova os presets, reinicie o tema ativo e limpe a configuração sobrante."
pubDate: "2026-08-20"
updatedDate: "2026-08-20"
tags: ["dream-skin", "uninstall", "tips"]
category: "tips"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "solarized"]
lang: "pt"
---

REGRAS RIGOROSAS:
1. Traduza todo o texto legível por humanos, títulos, textos de tabelas e textos de links.
2. NUNCA traduza: blocos de código, código inline, caminhos de arquivos, comandos de shell, URLs, nomes de produtos (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), tokens numéricos/versão ou nomes de skins.
3. Mantenha a estrutura de markdown idêntica: mesmos títulos, listas, tabelas, negrito/itálico, citações e destinos de links. Um link como [Monokai Stone](/skins/monokai-stone/) mantém seu caminho /path/ inalterado; apenas o texto visível pode ser traduzido.
4. Mantenha qualquer HTML/JSX bruto exatamente como está.
5. Saída APENAS o corpo da markdown traduzida. Nenhum pré-ambiente, nenhuma nota, nenhum código cercando a resposta.

Mudou de ideia, ou está mudando para um motor diferente? Remover o Dream Skin do Codex é simples, mas fazer isso *corretamente* importa - uma desinstalação incompleta deixa o tema ativo aplicado e pode conflitar silenciosamente com o próximo motor. Aqui está como removê-lo corretamente no macOS e no Windows.

## Antes de começar: redefina o tema ativo primeiro

O Dream Skin pode estar atualmente o **aplicador ativo** do seu tema Codex. Desinstalar o app enquanto ele ainda estiver ativo pode deixar um tema personalizado preso sem forma de gerenciá-lo.

1. Abra o Dream Skin.
2. Use **Restaurar padrão** para devolver o Codex para sua aparência original.
3. Confirme que o tema padrão está sendo mostrado no Codex antes de continuar.

Se você estiver migrando para outro motor como [Codex Skin Manager](/blog/codex-skin-manager-guide/), instale-o primeiro, defina-o como o novo aplicador ativo e depois desinstale o Dream Skin - isso evita qualquer lacuna onde nenhum motor possa alterar o tema.

## Remover no macOS

1. Feche o Dream Skin e o Codex Desktop.
2. Arraste o app Dream Skin da pasta Aplicações para o Lixo.
3. Limpe a pasta de configuração sobrante (se presente): `~/Library/Application Support/Codex-Dream-Skin/` (ou o nome exato da pasta da sua instalação).
4. Esvazie o Lixo.

## Remover no Windows

1. Feche o Dream Skin e o Codex Desktop.
2. Desinstale via **Configurações → Apps → Aplicativos instalados** (ou o Painel de Controle "Adicionar ou remover programas").
3. Exclua a pasta de dados sobrante se ela permanecer: `%APPDATA%\Codex-Dream-Skin` (ou onde sua instalação escreveu os presets).
4. Se você instalou a partir do código-fonte ou por meio de um gerenciador de pacotes, execute o comando de desinstalação correspondente.

## Verifique se nada ficou para trás

Após a desinstalação, confirme:

- O Codex mostra o **tema padrão** (deveria, se você redefiniu o tema ativo primeiro).
- Nenhum processo do Dream Skin está em execução (verifique o Monitor de Atividade / Gerenciador de Tarefas).
- Nenhum segundo motor está lutando para ser o aplicador - se você instalou outro motor, certifique-se de que ele é o ativo.

## Mudando de motores em vez disso?

A maioria das pessoas desinstala o Dream Skin para migrar para algo diferente. Os dois caminhos mais comuns:

- **Para uma interface de galeria:** [Guia do Codex Skin Manager](/blog/codex-skin-manager-guide/)
- **Para formatação via CLI:** a [comparação entre motores](/blog/codex-skin-engines-compared/) cobre opções via CLI como Codex Themes CLI e Codepilot

E se você só quiser uma *skin* diferente, em vez de um *motor* diferente, navegue pelo [índice de skins](/skins/) - trocar skins é sempre mais rápido que trocar motores.

## Perguntas Frequentes Rápidas

**Desinstalar o Dream Skin apagará minha skin aplicada?**
Se você redefinir para o padrão primeiro, não - o Codex retorna para seu tema interno. Os presets personalizados armazenados pelo Dream Skin são removidos com o app.

**Posso reinstalar mais tarde?**
Sim, o Dream Skin é gratuito e de código aberto; reinstale a partir do repositório oficial e os prompts das páginas de skins ainda funcionam.

**Remover o Dream Skin afeta outros motores?**
Não, mas instale apenas um aplicador ativo por vez para evitar conflitos de "último a vencer".
