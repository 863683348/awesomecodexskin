# Spec — Codex 皮肤索引站（双轨）v1.0

> 生成日期：2026-08-13
> 基于：PRD v1 + 架构文档 v1 + UIUX v1
> 状态：已确认（用户 2026-08-13 确认双轨 + P1.5 启动）
> 双轨：GitHub 仓库 `awesome-codex-skin-projects`（权威源 / 外链飞轮） ‖ Astro 网站 `awesomecodexskin.com`（SEO / 变现载体）

---

## 1. 产品定义

- **一句话**：英文原生的 Codex（OpenAI Codex Desktop）皮肤中立总索引——汇总 GitHub 仓库 / 各画廊 / 各商店主题，统一分类、预览、一键直达安装，并导流自有 Pet / Skin 站。
- **目标用户**：海外 Codex Desktop 个人用户（开发者 / 独立开发者 / 设计师 / AI 编码爱好者，macOS Apple Silicon 为主 + Windows）；次要：主题创作者 / 定制接单者。
- **核心问题**：皮肤生态碎片化、无中立总入口、安装教程分散、安全顾虑；对标 Pet 生态已有完整索引网络而 Skin 尚无对等物 → 蓝海窗口期短。

## 2. MVP 范围（锁定——不在此列表的功能一律不做）

| 优先级 | 功能 | 验收摘要 | RICE |
|--------|------|----------|------|
| P0 | 首页索引（搜索 + 分类入口 + Featured + 赞助位 + 导流 CTA） | 见 §9 | 10.0 |
| P0 | GitHub 仓库总索引 `awesome-codex-skin-projects` | README 8 分类 + PR 模板 + 互链 | 10.0 |
| P0 | 安装 / FAQ / 教程中心 | 统一安全边界 + 双平台步骤 + 故障恢复 | 8.0 |
| P0 | 主题详情页 | 预览 + 复制安装 prompt + 兼容 + 来源 + 相关 | 6.0 |
| P0 | 赞助商位 + 导流自有站 CTA | 静态广告位 + UTM；footer 姊妹站互链 | 5.0 |
| P0 | 主题列表 / 分类页 | 颜色 / 心情 / 风格 / 来源筛选 | 3.0 |
| P0 | 提交入口 | 表单 + 审核队列（Web3Forms + PR 双通道），预留付费收录字段 | 2.0 |

**皮肤分类法（8 类，MVP 锁定，可扩展）**：
1. Dark & Midnight　2. Light & Airy　3. Anime & Pop　4. Neon & Cyberpunk
5. Nature & Earthy　6. Retro & Vintage　7. Pastel & Soft　8. Mono & Terminal

**筛选面（facet）**：Category(8) / Mood / Color(主色 hex) / Platform(Codex Desktop · Codex CLI) / Sort(newest · popular)。

## 3. 明确不做（Out-of-Scope — 锁定）

| 不做的功能 | 原因 | 何时考虑 |
|------------|------|----------|
| 提示词生成器、主题预览器 | P1 低成本高差异，非 MVP 闭环必需 | 上线后 2–4 周 (P1) |
| affiliate 专区、付费收录 / 置顶、用户账户 / 评分评论 | P2 增长 / 深度变现，需先有流量 | P2 |
| 自有后端 / 数据库 / 用户系统 | 静态栈零后端，提交走 Web3Forms + PR | 如需审核后台再评估 |
| i18n 多语言 | 英文第一语言，MVP 聚焦海外 | P1 |
| WCAG 2.1 AA 完整审计 | 基本可达性 MVP 做，完整审计 P2 | P2 |
| 绑定单一引擎 / 商店 | 中立索引定位，不绑 | 永不 |

## 4. 技术架构（版本锚定）

| 层 | 技术 | 实际版本 | 锁定原因 |
|----|------|----------|----------|
| 前端框架 | Astro | ^6.1.0 | 组件岛静动共存、Content Collections、近零 JS = 极佳 CWV |
| 样式 | Tailwind CSS | ^4.0.0（@tailwindcss/vite ^4.0.0） | v4 `@theme` 映射 Token |
| 图标 | Lucide | @lucide/astro ^1.0.0（MIT） | 内联 SVG 零 JS、统一描边、避开 emoji（P0） |
| SEO | @astrojs/sitemap ^3.2.0 / @astrojs/rss ^4.0.0 | — | 自动 sitemap / RSS |
| 部署 | Cloudflare Pages | — | 无限带宽绕开 Vercel ISR 200K 熔断 |
| 提交后端 | Web3Forms | — | 250/月免费、零后端、隐藏 access_key |
| 运行时 | Node.js | 22 | Astro 6 要求 |
| 域名 | awesomecodexskin.com | — | 用户已确认 |

## 5. API 端点清单

本站纯静态、零自有后端，**无 API**。唯一外部端点：

| Method | 端点 | 用途 | 认证 |
|--------|------|------|------|
| POST | https://api.web3forms.com/submit | 提交表单（access_key 隐藏字段 + botcheck honeypot） | 无（access_key） |

详见 Architect 产出 `web3forms-contract.md`。

## 6. 数据库表清单

无。皮肤数据用 Astro Content Collections（Markdown + Zod v4 frontmatter），构建期聚合，无运行时 DB。

## 7. 页面清单（锁定）

| 页面 | 路由 | 核心组件 | 设计 Token 主题 | 对应数据 |
|------|------|----------|-----------------|----------|
| 首页 | `/` | 非对称 Hero + 搜索 + 粘性筛选条 + 画廊网格 + SPONSORED + 提交 CTA + footer | dark 默认 | skins collection |
| 列表 / 浏览 | `/skins` | 分面筛选侧栏 + 网格 + 分页 + 结果数 + 空状态 | dark | skins(collection) |
| 分类页 | `/skins/category/:slug` | 同上，按分类过滤 | dark | getStaticPaths |
| 详情页 | `/skins/:slug` | 大图预览 + 缩略图切换 + 安装块(Copy) + Compatible + 相关 + 举报 | dark | skin entry |
| FAQ / 教程 | `/faq`（或 `/install`、`/tutorial`） | 统一安全说明 + 双平台步骤 + 故障恢复 + HowTo JSON-LD | dark | 静态 MD |
| 提交页 | `/submit` | 表单 + 实时预览面板 | dark | Web3Forms + PR |
| 主题预览器 | `/tools/theme-preview` | 粘贴 theme.json → 渲染预览（iframe sandbox） | dark | 客户端（P1，MVP 可选） |
| 提示词生成器 | `/tools/prompt-generator` | 字符串模板 + clipboard | dark | 客户端（P1，MVP 可选） |
| GitHub 回链 | footer 全站 | "View on GitHub" → awesome-codex-skin-projects | — | — |

注：提示词生成器 / 主题预览器按 PRD 属 P1；若开发期有余力可提前，但不得挤占 P0 功能。

## 8. 设计 Token（锁定）

- **主色**：青绿 teal（Dark `--accent:#2DD4BF` / Light `--accent:#0F766E`），chrome 中性灰 + 单一强调色，把色彩留给预览图。
- **字体**：`--font-display "Geist"` / `--font-body "Inter"` / `--font-mono "Geist Mono"`。
- **图标库**：Lucide（锁定，16/20/24px，全站统一，绝不混用、绝不 emoji）。
- **主题**：默认 Dark，Light 二级可持久化（localStorage）。
- **对标**：Vercel / Starlight / Linear 中性灰 + 单强调色 + 等宽代码 + 暗色优先；避开默认靛蓝 `#6366F1`、紫粉渐变。
- 完整 Token 见 Designer 产出 `design-tokens.json` / `design-tokens.css`（基于 UIUX §7）。

## 9. 验收标准（EARS — 锁定，QA 测试唯一依据）

- Given 用户访问首页，When 搜索框输入 "neon"，Then 返回标题 / 标签含 neon 的主题列表且响应 < 500ms
- Given 用户在分类页选 "dark + sci-fi"，When 提交筛选，Then 列表仅显示同时满足两项的主题
- Given 用户打开主题详情页，When 加载完成，Then 展示预览图 + 可复制安装 prompt + 兼容平台标记 + 来源外链
- Given 创作者填提交表单并附主题链接，When 点击提交，Then 进入审核队列且 "付费收录" 字段可勾选
- Given 用户点击赞助商横幅，When 跳转，Then 目标 URL 携带本站 sponsor UTM
- Given 用户打开 GitHub 仓库 README，When 滚动至资源全集，Then 每个主题链接到网站对应 `/skins/:slug` 详情页
- Given 用户切换暗 / 亮主题，When 选择，Then 偏好持久化（localStorage），全站应用

**非功能**：静态首屏 < 3s(CDN)，搜索 p95 < 500ms；HTTPS 全站；外链 `rel="nofollow noopener"`；Chrome / Safari / Firefox 最新 2 版 + 移动响应式。

## 10. 边界与约束

- **空态**：筛选无结果 → "No skins match — clear filters / submit the first"；提交队列空 → 空态文案
- **错误态**：外链失效 / 预览图失败 → 占位图 + "Source may have changed"
- **加载态**：列表 / 详情骨架（SVG 加载图形，非 emoji）
- **边界值**：单页上限 24 条分页；搜索词 1–64 字符
- **并发 / 离线**：静态页 CDN 缓存；提交表单前端校验 + 失败重试
- **权限**：审核后台仅授权账号（MVP 无后台，提交走 Web3Forms 收件 + PR）
- **安全**：HTTPS；提交校验 + 速率限制 + reCAPTCHA（honeypot botcheck）；外链 nofollow noopener

## 11. 内嵌已知坑（从项目记忆）

| 坑 | 技术栈指纹 | 根因 | 修法 |
|----|------------|------|------|
| Vercel ISR 200K 超限被暂停 | Vercel | ISR 写入配额 | 改用 Cloudflare Pages 无限带宽（ADR-002） |
| Astro 6 content config 路径 | astro@6 | v6 用 `src/content.config.ts`（非旧 `src/content/config.ts`） | 用 `src/content.config.ts` + `astro/zod` v4 |
| Tailwind v4 主题 | tailwindcss@4 | v4 用 `@theme` + `@tailwindcss/vite`，无 `tailwind.config.js` | CSS 内 `@theme` 映射 Token |
| Lucide 集成 | @lucide/astro | 需官方集成内联 SVG | 用 `@lucide/astro`，禁 emoji |
| 构建环境无 gh 鉴权 | 本环境 | GH_TOKEN 未设 | 仓库文件本地产出 + 用户推送指南；远程仓由用户建 |
| 硬编码颜色（P0 红线） | 全栈 | 直接写色值 | 全部经 Design Token，仅 `#fff`/`#000` 例外 |

## 12. 端到端验证步骤（Spec 锁定最后一项）

```bash
# 1. 安装依赖
npm install
# 2. 构建（必须 0 错误）
npm run build
# 3. 本地预览（等待 "preview on http://localhost:4321"）
npm run preview
# 4. 核心成功流：首页搜索 "neon" → 断言返回含 neon 卡片
# 5. 筛选：选 dark + sci-fi → 断言仅显示同时满足
# 6. 详情页：打开任一 /skins/:slug → 断言预览图 + Copy 按钮可复制 prompt
# 7. 提交：/submit 填表提交 → 断言 Web3Forms 成功反馈（或 PR 模板渲染）
# 8. 主题切换：切暗 / 亮 → 断言 localStorage 持久化
# 9. SEO：断言 /sitemap-index.xml 生成、每页 title/desc/canonical/OG 存在
```

## 13. 仓库轨（并行，独立于网站）

- 仓库 `awesome-codex-skin-projects`（用户为 owner）作权威源 / 外链飞轮，形态对标 `alterhq/awesome-codex-pets-projects` 但内容为皮肤侧（目前空白，先占）。
- **交付物**（本地产出，远程由用户建）：`README.md`（8 分类索引 + Quick Start + 工具 / 引擎索引 + Contributing + 姊妹站互链）/ `CONTRIBUTING.md` / `LICENSE`(CC0-1.0) / `.github` PR + Issue 模板 / `PUSH.md` 指南。
- 每个主题在 README 链到网站 `/skins/:slug` 详情页；网站 footer 回链仓库 → 双轨互链飞轮。
- 初版手工收录 20–30 个真实皮肤 / 工具把索引填实，后续靠社区 PR 滚雪球。
- 详见 PM 产出 + 架构 §9 / ADR-005。

## 14. 变更记录

| 日期 | 变更内容 | 原因 | 影响范围 |
|------|----------|------|----------|
| 2026-08-13 | Spec v1.0 生成 | 用户确认双轨 + P1.5 启动 | 全站开发依据 |
