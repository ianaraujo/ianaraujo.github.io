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
            <p className="text-zinc-500">Cientista de Dados e Desenvolvedor</p>
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
        {/* Nav
        <div className="text-sm font-medium mb-8">
          <ul className="flex items-center gap-6">
            <li className="px-2 py-1 bg-zinc-800 text-white rounded-md">
              About
            </li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div> */}
        <div className="space-y-12">
          {/* Introducing myself */}
          <div className="">
            <p className="text-xl text-justify">
              {`Hello! I'm Ian, a Data Scientist & Developer based in Brazil.
              Enjoy building useful apps and projects with code, also share
              ideas among some of my interests: finance, entrepreneurship,
              and technology!`}
            </p>
          </div>
          {/* Experience */}
          <section className="">
            <h2 className="text-xl font-semibold mb-8">Experience</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200"></div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8">
                    <div className="w-2 h-2 rounded-full bg-zinc-600 z-10"></div>
                  </div>
                  <div className="ml-2 space-y-1">
                    <h3 className="text-base font-semibold">Analista de Dados</h3>
                    <p className="text-sm text-zinc-600">Ágora Advocacy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8">
                    <div className="w-2 h-2 rounded-full bg-zinc-200 z-10"></div>
                  </div>
                  <div className="ml-2 space-y-1">
                    <h3 className="text-base font-semibold">Pesquisador</h3>
                    <p className="text-sm text-zinc-600">FGV EBAPE</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8">
                    <div className="w-2 h-2 rounded-full bg-zinc-200 z-10"></div>
                  </div>
                  <div className="ml-2 space-y-1">
                    <h3 className="text-base font-semibold">
                      Consultor
                    </h3>
                    <p className="text-sm text-zinc-600">
                      Instituo Lima Barreto, Ministéria da Edução, TRE-BA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Latest Posts */}
          <section>
            <h2 className="text-xl font-semibold mb-8">Latest Posts</h2>
            <ul className="space-y-5">
              {posts.slice(0, 3).map((post) => (
                <li
                  key={post.slug}
                  className="w-full bg-zinc-50 border rounded px-5 py-3 space-y-1"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="hover:underline text-lg">{post.title}</h3>
                  </Link>
                  <p className="text-zinc-600 text-sm">{post.description}</p>
                </li>
              ))}
            </ul>
            {posts.length > 3 && (
              <div className="mt-6">
                <Link href="/blog">
                  <span className="text-zinc-600 hover:underline">View all posts</span>
                </Link>
              </div>
            )}
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-8">Contact</h2>
            <p className="text-lg text-justify">
              {`Let's work on something together! You can send me an email or drop
              a DM on any social media.`}
            </p>
            <div className="flex items-center mt-6 gap-2">
              <span className="text-lg">🛩️</span>
              <p>ianaraujo15@gmail.com</p>
            </div>
          </section>
        </div>
        <div className="mt-24 mb-12 flex justify-center">
          <span className="">&copy; 2024 Ian Araujo</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
