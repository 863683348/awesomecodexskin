// scripts/postbuild-en-root.mjs
// Astro's i18n with prefixDefaultLocale:false still emits the default locale under
// /en/ when using [lang] dynamic routes. We want English at the ROOT path (legacy
// URLs like /skins/clear-glass/ must keep working). This script copies /en/* to /
// after build so English pages live at the root and /en/ stays as an alias.
import { readdirSync, copyFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const enDir = join(dist, 'en');

if (!existsSync(enDir)) {
  console.log('[postbuild-en-root] no /en dir, skipping');
  process.exit(0);
}

let copied = 0;
function copyDir(src, dst) {
  for (const entry of readdirSync(src)) {
    const sp = join(src, entry);
    const dp = join(dst, entry);
    if (statSync(sp).isDirectory()) {
      mkdirSync(dp, { recursive: true });
      copyDir(sp, dp);
    } else {
      // Don't overwrite files that already exist at root (e.g. favicon, robots)
      if (!existsSync(dp)) {
        copyFileSync(sp, dp);
        copied++;
      }
    }
  }
}

copyDir(enDir, dist);
console.log(`[postbuild-en-root] copied ${copied} files from /en/ to root`);
