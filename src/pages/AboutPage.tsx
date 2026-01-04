import { Layout } from "@/components/layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Theater, Heart, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const teamMembers = [
  { name: "Maria Schmidt", role: "Regie & Vorstand", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" },
  { name: "Thomas Müller", role: "Schauspieler & Technik", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
  { name: "Anna Weber", role: "Schauspielerin & Kostüm", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80" },
  { name: "Felix Braun", role: "Schauspieler", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" },
  { name: "Laura Schmidt", role: "Schauspielerin", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80" },
  { name: "Klaus Werner", role: "Bühnenbau & Schauspieler", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" },
];

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    toast.success("Nachricht gesendet! Wir melden uns bei Ihnen.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-spotlight-top relative overflow-hidden">
        <div className="absolute inset-0 bg-curtain-texture opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            subtitle="Über Uns"
            title="Theaterpur Weyhe"
            description="Seit über 15 Jahren bringen wir Leidenschaft, Kunst und Gemeinschaft auf die Bühne. Unser Amateurtheater vereint Menschen aller Altersgruppen, die eine gemeinsame Liebe zum Theater teilen."
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Unsere Geschichte
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Was als kleine Gruppe theaterbegeisterter Freunde begann, ist heute eine 
                  lebendige Gemeinschaft von über 25 aktiven Mitgliedern. Theaterpur Weyhe 
                  wurde gegründet aus der Überzeugung, dass Theater Menschen zusammenbringt 
                  und Geschichten erzählt, die berühren.
                </p>
                <p>
                  In über 30 Produktionen haben wir unser Publikum zum Lachen, Weinen und 
                  Nachdenken gebracht. Von klassischen Komödien über moderne Dramen bis hin 
                  zu eigenen Adaptionen – wir scheuen keine Herausforderung.
                </p>
                <p>
                  Unsere Aufführungen finden an verschiedenen Spielstätten in und um Weyhe 
                  statt. Jede Produktion ist ein Gemeinschaftsprojekt, bei dem jeder sein 
                  Talent einbringt – ob auf der Bühne, beim Bühnenbau, bei Kostümen oder 
                  in der Organisation.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&q=80"
                    alt="Theater Probe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg bg-primary/10 border border-primary/30 flex flex-col items-center justify-center p-6 text-center">
                  <Theater className="w-10 h-10 text-primary mb-3" />
                  <p className="font-display text-2xl font-bold text-foreground">30+</p>
                  <p className="text-sm text-muted-foreground">Produktionen</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-lg bg-velvet/30 border border-velvet/50 flex flex-col items-center justify-center p-6 text-center">
                  <Heart className="w-10 h-10 text-primary mb-3" />
                  <p className="font-display text-2xl font-bold text-foreground">15+</p>
                  <p className="text-sm text-muted-foreground">Jahre</p>
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516307365426-bea591f05011?w=400&q=80"
                    alt="Ensemble"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-stage border-y border-border/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Unser Team"
            title="Das Ensemble"
            description="Die Menschen hinter den Kulissen und auf der Bühne."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="aspect-square rounded-lg overflow-hidden mb-4 border border-border/50 group-hover:border-primary/50 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm">
              <Users className="w-4 h-4" />
              und über 20 weitere engagierte Mitglieder
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionHeader
                subtitle="Kontakt"
                title="Schreiben Sie uns"
                description="Haben Sie Fragen, möchten mitmachen oder einfach Hallo sagen? Wir freuen uns auf Ihre Nachricht!"
                align="left"
              />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Adresse</h4>
                    <p className="text-muted-foreground">
                      Musterstraße 123<br />
                      28844 Weyhe
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-Mail</h4>
                    <a
                      href="mailto:info@theaterpur-weyhe.de"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@theaterpur-weyhe.de
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                    <a
                      href="tel:+4942030000000"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +49 4203 00000 00
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg border border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ihr Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ihre@email.de"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Betreff</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Worum geht es?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ihre Nachricht an uns..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full font-semibold shadow-gold">
                  Nachricht Senden
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
