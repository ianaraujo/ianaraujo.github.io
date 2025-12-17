import Link from "next/link";

import { Header } from "@/components/Header";
import { PostMeta } from "@/types";
import {
  DEFAULT_LANGUAGE,
  getAvailableLanguages,
  getPosts,
  parseDateString,
} from "@/utils/posts";

const Blog = async ({ params }: { params: { lang: string } }) => {
  const requestedLang = params.lang ?? DEFAULT_LANGUAGE;
  const posts = await getPosts(requestedLang);
  const resolvedLang = posts[0]?.lang ?? requestedLang ?? DEFAULT_LANGUAGE;

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
      <div className="mt-10 w-full max-w-screen-md px-8 md:px-0">
        <Header lang={resolvedLang} />
        <section>
          {years.map((year) => (
            <div key={year} className="mb-12">
              {year !== currentYear && (
                <h3 className="text-2xl font-semibold mb-8">{year}</h3>
              )}
              <ul className="space-y-6">
                {postsByYear[year].map((post) => (
                  <li
                    key={post.slug}
                    className="w-full bg-zinc-50 border rounded px-5 py-3"
                  >
                    <div className="space-y-2">
                      <Link href={`/${post.lang}/blog/${post.slug}`}>
                        <h3 className="hover:underline text-lg">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-zinc-600 text-sm">
                        {post.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 mt-4 mb-1">
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-zinc-200 rounded">
                          {post.tag}
                        </span>
                      </div>
                      {/* <span>{post.date}</span> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <div className="mt-24 mb-10 flex justify-center">
          <span className="">&copy; 2025 Ian Araujo</span>
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  const languages = getAvailableLanguages();
  return languages.map((lang) => ({ lang }));
}

export default Blog;
