import { Layout } from "@/components/layout";
import { SectionHeader } from "@/components/SectionHeader";
import { NewsCard, type NewsPost } from "@/components/NewsCard";

// Mock data - used instead of CMS for now
const mockNewsPosts: NewsPost[] = [
  {
    slug: "proben-sommernachtstraum",
    title: "Die Proben laufen auf Hochtouren",
    excerpt:
      'Unser Ensemble bereitet sich intensiv auf die Premiere von "Ein Sommernachtstraum" vor. Ein Blick hinter die Kulissen zeigt die Leidenschaft und Hingabe unserer Schauspieler. Wochenlange Arbeit an Choreografie, Text und Bühnenbild zahlen sich aus.',
    coverImage:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80",
    publishedAt: "5. Januar 2025",
    category: "Backstage",
  },
  {
    slug: "neue-mitglieder-2024",
    title: "Neue Gesichter im Ensemble",
    excerpt:
      "Wir freuen uns, drei neue talentierte Schauspieler in unserer Theatergruppe begrüßen zu dürfen. Mit frischen Ideen und viel Enthusiasmus bereichern sie unser Team.",
    coverImage:
      "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&q=80",
    publishedAt: "20. Dezember 2024",
    category: "Team",
  },
  {
    slug: "ruckblick-weihnachtsfeier",
    title: "Rückblick: Unsere Weihnachtsfeier",
    excerpt:
      "Ein wundervoller Abend mit dem gesamten Team, Freunden und Unterstützern des Theaters. Wir blicken auf ein erfolgreiches Jahr zurück und freuen uns auf 2025.",
    coverImage:
      "https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=800&q=80",
    publishedAt: "15. Dezember 2024",
    category: "Events",
  },
  {
    slug: "stueck-ankuendigung-2025",
    title: "Stückankündigung: Ein Sommernachtstraum",
    excerpt:
      'Es ist offiziell! Unser nächstes Stück wird Shakespeares zeitlose Komödie "Ein Sommernachtstraum". Die Premiere ist für Februar 2025 geplant.',
    coverImage:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80",
    publishedAt: "1. November 2024",
    category: "Ankündigung",
  },
  {
    slug: "workshop-jugendtheater",
    title: "Theaterworkshop für Jugendliche",
    excerpt:
      "Im Oktober veranstalteten wir einen Theaterworkshop für Jugendliche aus der Region. Die Begeisterung war groß und wir planen weitere Termine.",
    coverImage:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    publishedAt: "25. Oktober 2024",
    category: "Workshop",
  },
  {
    slug: "derniere-zerbrochener-krug",
    title: "Dernière: Der zerbrochene Krug",
    excerpt:
      'Mit Standing Ovations endete unsere erfolgreiche Spielzeit von "Der zerbrochene Krug". Wir danken allen Besuchern für ihre Unterstützung.',
    coverImage:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80",
    publishedAt: "15. September 2024",
    category: "Aufführung",
  },
];

export default function NewsPage() {
  const newsPosts: NewsPost[] = mockNewsPosts;
  const [featuredPost, ...otherPosts] = newsPosts;

  return (
    <Layout>
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

      {newsPosts.length > 0 ? (
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
                    <NewsCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-lg">
              Noch keine Neuigkeiten vorhanden.
            </p>
          </div>
        </section>
      )}
    </Layout>
  );
}
