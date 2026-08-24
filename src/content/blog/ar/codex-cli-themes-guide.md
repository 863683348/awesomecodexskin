---
title: "سمات كودكس CLI: كيف تستخدم /theme ومواضع المحطات"
description: "كل شيء عن موضوعات Codex CLI: تثبيت موضوعات الصياغة مثل Tokyo Night، Monokai Stone و Solarized، واستخدام الأمر /theme، وإدارة الألوان باستخدام أدوات سطر الأوامر."
pubDate: "2026-08-14"
updatedDate: "2026-08-24"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
faq:
  - q: "ما هو موضوع Codex CLI؟"
    a: "قالب Codex CLI هو لون واجهة سطر الأوامر - لون الخلفية واللون الأمامي وألوان الصياغة - الذي يحافظ على طلبك وخرجك قابل للقراءة. على عكس Codex Desktop، لا يحتوي CLI على أي زخرفة مرئية ؛ تغير السمات الألوان فقط."
  - q: "كيف أقوم بتطبيق موضوع في Codex CLI؟"
    a: "تشغيل الأمر الداخلي /theme داخل CLI لـ Codex لعرض المواضيع المثبتة، ثم اختر واحدة لتطبيقها فورًا."
  - q: "كيف أقوم بتثبيت قوالب التنسيق مثل توكيو نايت أو مونوكاي ستون؟"
    a: "قم بتثبيت برنامج إعداد سمة (مثل مُثبّت سمات Bearded Theme Ports)، ثم قم بتشغيل /theme Tokyo Night (أو /theme Monokai Stone) لتطبيقها."
  - q: "لماذا لا تظهر أي سمات في /theme؟"
    a: "لم تقم بتثبيت موضوع بعد. قم بتشغيل برنامج التثبيت أولاً، ثم افتح موجه Codex CLI مرة أخرى — سيعرض /theme المواضيع المثبتة."
  - q: "هل يمكن لpalette وحدة الت_TERMINAL أن يتطابق مع موضوع Codex CLI؟"
    a: "نعم - سمات كودكس CLI (ychampion/codex-themes) يمكنها تصدير نفس الطيف إلى ملف إعدادات终端 الخاص بك حتى يبقى terminal و كودكس CLI متناسقين."
lang: "ar"
---

قواعد صارمة:
1. قم بترجمة جميع النصوص المكتوبة باللغة البشرية، العناوين، نص الجداول ونصوص الروابط.
2. لا تقم أبدًا بترجمة: كتل الشفرات، الشفرات المضمنة، مسارات الملفات، الأوامر في سطر الأوامر، عناوين URLs، أسماء المنتجات (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme)، الرموز الرقمية/الإصدار، أو أسماء السمات المرئية.
3. احتفظ بالهيكل الترمدي نفسه: نفس العناوين، القوائم، الجداول، الخط الـBold/italic، والاقتباسات، وعناوين الروابط. يبقى رابط مثل [Monokai Stone](/skins/monokai-stone/) بعنوان URL /path/ كما هو؛ فقط النص المرئي يمكن ترجمته.
4. احتفظ بأي HTML/JSX خام كما هي.
5. قدم فقط جسم الترجمة الترمدي. لا تقدم مقدمة، لا ملاحظات، لا أكواف للكود.

تتغير سمات Codex CLI **لعبة الألوان في المحرك** - خلفية، لون أولي وألوان الصياغة - حتى تظل مخططك ونتيجتك قابلة للقراءة في المحرك. تقوم بتقديمها باستخدام الأمر المدمج `/theme` : قم بتشغيل `/theme` لعرض السمات المثبتة، اختر واحدة، وستُطبَّق فورًا. على عكس Codex Desktop، لا يوجد في CLI أي عنصر بصري؛ فإن السمة هي مجرد الألوان التي تراها.

## بدء سريع

1. قم بتثبيت سمة منفذ (مرة واحدة): `curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh`
2. افتح Codex CLI وقم بتشغيل `/theme`.
3. اختر سمة (مثلًا: `/theme Tokyo Night`) - ستُطبَّق فورًا.

## أمر `/theme`

أسرع طريقة لاستخدام سمة CLI هي الأمر المدمج `/theme`:

```bash
# في Codex CLI:
/theme
```

هذا يعرض السمات المثبتة. اختر واحدة لتثبيتها فورًا.

## تثبيت سمة صياغة

تتم تثبيت سمات الصياغة (مثل Monokai Stone، Tokyo Night، Solarized) من خلال برنامج يقوم بتحويل لون اللوحة إلى دليل سمات Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# ثم:
/theme Tokyo Night
```

يحتوي مستودع Bearded Theme Ports على أكثر من 50 إصدارًا من Bearded - Solarized، Tokyo Night، Monokai Stone وغيرها.

## إدارة السمات باستخدام أدوات CLI

أداتان تجعل إدارة السمات في CLI سهلة:

- **Codex Themes CLI** (`ychampion/codex-themes`) - CLI بلغة Go: التحقق، المعاينة، التطبيق، التراجع والتصدير لألعاب الألوان المتوافقة. مناسب إذا كنت تريد أن يشارك محركك وCodex CLI نفس لعبة الألوان.
- **Codepilot** (`charzhu/codepilot`) - نسخة من Codex CLI تحتوي على واجهة TUI مدمجة للشخصنة:

```bash
npm i -g @charzhu/codepilot
# ثم قم بتشغيل /skin داخل واجهة TUI لاختيار سمة مبنية
```

يأتي Codepilot مع 16 سمة TUI مبنية (الألوان الخلفية + السطح).

## سمات CLI شائعة في المؤشر

| السمة | الأسلوب | التثبيت |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | لعبة ألوان صياغة كلاسيكية | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | لعبة ألوان ريترو مشهورة | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | ليل توكيو داكن | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | هوية محرك داكن دافئ | `codex-theme apply amber-nocturne` |

## حل المشكلات

- **يقول `/theme` أنه لا توجد سمات مثبتة** - قم بتشغيل برنامج التثبيت أولاً، ثم إعادة فتح المدخل.
- **تبدو لعبة الألوان غير صحيحة** - أعد تشغيل Codex CLI بعد تطبيقها؛ بعض المنافذ تخزن الألوان في البداية.
- **تريد أن يتطابق محركك** - استخدم تصدير Codex Themes CLI لكتابة نفس لعبة الألوان في ملف إعدادات محركك.

تصفح جميع [السمات المونو والمحرك](/skins/category/mono-terminal/) أو ابدأ بدليل [التثبيت](/blog/how-to-install-codex-skins/).
