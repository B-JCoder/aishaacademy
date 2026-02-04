import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

const locales = ["en", "es"];
const defaultLocale = "es";

function getLocale(request: NextRequest) {
  // Simple locale detection: check URL first, then headers
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return null;

  // Use default locale if none found
  return defaultLocale;
}

export async function middleware(request: NextRequest) {
  // 1. Handle Locales
  const pathname = request.nextUrl.pathname;
  const locale = getLocale(request);

  if (locale) {
    return NextResponse.redirect(
      new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url),
    );
  }

  // 2. Handle Supabase Session
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
