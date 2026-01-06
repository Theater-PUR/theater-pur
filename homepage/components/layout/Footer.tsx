import Link from "next/link";
import { Theater, Mail, MapPin, Phone } from "lucide-react";

export interface FooterProps {
  brandName?: string;
  brandTagline?: string;
  footerDescription?: string;
  footerInfoTitle?: string;
  footerInfoDescription?: string;
  contactEmail?: string;
  contactPhone?: string;
  addressStreet?: string;
  addressPostalCode?: string;
  addressCity?: string;
  copyrightText?: string;
}

export function Footer({
  brandName = "Theaterpur",
  brandTagline = "Weyhe",
  footerDescription = "Seit Jahren begeistern wir unser Publikum mit leidenschaftlichen Aufführungen und unvergesslichen Theatererlebnissen.",
  footerInfoTitle = "Theaterpur Weyhe",
  footerInfoDescription = "Ein Amateurtheater mit Leidenschaft seit über 15 Jahren. Wir lieben, was wir tun - und teilen diese Liebe mit unserem Publikum.",
  contactEmail = "info@theaterpur-weyhe.de",
  contactPhone = "+49 421 17890",
  addressStreet = "Hauptstraße 45",
  addressPostalCode = "28844",
  addressCity = "Weyhe",
  copyrightText,
}: FooterProps) {
  return (
    <footer className="bg-stage border-t border-border/30">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Theater className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {brandName}
                </h3>
                <p className="text-xs text-muted-foreground">{brandTagline}</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Startseite" },
                { href: "/aktuell", label: "Aktuelles Stück" },
                { href: "/archiv", label: "Archiv" },
                { href: "/neuigkeiten", label: "Neuigkeiten" },
                { href: "/ueber-uns", label: "Über Uns" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3">
              {(addressStreet || addressPostalCode || addressCity) && (
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    {addressStreet}
                    <br />
                    {[addressPostalCode, addressCity].filter(Boolean).join(" ")}
                  </span>
                </li>
              )}
              {contactPhone && (
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                    className="hover:text-primary transition-colors"
                  >
                    {contactPhone}
                  </a>
                </li>
              )}
              {contactEmail && (
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href={`mailto:${contactEmail}`}
                    className="hover:text-primary transition-colors"
                  >
                    {contactEmail}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              {footerInfoTitle}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {footerInfoDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              {copyrightText ||
                `© ${new Date().getFullYear()} ${brandName}. Alle Rechte vorbehalten.`}
            </p>
            <div className="flex gap-6">
              <Link
                href="/impressum"
                className="hover:text-primary transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="hover:text-primary transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
