import Link from "next/link";
import { company, footer, navLinks } from "@/content/proposal";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0f172a]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span
            className="grid place-items-center rounded-md border-[3px] border-[#c8102e] px-2.5 py-1 text-2xl font-black tracking-tight text-[#c8102e]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            DSG
          </span>
          <span className="text-xs font-medium tracking-[0.18em] text-white/60">
            | GCT Group Proposal
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto max-w-7xl border-t border-white/5 px-6 py-6 text-xs text-white/50">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>{footer.copyright}</p>
          <p>
            {company.contact.site} · {company.contact.email} · {company.contact.phone}
          </p>
        </div>
        <p className="mt-2">{footer.confidentiality}</p>
      </div>
    </footer>
  );
}
