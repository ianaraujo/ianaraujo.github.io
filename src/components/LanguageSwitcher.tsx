"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { SUPPORTED_LANGS, normalizeLang } from "@/utils/i18n";

const buildPath = (lang: string, pathWithoutLang: string) => {
  const normalizedSuffix = pathWithoutLang === "/" ? "" : pathWithoutLang;
  return `/${lang}${normalizedSuffix}`;
};

export function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();

  const currentLang = useMemo(() => {
    const langParam = Array.isArray(params?.lang)
      ? params?.lang[0]
      : (params?.lang as string | undefined);

    return normalizeLang(langParam);
  }, [params?.lang]);

  const pathWithoutLang = useMemo(() => {
    if (!pathname) return "/";

    const strippedPath = pathname.replace(/^\/(en|pt)(?=\/|$)/, "");
    return strippedPath.startsWith("/") ? strippedPath : `/${strippedPath}`;
  }, [pathname]);

  useEffect(() => {
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `preferred-lang=${currentLang}; path=/; max-age=${oneYear}`;
  }, [currentLang]);

  return (
    <div className="flex items-center gap-2 text-sm font-medium text-zinc-700">
      {SUPPORTED_LANGS.map((lang) => {
        const isActive = lang === currentLang;
        return (
          <Link
            key={lang}
            href={buildPath(lang, pathWithoutLang)}
            className={`transition hover:text-zinc-900 ${
              isActive ? "text-zinc-900" : "text-zinc-400"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {lang.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
