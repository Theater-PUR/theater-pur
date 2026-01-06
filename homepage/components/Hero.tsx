import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-stage via-background to-velvet" />
        )}
        {/* Overlays */}
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-spotlight-top" />
        <div className="absolute inset-0 bg-curtain-texture opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
          {subtitle && (
            <p className="text-primary font-medium tracking-widest uppercase text-sm md:text-base">
              {subtitle}
            </p>
          )}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              {ctaText && ctaLink && (
                <Button
                  asChild
                  size="lg"
                  className="font-semibold shadow-gold animate-glow-pulse group"
                >
                  <Link href={ctaLink}>
                    {ctaText}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-semibold border-primary/30 text-foreground hover:bg-primary/10"
                >
                  <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Spotlight Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-spotlight" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-velvet/10 rounded-full blur-3xl animate-spotlight"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
}
