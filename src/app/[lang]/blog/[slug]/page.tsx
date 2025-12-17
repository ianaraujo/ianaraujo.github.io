import type { Metadata } from "next";

import { Clock } from "@/components/Clock";
import { Header } from "@/components/Header";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/locales";
import { getAllPostParams, getPostContent } from "@/utils/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostParams();
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale; slug: string };
}): Promise<Metadata> {
  const { lang, slug } = params;
  const post = await getPostContent(lang, slug);
  const dictionary = getDictionary(lang);

  return {
    title: `${post.title} | ${dictionary.metadata.title}`,
    description: post.description,
    openGraph: {
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: "",
        },
      ],
    },
    twitter: {
      images: [
        {
          url: post.image,
          width: 800,
          height: 418,
          alt: "",
        },
      ],
    },
    metadataBase: new URL("https://ianaraujo.com"),
  };
}

const PostPage = async ({ params }: { params: { lang: Locale; slug: string } }) => {
  const { lang, slug } = params;
  const dictionary = getDictionary(lang);
  const post = await getPostContent(lang, slug);

  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="mt-10 w-full max-w-screen-md px-8 md:px-0">
        <Header lang={lang} dictionary={dictionary} />
        <div className="flex flex-col space-y-5 mb-10">
          <p className="w-fit px-2 py-[2px] bg-zinc-200 text-zinc-800 text-sm rounded">{post.tag}</p>
          <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>
          <div className="flex items-center space-x-4 text-zinc-600">
            <p>{post.date}</p>
            <span className="h-1 w-1 rounded-full bg-zinc-400"></span>
            <div className="flex items-center gap-1">
              <Clock />
              <p>
                {post.readingTime} {dictionary.blog.readingTimeLabel}
              </p>
            </div>
          </div>
        </div>
        <div
          className="prose prose-zinc prose-h3:mb-[30px] prose-h3:mt-[40px] marker:text-zinc-400 prose-img:my-10 prose-table:my-10 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-24 mb-10 flex justify-center">
          <span className="">&copy; 2025 Ian Araujo</span>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
