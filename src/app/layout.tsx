import "../styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale, isLocale, Locale } from "@/i18n/locales";

export async function generateMetadata({ params }: { params: { lang?: string } }): Promise<Metadata> {
  const lang = normalizeLang(params?.lang);
  const dictionary = getDictionary(lang);

  return {
    title: {
      template: `${dictionary.metadata.title} | %s`,
      default: dictionary.metadata.title,
    },
    description: dictionary.metadata.description,
    metadataBase: new URL("https://ianaraujo.com"),
  };
}

const normalizeLang = (lang: string | undefined): Locale => {
  return isLocale(lang) ? lang : defaultLocale;
};

export default function RootLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: { lang?: string } }>) {
  const lang = normalizeLang(params?.lang);

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
