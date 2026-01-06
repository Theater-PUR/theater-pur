import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppShell } from "@/components/layout/AppShell";
import { getSiteSettings } from "@/lib/sanity-data";

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

const defaultTitle = "Theaterpur Weyhe - Leidenschaft für Theater";
const defaultDescription =
  "Erleben Sie unvergessliche Theatermomente. Leidenschaft, Kunst und Gemeinschaft vereint auf einer Bühne.";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: settings?.title ?? defaultTitle,
    description: settings?.description ?? defaultDescription,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html lang="de" className="dark">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-background`}>
        <TooltipProvider>
          <AppShell settings={settings}>{children}</AppShell>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </body>
    </html>
  );
}
