// src/content.config.ts
// Astro 6 Content Layer + Zod v4 (z MUST come from astro/zod)
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 8 curated skin categories + 2 catch-alls (slug values, must align with /skins/category/[slug]).
// `other` / `gaming` are used by community-imported skins that don't map cleanly to the
// curated list; they keep the collection valid without forcing a wrong category.
const categoryEnum = z.enum([
  'dark-midnight',    // Dark & Midnight
  'light-airy',       // Light & Airy
  'anime-pop',        // Anime & Pop
  'neon-cyberpunk',   // Neon & Cyberpunk
  'nature-earthy',    // Nature & Earthy
  'retro-vintage',    // Retro & Vintage
  'pastel-soft',      // Pastel & Soft
  'mono-terminal',    // Mono & Terminal
  'other',            // catch-all for community imports (not yet curated)
  'gaming',           // gaming / character-theme skins (e.g. Genshin)
]);

// Platform enum (shared with compatibleWith)
const platformEnum = z.enum(['codex-desktop', 'codex-cli', 'both']);

// Install format enum: drives the detail-page InstallBlock rendering (see §3.2)
const installFormatEnum = z.enum([
  'dreamskin-v1',    // engine preset / agent prompt
  'codedrobe-theme', // download .codedrobe-theme (aligns with codexskins.org)
  'prompt',          // copyable prompt block
  'tmtheme',         // CLI /theme instruction
  'manual',          // see source to install manually
]);

// Primary color validation: #RGB or #RRGGBB (the skin's OWN color = business data)
const hexColor = z
  .string()
  .regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, { error: 'Must be a hex color, e.g. #1A2B3C' });

const skins = defineCollection({
  // glob loader: scan all .md under src/content/skins
  loader: glob({ pattern: '**/*.md', base: './src/content/skins' }),
  schema: z.object({
    slug: z.string().optional(),

    name: z.string().min(1, { error: 'Skin name is required' }),
    author: z.string().min(1, { error: 'Author is required' }),

    category: categoryEnum,
    // mood tag, used as a filter facet (MVP free string, enumerable later)
    mood: z.string().min(1, { error: 'Mood is required (used as a filter facet)' }),

    // the skin's own primary color (business data, NOT UI chrome)
    color: hexColor,

    platform: platformEnum,

    description: z.string().min(1, { error: 'Description is required' }),

    // preview image: local /previews/xxx.webp or remote https:// URL; absent → fallback (§3.1)
    previewImage: z.string().optional(),

    // primary install method: copy-paste prompt (required)
    installPrompt: z.string().min(1, { error: 'Install prompt is required' }),
    // install format: drives detail-page InstallBlock copy logic (§3)
    installFormat: installFormatEnum.default('prompt'),
    // optional theme.json (expressed as YAML object in frontmatter)
    themeJson: z.record(z.string(), z.unknown()).optional(),

    // source external link (repo / gallery / store), MUST be an absolute URL
    sourceUrl: z.url({ error: 'sourceUrl must be an absolute URL' }),

    // compatible platforms (default Desktop only)
    compatibleWith: z.array(platformEnum).default(['codex-desktop']),

    // featured (home SPONSORED / FEATURED slot)
    featured: z.boolean().default(false),

    // last updated (ISO string or Date; z.coerce.date handles both)
    updatedAt: z.coerce.date(),

    // stats: for sorting + display; start at 0, updated manually or via PR later
    stats: z
      .object({
        installs: z.number().int().min(0).default(0),
        likes: z.number().int().min(0).default(0),
      })
      .default({ installs: 0, likes: 0 }),

    // --- optional structured content (enriches the detail page, kills thin content) ---
    // Key visual traits / highlights, e.g. ["Translucent panels", "High-key palette"]
    features: z.array(z.string()).optional(),
    // Use-case hints rendered as the "When to use" block, e.g. ["Daytime work", "Clean desktop"]
    bestFor: z.array(z.string()).optional(),
    // Optional 2-3 FAQ Q&A specific to this skin
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        })
      )
      .optional(),
  }),
});

// Blog posts: long-tail informational content that feeds the skin index with
// editorial depth (E-E-A-T) and captures "how to" / "best" style queries.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(1, { error: 'Post title is required' }),
    description: z.string().min(1, { error: 'Meta description is required' }),
    // ISO date of first publish (used for sorting + Article datePublished)
    pubDate: z.coerce.date(),
    // Updated date, defaults to pubDate
    updatedDate: z.coerce.date().optional(),
    // Topic tags rendered as chips, e.g. ["install", "cli"]
    tags: z.array(z.string()).default([]),
    // Category slug used for grouping on the blog index
    category: z.string().default('guide'),
    // Optional inline cover image (local /blog/... or absolute)
    coverImage: z.string().optional(),
    // Optional list of skin slugs this post recommends / links to
    relatedSkins: z.array(z.string()).default([]),
    // Content language. English source posts sit at the blog root (default 'en');
    // translated posts live in src/content/blog/{locale}/{slug}.md with lang = {locale}.
    lang: z.string().default('en'),
  }),
});

export const collections = { skins, blog };