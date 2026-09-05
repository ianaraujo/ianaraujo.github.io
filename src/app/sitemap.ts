import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getAllPosts, parseDateString } from "@/lib/posts";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap(lang => [
    ...["", "/projects", "/blog"].map(path => ({ url: `${siteUrl}/${lang}${path}` })),
    ...getAllPosts(lang).map(post => ({ url: `${siteUrl}/${lang}/blog/${post.slug}`, lastModified: parseDateString(post.date) })),
  ]);
}
