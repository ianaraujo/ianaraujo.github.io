// src/app/[lang]/blog/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";

import { Clock } from "@/components/Clock";
import { Header } from "@/components/Header";
import { Post } from "@/types";
import {
  DEFAULT_LANGUAGE,
  getAvailableLanguages,
  getPosts,
  getPostData,
} from "@/utils/posts";

const buildPost = async (slug: string, lang?: string): Promise<Post> => {
  try {
    const { meta, content } = getPostData(slug, lang);

    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkMath)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeKatex)
      .use(rehypeStringify)
      .process(content);

    const contentHtml = processedContent.toString();

    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.ceil(wordCount / 250);

    return {
      ...meta,
      content: contentHtml,
      readingTime,
    };
  } catch {
    notFound();
  }
};

export async function generateMetadata({ params }: { params: { lang: string; slug: string } }): Promise<Metadata> {
  const { slug, lang } = params;
  const post = await buildPost(slug, lang);
  const canonicalPath = `/${post.lang}/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      url: canonicalPath,
      title: post.title,
      description: post.description,
      locale: post.lang,
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
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image,
          width: 800,
          height: 418,
          alt: "",
        },
      ],
    },
  };
}

const PostPage = async ({ params }: { params: { lang: string; slug: string } }) => {
  const { slug, lang } = params;
  const post = await buildPost(slug, lang);
  const resolvedLang = post.lang ?? DEFAULT_LANGUAGE;

  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="mt-10 w-full max-w-screen-md px-8 md:px-0">
        <Header lang={resolvedLang} />
        <div className="flex flex-col space-y-5 mb-10">
          <p className="w-fit px-2 py-[2px] bg-zinc-200 text-zinc-800 text-sm rounded">
            {post.tag}
          </p>
          <h1 className="text-4xl font-bold leading-tight">{post.title}</h1>
          <div className="flex items-center space-x-4 text-zinc-600">
            <p>{post.date}</p>
            <span className="h-1 w-1 rounded-full bg-zinc-400"></span>
            <div className="flex items-center gap-1">
              <Clock />
              <p>{post.readingTime} minutos</p>
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

export async function generateStaticParams() {
  const languages = getAvailableLanguages();
  const params: { lang: string; slug: string }[] = [];

  for (const lang of languages) {
    const posts = await getPosts(lang);
    posts.forEach((postMeta) => {
      params.push({ lang, slug: postMeta.slug });
    });
  }

  return params;
}

export default PostPage;
