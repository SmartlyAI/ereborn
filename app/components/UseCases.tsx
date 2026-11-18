import type { Dict } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionRow from "./SectionRow";

const ICONS = [
  <>
    <path d="M12 3 4.5 6v5.5c0 4.4 3 7.8 7.5 9 4.5-1.2 7.5-4.6 7.5-9V6L12 3Z" />
    <path d="m9 12 2.2 2.2L15.2 10" />
  </>,
  <>
    <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
    <path d="m3.5 12 8.5 4.5 8.5-4.5" />
    <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
  </>,
  <>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M17.5 13.8c2.2.2 3.5 1.8 3.5 4.2" />
  </>,
];

export default function UseCases({ t }: { t: Dict }) {
  const c = t.cases;
  return (
    <SectionRow id="use-cases" title={c.title} text={c.text}>
      <div className="grid gap-4 sm:grid-cols-3">
        {c.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <article className="group h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-[0_14px_40px_-16px_rgba(11,27,63,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:border-coral/40 hover:shadow-[0_24px_50px_-18px_rgba(11,27,63,0.28)]">
              <svg
                viewBox="0 0 24 24"
                className="h-9 w-9 text-coral"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {ICONS[i]}
              </svg>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionRow>
  );
}
