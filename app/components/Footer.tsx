import Image from "next/image";
import type { Dict } from "@/lib/i18n";

export default function Footer({ t }: { t: Dict }) {
  return (
    <footer className="border-t border-navy/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row lg:px-10">
        <Image src="/brand/logo-light.svg" alt="EREBORN" width={530} height={120} className="h-7 w-auto" />
        <ul className="flex gap-6 text-sm text-navy/70">
          {t.nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-coral">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-navy/50">© 2026 EREBORN. ereborn.ai</p>
      </div>
    </footer>
  );
}
