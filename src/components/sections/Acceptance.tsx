"use client";

import { useState } from "react";
import { acceptance, products, termsAndConditions } from "@/content/proposal";
import { CheckCircle2 } from "lucide-react";

export function Acceptance() {
  const [selected, setSelected] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(products.map((p) => [p.slug, false])),
  );
  const [submitted, setSubmitted] = useState(false);

  const toggle = (slug: string) =>
    setSelected((s) => ({ ...s, [slug]: !s[slug] }));

  const acceptedCount = Object.values(selected).filter(Boolean).length;

  return (
    <section id="acceptance" className="bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
            04 — {acceptance.title}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Accept the proposals GCT wishes to take forward.
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-[#38bdf8]" aria-hidden />
          <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
            {acceptance.intro}
          </p>
        </div>

        <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
          <div className="mb-4 flex items-baseline justify-between">
            <h3 className="text-lg font-extrabold text-white">Product selection</h3>
            <span className="text-sm text-white/60">
              <span className="font-bold text-[#38bdf8]">{acceptedCount}</span>{" "}
              of {products.length} selected
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {products.map((p) => (
              <label
                key={p.slug}
                className="flex cursor-pointer items-start gap-3 rounded-lg bg-[#0f172a] p-4 ring-1 ring-white/10 transition-colors hover:ring-[#38bdf8]/40 has-[:checked]:ring-[#38bdf8]"
              >
                <input
                  type="checkbox"
                  className="mt-1 size-4 cursor-pointer accent-[#38bdf8]"
                  checked={selected[p.slug]}
                  onChange={() => toggle(p.slug)}
                />
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-bold tracking-wide text-[#38bdf8]">
                      {p.number}
                    </span>
                    <span className="font-bold text-white">{p.name}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-white/60">{p.tagline}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
            Terms &amp; Conditions
          </h3>
          <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-white/10">
            <table className="w-full text-sm">
              <thead className="bg-white/5 text-left">
                <tr>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-white/60">
                    Clause
                  </th>
                  <th className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-white/60">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                {termsAndConditions.map((row, i) => (
                  <tr key={i} className="border-t border-white/10 align-top">
                    <td className="w-1/4 px-4 py-3 font-semibold text-white">
                      {row.clause}
                    </td>
                    <td className="px-4 py-3 text-white/75">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {acceptance.signatories.map((s) => (
            <div
              key={s.party}
              className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-white/60">
                {s.party}
              </p>

              <div className="mt-5 space-y-4">
                <SigField label="Name" />
                <SigField label="Position" />
                <SigField label="Date" />
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white/60">
                    Signature
                  </p>
                  <div className="grid h-20 place-items-center rounded-md border border-dashed border-white/20 bg-[#0f172a] text-xs text-white/50">
                    Click to upload signature image
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            {submitted
              ? "Thank you. The DSG / MVNE team has been notified and will follow up to issue full SoW(s)."
              : "Submitting acceptance does not constitute a binding contract — full SoW(s) will be issued for each accepted product."}
          </p>
          <button
            type="button"
            disabled={acceptedCount === 0 || submitted}
            onClick={() => setSubmitted(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-[#c8102e] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#a30d26] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {submitted ? (
              <>
                <CheckCircle2 className="size-4" /> Acceptance submitted
              </>
            ) : (
              "Submit acceptance"
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

function SigField({ label }: { label: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/60">
        {label}
      </label>
      <input
        type="text"
        className="w-full rounded-md bg-[#0f172a] px-3 py-2 text-sm text-white ring-1 ring-white/10 outline-none transition-shadow focus:ring-[#38bdf8]"
      />
    </div>
  );
}
