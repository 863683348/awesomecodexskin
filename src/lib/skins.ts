// src/lib/skins.ts — skins collection helpers (sorting, OS derivation, JSON-LD)
import type { CollectionEntry } from 'astro:content';

const SITE_URL = 'https://awesomecodexskin.com';

export type Skin = CollectionEntry<'skins'>;

export function sortByNewest(skins: Skin[]): Skin[] {
  return [...skins].sort(
    (a, b) => b.data.updatedAt.getTime() - a.data.updatedAt.getTime()
  );
}

export function sortByPopular(skins: Skin[]): Skin[] {
  return [...skins].sort(
    (a, b) => b.data.stats.installs - a.data.stats.installs
  );
}

export function featuredFirst(skins: Skin[]): Skin[] {
  return [...skins].sort((a, b) => {
    if (a.data.featured === b.data.featured) {
      return b.data.updatedAt.getTime() - a.data.updatedAt.getTime();
    }
    return a.data.featured ? -1 : 1;
  });
}

// operatingSystem string derived from platform / compatibleWith (for JSON-LD)
export function operatingSystem(skin: Skin): string {
  const set = new Set(skin.data.compatibleWith);
  if (set.has('both') || (set.has('codex-desktop') && set.has('codex-cli'))) {
    return 'macOS, Windows';
  }
  if (set.has('codex-cli')) return 'Cross-platform';
  return 'macOS, Windows';
}

export function absolutePreview(skin: Skin, site: URL | string): string | undefined {
  const img = skin.data.previewImage;
  if (!img) return undefined;
  try {
    return new URL(img, site).toString();
  } catch {
    return img;
  }
}

// Build an ItemList JSON-LD for a set of skins (homepage / listing / category)
export function itemListJsonLd(skins: Skin[], name = 'Codex Skins Index'): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: skins.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/skins/${s.id}/`,
    })),
  };
}
