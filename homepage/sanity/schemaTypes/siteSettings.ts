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
      name: 'homepage',
      title: 'Homepage',
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
      name: 'brandName',
      title: 'Markenname',
      type: 'string',
      group: 'general',
      description: 'z.B. "Theaterpur"',
    },
    {
      name: 'brandTagline',
      title: 'Tagline',
      type: 'string',
      group: 'general',
      description: 'z.B. "Weyhe"',
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
      name: 'heroBackgroundImage',
      title: 'Hero Hintergrundbild',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alternativtext',
          type: 'string',
        },
      ],
    },
    {
      name: 'primaryCtaText',
      title: 'Primärer CTA Text',
      type: 'string',
      group: 'hero',
      description: 'z.B. "Tickets Sichern" (auch für Header-CTA genutzt)',
    },
    {
      name: 'primaryCtaLink',
      title: 'Primärer CTA Link',
      type: 'string',
      group: 'hero',
      description: 'z.B. "/aktuell"',
    },
    {
      name: 'secondaryCtaText',
      title: 'Sekundärer CTA Text',
      type: 'string',
      group: 'hero',
    },
    {
      name: 'secondaryCtaLink',
      title: 'Sekundärer CTA Link',
      type: 'string',
      group: 'hero',
    },

    // Homepage Sections
    {
      name: 'currentPlaySectionTitle',
      title: 'Aktuelles Stück - Titel',
      type: 'string',
      group: 'homepage',
      description: 'z.B. "Unser neuestes Stück"',
    },
    {
      name: 'currentPlaySectionSubtitle',
      title: 'Aktuelles Stück - Untertitel',
      type: 'string',
      group: 'homepage',
      description: 'z.B. "Aktuell auf der Bühne"',
    },
    {
      name: 'currentPlaySectionDescription',
      title: 'Aktuelles Stück - Beschreibung',
      type: 'text',
      rows: 3,
      group: 'homepage',
    },
    {
      name: 'newsSectionTitle',
      title: 'News - Titel',
      type: 'string',
      group: 'homepage',
    },
    {
      name: 'newsSectionSubtitle',
      title: 'News - Untertitel',
      type: 'string',
      group: 'homepage',
    },
    {
      name: 'joinCtaTitle',
      title: 'CTA Abschnitt - Titel',
      type: 'string',
      group: 'homepage',
    },
    {
      name: 'joinCtaDescription',
      title: 'CTA Abschnitt - Beschreibung',
      type: 'text',
      rows: 3,
      group: 'homepage',
    },
    {
      name: 'joinCtaPrimaryText',
      title: 'CTA Abschnitt - Primärer CTA Text',
      type: 'string',
      group: 'homepage',
    },
    {
      name: 'joinCtaPrimaryLink',
      title: 'CTA Abschnitt - Primärer CTA Link',
      type: 'string',
      group: 'homepage',
    },
    {
      name: 'joinCtaSecondaryText',
      title: 'CTA Abschnitt - Sekundärer CTA Text',
      type: 'string',
      group: 'homepage',
    },
    {
      name: 'joinCtaSecondaryLink',
      title: 'CTA Abschnitt - Sekundärer CTA Link',
      type: 'string',
      group: 'homepage',
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
      description: 'Deprecated: ersetzt durch brandName/brandTagline',
      hidden: true,
      readOnly: true,
    },
    {
      name: 'aboutTagline',
      title: 'Tagline',
      type: 'string',
      group: 'about',
      description: 'Deprecated: ersetzt durch brandName/brandTagline',
      hidden: true,
      readOnly: true,
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
      name: 'stats',
      title: 'Statistiken',
      type: 'array',
      group: 'about',
      of: [
        {
          type: 'object',
          name: 'stat',
          title: 'Statistik',
          fields: [
            {
              name: 'icon',
              title: 'Icon (Lucide Name)',
              type: 'string',
              options: {
                list: [
                  {title: 'Calendar', value: 'calendar'},
                  {title: 'Users', value: 'users'},
                  {title: 'Award', value: 'award'},
                ],
              },
              description: 'Lucide Icon Name, z.B. calendar, users, award',
            },
            {
              name: 'value',
              title: 'Wert',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
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
      name: 'footerInfoTitle',
      title: 'Footer Infobereich Titel',
      type: 'string',
      group: 'footer',
    },
    {
      name: 'footerInfoDescription',
      title: 'Footer Infobereich Beschreibung',
      type: 'text',
      rows: 3,
      group: 'footer',
    },
    {
      name: 'footerDescription',
      title: 'Footer Beschreibung',
      type: 'text',
      rows: 3,
      group: 'footer',
      description: 'Brand-Intro im Footer',
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
