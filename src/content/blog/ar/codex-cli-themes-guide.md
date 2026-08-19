---
title: "سمات Codex CLI: كيفية استخدام الأمر `/theme` وسمات الطرفية"
description: "كل ما يتعلَّق بسمات Codex CLI: تثبيت سمات التصنيف النحوي مثل Tokyo Night وMonokai Stone وSolarized، واستخدام أمر `/theme`، وإدارة palettes باستخدام أدوات CLI."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "ar"
---

لا يستخدم Codex CLI نفس نظام السكينات الخاص بـ Codex Desktop. بل بدلًا من ذلك، تُغيّر سكينات واجهة سطر الأوامر (CLI) **لوحة ألوان الطرفية** — أي لون الخلفية، ولون المقدمة، وألوان التصنيف النحوي — بحيث يظل موجهك ومخرجاتك مقروءَيْن داخل الطرفية.

## أمر `/theme`

أسرع طريقة لاستخدام سكينة CLI هي الأمر المدمج `/theme`:

```bash
# داخل Codex CLI:
/theme
```

وهذا يعرض قائمة بالسكينات المُثبَّتة. اختر إحداها لتطبيقها فورًا.

## تثبيت سكينة للتصنيف النحوي

تُثبَّت سكينات التصنيف النحوي (مثل Monokai Stone وTokyo Night وSolarized) عبر نص برمجي يقوم بتحويل لوحة الألوان إلى دليل السكينات الخاص بـ Codex CLI:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# ثم:
/theme Tokyo Night
```

ويحتوي مستودع Bearded Theme Ports على أكثر من ٥٠ متغيرًا من سكينات Bearded — منها Solarized وTokyo Night وMonokai Stone وغيرها.

## إدارة السكينات باستخدام أدوات سطر الأوامر

توجد أداوتان تجعلان إدارة سكينات سطر الأوامر سهلة للغاية:

- **Codex Themes CLI** (`ychampion/codex-themes`) — أداة سطر أوامر مكتوبة بلغة Go: تُستخدم للتحقق من صحة السكينات، ومعاينتها، وتطبيقها، والعودة عنها، وتصدير لوائح ألوان الطرفية المتوافقة. وهي الخيار الأمثل إذا رغبت في أن تشترك الطرفية وCodex CLI في نفس لوحة الألوان.
- **Codepilot** (`charzhu/codepilot`) — توزيعة خاصة بـ Codex CLI تتضمن واجهة مستخدم تفاعلية (TUI) مدمجة لتخصيص المظهر:

```bash
npm i -g @charzhu/codepilot
# ثم شغّل /skin داخل الواجهة التفاعلية لاختيار إحدى السكينات المدمجة
```

ويشمل Codepilot ١٦ سكينة مدمجة للواجهة التفاعلية (تشمل ألوان الخلفية وألوان السطح).

## أبرز سكينات سطر الأوامر في الفهرس

| السكينة | النمط | التثبيت |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | لوحة ألوان كلاسيكية للتصنيف النحوي | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | لوحة ألوان رجعية أيقونية | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | نسخة داكنة زرقاء من Tokyo Night | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | هوية طرفية دافئة-داكنة | `codex-theme apply amber-nocturne` |

## استكشاف الأخطاء وإصلاحها

- **يظهر رسالة «لم تُثبَّت أي سكينات» عند تنفيذ `/theme`** — قم أولًا بتشغيل نص التثبيت، ثم أعد فتح موجه الأوامر.
- **تبدو لوحة الألوان غير صحيحة** — أعد تشغيل Codex CLI بعد التطبيق؛ إذ قد تقوم بعض الإصدارات المُحوَّلة بتخزين ألوان عند بدء التشغيل مؤقتًا.
- **ترغب في جعل إعدادات طرفية النظام متطابقة مع لوحة الألوان** — استخدم خاصية التصدير في Codex Themes CLI لكتابة نفس لوحة الألوان إلى ملف تعريف طرفية النظام.

تصفح جميع [السكينات الأحادية والطرفية](/skins/category/mono-terminal/) أو ابدأ بالاطلاع على [دليل التثبيت](/blog/how-to-install-codex-skins/).
