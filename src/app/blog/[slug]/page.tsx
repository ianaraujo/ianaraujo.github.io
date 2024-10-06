// src/app/blog/[slug]/page.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";
import { Post } from "@/types";
import Link from "next/link";

// Function to fetch a single post by slug
const getPost = async (slug: string): Promise<Post> => {
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  const post: Post = {
    title: data.title,
    date: data.date,
    description: data.description,
    tag: data.tag,
    slug,
    content: contentHtml,
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
      <div className="flex flex-col space-y-5">
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div className="space-y-1">
            <Link href={'/'} >
              <h2 className="text-2xl font-semibold">Ian Vaz Araujo</h2>
            </Link>
            <p className="text-zinc-500">Data Scientist and Developer</p>
          </div>
          {/* Social Media */}
          <div className="flex justify-between">
            <ul className="flex space-x-4">
              <li>
                <a className="group transition duration-300" href="">
                  Twitter
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-zinc-600"></span>
                </a>
              </li>
              <li>
                <a
                  className="group transition duration-300"
                  href="https://github.com/ianaraujo"
                >
                  Github
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-zinc-600"></span>
                </a>
              </li>
              <li>
                <a className="group transition duration-300" href="https://www.linkedin.com/in/ianvazaraujo/">LinkedIn
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[2px] bg-zinc-600"></span>
                </a>
              </li>
            </ul>
            {/* <ul className="flex space-x-2">
              <li className="text-zinc-900">PT</li>
              <li className="text-zinc-300">EN</li>
            </ul> */}
          </div>
        </div>
        {/* Divider */}
        <div className="py-8">
          <div className="w-full bg-zinc-200 h-[1px]"></div>
        </div>
        <div className="flex flex-col space-y-5 mb-10">
          <p className="w-fit px-2 py-[2px] bg-zinc-200 text-zinc-800 text-sm rounded">{post.tag}</p>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="text-gray-600">{post.description}</p>
      </div>
      <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
    </div>
  );
};

export default PostPage;
