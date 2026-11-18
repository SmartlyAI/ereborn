import Image from "next/image";
import type { Dict } from "@/lib/i18n";
import SectionRow from "./SectionRow";

const card =
  "flex w-full flex-col items-center justify-center gap-3 rounded-3xl border border-navy/10 bg-white px-4 py-7 text-center shadow-[0_14px_40px_-16px_rgba(11,27,63,0.2)] transition-transform duration-300 hover:-translate-y-1 sm:w-44 lg:w-48";

function Connector() {
  return (
    <div
      className="relative h-8 w-px shrink-0 bg-gradient-to-b from-coral/30 via-coral to-coral/30 sm:h-px sm:w-12 sm:bg-gradient-to-r lg:w-20"
      aria-hidden
    >
      <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral shadow-[0_0_0_4px_rgba(255,112,67,0.18)]" />
    </div>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function WhatWeDo({ t }: { t: Dict }) {
  const w = t.what;
  if (w.image) {
    return (
      <SectionRow id="solution" title={w.title} text={w.text} divider={false}>
        <Image
          src={w.image}
          alt={w.imageAlt}
          width={2000}
          height={667}
          sizes="(min-width: 1280px) 800px, (min-width: 1024px) 60vw, 100vw"
          className="h-auto w-full"
        />
      </SectionRow>
    );
  }
  return (
    <SectionRow id="solution" title={w.title} text={w.text} divider={false}>
      <div className="flex flex-col items-center sm:flex-row sm:justify-center">
        <div className={card}>
          <svg viewBox="0 0 24 24" className="h-9 w-9 text-navy" aria-hidden {...stroke}>
            <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
            <path d="M5 5.5v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-6M5 11.5v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-6" />
          </svg>
          <span className="text-sm font-semibold leading-snug">{w.data}</span>
        </div>

        <Connector />

        <div
          className={`${card} border-coral/40 shadow-[0_18px_50px_-14px_rgba(255,112,67,0.45)] sm:w-52 lg:w-56`}
        >
          <Image src="/brand/icon.svg" alt="" width={56} height={56} className="h-14 w-14" />
          <span className="text-sm font-semibold leading-snug">
            {w.coreName}
            <span className="block text-xs font-medium text-navy/60">{w.coreSub}</span>
          </span>
        </div>

        <Connector />

        <div className={card}>
          <svg viewBox="0 0 24 24" className="h-9 w-9 text-navy" aria-hidden {...stroke}>
            <rect x="4" y="11" width="3.5" height="9" rx="0.8" />
            <rect x="10.25" y="6" width="3.5" height="14" rx="0.8" />
            <rect x="16.5" y="3" width="3.5" height="17" rx="0.8" />
          </svg>
          <span className="text-sm font-semibold leading-snug">{w.out}</span>
        </div>
      </div>
    </SectionRow>
  );
}
