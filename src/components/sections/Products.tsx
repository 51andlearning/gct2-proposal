"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  products,
  termsAndConditions,
  acceptance,
  type Product,
  type ProductSection,
} from "@/content/proposal";
import { ArrowRight, X } from "lucide-react";

export function Products() {
  const [open, setOpen] = useState<string | null>(null);
  const active = products.find((p) => p.slug === open) ?? null;

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  return (
    <section id="products" className="bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
            03 — Products
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            The DSG &amp; MVNE Product Suite
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-[#38bdf8]" aria-hidden />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} onView={() => setOpen(p.slug)} />
          ))}
        </div>
      </div>

      {active && <ProductDialog product={active} onClose={() => setOpen(null)} />}
    </section>
  );
}

function ProductCard({ product, onView }: { product: Product; onView: () => void }) {
  return (
    <article
      id={product.slug}
      className="product-card flex scroll-mt-24 cursor-pointer flex-col rounded-xl bg-white/5 p-5 ring-1 ring-white/10 transition-all hover:bg-white/[0.07] hover:ring-[#38bdf8]/40"
      onClick={onView}
    >
      <div className="flex">
        <span className="rounded-full bg-[#0369a1] px-3 py-1 text-xs font-bold tracking-wide text-white">
          Product {product.number}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-extrabold leading-snug text-white">
        {product.name}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
        {product.cardDescription}
      </p>

      <div className="mt-6">
        <p className="text-2xl font-extrabold tracking-tight text-[#38bdf8]">
          {product.headlinePrice}
        </p>
        <div className="mt-1 flex items-end justify-between gap-3">
          <p className="text-xs text-white/60">{product.headlinePriceNote}</p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onView();
            }}
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#38bdf8] hover:underline"
            aria-label={`View ${product.name} details`}
          >
            View <ArrowRight className="size-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

function ProductDialog({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${product.slug}-title`}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="mx-auto my-0 min-h-screen w-full max-w-5xl px-0 py-0 sm:my-8 sm:px-4">
        <div
          className="relative w-full rounded-none bg-[#0f172a] ring-1 ring-white/10 sm:rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0f172a]/90 px-6 py-4 backdrop-blur sm:rounded-t-2xl">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#38bdf8] hover:underline"
            >
              ← Back to all products
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close details"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="space-y-10 px-6 py-8 md:px-10 md:py-12">
            <header>
              <span className="rounded-full bg-[#0369a1] px-3 py-1 text-xs font-bold tracking-wide text-white">
                Product {product.number}
              </span>
              <h2
                id={`${product.slug}-title`}
                className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl"
              >
                {product.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-[#38bdf8]">{product.tagline}</p>
              <div className="mt-4 h-1 w-12 rounded-full bg-[#38bdf8]" aria-hidden />
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
                {product.description}
              </p>
            </header>

            {product.features.length > 0 && (
              <section>
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
                  Platform Features
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex gap-2 text-white/80">
                      <span className="text-[#38bdf8]">✦</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {product.sections?.map((s, i) => <RenderSection key={i} section={s} />)}

            {product.outcomes.length > 0 && (
              <section>
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
                  Business Outcomes
                </h3>
                <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                  {product.outcomes.map((o, i) => (
                    <li key={i} className="flex gap-2 text-white/80">
                      <span className="text-[#38bdf8]">✦</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
                Commercial Terms
              </h3>
              <div className="mt-4 rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                <dl className="grid gap-2 text-sm">
                  {product.pricing.map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[1fr_auto] items-baseline gap-3 border-b border-white/10 pb-2 last:border-0 last:pb-0"
                    >
                      <dt className="text-white/70">{row.label}</dt>
                      <dd className="text-right">
                        <span className="font-semibold tabular-nums text-white">
                          {row.value}
                        </span>
                        {row.note && (
                          <span className="block text-xs text-white/50">{row.note}</span>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
                {product.pricingNote && (
                  <p className="mt-3 text-xs text-white/60">{product.pricingNote}</p>
                )}
              </div>

              {product.cta && (
                <Link
                  href={product.cta.href}
                  onClick={onClose}
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#c8102e] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#a30d26]"
                >
                  {product.cta.label} <ArrowRight className="size-4" />
                </Link>
              )}
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
                Terms &amp; Conditions
              </h3>
              <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-white/10">
                <table className="w-full text-sm">
                  <thead className="bg-white/5 text-left">
                    <tr>
                      <th className="px-4 py-3 font-bold uppercase tracking-wider text-xs text-white/60">
                        Clause
                      </th>
                      <th className="px-4 py-3 font-bold uppercase tracking-wider text-xs text-white/60">
                        Detail
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {termsAndConditions.map((row, i) => (
                      <tr
                        key={i}
                        className="border-t border-white/10 align-top"
                      >
                        <td className="w-1/4 px-4 py-3 font-semibold text-white">
                          {row.clause}
                        </td>
                        <td className="px-4 py-3 text-white/75">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
                {acceptance.title}
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/75">
                {acceptance.intro}
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {acceptance.signatories.map((s) => (
                  <div
                    key={s.party}
                    className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-white/60">
                      {s.party}
                    </p>
                    <div className="mt-4 space-y-3 text-sm">
                      <SigField label="Name" />
                      <SigField label="Position" />
                      <SigField label="Date" />
                      <div>
                        <p className="mb-1.5 text-xs font-bold uppercase tracking-widest text-white/60">
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
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

function RenderSection({ section }: { section: ProductSection }) {
  if (section.kind === "stats") {
    return (
      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {section.cards.map((c, i) => (
          <div
            key={i}
            className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10"
          >
            <p className="text-2xl font-extrabold tracking-tight text-[#38bdf8]">
              {c.value}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/60">
              {c.label}
            </p>
          </div>
        ))}
      </section>
    );
  }
  if (section.kind === "features") {
    return (
      <section>
        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
          {section.heading}
        </h3>
        <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-white/80">
              <span className="text-[#38bdf8]">✦</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  if (section.kind === "cardgrid") {
    return (
      <section>
        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
          {section.heading}
        </h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {section.cards.map((c, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10"
            >
              {c.icon && <p className="mb-2 text-xl">{c.icon}</p>}
              <h4 className="text-base font-extrabold text-white">{c.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{c.body}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  if (section.kind === "table") {
    return (
      <section>
        {section.heading && (
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
            {section.heading}
          </h3>
        )}
        <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-white/10">
          <table className="w-full text-sm">
            <thead className="bg-white/5 text-left">
              <tr>
                {section.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-white/60"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={i} className="border-t border-white/10">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-white/80">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {section.footnote && (
          <p className="mt-3 text-xs text-white/60">{section.footnote}</p>
        )}
      </section>
    );
  }
  if (section.kind === "paragraph") {
    return (
      <section>
        {section.heading && (
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
            {section.heading}
          </h3>
        )}
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/80">
          {section.body}
        </p>
      </section>
    );
  }
  return null;
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
