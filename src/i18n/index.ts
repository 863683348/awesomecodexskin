// src/i18n/index.ts
// UI translation lookup. Returns the English string as fallback when a key is missing
// in the active locale's dictionary — so partial translations don't break the site.
import { ui as en } from './ui-en.ts';
import type { Locale } from './config.ts';
import { DEFAULT_LOCALE } from './config.ts';

import { ui as zh } from './ui-zh.ts';
import { ui as ja } from './ui-ja.ts';
import { ui as ko } from './ui-ko.ts';
import { ui as es } from './ui-es.ts';
import { ui as de } from './ui-de.ts';
import { ui as fr } from './ui-fr.ts';
import { ui as pt } from './ui-pt.ts';
import { ui as it } from './ui-it.ts';
import { ui as ru } from './ui-ru.ts';
import { ui as ar } from './ui-ar.ts';
import { ui as nl } from './ui-nl.ts';

const dictionaries: Record<Locale, Record<string, string>> = {
  en, zh, ja, ko, es, de, fr, pt, it, ru, ar, nl,
};

export type UIKey = keyof typeof en;

/** Simple templating: replace {name} tokens with values from the vars map. */
function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) =>
    Object.prototype.hasOwnProperty.call(vars, k) ? String(vars[k]) : `{${k}}`
  );
}

/** Translate a UI key. Returns the active locale string, falling back to English. */
export function t(key: UIKey, locale: Locale = DEFAULT_LOCALE, vars?: Record<string, string | number>): string {
  const dict = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
  const raw = (dict as any)[key] ?? (dictionaries[DEFAULT_LOCALE] as any)[key] ?? key;
  return interpolate(raw, vars);
}

/** Build a function pre-bound to a locale (used inside pages). */
export function makeT(locale: Locale) {
  return (key: UIKey, vars?: Record<string, string | number>) => t(key, locale, vars);
}
