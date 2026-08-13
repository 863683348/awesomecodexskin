# SEO 工程方案（网站轨 P2 技术细化）

> 产出：网站轨 P2 技术细化 | 负责人：高见远（首席架构师）
> 配套：ADR-001（Astro 6）/ seo 基线（@astrojs/sitemap ^3.2.0、@astrojs/rss ^4.0.0）
> P0 合规：无 emoji；UI 颜色走 Design Token，本表/代码不含 UI 硬编码色。

---

## 1. `@astrojs/sitemap` 配置

`astro.config.mjs` 中设置 `site` 并挂 `sitemap()` 集成。构建后自动产出 `/sitemap-index.xml` 与按页分片 sitemap（Spec §12 验证步骤第 9 项断言 `/sitemap-index.xml`）。

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://awesomecodexskin.com', // canonical 基址，全站 OG/canonical 依赖它
  output: 'static',                      // 无需 @astrojs/cloudflare 适配器
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
```

- `getStaticPaths` 生成的动态路由（`/skins/[slug]`、`/skins/category/[slug]`）会被自动收录。
- P1 工具页（`/tools/*`）构建后同样进 sitemap；若 MVP 阶段暂不发布工具页，可暂不建文件以免空路由。
- RSS（@astrojs/rss ^4.0.0）可选用于"最新收录" feed，端点 `/rss.xml`，由 `src/pages/rss.xml.ts` 产出（P1 增强，非 P0 必须）。

---

## 2. Canonical / OG / Twitter 策略

统一在 `Base.astro` 布局注入，所有页面复用，避免重复与遗漏。

```astro
---
// src/layouts/Base.astro
interface Props {
  title: string;
  description: string;
  image?: string;
  type?: string;
}
const { title, description, image, type = 'website' } = Astro.props;
// canonical 必为绝对 URL：以 Astro.site 为基，拼接当前 pathname
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
// OG 图：缺省回退到站点默认 OG 图；皮肤页用 previewImage（本地路径解析为绝对）
const ogImage = image
  ? new URL(image, Astro.site)
  : new URL('/og/default.webp', Astro.site);
---
<link rel="canonical" href={canonicalURL} />
<meta name="description" content={description} />

<meta property="og:type" content={type} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={canonicalURL} />
<meta property="og:image" content={ogImage} />
<meta property="og:site_name" content="Codex Skin Index" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={ogImage} />
```

规则：
- **canonical**：每页唯一绝对 URL，`trailingSlash` 统一（建议 `false`，与 CF Pages 默认一致）。
- **OG 图**：皮肤详情页用 `previewImage`；首页 / 列表 / 分类用 `/og/default.webp`（设计稿提供，主题化但避开紫粉渐变）。
- **title/description**：来自 frontmatter（`name` + `description`）或页面常量，长度受控（title ≤ 60 字符、description ≤ 155 字符），避开模板腔。
- **外链**：所有外部 `href` 加 `rel="nofollow noopener"`（Spec §9 / §10 安全约束）。

---

## 3. 每页型 JSON-LD

### 3.1 首页 / 分类页 — `ItemList`

首页列 featured，分类页列该分类下皮肤。构建期由 `getCollection` 映射。

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Codex Skins Index",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "url": "https://awesomecodexskin.com/skins/aurora-midnight"
    }
  ]
}
</script>
```

### 3.2 详情页 — `BreadcrumbList` + `SoftwareApplication`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://awesomecodexskin.com/" },
        { "@type": "ListItem", "position": 2, "name": "Skins", "item": "https://awesomecodexskin.com/skins" },
        { "@type": "ListItem", "position": 3, "name": "Aurora Midnight", "item": "https://awesomecodexskin.com/skins/aurora-midnight" }
      ]
    },
    {
      "@type": "SoftwareApplication",
      "name": "Aurora Midnight",
      "description": "A deep, low-saturation dark theme with a soft aurora accent band.",
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "macOS, Windows",
      "softwareVersion": "1.0",
      "downloadUrl": "https://github.com/nova-themes/aurora-midnight",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "312"
      }
    }
  ]
}
</script>
```

- `operatingSystem` 由 `platform` / `compatibleWith` 推导（desktop→macOS, Windows；cli→跨平台）。
- `aggregateRating.ratingCount` 映射 `stats.likes`；`ratingValue` 可暂置 `"0"` 或由人工维护，避免编造分数。
- `downloadUrl` = `sourceUrl`。

### 3.3 FAQ 页 — `FAQPage`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is applying a Codex skin safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Skins are local workspace themes. Review the source link and prompt before applying; we link only to transparent repos and galleries."
      }
    }
  ]
}
</script>
```

### 3.4 教程 / 安装页 — `HowTo`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to install a Codex skin",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Open Codex",
      "text": "Launch Codex Desktop or Codex CLI on your machine."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Copy the install prompt",
      "text": "On the skin page, click Copy next to the install prompt."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Apply the skin",
      "text": "Paste the prompt into Codex and confirm the theme change."
    }
  ]
}
</script>
```

> 每页 JSON-LD 必须对应真实可见内容（避 deepai 腰斩教训：教程页需有真实步骤、FAQ 页需有真实问答、详情页需有预览图与来源）。

---

## 4. `robots.txt`

放 `public/robots.txt`，Cloudflare Pages 直接以根路径 `/robots.txt` 提供。

```
User-agent: *
Allow: /

Sitemap: https://awesomecodexskin.com/sitemap-index.xml
```

要点：
- 全站允许抓取；不屏蔽任何 P0 路由。
- 末尾 `Sitemap:` 指令指向自动生成的 `sitemap-index.xml`。
- 若 MVP 暂不发布 `/tools/*`，可临时 `Disallow: /tools/` 以免空内容被索引，上线工具页后移除。
