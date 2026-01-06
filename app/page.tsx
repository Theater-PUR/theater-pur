import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight, Users, Calendar, Award } from "lucide-react";
import { Hero } from "@/components/Hero";
import { PlayCard } from "@/components/PlayCard";
import { NewsCard } from "@/components/NewsCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { getHomePageData } from "@/lib/sanity-data";
import { urlFor } from "@/sanity/lib/image";
import type { HomePageData } from "@/lib/sanity-data";
import type { StatItem, SanityBlock, Performance } from "@/types/sanity";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  calendar: Calendar,
  users: Users,
  award: Award,
};

const portableTextToPlain = (blocks?: SanityBlock[]) =>
  blocks
    ?.map((block) => block.children?.map((child) => child.text).join(""))
    .join("\n\n") ?? "";

const formatPerformance = (performance?: Performance) => {
  if (!performance) return undefined;
  const date = performance.date
    ? new Intl.DateTimeFormat("de-DE", { dateStyle: "long" }).format(
        new Date(performance.date)
      )
    : undefined;
  const time = performance.time ? `, ${performance.time}` : "";
  const location =
    performance.location?.name ||
    [performance.location?.city, performance.location?.street]
      .filter(Boolean)
      .join(" • ") ||
    undefined;

  return {
    date: date ? `${date}${time}` : undefined,
    location,
  };
};

const mapStats = (stats?: StatItem[]) =>
  stats?.map((stat, index) => {
    const Icon = iconMap[stat.icon ?? ""] ?? Calendar;
    return { ...stat, Icon, key: `${stat.icon}-${index}` };
  }) ?? [];

const mapHomeData = (data: HomePageData) => {
  const play = data.currentPlay;
  const firstPerformance = play?.performances?.[0];
  const mappedPlay = play
    ? {
        slug: play.slug?.current ?? play._id,
        title: play.title,
        subtitle: play.author ? `von ${play.author}` : play.director,
        description: portableTextToPlain(play.description),
        coverImage: play.coverImage
          ? urlFor(play.coverImage).width(1000).height(750).url()
          : undefined,
        year: play.year,
        isActive: true,
        nextPerformance: formatPerformance(firstPerformance),
      }
    : null;

  const mappedNews =
    data.latestNews?.map((post) => ({
      slug: post.slug?.current ?? post._id,
      title: post.title,
      excerpt: post.excerpt,
      coverImage: post.coverImage
        ? urlFor(post.coverImage).width(800).height(450).url()
        : undefined,
      publishedAt: post.publishedAt
        ? new Intl.DateTimeFormat("de-DE", { dateStyle: "long" }).format(
            new Date(post.publishedAt)
          )
        : "",
      category: post.category,
    })) ?? [];

  const stats = mapStats(data.settings?.stats);

  return { mappedPlay, mappedNews, stats };
};

export default async function HomePage() {
  const data = await getHomePageData();
  const { settings } = data;
  const { mappedPlay, mappedNews, stats } = mapHomeData(data);

  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle={settings?.heroSubtitle}
        title={settings?.heroTitle || ""}
        description={settings?.heroDescription}
        backgroundImage={
          settings?.heroBackgroundImage
            ? urlFor(settings.heroBackgroundImage).width(1600).height(900).url()
            : undefined
        }
        ctaText={settings?.primaryCtaText}
        ctaLink={settings?.primaryCtaLink}
        secondaryCtaText={settings?.secondaryCtaText}
        secondaryCtaLink={settings?.secondaryCtaLink}
      />

      {/* Current Play Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle={settings?.currentPlaySectionSubtitle}
            title={settings?.currentPlaySectionTitle || ""}
            description={settings?.currentPlaySectionDescription}
          />
          <div className="max-w-5xl mx-auto">
            {mappedPlay ? (
              <PlayCard play={mappedPlay} variant="featured" />
            ) : (
              <div className="text-center text-muted-foreground">
                Wir arbeiten bereits mit Hochdruck an einem neuen Stück, bleibt
                gespannt!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {stats.length > 0 && (
        <section className="py-16 bg-stage border-y border-border/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.key}
                  className="text-center p-8 rounded-lg bg-card/50 border border-border/30"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.Icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-display text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* News Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              subtitle={settings?.newsSectionSubtitle}
              title={settings?.newsSectionTitle || ""}
              align="left"
              className="mb-0"
            />
            <Button
              asChild
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
            >
              <Link href="/neuigkeiten">
                Alle Neuigkeiten
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mappedNews.length > 0 ? (
              mappedNews.map((post) => <NewsCard key={post.slug} post={post} />)
            ) : (
              <div className="text-muted-foreground">
                Keine Neuigkeiten vorhanden.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-spotlight-center relative overflow-hidden">
        <div className="absolute inset-0 bg-curtain-texture opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {settings?.joinCtaTitle}
            </h2>
            <p className="text-muted-foreground text-lg">
              {settings?.joinCtaDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="font-semibold shadow-gold">
                <Link href={settings?.joinCtaPrimaryLink || ""}>
                  {settings?.joinCtaPrimaryText}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/10"
              >
                <Link href={settings?.joinCtaSecondaryLink || ""}>
                  {settings?.joinCtaSecondaryText}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
