import type { Dict } from "@/lib/i18n";
import { mailto } from "@/lib/site";
import Button from "./Button";
import HeroVisual from "./HeroVisual";
import Reveal from "./Reveal";

const ICONS = [
  <path key="b" d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  <path
    key="s"
    d="M12 3 4 6v6c0 4.5 3.2 8 8 9 4.8-1 8-4.5 8-9V6l-8-3Zm-1 12-3-3 1.4-1.4L11 12.2l3.6-3.6L16 10l-5 5Z"
  />,
  <path key="g" d="M4 20V10h4v10H4Zm6 0V4h4v16h-4Zm6 0v-7h4v7h-4Z" />,
];

export default function Hero({ t }: { t: Dict }) {
  const h = t.hero;
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-coral/5 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8 lg:px-10">
        <div>
          <Reveal>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl xl:text-6xl">
              {h.titlePre} <span className="text-coral">{h.titleAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/70 lg:text-xl">{h.text}</p>
          </Reveal>
          <Reveal delay={0.2} className="mt-9 flex flex-wrap gap-3">
            <Button href={mailto(h.demoSubject)} size="lg">
              {h.demo}
            </Button>
            <Button href="#solution" variant="secondary" size="lg">
              {h.explore}
            </Button>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
              {h.indicators.map((label, i) => (
                <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-navy/80">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral/10">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-coral" aria-hidden>
                      {ICONS[i]}
                    </svg>
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <HeroVisual label={h.visualLabel} />
        </Reveal>
      </div>
    </section>
  );
}
