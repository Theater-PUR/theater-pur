import { getCurrentPlay, getSiteSettings } from "@/lib/sanity-data";
import { urlFor } from "@/sanity/lib/image";
import {
  EmptyState,
  PlayHero,
  PlayDescription,
  PlayCast,
  PlayGallery,
  PlayEvents,
  PlayBookingSidebar,
} from "./components";
import type { Metadata } from "next";
import { portableTextToPlain } from "@/lib/portableText";

export async function generateMetadata(): Promise<Metadata> {
  const play = await getCurrentPlay();
  const settings = await getSiteSettings();

  if (!play) {
    return {
      title: `Aktuelles Stück | ${settings?.brandName}`,
      description: settings?.currentPlaySectionDescription,
    };
  }

  // Use play cover image if available, otherwise fall back to site settings or logo
  const ogImageUrl = play.coverImage
    ? urlFor(play.coverImage).width(1200).height(630).url()
    : settings?.ogImage
      ? urlFor(settings.ogImage).width(1200).height(630).url()
      : "/logo.png";

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const absoluteOgImageUrl = ogImageUrl.startsWith("http")
    ? ogImageUrl
    : `${siteUrl}${ogImageUrl}`;

  const description =
    portableTextToPlain(play.synopsis) ||
    portableTextToPlain(play.description) ||
    `${play.title} - Unser aktuelles Theaterstück`;

  return {
    title: `${play.title} | Aktuell bei ${settings?.brandName}`,
    description: description.substring(0, 160),
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: `${siteUrl}/aktuell`,
      siteName: settings?.brandName,
      title: `${play.title} - Aktuell bei ${settings?.brandName}`,
      description: description.substring(0, 160),
      images: [
        {
          url: absoluteOgImageUrl,
          width: 1200,
          height: 630,
          alt: play.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${play.title} - Aktuell bei ${settings?.brandName}`,
      description: description.substring(0, 160),
      images: [absoluteOgImageUrl],
    },
  };
}
export default async function CurrentPlayPage() {
  const play = await getCurrentPlay();

  if (!play) {
    return <EmptyState />;
  }

  // Use synopsis for detail page if available, otherwise fall back to description
  const description = play.synopsis || play.description;

  const coverImageUrl = play.coverImage
    ? urlFor(play.coverImage).width(1200).height(800).url()
    : undefined;

  return (
    <>
      <PlayHero play={play} coverImageUrl={coverImageUrl} />

      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <PlayDescription description={description} />
              <PlayCast cast={play.cast || []} />
              <PlayGallery gallery={play.gallery || []} />
              <PlayEvents events={play.events} playTitle={play.title} />
            </div>

            {/* Sidebar */}
            <PlayBookingSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
