"use client";

import { useState } from "react";

export default function NotifyForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new URLSearchParams(new FormData(e.currentTarget) as unknown as Record<string, string>);
    try {
      // Netlify Forms détecte le formulaire statique dans public/__forms.html
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return <p className="mt-10 text-[#d9a441] font-sans">Merci, nous vous écrirons dès l&apos;ouverture.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 flex flex-wrap justify-center gap-2 font-sans">
      <input type="hidden" name="form-name" value="notify" />
      <input
        type="email"
        name="email"
        required
        placeholder="Votre e-mail"
        aria-label="Votre e-mail"
        className="min-w-[260px] rounded-sm border border-[#f3ead9]/20 bg-white/5 px-4 py-3 text-[#f3ead9] outline-none focus:border-[#e8793a]"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="cursor-pointer rounded-sm bg-[#e8793a] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-[#150c06] transition-colors hover:bg-[#d9a441] disabled:opacity-60"
      >
        Me prévenir
      </button>
      {status === "error" && <p className="w-full text-sm text-red-400">Une erreur est survenue, réessayez.</p>}
    </form>
  );
}
