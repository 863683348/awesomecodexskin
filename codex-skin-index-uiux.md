# UIUX 设计方向 — Codex 皮肤索引站

> Phase 1 产出 | 负责人：颜好看（UI/UX 设计师） | 严守 P0 绝对规则

## 0. 对标与设计趋势
联网调研 5 个直接相关站点，结论：**这是"画廊式索引站"（gallery index），不是营销落地页**。主流设计语言 = 文档站克制风 + 开发者深色工具风 + 极简索引风融合。

| 对标站 | 可借鉴 | 可避开 |
|--------|--------|--------|
| codex-skin.dev | 画廊网格+真实预览图+"Copy install prompt"代码块+3步 How-it-works+FAQ | 它偏单产品展示，我们信息密度更高 |
| codexthemes.ai | 精选网格+完整工作区预览+赞助位+筛选+提交 | 内容偏玩梗，我们用更专业克制 chrome |
| petdex.dev | 画廊+CLI一行安装+多维筛选+详情页+社区提交 | 直接复用其交互骨架 |
| CodexPlusPlus-Themes (GitHub) | 静态 index.json+theme.json+缩略图，PR 投稿 | — |
| Vercel / Astro Starlight / Linear | 中性灰底+单一强调色+Inter/Geist+等宽代码+暗色优先 | 避免默认靛蓝 #6366F1 |

**设计趋势共识**：①暗色优先 chrome（让彩色预览图"跳"出来）②中性灰+单一克制强调色③真实预览图即内容（拒绝抽象 Hero 图形）④等宽字体承载 prompt/命令⑤全站暗/亮双主题+focus ring+reduced-motion。

## 1. 设计寄存器与三轴刻度
- 寄存器：Brand 寄存器（站点即产品，总导航门户）+ Product 寄存器纪律（功能性强、信息密度高、像工具）
- 三轴：`DESIGN_VARIANCE=5`（Hero 左对齐非对称，画廊网格有序）、`MOTION_INTENSITY=4`（仅功能微交互，无装饰动画）、`VISUAL_DENSITY=6`（中高密度但卡片留白充足）
- 默认暗色（开发者工具惯例，让皮肤预览更突出），亮色二级、可持久化

## 2. 配色基调（含色值）
策略：**chrome 近单色 + 单一青绿强调色**，把色彩留给内容（预览图本身已验证多彩）。青绿（teal）刻意避开紫粉红线和默认靛蓝 AI 模板味。

**Dark（默认）**
```
--bg:#0A0A0B; --surface:#141416; --surface-warm:#1C1C1F; --fg:#FAFAFA; --fg-2:#D4D4D8;
--muted:#A1A1AA; --meta:#71717A; --border:#27272A; --border-soft:rgba(255,255,255,0.06);
--accent:#2DD4BF; --accent-hover:#14B8A6; --accent-active:#0D9488; --accent-on:#04201D;
--success:#22C55E; --warn:#F59E0B; --danger:#EF4444;
```
**Light（二级）**
```
--bg:#FAFAFA; --surface:#FFFFFF; --surface-warm:#F4F4F5; --fg:#18181B; --fg-2:#3F3F46;
--muted:#71717A; --meta:#A1A1AA; --border:#E4E4E7; --border-soft:#F4F4F5;
--accent:#0F766E; --accent-hover:#115E59; --accent-active:#134E4A; --accent-on:#FFFFFF;
--success:#16A34A; --warn:#D97706; --danger:#DC2626;
```
强调色纪律：导航 logo/主 CTA/激活态筛选 chip/链接 hover 才用 `--accent`；每屏可见 `--accent` ≤2 处。语义色仅用于状态。

## 3. 字体方案（英文站）
避开反射拒绝列表（Fraunces/Playfair/Space Grotesk/IBM Plex…），选开发者工具语境 distinctive 组合：
```
--font-display: "Geist", system-ui, sans-serif;
--font-body:    "Inter", system-ui, sans-serif;
--font-mono:    "Geist Mono", "JetBrains Mono", ui-monospace, monospace;
```
- 标题字距：≥32px 用 `-0.02em`；ALL CAPS 标签（FEATURED/SPONSORED）必须 `0.08em`
- 字重三级：Read 400 / Emphasize 510 / Announce 600
- 字号 8 级：12/14/16/18/20/24/32/40px
- 引入：Google Fonts CSS2 `family=Geist:wght@400;500;600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500`

## 4. 图标系统（锁定 Lucide + 尺寸规范）
**锁定 Lucide**（MIT，1500+ 图标，1.75–2px 一致描边，24px viewBox，tree-shake；与 Heroicons 二选一，推荐 Lucide 因静态栈/Astro 下有无依赖纯 SVG 方案）。**全站统一，绝不混用，绝不用 emoji 作功能图标。**

| 场景 | 尺寸 | 描边 | 示例 |
|------|------|------|------|
| 行内/导航/表格 | 16px | 1.75 | 搜索/筛选/外链/分类 |
| 按钮内 | 20px | 1.75 | "复制 prompt" 前 copy 图标 |
| 独立/区块头 | 24px | 2.0 | section 标题前/空状态图标 |

- Logo 用自绘 SVG 文字标（wordmark），不用图标代替品牌
- 数据（安装量/作者）统一用 Lucide（`users`/`download`），禁止 🔥👥 等 emoji

## 5. 风格方向（拒绝千篇一律 Hero）
首页**拒绝**"大标题+副标题+居中 CTA+抽象 3D 图形"。改为**内容优先的非对称 Hero**：
- 左栏（~55%）：左对齐标题（具体价值，非 Welcome to）+ 一行具体副文案（如 "A curated index of 300+ Codex skins, pets & workspace mods — copy one prompt, reskin your workspace"）+ 内嵌搜索框（Lucide search）+ 主 CTA「Browse all skins」+ 次 CTA「Submit a skin」
- 右栏/下方（~45%）：**真实皮肤预览缩略图条**（3–4 张真实主题 applied-to-Codex 截图），首屏即真实内容
- 其下：粘性筛选条（分类 chip + Dark/Light + 排序）+ 画廊网格
- 网格 `gap:24px`、卡片 padding `--space-4`，hover 仅 2px border 变色 + 极轻 translateY(-2px)，不放大阴影

## 6. 四页面视觉结构 + 交互工具
**① 首页 `/`**
- 顶栏：wordmark + 导航（Skins / Pets↗ / Skin Generator↗ / Categories / Submit）+ 主题切换 + Submit 按钮
- 非对称内容 Hero（见 §5）
- 粘性筛选/排序条
- 画廊网格（皮肤卡：16:9 真实预览图+名称+一行描述+标签 pill[Dark/Anime/Minimal]+作者(Lucide user)+安装量(Lucide download)+hover 显 Copy prompt/View）
- 「SPONSORED / FEATURED」精选项（变现位，与 organic 视觉区分、不欺骗）
- 「Submit your skin」CTA 带
- 页脚：分类索引 + 姊妹站交叉链接（Pets/Skin Generator，形成流量闭环）+ RSS + GitHub（回链 awesome-codex-skin-projects 仓库）+ 语言(EN)；网站域 awesomecodexskin.com

**② 分类/浏览页 `/skins`、`/skins/category/:slug`**
- 页头：分类标题 + 结果计数
- 桌面左侧栏（移动抽屉）：分面筛选（Category/Mood/Color/Dark·Light/Sort）
- 主区：画廊网格 + 分页 + 结果数
- 空状态：「No skins match — clear filters / submit the first」+ 操作按钮（非 emoji）

**③ 皮肤详情页 `/skins/:slug`**
- 大图预览（完整工作区截图）+ 缩略图切换（light/dark 变体、细节裁切）
- 标题/作者/描述/标签/统计（安装量、点赞、更新时间）
- **安装块**：等宽代码框展示 copy-paste prompt 或 theme.json，带 Copy 按钮（Lucide copy，复制成功变 check+文案）
- 「Compatible with」：Codex Desktop / Codex CLI 标识
- 相关皮肤（同分类/同 mood）
- 举报/建议修正入口

**④ 提交页 `/submit`**
- 表单：名称/作者/分类/mood/配色/预览图上传/prompt或theme.json/来源链接
- **实时预览面板**（交互工具）：填写时即时显示卡片效果
- 投稿规范框 + 提交 → 成功态（pending review）

**交互工具（混合站形态体现）**：①即时搜索+筛选 ②复制 prompt（clipboard+反馈）③随机皮肤抽取器 ④主题预览器（粘贴 theme.json→渲染预览）⑤暗/亮切换（持久化）

## 7. 可落地 Design Token 雏形
```css
:root {
  --bg:#FAFAFA; --surface:#FFFFFF; --fg:#18181B; --muted:#71717A;
  --accent:#0F766E; --border:#E4E4E7;
  --accent-hover:#115E59; --accent-active:#134E4A; --accent-on:#FFFFFF;
  --success:#16A34A; --warn:#D97706; --danger:#DC2626;
  --font-mono:"Geist Mono","JetBrains Mono",ui-monospace,monospace;
  --surface-warm:#F4F4F5; --fg-2:#3F3F46; --meta:#A1A1AA; --border-soft:#F4F4F5;
  --font-display:"Geist",system-ui,sans-serif;
  --font-body:"Inter",system-ui,sans-serif;
  --radius-sm:8px; --radius-md:12px; --radius-lg:16px; --radius-pill:9999px;
  --space-1:4px;--space-2:8px;--space-3:12px;--space-4:16px;--space-5:20px;
  --space-6:24px;--space-8:32px;--space-10:40px;--space-12:48px;--space-16:64px;--space-20:80px;
  --focus-ring:0 0 0 3px color-mix(in srgb,var(--accent) 35%,transparent);
  --motion-fast:150ms; --motion-base:200ms; --ease-standard:cubic-bezier(0.2,0,0,1);
  --container-max:1200px;
}
:root[data-theme="dark"]{
  --bg:#0A0A0B;--surface:#141416;--fg:#FAFAFA;--muted:#A1A1AA;--accent:#2DD4BF;--border:#27272A;
  --accent-hover:#14B8A6;--accent-active:#0D9488;--accent-on:#04201D;
  --success:#22C55E;--warn:#F59E0B;--danger:#EF4444;
  --surface-warm:#141416;--fg-2:#D4D4D8;--meta:#71717A;--border-soft:rgba(255,255,255,0.06);
  --focus-ring:0 0 0 3px color-mix(in srgb,var(--accent) 40%,transparent);
}
```
Tailwind 主题扩展（v4 `@theme`）：colors 映射 var、fontFamily display/body/mono、borderRadius sm/md/lg、maxWidth container:1200px。

## 8. P0 合规自检
- ✅ 无 emoji 功能图标：锁定 Lucide，16/20/24px，全站统一
- ✅ 无紫色→粉色渐变：chrome 中性灰+单一青绿，无 indigo→pink
- ✅ 无空洞占位：文案具体（"copy one prompt, reskin your workspace"），无 Welcome to/Lorem ipsum
- ✅ 无硬编码颜色：全部经 Design Token，仅 #fff/#000 例外（本方案未直接用）
- ✅ 无千篇一律 Hero：首页左对齐非对称、首屏即真实皮肤预览

## 9. 待与架构师对齐
- 静态栈是否 Astro + Tailwind（匹配 Petdex/CodexPlusPlus 静态清单模型）？
- 图标集成方式：Lucide 纯 SVG sprite / `@lucide/astro` / 内联（需与组件层对齐）
- 提交入口形态：静态 manifest PR 自动提交 vs 后端审核（影响 Submit 页交互）
- 姊妹站真实域名（Pets/Skin Generator）以便页脚交叉链接与流量闭环
