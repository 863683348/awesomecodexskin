# PRD — Codex 皮肤索引站（双轨：GitHub 仓库 awesome-codex-skin-projects + Astro 网站）

> Phase 1 产出 | 负责人：许清楚（PM） | 基线：2026-08-12 联网调研（6 轮 WebSearch + 2 轮 WebFetch）
> 形态决策（2026-08-13 用户确认）：**双轨** —— GitHub 仓库作权威源/外链飞轮 + Astro 网站作 SEO/变现载体，README 与网站互链。

## 0. 问题陈述
海外 Codex（OpenAI Codex Desktop）用户想把默认黑白灰界面换成个性化皮肤，但皮肤生态目前是"碎片化 + 无总入口"：
- 主题散落在多个 GitHub 仓库（jstxn/codex-themes 数百个 JSON、BigPizzaV3/CodexPlusPlus-Themes、ChannelerH/codex-skin-packs 等）
- 画廊/商店各自为政（codexthemes.ai 商店、codex-skin.dev 单一画廊、codexskins.org 引擎方画廊、codexdreamskin.com 平台）
- 安装教程分散在各博客与 README，用户要自行分辨 macOS/Windows、Node 版本、CDP 安全边界
- **没有"awesome-codex-skin"式中立总索引**，把上述所有散源汇总、分类、对比、一键直达

对照 Codex Pet 生态已出现 Awesome-Codex-Pets 索引 + codex-pet.org / codexpethub.com / petdex 等多站点索引网络；**皮肤方向尚无对等物 → 蓝海**。

## 1. 目标用户画像
**主要：海外 Codex Desktop 个人用户**
- 身份：开发者 / 独立开发者 / 设计师 / AI 编码爱好者；macOS（Apple Silicon 为主）与 Windows
- 技术：会复制命令、能跑脚本，但不愿深究 CDP/打包细节；部分纯小白
- 搜索词（SEO 核心）：codex skin / codex theme / codex dream skin / codex desktop theme / custom codex theme / codex skins gallery / how to theme codex / codex dream skin themes / install codex theme
- 痛点排序：①找不到汇总入口 ②安装复杂/平台差异 ③担心安全（动 API Key/签名）④教程分散 ⑤不知如何自己造主题

**次要：主题创作者 / 想接定制单的人** — 做了皮肤想被发现、想接定制、想变现。

## 2. 竞品分析
### 2.1 直接竞品
| 竞品 | 形态 | 内容量 | 变现 | SEO 推断 |
|------|------|--------|------|----------|
| CodexThemes (codexthemes.ai) | 英文商店：Themes+Skins 画廊+Create+Submit+FAQ | 数十主题（含中文梗混杂） | 首页赞助商横幅（ShipAny/MCP.so/AITDK）+Submit 入口 | 2026-07 新域，权重低→机会 |
| codex-skin.dev | 英文社区画廊："复制提示词换肤"+教程+FAQ+对比 | 十余概念皮肤 | 未见显式变现（引流） | 新域，体量小 |
| codexskins.org | 引擎方画廊：概念+2 预设+社区投稿+教程+安全说明 | 10+概念+2 预设 | 引流引擎本体 | 官方域，仅限本引擎 |
| codexdreamskin.com / theme.codexguide.ai | macOS 客户端+Astro+Vercel+Supabase：画廊+AI 创作+创作者中心+积分+支付宝 | 数十预设/社区 | 积分/付费主题/70%分成/Alipay | 平台化最重，对海外不友好 |

### 2.2 替代/参照
- Awesome-Codex-Pets + codex-pet.org 等：证明"awesome 式总索引"在 Codex 生态可行，且 Pet 有完整索引网络而 Skin 没有 → 直接对标空白
- CodexPets 系列（codexpethub/codexpet.directory/aimcp.info）：索引站+提交入口+分类筛选成熟范式
- GitHub 主题仓库（jstxn/codex-themes 等）：证实"分散在 GitHub、需统一索引"痛点真实
- **alterhq/awesome-codex-pets-projects**：宠物侧总索引仓库，本项目的直接对标（皮肤侧尚无对等物，先占）

## 3. 市场空白结论
1. **无中立总索引**：现有站都从"自家引擎/商店"视角出发，无跨源 awesome-style 汇总
2. **教程与安装未集中**：安全说明/平台差异/故障恢复散落各处
3. **变现尚早期可抢占**：CodexThemes 已挂赞助商但无付费收录/affiliate；平台竞品绑微信/支付宝，对海外英文用户不友好 → 我们的英文+Stripe/PayPal+affiliate 是差异化
4. **窗口期短**：生态 2026-07 才爆发，竞品域名年轻、SEO 权重低。谁先以"内容全+SEO好+英文原生"占 "codex skin/theme" 头部，谁拿长期自然流量

## 4. 差异化定位
- **中立总索引，不是商店也不是引擎**：汇总 GitHub 仓库/各画廊/各商店主题，统一分类、预览、直达安装，不绑单一引擎
- **英文原生 + 海外变现**：区别于竞品微信/支付宝，用 Stripe/PayPal + affiliate
- **双轨形态（仓库+网站）**：GitHub 仓库 `awesome-codex-skin-projects` 作为权威源/外链飞轮（对标 alterhq/awesome-codex-pets-projects，皮肤侧空白先占），Astro 网站作为 SEO 与变现载体；README 与网站互链，仓库吃生态外链、网站吃搜索流量
- **与自有 pet·skin 站流量闭环**：站内导流 CTA，把皮肤流量导入已有 Codex Pet 站与 Codex Skin 站

## 5. 核心功能 + RICE
公式：Score = (Reach × Impact × Confidence) / Effort

| 功能 | R | I | C | E | Score | MVP |
|------|---|---|---|---|-------|-----|
| 首页索引（Hero+搜索+分类入口+Featured+赞助位+导流 CTA） | 10 | 2 | 100% | 2 | 10.0 | 是 |
| **GitHub 仓库总索引（awesome-codex-skin-projects）权威源+外链飞轮** | 10 | 1 | 100% | 1 | 10.0 | 是 |
| 安装/FAQ/教程中心（统一安全说明+多平台步骤+故障恢复） | 8 | 2 | 100% | 2 | 8.0 | 是 |
| 主题详情页（预览+安装提示词/命令+兼容+来源+相关） | 9 | 2 | 100% | 3 | 6.0 | 是 |
| 赞助商广告位（首页/分类/详情） | 10 | 0.5 | 100% | 1 | 5.0 | 是 |
| 导流自有 pet/skin 站 CTA（首页+详情+footer） | 10 | 0.5 | 100% | 1 | 5.0 | 是 |
| 主题列表/分类页（颜色/心情/风格/来源筛选） | 9 | 1 | 100% | 3 | 3.0 | 是 |
| 提交入口（表单+审核队列，预留付费收录） | 4 | 1 | 100% | 2 | 2.0 | 是 |
| 提示词生成器 | 6 | 2 | 80% | 5 | 1.92 | 否(P1) |
| affiliate 推荐专区 | 7 | 0.5 | 80% | 2 | 1.40 | 否(P2) |
| 主题预览器 | 5 | 2 | 80% | 6 | 1.33 | 否(P1) |
| 付费收录/置顶 | 3 | 1 | 80% | 2 | 1.20 | 否(P2) |

## 6. MVP 范围（P0 上线即 SEO+变现最小闭环）
1. 首页索引（搜索入口+分类入口+Featured+赞助位+导流 CTA）
2. 主题列表/分类页（颜色/心情/风格/来源筛选）
3. 主题详情页（预览+安装提示词/命令+兼容+来源+相关）
4. 安装/FAQ/教程中心（统一安全边界+macOS/Windows 步骤+故障恢复）
5. 提交入口（表单+审核队列，预留付费收录字段）
6. 赞助商位 + 导流自有站 CTA（变现基本盘）
7. **GitHub 仓库 `awesome-codex-skin-projects`**（README 分类索引 + PR 投稿模板 + 与网站互链，抢皮肤侧总索引外链先机）

**P1（上线后 2–4 周）**：提示词生成器（优先，低成本高差异化）、主题预览器
**P2（增长/深度变现）**：affiliate 专区、付费收录/置顶、用户账户与评分评论

## 7. 变现路径映射
| 方式 | 落点 | 实现 |
|------|------|------|
| 赞助商位 | 首页 Hero 下横幅、分类页侧栏、详情页底部 | 静态广告位+UTM（参考 codexthemes.ai ShipAny/MCP.so 模式） |
| 导流自有 pet·skin 站 | 首页 CTA、详情页"想要配套宠物？"、全站 footer | 站内 CTA+深层链接，皮肤→宠物流量闭环 |
| GitHub 仓库导流 | README 顶部"Browse all skins on the website" CTA + 各主题链到网站详情页 | 仓库外链流量导入网站，形成仓库↔网站互链飞轮 |
| 定制服务 | 详情/提交页"Request custom theme" CTA+联系表单 | 导流独立定制服务（按单定价，不在本站交易） |
| 付费收录 | 提交表单勾选"Featured/Priority"+详情页"Promote" | 付费优先审核/置顶（Stripe/PayPal） |
| affiliate | affiliate 专区+详情页"用 X 引擎安装"链接 | 推荐 Codex Dream Skin 引擎/主题生成 AI 等带联盟链接 |

## 8. 验收标准（EARS）
- Given 用户访问首页，When 搜索框输入 "neon"，Then 返回标题/标签含 neon 的主题列表且响应 < 500ms
- Given 用户在分类页选"dark + sci-fi"，When 提交筛选，Then 列表仅显示同时满足两项的主题
- Given 用户打开主题详情页，When 加载完成，Then 展示预览图+可复制安装提示词+兼容平台标记+来源外链
- Given 创作者填提交表单并附主题链接，When 点击提交，Then 进入审核队列且"付费收录"字段可勾选
- Given 用户点击赞助商横幅，When 跳转，Then 目标 URL 携带本站 sponsor UTM
- Given 用户打开 GitHub 仓库 README，When 滚动至资源全集，Then 每个主题链接到网站对应 `/skin/[slug]` 详情页

## 9. 边界条件
- 空状态：筛选无结果→"暂无匹配，去提交一个"；提交队列空→空态文案
- 错误状态：外链失效/预览图失败→占位图+"来源可能已变更"
- 加载状态：列表/详情骨架屏（统一 SVG 加载图形，非 emoji）
- 边界值：单页上限 24 条分页；搜索词 1–64 字符
- 并发/离线：静态页 CDN 缓存；提交表单前端校验+失败重试
- 权限拒绝：审核后台仅授权账号，未授权 403

## 10. 非功能需求
| 类别 | 要求 | 优先级 |
|------|------|--------|
| 性能 | 静态首屏 <3s(CDN)，搜索 p95 <500ms | P0 |
| SEO | 每主题/分类独立可索引 URL+规范化 meta+sitemap+JSON-LD；英文语义化；预渲染 | P0 |
| 安全 | HTTPS 全站；提交表单校验+速率限制+reCAPTCHA；外链 rel="nofollow noopener" | P0 |
| 兼容性 | Chrome/Safari/Firefox 最新 2 版；macOS/Windows；移动端响应式 | P0 |
| 可访问性 | WCAG 2.1 AA 基本（键盘可达、对比度、图标 alt/aria） | P2 |
| 国际化 | 英文第一语言；预留 i18n | P1 |
| 技术约束 | 轻量静态框架（Astro 6），绕开 Vercel ISR 配额，网站域名 awesomecodexskin.com；仓库与网站双轨 | P0 |
| 图标 | 统一 SVG 图标库（架构师锁 Lucide）；PRD 图标均文字描述，不用 emoji | P0 |

## 11. 数据埋点（MVP 必埋）
| 类别 | 事件 |
|------|------|
| 获客 | page_view |
| 激活 | first_core_action（首次复制安装提示词/首次浏览主题） |
| 转化 | sponsor_click / affiliate_click / cta_pet_click / submit_click / payment_complete / github_referral |
| 异常 | error_occurred |

实现：前端轻量 SDK（Umami/Plausible/自建 trackEvent）；命名 `{对象}_{动作}`；不采集隐私（不上报 IP、不存用户输入）。

## 12. 待架构/设计确认
- 架构师：框架锁定 Astro 6；皮肤数据结构（MD/JSON+构建期聚合）；搜索用客户端索引（Pagefind/Fuse.js）还是轻量后端；提交表单后端如何绕开 Vercel；GitHub 仓库结构（README 分类+PR 模板）
- 设计师：SVG 图标库选型与规范；配色（排除紫粉）；首页/详情/分类信息架构与响应式；赞助位与 CTA 视觉克制；footer 置 "View on GitHub" 回链
