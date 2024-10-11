import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMeta } from "@/types";

export const getPost = async (slug: string): Promise<PostMeta> => {
    const postsDirectory = path.join(process.cwd(), "src", "posts");
    const fileContents = fs.readFileSync(path.join(postsDirectory, `${slug}.md`), "utf8");
    const { data } = matter(fileContents);
    
    return { ...data, slug } as PostMeta;
  };

  export const getImageUrl = async (slug: string): Promise<string> => {
    const post = await getPost(slug);
    const imagePath = post.image;
  
    const normalizedImagePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  
    const imageUrl = `https://ianaraujo.com${normalizedImagePath}`;
  
    return imageUrl;
  };