import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllProjects, getAllEssays, parseDateString } from "@/lib/posts";
import { Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const Home = async ({ params }: { params: { lang: Lang } }) => {
  const { lang } = params;
  const dict = getDictionary(lang);
  const projects = getAllProjects(lang);
  const essays = getAllEssays(lang);

  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="mt-6 w-full max-w-screen-md px-8 md:px-0">
        <Header lang={lang} />
        <div className="space-y-12">
          {/* Introducing myself */}
          <div>
            <p className="text-lg leading-relaxed text-zinc-700">
              {dict.home.bio}
            </p>
          </div>
          {/* Experience */}
          <section>
            <h2 className="text-base font-semibold uppercase tracking-wider text-zinc-400 mb-6">{dict.home.experience}</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200"></div>
              <div className="space-y-8">
                {dict.jobs.map((job, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex items-center justify-center w-8 h-8">
                      <div className={`w-2 h-2 rounded-full z-10 ${i === 0 ? "bg-zinc-600" : "bg-zinc-200"}`}></div>
                    </div>
                    <div className="ml-2 space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-semibold">{job.title}</h3>
                        {i === 0 && (
                          <p className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 font-semibold">
                            {dict.home.current}
                          </p>
                        )}
                      </div>
                      <p className="text-sm text-zinc-500">{job.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <Link href={`/${lang}/projects`}>
                <h2 className="text-base font-semibold uppercase tracking-wider text-zinc-400 hover:text-zinc-600 transition-colors mb-6">{dict.home.latestProjects}</h2>
              </Link>
              <ul className="space-y-3">
                {projects.slice(0, 3).map((post) => (
                  <li
                    key={post.slug}
                    className="w-full border border-zinc-200 rounded-md px-5 py-4 space-y-1 hover:bg-zinc-50 transition-colors"
                  >
                    <Link href={`/${lang}/blog/${post.slug}`}>
                      <h3 className="font-medium hover:underline">{post.title}</h3>
                    </Link>
                    <p className="text-zinc-500 text-sm">{post.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {/* Essays */}
          {essays.length > 0 && (
            <section>
              <Link href={`/${lang}/blog`}>
                <h2 className="text-base font-semibold uppercase tracking-wider text-zinc-400 hover:text-zinc-600 transition-colors mb-6">{dict.home.latestEssays}</h2>
              </Link>
              <ul className="space-y-2">
                {essays.slice(0, 5).map((post) => (
                  <li key={post.slug} className="flex items-baseline justify-between gap-4">
                    <Link href={`/${lang}/blog/${post.slug}`} className="group text-zinc-800">
                      <span className="underline underline-offset-2 decoration-zinc-300 group-hover:decoration-zinc-700 transition-colors font-medium">
                        {post.title}
                      </span>
                    </Link>
                    <span className="text-sm text-zinc-400 shrink-0">
                      {parseDateString(post.date).toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", { month: "short", year: "numeric" })}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <section>
            <h2 className="text-base font-semibold uppercase tracking-wider text-zinc-400 mb-6">{dict.home.contact}</h2>
            <p className="text-zinc-700">
              {dict.home.contactText}
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
