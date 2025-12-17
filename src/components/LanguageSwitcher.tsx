"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Locale, locales } from "@/i18n/locales";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

const buildHref = (pathname: string, targetLocale: Locale) => {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length && locales.includes(segments[0] as Locale)) {
    segments.shift();
  }

  const restOfPath = segments.join("/");
  return restOfPath ? `/${targetLocale}/${restOfPath}` : `/${targetLocale}`;
};

export function LanguageSwitcher({ currentLocale, label }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-sm text-zinc-500">
      <span className="uppercase tracking-wide text-[11px]">{label}</span>
      <div className="flex items-center gap-1">
        {locales.map((locale) => {
          const isActive = locale === currentLocale;
          return (
            <Link
              key={locale}
              href={buildHref(pathname, locale)}
              className={`px-2 py-1 rounded ${
                isActive
                  ? "bg-zinc-200 text-zinc-900"
                  : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              {locale.toUpperCase()}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
