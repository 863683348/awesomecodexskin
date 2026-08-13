# Content Schema — `skins` Collection（Astro 6 Content Layer + Zod v4）

> 产出：网站轨 P2 技术细化 | 负责人：高见远（首席架构师）
> 配套：ADR-001（Astro 6）/ ADR-003（Lucide，无 emoji）/ ADR-004（无后端提交）
> P0 合规：全文无 emoji。UI chrome 颜色一律走 Design Token（`--accent` 等，见 design-tokens.css）；本 schema 仅 `color` 字段存储**用户皮肤自身主色**（业务数据，合法），非站点 UI 硬编码色。

---

## 1. 文件位置与导入（版本锚定，不可混用）

Astro 6 强制 Content Layer API（旧 `src/content/config.ts` 已在 v6 移除）：

- 文件名必须是 `src/content.config.ts`。
- `z` 必须从 `astro/zod` 导入（Zod v4 的重新导出）——**不是** `astro:content`，也**不是** `astro:schema`。
- `glob` loader 从 `astro/loaders` 导入。
- `defineCollection` / `getCollection` / `getEntry` / `render` 从 `astro:content` 导入。

会构建失败的导入（复制旧教程常见坑）：
- [禁止] `import { z } from 'astro:content'`
- [禁止] `import { z } from 'astro:schema'`
- [禁止] `import { z } from 'zod'`

正确导入：
- [正确] `import { z } from 'astro/zod'`

---

## 2. 完整 `src/content.config.ts`

```typescript
// src/content.config.ts
// Astro 6 Content Layer + Zod v4（z 必须来自 astro/zod）
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 8 类皮肤分类（slug 值，必须与路由 /skins/category/[slug] 对齐）
const categoryEnum = z.enum([
  'dark-midnight',    // Dark & Midnight
  'light-airy',       // Light & Airy
  'anime-pop',        // Anime & Pop
  'neon-cyberpunk',   // Neon & Cyberpunk
  'nature-earthy',    // Nature & Earthy
  'retro-vintage',    // Retro & Vintage
  'pastel-soft',      // Pastel & Soft
  'mono-terminal',    // Mono & Terminal
]);

// 平台枚举（与 compatibleWith 共用）
const platformEnum = z.enum(['codex-desktop', 'codex-cli', 'both']);

// 安装格式枚举：决定详情页 InstallBlock 渲染方式（见 §3.2）
const installFormatEnum = z.enum([
  'dreamskin-v1',    // 引擎 preset / agent prompt
  'codedrobe-theme', // 下载 .codedrobe-theme 应用（对齐 codexskins.org）
  'prompt',          // 可复制 prompt 块
  'tmtheme',         // CLI /theme 指令
  'manual',          // 见来源手动安装
]);

// 主色校验：#RGB 或 #RRGGBB（用户皮肤数据，非 UI chrome）
const hexColor = z
  .string()
  .regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, { error: 'Must be a hex color, e.g. #1A2B3C' });

const skins = defineCollection({
  // glob loader：扫描 src/content/skins 下所有 .md
  loader: glob({ pattern: '**/*.md', base: './src/content/skins' }),
  schema: z.object({
    // id 由 loader 从文件名自动派生，无需声明；
    // slug 为可选显式覆盖（见 §7），绝大多数情况省略
    slug: z.string().optional(),

    name: z.string().min(1, { error: 'Skin name is required' }),
    author: z.string().min(1, { error: 'Author is required' }),

    category: categoryEnum,
    // 心情标签，作为分面筛选 facet 之一（MVP 为自由字符串，后续可枚举化）
    mood: z.string().min(1, { error: 'Mood is required (used as a filter facet)' }),

    // 用户皮肤主色（业务数据，合法）；UI chrome 一律走 Design Token
    color: hexColor,

    platform: platformEnum,

    description: z.string().min(1, { error: 'Description is required' }),

    // 预览图：支持本地 /previews/xxx.webp 或远程 https:// URL；缺失时详情页/卡片走兜底（见 §3.1、§7）
    previewImage: z.string().optional(),

    // 主安装方式：可复制粘贴的 prompt（必填）
    installPrompt: z.string().min(1, { error: 'Install prompt is required' }),
    // 安装格式：驱动详情页 InstallBlock 渲染与复制逻辑（见 §3）
    installFormat: installFormatEnum.default('prompt'),
    // 可选 theme.json（frontmatter 中以 YAML 对象表达）；
    // 结构待 Codex 官方 theme schema 锁定后细化，现用宽松 record 占位
    themeJson: z.record(z.string(), z.unknown()).optional(),

    // 来源外链（仓库 / 画廊 / 商店），必须是绝对 URL（Zod v4 顶层 z.url()）
    sourceUrl: z.url({ error: 'sourceUrl must be an absolute URL' }),

    // 兼容平台列表（默认仅 Desktop）
    compatibleWith: z.array(platformEnum).default(['codex-desktop']),

    // 是否精选（首页 SPONSORED / FEATURED 位）
    featured: z.boolean().default(false),

    // 最后更新时间（ISO 字符串或 Date 均可，z.coerce.date 兼容两者）
    updatedAt: z.coerce.date(),

    // 统计：用于排序与展示；初始为 0，后续人工或 PR 更新
    stats: z
      .object({
        installs: z.number().int().min(0).default(0),
        likes: z.number().int().min(0).default(0),
      })
      .default({ installs: 0, likes: 0 }),
  }),
});

export const collections = { skins };
```

---

## 3. 字段说明

| 字段 | 类型 | 必填 | 说明 / 约束 |
|------|------|------|-------------|
| `slug` | `string?` | 否 | 可选显式 URL 覆盖；默认用文件名作为 slug（见 §7）。 |
| `name` | `string` | 是 | 皮肤显示名。 |
| `author` | `string` | 是 | 创作者名 / 组织名。 |
| `category` | enum(8) | 是 | `dark-midnight` / `light-airy` / `anime-pop` / `neon-cyberpunk` / `nature-earthy` / `retro-vintage` / `pastel-soft` / `mono-terminal`。与路由 `/skins/category/[slug]` 对齐。 |
| `mood` | `string` | 是 | 心情标签，分面筛选 facet（MVP 自由串，后续可枚举）。 |
| `color` | `hex` | 是 | 用户皮肤主色 `#RGB` 或 `#RRGGBB`。**业务数据**，非 UI chrome 硬编码色。 |
| `platform` | enum | 是 | `codex-desktop` / `codex-cli` / `both`。 |
| `description` | `string` | 是 | 一句描述，用于卡片与详情与 meta description。 |
| `previewImage` | `string?` | 否 | 预览图路径或 URL（**可选**）。本地放 `public/previews/*.webp` 写 `/previews/xxx.webp`；远程写 `https://...`。页面侧用 `new URL(previewImage, Astro.site)` 解析为绝对 URL。**缺失时兜底**：详情页/卡片渲染占位块 + Lucide `image-off`（24px）+ 文案 "Source may have changed"，满足 Spec §10 错误态（见 §3.1）。 |
| `installPrompt` | `string` | 是 | 复制粘贴式安装提示词，详情页 InstallBlock 复制源。 |
| `themeJson` | `object?` | 否 | 可选 theme.json；YAML 对象表达。结构待 Codex 官方 schema 锁定后细化。 |
| `installFormat` | enum | 否 | 安装格式，默认 `prompt`。详情页 InstallBlock 按值渲染（见 §3.2）：`prompt`→可复制 prompt 块；`tmtheme`→CLI `/theme`；`codedrobe-theme`→下载 `.codedrobe-theme` 应用（对齐 codexskins.org）；`dreamskin-v1`→引擎 preset/agent prompt；`manual`→见来源。 |
| `sourceUrl` | `url` | 是 | 来源外链，绝对 URL（Zod v4 `z.url()`）。 |
| `compatibleWith` | `enum[]` | 否 | 兼容平台列表，默认 `['codex-desktop']`；`platform: 'both'` 时应含两者。 |
| `featured` | `boolean` | 否 | 是否精选，默认 `false`。 |
| `updatedAt` | `date` | 是 | 最后更新时间，`z.coerce.date()` 兼容 ISO 串与 Date。 |
| `stats.installs` | `number` | 否 | 安装量，默认 0。 |
| `stats.likes` | `number` | 否 | 点赞量，默认 0（详情页可映射为 aggregateRating.ratingCount）。 |

### 3.1 预览图兜底（previewImage 缺失）

当 `previewImage` 未提供时，卡片与详情页**不渲染破图**，改为：
- 占位块（背景走 Design Token `--surface` / 边框 `--border`）；
- Lucide `image-off` 图标 24px，颜色走 `text-muted` Token；
- 文案 `Source may have changed`。

满足 Spec §10 错误态。约束：图标用 `@lucide/astro` 内联 SVG，**绝不 emoji**、绝不硬编码色。schema 中 `previewImage` 已为 `.optional()`，不填也能通过校验。

### 3.2 InstallBlock 按 installFormat 渲染

详情页安装块根据 `installFormat` 切换渲染：

| installFormat | InstallBlock 渲染 |
|---------------|-------------------|
| `prompt` | 可复制 prompt 代码块（复制 `installPrompt`） |
| `tmtheme` | CLI `/theme` 指令块（复制命令行） |
| `codedrobe-theme` | 下载 `.codedrobe-theme` 文件并应用的按钮（对齐 codexskins.org） |
| `dreamskin-v1` | 引擎 preset / agent prompt 应用入口 |
| `manual` | 引导「See source」跳转 `sourceUrl` 手动安装 |

约束：复制类格式走 `Copy` 图标（Lucide 20px）+ 复制成功变 `Check` 图标；下载/跳转类走对应 Lucide 图标；全部颜色经 Token 工具类，无 emoji。

---

## 4. Frontmatter 示例（单篇 `src/content/skins/aurora-midnight.md`）

```markdown
---
slug: aurora-midnight
name: Aurora Midnight
author: nova-themes
category: dark-midnight
mood: calm
color: "#1E293B"
platform: both
description: A deep, low-saturation dark theme with a soft aurora accent band for long night coding sessions.
previewImage: /previews/aurora-midnight.webp   # 可选；缺失时详情页/卡片走兜底（见 §3.1）
installPrompt: "codex skin apply aurora-midnight --variant dark"
installFormat: prompt   # 可选，默认 prompt；可选 dreamskin-v1 / codedrobe-theme / tmtheme / manual
themeJson:
  name: aurora-midnight
  colors:
    bg: "#0B1020"
    fg: "#E2E8F0"
    accent: "#38BDF8"
sourceUrl: https://github.com/nova-themes/aurora-midnight
compatibleWith:
  - codex-desktop
  - codex-cli
featured: true
updatedAt: 2026-08-10
stats:
  installs: 1840
  likes: 312
---

Aurora Midnight pairs a near-black workspace with a low-saturation aurora
accent band, tuned for reduced eye strain during night shifts. The default
variant ships dark; a light variant is available via the same prompt.
```

---

## 5. 与仓库 PR 模板对齐

架构 §9 规定 PR 模板字段须与 Content Collection schema 对齐，便于后续同步。映射如下：

| Schema 字段 | PR 模板字段 | 备注 |
|-------------|-------------|------|
| `name` | 名称 (Name) | 直接对应 |
| `author` | 作者 (Author) | 直接对应 |
| `category` | 分类 (Category) | 8 类枚举值一致 |
| `previewImage` | 预览图 (Preview image) | **可选**；PR 填 URL，入库时落地为 `/previews/` 路径；缺省走兜底 |
| `installPrompt` | 安装提示词 (Install prompt) | 直接对应 |
| `installFormat` | 安装格式 (Install format) | 5 选 1，默认 prompt |
| `installFormat` | 安装格式 (Install format) | 枚举：dreamskin-v1 / codedrobe-theme / prompt / tmtheme / manual；默认 prompt |
| `sourceUrl` | 来源链接 (Source URL) | 直接对应 |
| `mood` / `color` / `platform` / `compatibleWith` / `themeJson` / `description` / `featured` / `updatedAt` / `stats` | 扩展字段 | PR 模板可增列，保持同步即可 |

PR 通道入库动作：维护者将 PR 内容落成 `src/content/skins/<slug>.md`（frontmatter + 描述正文），提交即重建站点（ADR-004 双通道无后端）。

---

## 6. Zod v4 关键差异（P3 必读，避免复制旧教程构建失败）

- `z.url()`（**顶层**），不是 `z.string().url()`。
- `z.email()`（顶层），不是 `z.string().email()`。
- 错误消息用 `{ error: '...' }`，不是 `{ message: '...' }`。
- `.default()` 的值必须匹配**输出类型**（Zod v4 transform 之后）。本 schema 无 transform，直接给同类型默认值即可。
- `updatedAt` 用 `z.coerce.date()` 兼容 ISO 字符串与 `Date` 对象。
- `render(post)` 是从 `astro:content` 导入的**函数**，不是 `post.render()` 方法。
- `getStaticPaths` 的 `params.slug` 用 `entry.id`（Content Layer 无 `slug` 字段；`entry.id` 由 glob loader 从文件名派生）。
- `getStaticPaths` 的 params **必须是字符串**（v6 强制）；`entry.id` 已是字符串，无需转换。

---

## 7. `id` 与 `slug` 的关系

- **`id`**：由 glob loader 从文件名自动派生（`aurora-midnight.md` → `id: 'aurora-midnight'`）。**不要在 frontmatter 声明 `id`**，loader 会覆盖。
- **`slug`（可选显式覆盖）**：若希望 URL 与文件名不同（如含大写 / 空格），在 frontmatter 设 `slug`，并在 `getStaticPaths` 用 `entry.data.slug ?? entry.id`。
- **默认约定**：文件名即 slug，保持 kebab-case、全小写、无空格，避免深层链接断裂（详见 routes.md 风险项）。
- **`previewImage`（可选，见 §3.1）**：缺失时详情页/卡片走兜底（占位块 + Lucide `image-off` 24px + 文案 "Source may have changed"），满足 Spec §10 错误态；schema 中已为 `.optional()`，不填也能通过校验。
