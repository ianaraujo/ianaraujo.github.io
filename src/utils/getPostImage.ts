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

export const getImageData = async (slug: string): Promise<Buffer> => {
  const post = await getPost(slug);
  const imagePath = post.image;

  const imageFullPath = path.join(process.cwd(), "public", imagePath);
  const imageData = fs.readFileSync(imageFullPath);

  return imageData;
};