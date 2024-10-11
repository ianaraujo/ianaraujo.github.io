import fs from "fs";
import path from "path";

import { ReactNode } from "react";

export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), "src", "posts");
    const filenames = fs.readdirSync(postsDirectory);

    const slugs = filenames.map((filename) => filename.replace(".md", ""));

    return slugs.map((slug) => ({
        slug,
    }));
}

export default function Layout({ children, params }: { children: ReactNode, params: { slug: string } }) {
    console.log(`Rendering layout for slug: ${params.slug}`);
    return <>{children}</>;
}