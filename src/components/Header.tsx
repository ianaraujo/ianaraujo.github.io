import Link from "next/link";

const navLinks = [
  { label: "Twitter", href: "https://x.com/ianvazaraujo" },
  { label: "Github", href: "https://github.com/ianaraujo" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ianvazaraujo/" },
  {
    label: "CV",
    href: "https://drive.google.com/file/d/1i8qe0hZs5jaBA6oAchXfSnF0NT1GHm34/view?usp=sharing",
  },
];

export function Header() {
  return (
    <>
      <div className="flex items-center justify-between py-6">
        <div>
          <Link href={"/"}>
            <h1 className="text-xl font-semibold tracking-tight">Ian Vaz Araujo</h1>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-5 text-sm text-zinc-700">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a className="group transition duration-300" href={href}>
                  {label}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1.5px] bg-zinc-700"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="w-full bg-zinc-200 h-px mb-10"></div>
    </>
  );
}
