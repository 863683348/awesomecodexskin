# Web3Forms 提交契约（网站轨 P2 技术细化）

> 产出：网站轨 P2 技术细化 | 负责人：高见远（首席架构师）
> 配套：ADR-004（无后端提交：Web3Forms + GitHub PR 双通道）/ deploy.md（access_key 注入）
> P0 合规：无 emoji；UI 颜色走 Design Token，本文件不含 UI 硬编码色。

---

## 1. 端点与协议

| 项 | 值 |
|----|----|
| Method | `POST` |
| URL | `https://api.web3forms.com/submit` |
| Content-Type | `application/json`（fetch）或 `application/x-www-form-urlencoded`（原生 form） |
| 认证 | 无（用表单字段 `access_key` 标识收件箱） |
| 响应 | JSON `{ success: boolean, message: string }` |

> 本站纯静态、零自有后端，**这是全站唯一外部写入端点**（Spec §5）。所有字段契约以本文件为唯一依据。

---

## 2. 字段契约

### 2.1 系统字段（Web3Forms 保留）

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `access_key` | string | 是 | Web3Forms key（隐藏输入，见 deploy.md §4）。**非秘密**，必随表单发送。 |
| `botcheck` | string/checkbox | 是（honeypot） | 蜜罐反垃圾。隐藏字段，人类永不填；机器人填了即判 spam 拒收。 |
| `subject` | string | 否 | 收件邮件主题。建议 `"New Codex Skin Submission: {name}"`。 |
| `from_name` | string | 否 | 发件人显示名。建议固定 `"Codex Skin Index"`。 |
| `replyto` / `email` | string(email) | 否 | 提交者邮箱，用于后续跟进（可选）。 |
| `redirect` / `redirect_to` | string(url) | 否 | 提交后跳转的感谢页（若不用 JS 处理响应）。 |
| `source` | string | 否 | Web3Forms 渠道标记（保留字段，可忽略）。 |

### 2.2 业务字段（与 content-schema.md / PR 模板对齐）

| 字段 | 类型 | 必填 | 映射到 schema | 说明 |
|------|------|------|---------------|------|
| `name` | string | 是 | `name` | 皮肤名 |
| `author` | string | 是 | `author` | 创作者 |
| `category` | enum(8) | 是 | `category` | 8 类 slug 值之一 |
| `mood` | string | 是 | `mood` | 心情标签 |
| `color` | string(hex) | 是 | `color` | `#RGB` / `#RRGGBB` |
| `platform` | enum | 是 | `platform` | `codex-desktop` / `codex-cli` / `both` |
| `description` | string | 是 | `description` | 描述 |
| `previewImage` | string | 否 | `previewImage` | 预览图 URL/路径（可选；缺失走占位图） |
| `installPrompt` | string | 是 | `installPrompt` | 安装提示词 |
| `installFormat` | enum | 否 | `installFormat` | 安装格式：dreamskin-v1 / codedrobe-theme / prompt / tmtheme / manual（默认 prompt） |
| `themeJson` | string(object) | 否 | `themeJson` | 可选 theme.json（文本或对象） |
| `sourceUrl` | string(url) | 是 | `sourceUrl` | 来源外链 |
| `compatibleWith` | string[] | 否 | `compatibleWith` | 兼容平台列表（默认 desktop） |
| `featured` | boolean | 否 | `featured` | 是否申请精选（默认 false） |
| `paid_inclusion` | boolean/string | 否 | — | **付费收录**勾选（Spec §5/§9："付费收录"字段可勾选）；非 schema 字段，仅供审核分流 |
| `notes` | string | 否 | — | 补充说明 |

> `paid_inclusion` 是 Spec 明确要求的"付费收录"勾选项，提交时一并发送，供维护者区分免费投稿与付费申请（ADR-004 备注：MVP 付费收录为预留字段，实际变现 P2 才落地）。

---

## 3. 前端提交形态（两种）

### 3.1 原生 form POST（最简单，依赖 redirect）

```astro
<form method="POST" action="https://api.web3forms.com/submit">
  <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
  <input type="checkbox" name="botcheck" style="display:none" />
  <input type="hidden" name="subject" value="New Codex Skin Submission" />
  <input type="hidden" name="from_name" value="Codex Skin Index" />
  <input type="hidden" name="redirect" value="/submit?status=success" />
  <!-- 业务字段 -->
  <input name="name" required />
  <input name="author" required />
  <select name="category">...</select>
  <!-- ... 其余字段 ... -->
  <label><input type="checkbox" name="paid_inclusion" value="yes" /> Paid inclusion</label>
  <button type="submit">Submit skin</button>
</form>
```

### 3.2 fetch JSON（推荐，便于成功/失败 UI 反馈）

```typescript
// SubmitForm 岛内
const res = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify({
    access_key: WEB3FORMS_KEY,
    botcheck: '',                 // 人类留空；若被填则后端拒收
    subject: `New Codex Skin Submission: ${form.name}`,
    from_name: 'Codex Skin Index',
    name: form.name,
    author: form.author,
    category: form.category,
    mood: form.mood,
    color: form.color,
    platform: form.platform,
    description: form.description,
    previewImage: form.previewImage,
    installPrompt: form.installPrompt,
    sourceUrl: form.sourceUrl,
    compatibleWith: form.compatibleWith,
    paid_inclusion: form.paidInclusion ? 'yes' : 'no',
  }),
});
const data = await res.json();
if (data.success) {
  // 显示 pending review 成功态
} else {
  // 显示失败态 + 重试（见 §5）
}
```

---

## 4. 成功 / 失败处理

### 4.1 成功

- HTTP 200 + `{ success: true, message: "..." }`。
- 前端：清空/锁定表单，显示 **"Submitted — pending review"** 成功态，并提示"我们会在审核后收录到索引"。
- 维护者：Web3Forms 将邮件发到绑定邮箱 → 人工审核 → 落成 `src/content/skins/<slug>.md`（ADR-004 双通道）。

### 4.2 失败

- Web3Forms 校验失败：HTTP 200 + `{ success: false, message: "..." }`（注意：不是 4xx，是 200 包 success:false）。前端必须**检查 `data.success` 而非仅 HTTP 状态**。
- 网络错误 / 超时：fetch 抛异常，前端捕获 → 失败态 + "重试"按钮。
- 配额耗尽（>250/月）：返回失败消息，前端提示"提交通道已满，请改用 GitHub PR"并展示 PR 链接（见 §6 双通道）。
- 客户端校验：提交前先做字段级校验（必填、hex 格式、URL 格式），减少无效请求；与 content-schema.md 的 Zod 规则保持一致。

---

## 5. 250/月限额提醒（重要）

- Web3Forms 免费层 **250 条/月**。超出后当月提交全部失败（返回 success:false）。
- MVP 阶段提交量极小，远低于上限；但**流量高峰 / 被刷**可能短期触顶。
- 缓解：
  1. honeypot `botcheck` 挡机器人。
  2. 前端客户端校验挡无效提交。
  3. **GitHub PR 双通道不限量兜底**（§6）。
- 监控：Web3Forms 后台可看当月用量；若频繁触顶，升级 $7/月去广告 + 提高额度，或把主通道切到 PR。

---

## 6. 与 GitHub PR 双通道并存（ADR-004）

两条通道**并列、互不依赖**，最终都进同一人工审核队列：

1. **Web3Forms 通道（主，照顾无 GitHub 用户）**
   - 表单提交 → 邮件到收件箱 → 人工审核 → 落成 `src/content/skins/<slug>.md`。
   - 限 250/月，超限走 PR 兜底。

2. **GitHub PR 通道（辅，开发者 / authentic）**
   - 提交页提供 **"Prefer GitHub? Open a PR"** 按钮，指向仓库 `awesome-codex-skin-projects` 的 PR 模板（预填 `name`/`author` 等 query 参数最佳）。
   - PR 模板字段与 content-schema.md 对齐（见 content-schema.md §5），维护者合入即收录。
   - **不限量**，且天然带贡献者身份与讨论。

**并存要点**：
- 提交页**同时**渲染 Web3Forms 表单 + GitHub PR 入口，二者视觉等权（PR 入口不因"主通道"被弱化）。
- 任一条通道成功即视为提交成功；审核侧不区分来源，统一落成 Markdown。
- `paid_inclusion` 字段在两通道都保留（PR 模板同样加该勾选项），保证付费申请不被漏审。

---

## 7. 安全约束（对齐 Spec §10）

- honeypot `botcheck` 必含，挡自动垃圾。
- 所有外链（含 `sourceUrl` 渲染出的链接）加 `rel="nofollow noopener"`。
- 表单不收集密码等敏感信息；`access_key` 仅作收件标识，不授权任何写权限。
- 失败重试有上限（如 3 次），避免刷接口。
