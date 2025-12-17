import { redirect } from "next/navigation";

import { DEFAULT_LANG } from "@/utils/i18n";

export const dynamic = "force-static";

export default function RootPage() {
  redirect(`/${DEFAULT_LANG}`);
}
