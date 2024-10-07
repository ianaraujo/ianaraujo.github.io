import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <>
      <div className="flex flex-col space-y-5">
        <Image
          src="/avatar.png"
          alt="Avatar"
          width={64}
          height={64}
          className="rounded-full"
        />
        <div className="space-y-1">
          <Link href={"/"}>
            <h2 className="text-2xl font-semibold">Ian Vaz Araujo</h2>
          </Link>
          <p className="text-zinc-500">Cientista de Dados e Desenvolvedor</p>
        </div>
        {/* Social Media */}
        <div className="flex justify-between">
          <ul className="flex space-x-4">
            <li>
              <a className="group transition duration-300" href="">
                Twitter
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-zinc-600"></span>
              </a>
            </li>
            <li>
              <a
                className="group transition duration-300"
                href="https://github.com/ianaraujo"
              >
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
          </ul>
          {/* <ul className="flex space-x-2">
              <li className="text-zinc-900">PT</li>
              <li className="text-zinc-300">EN</li>
            </ul> */}
        </div>
      </div>
      {/* Divider */}
      <div className="py-8">
        <div className="w-full bg-zinc-200 h-[1px]"></div>
      </div>
    </>
  );
}
