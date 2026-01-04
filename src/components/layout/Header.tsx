import {Link, useLocation} from 'react-router-dom'
import {useState} from 'react'
import {Menu, X} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {cn} from '@/lib/utils'
import {useSiteSettings} from '@/hooks/useSanity'

const navLinks = [
  {href: '/', label: 'Startseite'},
  {href: '/aktuell', label: 'Aktuelles Stück'},
  {href: '/archiv', label: 'Archiv'},
  {href: '/neuigkeiten', label: 'Neuigkeiten'},
  {href: '/ueber-uns', label: 'Über Uns'},
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const {data: settings} = useSiteSettings()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Theater PUR Logo"
              className="h-12 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-colors rounded-md',
                  location.pathname === link.href
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          {settings?.navCtaText && settings?.navCtaLink && (
            <div className="hidden lg:block">
              <Button asChild className="font-semibold shadow-gold">
                <Link to={settings.navCtaLink}>{settings.navCtaText}</Link>
              </Button>
            </div>
          )}

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
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'px-4 py-3 text-base font-medium transition-colors rounded-md',
                    location.pathname === link.href
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              {settings?.navCtaText && settings?.navCtaLink && (
                <div className="pt-4 px-4">
                  <Button asChild className="w-full font-semibold">
                    <Link to={settings.navCtaLink} onClick={() => setIsOpen(false)}>
                      {settings.navCtaText}
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
