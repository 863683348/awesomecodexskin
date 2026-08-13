# ADR-001: 采用 Astro 6 作为静态站点框架

## Status
Accepted (2026-08-13)

## Background
需为海外英文 Codex 皮肤索引站（awesome-codex-skin 式总导航）选型。站点形态为混合站：静态索引/分类/详情页（重 SEO）+ 交互工具（主题预览器、提示词生成器，需前端 JS）+ 预留提交入口。约束：独立新域名、绕开 Vercel（用户 Vercel team ISR Writes 超 200K 被暂停）、目标是 SEO 引流 + 与已有 Codex Pet / Codex Skin 站形成流量闭环。候选：Astro、Hugo、Eleventy、VuePress。

## Decision
采用 **Astro 6**（最新稳定线，6.0 于 2026-03-10 发布，6.1 于 2026-04 发布；`astro@^6.1.0`，要求 Node 22 LTS）。

- 静态页走 SSG（`output: 'static'`），默认近零 JS → 极佳 Core Web Vitals。
- 交互工具以组件岛（`client:load` / `client:idle`）承载，纯前端、零后端。
- 内容收录用 Content Collections + Zod（schema 文件 `src/content.config.ts`），类型安全。
- SEO 用内建 `@astrojs/sitemap` + `@astrojs/rss`。
- 图标库用官方 `@lucide/astro`（见 ADR-003）。

## Consequences
正面：
- 混合站静动共存于同一框架，无需为交互另起 SPA。
- 近零 JS + Cloudflare Pages 无限带宽 → SEO 起量不触发配额熔断（直接解 Vercel 痛点）。
- 2026-01 Cloudflare 收购 Astro 团队，`@astrojs/cloudflare` 在 dev/prerender/prod 全程跑真实 workerd，`dev == prod`。
- Content Collections 让皮肤数据扩展零摩擦。

负面：
- 构建速度中等（v5 约 500 页 18s；v6 Rust 编译器仍为实验特性），但内容站规模可接受。
- 团队需熟悉 Astro 组件/岛心智（类 React），对纯后端团队有学习成本。
- Astro 6 破坏性变更：`Astro.glob()` 移除、需 `astro/zod`（Zod v4）、Node 22 强制——新项目按 v6 起步规避迁移。

## Related ADRs
ADR-002（部署）、ADR-003（图标库）、ADR-004（提交入口）
