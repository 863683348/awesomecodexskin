#!/usr/bin/env node
/**
 * translate-blog.mjs — batch-translate blog posts into every non-English locale.
 *
 * Source:   src/content/blog/{slug}.md         (English source, lang defaults to 'en')
 * Output:   src/content/blog/{locale}/{slug}.md (translated copy, lang = {locale})
 *
 * Uses the Alibaba Cloud DashScope (百炼) OpenAI-compatible endpoint (qwen-plus).
 * Reads the API key from C:/Users/l'x/.workbuddy/secrets/bailian-api-key.txt
 * (or $BAILIAN_API_KEY). Never hardcode keys in the repo.
 *
 * Rules enforced in the system prompt:
 *  - translate prose/headings only
 *  - keep code blocks, inline code, paths, commands, URLs, product/skin names,
 *    markdown link URLs and structure unchanged
 *  - output markdown only
 *
 * Usage:
 *   node scripts/translate-blog.mjs [--locales fr,es,it,ru,ja] [--force]
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = join(__dirname, '..', 'src', 'content', 'blog');

// All non-English locales the site ships (12-locale plan, English is the root).
const ALL_LOCALES = ['zh', 'ja', 'ko', 'es', 'de', 'fr', 'pt', 'it', 'ru', 'ar', 'nl'];

const LOCALE_NAMES = {
  zh: 'Simplified Chinese',
  ja: 'Japanese',
  ko: 'Korean',
  es: 'Spanish (Spain)',
  de: 'German',
  fr: 'French',
  pt: 'Portuguese (Brazil)',
  it: 'Italian',
  ru: 'Russian',
  ar: 'Arabic',
  nl: 'Dutch',
};

// --- API setup -------------------------------------------------------------
function apiKey() {
  const env = process.env.BAILIAN_API_KEY;
  if (env) return env;
  const f = 'C:/Users/l\x27x/.workbuddy/secrets/bailian-api-key.txt';
  if (existsSync(f)) return readFileSync(f, 'utf8').trim();
  throw new Error('No Bailian API key found (set BAILIAN_API_KEY or place the key file).');
}
const KEY = apiKey();
const MODEL = process.env.TRANSLATE_MODEL || 'qwen-plus';

async function chat(system, user, maxTokens = 9000) {
  const res = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
      max_tokens: maxTokens,
      temperature: 0.2,
    }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`DashScope ${res.status}: ${txt.slice(0, 300)}`);
  }
  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content;
  if (!content) throw new Error(`Empty completion for: ${user.slice(0, 60)}`);
  return content.trim();
}

const SLEEP_MS = Number(process.env.TRANSLATE_SLEEP_MS || 250);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// --- Markdown frontmatter parsing -----------------------------------------
function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const mm = line.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (!mm) continue;
    let val = mm[2].trim();
    // quoted string
    const q = val.match(/^"([\s\S]*)"$/);
    if (q) { fm[mm[1]] = q[1].replace(/\\"/g, '"'); continue; }
    // array
    const a = val.match(/^\[(.*)\]$/);
    if (a) { fm[mm[1]] = a[1].split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean); continue; }
    fm[mm[1]] = val;
  }
  return { fm, body: m[2].replace(/^\n/, '') };
}

function serializeFrontmatter(fm, extra) {
  const q = (v) => String(v).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  const lines = ['---'];
  for (const [k, v] of Object.entries(extra)) {
    if (Array.isArray(v)) {
      lines.push(`${k}: [${v.map((x) => `"${q(x)}"`).join(', ')}]`);
    } else if (typeof v === 'string' && /^[\w\s.,:&()\-/]+$/.test(v)) {
      lines.push(`${k}: "${q(v)}"`);
    } else {
      lines.push(`${k}: "${q(v)}"`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

// --- Translation -----------------------------------------------------------
const SYS_BODY = (loc) => `You are a professional technical translator for a Codex skin index website (codex CLI/desktop themes). Translate the given English markdown article into ${LOCALE_NAMES[loc]}.

STRICT RULES:
1. Translate all human-readable prose, headings, table text and link text.
2. NEVER translate: code blocks, inline code, file paths, shell commands, URLs, product names (Codex, Codex Desktop, Codex CLI, Tokyo Night, Monokai Stone, Solarized, Bearded, Codepilot, Codex Themes CLI, ReTheme, Dream Skin, Skin Manager, GitHub, VS Code, OpenAI, macOS, Windows, npm, CLI, TUI, tmtheme, codedrobe-theme), numeric/version tokens, or skin display names.
3. Keep markdown structure identical: same headings, lists, tables, bold/italic, blockquotes, and link destinations. A link like [Monokai Stone](/skins/monokai-stone/) keeps its /path/ URL unchanged; only the visible text may be translated.
4. Keep any raw HTML/JSX exactly as-is.
5. Output ONLY the translated markdown body. No preamble, no notes, no code fences around the answer.`;

const SYS_META = (loc) => `You translate web page metadata from English into ${LOCALE_NAMES[loc]} for a Codex skin index site. Keep product names (Codex, Tokyo Night, Monokai Stone, Solarized, CLI, Desktop) untranslated. Return only the translation.`;

async function translateBody(loc, body) {
  return chat(SYS_BODY(loc), body);
}
async function translateMeta(loc, text) {
  return chat(SYS_META(loc), `Translate this to ${LOCALE_NAMES[loc]}: ${text}`);
}

// --- Main ------------------------------------------------------------------
async function main() {
  const args = process.argv.slice(2);
  const localesArg = args.find((a) => a.startsWith('--locales='));
  const locales = localesArg ? localesArg.split('=')[1].split(',') : ALL_LOCALES;
  const force = args.includes('--force');

  // English source posts = files directly under blog root (no '/')
  const enFiles = readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md') && !f.includes('/'));
  console.log(`EN source posts: ${enFiles.length}`);
  console.log(`Target locales: ${locales.join(', ')}`);
  if (force) console.log('Force mode: overwrites existing translations.');

  const total = enFiles.length * locales.length;
  let done = 0;
  let skipped = 0;

  for (const loc of locales) {
    for (const file of enFiles) {
      const slug = file.replace(/\.md$/, '');
      const outDir = join(BLOG_DIR, loc);
      const outFile = join(outDir, file);
      if (!force && existsSync(outFile)) {
        skipped++;
        done++;
        process.stdout.write(`\r[${done}/${total}] skip ${loc}/${file}`);
        continue;
      }
      const raw = readFileSync(join(BLOG_DIR, file), 'utf8');
      const parsed = parseFrontmatter(raw);
      if (!parsed) { console.error(`\nSKIP (bad frontmatter): ${file}`); done++; continue; }
      const { fm, body } = parsed;

      try {
        const [title, description, tBody] = await Promise.all([
          translateMeta(loc, fm.title),
          translateMeta(loc, fm.description),
          translateBody(loc, body),
        ]);
        mkdirSync(outDir, { recursive: true });
        const extra = {
          title,
          description,
          pubDate: fm.pubDate,
          ...(fm.updatedDate ? { updatedDate: fm.updatedDate } : {}),
          tags: fm.tags || [],
          category: fm.category || 'guide',
          ...(fm.coverImage ? { coverImage: fm.coverImage } : {}),
          ...(fm.relatedSkins && fm.relatedSkins.length ? { relatedSkins: fm.relatedSkins } : {}),
          lang: loc,
        };
        writeFileSync(outFile, serializeFrontmatter(fm, extra) + '\n\n' + tBody + '\n', 'utf8');
        done++;
        process.stdout.write(`\r[${done}/${total}] ✓ ${loc}/${file} (${tBody.length} chars)`);
      } catch (e) {
        done++;
        console.error(`\nERROR ${loc}/${file}: ${e.message}`);
      }
      await sleep(SLEEP_MS);
    }
  }
  console.log(`\nDone. translated=${done - skipped} skipped=${skipped} failed=${total - done}`);
}

main();
