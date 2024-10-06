// src/app/blog/[slug]/page.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

import { Clock } from "@/components/Clock";
import { Header } from "@/components/Header";
import { Post } from "@/types";

// Function to fetch a single post by slug
const getPost = async (slug: string): Promise<Post> => {
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).use(gfm).process(content);
  const contentHtml = processedContent.toString();

  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 250);

  const post: Post = {
    title: data.title,
    date: data.date,
    description: data.description,
    tag: data.tag,
    slug,
    content: contentHtml,
    readingTime: readingTime,
  };

  return post;
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const slugs = filenames.map((filename) => filename.replace(".md", ""));

  return slugs.map((slug) => ({
    slug,
  }));
}

// Dynamic Post component as an async Server Component
const PostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="mt-10 w-full max-w-screen-md">
        <Header />
        <div className="flex flex-col space-y-5 mb-10">
          <p className="w-fit px-2 py-[2px] bg-zinc-200 text-zinc-800 text-sm rounded">
            {post.tag}
          </p>
          <h1 className="text-4xl font-bold text-justify leading-tight">{post.title}</h1>
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
          className="prose prose-zinc max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default PostPage;
