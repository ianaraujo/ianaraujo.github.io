import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { PostMeta } from "@/types";

export const DEFAULT_LANGUAGE = "pt";

const POSTS_ROOT = path.join(process.cwd(), "src", "posts");

export const parseDateString = (dateString: string | undefined): Date => {
  if (!dateString || typeof dateString !== "string" || !dateString.includes("/")) {
    // Return a very old date to push invalid/missing dates to the end
    return new Date(0);
  }
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day);
};

const resolveLanguageDirectory = (lang?: string) => {
  const requestedLang = lang ?? DEFAULT_LANGUAGE;
  const requestedDirectory = path.join(POSTS_ROOT, requestedLang);

  if (fs.existsSync(requestedDirectory)) {
    return { directory: requestedDirectory, lang: requestedLang };
  }

  const fallbackDirectory = path.join(POSTS_ROOT, DEFAULT_LANGUAGE);
  return { directory: fallbackDirectory, lang: DEFAULT_LANGUAGE };
};

const resolvePostFilePath = (slug: string, lang?: string) => {
  const requestedDirectory = path.join(POSTS_ROOT, lang ?? DEFAULT_LANGUAGE);
  const requestedFile = path.join(requestedDirectory, `${slug}.md`);

  if (fs.existsSync(requestedFile)) {
    return { filePath: requestedFile, lang: lang ?? DEFAULT_LANGUAGE };
  }

  const fallbackFile = path.join(POSTS_ROOT, DEFAULT_LANGUAGE, `${slug}.md`);
  if (fs.existsSync(fallbackFile)) {
    return { filePath: fallbackFile, lang: DEFAULT_LANGUAGE };
  }

  throw new Error(`Post not found: ${slug}`);
};

export const getAvailableLanguages = (): string[] => {
  if (!fs.existsSync(POSTS_ROOT)) {
    return [DEFAULT_LANGUAGE];
  }

  const languages = fs
    .readdirSync(POSTS_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  if (!languages.includes(DEFAULT_LANGUAGE)) {
    languages.push(DEFAULT_LANGUAGE);
  }

  return Array.from(new Set(languages));
};

export const getPosts = async (lang?: string): Promise<PostMeta[]> => {
  const { directory, lang: resolvedLang } = resolveLanguageDirectory(lang);
  const filenames = fs.readdirSync(directory).filter((filename) => filename.endsWith(".md"));

  const posts = filenames
    .map((filename) => {
      const filePath = path.join(directory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const { data } = matter(fileContents);
      const slug = filename.replace(".md", "");

      return {
        ...data,
        slug,
        lang: (data as PostMeta).lang ?? resolvedLang,
        translations: (data as PostMeta).translations,
      } as PostMeta;
    })
    // Filter out posts with missing or invalid date
    .filter((post) => post.date && typeof post.date === "string" && post.date.includes("/"));

  posts.sort((a, b) => {
    const dateA = parseDateString(a.date).getTime();
    const dateB = parseDateString(b.date).getTime();
    return dateB - dateA;
  });

  return posts;
};

export const getPostData = (slug: string, lang?: string): { meta: PostMeta; content: string } => {
  const { filePath, lang: resolvedLang } = resolvePostFilePath(slug, lang);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const meta: PostMeta = {
    ...data,
    slug,
    lang: (data as PostMeta).lang ?? resolvedLang,
    translations: (data as PostMeta).translations,
  } as PostMeta;

  return { meta, content };
};
