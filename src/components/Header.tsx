import Image from "next/image";
import Link from "next/link";

import { type Dictionary } from "@/i18n/dictionaries";

type HeaderProps = {
  dictionary: Dictionary["header"];
};

export function Header({ dictionary }: HeaderProps) {
  return (
    <>
      <div className="flex flex-col space-y-5">
        <Link href={"/"}>
          <Image
            src="/avatar.png"
            alt={dictionary.avatarAlt}
            width={64}
            height={64}
            className="rounded-full"
          />
        </Link>
        <div className="space-y-1">
          <Link href={"/"}>
            <h2 className="text-2xl font-semibold">{dictionary.name}</h2>
          </Link>
          <p className="text-zinc-500">{dictionary.role}</p>
        </div>
        {/* Social Media */}
        <div className="flex justify-between">
          <ul className="flex space-x-4">
            <li>
              <a
                className="group transition duration-300"
                href="https://x.com/ianvazaraujo"
              >
                {dictionary.socials.twitter}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-zinc-600"></span>
              </a>
            </li>
            <li>
              <a
                className="group transition duration-300"
                href="https://github.com/ianaraujo"
              >
                {dictionary.socials.github}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-zinc-600"></span>
              </a>
            </li>
            <li>
              <a
                className="group transition duration-300"
                href="https://www.linkedin.com/in/ianvazaraujo/"
              >
                {dictionary.socials.linkedin}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-zinc-600"></span>
              </a>
            </li>
            <li>
              <a
                className="group transition duration-300"
                href="https://drive.google.com/file/d/1i8qe0hZs5jaBA6oAchXfSnF0NT1GHm34/view?usp=sharing"
              >
                {dictionary.socials.cv}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-zinc-600"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Divider */}
      <div className="py-8">
        <div className="w-full bg-zinc-200 h-[1px]"></div>
      </div>
    </>
  );
}
