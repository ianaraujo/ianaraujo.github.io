export interface PostMeta {
    title: string;
    date: string;
    description: string;
    tag: string;
    slug: string;
  }
  
  export interface Post extends PostMeta {
    content: string;
  }