/**
 * sync-community-skins.mjs
 *
 * 从 GitHub 生态自动抓取 Codex 皮肤，生成 src/content/skins/*.md（本站 content schema）。
 * 已存在的皮肤文件会被跳过（避免覆盖手工精修条目），因此可安全重复运行。
 *
 * 数据来源（GitHub 公开仓库，无需 token）：
 *  1. Wangnov/awesome-codex-skins REGISTRY.md（Certified 皮肤）
 *  2. HeiGeAi/heige-codex-skin-studio README.md（内置主题）
 *  3. freestylefly/codex-themes README.md（精选主题）
 *
 * 运行：node scripts/sync-community-skins.mjs
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'

const SKINS_DIR = 'src/content/skins'
const TODAY = new Date().toISOString().slice(0, 10)

const GH_HEADERS = {
  Accept: 'application/vnd.github.v3+json',
  'User-Agent': 'awesomecodexskin-sync',
}

// ─── GitHub raw 抓取 ─────────────────────────────────────────────────────────
// 直接拉 raw.githubusercontent.com 的 markdown（比 Contents API 更快、无 rate-limit）
async function ghRaw(owner, repo, pathStr) {
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/main/${pathStr}`
  const r = await fetch(url, { headers: GH_HEADERS })
  if (!r.ok) {
    // 部分仓库默认分支可能是 master
    const r2 = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/master/${pathStr}`, {
      headers: GH_HEADERS,
    })
    if (!r2.ok) throw new Error(`GitHub raw ${url}: ${r.status} / master: ${r2.status}`)
    return r2.text()
  }
  return r.text()
}

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// ─── 来源 1：Wangnov/awesome-codex-skins REGISTRY.md ────────────────────────
async function fetchWangnovSkins() {
  console.log('[1/3] 抓取 Wangnov/awesome-codex-skins REGISTRY.md ...')
  const md = await ghRaw('Wangnov', 'awesome-codex-skins', 'REGISTRY.md')
  const skins = []
  const lines = md.split('\n')
  let inCertified = false
  for (const line of lines) {
    if (line.includes('## Certified')) { inCertified = true; continue }
    if (line.includes('## Community') || line.includes('Submit yours')) { inCertified = false; continue }
    if (!inCertified || !line.startsWith('|')) continue
    if (line.startsWith('|---')) continue
    const parts = line.split('|').map((s) => s.trim()).filter((s) => s)
    if (parts.length < 2) continue
    const name = parts[0] || ''
    const id = (parts[1] || '').replace(/`/g, '')
    if (!id || !/^[a-z0-9-]+$/.test(id)) continue
    const nameMatch = name.match(/^(.+?)(?:\s*[·・—]\s*(.+))?$/)
    skins.push({
      id,
      name: (nameMatch[2] || nameMatch[1] || name).trim(),
      author: 'Wangnov',
      repo: 'Wangnov/awesome-codex-skins',
      url: `https://github.com/Wangnov/awesome-codex-skins/tree/main/skins/${id}`,
      color: null,
      installs: null,
    })
  }
  console.log(`     → ${skins.length} 个 Certified 皮肤`)
  return skins
}

// ─── 来源 2：HeiGeAi/heige-codex-skin-studio ────────────────────────────────
async function fetchHeiGeSkins() {
  console.log('[2/3] 抓取 HeiGeAi/heige-codex-skin-studio README ...')
  const md = await ghRaw('HeiGeAi', 'heige-codex-skin-studio', 'README.md')
  const themeMap = [
    ['Miku 488137', 'Miku 488137'],
    ['原神·星夜', 'Genshin Night'],
    ['原神·破晓', 'Genshin Dawn'],
    ['鸣潮', 'Wuthering Waves'],
    ['火影忍者', 'Naruto'],
    ['恋与深空', 'Love and Deepspace'],
    ['龙珠·筋斗云', 'Dragon Ball Nimbus'],
    ['龙珠·超级赛亚人', 'Dragon Ball Super Saiyan'],
    ['大佬·点烟', 'Dalao Smoke'],
    ['Miku Future', 'Miku Future'],
    ['WorkBuddy 主题', 'WorkBuddy Theme'],
    ['QQ2007 复古', 'QQ2007 Retro'],
  ]
  const skins = themeMap.map(([zh, en]) => ({
    id: `heige-${slugify(en)}`,
    name: en,
    author: 'HeiGeAi',
    repo: 'HeiGeAi/heige-codex-skin-studio',
    url: 'https://github.com/HeiGeAi/heige-codex-skin-studio',
    color: null,
    installs: null,
  }))
  console.log(`     → ${skins.length} 个内置主题`)
  return skins
}

// ─── 来源 3：freestylefly/codex-themes ───────────────────────────────────────
async function fetchCodexThemes() {
  console.log('[3/3] 抓取 freestylefly/codex-themes README ...')
  const md = await ghRaw('freestylefly', 'codex-themes', 'README.md')
  const skins = []
  const titleRe = /###\s+(.+?)(?:\n|$)/g
  let m
  while ((m = titleRe.exec(md)) !== null) {
    const name = m[1].trim()
    // Skip numbered how-to sections ("1. 准备环境") and notice/section headings
    // ("提示…", "使用前…", "常用命令") which are mono- or numbered titles.
    if (/^\d/.test(name)) continue
    if (/(使用前|提示|主题图片|准备环境|运行方式|环境变量|创建并迁移|配置 GitHub|本地运行|部署|接入支付宝|修改成|检查、构建|常用命令|设置管理员)/.test(name)) continue
    // Only real themes use bilingual "中文 · English" titles.
    if (!/[\u4e00-\u9fa5]/.test(name) || !/[a-zA-Z]/.test(name)) continue
    skins.push({
      id: `codex-theme-${slugify(name)}`,
      name,
      author: 'freestylefly',
      repo: 'freestylefly/codex-themes',
      url: 'https://github.com/freestylefly/codex-themes',
      color: null,
      installs: null,
    })
  }
  console.log(`     → ${skins.length} 个精选主题`)
  return skins
}

// ─── 生成 frontmatter md（符合 src/content.config.ts skins schema）──────────
function toMarkdown(s) {
  // JSON.stringify produces a valid double-quoted YAML scalar (escapes inner quotes).
  const q = (v) => JSON.stringify(v)
  const desc = `${s.name} is a community-contributed Codex skin from ${s.repo || 'the Codex community'}.`
  const installPrompt = `Visit ${s.url} to learn how to install the '${s.name}' skin for Codex.`
  return `---
name: ${q(s.name)}
author: ${q(s.author)}
category: other
mood: "community"
color: "${s.color || '#888888'}"
platform: codex-desktop
description: |-
  ${desc}
installPrompt: |-
  ${installPrompt}
installFormat: manual
sourceUrl: ${s.url}
compatibleWith:
  - codex-desktop
featured: false
updatedAt: ${TODAY}
stats:
  installs: ${s.installs || 0}
  likes: 0
---

${desc}
`
}

// ─── 主流程 ──────────────────────────────────────────────────────────────────
async function main() {
  console.log('========================================')
  console.log('awesomecodexskin 社区皮肤同步')
  console.log('========================================\n')

  // 已存在的皮肤 slug（跳过，避免覆盖手工精修）
  const existing = new Set(
    readdirSync(SKINS_DIR).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''))
  )
  console.log(`本地已有 ${existing.size} 个皮肤\n`)

  const [wangnov, heige, codexThemes] = await Promise.allSettled([
    fetchWangnovSkins(),
    fetchHeiGeSkins(),
    fetchCodexThemes(),
  ])

  const candidates = []
  if (wangnov.status === 'fulfilled') candidates.push(...wangnov.value)
  if (heige.status === 'fulfilled') candidates.push(...heige.value)
  if (codexThemes.status === 'fulfilled') candidates.push(...codexThemes.value)

  // 去重 + 跳过已存在
  const seen = new Set()
  let created = 0
  let skipped = 0
  for (const s of candidates) {
    if (seen.has(s.id)) continue
    seen.add(s.id)
    if (existing.has(s.id)) { skipped++; continue }
    writeFileSync(`${SKINS_DIR}/${s.id}.md`, toMarkdown(s), 'utf8')
    created++
    console.log(`  ✓ ${s.id}.md  (${s.repo})`)
  }

  console.log(`\n总计候选 ${candidates.length}（去重后 ${seen.size}）`)
  console.log(`新增 ${created} 个，跳过已存在 ${skipped} 个`)
  console.log('\n✅ 完成！')
}

main().catch((err) => {
  console.error('\n❌ 失败:', err.message)
  process.exit(1)
})
