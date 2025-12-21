import Link from "next/link";

import { Header } from "@/components/Header";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocaleStaticParams, Locale } from "@/i18n/locales";
import { getPostsMeta } from "@/utils/posts";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getLocaleStaticParams();
}

const Home = async ({ params }: { params: { lang: Locale } }) => {
  const { lang } = params;
  const dictionary = getDictionary(lang);
  const posts = await getPostsMeta(lang);

  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="mt-10 w-full max-w-screen-md px-8 md:px-0">
        <Header lang={lang} dictionary={dictionary} />
        <div className="space-y-10">
          <div className="">
            <p className="text-xl leading-relaxed text-justify">{dictionary.home.intro}</p>
          </div>
          <section>
            <h2 className="text-xl font-semibold mb-8">{dictionary.home.experienceTitle}</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200"></div>
              <div className="space-y-8">
                {dictionary.home.experienceItems.map((item) => (
                  <div className="flex items-start" key={`${item.title}-${item.subtitle}`}>
                    <div className="flex items-center justify-center w-8 h-8">
                      <div className="w-2 h-2 rounded-full bg-zinc-200 z-10"></div>
                    </div>
                    <div className="ml-2 space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-semibold">{item.title}</h3>
                        {item.badge && (
                          <p className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 font-semibold">
                            {item.badge}
                          </p>
                        )}
                      </div>
                      <p className="text-sm text-zinc-600">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-semibold pt-4 mb-8">{dictionary.home.latestPostsTitle}</h2>
            <ul className="space-y-4">
              {posts.slice(0, 3).map((post) => (
                <li key={post.slug} className="w-full bg-zinc-50 border rounded px-5 py-3 space-y-1">
                  <Link href={`/${lang}/blog/${post.slug}`}>
                    <h3 className="hover:underline text-lg">{post.title}</h3>
                  </Link>
                  <p className="text-zinc-600 text-sm">{post.description}</p>
                </li>
              ))}
            </ul>
            {posts.length > 3 && (
              <div className="mt-6">
                <Link href={`/${lang}/blog`}>
                  <span className="text-zinc-600 hover:underline">{dictionary.home.viewAll}</span>
                </Link>
              </div>
            )}
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-8">{dictionary.home.contactTitle}</h2>
            <p className="text-lg">{dictionary.home.contactDescription}</p>
            <div className="flex items-center mt-8 gap-3">
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
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div className="mt-20 mb-10 flex justify-center">
          <span className="">&copy; 2025 Ian Araujo</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
