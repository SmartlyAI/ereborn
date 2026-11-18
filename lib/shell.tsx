import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "../app/globals.css";
import { DICT, PATH, type Lang } from "./i18n";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };

export function buildMetadata(lang: Lang): Metadata {
  const { title, description } = DICT[lang].meta;
  return {
    metadataBase: new URL("https://ereborn.ai"),
    title,
    description,
    alternates: {
      canonical: PATH[lang],
      languages: { en: PATH.en, fr: PATH.fr, "x-default": PATH.en },
    },
    openGraph: {
      title,
      description,
      url: PATH[lang],
      siteName: "EREBORN",
      type: "website",
      locale: lang === "fr" ? "fr_FR" : "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function Shell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
