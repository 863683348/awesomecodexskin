---
title: "Темы Codex CLI: как использовать команду /theme и оформление терминала"
description: "Всё о темах Codex CLI: установка тем синтаксиса, таких как Tokyo Night, Monokai Stone и Solarized, использование команды /theme и управление палитрами с помощью инструментов CLI."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "ru"
---

Codex CLI использует не ту же систему скинов, что и Codex Desktop. Вместо визуального оформления темы CLI изменяют **палитру цветов терминала** — фон, основной цвет и цвета синтаксиса — чтобы приглашение и вывод оставались читаемыми в терминале.

## Команда `/theme`

Самый быстрый способ применить тему CLI — встроенная команда `/theme`:

```bash
# в Codex CLI:
/theme
```

Она выводит список установленных тем. Выберите одну из них, чтобы применить немедленно.

## Установка темы синтаксиса

Темы синтаксиса (например, Monokai Stone, Tokyo Night, Solarized) устанавливаются с помощью скрипта, который переносит палитру в каталог тем Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# затем:
/theme Tokyo Night
```

В репозитории Bearded Theme Ports доступно более 50 вариантов тем Bearded — Solarized, Tokyo Night, Monokai Stone и другие.

## Управление темами с помощью CLI-инструментов

Два инструмента упрощают управление темами CLI:

- **Codex Themes CLI** (`ychampion/codex-themes`) — CLI на Go: проверка, предварительный просмотр, применение, откат и экспорт совместимых палитр терминала. Идеально подходит, если вы хотите, чтобы палитра терминала и Codex CLI совпадали.
- **Codepilot** (`charzhu/codepilot`) — дистрибутив Codex CLI со встроенным TUI для персонализации:

```bash
npm i -g @charzhu/codepilot
# затем выполните /skin внутри TUI, чтобы выбрать встроенную тему
```

Codepilot поставляется с 16 встроенными TUI-скинами (цвет фона + цвет поверхностей).

## Популярные CLI-темы в индексе

| Скин | Стиль | Установка |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Классическая палитра синтаксиса | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Знаменитая ретро-палитра | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Тёмно-синяя тема Tokyo Night | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Тёплая тёмная идентичность терминала | `codex-theme apply amber-nocturne` |

## Устранение неполадок

- **Команда `/theme` сообщает, что темы не установлены** — сначала запустите скрипт установки, затем перезапустите приглашение.
- **Палитра выглядит некорректно** — перезапустите Codex CLI после применения темы; некоторые порты кэшируют цвета при запуске.
- **Хотите, чтобы терминал использовал ту же палитру** — воспользуйтесь функцией экспорта в Codex Themes CLI, чтобы записать эту палитру в профиль терминала.

Просмотрите все [монохромные и терминальные скины](/skins/category/mono-terminal/) или начните с [руководства по установке скинов Codex](/blog/how-to-install-codex-skins/).
