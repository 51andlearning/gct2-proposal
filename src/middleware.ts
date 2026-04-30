import { NextResponse, type NextRequest } from "next/server";

export const SESSION_COOKIE = "gct2_auth";

async function expectedToken(): Promise<string> {
  const password = process.env.SITE_PASSWORD ?? "GCT2026";
  const secret =
    process.env.SITE_SESSION_SECRET ??
    "rotate-me-in-vercel-env-vars-please";
  const data = new TextEncoder().encode(`${password}::${secret}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname === "/login" ||
    pathname.startsWith("/api/login") ||
    pathname.startsWith("/api/logout")
  ) {
    return NextResponse.next();
  }

  const token = req.cookies.get(SESSION_COOKIE)?.value;
  if (token && token === (await expectedToken())) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  if (pathname !== "/") url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Run on every request EXCEPT static assets, images, favicon, and Next internals
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|images/).*)",
  ],
};
