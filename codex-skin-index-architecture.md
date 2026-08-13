# 架构文档 — Codex 皮肤索引站（轻量静态栈 + GitHub 仓库双轨）

> Phase 1 产出 | 负责人：高见远（首席架构师） | 全部无 emoji（满足 P0）
> 形态决策（2026-08-13 用户确认）：**双轨** —— GitHub 仓库 `awesome-codex-skin-projects` 作权威源/外链飞轮 + Astro 网站作 SEO/变现载体。

## 1. 静态框架对比矩阵（推荐 Astro 6）
对比 Astro 6 / Hugo / Eleventy / VuePress，维度：SEO/SSG、交互工具前端 JS 支持、markdown 内容管理、构建速度、部署便利。

| 框架 | 评分 | 结论 |
|------|------|------|
| **Astro 6** | 9/10 | 最契合混合站。组件岛让静态索引(SEO)与交互工具(预览器/生成器)同框架静动共存，零后端 |
| Hugo | 7/10 | 极快，但交互要手搓 Alpine |
| Eleventy | 6/10 | 交互需自拼 bundler |
| VuePress | 5/10 | 偏文档站，SPA 跳转损 SEO |

**选 Astro 6 的 6 条理由**：
1. 组件岛：静态索引页 + 交互工具（主题预览器/提示词生成器）同框架静动共存，零后端
2. Content Collections + Zod 类型安全收录皮肤数据
3. 内建 `@astrojs/sitemap` / `@astrojs/rss`
4. 近零 JS = 极佳 CWV，Cloudflare Pages 无限带宽下 SEO 起量**不会触发配额熔断**（直接解你 Vercel ISR 超 200K 被暂停的坑）
5. 2026-01 Cloudflare 收购 Astro 团队，`@astrojs/cloudflare` 一等公民、dev==prod workerd
6. `@lucide/astro` 官方集成内联 SVG 零运行时

## 2. 核心功能可行性（全部可行）
- 静态索引/分类/详情页：SSG + `getStaticPaths`，每皮肤一页
- 主题预览器：组件岛 + `<iframe sandbox>` 注入 CSS + FileReader 读本地背景图，全程不离开浏览器，零后端
- 提示词生成器：组件岛 + 字符串模板 + `navigator.clipboard`，零后端
- 提交入口：见 ADR-004，无后端
- GitHub 仓库层：独立仓库，纯 markdown + PR 投稿，零构建（见 §9 / ADR-005）

## 3. 部署方案（绕开 Vercel）
**主选 Cloudflare Pages**：静态请求/带宽无限（无按请求计费函数，从根消除配额熔断）、全球 300+ 节点 CDN、免费自定义域名+SSL、500 builds/月。
实操：`git push` → Dashboard Workers&Pages → Pages → Connect Git → preset Astro / build `npm run build` / out `dist` → Custom domains 绑 awesomecodexskin.com。纯静态无需适配器。
备选：Netlify（内置 Forms 100/月）；排除 GitHub Pages（无 serverless、1GB 上限）。
**仓库部署**：GitHub 仓库 `awesome-codex-skin-projects` 本身即托管在 github.com，无需额外部署。

## 4. SEO 工程要点
- `@astrojs/sitemap` 自动产出 `sitemap-index.xml`；`robots.txt` 含 Sitemap 指令；每页 title/desc/canonical/OG/Twitter 取自 frontmatter
- JSON-LD：首页/分类页 `ItemList`、详情页 `BreadcrumbList`+`SoftwareApplication`、FAQ 页 `FAQPage`、教程页 `HowTo`
- 多页静态化 + 每页必须有预览图/步骤/FAQ（避 deepai 腰斩教训）
- 内链闭环：首页↔分类↔详情三层互链；全站固定入口 Codex Pet Generator / Codex Skin，形成 Pet↔Skin↔Index 三角导流；外链提交 awesome-codex-pets-projects + AI 导航站；**双轨互链**：GitHub 仓库 README 顶部置网站 CTA、网站 footer 置 "View on GitHub" 链接，仓库吃生态外链、网站吃搜索流量；GSC 周复盘 + 监控 ChatGPT/Perplexity

## 5. 锁定图标库（满足 P0）
锁定 **Lucide**，依赖 `@lucide/astro`（v1, MIT）。理由：官方 Astro 集成内联 SVG 零 JS、tree-shakeable 单图标导入、1500+ 图标覆盖索引场景、统一 24x24 stroke 契合开发者美学且与 Tailwind `currentColor` 暗色零成本、完全规避 emoji。
索引站映射：Search / LayoutGrid / ArrowRight / Download / ExternalLink / PlusCircle / Copy / Sun / Moon / Tag / Github。

## 6. ADR 草案（MADR 格式）
- **ADR-001 框架选 Astro 6**（astro@^6.1.0, Node 22）
- **ADR-002 部署 Cloudflare Pages**（绕开 Vercel ISR 配额）
- **ADR-003 锁定 Lucide**（`@lucide/astro`）
- **ADR-004 提交入口无后端**（Web3Forms 250/月 + GitHub PR 双通道）
- **ADR-005 双轨形态：GitHub 仓库 + Astro 网站**（仓库 `awesome-codex-skin-projects` 作权威源/外链飞轮，对标 alterhq/awesome-codex-pets-projects；网站作 SEO/变现载体；README 与网站互链）

> 关于 openapi.yaml：本站纯静态无后端，无自有 API，不产出 openapi.yaml；唯一"端点"是第三方 Web3Forms 提交 URL（POST https://api.web3forms.com/submit + access_key 隐藏字段），字段契约在 ADR-004 / submit.astro 内联说明。

## 7. 具体版本与命令（非泛泛）
package.json 关键依赖：
```
astro ^6.1.0
@astrojs/sitemap ^3.2.0
@astrojs/rss ^4.0.0
@lucide/astro ^1.0.0
@tailwindcss/vite ^4.0.0
tailwindcss ^4.0.0
```
devDeps: `wrangler ^4.0.0`

初始化：`npm create astro@latest`（选 Empty/Minimal + TS strict）；`node -v` 须 >=22。
`astro.config.mjs`：`site` 设独立域名、`output:'static'`、`integrations:[sitemap()]`、vite 挂 tailwindcss。
Content schema 文件名用 Astro 6 的 `src/content.config.ts`（Zod v4，推荐 `astro/zod`）。

## 8. 目录结构（建议）
```
src/
  content.config.ts        # Zod schema 定义 skin 数据
  content/skins/*.md       # 每个主题一篇（frontmatter + 描述）
  components/              # 画廊卡 / 筛选条 / 复制按钮 / 预览器岛 / 提交表单
  layouts/Base.astro
  pages/
    index.astro           # 首页索引
    category/[slug].astro # 分类页
    skin/[slug].astro     # 详情页
    faq.astro
    tools/theme-preview.astro
    tools/prompt-generator.astro
    submit.astro          # 提交入口
    install.astro / tutorial.astro
  styles/tokens.css        # Design Token（来自设计师）
public/                    # 静态资源、robots.txt
```

## 9. GitHub 仓库层（双轨之权威源，ADR-005）
独立仓库 `awesome-codex-skin-projects`（对标 alterhq/awesome-codex-pets-projects，皮肤侧目前空白，先占外链）：
- **README 结构**：项目说明 → 快速开始（安装皮肤通用步骤）→ 资源全集（按 8 分类枚举链接到网站详情页）→ 工具/引擎索引（Codex Dream Skin 等）→ 投稿指南（PR 模板）→ 姊妹站互链（网站 + Pet/Skin 站占位）
- **与网站分工**：仓库只做"权威索引源 + 外链入口"，不重复网站功能；每个主题在 README 链到网站 `/skin/[slug]` 详情页；网站 footer 置 "View on GitHub" 回链仓库
- **PR 投稿模板**：GitHub Issue/PR 模板，字段含名称/作者/分类/预览图/安装提示词/来源链接，与网站 Content Collection schema 对齐，便于后续同步
- **协议**：CC0/MIT，允许社区复制复用，加速传播
- **命名**：仓库名建议 `awesome-codex-skin` 或 `awesome-codex-skin-projects`（用户拍板）；用户为 owner
