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
  'footer.copyright': '© {year} Codex Skin Index. Not affiliated with OpenAI.',
  'footer.legal': 'Legal',

  'legal.privacy.title': 'Privacy Policy',
  'legal.privacy.description': 'How we collect, use, and protect your information.',
  'legal.privacy.updated': 'Last updated: August 22, 2026',
  'legal.privacy.intro': 'This Privacy Policy describes how Codex Skin Index ("we," "our," or "us") collects, uses, and shares your personal information when you visit our website. By using our services, you agree to the collection and use of information in accordance with this policy.',
  'legal.privacy.s1.title': '1. Information We Collect',
  'legal.privacy.s1.body': 'We collect information you provide directly, such as when you contact us, subscribe to updates, or interact with our content. We also automatically collect certain information when you visit our site, including IP address, browser type, operating system, referring URLs, and pages viewed.',
  'legal.privacy.s2.title': '2. How We Use Your Information',
  'legal.privacy.s2.body': 'We use the information we collect to operate and improve our services, communicate with you, respond to your requests, and ensure the security of our website. We may also use anonymized data for analytics purposes.',
  'legal.privacy.s3.title': '3. Advertising (Google AdSense)',
  'legal.privacy.s3.body': 'We use Google AdSense to display advertisements on our website. Google AdSense uses cookies, including the DART cookie, to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visits to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Google Ads Settings</a> or by visiting the <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener">Network Advertising Initiative opt-out page</a>.',
  'legal.privacy.s4.title': '4. Sharing Your Information',
  'legal.privacy.s4.body': 'We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide you with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.',
  'legal.privacy.s5.title': '5. Data Security',
  'legal.privacy.s5.body': 'We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.',
  'legal.privacy.s6.title': '6. Your Rights',
  'legal.privacy.s6.body': 'Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, delete, or port your data. To exercise these rights, please contact us at the email below.',
  'legal.privacy.s7.title': '7. Children's Privacy',
  'legal.privacy.s7.body': 'Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal data from children under 13, we will take steps to delete such information.',
  'legal.privacy.s8.title': '8. Changes to This Policy',
  'legal.privacy.s8.body': 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.',
  'legal.privacy.s9.title': '9. Contact Us',
  'legal.privacy.s9.body': 'If you have any questions about this Privacy Policy, please contact us.',
  'legal.privacy.contact': 'Email: ',

  'legal.terms.title': 'Terms of Service',
  'legal.terms.description': 'Terms and conditions for using Codex Skin Index.',
  'legal.terms.updated': 'Last updated: August 22, 2026',
  'legal.terms.intro': 'These Terms of Service govern your access to and use of the Codex Skin Index website and services. By accessing or using our services, you agree to be bound by these Terms.',
  'legal.terms.s1.title': '1. Acceptance of Terms',
  'legal.terms.s1.body': 'By accessing or using the Codex Skin Index website and services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these Terms, you may not access or use our services.',
  'legal.terms.s2.title': '2. Use of Services',
  'legal.terms.s2.body': 'You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that violates applicable laws or regulations.',
  'legal.terms.s3.title': '3. Intellectual Property',
  'legal.terms.s3.body': 'The content, features, and functionality of our website are owned by us and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.',
  'legal.terms.s4.title': '4. User Content',
  'legal.terms.s4.body': 'By submitting content to our website, you grant us a non-exclusive, royalty-free license to use, reproduce, and display such content. You are responsible for ensuring that your content does not violate any third-party rights.',
  'legal.terms.s5.title': '5. Disclaimer of Warranties',
  'legal.terms.s5.body': 'Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, secure, or error-free.',
  'legal.terms.s6.title': '6. Limitation of Liability',
  'legal.terms.s6.body': 'To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of our services.',
  'legal.terms.s7.title': '7. Changes to Terms',
  'legal.terms.s7.body': 'We may modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our services after such modifications constitutes your acceptance of the revised Terms.',
  'legal.terms.contact': 'Email: '

} as const;