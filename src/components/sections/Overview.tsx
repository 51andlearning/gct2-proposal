import { overview } from "@/content/proposal";

export function Overview() {
  return (
    <section id="overview" className="bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
              01 — Overview
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
              {overview.title}
            </h2>
            <div className="mt-4 h-1 w-12 rounded-full bg-[#38bdf8]" aria-hidden />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-white/75 md:text-lg">
            {overview.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "text-white" : undefined}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
