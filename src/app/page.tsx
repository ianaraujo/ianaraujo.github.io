import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { DEFAULT_LANG, isSupportedLang } from "@/utils/i18n";

export default function RootPage() {
  const preferredLang = cookies().get("preferred-lang")?.value;
  const lang = isSupportedLang(preferredLang) ? preferredLang : DEFAULT_LANG;

  redirect(`/${lang}`);
}
