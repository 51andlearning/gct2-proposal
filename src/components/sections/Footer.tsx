import { company, footer } from "@/content/proposal";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-foreground">{footer.copyright}</p>
          <p className="text-xs">{footer.confidentiality}</p>
        </div>
        <div className="flex flex-col gap-1 text-xs md:items-end">
          <p>{company.contact.site}</p>
          <p>
            {company.contact.email} · {company.contact.phone}
          </p>
        </div>
      </div>
    </footer>
  );
}
