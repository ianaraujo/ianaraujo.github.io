import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PostMeta } from "@/types";
import { getAllEssays, parseDateString } from "@/lib/posts";
import { Lang } from "@/i18n/config";


const Blog = async ({ params }: { params: { lang: Lang } }) => {
  const { lang } = params;
  const essays = getAllEssays(lang);

  const essaysByYear = essays.reduce((acc, post) => {
    const year = parseDateString(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as { [year: number]: PostMeta[] });

  const currentYear = new Date().getFullYear();
  const years = Object.keys(essaysByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="mt-6 w-full max-w-screen-md px-8 md:px-0">
        <Header lang={lang} currentPath="/blog" />
        <section>
          {years.length === 0 && (
            <p className="text-zinc-500">
              {lang === "en" ? "No essays available yet." : "Nenhum essay disponível."}
            </p>
          )}
          {years.map((year) => (
            <div key={year} className="mb-10">
              {year !== currentYear && (
                <h3 className="text-base font-semibold uppercase tracking-wider text-zinc-400 mb-4">{year}</h3>
              )}
              <ul className="space-y-3">
                {essaysByYear[year].map((post) => (
                  <li key={post.slug} className="flex items-baseline justify-between gap-4">
                    <Link href={`/${lang}/blog/${post.slug}`} className="group text-zinc-800">
                      <span className="underline underline-offset-2 decoration-zinc-300 group-hover:decoration-zinc-700 transition-colors">
                        {post.title}
                      </span>
                    </Link>
                    <span className="text-sm text-zinc-400 shrink-0">
                      {parseDateString(post.date).toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", { day: "2-digit", month: "short", year: "numeric" })}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
