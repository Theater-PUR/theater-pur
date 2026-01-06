"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/aktuell", label: "Aktuelles Stück" },
  { href: "/archiv", label: "Archiv" },
  { href: "/neuigkeiten", label: "Neuigkeiten" },
  { href: "/ueber-uns", label: "Über Uns" },
];

export interface HeaderProps {
  brandName?: string;
  brandTagline?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
}

export function Header({
  brandName = "Theaterpur",
  brandTagline = "Weyhe",
  primaryCtaText = "Tickets Sichern",
  primaryCtaLink = "/aktuell",
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <span className="text-primary font-display font-bold text-xl">
                TP
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-xl font-bold text-foreground">
                {brandName}
              </div>
              <div className="text-xs text-muted-foreground">
                {brandTagline}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                  pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="font-semibold shadow-gold">
              <Link href={primaryCtaLink ?? ""}>{primaryCtaText}</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md"
            aria-label="Menü öffnen"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-medium transition-colors rounded-md",
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button asChild className="w-full font-semibold">
                  <Link href={primaryCtaLink} onClick={() => setIsOpen(false)}>
                    {primaryCtaText}
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
