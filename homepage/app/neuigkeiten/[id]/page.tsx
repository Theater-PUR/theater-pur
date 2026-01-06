import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data - used instead of CMS for now
const mockNewsPosts = [
  {
    id: "proben-sommernachtstraum",
    title: "Die Proben laufen auf Hochtouren",
    excerpt:
      'Unser Ensemble bereitet sich intensiv auf die Premiere von "Ein Sommernachtstraum" vor. Ein Blick hinter die Kulissen zeigt die Leidenschaft und Hingabe unserer Schauspieler. Wochenlange Arbeit an Choreografie, Text und Bühnenbild zahlen sich aus.',
    coverImage:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80",
    publishedAt: "5. Januar 2025",
    category: "Backstage",
  },
  {
    id: "neue-mitglieder-2024",
    title: "Neue Gesichter im Ensemble",
    excerpt:
      "Wir freuen uns, drei neue talentierte Schauspieler in unserer Theatergruppe begrüßen zu dürfen. Mit frischen Ideen und viel Enthusiasmus bereichern sie unser Team.",
    coverImage:
      "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&q=80",
    publishedAt: "20. Dezember 2024",
    category: "Team",
  },
  {
    id: "ruckblick-weihnachtsfeier",
    title: "Rückblick: Unsere Weihnachtsfeier",
    excerpt:
      "Ein wundervoller Abend mit dem gesamten Team, Freunden und Unterstützern des Theaters. Wir blicken auf ein erfolgreiches Jahr zurück und freuen uns auf 2025.",
    coverImage:
      "https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=800&q=80",
    publishedAt: "15. Dezember 2024",
    category: "Events",
  },
  {
    id: "stueck-ankuendigung-2025",
    title: "Stückankündigung: Ein Sommernachtstraum",
    excerpt:
      'Es ist offiziell! Unser nächstes Stück wird Shakespeares zeitlose Komödie "Ein Sommernachtstraum". Die Premiere ist für Februar 2025 geplant.',
    coverImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
    publishedAt: "1. November 2024",
    category: "Ankündigung",
  },
  {
    id: "workshop-jugendtheater",
    title: "Theaterworkshop für Jugendliche",
    excerpt:
      "Im Oktober veranstalteten wir einen Theaterworkshop für Jugendliche aus der Region. Die Begeisterung war groß und wir planen weitere Termine.",
    coverImage:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    publishedAt: "25. Oktober 2024",
    category: "Workshop",
  },
  {
    id: "derniere-zerbrochener-krug",
    title: "Dernière: Der zerbrochene Krug",
    excerpt:
      'Mit Standing Ovations endete unsere erfolgreiche Spielzeit von "Der zerbrochene Krug". Wir danken allen Besuchern für ihre Unterstützung.',
    coverImage:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
    publishedAt: "15. September 2024",
    category: "Aufführung",
  },
];

interface NewsDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params;
  const post = mockNewsPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        {post.coverImage && (
          <>
            <div className="absolute inset-0">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>
          </>
        )}
        <div className="relative z-10 container mx-auto px-4 pb-12 pt-32">
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
          {post.category && (
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full mb-4">
              {post.category}
            </span>
          )}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <time>{post.publishedAt}</time>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
            <p className="text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
