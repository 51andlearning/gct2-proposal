import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { products } from "@/content/proposal";
import { ArrowRight, Sparkles } from "lucide-react";

export function Products() {
  return (
    <section id="products" className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            03 — Products
          </p>
          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            The DSG & MVNE Product Suite
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Nine products, each ready to deploy. Pick the bundle that matches
            GCT&apos;s 2026 launch ambition — the DBOT programme integrates
            them end-to-end.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {products.map((p) => (
            <Card key={p.slug} id={p.slug} className="scroll-mt-24">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <Badge variant="outline" className="font-mono">
                      {p.number}
                    </Badge>
                    <CardTitle className="text-xl">{p.name}</CardTitle>
                    <CardDescription>{p.tagline}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div>
                  <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    <Sparkles className="size-3" /> Key features
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Commercial terms
                  </p>
                  <dl className="grid gap-2 text-sm">
                    {p.pricing.map((row, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-[1fr_auto] items-baseline gap-3 border-b border-border/50 pb-2 last:border-0 last:pb-0"
                      >
                        <dt className="text-muted-foreground">{row.label}</dt>
                        <dd className="text-right">
                          <span className="font-medium tabular-nums">
                            {row.value}
                          </span>
                          {row.note && (
                            <span className="block text-xs text-muted-foreground">
                              {row.note}
                            </span>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  {p.pricingNote && (
                    <p className="mt-3 text-xs text-muted-foreground">
                      {p.pricingNote}
                    </p>
                  )}
                </div>

                {p.cta && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-fit"
                    render={<Link href={p.cta.href} />}
                  >
                    {p.cta.label}
                    <ArrowRight />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
