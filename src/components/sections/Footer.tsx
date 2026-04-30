import { footer } from "@/content/proposal";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center text-xs text-white/50">
        <p>{footer.copyright}</p>
      </div>
    </footer>
  );
}
