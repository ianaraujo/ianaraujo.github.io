import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Image from "next/image";
import Link from "next/link";

import { PostMeta } from "@/types";

const getPosts = async (): Promise<PostMeta[]> => {
  const postsDirectory = path.join(process.cwd(), "src", "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const { data } = matter(fileContents);
    const slug = filename.replace(".md", "");

    return { ...data, slug } as PostMeta;
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
};

const Home = async () => {
  const posts = await getPosts();

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
            <h2 className="text-2xl font-semibold">Ian Vaz Araujo</h2>
            <p className="text-zinc-500">Data Scientist and Developer</p>
          </div>
          {/* Social Media */}
          <div className="flex justify-between">
					<ul className="flex space-x-4">
            <li>X</li>
            <li>Github</li>
            <li>LinkedIn</li>
          </ul>
					<ul className="flex space-x-2">
            <li>EN</li>
            <li>PT</li>
          </ul>
					</div>
          {/* Divider */}
          <div className="py-4">
            <div className="w-full bg-gray-200 h-[1px]"></div>
          </div>
          {/* Introducing myself */}
          <div>
            <p>
              Hello! I'm Ian, a Data Scientist & Developer based in Brazil.
              Enjoy building useful apps and projects with code, also share
              ideas among some of my interests: finance, entrepreneurship,
              andtechnology!
            </p>
          </div>
          <div className="mt-5">
            <h3 className="text-xl font-semibold mb-7">Latest Posts</h3>
            <ul className="space-y-5">
              {posts.map((post) => (
                <li key={post.slug} className="w-full bg-zinc-50 border rounded px-5 py-3 space-y-1">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="hover:underline text-lg">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-zinc-600 text-sm">{post.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
