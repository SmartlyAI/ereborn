import Image from "next/image";
import type { Dict } from "@/lib/i18n";
import SectionRow from "./SectionRow";

const pill =
  "flex items-center gap-3 rounded-full border border-navy/10 bg-white px-4 py-2.5 text-sm font-medium shadow-[0_8px_24px_-12px_rgba(11,27,63,0.22)]";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const INPUT_ICONS = [
  <>
    <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
    <path d="M3 10h18M7 15h3" />
  </>,
  <>
    <path d="M3 9.5 12 4l9 5.5M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18" />
  </>,
  <>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
  </>,
];

function Check() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral">
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="m5 12.5 4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}

/** Pile de couches isométriques avec le symbole EREBORN. */
function Stack() {
  const layer = (y: number, fill: string, stroke: string) => (
    <path
      d={`M100 ${y} L172 ${y + 36} L100 ${y + 72} L28 ${y + 36} Z`}
      fill={fill}
      stroke={stroke}
      strokeWidth="7"
      strokeLinejoin="round"
    />
  );
  return (
    <svg viewBox="0 0 200 170" className="h-40 w-48 overflow-visible" aria-hidden>
      <defs>
        <filter id="stack-shadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="10" stdDeviation="9" floodColor="#FF7043" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#stack-shadow)">
        {layer(70, "#FF7043", "#FF7043")}
        {layer(52, "#FF9A72", "#FF9A72")}
        {layer(34, "#FFC4A8", "#FFC4A8")}
        {layer(14, "#FFFFFF", "#E8ECF5")}
      </g>
      <g transform="translate(100 50) scale(0.4) translate(-50 -50)">
        <path d="M78 50 A28 28 0 1 0 71.45 68" fill="none" stroke="#0B1B3F" strokeWidth="9" strokeLinecap="round" />
        <circle cx="24" cy="50" r="2.3" fill="#FF7A45" />
        <circle cx="31.5" cy="50" r="3.4" fill="#FF7A45" />
        <path d="M42 50 H78" fill="none" stroke="#FF7A45" strokeWidth="9" strokeLinecap="round" />
        <circle cx="71.45" cy="68" r="7" fill="#FF7A45" />
      </g>
    </svg>
  );
}

// Courbes de liaison : coordonnées en % de la hauteur (0-100), largeur 0-100.
const curve = (fromLeft: boolean, y: number) =>
  fromLeft
    ? `M0 ${y} C55 ${y} 45 50 100 50`
    : `M0 50 C55 50 45 ${y} 100 ${y}`;

function Links({ ys, fromLeft }: { ys: number[]; fromLeft: boolean }) {
  return (
    <div className="relative hidden w-14 self-stretch lg:block xl:w-20" aria-hidden>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        {ys.map((y) => (
          <path
            key={y}
            d={curve(fromLeft, y)}
            fill="none"
            stroke="#FF7043"
            strokeOpacity="0.7"
            strokeWidth="1.3"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      <span
        className={`absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-coral shadow-[0_0_0_4px_rgba(255,112,67,0.18)] ${
          fromLeft ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
        }`}
      />
    </div>
  );
}

const centers = (n: number) => Array.from({ length: n }, (_, i) => ((2 * i + 1) / (2 * n)) * 100);

export default function Technology({ t }: { t: Dict }) {
  const k = t.tech;
  if (k.image) {
    return (
      <SectionRow id="technology" title={k.title} text={k.text}>
        <Image
          src={k.image}
          alt={k.imageAlt}
          width={2000}
          height={667}
          sizes="(min-width: 1280px) 800px, (min-width: 1024px) 60vw, 100vw"
          className="h-auto w-full"
        />
      </SectionRow>
    );
  }
  return (
    <SectionRow id="technology" title={k.title} text={k.text}>
      {/* Desktop */}
      <div className="hidden items-stretch justify-center lg:flex">
        <div className="flex w-52 flex-col justify-around gap-4 py-2">
          {k.inputs.map((label, i) => (
            <div key={label} className={pill}>
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-navy" aria-hidden {...stroke}>
                {INPUT_ICONS[i]}
              </svg>
              {label}
            </div>
          ))}
        </div>
        <Links ys={centers(k.inputs.length)} fromLeft />
        <div className="flex flex-col items-center justify-center px-2">
          <Stack />
          <p className="-mt-1 text-center text-sm font-semibold leading-snug">{k.core}</p>
        </div>
        <Links ys={centers(k.outputs.length)} fromLeft={false} />
        <div className="flex w-44 flex-col justify-around gap-3 py-2">
          {k.outputs.map((label) => (
            <div key={label} className={pill}>
              <Check />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Tablette / mobile */}
      <div className="flex flex-col items-center gap-4 lg:hidden">
        <div className="flex flex-wrap justify-center gap-3">
          {k.inputs.map((label, i) => (
            <div key={label} className={pill}>
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-navy" aria-hidden {...stroke}>
                {INPUT_ICONS[i]}
              </svg>
              {label}
            </div>
          ))}
        </div>
        <div className="flow-v h-8 w-0.5" aria-hidden />
        <div className="flex flex-col items-center">
          <Stack />
          <p className="-mt-1 text-center text-sm font-semibold">{k.core}</p>
        </div>
        <div className="flow-v h-8 w-0.5" aria-hidden />
        <div className="flex flex-wrap justify-center gap-3">
          {k.outputs.map((label) => (
            <div key={label} className={pill}>
              <Check />
              {label}
            </div>
          ))}
        </div>
      </div>
    </SectionRow>
  );
}
