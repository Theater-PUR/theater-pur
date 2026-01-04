import { Link } from "react-router-dom";
import { Theater, Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";

export function Footer() {
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
                <h3 className="font-display text-xl font-bold text-foreground">Theaterpur</h3>
                <p className="text-xs text-muted-foreground">Weyhe</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Seit Jahren begeistern wir unser Publikum mit leidenschaftlichen Aufführungen 
              und unvergesslichen Theatererlebnissen.
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
                    to={link.href}
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
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Musterstraße 123<br />28844 Weyhe</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+4942030000000" className="hover:text-primary transition-colors">
                  +49 4203 00000 00
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@theaterpur-weyhe.de" className="hover:text-primary transition-colors">
                  info@theaterpur-weyhe.de
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Folgen Sie uns
            </h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Theaterpur Weyhe. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <Link to="/impressum" className="hover:text-primary transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="hover:text-primary transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
