// fetch-previews.mjs
// 1) 读取 src/content/skins/*.md 的 frontmatter
// 2) GitHub 来源 -> 抓仓库 README 真实截图，下载到 public/previews/{slug}.{ext}
// 3) 外部站 / 无图 -> 生成色彩准确的 SVG mock 预览到 public/previews/{slug}.svg
// 4) 回填每个 .md 的 previewImage 字段
import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SKINS_DIR = join(ROOT, 'src', 'content', 'skins');
const OUT_DIR = join(ROOT, 'public', 'previews');

const GH_RE = /^https?:\/\/github\.com\/([^\/]+)\/([^\/\s?#]+)/;
const UA = { 'User-Agent': 'awesomecodexskin-bot' };

function parseFrontmatter(text) {
  const m = text.split('---');
  // m[0]='', m[1]=fm, m[2]=body
  const fm = m[1] || '';
  const get = (key) => {
    const re = new RegExp(`^${key}:\\s*(.+)$`, 'm');
    const mm = fm.match(re);
    if (!mm) return '';
    let v = mm[1].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    return v;
  };
  return { name: get('name'), sourceUrl: get('sourceUrl'), color: get('color'), category: get('category') };
}

function extractImages(md, owner, repo, branch) {
  const imgs = [];
  const mdRe = /!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
  let mm;
  while ((mm = mdRe.exec(md))) imgs.push(mm[1]);
  const htmlRe = /<img[^>]+src=["']([^"']+)["']/g;
  while ((mm = htmlRe.exec(md))) imgs.push(mm[1]);
  const resolved = [];
  for (let u of imgs) {
    u = u.trim();
    if (!u || u.startsWith('data:')) continue;
    const low = u.toLowerCase();
    if (low.includes('shields.io') || low.includes('badge') || low.includes('travis') || low.includes('githubactions')) continue;
    if (u.startsWith('http')) resolved.push(u);
    else if (u.startsWith('/')) resolved.push(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}${u}`);
    else resolved.push(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${u}`);
  }
  return resolved;
}

async function fetchReadme(owner, repo) {
  const api = `https://api.github.com/repos/${owner}/${repo}/readme`;
  const r = await fetch(api, { headers: UA });
  if (!r.ok) throw new Error(`readme ${r.status}`);
  const j = await r.json();
  const branch = (j.download_url.match(/githubusercontent\.com\/[^/]+\/[^/]+\/([^/]+)\//) || [])[1] || 'main';
  const content = Buffer.from(j.content, 'base64').toString('utf8');
  return { branch, content };
}

async function downloadImage(url, dest) {
  const r = await fetch(url, { headers: UA, redirect: 'follow' });
  if (!r.ok) throw new Error(`img ${r.status}`);
  const buf = Buffer.from(await r.arrayBuffer());
  if (buf.length > 5 * 1024 * 1024) throw new Error('too big');
  const ct = r.headers.get('content-type') || '';
  let ext = 'png';
  if (ct.includes('jpeg')) ext = 'jpg';
  else if (ct.includes('webp')) ext = 'webp';
  else if (ct.includes('svg')) ext = 'svg';
  else if (ct.includes('png')) ext = 'png';
  else if (ct.includes('gif')) ext = 'gif';
  const d = dest.replace(/\.[^.]+$/, '') + '.' + ext;
  await writeFile(d, buf);
  return d;
}

// ---- SVG mock preview generator ----
const CAT_LABEL = {
  'dark-midnight': 'Dark & Midnight',
  'light-airy': 'Light & Airy',
  'anime-pop': 'Anime & Pop',
  'neon-cyberpunk': 'Neon & Cyberpunk',
  'nature-earthy': 'Nature & Earthy',
  'retro-vintage': 'Retro & Vintage',
  'pastel-soft': 'Pastel & Soft',
  'mono-terminal': 'Mono & Terminal',
};
function mockSvg(name, color, category) {
  const c = (color || '#2DD4BF').replace('#', '');
  const accent = '#' + c;
  const label = CAT_LABEL[category] || category || 'Codex Skin';
  const initials = name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase() || 'CX';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0A0A0B"/>
      <stop offset="1" stop-color="#141416"/>
    </linearGradient>
    <filter id="soft"><feGaussianBlur stdDeviation="40"/></filter>
  </defs>
  <rect width="1200" height="750" fill="url(#bg)"/>
  <circle cx="960" cy="150" r="220" fill="${accent}" opacity="0.18" filter="url(#soft)"/>
  <circle cx="220" cy="620" r="180" fill="${accent}" opacity="0.12" filter="url(#soft)"/>
  <rect x="80" y="80" width="1040" height="590" rx="18" fill="#0F0F11" stroke="${accent}" stroke-opacity="0.35" stroke-width="2"/>
  <rect x="80" y="80" width="1040" height="56" rx="18" fill="#161618"/>
  <circle cx="116" cy="108" r="7" fill="#3a3a3e"/>
  <circle cx="144" cy="108" r="7" fill="#3a3a3e"/>
  <circle cx="172" cy="108" r="7" fill="#3a3a3e"/>
  <rect x="200" y="98" width="360" height="20" rx="6" fill="${accent}" opacity="0.5"/>
  <rect x="112" y="184" width="300" height="430" rx="12" fill="#101012" stroke="#222" stroke-width="1"/>
  <circle cx="160" cy="232" r="26" fill="${accent}" opacity="0.85"/>
  <text x="200" y="240" font-family="Inter, system-ui, sans-serif" font-size="22" fill="#e8e8ea">${label}</text>
  <rect x="132" y="290" width="220" height="10" rx="5" fill="#2a2a2e"/>
  <rect x="132" y="320" width="180" height="10" rx="5" fill="#232327"/>
  <rect x="132" y="350" width="240" height="10" rx="5" fill="#2a2a2e"/>
  <rect x="132" y="392" width="200" height="10" rx="5" fill="${accent}" opacity="0.4"/>
  <rect x="132" y="446" width="260" height="36" rx="8" fill="${accent}" opacity="0.12" stroke="${accent}" stroke-opacity="0.5"/>
  <text x="152" y="470" font-family="Inter, system-ui, sans-serif" font-size="16" fill="${accent}">Apply theme</text>
  <text x="440" y="240" font-family="Inter, system-ui, sans-serif" font-size="40" font-weight="700" fill="#f4f4f5">${name}</text>
  <rect x="440" y="280" width="640" height="14" rx="7" fill="#26262a"/>
  <rect x="440" y="310" width="560" height="14" rx="7" fill="#1f1f23"/>
  <rect x="440" y="340" width="600" height="14" rx="7" fill="#26262a"/>
  <rect x="440" y="370" width="480" height="14" rx="7" fill="#1f1f23"/>
  <rect x="440" y="408" width="540" height="14" rx="7" fill="#26262a"/>
  <rect x="440" y="438" width="420" height="14" rx="7" fill="#1f1f23"/>
  <rect x="440" y="500" width="3" height="36" fill="${accent}"/>
  <text x="460" y="526" font-family="monospace" font-size="20" fill="${accent}">codex theme apply</text>
  <text x="980" y="690" font-family="Inter, system-ui, sans-serif" font-size="16" fill="#6b6b70">awesomecodexskin.com</text>
</svg>`;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const files = (await readdir(SKINS_DIR)).filter((f) => f.endsWith('.md'));
  const skins = [];
  for (const f of files) {
    const text = await readFile(join(SKINS_DIR, f), 'utf8');
    const fm = parseFrontmatter(text);
    // slug = filename without .md
    const slug = f.replace(/\.md$/, '');
    const gh = fm.sourceUrl.match(GH_RE);
    skins.push({ file: f, slug, text, ...fm, ghOwner: gh ? gh[1] : null, ghRepo: gh ? gh[2] : null });
  }

  // group by repo
  const byRepo = new Map();
  for (const s of skins) {
    if (!s.ghOwner) continue;
    const key = `${s.ghOwner}/${s.ghRepo}`;
    if (!byRepo.has(key)) byRepo.set(key, []);
    byRepo.get(key).push(s);
  }

  const usedRepoImages = new Map(); // repoKey -> [localPaths]
  for (const [key, list] of byRepo) {
    const [owner, repo] = key.split('/');
    try {
      const { branch, content } = await fetchReadme(owner, repo);
      const imgs = extractImages(content, owner, repo, branch).filter((u) => /\.(png|jpe?g|webp|gif)$/i.test(u) || u.includes('raw.githubusercontent'));
      const rasters = imgs.filter((u) => /\.(png|jpe?g|webp|gif)$/i.test(u));
      const pool = rasters.length ? rasters : imgs;
      const paths = [];
      for (let i = 0; i < list.length; i++) {
        const url = pool[i % Math.max(pool.length, 1)];
        if (!url) { paths.push(null); continue; }
        const dest = join(OUT_DIR, `${list[i].slug}.img`);
        try {
          const p = await downloadImage(url, dest);
          paths.push(p.replace(OUT_DIR, '/previews').replace(/\\/g, '/'));
        } catch (e) {
          paths.push(null);
        }
      }
      usedRepoImages.set(key, paths);
    } catch (e) {
      usedRepoImages.set(key, list.map(() => null));
    }
  }

  // write back
  let realCount = 0, mockCount = 0;
  const report = [];
  for (const s of skins) {
    let preview = null;
    if (s.ghOwner) {
      const key = `${s.ghOwner}/${s.ghRepo}`;
      const arr = usedRepoImages.get(key) || [];
      const idx = byRepo.get(key).findIndex((x) => x.slug === s.slug);
      preview = arr[idx] || null;
    }
    if (!preview) {
      const svg = mockSvg(s.name, s.color, s.category);
      const p = join(OUT_DIR, `${s.slug}.svg`);
      await writeFile(p, svg);
      preview = `/previews/${s.slug}.svg`;
      mockCount++;
      report.push(`${s.slug}: MOCK (${s.ghOwner ? 'gh-no-img' : 'external'})`);
    } else {
      realCount++;
      report.push(`${s.slug}: REAL ${preview}`);
    }
    // inject previewImage
    let t = s.text;
    if (/^previewImage\s*:/m.test(t)) {
      t = t.replace(/^previewImage\s*:.*$/m, `previewImage: ${preview}`);
    } else {
      const parts = t.split('---');
      parts[1] = parts[1].replace(/\n$/, '') + `\npreviewImage: ${preview}\n`;
      t = parts.join('---');
    }
    await writeFile(join(SKINS_DIR, s.file), t);
  }

  console.log('=== 完成 ===');
  console.log(`真实图: ${realCount} 个 | 生成图: ${mockCount} 个 | 总计: ${skins.length}`);
  console.log(report.join('\n'));
}

main().catch((e) => { console.error('FATAL', e); process.exit(1); });
