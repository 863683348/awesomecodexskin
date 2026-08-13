# 路由与页面映射（网站轨 P2 技术细化）

> 产出：网站轨 P2 技术细化 | 负责人：高见远（首席架构师）
> 配套：content-schema.md（数据来源）/ ADR-001（Astro 6）/ ADR-003（Lucide）/ seo.md（JSON-LD 映射）
> P0 合规：无 emoji；UI 颜色走 Design Token，本表不含任何 UI 硬编码色。

---

## 1. 9 个页面路由映射表

说明：核心 9 个路由 = **7 个 P0 静态页** + **1 个 P0 提交页** + **1 个 P1 工具页**（主题预览器）。提示词生成器为额外 P1 工具页（见行 9b）。所有 P0 页均为 SSG（`output: 'static'`），构建期由 Content Collection 聚合。

| # | 路由 | 文件 | getStaticPaths | 数据来源 | 核心组件归属 | JSON-LD | 优先级 |
|---|------|------|----------------|----------|--------------|---------|--------|
| 1 | `/` | `src/pages/index.astro` | 否（单页，构建期 `getCollection`） | `getCollection('skins')` 排序/过滤 | `Hero` / `SearchBar`（岛）/ `FilterBar`（岛）/ `SkinCard` / `Sponsored` / `SubmitCTA` / `Footer` | `ItemList`（featured） | P0 |
| 2 | `/skins` | `src/pages/skins/index.astro` | 否 | `getCollection('skins')` + 客户端筛选 | `FacetSidebar`（岛）/ `SkinCard` / `Pagination` / `EmptyState` / `Footer` | `ItemList` | P0 |
| 3 | `/skins/category/[slug]` | `src/pages/skins/category/[slug].astro` | **是**（8 个分类） | `getCollection` 按 `category` 过滤 | `FacetSidebar` / `SkinCard` / `EmptyState` / `Footer` | `ItemList` | P0 |
| 4 | `/skins/[slug]` | `src/pages/skins/[slug].astro` | **是**（全部 skin） | `getEntry('skins', id)` + `render(skin)` | `SkinPreview` / `ThumbnailSwitcher`（岛）/ `InstallBlock`（岛 Copy）/ `CompatibleBadges` / `RelatedSkins` / `ReportLink` / `Footer` | `BreadcrumbList` + `SoftwareApplication` | P0 |
| 5 | `/faq` | `src/pages/faq.astro` | 否 | 静态内容（inline 或 `src/content/*.md`） | `FaqAccordion`（岛，可选）/ `Footer` | `FAQPage` | P0 |
| 6 | `/install` | `src/pages/install.astro` | 否 | 静态 | `Steps` / `PlatformTabs`（岛）/ `Footer` | `HowTo` | P0 |
| 7 | `/tutorial` | `src/pages/tutorial.astro` | 否 | 静态 | `Steps` / `Footer` | `HowTo` | P0 |
| 8 | `/submit` | `src/pages/submit.astro` | 否 | Web3Forms + GitHub PR 双通道 | `SubmitForm`（岛）/ `LivePreview`（岛）/ `Footer` | — | P0 |
| 9 | `/tools/theme-preview` | `src/pages/tools/theme-preview.astro` | 否 | 纯客户端 | `ThemePreview`（岛，`iframe sandbox`） | — | P1 |
| 9b | `/tools/prompt-generator` | `src/pages/tools/prompt-generator.astro` | 否 | 纯客户端 | `PromptGenerator`（岛，字符串模板 + clipboard） | — | P1 |

---

## 2. getStaticPaths 契约（精确代码）

### 2.1 详情页 `/skins/[slug]`（P0）

```typescript
// src/pages/skins/[slug].astro
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const skins = await getCollection('skins');
  return skins.map((skin) => ({
    // entry.id 由 glob loader 从文件名派生，已是字符串（v6 强制字符串 params）
    params: { slug: skin.id },
    props: { skin },
  }));
}

const { skin } = Astro.props;
const { Content } = await render(skin); // 函数式 render，非 skin.render()
```

### 2.2 分类页 `/skins/category/[slug]`（P0）

```typescript
// src/pages/skins/category/[slug].astro
import { getCollection } from 'astro:content';

const CATEGORIES = [
  'dark-midnight', 'light-airy', 'anime-pop', 'neon-cyberpunk',
  'nature-earthy', 'retro-vintage', 'pastel-soft', 'mono-terminal',
];

export async function getStaticPaths() {
  const skins = await getCollection('skins');
  return CATEGORIES.map((cat) => ({
    params: { slug: cat },
    props: {
      category: cat,
      skins: skins.filter((s) => s.data.category === cat),
    },
  }));
}
```

> 注意：`getCollection` 返回顺序**非确定性**（平台相关），凡涉及排序（newest / popular）必须在页面内自行 `sort`（见 content-schema.md §6）。`/skins` 与首页的分页、排序同理。

---

## 3. 组件归属与文件组织约束（对齐代码组织标准）

按架构代码组织硬规则约束 P3 开发：

- **单一职责**：`SkinCard`、`FilterBar`、`InstallBlock`、`SubmitForm` 等各司其职，不互相塞逻辑。
- **入口只装配**：`*.astro` 页面文件只做数据获取 + 组件装配，业务逻辑下沉到 `src/components/*` 或 `src/lib/*`。
- **单文件 ≤ 300 行**：超长组件拆子组件（如 `InstallBlock` 拆 `CopyButton` 岛）。
- **图标统一 Lucide**：所有图标走 `@lucide/astro`（`Search` / `LayoutGrid` / `ArrowRight` / `Download` / `ExternalLink` / `PlusCircle` / `Copy` / `Sun` / `Moon` / `Tag` / `Github`），颜色经 Token 工具类（`text-fg` / `text-muted` / `text-accent`），绝不 emoji、绝不硬编码色。
- **岛粒度**：静态画廊用默认（无 directive）；`SearchBar` / `FilterBar` / `CopyButton` / `ThemePreview` / `SubmitForm` / `LivePreview` 用 `client:load`（首屏可交互）或 `client:visible`（下折叠）；主题切换用 `client:load`。

---

## 4. 与 Spec §7 / 架构 §8 路由不一致（已对齐，见回传）

- Spec §7 路由为 **`/skins/:slug`** 与 **`/skins/category/:slug`**（复数 `skins/`）。
- 架构 §8 目录写的是 `skin/[slug].astro`（单数）与 `category/[slug].astro`（置于 pages 根，得 `/category/[slug]`）。
- **本表标准化为 Spec 的复数形式**：`/skins/[slug]`、`/skins/category/[slug]`，文件落位 `src/pages/skins/[slug].astro` 与 `src/pages/skins/category/[slug].astro`。架构 §8 目录描述需同步修正（不在此文档改动）。
