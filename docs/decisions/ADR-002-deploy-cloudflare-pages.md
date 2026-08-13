# ADR-002: 部署于 Cloudflare Pages（绕开 Vercel）

## Status
Accepted (2026-08-13)

## Background
用户 Vercel team 的 ISR Writes 已超 200K 被暂停。根因是 Vercel 按 ISR/Function 请求计费，SEO 起量越热越烧额度直至熔断。本项目需独立新域名部署，且形态为静态索引 + 前端交互工具（无后端），要求：自定义域名、免费 SSL、全球 CDN、不因流量起量触发配额熔断。候选：Cloudflare Pages、Netlify、GitHub Pages。

## Decision
主选 **Cloudflare Pages**。

- 静态请求与带宽无限（免费层），无按请求计费的后端函数 → 从根上消除配额熔断。
- 全球边缘 CDN（300+ 节点）→ 海外英文受众低延迟。
- 免费：自定义域名、自动 SSL、Web Analytics、DDoS 防护；500 builds/月、1 并发构建。
- 部署：Git 集成，Framework preset = Astro，`Build command: npm run build`，`Build output: dist`，每次 push 自动重建、PR 自动预览。
- 纯静态（`output: 'static'`）无需 `@astrojs/cloudflare` 适配器；仅未来用 Server Islands/实时计数时才加。

## Consequences
正面：
- 彻底绕开 Vercel 配额陷阱，SEO 流量再大也不熔断。
- 构建配置极简（preset 自动填充），预览部署利于审核。
- 与 Astro 6（Cloudflare 旗下）协同最佳。

负面：
- 每次构建从零（~10 分钟），无 Vercel 式构建缓存；内容站仅变更时重建，500 builds/月充裕。
- 单次部署上限 2 万文件 / 25MB 单文件——皮肤站规模远未触及。
- 若未来需 serverless 函数（如实时提交计数），受 Workers 10 万请求/日免费上限约束，届时评估升级 $5/月计划。

备选：Netlify（100GB/月带宽、内置 Forms 100 条/月）可作为“想用 Netlify Forms 做提交入口”时的替代；GitHub Pages 因无 serverless 与 1GB 站点上限，仅作兜底。

## Related ADRs
ADR-001（框架）、ADR-004（提交入口）
