"use client";

import { useReducedMotion } from "motion/react";
import ParticleWave from "./ParticleWave";

const CX = 300;
const CY = 235;

const ORBITS = [
  { rx: 250, ry: 92, rot: -20, dur: 24, offsets: [0, -12], opacity: 0.45 },
  { rx: 250, ry: 92, rot: 20, dur: 30, offsets: [-6, -21], opacity: 0.45 },
  { rx: 188, ry: 188, rot: 0, dur: 36, offsets: [-9, -27], opacity: 0.3 },
];

const path = (rx: number, ry: number) =>
  `M${-rx} 0a${rx} ${ry} 0 1 0 ${2 * rx} 0a${rx} ${ry} 0 1 0 ${-2 * rx} 0`;

export default function HeroVisual({ label }: { label: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[600/560] w-full max-w-[640px]">
      <svg
        viewBox="0 0 600 560"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label={label}
      >
        <defs>
          <radialGradient id="halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF7043" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#FF7043" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#FF7043" stopOpacity="0" />
          </radialGradient>
          <filter id="glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="lift" x="-30%" y="-30%" width="160%" height="170%">
            <feDropShadow dx="0" dy="18" stdDeviation="16" floodColor="#0B1B3F" floodOpacity="0.28" />
          </filter>
        </defs>

        <circle cx={CX} cy={CY} r="270" fill="url(#halo)" />

        {ORBITS.map((o, i) => (
          <g key={i} transform={`translate(${CX} ${CY}) rotate(${o.rot})`}>
            <path
              d={path(o.rx, o.ry)}
              fill="none"
              stroke="#FF7043"
              strokeOpacity={o.opacity}
              strokeWidth="1"
            />
            {o.offsets.map((b, j) => (
              <circle key={j} r={j === 0 ? 4.5 : 3} fill="#FF7043" filter="url(#glow)" cx={reduce ? o.rx * Math.cos(b) : undefined}
                cy={reduce ? o.ry * Math.sin(b) : undefined}>
                {!reduce && (
                  <animateMotion
                    dur={`${o.dur}s`}
                    begin={`${b}s`}
                    repeatCount="indefinite"
                    path={path(o.rx, o.ry)}
                  />
                )}
              </circle>
            ))}
          </g>
        ))}

        {/* Pulsation douce autour du logo */}
        {!reduce && (
          <circle cx={CX} cy={CY} r="78" fill="none" stroke="#FF7043" strokeWidth="1">
            <animate attributeName="r" values="78;130" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0" dur="4s" repeatCount="indefinite" />
          </circle>
        )}

        {/* Logo EREBORN (icône fournie, sans modification) */}
        <g className="animate-float" style={{ transformOrigin: `${CX}px ${CY}px` }}>
          <svg x={CX - 72} y={CY - 72} width="144" height="144" viewBox="0 0 100 100" filter="url(#lift)">
            <rect width="100" height="100" rx="26" fill="#0B1B3F" />
            <path
              d="M78 50 A28 28 0 1 0 71.45 68"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <circle cx="24" cy="50" r="2.3" fill="#FF7A45" />
            <circle cx="31.5" cy="50" r="3.4" fill="#FF7A45" />
            <path d="M42 50 H78" fill="none" stroke="#FF7A45" strokeWidth="9" strokeLinecap="round" />
            <circle cx="71.45" cy="68" r="7" fill="#FF7A45" />
          </svg>
        </g>
      </svg>

      {/* Vague de données */}
      <div
        className="absolute inset-x-0 bottom-0 h-[38%]"
        style={{
          maskImage: "linear-gradient(to right, transparent, #000 15%, #000 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 15%, #000 85%, transparent)",
        }}
      >
        <ParticleWave variant="light" rows={8} amplitude={20} />
      </div>
    </div>
  );
}
