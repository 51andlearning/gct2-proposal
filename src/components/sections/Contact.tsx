"use client";

import { useState } from "react";
import { contact, company } from "@/content/proposal";
import { Mail, Phone, Globe, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#38bdf8]">
              05 — {contact.title}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Talk to the DSG / MVNE team.
            </h2>
            <div className="mt-4 h-1 w-12 rounded-full bg-[#38bdf8]" aria-hidden />
            <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
              {contact.intro}
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a
                href={`mailto:${company.contact.email}`}
                className="flex items-center gap-3 text-white hover:text-[#38bdf8]"
              >
                <Mail className="size-4 text-[#38bdf8]" />
                {company.contact.email}
              </a>
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-white hover:text-[#38bdf8]"
              >
                <Phone className="size-4 text-[#38bdf8]" />
                {company.contact.phone}
              </a>
              <p className="flex items-center gap-3 text-white/70">
                <Globe className="size-4 text-[#38bdf8]" />
                {company.contact.site}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-[#1e293b] p-6 ring-1 ring-white/10">
            <h3 className="text-lg font-extrabold text-white">Send a message</h3>
            <p className="mt-1 text-sm text-white/60">
              We typically respond within one business day.
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <Field label="Full name" name="name" required />
              <Field label="Email address" name="email" type="email" required />
              <Field label="Phone number" name="phone" />
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/60">
                  Further information
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full rounded-md bg-[#0f172a] px-3 py-2 text-sm text-white ring-1 ring-white/10 outline-none transition-shadow focus:ring-[#38bdf8]"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="inline-flex items-center gap-2 rounded-lg bg-[#c8102e] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#a30d26] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="size-4" /> Message sent
                  </>
                ) : (
                  "Send message"
                )}
              </button>
            </form>
          </div>
        </div>
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
        className="mb-1.5 block text-xs font-bold uppercase tracking-widest text-white/60"
      >
        {label}
        {required && <span className="ml-1 text-[#c8102e]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md bg-[#0f172a] px-3 py-2 text-sm text-white ring-1 ring-white/10 outline-none transition-shadow focus:ring-[#38bdf8]"
      />
    </div>
  );
}
