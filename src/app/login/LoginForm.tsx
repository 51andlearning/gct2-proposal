"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") || "/";

  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.replace(next);
        router.refresh();
        return;
      }
      const data: { error?: string } = await res.json().catch(() => ({}));
      setError(data.error || "Sign-in failed");
    } catch {
      setError("Network error — please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[#0f172a] px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <Image
            src="/images/logos/dsg-header.png"
            alt="DSG"
            width={138}
            height={65}
            className="h-12 w-auto"
            priority
          />
          <span className="text-xs font-medium tracking-[0.18em] text-white/60">
            GCT Group Proposal
          </span>
        </div>

        <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[rgba(56,189,248,0.08)] px-3 py-1.5 ring-1 ring-[rgba(56,189,248,0.25)]">
            <Lock className="size-3.5 text-[#38bdf8]" />
            <span className="text-xs font-semibold tracking-wide text-white">
              Confidential
            </span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-white">
            Sign in to view this proposal
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            This document is confidential and shared with the GCT Group
            executive team only. Please enter the access password.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/60"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
                autoComplete="current-password"
                className="w-full rounded-md bg-[#0f172a] px-3 py-2 text-sm text-white ring-1 ring-white/10 outline-none transition-shadow focus:ring-[#38bdf8]"
              />
            </div>

            {error && (
              <p className="rounded-md bg-[#c8102e]/10 px-3 py-2 text-sm text-[#fca5a5] ring-1 ring-[#c8102e]/40">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#c8102e] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#a30d26] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          © Digital Solutions Group (Pty) Ltd · MVNE (Pty) Ltd · Confidential
        </p>
      </div>
    </main>
  );
}
