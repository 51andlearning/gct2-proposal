import { dbotPhases } from "@/content/proposal";

export function DBOT() {
  return (
    <section id="dbot" className="bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
            Featured programme
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            DBOT — Design, Build &amp; Operate, Transfer
          </h2>
          <div className="mt-4 h-1 w-12 rounded-full bg-[#38bdf8]" aria-hidden />
          <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
            A nine-month, end-to-end MVNO transformation that delivers a
            launched, operating MVNO and transfers it back to GCT with a
            60-month business plan and full operating model.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {dbotPhases.map((phase, i) => (
            <article
              key={phase.phase}
              className="rounded-xl bg-[#1e293b] p-6 ring-1 ring-white/10"
            >
              <span className="rounded-full bg-[#0369a1] px-3 py-1 text-xs font-bold tracking-wide text-white">
                Phase 0{i + 1}
              </span>
              <h3 className="mt-4 text-xl font-extrabold text-white">{phase.phase}</h3>
              <p className="mt-1 text-sm font-medium text-[#38bdf8]">
                {phase.duration}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {phase.summary}
              </p>
              <h4 className="mt-6 text-xs font-bold uppercase tracking-widest text-white/60">
                Deliverables
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {phase.deliverables.map((d, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-[#38bdf8]" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
