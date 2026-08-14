// src/i18n/ui-en.ts
// English UI strings — the source of truth. Other locales are generated from this.
// Only put UI chrome here: nav labels, button text, page titles/descriptions, section headers.
// Domain data (skin names, install prompts, blog post titles) lives in frontmatter.
export const ui = {
  // Site-wide
  'site.name': 'Codex Skin Index',
  'site.tagline':
    'A neutral index of Codex skins, pets & workspace mods — copy one prompt, reskin your workspace.',
  'site.description':
    'Browse, compare, and reach every OpenAI Codex Desktop and CLI skin, theme engine, and gallery from one neutral index. Filter by mood, color, and platform, then copy a single install prompt.',

  // Navigation
  'nav.skins': 'Skins',
  'nav.categories': 'Categories',
  'nav.blog': 'Blog',
  'nav.advertise': 'Advertise',
  'nav.contact': 'Contact',
  'nav.submit': 'Submit',
  'nav.themeToggle': 'Toggle theme',
  'nav.language': 'Language',
  'nav.sister.pets': 'Pets',
  'nav.sister.skinGenerator': 'Skin Generator',

  // Home page
  'home.hero.badge': 'Neutral index · Not affiliated with OpenAI',
  'home.hero.h1':
    'A neutral index of Codex skins, pets & workspace mods — copy one prompt, reskin your workspace.',
  'home.hero.subtitle':
    'Browse, compare, and reach every OpenAI Codex Desktop and CLI skin, theme engine, and gallery from one neutral index. Filter by mood, color, and platform, then copy a single install prompt.',
  'home.hero.searchPlaceholder': 'Search skins, moods, engines…',
  'home.hero.cta.browse': 'Browse all skins',
  'home.hero.cta.submit': 'Submit a skin',
  'home.hero.cta.advertise': 'Advertise with us — reach Codex skinners',
  'home.featured.label': 'Featured',
  'home.featured.empty': 'Previews populate as the index grows.',
  'home.section.allSkins': 'All skins',
  'home.section.engines': 'Engines & tools',
  'home.section.engines.subtitle':
    'The runtimes and managers behind the skins above. Each is an open-source project you install once, then apply skins through.',
  'home.skimsCount': '{n} skins',
  'home.loadMore': 'Load more',
  'home.emptyState': 'No skins match the current filters.',

  // Skins list / category pages
  'skins.title': 'All Codex skins — browse the full index',
  'skins.description': 'Browse every Codex Desktop and CLI skin. Filter by category, mood, accent color, and platform, then sort by newest or popular.',
  'skins.quickNav': 'Browse by category',
  'skins.installGuide': 'Install guide',
  'skins.count': '{n} skins',
  'skins.empty': 'No skins match your filters.',

  // Skin detail page
  'skin.about': 'About this skin',
  'skin.highlights': 'Highlights',
  'skin.bestFor': 'Best for',
  'skin.faq': 'FAQ',
  'skin.breadcrumb.skins': 'Skins',
  'skin.install': 'Install',
  'skin.installPrompt': 'Install prompt',
  'skin.installCommand': 'Install command',
  'skin.downloadTheme': 'Download theme',
  'skin.copyLabel': 'Copy',
  'skin.openSource': 'Open source',
  'skin.compatibleWith': 'Compatible with',
  'skin.byAuthor': 'by {author}',
  'skin.installs': '{n} installs',
  'skin.likes': '{n} likes',
  'skin.updated': 'Updated {date}',
  'skin.sourceMayHaveChanged': 'Source may have changed',
  'skin.reportLink': 'Report a problem',
  'skin.dreamskinNote': 'Applied through the Codex Dream Skin engine as a preset or agent prompt.',
  'skin.installFromSource': 'This skin installs from its source.',
  'skin.seeSource': 'See source',
  'skin.downloadCodedrobe': 'Download .codedrobe-theme',
  'skin.downloadHelp': 'Save the file, then apply it in Codex Desktop.',

  // Blog
  'blog.title': 'Codex Skin Blog — guides, roundups & how-tos',
  'blog.description': 'Guides, best-of roundups and how-tos for Codex Desktop and CLI skins. Learn to install, create and manage skins.',
  'blog.heading': 'Codex Skin Blog',
  'blog.subtitle':
    'How to install, create and manage Codex Desktop & CLI skins — plus the best-of roundups from the index.',
  'blog.readMore': 'Read more',
  'blog.backToList': 'Blog',
  'blog.relatedSkins': 'Skins mentioned in this post',
  'blog.browseAllSkins': 'Browse all',
  'blog.publishedOn': 'Published {date}',
  'blog.categoryLabel': 'Category: {category}',

  // Tutorial page
  'tutorial.title': 'Codex skin tutorial — from engine to applied theme',
  'tutorial.description': 'A fuller walkthrough for applying a Codex skin: install an engine, pick a skin, copy the prompt, apply, and restore.',
  'tutorial.h1': 'Tutorials',
  'tutorial.subtitle': 'A longer walkthrough for applying your first Codex skin and keeping it reversible.',
  'tutorial.beforeStart': 'Before you start',
  'tutorial.beforeStartBody':
    "Skins style Codex at the visual layer only, over 127.0.0.1. No app files are modified and your API key is never touched.",
  'tutorial.steps.1.title': 'Install an engine once',
  'tutorial.steps.1.body':
    'Clone or download a skin engine such as Codex Dream Skin, or use a manager like Codex Skin Manager. This is a one-time setup on your machine.',
  'tutorial.steps.2.title': 'Find a skin in the index',
  'tutorial.steps.2.body':
    'Browse categories or search by mood and color. Open the skin page to see its description, compatible platforms, and the exact install prompt.',
  'tutorial.steps.3.title': 'Copy and apply',
  'tutorial.steps.3.body':
    'Click Copy on the install prompt, paste it into Codex Desktop, or run the CLI command. The workspace updates immediately.',
  'tutorial.steps.4.title': 'Verify and keep the source',
  'tutorial.steps.4.body':
    'Confirm the new look, then bookmark the source link. If Codex updates and a skin breaks, re-run the source restore step to return to stock.',
  'tutorial.tips': 'Tips',
  'tutorial.tips.1': 'Start with a featured skin — it is the most likely to apply cleanly through the engine\'s default preset.',
  'tutorial.tips.2': 'Copy the exact prompt text; small edits can change what the engine applies.',
  'tutorial.tips.3': 'Keep the source link handy so you can restore or re-apply after a Codex update.',
  'tutorial.tips.4': 'Use the category and mood filters to narrow 100+ skins to a handful that fit your taste.',
  'tutorial.choosingEngine': 'Choosing an engine',
  'tutorial.choosingEngineBody': 'The engine decides how skins are applied and which formats you can use. All are free and open source.',
  'tutorial.engine.cols.engine': 'Engine',
  'tutorial.engine.cols.platforms': 'Platforms',
  'tutorial.engine.cols.style': 'Install style',
  'tutorial.engine.cols.notes': 'Notes',
  'tutorial.troubleshooting': 'Troubleshooting',
  'tutorial.troubleshootingBody': 'The four most common issues and their fixes.',
  'tutorial.endCta': 'Need the short version? See the {installLink}, the {faqLink}, or the {blogLink}.',

  // FAQ page
  'faq.title': 'Frequently asked questions',
  'faq.description': 'Common questions about installing and using Codex skins.',
  'faq.h1': 'Frequently asked questions',
  'faq.subtitle': 'Common questions about Codex skins, install methods, and engines.',

  // Install page
  'install.title': 'Install Codex skins — quick guide',
  'install.description': 'Quick reference for installing Codex Desktop and CLI skins.',
  'install.h1': 'Install Codex skins',
  'install.subtitle': 'Three quick ways to apply a Codex skin.',

  // Submit page
  'submit.title': 'Submit a Codex skin',
  'submit.description': 'Submit your Codex skin to the index.',
  'submit.h1': 'Submit a skin',
  'submit.subtitle': 'Share your Codex skin with the community.',

  // Advertise page
  'advertise.title': 'Advertise with Codex Skin Index',
  'advertise.description': 'Reach Codex skinners with a sponsored slot.',
  'advertise.h1': 'Advertise with us',
  'advertise.subtitle': 'Reach Codex skinners with a featured slot.',

  // Contact page
  'contact.title': 'Contact Codex Skin Index',
  'contact.description': 'Get in touch with the Codex Skin Index team.',
  'contact.h1': 'Contact',
  'contact.subtitle': 'Reach out for partnerships, feedback, or bug reports.',

  // Misc
  'misc.copy': 'Copy',
  'misc.copied': 'Copied',
  'misc.view': 'View',
  'misc.search': 'Search',
  'misc.filter': 'Filter',
  'misc.sort': 'Sort',
  'misc.sortNewest': 'Newest',
  'misc.sortFeatured': 'Featured',
  'misc.sortPopular': 'Popular',
  'misc.loadMore': 'Load more',
  'misc.sponsored': 'Sponsored',
  'misc.empty': 'Nothing here yet.',
  'misc.error': 'Something went wrong.',
  'misc.tryAgain': 'Try again',
  'misc.404.title': '404 — Page not found',
  'misc.404.body': 'The page you are looking for does not exist or has been moved.',
  'misc.404.cta': 'Back to home',

  // Footer
  'footer.tagline': 'A neutral index of Codex skins.',
  'footer.copyright': '© {year} Codex Skin Index. Not affiliated with OpenAI.',
} as const;

export type UIKey = keyof typeof ui;
