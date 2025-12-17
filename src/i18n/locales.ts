export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export const isLocale = (value: string | undefined): value is Locale => {
  return !!value && locales.includes(value as Locale);
};
