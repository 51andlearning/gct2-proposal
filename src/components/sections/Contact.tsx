"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { contact, company } from "@/content/proposal";
import { Mail, Phone, Globe, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="border-b border-border/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:py-28">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            05 — {contact.title}
          </p>
          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Talk to the DSG / MVNE team.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {contact.intro}
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <a
              href={`mailto:${company.contact.email}`}
              className="flex items-center gap-3 text-foreground hover:underline"
            >
              <Mail className="size-4 text-muted-foreground" />
              {company.contact.email}
            </a>
            <a
              href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-foreground hover:underline"
            >
              <Phone className="size-4 text-muted-foreground" />
              {company.contact.phone}
            </a>
            <p className="flex items-center gap-3 text-muted-foreground">
              <Globe className="size-4" />
              {company.contact.site}
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
            <CardDescription>
              We typically respond within one business day.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field label="Full name" name="name" required />
              <Field label="Email address" name="email" type="email" required />
              <Field label="Phone number" name="phone" />
              <div>
                <label className="mb-1 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Further information
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground"
                />
              </div>
              <Button type="submit" size="lg" disabled={sent}>
                {sent ? (
                  <>
                    <CheckCircle2 /> Message sent
                  </>
                ) : (
                  "Send message"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
      >
        {label}
        {required && <span className="ml-1 text-destructive">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground"
      />
    </div>
  );
}
