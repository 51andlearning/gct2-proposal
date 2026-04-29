import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/content/proposal";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0f172a] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="#top"
          className="flex items-center gap-3"
          aria-label="DSG — GCT Group Proposal home"
        >
          <span
            className="grid place-items-center rounded-md border-[3px] border-[#c8102e] px-2.5 py-1 text-2xl font-black tracking-tight text-[#c8102e]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            DSG
          </span>
          <span className="hidden text-xs font-medium tracking-[0.18em] text-white/70 sm:inline">
            | GCT Group Proposal
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                "text-[15px] font-medium transition-colors " +
                (i === 0
                  ? "text-[#38bdf8]"
                  : "text-white/80 hover:text-white")
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button
          size="sm"
          className="rounded-lg bg-[#c8102e] px-4 py-2 text-sm font-bold text-white hover:bg-[#a30d26]"
          render={<Link href="#acceptance" />}
        >
          Accept Proposals
        </Button>
      </div>
    </header>
  );
}
