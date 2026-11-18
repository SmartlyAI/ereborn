import type { Dict } from "@/lib/i18n";
import { mailto } from "@/lib/site";
import Button from "./Button";
import Reveal from "./Reveal";

export default function Contact({ t }: { t: Dict }) {
  const c = t.contact;
  return (
    <section id="contact" className="px-4 pb-16 pt-6 sm:px-6 lg:px-10 lg:pb-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-navy text-white shadow-[0_30px_80px_-28px_rgba(11,27,63,0.55)] ring-1 ring-white/10">
        {/* Trame fine + lueur discrète */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(70% 90% at 50% 0%, #000, transparent 75%)",
            WebkitMaskImage: "radial-gradient(70% 90% at 50% 0%, #000, transparent 75%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(50%_70%_at_50%_0%,rgba(255,112,67,0.18),transparent_70%)]"
          aria-hidden
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" aria-hidden />

        <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center px-7 py-20 text-center sm:px-12 lg:py-28">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            <span className="h-px w-8 bg-coral" />
            {c.eyebrow}
            <span className="h-px w-8 bg-coral" />
          </p>
          <h2 className="mt-7 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            {c.titlePre}
            <span className="text-coral">{c.titleAccent}</span>
            {c.titlePost}
          </h2>
          {c.text && (
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-white/65">{c.text}</p>
          )}
          <Button href={mailto(c.subject)} size="lg" className="group mt-10 px-8">
            {c.cta}
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
