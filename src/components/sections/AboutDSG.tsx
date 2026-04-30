import { divisions, overview } from "@/content/proposal";

export function AboutDSG() {
  return (
    <section id="about" className="bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
            02 — {overview.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            {overview.title}
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-[#38bdf8]" aria-hidden />
          <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
            {overview.intro}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {divisions.map((d) => (
            <article
              key={d.name}
              className="rounded-xl bg-[#1e293b] p-6 ring-1 ring-white/10 transition-shadow hover:ring-[#38bdf8]/40"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#38bdf8]">
                {d.tagline}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-white">
                {d.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {d.description}
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                {d.features.map((f, i) => (
                  <li key={i} className="flex gap-2 text-white/80">
                    <span className="text-[#38bdf8]">✦</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs font-medium tracking-wide text-white/50">
                {d.site}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
