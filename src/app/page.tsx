import { redirect } from "next/navigation";

import { DEFAULT_LANGUAGE } from "@/utils/posts";

const RootPage = () => {
  redirect(`/${DEFAULT_LANGUAGE}`);
};

export default RootPage;
