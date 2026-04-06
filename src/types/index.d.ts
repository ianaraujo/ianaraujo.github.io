export interface PostMeta {
    title: string;
    date: string; // Format: "DD/MM/YYYY"
    description: string;
    image: string;
    tag: string;
    slug: string;
    type: "project" | "essay";
  }
  
  export interface Post extends PostMeta {
    content: string;
    readingTime: number;
  }