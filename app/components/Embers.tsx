"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; r: number; v: number; d: number; a: number };

export default function Embers() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let w = 0;
    let h = 0;
    let raf = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    const make = (): Particle => ({
      x: Math.random() * w,
      y: h + 10,
      r: Math.random() * 1.8 + 0.4,
      v: Math.random() * 0.7 + 0.2,
      d: Math.random() * 2 - 1,
      a: Math.random() * 0.6 + 0.3,
    });

    resize();
    window.addEventListener("resize", resize);
    const ps: Particle[] = Array.from({ length: 60 }, () => ({ ...make(), y: Math.random() * h }));

    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        p.y -= p.v;
        p.x += Math.sin(p.y / 40) * 0.3 + p.d * 0.1;
        p.a -= 0.0008;
        if (p.y < -10 || p.a <= 0) Object.assign(p, make());
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 7);
        ctx.fillStyle = `rgba(232,121,58,${p.a})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#e8793a";
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="pointer-events-none fixed inset-0" aria-hidden />;
}
