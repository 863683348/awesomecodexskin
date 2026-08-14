// scripts/parse-ui-en.mjs
// Robust state machine parser for the ui-en.ts source: capture every key + value.
import { readFileSync, writeFileSync } from 'node:fs';

const src = readFileSync('src/i18n/ui-en.ts', 'utf8');

const keys = [];
const values = {};

let i = 0;
const N = src.length;

while (i < N) {
  // Skip whitespace and line comments
  while (i < N && /[\s]/.test(src[i])) i++;
  if (i >= N) break;
  if (src[i] === '/' && src[i + 1] === '/') {
    while (i < N && src[i] !== '\n') i++;
    continue;
  }
  // Expect a quoted key
  if (src[i] !== "'") {
    i++;
    continue;
  }
  let j = i + 1;
  let key = '';
  while (j < N) {
    if (src[j] === '\\' && j + 1 < N) { key += src[j + 1]; j += 2; continue; }
    if (src[j] === "'") break;
    key += src[j];
    j++;
  }
  if (src[j] !== "'") { i = j; continue; }
  i = j + 1;
  while (i < N && /[\s]/.test(src[i])) i++;
  if (src[i] !== ':') { continue; }
  i++;
  while (i < N && /[\s]/.test(src[i])) i++;
  if (src[i] !== "'") { continue; }
  let val = '';
  let k = i + 1;
  while (k < N) {
    if (src[k] === '\\' && k + 1 < N) {
      val += src[k] + src[k + 1];
      k += 2;
      continue;
    }
    if (src[k] === "'") break;
    val += src[k];
    k++;
  }
  if (src[k] !== "'") { i = k; continue; }
  i = k + 1;
  while (i < N && /[\s]/.test(src[i])) i++;
  if (src[i] === ',') i++;
  keys.push(key);
  values[key] = val;
}

console.log('Total keys:', keys.length);
writeFileSync('scripts/_ui-en-keys.json', JSON.stringify({ keys, values }, null, 2), 'utf8');
console.log('Last 5:', keys.slice(-5));
console.log('First 5:', keys.slice(0, 5));