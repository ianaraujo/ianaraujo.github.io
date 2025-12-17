import "../../styles/globals.css";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

const SUPPORTED_LANGUAGES = ["pt", "en"] as const;

const metadataByLang: Record<(typeof SUPPORTED_LANGUAGES)[number], Metadata> = {
  pt: {
    title: {
      template: "Ian Araujo | %s",
      default: "Ian Araujo",
    },
    description: "Cientista de Dados e IA",
    openGraph: {
      title: "Ian Araujo",
      description: "Cientista de Dados e IA",
      url: "https://ianaraujo.com",
      siteName: "Ian Araujo",
    },
    metadataBase: new URL("https://ianaraujo.com"),
  },
  en: {
    title: {
      template: "Ian Araujo | %s",
      default: "Ian Araujo",
    },
    description: "Data Scientist and AI",
    openGraph: {
      title: "Ian Araujo",
      description: "Data Scientist and AI",
      url: "https://ianaraujo.com",
      siteName: "Ian Araujo",
    },
    metadataBase: new URL("https://ianaraujo.com"),
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang as (typeof SUPPORTED_LANGUAGES)[number];

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    redirect("/pt");
  }

  return metadataByLang[lang];
}

export default function LangLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { lang: string } }>) {
  const lang = params.lang as (typeof SUPPORTED_LANGUAGES)[number];

  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    redirect("/pt");
  }

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
