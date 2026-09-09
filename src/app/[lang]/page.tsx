import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { FeaturedProjects } from "@/components/FeaturedProjects";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllEssays, parseDateString } from "@/lib/posts";
import { Lang } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function generateMetadata({ params }: { params: { lang: Lang } }) {
  const dict = getDictionary(params.lang);
  return pageMetadata(params.lang, "", dict.meta.title, dict.meta.description);
}

const Home = async ({ params }: { params: { lang: Lang } }) => {
  const { lang } = params;
  const dict = getDictionary(lang);
  const essays = getAllEssays(lang);

  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="mt-6 w-full max-w-screen-md px-6 md:px-8">
        <Header lang={lang} />
        <main className="space-y-12">
          {/* Introducing myself */}
          <section>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight mb-5">{dict.home.headline}</h1>
            <p className="text-lg leading-relaxed text-zinc-700">
              {dict.home.bio}
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">{dict.home.intro}</p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-base">
              <Link href={`/${lang}/projects`} className="font-medium underline underline-offset-4">{dict.home.viewProjects}</Link>
              <a href="#contact" className="underline underline-offset-4 text-zinc-600">{dict.home.talk}</a>
            </div>
          </section>
          <section aria-labelledby="focus">
            <h2 id="focus" className="text-base font-semibold uppercase tracking-wider text-zinc-500 mb-6">{dict.home.focus}</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {dict.home.areas.map(area => <div key={area.title} className="border-t border-zinc-200 pt-4">
                <h3 className="font-semibold mb-2">{area.title}</h3>
                <p className="text-base leading-relaxed text-zinc-600">{area.text}</p>
              </div>)}
            </div>
          </section>
          <section aria-labelledby="projects">
            <h2 id="projects" className="text-base font-semibold uppercase tracking-wider text-zinc-500 mb-6">{dict.home.featuredProjects}</h2>
            <FeaturedProjects lang={lang} />
          </section>
          {/* Experience */}
          <section>
            <h2 className="text-base font-semibold uppercase tracking-wider text-zinc-500 mb-6">{dict.home.experience}</h2>
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
                          <p className="text-xs px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 font-semibold">
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
          <section id="contact">
            <h2 className="text-base font-semibold uppercase tracking-wider text-zinc-500 mb-6">{dict.home.contact}</h2>
            <p className="text-zinc-700">
              {dict.home.contactText}
            </p>
            <a href="https://www.linkedin.com/in/ianvazaraujo/" className="inline-block mt-4 font-medium underline underline-offset-4">{dict.home.contactAction}</a>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
