---
title: "سمات كودكس CLI: كيف تستخدم /theme وسمات المحطات"
description: "كل ما يتعلق بمواضيع Codex CLI: تثبيت سمات الصياغة مثل Tokyo Night، Monokai Stone وSolarized، واستخدام الأمر /theme، وإدارة الألوان باستخدام أدوات CLI."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "ar"
---

قواعد صارمة:
1. قم بترجمة جميع النصوص المُقروءة من قبل البشر، والعناوين، ونصوص الجداول والنصوص المرتبطة.
2. لا تُترجم أبداً: كتل الشيفرة، الشيفرة المدمجة، مسارات الملفات، الأوامر في سطر الأوامر، عناوين URLs، أسماء المنتجات (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme)، الرموز العددية أو الإصدار، أو أسماء السمات العرضية.
3. احتفظ بالهيكل الترميدي نفسه: نفس العناوين، القوائم، الجداول، الخط الدهني/المائل، والاقتباسات، وعناوين الروابط. يبقى الرابط مثل [Monokai Stone](/skins/monokai-stone/) بنفس URL /path/؛ فقط النص المرئي يمكن أن يتم ترجمته.
4. احتفظ بأي HTML/JSX خام كما هي.
5. قم بإخراج فقط جسم markdown المترجم. لا تقدم مقدمة، ولا ملاحظات، ولا أكواف للكود.

لا يستخدم Codex CLI نفس نظام السمات الذي يستخدمه Codex Desktop. بدلًا من ذلك، تغير سمات CLI **لوحة ألوان المحرك** - الخلفية، اللون الأمامي وألوان الصياغة - حتى يبقى نصك ونتائجك قابلة للقراءة في المحرك.

## الأمر /theme

الطريقة الأسرع لاستخدام سمة CLI هو الأمر المضمن /theme:

```bash
# في Codex CLI:
/theme
```

هذا يعرض السمات المثبتة. اختر واحدة لتطبيقها فورًا.

## تثبيت سمة صياغة

تثبيت سمات الصياغة (مثل Monokai Stone, Tokyo Night, Solarized) يتم من خلال برنامج يقوم بنقل لوحة الألوان إلى دليل السمات في Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# ثم:
/theme Tokyo Night
```

تحتوي مكتبة Bearded Theme Ports على أكثر من 50 نسخة من Bearded - بما في ذلك Solarized, Tokyo Night, Monokai Stone وغيرها.

## إدارة السمات باستخدام أدوات CLI

أداتان تجعل إدارة السمات CLI سهلة:

- **Codex Themes CLI** (`ychampion/codex-themes`) - CLI بلغة Go: التحقق، الاستعراض، التطبيق، التراجع وإخراج لوحة الألوان المتناسقة. مثالية إذا كنت تريد أن يشارك محركك وCodex CLI نفس لوحة الألوان.
- **Codepilot** (`charzhu/codepilot`) - نسخة من Codex CLI تحتوي على واجهة TUI مدمجة للشخصنة:

```bash
npm i -g @charzhu/codepilot
# ثم قم بتشغيل /skin داخل واجهة TUI لاختيار سمة مبنية
```

يأتي Codepilot مع 16 سمة TUI مبنية (الألوان الخلفية + السطح).

## سمات CLI شائعة في المؤشر

| السمة | الأسلوب | التثبيت |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | لوحة ألوان صياغة كلاسيكية | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | لوحة ألوان ريترو شهيرة | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | ليلية طوكيو داكنة | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | هوية محرك داكنة دافئة | `codex-theme apply amber-nocturne` |

## حل مشاكل

- **يقول /theme أنه لا توجد سمات مثبتة** - قم بتشغيل برنامج التثبيت أولًا، ثم إعادة فتح المدخل.
- **تبدو لوحة الألوان خاطئة** - أعد تشغيل Codex CLI بعد تطبيقها؛ بعض البرامج تستخدم ذاكرة تخزين مؤقتة للألوان عند بدء التشغيل.
- **تريد أن يتطابق محركك** - استخدم تصدير Codex Themes CLI لكتابة نفس لوحة الألوان في ملف إعدادات محركك.

تصفح جميع [السمات المونو والمحرك](/skins/category/mono-terminal/) أو ابدأ بدليل [التثبيت](/blog/how-to-install-codex-skins/).
