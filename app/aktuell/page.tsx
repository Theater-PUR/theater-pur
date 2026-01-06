import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Euro, Users, ArrowRight } from "lucide-react";

// Mock data - used instead of CMS for now
const mockCurrentPlay = {
  id: "ein-sommernachtstraum-2024",
  title: "Ein Sommernachtstraum",
  author: "William Shakespeare",
  director: "Maria Schmidt",
  description: `Tauchen Sie ein in die magische Welt der Feen und Liebenden. Diese zeitlose Komödie entführt Sie in einen verzauberten Wald, wo nichts ist, wie es scheint.

In Athen herrscht Aufruhr: Hermia soll Demetrius heiraten, liebt aber Lysander. Als die Liebenden in den Wald fliehen, geraten sie in den Bann des Feenkönigs Oberon und seines schelmischen Dieners Puck. Ein Zauber führt zu allerlei Verwirrungen, während die Handwerker um Zettel eine Theateraufführung für die Hochzeit des Herzogs proben.

Eine Nacht voller Verwirrung, Zauber und am Ende wahrer Liebe erwartet Sie.`,
  coverImage:
    "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1200&q=80",
  isActive: true,
  duration: "ca. 2 Stunden (inkl. Pause)",
  cast: [
    { actor: "Thomas Müller", role: "Oberon, König der Feen" },
    { actor: "Anna Weber", role: "Titania, Königin der Feen" },
    { actor: "Felix Braun", role: "Puck" },
    { actor: "Laura Schmidt", role: "Hermia" },
    { actor: "Max Fischer", role: "Lysander" },
    { actor: "Sophie Hoffmann", role: "Helena" },
    { actor: "Jan Becker", role: "Demetrius" },
    { actor: "Klaus Werner", role: "Zettel" },
    { actor: "Peter Schulz", role: "Herzog Theseus" },
    { actor: "Emma König", role: "Hippolyta" },
  ],
  performances: [
    {
      id: "1",
      date: "15. Februar 2025",
      time: "19:30 Uhr",
      location: "Kulturzentrum Weyhe",
      address: "Hauptstraße 45, 28844 Weyhe",
      availableSeats: 45,
      totalSeats: 120,
    },
    {
      id: "2",
      date: "16. Februar 2025",
      time: "15:00 Uhr",
      location: "Kulturzentrum Weyhe",
      address: "Hauptstraße 45, 28844 Weyhe",
      availableSeats: 78,
      totalSeats: 120,
    },
    {
      id: "3",
      date: "22. Februar 2025",
      time: "19:30 Uhr",
      location: "Gemeindehaus Leeste",
      address: "Kirchstraße 12, 28844 Weyhe",
      availableSeats: 12,
      totalSeats: 80,
    },
    {
      id: "4",
      date: "23. Februar 2025",
      time: "19:30 Uhr",
      location: "Gemeindehaus Leeste",
      address: "Kirchstraße 12, 28844 Weyhe",
      availableSeats: 0,
      totalSeats: 80,
    },
  ],
  pricing: [
    { category: "Normal", price: 12 },
    {
      category: "Ermäßigt",
      description: "Schüler, Studenten, Schwerbehinderte",
      price: 8,
    },
    { category: "Kinder", description: "bis 12 Jahre", price: 5 },
    {
      category: "Familienkarte",
      description: "2 Erwachsene + 2 Kinder",
      price: 30,
    },
  ],
};

export default function CurrentPlayPage() {
  const playData = mockCurrentPlay;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={playData.coverImage}
            alt={playData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            Jetzt Spielend
          </Badge>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-3">
            {playData.title}
          </h1>
          {playData.author && (
            <p className="text-xl text-primary font-medium mb-4">
              von {playData.author}
            </p>
          )}
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              {playData.duration}
            </span>
            {playData.director && (
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Regie: {playData.director}
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
              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Über das Stück
                </h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  {playData.description
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-muted-foreground leading-relaxed mb-4"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              </section>

              {/* Cast */}
              {playData.cast.length > 0 && (
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Besetzung
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {playData.cast.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border/50"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {member.actor}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Performances */}
              {playData.performances.length > 0 && (
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Aufführungstermine
                  </h2>
                  <div className="space-y-4">
                    {playData.performances.map((performance) => (
                      <div
                        key={performance.id}
                        className="p-6 rounded-lg bg-card border border-border/50 flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-4">
                            <span className="flex items-center gap-2 font-semibold text-foreground">
                              <Calendar className="w-4 h-4 text-primary" />
                              {performance.date}
                            </span>
                            <span className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {performance.time}
                            </span>
                          </div>
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-foreground">
                                {performance.location}
                              </p>
                              {performance.address && (
                                <p className="text-sm">{performance.address}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          {performance.availableSeats > 0 ? (
                            <>
                              <span className="text-sm text-muted-foreground">
                                {performance.availableSeats} Plätze frei
                              </span>
                              <Button className="font-semibold">
                                Tickets
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </>
                          ) : (
                            <Badge
                              variant="secondary"
                              className="bg-destructive/20 text-destructive"
                            >
                              Ausverkauft
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Pricing Card */}
                {playData.pricing.length > 0 && (
                  <div className="p-6 rounded-lg bg-card border border-border/50">
                    <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Euro className="w-5 h-5 text-primary" />
                      Eintrittspreise
                    </h3>
                    <div className="space-y-3">
                      {playData.pricing.map((tier, index) => (
                        <div
                          key={index}
                          className="flex items-start justify-between py-3 border-b border-border/30 last:border-0"
                        >
                          <div>
                            <p className="font-medium text-foreground">
                              {tier.category}
                            </p>
                            {tier.description && (
                              <p className="text-sm text-muted-foreground">
                                {tier.description}
                              </p>
                            )}
                          </div>
                          <p className="font-bold text-primary text-lg">
                            {tier.price} €
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Book CTA */}
                <div className="p-6 rounded-lg bg-primary/10 border border-primary/30">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    Tickets sichern
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Wählen Sie oben einen Termin und buchen Sie Ihre Karten
                    online oder kontaktieren Sie uns telefonisch.
                  </p>
                  <Button className="w-full font-semibold shadow-gold">
                    Jetzt Buchen
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Bezahlung per Überweisung, Giropay oder Kreditkarte
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
