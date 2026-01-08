import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsPostBySlug, getSiteSettings } from "@/lib/sanity-data";
import { urlFor } from "@/sanity/lib/image";
import { PortableTextRenderer } from "@/lib/portableText";
import type { Metadata } from "next";

interface NewsDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getNewsPostBySlug(id);
  const settings = await getSiteSettings();

  if (!post) {
    return {
      title: `Neuigkeit nicht gefunden | ${settings?.brandName}`,
      description: "Die gesuchte Neuigkeit wurde nicht gefunden",
    };
  }

  // Use news cover image if available, otherwise fall back to site settings or logo
  const ogImageUrl = post.coverImage
    ? urlFor(post.coverImage).width(1200).height(630).url()
    : settings?.ogImage
      ? urlFor(settings.ogImage).width(1200).height(630).url()
      : "/logo.png";

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const absoluteOgImageUrl = ogImageUrl.startsWith("http")
    ? ogImageUrl
    : `${siteUrl}${ogImageUrl}`;

  const description =
    post.excerpt || `${post.title} - Neuigkeiten von ${settings?.brandName}`;

  return {
    title: `${post.title} | Neuigkeiten | ${settings?.brandName}`,
    description: description.substring(0, 160),
    openGraph: {
      type: "article",
      locale: "de_DE",
      url: `${siteUrl}/neuigkeiten/${id}`,
      siteName: settings?.brandName,
      title: post.title,
      description: description.substring(0, 160),
      images: [
        {
          url: absoluteOgImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: description.substring(0, 160),
      images: [absoluteOgImageUrl],
    },
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params;
  const post = await getNewsPostBySlug(id);

  if (!post) {
    notFound();
  }

  const coverImageUrl = post.coverImage
    ? urlFor(post.coverImage).width(1200).height(600).url()
    : undefined;

  const publishedDate = post.publishedAt
    ? new Intl.DateTimeFormat("de-DE", { dateStyle: "long" }).format(
        new Date(post.publishedAt)
      )
    : "";

  return (
    <>
      {/* Hero */}
      <section
        className={`relative flex items-end overflow-hidden ${coverImageUrl ? "min-h-[50vh]" : "pt-32"}`}
      >
        {coverImageUrl && (
          <>
            <div className="absolute inset-0">
              <img
                src={coverImageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>
          </>
        )}
        <div
          className={`relative z-10 container mx-auto px-4 ${coverImageUrl ? "pb-12 pt-32" : "pb-8"}`}
        >
          <Button
            asChild
            variant="ghost"
            className="mb-4 -ml-4 text-muted-foreground hover:text-foreground"
          >
            <Link href="/neuigkeiten">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Alle Neuigkeiten
            </Link>
          </Button>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time>{publishedDate}</time>
            </div>
            {post.category && (
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                {post.category}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {post.excerpt && (
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {post.excerpt}
              </p>
            )}
            {post.content && post.content.length > 0 && (
              <div className="prose prose-invert prose-lg max-w-none">
                <PortableTextRenderer value={post.content} />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
