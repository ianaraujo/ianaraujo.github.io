import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PostMeta } from "@/types";
import { getAllPosts, parseDateString } from "@/lib/posts";
import { Lang } from "@/i18n/config";


const Blog = async ({ params }: { params: { lang: Lang } }) => {
  const { lang } = params;
  const posts = getAllPosts(lang);

  const postsByYear = posts.reduce((acc, post) => {
    const year = parseDateString(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as { [year: number]: PostMeta[] });

  const currentYear = new Date().getFullYear();
  const years = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="mt-6 w-full max-w-screen-md px-8 md:px-0">
        <Header lang={lang} currentPath="/blog" />
        <section>
          {years.length === 0 && (
            <p className="text-zinc-500">
              {lang === "en" ? "No posts available yet." : "Nenhuma publicação disponível."}
            </p>
          )}
          {years.map((year) => (
            <div key={year} className="mb-12">
              {year !== currentYear && (
                <h3 className="text-base font-semibold uppercase tracking-wider text-zinc-400 mb-6">{year}</h3>
              )}
              <ul className="space-y-3">
                {postsByYear[year].map((post) => (
                  <li
                    key={post.slug}
                    className="w-full border border-zinc-200 rounded-md px-5 py-4 hover:bg-zinc-50 transition-colors"
                  >
                    <div className="space-y-1">
                      <Link href={`/${lang}/blog/${post.slug}`}>
                        <h3 className="font-medium hover:underline">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-zinc-500 text-sm">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-3">
                      <span className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded">
                        {post.tag}
                      </span>
                    </div>
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
