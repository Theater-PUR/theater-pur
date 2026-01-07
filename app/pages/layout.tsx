import { AppShell } from "@/components/layout/AppShell";
import { getSiteSettings } from "@/lib/sanity-data";
import { draftMode } from "next/headers";

export default async function PageLayout({
  children,
  headerPosition = "sticky",
}: {
  headerPosition?: "sticky" | "fixed";
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <AppShell
      settings={settings}
      isDraftMode={isDraftMode}
      headerPosition={headerPosition}
    >
      {children}
    </AppShell>
  );
}
