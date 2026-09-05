import Link from "next/link";
import { Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getPostSlugs } from "@/lib/posts";

const navLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ianvazaraujo/" },
  { label: "GitHub", href: "https://github.com/ianaraujo" },
  { label: "X", href: "https://x.com/ianvazaraujo" },
  {
    label: "CV",
    href: "https://drive.google.com/file/d/1i8qe0hZs5jaBA6oAchXfSnF0NT1GHm34/view?usp=sharing",
  },
];

type HeaderProps = {
  lang: Lang;
  currentPath?: string;
};

export function Header({ lang, currentPath = "" }: HeaderProps) {
  const dict = getDictionary(lang);
  const languagePath = (locale: Lang) => {
    if (currentPath.startsWith("/blog/")) {
      const slug = currentPath.slice("/blog/".length);
      if (!getPostSlugs(locale).includes(slug)) return `/${locale}/projects`;
    }
    return `/${locale}${currentPath}`;
  };
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between py-6">
        <div>
          <Link href={`/${lang}`}>
            <span className="text-xl font-semibold tracking-tight">Ian Vaz Araujo</span>
          </Link>
        </div>
        <nav aria-label={dict.nav.label} className="flex flex-wrap items-center gap-4">
          <ul className="flex flex-wrap gap-4 text-sm text-zinc-700">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a className="group transition duration-300" href={href}>
                  {label}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1.5px] bg-zinc-700"></span>
                </a>
              </li>
            ))}
          </ul>
          <span className="text-zinc-200">|</span>
          <div aria-label={dict.nav.language} className="flex gap-3 text-sm">
            <Link
              href={languagePath("pt")}
              hrefLang="pt-BR"
              lang="pt-BR"
              aria-label="Português"
              aria-current={lang === "pt" ? "page" : undefined}
              className={lang === "pt" ? "font-semibold text-zinc-900" : "text-zinc-400 hover:text-zinc-600 transition-colors"}
            >
              PT
            </Link>
            <Link
              href={languagePath("en")}
              hrefLang="en"
              lang="en"
              aria-label="English"
              aria-current={lang === "en" ? "page" : undefined}
              className={lang === "en" ? "font-semibold text-zinc-900" : "text-zinc-400 hover:text-zinc-600 transition-colors"}
            >
              EN
            </Link>
          </div>
        </nav>
      </div>
      <div className="w-full bg-zinc-200 h-px mb-10"></div>
    </>
  );
}
