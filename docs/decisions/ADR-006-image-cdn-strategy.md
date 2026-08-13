# ADR-006: 图片与媒体走独立 CDN（隔离 Vercel 计费）

## Status
Proposed — 待用户选择实施项（A/B/C/D）（2026-08-13）。

## Background
用户 Vercel team 的 **ISR Writes 已超 200K 被暂停**，根因是 Vercel 按 ISR/Function/带宽计费，访问量起量越热越烧额度直至熔断。当前站点将进入"图片很大量"阶段（皮肤站真屏摄预览、Pet Generator 生成像素宠物 9 动画帧），若仍按"大图随站走、随 Vercel 出"的旧模式，会再次推高 Vercel 三类计费指标。

需明确两点事实：
- **皮肤索引站（本仓库）按 ADR-002 部署 Cloudflare Pages**：纯静态、带宽免费、无函数、无 ISR → 本身不碰任何 Vercel 指标。现有 `public/previews/` 为 33 个 SVG（各 ~3KB），`previewImage` 字段已支持本地/远程 URL，组件用原生 `<img loading="lazy">` 且未用 `astro:assets` / Vercel 图片优化（现状正确）。
- **真正的风险点是 codexpetgenerator.com（Pet Generator，部署在 Vercel，OpenRouter 生图 + 出图）**：它是站内唯一会随图片量增长而放大 Vercel 成本的站点。

Vercel 被图片推高的三类指标与对策：

| Vercel 指标 | 图片如何推高 | 隔离后对策 |
|---|---|---|
| 带宽 (egress) | 大图从 Vercel 边缘出，按 GB 计费 | 图存 Cloudflare R2（**零 egress**），Vercel 只出 HTML/JSON（几十 KB） |
| Image Optimization 转码 | 用 `/_vercel/image` 按需缩放 = 按次计费函数 | 关掉；缩放交给 Cloudflare Images 的 `cdn-cgi/image/w=480,format=auto` 免费做，或构建期预生成多尺寸 |
| ISR Writes / Function 调用 | 画廊页用 ISR 随图再生 = 写入 | 皮肤站纯静态（0 写入）；Pet Generator 画廊静态化 + 长缓存 |

## Decision（核心原则）
**媒体与计算彻底拆开**：所有重图（真屏摄 / 生成帧）存入 Cloudflare R2（零 egress）或 Cloudflare Images（免费按需缩放），用 CDN 域名出图；Vercel 只跑 OpenRouter 生图计算与返回 URL，绝不从 Vercel 带宽出大图、绝不走 Vercel Image Optimization 函数。

**皮肤索引站（本仓库）落地规则：**
1. `previewImage` 改为只接受远程 CDN URL（如 `https://cdn.awesomecodexskin.com/skins/cyber-neon.webp`），禁止栅格图进 `public/previews/`。
2. 提交/迁移时把图传 R2，只存一张主图；缩略图用 Cloudflare Images 变体按需出（`/cdn-cgi/image/w=480,format=auto/...`），省存储且自动 WebP/AVIF。
3. `<img>` 保持 `loading="lazy"`，补 `decoding="async"`，首屏图加 `fetchpriority="high"`；容器已 `aspect-video` 防 CLS，保持。
4. CDN 给图片加 `Cache-Control: public, max-age=31536000, immutable`。
5. 加**构建期守门**脚本（`scripts/` 下 `.mjs`）：构建前若 `public/previews/` 出现栅格图 > 100KB 或数量超阈值即 fail build，从机制上杜绝重图混进仓库再上 Vercel。

**Pet Generator（Vercel，重点救）落地规则：**
1. 生图后直接写 R2，接口只回 CDN URL；9 动画帧在生成时拼成 sprite/缩略图一起存 R2。
2. `next.config` 设 `images: { unoptimized: true }`，不用 `next/image` 的 Vercel 优化；前端 `<img>` 直链 CDN。
3. 社区画廊页静态化 + 长缓存，图全走 CDN。
4. 若量继续涨，把 Pet Generator 整体从 Vercel 迁 Cloudflare Workers（dev==prod workerd，零成本）。

## Consequences
正面：
- 三类 Vercel 指标（带宽 / 图片转码 / ISR 写入）全部归零或近零，访问量再大也不熔断。
- 仓库 `dist/` 体积小、构建快（重图不在仓库内）。
- Cloudflare 生态复用（已是 ADR-002 的宿主），R2 + Images 同账号零额外运维。

负面 / 待办：
- 需新建 R2 bucket + 配置 Cloudflare Images（一次性接入成本）。
- Pet Generator 出图链路需改代码（写 R2 而非本地/临时存储）。
- 现有 33 个 SVG 预览若保留在 `public/previews/` 仍可（体积极小），但**未来栅格图必须走 CDN**——由构建期守门脚本强制。

## 待用户选择的实施项（本 ADR 落地路径）
- **A** 本仓库加构建期图片守门脚本 + `previewImage` 远程图规则（零风险，先防住）。
- **B** 接入 R2 bucket + Cloudflare Images，含现有 33 个 SVG 的迁移处理。
- **C** 改 Pet Generator 出图链路（写 R2 + 关 Vercel 图片优化）。
- **D** 仅本 ADR 作为决策文档，暂不动代码。

> 状态维持 Proposed，待用户回复 A/B/C/D 后改 Accepted 并推进对应实施。

## Related ADRs
ADR-002（部署 Cloudflare Pages，绕开 Vercel 配额）
