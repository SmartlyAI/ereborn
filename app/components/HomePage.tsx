import { DICT, type Lang } from "@/lib/i18n";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Technology from "./Technology";
import UseCases from "./UseCases";
import WhatWeDo from "./WhatWeDo";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = DICT[lang];
  return (
    <>
      <Navbar t={t} />
      <main>
        <Hero t={t} />
        <WhatWeDo t={t} />
        <UseCases t={t} />
        <Technology t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
