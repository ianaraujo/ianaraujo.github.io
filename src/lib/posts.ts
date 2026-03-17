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

import { Post, PostMeta } from "@/types";

const POSTS_DIRECTORY = path.join(process.cwd(), "src", "posts");

export function parseDateString(dateString: string | undefined): Date {
  if (!dateString || typeof dateString !== "string" || !dateString.includes("/")) {
    return new Date(0);
  }
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day);
}

export function getPostSlugs(): string[] {
  const filenames = fs.readdirSync(POSTS_DIRECTORY);
  return filenames.map((filename) => filename.replace(".md", ""));
}

export function getAllPosts(): PostMeta[] {
  const filenames = fs.readdirSync(POSTS_DIRECTORY);

  const posts = filenames
    .map((filename) => {
      const filePath = path.join(POSTS_DIRECTORY, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      const slug = filename.replace(".md", "");

      return { ...data, slug } as PostMeta;
    })
    .filter((post) => post.date && typeof post.date === "string" && post.date.includes("/"));

  posts.sort((a, b) => {
    const dateA = parseDateString(a.date).getTime();
    const dateB = parseDateString(b.date).getTime();
    return dateB - dateA;
  });

  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const filePath = path.join(POSTS_DIRECTORY, `${slug}.md`);
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

  return {
    title: data.title,
    date: data.date,
    description: data.description,
    image: data.image,
    tag: data.tag,
    slug,
    content: contentHtml,
    readingTime,
  };
}
