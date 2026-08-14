// scripts/postbuild-sitemap.mjs
// After `astro build`, @astrojs/sitemap emits /sitemap-index.xml + /sitemap-0.xml.
// Google's first look is the conventional root path /sitemap.xml, so we publish
// a lightweight sitemap index at /sitemap.xml that mirrors sitemap-index.xml.
// This keeps the native multi-sitemap structure (scales past 50k URLs) while
// giving crawlers the conventional entry point robots.txt already advertises.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const indexSrc = join(dist, 'sitemap-index.xml');
const indexOut = join(dist, 'sitemap.xml');

if (!existsSync(indexSrc)) {
  console.warn('[postbuild-sitemap] sitemap-index.xml not found — skipping sitemap.xml mirror');
  process.exit(0);
}

// Read the child sitemap URL(s) from sitemap-index.xml and emit a valid
// <sitemapindex> at /sitemap.xml (same content, conventional filename).
const indexXml = readFileSync(indexSrc, 'utf8');
const locs = [...indexXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const out = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locs.map((l) => `  <sitemap><loc>${l}</loc></sitemap>`).join('\n')}
</sitemapindex>
`;

writeFileSync(indexOut, out, 'utf8');
console.log(`[postbuild-sitemap] wrote ${indexOut} (${locs.length} child sitemap(s))`);
