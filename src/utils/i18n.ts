export const SUPPORTED_LANGS = ["pt", "en"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];
export const DEFAULT_LANG: Lang = "pt";

export const isSupportedLang = (value?: string): value is Lang =>
  !!value && SUPPORTED_LANGS.includes(value as Lang);

export const normalizeLang = (value?: string): Lang =>
  (value && isSupportedLang(value) ? (value as Lang) : DEFAULT_LANG);
