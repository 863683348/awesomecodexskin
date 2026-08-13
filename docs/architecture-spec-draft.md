# 架构文档草案 · awesome-codex-skin 海外 Codex 皮肤索引站

> 版本：Phase 1 技术调研草案 v0.1
> 日期：2026-08-13
> 作者：高见远（首席架构师）
> 关联：codex-skin-seo-plan.md / codex-pet-seo-plan.md（用户已有站点 SEO 方案）

---

## 0. 背景与硬约束（来自主理人）

- **目标**：面向海外（英文）的 Codex 皮肤索引站，定位 awesome-codex-skin 式总导航。
- **形态**：混合站 = 静态索引页 + 交互工具（主题预览器 / 提示词生成器）+ 预留提交入口。
- **部署**：独立新域名，绕开 Vercel（用户 Vercel team 的 ISR Writes 已超 200K 被暂停）。
- **目的**：SEO 引流 + 变现，与用户已有的 Codex Pet 生成站、Codex Skin 皮肤站形成流量闭环。
- **P0 绝对规则**（违反即退回）：
  1. 架构/API 文档禁止 emoji；
  2. 必须锁定一套 SVG 图标库（本文锁定 Lucide）；
  3. 技术栈选型必须包含该图标库依赖。

---

## 1. 静态框架对比矩阵

维度：SEO/SSG 能力、交互工具（前端 JS）支持、内容管理（markdown 收录）、构建速度、部署便利。

| 维度 | Astro 6 | Hugo | Eleventy (11ty) | VuePress |
|------|---------|------|-----------------|----------|
| 语言 / 范式 | JS/TS，组件岛（Islands） | Go，模板（Go template） | JS，模板（Nunjucks/Liquid） | Vue，偏 SPA 文档站 |
| SEO / SSG | 原生 SSG，默认近零 JS，内建 sitemap/RSS，CWV 极佳 | 极快 SSG，但交互需额外手脚 | SSG 灵活，SEO 工具需自拼 | SSG，但页面间 SPA 跳转，不利纯静态 SEO |
| 交互工具（前端 JS）支持 | 组件岛 `client:*` 原生支持 React/Vue/原生 TS 岛，同一页静动共存 | 需手动注入 Alpine.js / 原生 JS，无官方岛模型 | 需自己接 bundler（webpack/esbuild）较繁琐 | Vue 组件天然可交互，但整站偏重、首屏 JS 大 |
| 内容管理（markdown 收录） | Content Collections + Zod 类型校验，强类型 | 原生 markdown + frontmatter，强但无类型 | 原生，灵活，无强类型 | markdown 强，偏文档约定 |
| 构建速度 | 中等（v5 约 500 页 18s；v6 Rust 实验编译器可达 ~100x） | 极快（Go 编译） | 快 | 中等 |
| 部署便利 | Cloudflare/Netlify/GH Pages 预设一键 | 需自建 CI 或 Netlify | 需配置 CI | 需配置 |
| 学习曲线 | 中（类 React 心智） | 低-中（学模板语法） | 低（简单） | 中（需懂 Vue） |
| 与 Cloudflare 契合度 | 极高（2026-01 Cloudflare 收购 Astro 团队，一等公民） | 中 | 中 | 中 |
| 适用度评分 | **9/10**（最契合混合站） | 7/10（交互欠奉） | 6/10（交互要 DIY） | 5/10（偏文档） |

### 推荐：Astro 6

理由（具体到本项目的 6 点）：

1. **混合站天然适配**：静态索引/分类/详情页走 SSG（SEO 满分），主题预览器与提示词生成器作为 `client:load`/`client:idle` 组件岛按需水合，纯前端 JS、零后端。同一框架内静动共存，无需为交互另起一个 SPA。
2. **内容收录类型安全**：皮肤数据用 Content Collections + Zod 校验（名称、分类、标签、预览图、CSS 链接、安装提示词），扩展分类页/详情页/`getStaticPaths` 零摩擦，避免脏数据上生产。
3. **SEO 工程开箱即用**：`@astrojs/sitemap` + `@astrojs/rss` 内建集成，构建期自动产出 sitemap 与 feed。
4. **近零 JS = 极佳 Core Web Vitals**（Google 排名直接因素），且在 Cloudflare Pages 无限带宽下，**SEO 起量不会触发任何按请求计费的配额熔断** —— 这正是 Vercel ISR Writes 超 200K 被暂停的根因解药。
5. **Cloudflare 一等公民**：2026-01 Cloudflare 收购 Astro 团队；`@astrojs/cloudflare` 适配器在 dev/prerender/prod 全程跑真实 workerd 运行时，`dev == prod`。
6. **图标库官方集成**：`@lucide/astro` 官方包，内联 SVG、零运行时（满足 P0 锁定 SVG 图标库规则）。

**落选说明**：Hugo 构建最快但交互工具要手搓 Alpine/JS，且 Go 模板与后续可能的 React 岛不搭；Eleventy 灵活但交互与 SEO 工具都要自己拼装；VuePress 偏文档站、SPA 跳转损害纯静态 SEO 与轻量诉求。

---

## 2. 核心功能技术可行性

### 2.1 静态索引 + 分类页 + 详情页（SSG 天然支持）

- 首页 `/`：ItemList 展示全部皮肤（分页/无限滚动可选）。
- 分类页 `/category/[slug]`：按 `category` 字段 `getStaticPaths` 生成（anime / celebrity / eyecare / tech / game / festival / minimal / other）。
- 详情页 `/skin/[slug]`：每个皮肤一页，含预览图、安装步骤、安装提示词、外链（repo/CSS）、BreadcrumbList 结构化数据。
- FAQ 页 `/faq`：FAQPage 结构化数据，吃 Google AI Overview + ChatGPT 引用（来自已有 SEO 方案）。
- 每页由 Content Collection frontmatter 自动产出 `<title>` / `description` / OpenGraph / canonical。

### 2.2 交互工具（纯前端 JS，无需后端）

| 工具 | 实现方式 | 后端需求 |
|------|----------|----------|
| 主题预览器 | Astro 组件岛（原生 TS），用户粘贴 CSS → 注入 `<iframe sandbox>` 的 `<style>`；上传背景图 → `FileReader` 读本地文件转 dataURL 设为背景，**全程不离开浏览器** | 无 |
| 提示词生成器 | 组件岛，用户选主题名/配色/特性 → 字符串模板拼接出可复制的安装提示词 → `navigator.clipboard.writeText` | 无 |

- 两个工具挂独立页 `/tools/theme-preview` 与 `/tools/prompt-generator`，作为获外链神器（记者/博主会引用，来自 SEO 方案）。
- 水合指令：`client:load`（工具页首屏即需交互）或 `client:idle`（详情页内嵌的小型预览）。

### 2.3 预留提交入口（无后端方案对比）

| 方案 | 成本 | 配额(免费) | 是否需要账号 | 评价 |
|------|------|-----------|--------------|------|
| **GitHub Issue / PR** | 0 | 无限 | 需 GitHub 账号 | 最 authentic（awesome 列表本就是 PR 制），零垃圾，但普通用户有门槛 |
| **Web3Forms**（表单服务） | 0 | 250 条/月 | 仅需邮箱换 Access Key | 无后端、POST 即达邮箱、内置 honeypot 反垃圾、自定义跳转；MVP 提交量绰绰有余 |
| Formspree | 0 | 50 条/月 | 需注册 | 成熟但免费额度偏低 |
| Netlify Forms | 0 | 100 条/月 | 需托管在 Netlify | 与 Cloudflare 部署冲突，排除 |

**结论（见 ADR-004）**：MVP 采用 **双通道** —— 主通道为 GitHub Issue/PR 链接（authentic、零成本、零垃圾），辅助通道为 Web3Forms 表单（照顾无 GitHub 的普通用户）。两者均无任何后端/函数计费，不会重演 Vercel 配额熔断。

---

## 3. 部署方案（绕开 Vercel）

### 3.1 主选：Cloudflare Pages

**为什么绕开 Vercel**：Vercel 按 ISR/Function 请求计费，SEO 起量越热越烧额度（用户已踩坑超 200K 被暂停）。Cloudflare Pages 的**静态请求与带宽无限**，根本不存在按请求计费的后端函数，SEO 流量再大也不会熔断。

**配额（免费层）**：无限静态请求/带宽、500 builds/月、1 并发构建、100 自定义域名、全球边缘 CDN（300+ 节点）、免费 SSL、免费 Web Analytics、自动 DDoS 防护。限制：每次构建从零（~10 分钟，无 Vercel 式构建缓存）、单次部署 2 万文件 / 25MB 单文件上限。对“内容变更才重建”的索引站，500 builds/月充裕。

**实操命令**：

```bash
# 1. 代码推到 GitHub（Cloudflare 通过 Git 集成自动构建）
git init
git add .
git commit -m "init awesome-codex-skin"
git branch -M main
git remote add origin https://github.com/<you>/awesome-codex-skin.git
git push -u origin main

# 2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git
#    Framework preset: Astro
#    Build command:     npm run build
#    Build output dir:  dist
#    → Save and Deploy（每次 push 自动重建，PR 自动出预览部署）

# 3. 绑定独立新域名
#    Settings → Custom domains → Set up a domain → 输入域名
#    → Cloudflare 自动配置 CNAME + 免费 SSL（若域名 NS 已在 Cloudflare 则秒过）

# 4.（可选）本地预览构建产物
npm run build
npx wrangler pages dev ./dist
```

> 纯静态站（`output: 'static'`）**不需要** `@astrojs/cloudflare` 适配器；仅当后续要用 Server Islands / 实时计数等 SSR 能力时才加。

### 3.2 备选：Netlify

- 免费 100GB/月带宽、300 build 分钟/月、内置 Forms（100 条/月）、自动 HTTPS、全球 CDN。
- 若想用 Netlify Forms 做提交入口（替代 Web3Forms），可切到此方案，但带宽有上限（SEO 大流量时不如 Cloudflare 无限）。
- 构建配置同 Cloudflare：`Build command: npm run build` / `Publish directory: dist`。

### 3.3 排除：GitHub Pages

- 免费但无 serverless、1GB 站点体积上限、仅适合纯静态。本混合站未来若加 SSR 能力则受限，且 CDN 节点数不及 Cloudflare。仅作最后兜底。

---

## 4. SEO 工程要点

### 4.1 基础产出（构建期自动）

- `@astrojs/sitemap` → `https://<domain>/sitemap-index.xml`
- `robots.txt` 含 `Sitemap: https://<domain>/sitemap-index.xml`
- 每页 `<title>` / `meta description` / canonical / OpenGraph / Twitter Card（取自 Content Collection frontmatter）

### 4.2 结构化数据（JSON-LD）

| 页面 | Schema 类型 | 目的 |
|------|-------------|------|
| 首页 / 分类页 | `ItemList`（每项 `ListItem`） | 让 Google 理解皮肤列表，助力富媒体 |
| 详情页 | `BreadcrumbList` + `SoftwareApplication` | 面包屑 + 软件条目增强 |
| FAQ 页 | `FAQPage` | 吃 Google AI Overview + ChatGPT 引用（来自 SEO 方案） |
| 安装教程页 | `HowTo` | 步骤富媒体 |

首页 ItemList 示例（构建期由集合渲染）：

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Awesome Codex Skin Index",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "url": "https://<domain>/skin/midnight-aurora" },
    { "@type": "ListItem", "position": 2, "url": "https://<domain>/skin/sakura-dawn" }
  ]
}
</script>
```

### 4.3 多页静态化

- `getStaticPaths` 生成：首页、每个分类页、每个皮肤详情页、FAQ 页、工具页。
- 每页不可只有按钮（来自 SEO 教训：deepai 流量腰斩因只有大词页）：详情页必须有预览图、安装步骤、默认参数、风格选择、下载方式、FAQ。

### 4.4 内链策略（流量闭环核心）

- **站内三层互链**：首页 ↔ 分类页 ↔ 详情页；详情页 → 相关分类、相关工具（主题预览器/提示词生成器）。
- **三站闭环**：全站顶部/底部固定入口「Codex Pet Generator」与「Codex Skin」，详情页安装步骤外链到用户已有 Codex Skin 站；反向在已有两站加「Skin Index」入口，形成 Pet↔Skin↔Index 三角导流（来自两份 SEO 方案）。
- **外链获取**：提交到 `awesome-codex-pets-projects`（宠物侧总索引，可互链）、AI 导航站（Way.ai 等）、社区（V2EX / 少数派 / Linux DO）。品牌提及回收 + 摩天楼内容抢占竞品外链。
- **监控**：GSC 每周复盘（曝光无点击→改 title/desc；点击无留存→改产品）；监控 ChatGPT / Perplexity 是否推荐本站。

> 纯英文站无需 hreflang，但必须 canonical 防重复；独立新域名避免与已有站内容重复被惩罚。

---

## 5. 图标库锁定

**锁定：Lucide，依赖 `@lucide/astro`（v1，MIT）**

理由（对应 P0 规则）：

1. **官方 Astro 集成**：渲染为内联 SVG，零 JS 运行时开销，契合静态站性能诉求。
2. **Tree-shakeable**：按图标单文件导入（`import Home from '@lucide/astro/icons/home'`），仅打包用到的图标，构建更小。
3. **覆盖索引站所需**：1500+ 图标覆盖 搜索/分类/筛选/排序/外链/下载/提交/箭头/复制/暗色 等场景。
4. **统一 24x24 stroke 风格**：契合开发者索引站的克制美学；与 Tailwind `currentColor` 配合，暗色模式零成本切换。
5. **完全规避 emoji**（满足 P0 规则）：所有图标均为 SVG，无任何 emoji 字符。
6. **依赖明确入栈**：`package.json` 中显式声明 `@lucide/astro`，技术栈选型包含该图标库依赖。

索引站常用图标映射（示例，非穷举）：`Search`（搜索）、`LayoutGrid`（分类）、`ArrowRight`（外链/进入）、`Download`（下载）、`ExternalLink`（跳转源站）、`PlusCircle`（提交入口）、`Copy`（复制提示词）、`Sun`/`Moon`（暗色切换）、`Tag`（标签）。

用法示例（颜色统一走 Design Token 派生 text 工具类，禁止硬编码色值；尺寸取 16/20/24px 规范）：

```astro
---
import { Search, PlusCircle, ExternalLink } from '@lucide/astro';
---
<Search size={20} class="text-muted" />
<PlusCircle size={20} class="text-accent" />
<a href="..."><ExternalLink size={16} class="text-fg" /></a>
```

> 视觉系统（暗色优先 chrome、青绿 `--accent`、字体 Geist / Inter / Geist Mono）由 Designer 在 Phase 2 的 DESIGN.md / design-tokens.json（Tailwind v4 语法）交付。本架构仅约束：图标库锁定 Lucide、图标颜色必须走 Design Token（text-fg / text-muted / text-accent），不得硬编码色值（P0 规则）。

> 备选说明：若未来需聚合多套图标，可改用 `astro-icon` + `@iconify-json/lucide`（仍锁定 Lucide 这一套），但 MVP 直接用 `@lucide/astro` 最干净、依赖最明确。

---

## 6. 工具链与依赖（具体版本 + 命令）

### 6.1 初始化

```bash
# 使用最新 Astro 6 脚手架
npm create astro@latest
# 选择：Empty / Minimal 模板；TypeScript: strict
cd awesome-codex-skin
node -v   # 必须 >= 22（Astro 6 要求 Node 22 LTS）
```

### 6.2 package.json 依赖（具体版本，非泛泛）

```json
{
  "name": "awesome-codex-skin",
  "type": "module",
  "version": "0.1.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "astro": "^6.1.0",
    "@astrojs/sitemap": "^3.2.0",
    "@astrojs/rss": "^4.0.0",
    "@lucide/astro": "^1.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "tailwindcss": "^4.0.0"
  },
  "devDependencies": {
    "wrangler": "^4.0.0"
  }
}
```

### 6.3 astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://awesomecodexskin.com',   // 改为实际独立域名
  output: 'static',                        // 纯静态，无需适配器
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
```

### 6.4 Content Collection Schema（src/content.config.ts，Astro 6 文件名）

```ts
import { defineCollection, z } from 'astro:content';
// Astro 6 推荐 astro/zod(Zod v4)，'astro:content' 的 z 仍兼容

const skins = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    author: z.string(),
    category: z.enum(['anime','celebrity','eyecare','tech','game','festival','minimal','other']),
    tags: z.array(z.string()).default([]),
    previewImage: z.string().optional(),
    cssUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    installPrompt: z.string().optional(),
    description: z.string(),
    featured: z.boolean().default(false),
    dateAdded: z.coerce.date(),
  }),
});

export const collections = { skins };
```

### 6.5 目录结构（可执行约束）

```
awesome-codex-skin/
├─ src/
│  ├─ content.config.ts        # Zod schema
│  ├─ content/
│  │  └─ skins/                # 每个皮肤一个 .md（frontmatter + 正文）
│  │     ├─ midnight-aurora.md
│  │     └─ sakura-dawn.md
│  ├─ layouts/
│  │  └─ Base.astro            # <head> SEO 元信息 + JSON-LD 注入点
│  ├─ components/
│  │  ├─ SkinCard.astro
│  │  ├─ CategoryNav.astro
│  │  ├─ ThemePreviewer.astro  # client:load 岛
│  │  └─ PromptGenerator.astro # client:load 岛
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ category/[slug].astro
│  │  ├─ skin/[slug].astro
│  │  ├─ faq.astro
│  │  ├─ tools/theme-preview.astro
│  │  ├─ tools/prompt-generator.astro
│  │  └─ submit.astro          # Web3Forms 表单 + GitHub 链接
│  └─ styles/global.css        # Tailwind v4 入口
├─ public/robots.txt
├─ astro.config.mjs
└─ package.json
```

> Tailwind v4 令牌配置：本项目用 `@tailwindcss/vite`（v4），Design Token 在 `src/styles/global.css` 内以 `@theme { --color-bg: ...; --color-fg: ...; --color-muted: ...; --color-accent: <青绿>; }` 内联声明，**不使用 `tailwind.config.js` 的 `theme.extend` 写法**（v3 语法）。图标与组件统一引用 `text-fg` / `text-muted` / `text-accent` 等派生工具类，禁止硬编码色值（P0 规则）。具体令牌值由 Designer 在 Phase 2 DESIGN.md / design-tokens.json 交付。

### 6.6 交互工具岛示例（主题预览器，零后端）

```astro
---
// src/components/ThemePreviewer.astro
---
<div class="grid gap-4">
  <iframe id="pv-frame" title="Theme preview" class="w-full h-64 border rounded" sandbox="allow-same-origin"></iframe>
  <textarea id="pv-css" rows="6" placeholder="Paste your CSS here..."></textarea>
  <input id="pv-bg" type="file" accept="image/*" />
</div>

<script>
  const frame = document.getElementById('pv-frame') as HTMLIFrameElement;
  const css = document.getElementById('pv-css') as HTMLTextAreaElement;
  const bg = document.getElementById('pv-bg') as HTMLInputElement;

  function applyCss(text: string) {
    const doc = frame.contentDocument!;
    let style = doc.getElementById('injected') as HTMLStyleElement | null;
    if (!style) { style = doc.createElement('style'); style.id = 'injected'; doc.head.appendChild(style); }
    style.textContent = text;
  }
  css.addEventListener('input', () => applyCss(css.value));

  // 背景图仅本地读取，不离开浏览器
  bg.addEventListener('change', () => {
    const file = bg.files?.[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const doc = frame.contentDocument!;
      doc.body.style.backgroundImage = `url(${reader.result})`;
      doc.body.style.backgroundSize = 'cover';
    };
    reader.readAsDataURL(file);
  });
</script>
```

在工具页以 `<ThemePreviewer client:load />` 引入即可。

---

## 7. 可行性结论摘要

| 功能 | 可行性 | 说明 |
|------|--------|------|
| 静态索引/分类/详情页 | 完全可行 | SSG + Content Collections + getStaticPaths |
| 主题预览器（上传/粘贴 CSS） | 完全可行 | 组件岛 + iframe sandbox + FileReader，零后端 |
| 提示词生成器 | 完全可行 | 组件岛 + 字符串模板 + clipboard API，零后端 |
| 提交入口 | 完全可行 | Web3Forms 表单 + GitHub Issue/PR，零后端 |
| SEO 结构化数据 | 完全可行 | JSON-LD 手写 + @astrojs/sitemap 自动 |
| 绕开 Vercel 配额 | 完全可行 | Cloudflare Pages 无限带宽静态托管 |
| 三站流量闭环 | 完全可行 | 内链 + 交叉入口（见 SEO 4.4） |

**整体 verdict：pass** —— 技术栈（Astro 6 + Cloudflare Pages + Lucide + Tailwind v4 + Web3Forms）完整覆盖混合站全部需求，且从根上消除 Vercel 配额熔断风险。

---

## 8. ADR 索引（详见 docs/decisions/）

- ADR-001：采用 Astro 6 作为静态站点框架
- ADR-002：部署于 Cloudflare Pages（绕开 Vercel）
- ADR-003：锁定 Lucide（`@lucide/astro`）为 SVG 图标库
- ADR-004：提交入口采用无后端方案（Web3Forms + GitHub PR）
