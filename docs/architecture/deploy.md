# 部署方案 — Cloudflare Pages（网站轨 P2 技术细化）

> 产出：网站轨 P2 技术细化 | 负责人：高见远（首席架构师）
> 配套：ADR-002（Cloudflare Pages 绕开 Vercel）/ ADR-001（Astro 6，Node 22）
> P0 合规：无 emoji；UI 颜色走 Design Token，本文件不含 UI 硬编码色。

---

## 1. 构建与输出（版本锚定）

| 项 | 值 | 说明 |
|----|----|------|
| 构建命令 | `npm run build` | Astro 构建，产出 `dist/` |
| 输出目录 | `dist` | Astro `output: 'static'` 默认输出 |
| 构建环境 Node | **22**（必须显式设置） | Astro 6 强制 Node 22 LTS；CF Pages 默认可能 18/20，不显式设会构建失败 |
| 适配器 | 无（`output: 'static'`） | 纯静态，无需 `@astrojs/cloudflare`；仅未来用 Server Islands / 实时计数才加 |
| 框架预设 | Astro | CF Pages Dashboard 选 Astro preset，自动填 build/output |

`astro.config.mjs` 关键项（见 seo.md）：`site` 设 `https://awesomecodexskin.com`、`output: 'static'`、`integrations: [sitemap()]`、vite 挂 `tailwindcss()`。

---

## 2. Cloudflare Pages 配置步骤

1. Dashboard → Workers & Pages → Create → Pages → Connect Git（绑本仓库）。
2. Project name：`awesomecodexskin`。
3. Build settings：
   - Framework preset：`Astro`
   - Build command：`npm run build`
   - Build output directory：`dist`
   - **Node.js version：选 22**（Settings → Builds & deployments → Build system，或首次部署时在构建设置里指定；不指定则用账户默认，务必确认 ≥22）。
4. 每次 `git push` 自动重建；PR 自动生成预览部署（利于审核）。
5. 免费额度：500 builds/月、1 并发构建、静态请求/带宽无限（见 ADR-002，从根消除 Vercel ISR 配额熔断）。

---

## 3. 自定义域名 + SSL

1. Pages → Custom domains → 输入 `awesomecodexskin.com`。
2. 按提示在域名 DNS 添加 CF 提供的 `CNAME`（或启用 CF 名称服务器托管该域）。
3. CF 自动签发并续期 **免费 SSL**（Universal SSL，默认开启），全站 HTTPS。
4. 强制 HTTPS：Custom domain 设置里开启 "Always Use HTTPS"。
5. 注意：本域为用户已确认资产，DNS 变更由用户在 CF/注册商侧操作；本环境无 gh / DNS 鉴权，仅产出配置说明（参考 Spec §11"构建环境无 gh 鉴权"同理）。

---

## 4. 环境变量：Web3Forms `access_key` 如何注入而不泄露

### 4.1 关键认知

Web3Forms 的 `access_key` **不是秘密**（设计如此，类似 Formspree/form ID）。提交必须把它随表单 POST 到 `https://api.web3forms.com/submit`，因此它**必然出现在客户端请求中**。所谓"不泄露"指：
- 不出现在页面可见 UI（用 `type="hidden"` 隐藏输入）。
- 不打包进可被轻易扫描的 `.js` bundle（放在服务端渲染的 HTML 表单里，而非客户端 JS 模块）。
- 不写进会泄露给第三方的日志。

### 4.2 推荐做法（二选一，均合规）

**做法 A（最简单，直接写死在表单 HTML）**
在 `src/pages/submit.astro` 的表单中服务端渲染隐藏输入：
```astro
<form method="POST" action="https://api.web3forms.com/submit">
  <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
  <!-- 其他字段 -->
</form>
```
`submit.astro` 是构建期渲染的静态 HTML，`access_key` 落在 HTML（非 JS bundle），对终端用户不可见（隐藏输入），满足"不泄露到 UI / JS"。

**做法 B（构建期注入，保持 key 出库）**
把 key 放进 `.env`（gitignore）或 CF Pages 的 **Build 环境变量**，在 `submit.astro` 前端通过 `import.meta.env` 读取：
```astro
---
const WEB3FORMS_KEY = import.meta.env.WEB3FORMS_ACCESS_KEY;
---
<input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
```
- 纯静态导出下，`import.meta.env` 在**构建期**被内联进 HTML（结果同上，仍在 HTML 中，但 key 不进源码仓库）。
- 在 CF Pages：Settings → Builds & deployments → **Environment variables (build)** 加 `WEB3FORMS_ACCESS_KEY=...`。注意是 **build** 变量（静态站无运行时 env）；若误设为 runtime 变量则不可用。

两种做法 key 最终都在 HTML 中（Web3Forms 机制决定），做法 B 仅额外保证 key 不进 git 仓库。本 MVP 推荐**做法 A**（最简单、零配置），若团队要求 key 出库则用做法 B。

### 4.3 防滥用（key 公开后的兜底）

- 表单内置 honeypot：`botcheck` 隐藏字段（见 web3forms-contract.md），机器人填了即被拒。
- 依赖 250/月免费额度 + GitHub PR 双通道（PR 不限量）兜底；key 被滥用最多烧完当月配额，PR 通道不受影响。
- 升级 $7/月可去 Web3Forms 邮件页脚广告 + 自定义发件域。

---

## 5. Wrangler 备注

- 纯静态站**不需要** wrangler；CF Pages Git 集成自动构建部署即可。
- `wrangler` 作为 `devDependency`（`wrangler ^4.0.0`，版本锚定）保留，供两种场景：
  1. **CI 手动部署**：`wrangler pages deploy dist --project-name=awesomecodexskin`（适合非 Git 集成或本地产物直传）。
  2. **未来接入 Worker 函数**：如实时提交计数、Server Islands，需 `wrangler` + `@astrojs/cloudflare` 适配器，届时会受 Workers 10 万请求/日免费上限约束（见 ADR-002）。
- MVP 阶段：保持纯静态，wrangler 仅文档化，不引入运行时依赖。
- `wrangler.toml` 在纯静态场景非必需；若写，仅声明 `name = "awesomecodexskin"` 与 `pages_build_output_dir = "dist"`，无需 compatibility_date 之外的特殊配置。

---

## 6. 部署验证（对齐 Spec §12）

1. `npm install` → `npm run build`（必须 0 错误，Node 22）。
2. `npm run preview` 本地自检。
3. CF Pages 首次部署后，断言：
   - `https://awesomecodexskin.com/sitemap-index.xml` 存在。
   - 每页 `title` / `description` / `canonical` / OG / Twitter 标签存在。
   - 自定义域 HTTPS 生效（地址栏锁标）。
4. GSC 提交 sitemap，周复盘 + 监控 ChatGPT / Perplexity 引用（见架构 §4 SEO 工程要点）。
