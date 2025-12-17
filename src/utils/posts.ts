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

import { defaultLocale, isLocale, locales, Locale } from "@/i18n/locales";
import { Post, PostMeta } from "@/types";

const postsDirectory = path.join(process.cwd(), "src", "posts");

const getLangDirectory = (lang: Locale) => path.join(postsDirectory, lang);

const getMarkdownFilenames = (lang: Locale): string[] => {
  const langDir = getLangDirectory(lang);
  if (!fs.existsSync(langDir)) return [];
  return fs.readdirSync(langDir).filter((file) => file.endsWith(".md"));
};

const resolvePostPath = (lang: Locale, slug: string) => {
  const primaryPath = path.join(getLangDirectory(lang), `${slug}.md`);
  if (fs.existsSync(primaryPath)) {
    return { filePath: primaryPath, lang } as const;
  }

  if (lang !== defaultLocale) {
    const fallbackPath = path.join(getLangDirectory(defaultLocale), `${slug}.md`);
    if (fs.existsSync(fallbackPath)) {
      return { filePath: fallbackPath, lang: defaultLocale } as const;
    }
  }

  throw new Error(`Post not found for slug: ${slug}`);
};

export const parseDateString = (dateString: string | undefined): Date => {
  if (!dateString || typeof dateString !== "string" || !dateString.includes("/")) {
    return new Date(0);
  }
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day);
};

export const getPostsMeta = async (lang: Locale): Promise<PostMeta[]> => {
  const filenames = getMarkdownFilenames(lang);
  const activeLang = filenames.length ? lang : defaultLocale;
  const effectiveFilenames = filenames.length
    ? filenames
    : getMarkdownFilenames(defaultLocale);

  const posts = effectiveFilenames
    .map((filename) => {
      const filePath = path.join(getLangDirectory(activeLang), filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      const slug = filename.replace(".md", "");
      return { ...data, slug, lang: activeLang } as PostMeta;
    })
    .filter((post) => post.date && typeof post.date === "string" && post.date.includes("/"));

  posts.sort((a, b) => parseDateString(b.date).getTime() - parseDateString(a.date).getTime());
  return posts;
};

export const getPostContent = async (
  lang: Locale,
  slug: string,
): Promise<Post> => {
  const { filePath, lang: resolvedLang } = resolvePostPath(lang, slug);
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
    lang: resolvedLang,
  } as Post;
};

export const getAllPostParams = () => {
  const defaultSlugs = getMarkdownFilenames(defaultLocale).map((filename) =>
    filename.replace(".md", ""),
  );

  const params: { lang: Locale; slug: string }[] = [];

  locales.forEach((lang) => {
    const slugsForLang = new Set(defaultSlugs);
    getMarkdownFilenames(lang).forEach((filename) => {
      slugsForLang.add(filename.replace(".md", ""));
    });

    slugsForLang.forEach((slug) => {
      params.push({ lang, slug });
    });
  });

  return params;
};

export const normalizeLocale = (value: string | undefined): Locale => {
  return isLocale(value) ? value : defaultLocale;
};
