"use client";

import { useState, useMemo } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { PlayCard, type Play } from "@/components/PlayCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ArchivePageClientProps {
  plays: Play[];
}

export function ArchivePageClient({ plays }: ArchivePageClientProps) {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const years = useMemo(
    () =>
      [...new Set(plays.map((play) => play.year))].sort(
        (a, b) => (b ?? 0) - (a ?? 0)
      ),
    [plays]
  );

  const filteredPlays = selectedYear
    ? plays.filter((play) => play.year === selectedYear)
    : plays;

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-spotlight-top">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Unser Archiv"
            title="Vergangene Aufführungen"
            description="Entdecken Sie unsere bisherigen Produktionen. Jedes Stück erzählt eine Geschichte von Leidenschaft und Hingabe."
          />

          {/* Year Filter */}
          {years.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedYear(null)}
                className={cn(
                  "border-border/50",
                  selectedYear === null &&
                    "bg-primary text-primary-foreground border-primary"
                )}
              >
                Alle Jahre
              </Button>
              {years.map((year) => (
                <Button
                  key={year}
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedYear(year ?? null)}
                  className={cn(
                    "border-border/50",
                    selectedYear === year &&
                      "bg-primary text-primary-foreground border-primary"
                  )}
                >
                  {year}
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Archive Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {filteredPlays.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPlays.map((play) => (
                <PlayCard key={play.slug} play={play} variant="archive" />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                {selectedYear
                  ? "Keine Aufführungen für dieses Jahr gefunden."
                  : "Noch keine archivierten Aufführungen."}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
