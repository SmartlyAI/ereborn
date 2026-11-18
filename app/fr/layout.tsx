import { Shell, buildMetadata, viewport } from "@/lib/shell";

export const metadata = buildMetadata("fr");
export { viewport };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="fr">{children}</Shell>;
}
