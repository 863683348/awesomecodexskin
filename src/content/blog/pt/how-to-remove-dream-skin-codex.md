---
title: "Como Remover / Desinstalar Codex Dream Skin"
description: "Desinstale limpo a Pele de Sonho Codex e restaure o aspecto padrão do Codex no macOS e Windows — remova pré-configurações, redefina o tema ativo e limpe a configuração sobrante."
pubDate: "2026-08-20"
updatedDate: "2026-08-24"
tags: ["dream-skin", "uninstall", "tips"]
category: "tips"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "solarized"]
faq:
  - q: "Desinstalar a Skin Dream apagará minha skin aplicada?"
    a: "Se você redefinir para o padrão primeiro, não — Codex retorna para seu tema integrado. Os presets personalizados armazenados pelo Dream Skin são removidos com o aplicativo."
  - q: "Posso reinstalar a Skin Sonho Codex mais tarde?"
    a: "Sim, Dream Skin é gratuito e de código aberto; reinstale a partir do repositório oficial e os prompts das páginas da sua skin ainda funcionam."
  - q: "Remover a Pele Sonho afeta outros motores?"
    a: "Não, mas instale apenas um aplicador ativo por vez para evitar o conflito last-one-wins."
lang: "pt"
---

REGRAS RIGOROSAS:
1. Traduza todo o texto legível por humanos, títulos, textos de tabelas e links.
2. NUNCA traduza: blocos de código, código inline, caminhos de arquivos, comandos de shell, URLs, nomes de produtos (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), tokens numéricos/versões ou nomes de skins.
3. Mantenha a estrutura markdown idêntica: mesmos títulos, listas, tabelas, negrito/itálico, citações e destinos de links. Um link como [Monokai Stone](/skins/monokai-stone/) mantém seu caminho /path/ inalterado; apenas o texto visível pode ser traduzido.
4. Mantenha qualquer HTML/JSX bruto exatamente como está.
5. Saída APENAS o corpo da markdown traduzida. Nenhum pré-ambiente, nenhuma nota, nenhum código cercando a resposta.

Mudou de ideia, ou mudando para um motor diferente? Remover o Dream Skin do Codex é simples, mas fazer isso *corretamente* importa — uma desinstalação incompleta deixa o tema ativo aplicado e pode conflitar silenciosamente com o próximo motor. Aqui está como removê-lo corretamente no macOS e Windows.

## Antes de começar: redefina primeiro o tema ativo

O Dream Skin pode estar atualmente o **aplicador ativo** do seu tema Codex. Desinstalar o app enquanto ele ainda estiver ativo pode deixar um tema personalizado preso sem forma de gerenciá-lo.

1. Abra o Dream Skin.
2. Use **Restaurar padrão** para devolver o Codex ao seu aspecto original.
3. Confirme que o tema padrão está sendo mostrado no Codex antes de continuar.

Se você estiver se movendo para outro engine como [Codex Skin Manager](/blog/codex-skin-manager-guide/), instale-o primeiro, defina-o como novo aplicador ativo, depois desinstale o Dream Skin — isso evita qualquer lacuna onde nenhum engine possa alterar o tema.

## Remover no macOS

1. Feche o Dream Skin e o Codex Desktop.
2. Arraste o app Dream Skin da pasta Aplicações para a Lixeira.
3. Limpe a pasta de configuração restante (se presente): `~/Library/Application Support/Codex-Dream-Skin/` (ou o nome exato da pasta da sua instalação).
4. Esvazie a Lixeira.

## Remover no Windows

1. Feche o Dream Skin e o Codex Desktop.
2. Desinstale via **Configurações → Apps → Aplicativos instalados** (ou o Painel de Controle "Adicionar ou remover programas").
3. Exclua a pasta de dados restante, se ela ainda existir: `%APPDATA%\Codex-Dream-Skin` (ou onde sua instalação escreveu as predefinições).
4. Se você instalou a partir do código fonte ou via gerenciador de pacotes, execute o comando de desinstalação correspondente.

## Verifique se nada ficou para trás

Após a desinstalação, confirme:

- O Codex mostra o **tema padrão** (deveria, se você redefiniu o tema ativo primeiro).
- Nenhum processo do Dream Skin está em execução (verifique no Monitor de Atividade / Gerenciador de Tarefas).
- Nenhum segundo engine está agora lutando para ser o aplicador — se você instalou outro engine, certifique-se de que ele é o ativo.

## Trocando de engine?

A maioria das pessoas desinstala o Dream Skin para ir para algo diferente. Não tem certeza de qual engine se encaixa? A comparação [Dream Skin vs Skin Manager](/blog/codex-dream-skin-vs-skin-manager/) analisa as duas opções de desktop. Os dois caminhos comuns:

- **Para uma interface de galeria:** [Guia do Codex Skin Manager](/blog/codex-skin-manager-guide/)
- **Para temas via CLI:** a [comparação de engines](/blog/codex-skin-engines-compared/) abrange opções CLI como Codex Themes CLI e Codepilot

E se você só quer uma *skin* diferente, em vez de um *engine* diferente, navegue pelo [índice de skins](/skins/) — trocar skins é sempre mais rápido do que trocar engines.

## Perguntas Frequentes Rápidas

**Desinstalar o Dream Skin apaga minha skin aplicada?**
Se você redefinir para o padrão primeiro, não — o Codex retorna ao seu tema interno. Os presets personalizados armazenados pelo Dream Skin são removidos com o app.

**Posso reinstalar mais tarde?**
Sim, o Dream Skin é gratuito e de código aberto; reinstale a partir do repositório oficial e os prompts das suas páginas de skin ainda funcionam.

**Remover o Dream Skin afeta outros engines?**
Não, mas instale apenas um aplicador ativo por vez para evitar o conflito do último a vencer.
