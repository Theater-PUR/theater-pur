// Schema: Site Settings (Seiteneinstellungen)
// Copy this to your Sanity Studio schemas folder

export default {
  name: 'siteSettings',
  title: 'Seiteneinstellungen',
  type: 'document',
  groups: [
    {
      name: 'general',
      title: 'Allgemein',
    },
    {
      name: 'hero',
      title: 'Hero-Bereich',
    },
    {
      name: 'navigation',
      title: 'Navigation',
    },
    {
      name: 'contact',
      title: 'Kontakt',
    },
    {
      name: 'about',
      title: 'Über Uns',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
  ],
  fields: [
    // General Settings
    {
      name: 'title',
      title: 'Seitentitel',
      type: 'string',
      group: 'general',
      validation: (Rule: {required: () => unknown}) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Seitenbeschreibung',
      type: 'text',
      rows: 3,
      group: 'general',
      description: 'Für SEO und Social Media',
    },
    {
      name: 'currentPlay',
      title: 'Aktuelles Stück',
      type: 'reference',
      to: [{type: 'play'}],
      group: 'general',
      description: 'Wählen Sie das aktuell laufende Theaterstück aus',
    },

    // Hero Section
    {
      name: 'heroSubtitle',
      title: 'Hero Untertitel',
      type: 'string',
      group: 'hero',
      description: 'z.B. "Willkommen bei Theaterpur Weyhe"',
    },
    {
      name: 'heroTitle',
      title: 'Hero Haupttitel',
      type: 'string',
      group: 'hero',
      description: 'z.B. "Die Bühne ist bereitet"',
    },
    {
      name: 'heroDescription',
      title: 'Hero Beschreibung',
      type: 'text',
      rows: 3,
      group: 'hero',
    },
    {
      name: 'heroCtaText',
      title: 'Hero CTA Button Text',
      type: 'string',
      group: 'hero',
      description: 'z.B. "Tickets Sichern"',
    },
    {
      name: 'heroCtaLink',
      title: 'Hero CTA Button Link',
      type: 'string',
      group: 'hero',
      description: 'z.B. "/aktuell"',
    },
    {
      name: 'heroSecondaryCtaText',
      title: 'Hero Sekundärer CTA Button Text',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'heroSecondaryCtaLink',
      title: 'Hero Sekundärer CTA Button Link',
      type: 'string',
      group: 'hero',
    },

    // Navigation
    {
      name: 'navCtaText',
      title: 'Navigation CTA Button Text',
      type: 'string',
      group: 'navigation',
      description: 'z.B. "Tickets Buchen"',
    },
    {
      name: 'navCtaLink',
      title: 'Navigation CTA Button Link',
      type: 'string',
      group: 'navigation',
      description: 'z.B. "/aktuell"',
    },

    // Contact Information
    {
      name: 'contactEmail',
      title: 'Kontakt E-Mail',
      type: 'string',
      group: 'contact',
      validation: (Rule: {email: () => unknown}) => Rule.email(),
    },
    {
      name: 'contactPhone',
      title: 'Telefonnummer',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'addressStreet',
      title: 'Straße',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'addressPostalCode',
      title: 'Postleitzahl',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'addressCity',
      title: 'Stadt',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      group: 'contact',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
        {
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
        },
      ],
    },

    // About Section
    {
      name: 'aboutTheaterName',
      title: 'Theater Name',
      type: 'string',
      group: 'about',
      description: 'z.B. "Theaterpur Weyhe"',
    },
    {
      name: 'aboutTagline',
      title: 'Tagline',
      type: 'string',
      group: 'about',
      description: 'z.B. "Weyhe"',
    },
    {
      name: 'aboutDescription',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 3,
      group: 'about',
    },
    {
      name: 'aboutStory',
      title: 'Unsere Geschichte',
      type: 'array',
      of: [{type: 'block'}],
      group: 'about',
    },
    {
      name: 'statsYears',
      title: 'Statistik: Jahre',
      type: 'string',
      group: 'about',
      description: 'z.B. "15+"',
    },
    {
      name: 'statsMembers',
      title: 'Statistik: Mitglieder',
      type: 'string',
      group: 'about',
      description: 'z.B. "25"',
    },
    {
      name: 'statsProductions',
      title: 'Statistik: Produktionen',
      type: 'string',
      group: 'about',
      description: 'z.B. "30+"',
    },

    // Footer
    {
      name: 'footerCtaTitle',
      title: 'Footer CTA Titel',
      type: 'string',
      group: 'footer',
      description: 'z.B. "Werden Sie Teil unserer Theaterfamilie"',
    },
    {
      name: 'footerCtaDescription',
      title: 'Footer CTA Beschreibung',
      type: 'text',
      rows: 2,
      group: 'footer',
    },
    {
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      group: 'footer',
      description: 'z.B. "Theaterpur Weyhe. Alle Rechte vorbehalten."',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Seiteneinstellungen',
      }
    },
  },
}
