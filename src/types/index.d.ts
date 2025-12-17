import { Locale } from "@/i18n/locales";

export interface PostMeta {
    title: string;
    date: string; // Format: "DD/MM/YYYY"
    description: string;
    image: string;
    tag: string;
    slug: string;
    lang: Locale;
  }

  export interface Post extends PostMeta {
    content: string;
    readingTime: number;
  }
