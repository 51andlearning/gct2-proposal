import Link from "next/link";
import { Button } from "@/components/ui/button";
import { company, navLinks, hero } from "@/content/proposal";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="#top" className="flex items-baseline gap-2">
          <span className="font-heading text-base font-semibold tracking-tight">
            {company.shortName}
          </span>
          <span className="text-xs text-muted-foreground">
            × {company.partner} → {company.client}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {hero.ctas.map((cta) => (
            <Button
              key={cta.href}
              variant={cta.variant}
              size="sm"
              render={<Link href={cta.href} />}
            >
              {cta.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}
