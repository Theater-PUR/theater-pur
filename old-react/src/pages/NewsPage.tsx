import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout";
import { SectionHeader } from "@/components/SectionHeader";
import { NewsCard, type NewsPost as NewsCardType } from "@/components/NewsCard";
import { Loader2, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAllNews, useNewsBySlug } from "@/hooks/useSanity";
import { isSanityConfigured, urlFor } from "@/lib/sanity";
import { renderBlockContent } from "@/lib/blockContent";
import { format } from "date-fns";
import { de } from "date-fns/locale";

// Mock data - used when Sanity is not configured
const mockNewsPosts: NewsCardType[] = [
  {
    id: "proben-sommernachtstraum",
    title: "Die Proben laufen auf Hochtouren",
    excerpt:
      "Unser Ensemble bereitet sich intensiv auf die Premiere von 'Ein Sommernachtstraum' vor. Ein Blick hinter die Kulissen zeigt die Leidenschaft und Hingabe unserer Schauspieler. Wochenlange Arbeit an Choreografie, Text und Bühnenbild zahlen sich aus.",
    coverImage: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80",
    publishedAt: "5. Januar 2025",
    category: "Backstage",
  },
  {
    id: "neue-mitglieder-2024",
    title: "Neue Gesichter im Ensemble",
    excerpt:
      "Wir freuen uns, drei neue talentierte Schauspieler in unserer Theatergruppe begrüßen zu dürfen. Mit frischen Ideen und viel Enthusiasmus bereichern sie unser Team.",
    coverImage: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&q=80",
    publishedAt: "20. Dezember 2024",
    category: "Team",
  },
  {
    id: "ruckblick-weihnachtsfeier",
    title: "Rückblick: Unsere Weihnachtsfeier",
    excerpt:
      "Ein wundervoller Abend mit dem gesamten Team, Freunden und Unterstützern des Theaters. Wir blicken auf ein erfolgreiches Jahr zurück und freuen uns auf 2025.",
    coverImage: "https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=800&q=80",
    publishedAt: "15. Dezember 2024",
    category: "Events",
  },
  {
    id: "stueck-ankuendigung-2025",
    title: "Stückankündigung: Ein Sommernachtstraum",
    excerpt:
      "Es ist offiziell! Unser nächstes Stück wird Shakespeares zeitlose Komödie 'Ein Sommernachtstraum'. Die Premiere ist für Februar 2025 geplant.",
    coverImage: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
    publishedAt: "1. November 2024",
    category: "Ankündigung",
  },
  {
    id: "workshop-jugendtheater",
    title: "Theaterworkshop für Jugendliche",
    excerpt:
      "Im Oktober veranstalteten wir einen Theaterworkshop für Jugendliche aus der Region. Die Begeisterung war groß und wir planen weitere Termine.",
    coverImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    publishedAt: "25. Oktober 2024",
    category: "Workshop",
  },
  {
    id: "derniere-zerbrochener-krug",
    title: "Dernière: Der zerbrochene Krug",
    excerpt:
      "Mit Standing Ovations endete unsere erfolgreiche Spielzeit von 'Der zerbrochene Krug'. Wir danken allen Besuchern für ihre Unterstützung.",
    coverImage: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
    publishedAt: "15. September 2024",
    category: "Aufführung",
  },
];

function NewsListView() {
  const { data: sanityNews, isLoading } = useAllNews();
  const isConfigured = isSanityConfigured();

  const newsPosts: NewsCardType[] =
    sanityNews && sanityNews.length > 0
      ? sanityNews.map((post) => ({
          id: post.slug.current,
          title: post.title,
          excerpt: post.excerpt,
          coverImage: post.coverImage ? urlFor(post.coverImage).width(800).url() : undefined,
          publishedAt: format(new Date(post.publishedAt), "d. MMMM yyyy", { locale: de }),
          category: post.category,
        }))
      : isConfigured
        ? []
        : mockNewsPosts;

  const [featuredPost, ...otherPosts] = newsPosts;

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-spotlight-top">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Aktuelles"
            title="Neuigkeiten"
            description="Bleiben Sie auf dem Laufenden über unsere Aktivitäten, kommende Veranstaltungen und Blicke hinter die Kulissen."
          />
        </div>
      </section>

      {isLoading ? (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </section>
      ) : newsPosts.length > 0 ? (
        <>
          {/* Featured Post */}
          <section className="py-8 bg-background">
            <div className="container mx-auto px-4">
              <NewsCard post={featuredPost} variant="featured" />
            </div>
          </section>

          {/* Other Posts */}
          {otherPosts.length > 0 && (
            <section className="py-16 bg-background">
              <div className="container mx-auto px-4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherPosts.map((post) => (
                    <NewsCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-lg">Noch keine Neuigkeiten vorhanden.</p>
          </div>
        </section>
      )}
    </>
  );
}

function NewsDetailView({ slug }: { slug: string }) {
  const { data: post, isLoading } = useNewsBySlug(slug);
  const isConfigured = isSanityConfigured();

  // Use mock data if not configured
  const mockPost = !isConfigured ? mockNewsPosts.find((p) => p.id === slug) : null;

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!post && !mockPost) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-foreground mb-2">
            Artikel nicht gefunden
          </h1>
          <p className="text-muted-foreground mb-4">
            Der gesuchte Artikel konnte nicht gefunden werden.
          </p>
          <Button asChild variant="outline">
            <Link to="/neuigkeiten">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Übersicht
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const title = post?.title || mockPost?.title || "";
  const coverImage = post?.coverImage
    ? urlFor(post.coverImage).width(1200).url()
    : mockPost?.coverImage;
  const publishedAt = post?.publishedAt
    ? format(new Date(post.publishedAt), "d. MMMM yyyy", { locale: de })
    : mockPost?.publishedAt || "";
  const category = post?.category || mockPost?.category;
  const content = post?.content;
  const excerpt = mockPost?.excerpt;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        {coverImage && (
          <>
            <div className="absolute inset-0">
              <img
                src={coverImage}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>
          </>
        )}
        <div className="relative z-10 container mx-auto px-4 pb-12 pt-32">
          <Button asChild variant="ghost" className="mb-4 -ml-4 text-muted-foreground hover:text-foreground">
            <Link to="/neuigkeiten">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Alle Neuigkeiten
            </Link>
          </Button>
          {category && (
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full mb-4">
              {category}
            </span>
          )}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <time>{publishedAt}</time>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
            {content ? (
              renderBlockContent(content)
            ) : excerpt ? (
              <p className="text-muted-foreground leading-relaxed">{excerpt}</p>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}

export default function NewsPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <Layout>
      {id ? <NewsDetailView slug={id} /> : <NewsListView />}
    </Layout>
  );
}
