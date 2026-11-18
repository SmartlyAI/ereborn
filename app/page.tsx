import Embers from "./components/Embers";
import NotifyForm from "./components/NotifyForm";

export default function Home() {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0b0907] px-6 text-center text-[#f3ead9]"
      style={{
        backgroundImage:
          "radial-gradient(60% 50% at 50% 110%, rgba(232,121,58,.28), transparent 70%), radial-gradient(40% 30% at 50% 100%, rgba(217,164,65,.18), transparent 70%)",
      }}
    >
      <Embers />

      <main className="relative z-10 flex w-full flex-col items-center animate-[rise_1.6s_ease_both]">
        <div className="mb-8 font-sans text-xs font-semibold uppercase tracking-[0.35em] text-[#d9a441]">
          Chapitre I
        </div>
        <h1 className="inline-block bg-gradient-to-b from-[#f3ead9] from-30% to-[#e8793a] bg-clip-text pl-[0.12em] text-[clamp(2.5rem,11vw,6.5rem)] font-normal uppercase leading-tight tracking-[0.12em] text-transparent">
          Ereborn
        </h1>
        <div className="mx-auto my-8 h-px w-14 bg-[#e8793a]" />
        <p className="max-w-xl text-lg italic leading-relaxed text-[#8c8272]">
          Une nouvelle histoire est en train de s&apos;écrire.
          <br />
          Le site ouvre bientôt ses portes.
        </p>
        <NotifyForm />
      </main>

      <footer className="fixed bottom-6 z-10 font-sans text-xs tracking-widest text-[#8c8272]">
        © 2026 Ereborn
      </footer>
    </div>
  );
}
