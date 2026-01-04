import {Layout} from '@/components/layout'
import {Hero} from '@/components/Hero'
import {PlayCard, type Play as PlayCardType} from '@/components/PlayCard'
import {NewsCard, type NewsPost as NewsCardType} from '@/components/NewsCard'
import {SectionHeader} from '@/components/SectionHeader'
import {Button} from '@/components/ui/button'
import {Link} from 'react-router-dom'
import {ArrowRight, Users, Calendar, Award, Loader2} from 'lucide-react'
import {useCurrentPlay, useLatestNews} from '@/hooks/useSanity'
import {isSanityConfigured, urlFor} from '@/lib/sanity'
import {getPlainText} from '@/lib/blockContent'
import {format} from 'date-fns'
import {de} from 'date-fns/locale'

// Mock data - used when Sanity is not configured
const mockCurrentPlay: PlayCardType = {
  id: 'ein-sommernachtstraum-2024',
  title: 'Ein Sommernachtstraum',
  subtitle: 'von William Shakespeare',
  description:
    'Tauchen Sie ein in die magische Welt der Feen und Liebenden. Diese zeitlose Komödie entführt Sie in einen verzauberten Wald, wo nichts ist, wie es scheint. Eine Nacht voller Verwirrung, Zauber und am Ende wahrer Liebe.',
  coverImage: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80',
  year: 2024,
  isActive: true,
  nextPerformance: {
    date: '15. Februar 2025, 19:30 Uhr',
    location: 'Kulturzentrum Weyhe',
  },
}

const mockRecentNews: NewsCardType[] = [
  {
    id: 'proben-sommernachtstraum',
    title: 'Die Proben laufen auf Hochtouren',
    excerpt:
      'Unser Ensemble bereitet sich intensiv auf die Premiere vor. Ein Blick hinter die Kulissen zeigt die Leidenschaft unserer Schauspieler.',
    coverImage: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80',
    publishedAt: '5. Januar 2025',
    category: 'Backstage',
  },
  {
    id: 'neue-mitglieder-2024',
    title: 'Neue Gesichter im Ensemble',
    excerpt:
      'Wir freuen uns, drei neue talentierte Schauspieler in unserer Theatergruppe begrüßen zu dürfen.',
    coverImage: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?w=600&q=80',
    publishedAt: '20. Dezember 2024',
    category: 'Team',
  },
  {
    id: 'ruckblick-weihnachtsfeier',
    title: 'Rückblick: Unsere Weihnachtsfeier',
    excerpt:
      'Ein wundervoller Abend mit dem gesamten Team, Freunden und Unterstützern des Theaters.',
    coverImage: 'https://images.unsplash.com/photo-1482575832494-771f74bf6857?w=600&q=80',
    publishedAt: '15. Dezember 2024',
    category: 'Events',
  },
]

const stats = [
  {icon: Calendar, value: '15+', label: 'Jahre Theatertradition'},
  {icon: Users, value: '25', label: 'Aktive Mitglieder'},
  {icon: Award, value: '30+', label: 'Aufgeführte Stücke'},
]

export default function HomePage() {
  const {data: sanityCurrentPlay, isLoading: playLoading} = useCurrentPlay()
  const {data: sanityNews, isLoading: newsLoading} = useLatestNews()

  const isConfigured = isSanityConfigured()

  // Transform Sanity data to component format
  const currentPlay: PlayCardType | null = sanityCurrentPlay
    ? {
        id: sanityCurrentPlay.slug.current,
        title: sanityCurrentPlay.title,
        subtitle: sanityCurrentPlay.author ? `von ${sanityCurrentPlay.author}` : undefined,
        description: getPlainText(sanityCurrentPlay.description),
        coverImage: sanityCurrentPlay.coverImage
          ? urlFor(sanityCurrentPlay.coverImage).width(800).url()
          : undefined,
        year: sanityCurrentPlay.year,
        isActive: true, // Always true for current play
        nextPerformance: sanityCurrentPlay.performances?.[0]
          ? {
              date: `${format(new Date(sanityCurrentPlay.performances[0].date), 'd. MMMM yyyy', {locale: de})}, ${sanityCurrentPlay.performances[0].time}`,
              location: sanityCurrentPlay.performances[0].location?.name || sanityCurrentPlay.performances[0].location?.city || 'Ort nicht angegeben',
            }
          : undefined,
      }
    : isConfigured
      ? null
      : mockCurrentPlay

  const recentNews: NewsCardType[] =
    sanityNews && sanityNews.length > 0
      ? sanityNews.map((post) => ({
          id: post.slug.current,
          title: post.title,
          excerpt: post.excerpt,
          coverImage: post.coverImage ? urlFor(post.coverImage).width(600).url() : undefined,
          publishedAt: format(new Date(post.publishedAt), 'd. MMMM yyyy', {locale: de}),
          category: post.category,
        }))
      : isConfigured
        ? []
        : mockRecentNews

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        subtitle="Willkommen bei Theaterpur Weyhe"
        title="Die Bühne ist bereitet"
        description="Erleben Sie unvergessliche Theatermomente. Leidenschaft, Kunst und Gemeinschaft vereint auf einer Bühne."
        ctaText="Tickets Sichern"
        ctaLink="/aktuell"
        secondaryCtaText="Mehr Erfahren"
        secondaryCtaLink="/ueber-uns"
      />

      {/* Current Play Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            subtitle="Aktuell auf der Bühne"
            title="Unser neuestes Stück"
            description="Sichern Sie sich jetzt Ihre Tickets für dieses unvergessliche Theatererlebnis."
          />
          <div className="max-w-5xl mx-auto">
            {playLoading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : currentPlay ? (
              <PlayCard play={currentPlay} variant="featured" />
            ) : (
              <div className="text-center py-16 text-muted-foreground">
                Aktuell kein Stück auf dem Spielplan.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-stage border-y border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg bg-card/50 border border-border/30"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-display text-4xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <SectionHeader
              subtitle="Neuigkeiten"
              title="Aktuelles aus dem Theater"
              align="left"
              className="mb-0"
            />
            <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Link to="/neuigkeiten">
                Alle Neuigkeiten
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          {newsLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : recentNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentNews.map((post) => (
                <NewsCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-muted-foreground">
              Keine Neuigkeiten vorhanden.
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-spotlight-center relative overflow-hidden">
        <div className="absolute inset-0 bg-curtain-texture opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Werden Sie Teil unserer Theaterfamilie
            </h2>
            <p className="text-muted-foreground text-lg">
              Sie haben Lust auf Theater? Ob auf der Bühne oder hinter den Kulissen – wir freuen uns
              immer über neue Gesichter und Talente.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="font-semibold shadow-gold">
                <Link to="/ueber-uns#kontakt">Kontakt Aufnehmen</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/30 hover:bg-primary/10"
              >
                <Link to="/archiv">Unsere Geschichte</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
