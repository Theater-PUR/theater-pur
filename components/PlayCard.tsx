import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Play {
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  coverImage?: string;
  year?: number;
  isActive?: boolean;
  isUpcoming?: boolean;
  nextPerformance?: {
    date?: string;
    location?: string;
  };
}

interface PlayCardProps {
  play: Play;
  variant?: "featured" | "default" | "archive";
}

export function PlayCard({ play, variant = "default" }: PlayCardProps) {
  const isFeatured = variant === "featured";
  const isArchive = variant === "archive";

  return (
    <Link
      href={isArchive ? `/archiv/${play.slug}` : `/aktuell`}
      className={cn(
        "group relative block overflow-hidden rounded-lg border border-border/50 bg-card transition-all duration-500",
        "hover:border-primary/50 hover:shadow-gold",
        isFeatured && "lg:grid lg:grid-cols-2 lg:gap-0"
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative overflow-hidden",
          isFeatured ? "aspect-[4/3] lg:aspect-auto lg:h-full" : "aspect-[3/4]"
        )}
      >
        <img
          src={
            play.coverImage ||
            "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80"
          }
          alt={play.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

        {/* Status Badge */}
        {(play.isActive || play.isUpcoming) && (
          <div className="absolute top-4 left-4">
            <span
              className={cn(
                "px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full",
                play.isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-velvet text-foreground"
              )}
            >
              {play.isActive ? "Jetzt Spielend" : "Demnächst"}
            </span>
          </div>
        )}

        {/* Year Badge for Archive */}
        {isArchive && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-semibold bg-muted text-muted-foreground rounded-full">
              {play.year}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          "p-6",
          isFeatured && "lg:p-10 lg:flex lg:flex-col lg:justify-center"
        )}
      >
        {play.subtitle && (
          <p className="text-primary text-sm font-medium mb-2">
            {play.subtitle}
          </p>
        )}
        <h3
          className={cn(
            "font-display font-bold text-foreground mb-3 transition-colors group-hover:text-primary",
            isFeatured ? "text-3xl lg:text-4xl" : "text-xl"
          )}
        >
          {play.title}
        </h3>
        <p
          className={cn(
            "text-muted-foreground leading-relaxed mb-4",
            isFeatured
              ? "text-base lg:text-lg line-clamp-4"
              : "text-sm line-clamp-3"
          )}
        >
          {play.description}
        </p>

        {/* Next Performance Info */}
        {play.nextPerformance && !isArchive && (
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{play.nextPerformance.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{play.nextPerformance.location}</span>
            </div>
          </div>
        )}

        {/* CTA */}
        {isFeatured ? (
          <Button className="w-fit font-semibold group/btn">
            {play.isActive ? "Tickets Buchen" : "Mehr Erfahren"}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        ) : (
          <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
            {isArchive ? "Details Ansehen" : "Mehr Erfahren"}
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </span>
        )}
      </div>
    </Link>
  );
}
