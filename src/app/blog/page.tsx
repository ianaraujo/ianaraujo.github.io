import { redirect } from "next/navigation";

import { DEFAULT_LANGUAGE } from "@/utils/posts";

const LegacyBlogRedirect = () => {
  redirect(`/${DEFAULT_LANGUAGE}/blog`);
};

export default LegacyBlogRedirect;
