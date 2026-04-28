"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { acceptance, products } from "@/content/proposal";
import { CheckCircle2 } from "lucide-react";

export function Acceptance() {
  const [selected, setSelected] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(products.map((p) => [p.slug, false])),
  );
  const [submitted, setSubmitted] = useState(false);

  const toggle = (slug: string) =>
    setSelected((s) => ({ ...s, [slug]: !s[slug] }));

  const acceptedCount = Object.values(selected).filter(Boolean).length;

  return (
    <section
      id="acceptance"
      className="border-b border-border/60 bg-muted/30"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            04 — {acceptance.title}
          </p>
          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Accept the products GCT wishes to take forward.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {acceptance.intro}
          </p>
        </div>

        <Card className="bg-background">
          <CardHeader>
            <CardTitle>Product selection</CardTitle>
            <CardDescription>
              {acceptedCount} of {products.length} products selected
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {products.map((p) => (
              <label
                key={p.slug}
                className="flex cursor-pointer items-start gap-3 rounded-lg border border-border/60 p-4 transition-colors hover:bg-muted/50 has-[:checked]:border-foreground has-[:checked]:bg-foreground/5"
              >
                <input
                  type="checkbox"
                  className="mt-1 size-4 cursor-pointer accent-foreground"
                  checked={selected[p.slug]}
                  onChange={() => toggle(p.slug)}
                />
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-medium">
                      <span className="text-muted-foreground">{p.number}</span>
                      <span className="ml-3">{p.name}</span>
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {p.tagline}
                  </p>
                </div>
              </label>
            ))}
          </CardContent>
        </Card>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {acceptance.signatories.map((s) => (
            <Card key={s.party} className="bg-background">
              <CardHeader>
                <CardDescription>For and on behalf of</CardDescription>
                <CardTitle>{s.party}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <SigField label="Name" />
                <SigField label="Position" />
                <SigField label="Date" />
                <div>
                  <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Signature
                  </p>
                  <div className="h-20 rounded-md border border-dashed border-border/80 bg-muted/30" />
                </div>
                <p className="text-xs text-muted-foreground">{s.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {submitted
              ? "Thank you. The DSG / MVNE team has been notified and will follow up to issue full SoW(s)."
              : "Submitting acceptance does not constitute a binding contract — full SoW(s) will be issued for each accepted product."}
          </p>
          <Button
            size="lg"
            disabled={acceptedCount === 0 || submitted}
            onClick={() => setSubmitted(true)}
          >
            {submitted ? (
              <>
                <CheckCircle2 /> Acceptance submitted
              </>
            ) : (
              "Submit acceptance"
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}

function SigField({ label }: { label: string }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type="text"
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground"
      />
    </div>
  );
}
