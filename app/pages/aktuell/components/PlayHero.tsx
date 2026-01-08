import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";
import Image from "next/image";
import type { Play } from "@/types/sanity";

interface PlayHeroProps {
  play: Play;
  coverImageUrl?: string;
}

export function PlayHero({ play, coverImageUrl }: PlayHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden">
      {coverImageUrl && (
        <div className="absolute inset-0">
          <Image
            src={coverImageUrl}
            alt={play.title}
            fill
            className="object-cover"
            priority
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
  );
}
