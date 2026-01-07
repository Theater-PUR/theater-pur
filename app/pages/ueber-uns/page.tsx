import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "./ContactForm";
import { Mail, MapPin, Phone, Theater, Heart, Users, Lightbulb, Laugh, Calendar } from "lucide-react";
import { getAboutPageData } from "@/lib/sanity-data";
import { urlFor } from "@/sanity/lib/image";
import { PortableTextRenderer } from "@/lib/portableText";

export default async function AboutPage() {
  const { settings, teamMembers } = await getAboutPageData();

  const stats = settings?.stats || [];
  const storyBlocks = settings?.aboutStory || [];
  const images = settings?.aboutImages || [];
  const highlights = settings?.aboutHighlights || [];

  // Default icon map for stats and highlights
  const iconMap: Record<string, any> = {
    calendar: Calendar,
    users: Users,
    award: Heart,
    theater: Theater,
    lightbulb: Lightbulb,
    "map-pin": MapPin,
    laugh: Laugh,
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-spotlight-top relative overflow-hidden">
        <div className="absolute inset-0 bg-curtain-texture opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            subtitle={settings?.aboutHeroSubtitle || "Über Uns"}
            title={settings?.aboutHeroTitle || "Theaterpur Weyhe"}
            description={
              settings?.aboutHeroDescription ||
              "Seit über 15 Jahren bringen wir Leidenschaft, Kunst und Gemeinschaft auf die Bühne."
            }
          />
        </div>
      </section>

      {/* Story */}
      {(storyBlocks.length > 0 || images.length > 0 || stats.length > 0) && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  {settings?.aboutStoryTitle || "Unsere Geschichte"}
                </h2>
                {storyBlocks.length > 0 ? (
                  <div className="prose prose-invert prose-lg max-w-none">
                    <PortableTextRenderer value={storyBlocks} />
                  </div>
                ) : (
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Was als kleine Gruppe theaterbegeisterter Freunde begann,
                      ist heute eine lebendige Gemeinschaft. Theaterpur Weyhe
                      wurde gegründet aus der Überzeugung, dass Theater Menschen
                      zusammenbringt und Geschichten erzählt, die berühren.
                    </p>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* Display images and stats */}
                {images.length > 0 ? (
                  <>
                    <div className="space-y-4">
                      {images[0] && (
                        <div className="aspect-[3/4] rounded-lg overflow-hidden">
                          <img
                            src={urlFor(images[0]).width(400).height(533).url()}
                            alt={images[0].alt || "Theater"}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      {stats[0] && (
                        <div className="aspect-square rounded-lg bg-primary/10 border border-primary/30 flex flex-col items-center justify-center p-6 text-center">
                          {(() => {
                            const Icon =
                              iconMap[stats[0].icon || ""] || Theater;
                            return (
                              <>
                                <Icon className="w-10 h-10 text-primary mb-3" />
                                <p className="font-display text-2xl font-bold text-foreground">
                                  {stats[0].value}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {stats[0].label}
                                </p>
                              </>
                            );
                          })()}
                        </div>
                      )}
                    </div>
                    <div className="space-y-4 pt-8">
                      {stats[1] && (
                        <div className="aspect-square rounded-lg bg-velvet/30 border border-velvet/50 flex flex-col items-center justify-center p-6 text-center">
                          {(() => {
                            const Icon = iconMap[stats[1].icon || ""] || Heart;
                            return (
                              <>
                                <Icon className="w-10 h-10 text-primary mb-3" />
                                <p className="font-display text-2xl font-bold text-foreground">
                                  {stats[1].value}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {stats[1].label}
                                </p>
                              </>
                            );
                          })()}
                        </div>
                      )}
                      {images[1] && (
                        <div className="aspect-[3/4] rounded-lg overflow-hidden">
                          <img
                            src={urlFor(images[1]).width(400).height(533).url()}
                            alt={images[1].alt || "Ensemble"}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  // Fallback to default layout if no images
                  <>
                    <div className="space-y-4">
                      <div className="aspect-[3/4] rounded-lg bg-muted" />
                      {stats[0] && (
                        <div className="aspect-square rounded-lg bg-primary/10 border border-primary/30 flex flex-col items-center justify-center p-6 text-center">
                          {(() => {
                            const Icon =
                              iconMap[stats[0].icon || ""] || Theater;
                            return (
                              <>
                                <Icon className="w-10 h-10 text-primary mb-3" />
                                <p className="font-display text-2xl font-bold text-foreground">
                                  {stats[0].value}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {stats[0].label}
                                </p>
                              </>
                            );
                          })()}
                        </div>
                      )}
                    </div>
                    <div className="space-y-4 pt-8">
                      {stats[1] && (
                        <div className="aspect-square rounded-lg bg-velvet/30 border border-velvet/50 flex flex-col items-center justify-center p-6 text-center">
                          {(() => {
                            const Icon = iconMap[stats[1].icon || ""] || Heart;
                            return (
                              <>
                                <Icon className="w-10 h-10 text-primary mb-3" />
                                <p className="font-display text-2xl font-bold text-foreground">
                                  {stats[1].value}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {stats[1].label}
                                </p>
                              </>
                            );
                          })()}
                        </div>
                      )}
                      <div className="aspect-[3/4] rounded-lg bg-muted" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Highlights */}
      {highlights.length > 0 && (
        <section className="py-20 bg-stage border-y border-border/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle="Was uns ausmacht"
              title="Unsere Besonderheiten"
              description="Theater Pur Weyhe ist mehr als nur Amateurtheater – wir sind eine kreative Gemeinschaft mit Leidenschaft für außergewöhnliche Inszenierungen."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => {
                const Icon = iconMap[highlight.icon || "theater"] || Theater;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Team */}
      {teamMembers.length > 0 && (
        <section className="py-20 bg-stage border-y border-border/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              subtitle={settings?.aboutTeamSubtitle || "Unser Team"}
              title={settings?.aboutTeamTitle || "Das Ensemble"}
              description={
                settings?.aboutTeamDescription ||
                "Die Menschen hinter den Kulissen und auf der Bühne."
              }
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {teamMembers.map((member) => {
                const photoUrl = member.photo
                  ? urlFor(member.photo).width(300).height(300).url()
                  : undefined;

                return (
                  <div key={member._id} className="text-center group">
                    <div className="aspect-square rounded-lg overflow-hidden mb-4 border border-border/50 group-hover:border-primary/50 transition-colors">
                      {photoUrl ? (
                        <img
                          src={photoUrl}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <Users className="w-12 h-12 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-display font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
                <Users className="w-4 h-4" />
                und viele weitere engagierte Mitglieder
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="kontakt" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionHeader
                subtitle={settings?.aboutContactSubtitle || "Kontakt"}
                title={settings?.aboutContactTitle || "Schreiben Sie uns"}
                description={
                  settings?.aboutContactDescription ||
                  "Haben Sie Fragen, möchten mitmachen oder einfach Hallo sagen? Wir freuen uns auf Ihre Nachricht!"
                }
                align="left"
              />
              <div className="space-y-6">
                {settings?.addressStreet && (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Adresse
                      </h4>
                      <p className="text-muted-foreground">
                        {settings.addressStreet}
                        <br />
                        {settings.addressPostalCode} {settings.addressCity}
                      </p>
                    </div>
                  </div>
                )}
                {settings?.contactEmail && (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        E-Mail
                      </h4>
                      <a
                        href={`mailto:${settings.contactEmail}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {settings.contactEmail}
                      </a>
                    </div>
                  </div>
                )}
                {settings?.contactPhone && (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Telefon
                      </h4>
                      <a
                        href={`tel:${settings.contactPhone.replace(/\s/g, "")}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {settings.contactPhone}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm recipientEmail={settings?.contactEmail} />
          </div>
        </div>
      </section>
    </>
  );
}
