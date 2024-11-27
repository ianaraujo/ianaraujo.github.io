// src/app/blog/[slug]/page.tsx

import type { Metadata } from 'next'

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import 'katex/dist/katex.min.css';

import { Clock } from "@/components/Clock";
import { Header } from "@/components/Header";
import { Post } from "@/types";

const getPost = async (slug: string): Promise<Post> => {
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();

  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 250);

  const post: Post = {
    title: data.title,
    date: data.date,
    description: data.description,
    image: data.image,
    tag: data.tag,
    slug,
    content: contentHtml,
    readingTime: readingTime,
  };

  return post;
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: '',
        }
      ]
    },
    twitter: {
      images: [
        {
          url: post.image,
          width: 800,
          height: 418,
          alt: '',
        }
      ]
    },
    metadataBase: new URL('https://ianaraujo.com')
  };
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="mt-10 w-full max-w-screen-md px-8 md:px-0">
        <Header />
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
          className="prose prose-zinc prose-h3:mb-[30px] prose-h3:mt-[40px] prose-img:my-10 prose-table:my-10 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-24 mb-10 flex justify-center">
          <span className="">&copy; 2024 Ian Araujo</span>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
