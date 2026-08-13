import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../lib/site.ts';

export async function GET(context: APIContext) {
  const skins = await getCollection('skins');
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: skins.map((s) => ({
      title: s.data.name,
      description: s.data.description,
      link: `/skins/${s.id}`,
      pubDate: s.data.updatedAt,
    })),
  });
}
