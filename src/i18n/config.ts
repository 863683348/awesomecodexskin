// src/i18n/config.ts
// Locale configuration shared across the site. Keep in sync with astro.config.mjs.
export const SUPPORTED_LOCALES = [
  'en', 'zh', 'ja', 'ko', 'es', 'de', 'fr', 'pt', 'it', 'ru', 'ar', 'nl',
] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

// Short labels shown in the LocaleSwitcher (UI label per locale)
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  zh: '中文',
  ja: 'JA',
  ko: 'KO',
  es: 'ES',
  de: 'DE',
  fr: 'FR',
  pt: 'PT',
  it: 'IT',
  ru: 'RU',
  ar: 'AR',
  nl: 'NL',
};

// Map our internal locale code to the hreflang value (matches sitemap i18n config)
export const LOCALE_HREFLANG: Record<Locale, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  ja: 'ja-JP',
  ko: 'ko-KR',
  es: 'es-ES',
  de: 'de-DE',
  fr: 'fr-FR',
  pt: 'pt-BR',
  it: 'it-IT',
  ru: 'ru-RU',
  ar: 'ar',
  nl: 'nl-NL',
};

// RTL languages (Arabic)
export const RTL_LOCALES = new Set<Locale>(['ar']);

/** Extract locale from URL pathname (e.g. /zh/foo/ -> 'zh', /foo/ -> DEFAULT_LOCALE). */
export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  if (seg && (SUPPORTED_LOCALES as readonly string[]).includes(seg)) {
    return seg as Locale;
  }
  return DEFAULT_LOCALE;
}

/** Strip locale prefix from pathname (so /zh/skins/clear-glass/ -> /skins/clear-glass/). */
export function stripLocale(pathname: string): string {
  const seg = pathname.split('/').filter(Boolean)[0];
  if (seg && (SUPPORTED_LOCALES as readonly string[]).includes(seg)) {
    return '/' + pathname.split('/').slice(2).join('/');
  }
  return pathname;
}

/** Build a localized URL: locale 'en' returns the un-prefixed path; others prepend /<locale>. */
export function localizedPath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : '/' + path;
  if (locale === DEFAULT_LOCALE) return clean;
  return `/${locale}${clean}`;
}