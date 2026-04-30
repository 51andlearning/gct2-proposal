"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { divisions, overview } from "@/content/proposal";

export function AboutDSG() {
  const [index, setIndex] = useState(0);
  const total = divisions.length;
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <section id="about" className="bg-[#0f172a]">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
          02 — {overview.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          {overview.title}
        </h2>
        <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#38bdf8]" aria-hidden />
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
          {overview.intro}
        </p>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {divisions.map((d) => (
                <article
                  key={d.name}
                  className="w-full flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-8 text-left md:p-10"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-white px-5 py-3">
                    <Image
                      src={d.logo}
                      alt={d.name}
                      width={180}
                      height={45}
                      className="h-10 w-auto object-contain"
                    />
                  </div>

                  <p className="mb-4 text-sm font-semibold text-[#38bdf8]">
                    {d.tagline}
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-white/70">
                    {d.description}
                  </p>
                  <ul className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
                    {d.features.map((f, i) => (
                      <li key={i} className="flex gap-2 text-white/80">
                        <span className="text-[#38bdf8]">✦</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-white/10 pt-6 text-xs text-white/30">
                    {d.site}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous division"
            className="absolute -left-5 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#38bdf8] hover:text-[#0f172a]"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next division"
            className="absolute -right-5 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#38bdf8] hover:text-[#0f172a]"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {divisions.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show division ${i + 1}`}
                className={
                  "size-2 rounded-full transition-colors " +
                  (i === index
                    ? "bg-[#38bdf8]"
                    : "bg-white/20 hover:bg-white/40")
                }
              />
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-white/30">
            {index + 1} of {total}
          </p>
        </div>
      </div>
    </section>
  );
}
