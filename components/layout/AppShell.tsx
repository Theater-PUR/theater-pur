"use client";

import { Header } from "./Header";
import { Footer } from "./Footer";
import type { SiteSettings } from "@/types/sanity";

interface AppShellProps {
  children: React.ReactNode;
  settings: SiteSettings | null;
  isDraftMode?: boolean;
  headerPosition?: "sticky" | "fixed";
}

export function AppShell({
  children,
  settings,
  isDraftMode,
  headerPosition = "sticky",
}: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        brandName={settings?.brandName || ""}
        primaryCtaText={settings?.primaryCtaText || ""}
        primaryCtaLink={settings?.primaryCtaLink || ""}
        isDraftMode={isDraftMode}
        headerPosition={headerPosition}
      />
      <main className="flex-1">{children}</main>
      <Footer
        brandName={settings?.brandName || ""}
        brandTagline={settings?.brandTagline || ""}
        footerDescription={settings?.footerDescription || ""}
        footerInfoTitle={settings?.footerInfoTitle || ""}
        footerInfoDescription={settings?.footerInfoDescription || ""}
        contactEmail={settings?.contactEmail || ""}
        contactPhone={settings?.contactPhone || ""}
        addressStreet={settings?.addressStreet || ""}
        addressPostalCode={settings?.addressPostalCode || ""}
        addressCity={settings?.addressCity || ""}
      />
    </div>
  );
}
