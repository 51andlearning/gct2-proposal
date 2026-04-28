import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { divisions } from "@/content/proposal";

export function AboutDSG() {
  return (
    <section id="about" className="border-b border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            02 — About DSG
          </p>
          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            One group. Six specialised divisions.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Digital Solutions Group is a multi-divisional digital firm
            headquartered in Johannesburg, South Africa. Each division is a
            standalone specialist — together they cover the full digital telco
            stack.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d) => (
            <Card key={d.name} className="bg-background">
              <CardHeader>
                <CardTitle>{d.name}</CardTitle>
                <CardDescription>{d.tagline}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {d.description}
                </p>
                <p className="text-xs font-medium tracking-wide text-muted-foreground">
                  {d.site}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
