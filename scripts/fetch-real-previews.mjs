// fetch-real-previews.mjs
// 下载能可靠对应的真实画廊预览图，覆盖对应 skin 的 previewImage。
// 其余保持此前生成的 SVG mock（codex-skin 仓库 README 无图，已确认）。
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SKINS_DIR = join(ROOT, 'src', 'content', 'skins');
const OUT_DIR = join(ROOT, 'public', 'previews');
const UA = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36' };

// slug -> 可靠的真实图片地址（已逐一核对来源页）
const REAL = {
  kungfuFootball: 'https://codexskins.org/themes/kungfu-home.jpg',
  qq2007Retro: 'https://codexskins.org/themes/qq2007-home.jpg',
  dilraba: 'https://codex-skin.dev/_next/image?url=%2Fskins%2Fdilraba-01.webp&w=3840&q=75',
  jacksonYee: 'https://codex-skin.dev/_next/image?url=%2Fskins%2Fjackson-yee-01.webp&w=3840&q=75',
  hatsuneMiku: 'https://codex-skin.dev/_next/image?url=%2Fskins%2Fhatsune-miku-01.webp&w=3840&q=75',
  inspiration: 'https://codex-skin.dev/_next/image?url=%2Fskins%2Finspiration-universe-01.webp&w=3840&q=75',
  redWhiteScifi: 'https://codex-skin.dev/_next/image?url=%2Fskins%2Fred-white-scifi-01.webp&w=3840&q=75',
};

// 文件名 -> slug 映射（README 的 Detail 链接 slug）
const SLUG = {
  kungfuFootball: 'kungfu-football',
  qq2007Retro: 'qq2007-retro',
  dilraba: 'dilraba',
  jacksonYee: 'jackson-yee',
  hatsuneMiku: 'hatsune-miku',
  inspiration: 'inspiration',
  redWhiteScifi: 'red-white-scifi',
};

async function download(url, destBase) {
  const r = await fetch(url, { headers: UA, redirect: 'follow' });
  if (!r.ok) throw new Error('http ' + r.status);
  const buf = Buffer.from(await r.arrayBuffer());
  if (buf.length > 6 * 1024 * 1024) throw new Error('too big');
  const ct = r.headers.get('content-type') || '';
  let ext = 'jpg';
  if (ct.includes('webp')) ext = 'webp';
  else if (ct.includes('png')) ext = 'png';
  else if (ct.includes('gif')) ext = 'gif';
  else if (ct.includes('jpeg')) ext = 'jpg';
  const dest = destBase + '.' + ext;
  await writeFile(dest, buf);
  return { dest, ext, bytes: buf.length };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const results = [];
  for (const key of Object.keys(REAL)) {
    const slug = SLUG[key];
    const mdPath = join(SKINS_DIR, slug + '.md');
    try {
      const { dest, ext, bytes } = await download(REAL[key], join(OUT_DIR, slug));
      let t = await readFile(mdPath, 'utf8');
      const rel = `/previews/${slug}.${ext}`;
      if (/^previewImage\s*:/m.test(t)) t = t.replace(/^previewImage\s*:.*$/m, `previewImage: ${rel}`);
      else { const p = t.split('---'); p[1] = p[1].replace(/\n$/, '') + `\npreviewImage: ${rel}\n`; t = p.join('---'); }
      await writeFile(mdPath, t);
      results.push(`✅ ${slug} -> ${rel} (${bytes} bytes)`);
    } catch (e) {
      results.push(`⚠️ ${slug} 下载失败: ${e.message} (保留生成图)`);
    }
  }
  console.log(results.join('\n'));
}
main().catch((e) => { console.error('FATAL', e); process.exit(1); });
