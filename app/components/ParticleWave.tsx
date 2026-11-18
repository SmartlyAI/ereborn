"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type Props = {
  variant?: "light" | "dark";
  rows?: number;
  amplitude?: number;
  className?: string;
};

/** Vague de points orange / bleu marine (ou orange / blanc sur fond sombre). */
export default function ParticleWave({
  variant = "light",
  rows = 9,
  amplitude = 26,
  className = "",
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const secondary = variant === "light" ? "#0B1B3F" : "#FFFFFF";
    let w = 0;
    let h = 0;
    let t = 1.2;
    let raf = 0;
    let visible = true;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const gap = w < 600 ? 14 : 17;
      const cols = Math.ceil(w / gap) + 1;
      for (let r = 0; r < rows; r++) {
        const depth = r / (rows - 1);
        const baseY = h * (0.15 + 0.7 * depth);
        const amp = amplitude * (1 - 0.35 * depth);
        for (let c = 0; c < cols; c++) {
          const x = c * gap + (r % 2) * (gap / 2);
          const y =
            baseY +
            Math.sin(x * 0.011 + t * 0.7 + r * 0.45) * amp +
            Math.sin(x * 0.027 - t * 0.5) * amp * 0.35;
          const alt = (c * 7 + r * 3) % 5 === 0;
          ctx.globalAlpha = (alt ? 0.45 : 0.35) + depth * (alt ? 0.35 : 0.6);
          ctx.fillStyle = alt ? secondary : "#FF7043";
          ctx.beginPath();
          ctx.arc(x, y, 0.8 + depth * 1.6, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const loop = () => {
      if (visible) {
        t += 0.016;
        draw();
      }
      raf = requestAnimationFrame(loop);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    if (!reduce) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [variant, rows, amplitude, reduce]);

  return <canvas ref={ref} aria-hidden className={`block h-full w-full ${className}`} />;
}
