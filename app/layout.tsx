import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import { getSiteSettings } from "@/lib/sanity-data";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity/visual-editing";
import { urlFor } from "@/sanity/lib/image";

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
  const settings = await getSiteSettings();

  // Generate OG image URL - use CMS image if available, otherwise fallback to logo
  const ogImageUrl = settings?.ogImage
    ? urlFor(settings.ogImage).width(1200).height(630).url()
    : "/logo.png";

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const absoluteOgImageUrl = ogImageUrl.startsWith("http")
    ? ogImageUrl
    : `${siteUrl}${ogImageUrl}`;

  return {
    title: settings?.title,
    description: settings?.description,
    icons: {
      icon: "/favicon-32x32.png",
      apple: "/favicon-32x32.png",
    },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: siteUrl,
      siteName: settings?.brandName,
      title: settings?.title,
      description: settings?.description,
      images: [
        {
          url: absoluteOgImageUrl,
          width: 1200,
          height: 630,
          alt: settings?.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: settings?.title,
      description: settings?.description,
      images: [absoluteOgImageUrl],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="de" className="dark">
      <head>
        <script src="https://fienta.com/embed.js" async defer />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background`}
      >
        {children}

        <SanityLive />
        {isDraftMode && <VisualEditing />}

        <Toaster />
        <Sonner />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
