"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import type { SiteSettings } from "@/types/sanity";

interface AppShellProps {
  children: React.ReactNode;
  settings: SiteSettings | null;
}

export function AppShell({ children, settings }: AppShellProps) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        brandName={settings?.brandName}
        brandTagline={settings?.brandTagline}
        primaryCtaText={settings?.primaryCtaText}
        primaryCtaLink={settings?.primaryCtaLink}
      />
      <main className="flex-1 pt-20">{children}</main>
      <Footer
        brandName={settings?.brandName}
        brandTagline={settings?.brandTagline}
        footerDescription={settings?.footerDescription}
        footerInfoTitle={settings?.footerInfoTitle}
        footerInfoDescription={settings?.footerInfoDescription}
        contactEmail={settings?.contactEmail}
        contactPhone={settings?.contactPhone}
        addressStreet={settings?.addressStreet}
        addressPostalCode={settings?.addressPostalCode}
        addressCity={settings?.addressCity}
        copyrightText={settings?.copyrightText}
      />
    </div>
  );
}
