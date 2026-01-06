import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppShell } from "@/components/layout/AppShell";
import { DraftModeIndicator } from "@/components/layout/DraftModeIndicator";
import { getSiteSettings } from "@/lib/sanity-data";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity/visual-editing";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings({ stega: false });
  return {
    title: settings?.title,
    description: settings?.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="de" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background`}
      >
        {isDraftMode && <DraftModeIndicator />}
        <TooltipProvider>
          <AppShell settings={settings} isDraftMode={isDraftMode}>
            {children}
          </AppShell>
          <Toaster />
          <Sonner />
        </TooltipProvider>
        <SanityLive />
        {isDraftMode && <VisualEditing />}
      </body>
    </html>
  );
}
