import { NextRequest, NextResponse } from "next/server";

import { DEFAULT_LANG, isSupportedLang } from "./src/utils/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const [, maybeLang] = pathname.split("/");

  if (isSupportedLang(maybeLang)) {
    return NextResponse.next();
  }

  const preferredLang = request.cookies.get("preferred-lang")?.value;
  const lang = isSupportedLang(preferredLang) ? preferredLang : DEFAULT_LANG;

  const redirectUrl = new URL(`/${lang}${pathname === "/" ? "" : pathname}`, request.url);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: "/((?!_next|api|.*\\..*).*)",
};
