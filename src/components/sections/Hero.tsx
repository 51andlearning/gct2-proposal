import Link from "next/link";
import { Button } from "@/components/ui/button";
import { hero } from "@/content/proposal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative bg-[#0f172a] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(56,189,248,0.08)] px-3 py-1.5 ring-1 ring-[rgba(56,189,248,0.25)]">
          <span className="size-1.5 rounded-full bg-[#38bdf8]" />
          <span className="text-xs font-semibold tracking-wide text-white">
            {hero.eyebrow}
          </span>
        </div>

        <h1 className="mt-8 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          <span className="block text-white">{hero.titleLine1}</span>
          <span className="mt-1 block text-[#38bdf8]">{hero.titleLine2}</span>
        </h1>

        <div className="mt-6 h-1 w-12 rounded-full bg-[#38bdf8]" aria-hidden />

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button
            size="lg"
            className="rounded-lg bg-[#c8102e] px-6 py-3 text-base font-bold text-white hover:bg-[#a30d26]"
            render={<Link href={hero.ctas[0].href} />}
          >
            {hero.ctas[0].label}
          </Button>
          <Button
            size="lg"
            className="rounded-lg bg-white/10 px-6 py-3 text-base font-semibold text-white hover:bg-white/15"
            render={<Link href={hero.ctas[1].href} />}
          >
            {hero.ctas[1].label}
          </Button>
        </div>
      </div>
    </section>
  );
}
