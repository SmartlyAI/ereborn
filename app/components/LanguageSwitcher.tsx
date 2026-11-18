"use client";

import type { Lang } from "@/lib/i18n";
import { PATH } from "@/lib/i18n";

const OPTIONS: { lang: Lang; label: string; full: string }[] = [
  { lang: "en", label: "EN", full: "English" },
  { lang: "fr", label: "FR", full: "Français" },
];

export default function LanguageSwitcher({ current, label }: { current: Lang; label: string }) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-full border border-navy/15 bg-white/80 p-0.5 text-xs font-semibold"
    >
      {OPTIONS.map((o) => {
        const active = o.lang === current;
        return (
          <a
            key={o.lang}
            href={PATH[o.lang]}
            hrefLang={o.lang}
            lang={o.lang}
            title={o.full}
            aria-current={active ? "true" : undefined}
            onClick={(e) => {
              if (active) return e.preventDefault();
              // Conserve la section courante lors du changement de langue
              e.preventDefault();
              window.location.assign(PATH[o.lang] + window.location.hash);
            }}
            className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${
              active ? "bg-navy text-white" : "text-navy/60 hover:text-navy"
            }`}
          >
            {o.label}
          </a>
        );
      })}
    </div>
  );
}
