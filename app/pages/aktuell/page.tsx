import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Euro, Users, ArrowRight } from "lucide-react";
import { getCurrentPlay } from "@/lib/sanity-data";
import { urlFor } from "@/sanity/lib/image";
import type { SanityBlock } from "@/types/sanity";
import { ImageGallery } from "@/components/ImageGallery";

const portableTextToPlain = (blocks?: SanityBlock[]) =>
  blocks
    ?.map((block) => block.children?.map((child) => child.text).join(""))
    .join("\n\n") ?? "";

export default async function CurrentPlayPage() {
  const play = await getCurrentPlay();

  if (!play) {
    return (
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">
            Aktuell kein Stück
          </h1>
          <p className="text-muted-foreground text-lg">
            Wir arbeiten bereits mit Hochdruck an einem neuen Stück, bleibt
            gespannt!
          </p>
        </div>
      </section>
    );
  }

  // Use synopsis for detail page if available, otherwise fall back to description
  const description = portableTextToPlain(play.synopsis || play.description);

  const coverImageUrl = play.coverImage
    ? urlFor(play.coverImage).width(1200).height(800).url()
    : undefined;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        {coverImageUrl && (
          <div className="absolute inset-0">
            <img
              src={coverImageUrl}
              alt={play.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
        )}
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            Jetzt Spielend
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
              {description && (
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Über das Stück
                  </h2>
                  <div className="prose prose-invert prose-lg max-w-none">
                    {description.split("\n\n").map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-muted-foreground leading-relaxed mb-4"
                      >
                        {paragraph}
                      </p>
                    ))}
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

              {/* Performances */}
              {play.performances && play.performances.length > 0 && (
                <section>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Aufführungstermine
                  </h2>
                  <div className="space-y-4">
                    {play.performances.map((performance) => {
                      const date = performance.date
                        ? new Intl.DateTimeFormat("de-DE", {
                            dateStyle: "long",
                          }).format(new Date(performance.date))
                        : "";
                      const locationName =
                        performance.location?.name ||
                        performance.location?.city ||
                        "Kein Ort angegeben";
                      const address = [
                        performance.location?.street,
                        [
                          performance.location?.postalCode,
                          performance.location?.city,
                        ]
                          .filter(Boolean)
                          .join(" "),
                      ]
                        .filter(Boolean)
                        .join(", ");

                      return (
                        <div
                          key={performance._key}
                          className="p-6 rounded-lg bg-card border border-border/50 flex flex-col md:flex-row md:items-center justify-between gap-4"
                        >
                          <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-4">
                              <span className="flex items-center gap-2 font-semibold text-foreground">
                                <Calendar className="w-4 h-4 text-primary" />
                                {date}
                              </span>
                              {performance.time && (
                                <span className="flex items-center gap-2 text-muted-foreground">
                                  <Clock className="w-4 h-4" />
                                  {performance.time}
                                </span>
                              )}
                            </div>
                            <div className="flex items-start gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-medium text-foreground">
                                  {locationName}
                                </p>
                                {address && (
                                  <p className="text-sm">{address}</p>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            {(performance.availableSeats ?? 0) > 0 ? (
                              <>
                                <span className="text-sm text-muted-foreground">
                                  {performance.availableSeats} Plätze frei
                                </span>
                                {performance.bookingUrl ? (
                                  <Button asChild className="font-semibold">
                                    <a
                                      href={performance.bookingUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Tickets buchen
                                      <ArrowRight className="w-4 h-4 ml-2" />
                                    </a>
                                  </Button>
                                ) : (
                                  <Button className="font-semibold" disabled>
                                    Tickets
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                  </Button>
                                )}
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
                      );
                    })}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Pricing Card */}
                {play.pricing && play.pricing.length > 0 && (
                  <div className="p-6 rounded-lg bg-card border border-border/50">
                    <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Euro className="w-5 h-5 text-primary" />
                      Eintrittspreise
                    </h3>
                    <div className="space-y-3">
                      {play.pricing.map((tier) => (
                        <div
                          key={tier._key}
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
                    Wählen Sie oben einen Termin aus und klicken Sie auf
                    &quot;Tickets buchen&quot; um Ihre Karten online zu
                    reservieren.
                  </p>
                  <p className="text-xs text-muted-foreground mt-3">
                    Buchung über Fienta.com - Bezahlung per Überweisung, Giropay
                    oder Kreditkarte
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
