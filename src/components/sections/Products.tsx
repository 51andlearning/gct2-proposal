"use client";

import { useState } from "react";
import Link from "next/link";
import { products, type Product } from "@/content/proposal";
import { ArrowRight, X } from "lucide-react";

export function Products() {
  const [open, setOpen] = useState<string | null>(null);
  const active = products.find((p) => p.slug === open) ?? null;

  return (
    <section id="products" className="bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
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
      className="flex scroll-mt-24 flex-col rounded-xl bg-[#1e293b] p-5 ring-1 ring-white/10 transition-shadow hover:ring-[#38bdf8]/40 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.4)]"
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
        {product.description}
      </p>

      <div className="mt-6">
        <p className="text-2xl font-extrabold tracking-tight text-[#38bdf8]">
          {product.headlinePrice}
        </p>
        <div className="mt-1 flex items-end justify-between gap-3">
          <p className="text-xs text-white/60">{product.headlinePriceNote}</p>
          <button
            type="button"
            onClick={onView}
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
      className="fixed inset-0 z-50 grid place-items-end overflow-y-auto bg-black/70 p-0 sm:place-items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-t-2xl bg-[#1e293b] p-6 ring-1 ring-white/10 sm:rounded-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Close details"
        >
          <X className="size-5" />
        </button>

        <span className="rounded-full bg-[#0369a1] px-3 py-1 text-xs font-bold tracking-wide text-white">
          Product {product.number}
        </span>
        <h2 id={`${product.slug}-title`} className="mt-4 text-2xl font-extrabold text-white">
          {product.name}
        </h2>
        <p className="mt-1 text-sm font-medium text-[#38bdf8]">{product.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-white/80">{product.description}</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/60">
              Key features
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {product.features.map((f, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-[#38bdf8]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/60">
              Outcomes
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {product.outcomes.map((o, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-[#38bdf8]" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-[#0f172a] p-5 ring-1 ring-white/5">
          <h4 className="text-xs font-bold uppercase tracking-widest text-white/60">
            Commercial terms
          </h4>
          <dl className="mt-3 grid gap-2 text-sm">
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
            <p className="mt-3 text-xs text-white/50">{product.pricingNote}</p>
          )}
        </div>

        {product.cta && (
          <div className="mt-6">
            <Link
              href={product.cta.href}
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-lg bg-[#c8102e] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#a30d26]"
            >
              {product.cta.label} <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
