import { divisions } from "@/content/proposal";

export function AboutDSG() {
  return (
    <section id="about" className="bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
            02 — About DSG
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            One group. Six specialised divisions.
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-[#38bdf8]" aria-hidden />
          <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
            Digital Solutions Group is a multi-divisional digital firm
            headquartered in Johannesburg, South Africa. Each division is a
            standalone specialist — together they cover the full digital telco
            stack.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d) => (
            <article
              key={d.name}
              className="rounded-xl bg-[#1e293b] p-5 ring-1 ring-white/10 transition-shadow hover:ring-[#38bdf8]/40"
            >
              <h3 className="text-lg font-extrabold text-white">{d.name}</h3>
              <p className="mt-1 text-sm font-medium text-[#38bdf8]">{d.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {d.description}
              </p>
              <p className="mt-4 text-xs font-medium tracking-wide text-white/50">
                {d.site}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
