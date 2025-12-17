import { redirect } from "next/navigation";

import { DEFAULT_LANGUAGE } from "@/utils/posts";

const LegacyPostRedirect = ({ params }: { params: { slug: string } }) => {
  redirect(`/${DEFAULT_LANGUAGE}/blog/${params.slug}`);
};

export default LegacyPostRedirect;
