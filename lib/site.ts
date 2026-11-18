export const SITE = {
  name: "EREBORN",
  url: "https://ereborn.ai",
  // Adresse de contact utilisée par les boutons "Get in Touch" / "Request a Demo".
  email: "imad@ereborn.ai",
} as const;

export const mailto = (subject: string) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
