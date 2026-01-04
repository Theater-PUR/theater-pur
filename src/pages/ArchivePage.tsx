import { useState } from "react";
import { Layout } from "@/components/layout";
import { SectionHeader } from "@/components/SectionHeader";
import { PlayCard, type Play } from "@/components/PlayCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Mock data - will be replaced with Sanity CMS
const archivePlays: Play[] = [
  {
    id: "der-zerbrochene-krug-2023",
    title: "Der zerbrochene Krug",
    subtitle: "von Heinrich von Kleist",
    description:
      "Eine klassische Komödie über Richter Adam, der einen Fall verhandeln muss, in dem er selbst der Schuldige ist.",
    coverImage: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
    year: 2023,
  },
  {
    id: "die-physiker-2023",
    title: "Die Physiker",
    subtitle: "von Friedrich Dürrenmatt",
    description:
      "Drei Physiker in einer psychiatrischen Anstalt. Doch ist wirklich alles so, wie es scheint?",
    coverImage: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&q=80",
    year: 2023,
  },
  {
    id: "woyzeck-2022",
    title: "Woyzeck",
    subtitle: "von Georg Büchner",
    description:
      "Das tragische Schicksal des einfachen Soldaten Woyzeck, getrieben von Armut und Eifersucht.",
    coverImage: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80",
    year: 2022,
  },
  {
    id: "pension-schoeller-2022",
    title: "Pension Schöller",
    subtitle: "von Wilhelm Jacoby & Carl Laufs",
    description:
      "Eine turbulente Verwechslungskomödie in einer vermeintlichen Irrenanstalt.",
    coverImage: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=600&q=80",
    year: 2022,
  },
  {
    id: "der-gott-des-gemetzels-2021",
    title: "Der Gott des Gemetzels",
    subtitle: "von Yasmina Reza",
    description:
      "Zwei Elternpaare treffen sich wegen eines Streits ihrer Söhne. Der Abend eskaliert.",
    coverImage: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80",
    year: 2021,
  },
  {
    id: "der-nackte-wahnsinn-2021",
    title: "Der nackte Wahnsinn",
    subtitle: "von Michael Frayn",
    description:
      "Eine Theatergruppe probt eine Boulevardkomödie. Chaos hinter und auf der Bühne garantiert.",
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    year: 2021,
  },
  {
    id: "art-2020",
    title: "Kunst",
    subtitle: "von Yasmina Reza",
    description:
      "Drei Freunde geraten wegen eines teuren weißen Bildes in einen heftigen Streit.",
    coverImage: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80",
    year: 2020,
  },
  {
    id: "die-feuerzangenbowle-2019",
    title: "Die Feuerzangenbowle",
    subtitle: "nach Heinrich Spoerl",
    description:
      "Der Schriftsteller Dr. Pfeiffer kehrt als falscher Schüler an ein Gymnasium zurück.",
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
    year: 2019,
  },
];

const years = [...new Set(archivePlays.map((play) => play.year))].sort((a, b) => b - a);

export default function ArchivePage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const filteredPlays = selectedYear
    ? archivePlays.filter((play) => play.year === selectedYear)
    : archivePlays;

  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-spotlight-top">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Unser Archiv"
            title="Vergangene Aufführungen"
            description="Entdecken Sie unsere bisherigen Produktionen. Jedes Stück erzählt eine Geschichte von Leidenschaft und Hingabe."
          />

          {/* Year Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedYear(null)}
              className={cn(
                "border-border/50",
                selectedYear === null && "bg-primary text-primary-foreground border-primary"
              )}
            >
              Alle Jahre
            </Button>
            {years.map((year) => (
              <Button
                key={year}
                variant="outline"
                size="sm"
                onClick={() => setSelectedYear(year)}
                className={cn(
                  "border-border/50",
                  selectedYear === year && "bg-primary text-primary-foreground border-primary"
                )}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlays.map((play) => (
              <PlayCard key={play.id} play={play} variant="archive" />
            ))}
          </div>

          {filteredPlays.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Keine Aufführungen für dieses Jahr gefunden.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
