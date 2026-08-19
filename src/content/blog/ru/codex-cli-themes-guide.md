---
title: "Темы Codex CLI: Как использовать /theme и Темы терминала"
description: "Все о темах Codex CLI: установка тем синтаксиса, таких как Tokyo Night, Monokai Stone и Solarized, использование команды /theme и управление палитрами с помощью инструментов CLI."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "ru"
---

ПРАВИЛА:
1. Переведите весь читаемый человеком текст, заголовки, тексты таблиц и ссылки.
2. НЕ ПЕРЕВОДИТЕ: блоки кода, встроенные коды, пути к файлам, команды shell, URL-адреса, названия продуктов (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), числовые/версионные токены или названия тем для отображения.
3. Сохраняйте идентичную структуру markdown: те же заголовки, списки, таблицы, жирный/курсив, цитаты и назначение ссылок. Ссылка вида [Monokai Stone](/skins/monokai-stone/) сохраняет свой URL /path/ без изменений; только видимый текст может быть переведен.
4. Сохраняйте любой исходный HTML/JSX точно так же.
5. Выводите ТОЛЬКО переведенный текст. Нет предисловия, нет примечаний, нет кодовых блоков вокруг ответа.

Codex CLI не использует ту же систему тем, что и Codex Desktop. Вместо визуального оформления, темы CLI меняют **цветовую палитру терминала** — фон, передний план и цвета синтаксиса — чтобы ваш запрос и вывод оставались читаемыми в терминале.

## Команда /theme

Самый быстрый способ использовать тему CLI — это встроенная команда /theme:

```bash
# в Codex CLI:
/theme
```

Это выводит установленные темы. Выберите одну, чтобы применить её мгновенно.

## Установка темы синтаксиса

Темы синтаксиса (например, Monokai Stone, Tokyo Night, Solarized) устанавливаются из скрипта, который переносит палитру в каталог тем Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# затем:
/theme Tokyo Night
```

Репозиторий Bearded Theme Ports содержит более 50 вариаций Bearded — Solarized, Tokyo Night, Monokai Stone и другие.

## Управление темами с помощью инструментов CLI

Два инструмента делают управление темами CLI безболезненным:

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go CLI: проверка, предварительный просмотр, применение, откат и экспорт совпадающих цветовых палитр терминала. Идеально, если вы хотите, чтобы ваш терминал и Codex CLI использовали одну и ту же палитру.
- **Codepilot** (`charzhu/codepilot`) — распределение Codex CLI с встроенным TUI-персонализацией:

```bash
npm i -g @charzhu/codepilot
# затем запустите /skin внутри TUI, чтобы выбрать встроенную тему
```

Codepilot поставляется с 16 встроенными TUI-темами (цвет фона + поверхности).

## Популярные темы CLI в индексе

| Тема | Стиль | Установить |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | Классическая цветовая палитра синтаксиса | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | Иконочная ретро-палитра | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | Темно-синее Tokyo Night | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | Тепло-темный терминальный идентификатор | `codex-theme apply amber-nocturne` |

## Решение проблем

- **/theme сообщает, что темы не установлены** — сначала запустите скрипт установки, затем снова откройте командную строку.
- **Палитра выглядит неправильно** — перезапустите Codex CLI после применения; некоторые порты кэшируют цвета при запуске.
- **Хотите, чтобы ваш терминал совпадал** — используйте экспорт Codex Themes CLI, чтобы записать ту же палитру в ваш профиль терминала.

Просмотрите все [Моно и терминальные темы](/skins/category/mono-terminal/) или начните с [руководства по установке](/blog/how-to-install-codex-skins/).
