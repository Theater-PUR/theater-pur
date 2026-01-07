import { AppShell } from "@/components/layout/AppShell";
import { getSiteSettings } from "@/lib/sanity-data";
import { draftMode } from "next/headers";

export default async function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <AppShell settings={settings} isDraftMode={isDraftMode}>
      {children}
    </AppShell>
  );
}
