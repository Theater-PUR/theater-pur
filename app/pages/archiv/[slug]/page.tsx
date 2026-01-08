import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ArrowLeft } from "lucide-react";
import { getPlayBySlug, getSiteSettings } from "@/lib/sanity-data";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ImageGallery } from "@/components/ImageGallery";
import { PortableTextRenderer, portableTextToPlain } from "@/lib/portableText";
import type { Metadata } from "next";

interface ArchivePlayPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ArchivePlayPageProps): Promise<Metadata> {
  const { slug } = await params;
  const play = await getPlayBySlug(slug);
  const settings = await getSiteSettings();

  if (!play) {
    return {
      title: `Stück nicht gefunden | ${settings?.brandName}`,
      description: "Das gesuchte Theaterstück wurde nicht gefunden",
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
    `${play.title} - ${play.year}`;

  const title = play.author
    ? `${play.title} von ${play.author} (${play.year})`
    : `${play.title} (${play.year})`;

  return {
    title: `${title} | ${settings?.brandName}`,
    description: description.substring(0, 160),
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: `${siteUrl}/archiv/${slug}`,
      siteName: settings?.brandName,
      title: `${title} | ${settings?.brandName}`,
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
      title: `${title} | ${settings?.brandName}`,
      description: description.substring(0, 160),
      images: [absoluteOgImageUrl],
    },
  };
}

export default async function ArchivePlayPage({
  params,
}: ArchivePlayPageProps) {
  const { slug } = await params;
  const play = await getPlayBySlug(slug);

  if (!play) {
    notFound();
  }

  // Use synopsis for detail page if available, otherwise fall back to description
  const description = play.synopsis || play.description;

  const coverImageUrl = play.coverImage
    ? urlFor(play.coverImage).width(1200).height(800).url()
    : undefined;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        {coverImageUrl && (
          <div className="absolute inset-0">
            <Image
              src={coverImageUrl}
              alt={play.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
        )}
        <div className="relative z-10 container mx-auto px-4 pb-12 pt-32">
          <Button
            asChild
            variant="ghost"
            className="mb-4 -ml-4 text-muted-foreground hover:text-foreground"
          >
            <Link href="/archiv">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zum Archiv
            </Link>
          </Button>
          <Badge className="mb-4 bg-muted text-muted-foreground">
            Archiv {play.year}
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-3">
            {play.title}
          </h1>
          {play.author && (
            <p className="text-xl text-primary font-medium mb-4">
              von {play.author}
            </p>
          )}
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            {play.duration && (
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                {play.duration}
              </span>
            )}
            {play.director && (
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Regie: {play.director}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              {description && description.length > 0 && (
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Über das Stück
                  </h2>
                  <div className="prose prose-invert prose-lg max-w-none">
                    <PortableTextRenderer value={description} />
                  </div>
                </section>
              )}

              {/* Cast */}
              {play.cast && play.cast.length > 0 && (
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Besetzung
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {play.cast.map((member) => (
                      <div
                        key={member._key}
                        className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {member.actorName}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {member.roleName}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Gallery */}
              {play.gallery && play.gallery.length > 0 && (
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Impressionen
                  </h2>
                  <ImageGallery
                    images={play.gallery
                      .filter((image) => image.asset)
                      .map((image) => ({
                        url: urlFor(image).width(1200).height(800).url(),
                        alt: image.alt,
                        caption: image.caption,
                      }))}
                  />
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Info Card */}
                <div className="p-6 rounded-lg bg-card border border-border/50">
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    Produktion {play.year}
                  </h3>
                  <div className="space-y-3 text-sm">
                    {play.author && (
                      <div>
                        <p className="text-muted-foreground mb-1">Autor</p>
                        <p className="font-medium text-foreground">
                          {play.author}
                        </p>
                      </div>
                    )}
                    {play.director && (
                      <div>
                        <p className="text-muted-foreground mb-1">Regie</p>
                        <p className="font-medium text-foreground">
                          {play.director}
                        </p>
                      </div>
                    )}
                    {play.duration && (
                      <div>
                        <p className="text-muted-foreground mb-1">Dauer</p>
                        <p className="font-medium text-foreground">
                          {play.duration}
                        </p>
                      </div>
                    )}
                    {play.cast && play.cast.length > 0 && (
                      <div>
                        <p className="text-muted-foreground mb-1">Ensemble</p>
                        <p className="font-medium text-foreground">
                          {play.cast.length} Darsteller
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
