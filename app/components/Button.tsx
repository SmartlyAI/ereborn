import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "light";
  size?: "md" | "lg";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral hover:-translate-y-0.5 active:translate-y-0";

const variants = {
  primary:
    "bg-coral text-white shadow-[0_8px_24px_-8px_rgba(255,112,67,0.7)] hover:bg-coral-deep hover:shadow-[0_12px_30px_-8px_rgba(255,112,67,0.8)]",
  secondary:
    "border border-navy/15 bg-white text-navy shadow-sm hover:border-navy/40 hover:shadow-md",
  light: "bg-white text-navy hover:bg-white/90",
};

const sizes = { md: "px-5 py-2.5 text-sm", lg: "px-7 py-3.5 text-base" };

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Props) {
  return <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
