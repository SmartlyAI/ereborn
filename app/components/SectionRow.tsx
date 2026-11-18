import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  title: string;
  text: string;
  children: ReactNode;
  divider?: boolean;
};

/** Ligne de section : barre orange + titre + texte à gauche, contenu à droite. */
export default function SectionRow({ id, title, text, children, divider = true }: Props) {
  return (
    <section id={id} className={divider ? "border-t border-navy/10" : ""}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.1fr)] lg:gap-16 lg:px-10 lg:py-20">
        <Reveal>
          <div className="mb-6 h-[3px] w-12 rounded-full bg-coral" />
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-sm leading-relaxed text-navy/70">{text}</p>
        </Reveal>
        <Reveal delay={0.1}>{children}</Reveal>
      </div>
    </section>
  );
}
