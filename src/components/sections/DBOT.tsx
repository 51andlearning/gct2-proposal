import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dbotPhases } from "@/content/proposal";

export function DBOT() {
  return (
    <section id="dbot" className="border-b border-border/60 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/80">
            Featured programme
          </p>
          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            DBOT — Design, Build &amp; Operate, Transfer
          </h2>
          <p className="mt-4 text-base leading-relaxed text-background/70 md:text-lg">
            A nine-month, end-to-end MVNO transformation that delivers a
            launched, operating MVNO and transfers it back to GCT with a
            60-month business plan and full operating model.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {dbotPhases.map((phase, i) => (
            <Card key={phase.phase} className="bg-background text-foreground">
              <CardHeader>
                <Badge variant="outline" className="w-fit font-mono">
                  0{i + 1}
                </Badge>
                <CardTitle className="mt-2">{phase.phase}</CardTitle>
                <CardDescription>{phase.duration}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {phase.summary}
                </p>
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Deliverables
                  </p>
                  <ul className="space-y-1.5 text-sm">
                    {phase.deliverables.map((d, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
