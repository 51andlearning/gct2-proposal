import { NextResponse } from "next/server";
import { SESSION_COOKIE } from "@/middleware";

export const runtime = "edge";

async function tokenFor(password: string): Promise<string> {
  const secret =
    process.env.SITE_SESSION_SECRET ??
    "rotate-me-in-vercel-env-vars-please";
  const data = new TextEncoder().encode(`${password}::${secret}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function POST(req: Request) {
  const expected = process.env.SITE_PASSWORD ?? "GCT2026";
  let body: { password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
  const submitted = (body.password ?? "").trim();
  if (!submitted || !timingSafeEqual(submitted, expected)) {
    // Same response shape on bad / missing — don't leak which.
    await new Promise((r) => setTimeout(r, 250));
    return NextResponse.json(
      { error: "Incorrect password" },
      { status: 401 },
    );
  }

  const token = await tokenFor(submitted);
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
