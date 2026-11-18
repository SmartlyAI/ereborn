import { Shell, buildMetadata, viewport } from "@/lib/shell";

export const metadata = buildMetadata("en");
export { viewport };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="en">{children}</Shell>;
}
