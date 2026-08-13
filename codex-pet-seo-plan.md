# Codex Pet 生成站 · 参考站、优劣对比与 SEO/内容扩充方案

> 整理时间：2026-08-13
> 适用对象：Codex Pet（OpenAI Codex 桌面宠物）生成类站点

---

## 一、参考站清单（按类型分）

### A. 生成 / 编辑型（与你的站同类）

| 站点 | 特点 |
|---|---|
| **codexpetgenerator.com** | 上传照片 → AI 出像素宠物，OpenRouter 后端；Free 1 次 / Pro $9 / Unlimited $29 |
| **codexpet.xyz** | 浏览器内 Studio，创建 / remix / 预览 / 下载 pet pack，社区分享 |
| **RunComfy Codex Pet Pro Pack** | 单图 → spritesheet + pet.json，走 GPT Image 2，无需 OpenAI key |
| **codex-pet-gen (GitHub/mergisi)** | 本地 CLI，不调生图 API，手绘 / Pillow 生成，MIT |

### B. 社区画廊 / 宠物库（内容流量型）

| 站点 | 规模 |
|---|---|
| **petdex.dev** | 3613 只，最大画廊，预览 / 收藏 / 投稿 / 安装命令 |
| **codex-pets.net** | 2539 只，基于 codex-pet-share，可自托管 |
| **codexpets.net** | 842 只（Hello Kitty、迪莫） |
| **awesome-codex-pet.pages.dev** | 59 只，小而精（Claude、柯基） |
| **OpenPets.sh** | 最大注册表，web + macOS，带桌面信号插件 |

### C. 桌面播放器 / 工具

- **Clawd on Desk** — 跨平台桌面宠物，监听 Codex / Claude / Cursor
- **Petty (Tauri)**、**Petdex Dock (Electron)** — 桌面宠物播放器

### D. 索引 / 导航（务必占位）

- **github.com/alterhq/awesome-codex-pets-projects** —— 所有 Codex Pet 项目的精选总索引，应主动提交被收录

### 关键规格（写技术文必引）

- 精灵图：**1536 × 1872**，8 列 × 9 行，每格 **192 × 208**
- 9 个动画状态：`idle` / `running-right` / `running-left` / `waving` / `jumping` / `failed` / `waiting` / `running` / `review`
- 产物：`pet.json` + `spritesheet.webp`，安装到 `~/.codex/pets/<id>/`

---

## 二、你的站（生成器型）vs 画廊型 · 优劣势对比

| 维度 | 生成器型（你的站） | 画廊 / 库型（petdex 等） |
|---|---|---|
| 变现 | ✅ 订阅制直接收钱 | ❌ 靠广告 / 导流，弱 |
| 转化路径 | ✅ 上传即出结果，闭环短 | 中，需先有生成工具 |
| 生图成本 | ❌ 每次烧后端 token（即 OpenRouter 欠费那个坑） | ✅ 零成本，只存别人资产 |
| SEO 飞轮 | ❌ 不留 UGC，内容沉淀少 | ✅ 每只宠物一页 = 海量长尾 |
| 被抢流量 | ⚠️ "怎么做" 的流量被免费教程文抢走 | 天然占住场景词 |

**结论**：别纯做生成器，加一层「生成 + 画廊 + 分类页」混合模型——生成器拉转化，画廊吃长尾 SEO。

---

## 三、内容扩充打法（Topical Clusters）

1. **技术规格页（最高引用率）**：把 1536×1872 / 9 状态讲透，开发者会大量外链。
2. **教程簇**：how to make / install / customize / "pet not showing 怎么修"。
3. **宠物分类展示页**：anime / pokemon / 名人 / 表情包 / 二次元——每个类目一页，吃长尾词。
4. **对比页**：vs petdex / codex-pets.net / codexpet.xyz（"X 和 Y 哪个好" 是高分词）。
5. **免费工具（获外链神器）**：pet.json 校验器、spritesheet 预览器、兼容性检查——记者 / 博主会引用。
6. **FAQ Schema 页**：吃 Google AI Overview + ChatGPT 引用。

---

## 四、SEO 提升访问量打法

- **拆场景词，不堆大词**：
  `codex pet from photo` / `custom codex pet` / `codex pet install command` / `codex pet spritesheet spec` / `codex pet not working`
- **每个页面不能只有输入框**：必须有模板、案例、默认参数、风格选择、下载方式、FAQ（deepai 流量腰斩就是只靠一个大词页面吃老本）。
- **首段给直接答案 + 表格化**：AI 抓取最爱 "前 1-2 句直接回答"，表格被引用概率高。
- **外链获取**：
  - 提交到 awesome-codex-pets-projects、Way.ai、各类 AI 导航站
  - 品牌提及回收（谁提了你没加链接，去要）
  - 摩天楼（写比竞品更全的版本去抢它的外链）
- **GSC 每周复盘**：
  - 有曝光没点击 → 改 title / description
  - 有点击没留存 → 改产品或页面
  - 没出词 → 需求没对上
- **监控 ChatGPT / Perplexity** 有没有推荐你；推了竞品就去分析它页面为什么被选中。

---

## 五、落地提醒（与 Vercel 关联）

你之前的 Vercel team **ISR Writes 已超 200K 被暂停**。SEO 一旦起量，页面越热越烧 ISR / Function，可能直接把站打挂、白忙。

建议：
1. 把 pet 站单独放一个 team 或升级 Pro；
2. 热门页静态化 + 加缓存；
3. 生成结果页做降级（超额不报错，只提示稍后重试）。

---

## 六、可立即动手的两件事

1. **写技术规格页 + 分类展示页 + FAQ Schema 模板**（直接能发）；
2. **做一个 pet.json 校验器 / spritesheet 预览器小工具**（HTML，挂站上换外链）。

> 把站点 URL 或技术栈（前端 / 后端 / 部署）发来，可做一次具体审计，产出可直接执行的清单。
