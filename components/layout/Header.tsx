"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DraftModeIndicator } from "./DraftModeIndicator";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/aktuell", label: "Aktuelles Stück" },
  { href: "/archiv", label: "Archiv" },
  { href: "/neuigkeiten", label: "Neuigkeiten" },
  { href: "/ueber-uns", label: "Über Uns" },
];

export interface HeaderProps {
  brandName?: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  isDraftMode?: boolean;
  headerPosition?: "sticky" | "fixed";
}

export function Header({
  brandName,
  primaryCtaText,
  primaryCtaLink,
  isDraftMode,
  headerPosition = "sticky",
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={cn(
        headerPosition,
        "top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md"
      )}
    >
      {isDraftMode && <DraftModeIndicator />}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-24 h-24">
              <Image
                src="/logo.png"
                alt={brandName + " Logo"}
                fill
                className="object-contain"
                priority
              />
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
                  <Link
                    href={primaryCtaLink ?? ""}
                    onClick={() => setIsOpen(false)}
                  >
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
