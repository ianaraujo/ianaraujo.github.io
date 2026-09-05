import type { Metadata } from "next";
import { Lang, locales } from "@/i18n/config";

export const siteUrl = "https://ianaraujo.com";

export function pageMetadata(lang: Lang, path: string, title: string, description: string, available: readonly Lang[] = locales): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${lang}${path}`,
      languages: Object.fromEntries(available.map(locale => [locale === "pt" ? "pt-BR" : "en", `${siteUrl}/${locale}${path}`])),
    },
    openGraph: {
      title: `${title} | Ian Vaz Araujo`,
      description,
      url: `${siteUrl}/${lang}${path}`,
      siteName: "Ian Vaz Araujo",
      type: "website",
      locale: lang === "pt" ? "pt_BR" : "en_US",
      alternateLocale: available.filter(locale => locale !== lang).map(locale => locale === "pt" ? "pt_BR" : "en_US"),
    },
    twitter: { card: "summary", title: `${title} | Ian Vaz Araujo`, description },
  };
}
