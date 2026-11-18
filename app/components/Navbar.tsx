"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Dict } from "@/lib/i18n";
import Button from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ t }: { t: Dict }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-navy/10 bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label={t.nav.aria}
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-10"
      >
        <a href="#home" aria-label="EREBORN" className="shrink-0">
          <Image
            src="/brand/logo-light.svg"
            alt="EREBORN"
            width={530}
            height={120}
            priority
            className="h-8 w-auto lg:h-9"
          />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {t.nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium text-navy/80 transition-colors hover:text-navy"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-coral transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageSwitcher current={t.lang} label={t.nav.language} />
          <Button href="#contact" className="hidden sm:inline-flex">
            {t.nav.cta}
          </Button>
          <button
            type="button"
            aria-label={t.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-navy transition-all ${
                  open ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-navy transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-navy transition-all ${
                  open ? "top-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-navy/10 bg-white px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {t.nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-navy/5 py-3.5 text-base font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" onClick={() => setOpen(false)} className="mt-5 w-full">
            {t.nav.cta}
          </Button>
        </div>
      )}
    </header>
  );
}
