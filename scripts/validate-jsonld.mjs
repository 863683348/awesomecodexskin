#!/usr/bin/env node
/**
 * validate-jsonld.mjs — validate structured data (JSON-LD) on live pages.
 *
 * Fetches each URL, extracts every <script type="application/ld+json"> block,
 * and checks each schema.org type against its required/recommended fields.
 * Exits non-zero if any hard requirement fails.
 *
 * Usage:
 *   node scripts/validate-jsonld.mjs https://awesomecodexskin.com/skins/clear-glass/
 *   node scripts/validate-jsonld.mjs --base https://awesomecodexskin.com / /skins/clear-glass/ /blog/
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const REQUIRED = {
  SoftwareApplication: ['name', 'description', 'applicationCategory', 'operatingSystem', 'offers'],
  Offer: ['price', 'priceCurrency'],
  AggregateRating: ['ratingValue', 'ratingCount'],
  Review: ['author', 'reviewRating'],
  Rating: ['ratingValue', 'bestRating'],
  FAQPage: ['mainEntity'],
  Question: ['name', 'acceptedAnswer'],
  Answer: ['text'],
  BreadcrumbList: ['itemListElement'],
  ListItem: ['position', 'name'],
  Organization: ['name', 'url'],
  BlogPosting: ['headline', 'datePublished', 'author', 'mainEntityOfPage'],
  Blog: ['name', 'blogPost'],
  CollectionPage: ['name'],
  HowTo: ['name', 'step'],
  HowToStep: ['name', 'text'],
  WebSite: ['name', 'url'],
};

function collectTypes(node, out) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) { node.forEach((n) => collectTypes(n, out)); return; }
  const t = node['@type'];
  if (t) {
    const types = Array.isArray(t) ? t : [t];
    types.forEach((ty) => {
      if (out.has(ty)) out.get(ty).push(node);
      else out.set(ty, [node]);
    });
  }
  Object.keys(node).forEach((k) => {
    if (k.startsWith('@')) return;
    if (k === 'offers' || k === 'aggregateRating' || k === 'review' || k === 'author' ||
        k === 'publisher' || k === 'mainEntity' || k === 'itemListElement' ||
        k === 'acceptedAnswer' || k === 'reviewRating' || k === 'step' || k === 'blogPost') {
      collectTypes(node[k], out);
    }
  });
}

function checkType(ty, nodes) {
  const issues = [];
  for (const node of nodes) {
    const need = REQUIRED[ty] || [];
    for (const f of need) {
      if (node[f] === undefined || node[f] === null || node[f] === '') {
        issues.push(`[${ty}] missing required field: ${f}`);
      }
    }
  }
  return issues;
}

async function fetchPage(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 jsonld-validator' } });
  const html = await res.text();
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  return { status: res.status, html, blocks: blocks.map((b) => b[1].trim()).filter(Boolean) };
}

async function validateUrl(url) {
  let page;
  try {
    page = await fetchPage(url);
  } catch (e) {
    console.log(`\n== ${url}\n   FETCH ERROR: ${e.message}`);
    return { ok: false, error: true };
  }
  console.log(`\n== ${url} (HTTP ${page.status})`);
  if (page.status !== 200) {
    console.log(`   ! non-200 status`);
    return { ok: false };
  }
  if (page.blocks.length === 0) {
    console.log(`   ! no JSON-LD blocks found`);
    return { ok: false };
  }
  let ok = true;
  page.blocks.forEach((block, i) => {
    let data;
    try {
      data = JSON.parse(block);
    } catch (e) {
      ok = false;
      console.log(`   ! block #${i}: INVALID JSON: ${e.message.slice(0, 120)}`);
      return;
    }
    const types = new Map();
    collectTypes(data, types);
    if (types.size === 0) { ok = false; console.log(`   ! block #${i}: no @type found`); return; }
    let blockOk = true;
    for (const [ty, nodes] of types) {
      const issues = checkType(ty, nodes);
      if (issues.length) {
        blockOk = false;
        ok = false;
        issues.slice(0, 6).forEach((msg) => console.log(`   ! ${msg}`));
      } else {
        console.log(`   ✓ ${ty} ×${nodes.length}`);
      }
    }
    if (blockOk) console.log(`   block #${i}: OK (${[...types.keys()].join(', ')})`);
  });
  return { ok };
}

async function main() {
  const args = process.argv.slice(2);
  const baseIdx = args.findIndex((a) => a === '--base');
  let urls = [];
  if (baseIdx !== -1) {
    const base = args[baseIdx + 1].replace(/\/$/, '');
    urls = args.slice(baseIdx + 2).map((p) => `${base}${p}`);
  } else {
    urls = args.filter((a) => !a.startsWith('-'));
  }
  if (urls.length === 0) {
    console.log('usage: node scripts/validate-jsonld.mjs [--base URL] /path1 /path2 ...');
    process.exit(1);
  }
  let allOk = true;
  for (const u of urls) {
    const r = await validateUrl(u);
    if (!r.ok) allOk = false;
  }
  console.log(`\n${allOk ? 'ALL VALID ✓' : 'ISSUES FOUND ✗'}`);
  process.exit(allOk ? 0 : 1);
}

main();
