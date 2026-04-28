import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { hero, company } from "@/content/proposal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.zinc.100),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,theme(colors.zinc.900),transparent_60%)]" />
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 md:py-32">
        <Badge variant="secondary" className="w-fit">
          {hero.eyebrow}
        </Badge>
        <h1 className="font-heading max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          {hero.title}
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
          {hero.subtitle}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          {hero.ctas.map((cta) => (
            <Button
              key={cta.href}
              variant={cta.variant}
              size="lg"
              render={<Link href={cta.href} />}
            >
              {cta.label}
            </Button>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-xs text-muted-foreground">
          <span>Prepared by {company.shortName} & {company.partner}</span>
          <span className="hidden md:inline">•</span>
          <span>For {company.client}</span>
          <span className="hidden md:inline">•</span>
          <span>Decision deadline: {company.decisionDeadline}</span>
        </div>
      </div>
    </section>
  );
}
