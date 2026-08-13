# ADR-003: 锁定 Lucide（`@lucide/astro`）为 SVG 图标库

## Status
Accepted (2026-08-13)

## Background
P0 绝对规则要求：架构/API 文档禁止 emoji；必须锁定一套 SVG 图标库（由架构师选型）；技术栈选型必须包含该图标库依赖。本项目为索引站，需图标覆盖 搜索/分类/筛选/排序/外链/下载/提交/复制/暗色 等场景，且须零 JS 运行时、可 tree-shake、风格统一。候选：Lucide、Heroicons、Tabler、Iconify 聚合。

## Decision
锁定 **Lucide**，依赖 **`@lucide/astro`（v1，MIT）**。

- 官方 Astro 集成，渲染内联 SVG，零 JS 运行时。
- 按图标单文件导入（`@lucide/astro/icons/<name>`），tree-shakeable，仅打包用到的图标。
- 1500+ 图标覆盖索引站所需场景；统一 24x24 stroke 风格，与 Tailwind `currentColor` 配合实现暗色模式零成本。
- 完全规避 emoji（满足 P0 规则）；`package.json` 显式声明 `@lucide/astro`，技术栈包含该依赖。
- 图标颜色统一走 Design Token 派生 text 工具类（text-fg / text-muted / text-accent），禁止硬编码色值（P0 规则）；令牌值由 Designer 在 Phase 2 DESIGN.md / design-tokens.json（Tailwind v4 `@theme` 语法）交付。

## Consequences
正面：
- 依赖明确、单一来源（非 Iconify 多套聚合），锁定语义清晰。
- 内联 SVG 零运行时，不影响 Core Web Vitals。
- 与 P0 规则完全一致（无 emoji、依赖入栈）。

负面：
- 单套图标风格固定，若未来需品牌定制图标需另做 inline SVG 组件（少量补充可接受）。
- 若需聚合多套图标，需改 `astro-icon` + `@iconify-json/lucide`；MVP 不采用。

## Related ADRs
ADR-001（框架）
