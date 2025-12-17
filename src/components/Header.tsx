import Image from "next/image";
import Link from "next/link";

import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Dictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/locales";

type HeaderProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function Header({ lang, dictionary }: HeaderProps) {
  return (
    <>
      <div className="flex flex-col space-y-5">
        <div className="flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={64}
              height={64}
              className="rounded-full"
            />
          </Link>
          <LanguageSwitcher
            currentLocale={lang}
            label={dictionary.languageSwitcher.label}
          />
        </div>
        <div className="space-y-1">
          <Link href={`/${lang}`}>
            <h2 className="text-2xl font-semibold">{dictionary.header.name}</h2>
          </Link>
          <p className="text-zinc-500">{dictionary.header.role}</p>
        </div>
        <div className="flex justify-between">
          <ul className="flex space-x-4">
            <li>
              <a className="group transition duration-300" href="https://x.com/ianvazaraujo">
                Twitter
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-zinc-600"></span>
              </a>
            </li>
            <li>
              <a className="group transition duration-300" href="https://github.com/ianaraujo">
                Github
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-zinc-600"></span>
              </a>
            </li>
            <li>
              <a
                className="group transition duration-300"
                href="https://www.linkedin.com/in/ianvazaraujo/"
              >
                LinkedIn
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-zinc-600"></span>
              </a>
            </li>
            <li>
              <a
                className="group transition duration-300"
                href="https://drive.google.com/file/d/1i8qe0hZs5jaBA6oAchXfSnF0NT1GHm34/view?usp=sharing"
              >
                CV
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-zinc-600"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-8">
        <div className="w-full bg-zinc-200 h-[1px]"></div>
      </div>
    </>
  );
}
