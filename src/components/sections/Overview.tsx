import { overview } from "@/content/proposal";

export function Overview() {
  return (
    <section id="overview" className="border-b border-border/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-28">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            01 — Overview
          </p>
          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {overview.title}
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {overview.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "text-foreground" : undefined}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
