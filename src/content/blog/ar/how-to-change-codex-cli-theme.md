---
title: "كيفية تغيير الموضوع في Codex CLI: /theme وpalette الشاشة"
description: "دليل خطوة بخطوة لتغيير الموضوع في Codex CLI - الأمر /theme، وتثبيت ألوان النصوص مثل Tokyo Night و Monokai Stone، والتوافق مع لافتة الأوامر."
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "ar"
---

تغيير الموضوع في Codex CLI عملية مختلفة عن Codex Desktop. بدلًا من الواجهة المرئية، يغير موضوع Codex CLI **لوحة ألوان المحاكي** - خلفية، ولون النص، وألوان التصنيف - حتى يبقى مخططك واقتراحات الإكمال والنتائج قابلة للقراءة في المحاكي.

هنا هو سير العمل الكامل، من مُحَوِّل `/theme` ذي الأوامر الفورية إلى تثبيت لوحات ألوان جديدة.

## الطريقة الأسرع: `/theme`

يأتي Codex CLI مع أمر داخلي لتحديد الموضوع. افتح نافذة واطلب:

```bash
/theme
```

هذا يعرض كل المواضيع المثبتة حاليًا. اضغط على مفاتيح الأسهم (أو أدخل الاسم) لتطبيق واحد فورًا - دون الحاجة لإعادة التشغيل. إذا قمت بتثبيت موضوع صن-tax مثل Tokyo Night، فإنه يظهر في هذه القائمة تحت اسمه الدقيق:

```bash
/theme Tokyo Night
```

## قم بتثبيت لوحة ألوان جديدة أولًا

يعرض `/theme` فقط المواضيع التي قمت بتثبيتها. تُثبَّت لوحات الألوان (Tokyo Night, Monokai Stone, Solarized) من خلال برنامج يقوم بتحويل اللوحة إلى دليل المواضع في Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# ثم قم بإدراجها وتطبيقها:
/theme
```

تحتوي مكتبة Bearded Theme Ports على أكثر من 50 نسخة - مثل Solarized وTokyo Night وMonokai Stone وغيرها - مما يسمح لك باختبار عدة لوحات ألوان في ثوانٍ.

## استخدم مدير موضوع للاسترجاع وإدارة المحاكي

إذا كنت تغير المواضيع بشكل متكرر، فإن مدير CLI يزيل الغموض:

- **Codex Themes CLI** (`ychampion/codex-themes`) - تطبيق Go يمكنه **التحقق، والعرض التجريبي، والتطبيق، والاسترجاع، واستخراج** لوحة ألوان متوافقة مع ملف إعدادات المحاكي الخاص بك. قم بالتطبيق باستخدام `codex-theme apply <name>`؛ واسترجع إلى سابقه بخطوة واحدة.
- **Codepilot** (`charzhu/codepilot`) - نسخة من Codex CLI تحتوي على واجهة TUI مدمجة:

```bash
npm i -g @charzhu/codepilot
# قم بتشغيل /skin داخل واجهة TUI لاختيار أحد 16 سطحًا مدمجًا
```

## توافق مع المحاكي والمحرر

تبدو اللوحة أفضل عندما يشارك المحاكي وCLI والمحرر نفس اللوحة. مع Codex Themes CLI، يمكنك تصدير نفس الألوان إلى ملف إعدادات المحاكي الخاص بك، لذلك يتطابق المحاكي وCodex CLI بعد تطبيق واحد. اربطه بقالب محرر مخصص (مثل Tokyo Night في VS Code) لتحقيق بيئة عمل متسقة.

## معلومات موجزة: لوحات الألوان الشهيرة CLI

| السطح | الأسلوب | تطبيق |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | لوحة ألوان صن-tax كلاسيكية | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | لون أزرق داكن، انعكاس منخفض | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | لوحة ألوان رياضية شهيرة | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | هوية محرك ألوان داكن دافئ | `codex-theme apply amber-nocturne-cli` |

## حل مشاكل

- **الموضوع لا يظهر في `/theme`** - قم بتشغيل برنامج التثبيت أولًا، ثم أعد فتح النافذة.
- **الألوان تبدو غير صحيحة بعد التغيير** - أعد تشغيل Codex CLI؛ بعض البرامج تحفظ الألوان عند بدء التشغيل.
- **تريد نفس اللوحة في المحاكي** - استخدم وظيفة الاستخراج من Codex Themes CLI لكتابة اللوحة في ملف إعدادات المحاكي الخاص بك.

تصفح جميع [الأسطوانات والألوان](/skins/category/mono-terminal/)، أو اقرأ دليل [مواضيع CLI الكامل](/blog/codex-cli-themes-guide/) للحصول على صورة كاملة.
