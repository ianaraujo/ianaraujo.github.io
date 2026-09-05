import Link from "next/link";
import { Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getFeaturedProjects } from "@/lib/featured-projects";

export function FeaturedProjects({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  return (
    <ul className="space-y-3">
      {getFeaturedProjects(lang).map(project => (
        <li key={project.slug} className="border border-zinc-200 rounded-md p-5 space-y-2 hover:bg-zinc-50 transition-colors">
          <h3 className="font-semibold">
            <Link href={`/pt/blog/${project.slug}`} hrefLang="pt-BR" className="underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-800">{project.title}</Link>
          </h3>
          <p className="text-base leading-relaxed text-zinc-600">{project.description}</p>
          <p className="text-sm text-zinc-500">{project.tools}</p>
          {lang === "en" && <p className="text-sm text-zinc-500">{dict.home.portugueseStudy}</p>}
        </li>
      ))}
    </ul>
  );
}
