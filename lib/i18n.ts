export type Lang = "en" | "fr";

const en = {
  lang: "en" as Lang,
  meta: {
    title: "EREBORN — A New Era of Financial Intelligence",
    description:
      "EREBORN brings advanced AI to banking, transforming transaction data into actionable financial intelligence.",
  },
  nav: {
    links: [
      { label: "Home", href: "#home" },
      { label: "Solution", href: "#solution" },
      { label: "Use Cases", href: "#use-cases" },
      { label: "Technology", href: "#technology" },
    ],
    cta: "Get in Touch",
    menu: "Toggle menu",
    language: "Language",
    aria: "Main",
  },
  hero: {
    titlePre: "The first LLM built to",
    titleAccent: "understand your banking data.",
    text: "We bring advanced AI to banking, transforming your transaction data into actionable intelligence.",
    demo: "Request a Demo",
    explore: "Explore Our Solution",
    demoSubject: "Demo request",
    indicators: ["Real-time", "Trusted", "Scalable"],
    visualLabel: "EREBORN logo surrounded by orbiting data particles",
  },
  what: {
    title: "What We Do",
    text: "We make advanced financial AI accessible to banks, turning transaction data into reliable, high-value intelligence.",
    data: "Your Financial Data",
    coreName: "EREBORN",
    coreSub: "Financial Foundation",
    out: "Banking Intelligence",
    image: "/images/what-en.webp",
    imageAlt: "Your financial data flows into EREBORN's financial foundation, producing banking intelligence.",
  },
  cases: {
    title: "Built for Financial Decisions.",
    text: "A single intelligence layer that powers multiple banking use cases.",
    items: [
      {
        title: "Fraud Detection",
        text: "Identify and stop suspicious patterns in real time.",
      },
      {
        title: "Risk Intelligence",
        text: "Assess and anticipate financial risk with higher accuracy.",
      },
      {
        title: "Behavioral Insights",
        text: "Understand customer behavior and unlock new opportunities.",
      },
    ],
  },
  tech: {
    title: "Beyond Traditional Machine Learning.",
    text: "Financial foundation models designed to learn from transaction sequences and financial behavior.",
    inputs: ["Transactions", "Accounts", "Customer Behavior"],
    core: "Financial Foundation Model",
    outputs: ["Detection", "Scoring", "Prediction", "Insights"],
    // Visuel fourni ; null = diagramme codé (pas encore de visuel anglais)
    image: null as string | null,
    imageAlt:
      "Transactions, accounts and customer behavior feed the Financial Foundation Model, which produces detection, scoring, prediction and insights.",
  },
  contact: {
    titlePre: "Ready to ",
    titleAccent: "Reborn",
    titlePost: " Your Data?",
    eyebrow: "Contact",
    text: "Let's talk about what EREBORN can do with your transaction data.",
    cta: "Get in Touch",
    subject: "Get in touch",
  },
};

export type Dict = typeof en;

const fr: Dict = {
  lang: "fr",
  meta: {
    title: "EREBORN — Vos données bancaires ont plus à raconter.",
    description:
      "EREBORN apporte l'IA avancée à la banque et transforme les données de transactions en intelligence financière exploitable.",
  },
  nav: {
    links: [
      { label: "Accueil", href: "#home" },
      { label: "Solution", href: "#solution" },
      { label: "Cas d'usage", href: "#use-cases" },
      { label: "Technologie", href: "#technology" },
    ],
    cta: "Nous contacter",
    menu: "Ouvrir le menu",
    language: "Langue",
    aria: "Principal",
  },
  hero: {
    titlePre: "Le premier LLM conçu pour",
    titleAccent: "comprendre vos données bancaires.",
    text: "Nous apportons l'IA avancée à la banque en transformant vos données de transactions en intelligence exploitable.",
    demo: "Demander une démo",
    explore: "Découvrir notre solution",
    demoSubject: "Demande de démo",
    indicators: ["Temps réel", "Fiable", "Scalable"],
    visualLabel: "Logo EREBORN entouré de particules de données en orbite",
  },
  what: {
    title: "Ce que nous faisons",
    text: "Nous rendons l'IA financière avancée accessible aux banques, en transformant les données de transactions en intelligence fiable et à forte valeur.",
    data: "Vos données financières",
    coreName: "EREBORN",
    coreSub: "Fondation financière",
    out: "Intelligence bancaire",
    image: "/images/what-fr.webp",
    imageAlt: "Vos données financières alimentent la fondation d'IA financière d'EREBORN, qui produit de l'intelligence bancaire.",
  },
  cases: {
    title: "Conçu pour les décisions financières.",
    text: "Une seule couche d'intelligence qui alimente plusieurs cas d'usage bancaires.",
    items: [
      {
        title: "Détection de la fraude",
        text: "Identifiez et stoppez les schémas suspects en temps réel.",
      },
      {
        title: "Intelligence du risque",
        text: "Évaluez et anticipez le risque financier avec une meilleure précision.",
      },
      {
        title: "Analyse comportementale",
        text: "Comprenez le comportement des clients et débloquez de nouvelles opportunités.",
      },
    ],
  },
  tech: {
    title: "Au-delà du machine learning traditionnel.",
    text: "Des modèles de fondation financiers conçus pour apprendre des séquences de transactions et du comportement financier.",
    inputs: ["Transactions", "Comptes", "Comportement client"],
    core: "Modèle de fondation financier",
    outputs: ["Détection", "Scoring", "Prédiction", "Analyses"],
    image: "/images/tech-fr.webp",
    imageAlt:
      "Les transactions, les comptes et le comportement client alimentent le modèle de fondation financier, qui produit détection, scoring, prédiction et analyses.",
  },
  contact: {
    titlePre: "Besoin d'un ",
    titleAccent: "démo",
    titlePost: " Contactez-nous.",
    eyebrow: "Contact",
    cta: "Nous contacter",
    subject: "Prise de contact",
  },
};

export const DICT: Record<Lang, Dict> = { en, fr };
export const PATH: Record<Lang, string> = { en: "/", fr: "/fr" };
