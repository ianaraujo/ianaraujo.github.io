import type { Metadata } from "next";
import { locales, Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "@/styles/globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const dict = getDictionary(params.lang);

  return {
    title: {
      template: "%s | Ian Vaz Araujo",
      default: `${dict.meta.title} | Ian Vaz Araujo`,
    },
    description: dict.meta.description,
    metadataBase: new URL("https://ianaraujo.com"),
    authors: [{ name: "Ian Vaz Araujo", url: "https://ianaraujo.com" }],
  };
}

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: Lang } }) {
  return <html lang={params.lang === "pt" ? "pt-BR" : "en"}><body>{children}</body></html>;
}
