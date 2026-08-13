// src/content.config.ts
// Astro 6 Content Layer + Zod v4 (z MUST come from astro/zod)
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 8 skin categories (slug values, must align with /skins/category/[slug])
const categoryEnum = z.enum([
  'dark-midnight',    // Dark & Midnight
  'light-airy',       // Light & Airy
  'anime-pop',        // Anime & Pop
  'neon-cyberpunk',   // Neon & Cyberpunk
  'nature-earthy',    // Nature & Earthy
  'retro-vintage',    // Retro & Vintage
  'pastel-soft',      // Pastel & Soft
  'mono-terminal',    // Mono & Terminal
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
  }),
});

export const collections = { skins };
