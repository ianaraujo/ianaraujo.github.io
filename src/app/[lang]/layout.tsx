import type { Metadata } from "next";
import { locales, Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const dict = getDictionary(params.lang);

  return {
    title: {
      template: "Ian Vaz Araujo | %s",
      default: "Ian Vaz Araujo",
    },
    description: dict.meta.description,
    metadataBase: new URL("https://ianaraujo.com"),
  };
}

export default function LangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
