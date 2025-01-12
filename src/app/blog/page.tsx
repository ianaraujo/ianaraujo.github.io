import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

import { Header } from "@/components/Header";
import { PostMeta } from "@/types";

const parseDateString = (dateString: string): Date => {
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day);
};

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

  posts.sort((a, b) => {
    const dateA = parseDateString(a.date).getTime();
    const dateB = parseDateString(b.date).getTime();
    return dateB - dateA;
  });

  return posts;
};

const Blog = async () => {
  const posts = await getPosts();

  const postsByYear = posts.reduce((acc, post) => {
    const year = parseDateString(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as { [year: number]: PostMeta[] });

  const currentYear = new Date().getFullYear();
  const years = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="mt-10 w-full max-w-screen-md px-8 md:px-0">
        <Header />
        <section>
          {years.map((year) => (
            <div key={year} className="mb-12">
              {year !== currentYear && (
                <h3 className="text-2xl font-semibold mb-8">{year}</h3>
              )}
              <ul className="space-y-6">
                {postsByYear[year].map((post) => (
                  <li
                    key={post.slug}
                    className="w-full bg-zinc-50 border rounded px-5 py-3"
                  >
                    <div className="space-y-2">
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="hover:underline text-lg">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-zinc-600 text-sm">
                        {post.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-500 mt-4 mb-1">
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-zinc-200 rounded">
                          {post.tag}
                        </span>
                      </div>
                      {/* <span>{post.date}</span> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <div className="mt-24 mb-10 flex justify-center">
          <span className="">&copy; 2024 Ian Araujo</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
