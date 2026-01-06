// Schema: Site Settings (Seiteneinstellungen)
// Copy this to your Sanity Studio schemas folder

export default {
  name: "siteSettings",
  title: "Seiteneinstellungen",
  type: "document",
  groups: [
    {
      name: "general",
      title: "Allgemein",
    },
    {
      name: "hero",
      title: "Hero-Bereich",
    },
    {
      name: "homepage",
      title: "Homepage",
    },
    {
      name: "contact",
      title: "Kontakt",
    },
    {
      name: "about",
      title: "Über Uns",
    },
    {
      name: "footer",
      title: "Footer",
    },
  ],
  fields: [
    // General Settings
    {
      name: "title",
      title: "Seitentitel",
      type: "string",
      group: "general",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
      initialValue: "Theaterpur Weyhe - Leidenschaft für Theater",
    },
    {
      name: "description",
      title: "Seitenbeschreibung",
      type: "text",
      rows: 3,
      group: "general",
      description: "Für SEO und Social Media",
      initialValue:
        "Erleben Sie unvergessliche Theatermomente. Leidenschaft, Kunst und Gemeinschaft vereint auf einer Bühne.",
    },
    {
      name: "brandName",
      title: "Markenname",
      type: "string",
      group: "general",
      description: 'z.B. "Theaterpur"',
      initialValue: "Theaterpur",
    },
    {
      name: "brandTagline",
      title: "Tagline",
      type: "string",
      group: "general",
      description: 'z.B. "Weyhe"',
      initialValue: "Weyhe",
    },
    {
      name: "currentPlay",
      title: "Aktuelles Stück",
      type: "reference",
      to: [{ type: "play" }],
      group: "general",
      description: "Wählen Sie das aktuell laufende Theaterstück aus",
    },

    // Hero Section
    {
      name: "heroSubtitle",
      title: "Hero Untertitel",
      type: "string",
      group: "hero",
      description: 'z.B. "Willkommen bei Theaterpur Weyhe"',
      initialValue: "Willkommen bei Theaterpur Weyhe",
    },
    {
      name: "heroTitle",
      title: "Hero Haupttitel",
      type: "string",
      group: "hero",
      description: 'z.B. "Die Bühne ist bereit"',
      initialValue: "Die Bühne ist bereit",
    },
    {
      name: "heroDescription",
      title: "Hero Beschreibung",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "Erleben Sie unvergessliche Theatermomente. Leidenschaft, Kunst und Gemeinschaft vereint auf einer Bühne.",
    },
    {
      name: "heroBackgroundImage",
      title: "Hero Hintergrundbild",
      type: "image",
      group: "hero",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternativtext",
          type: "string",
        },
      ],
    },
    {
      name: "primaryCtaText",
      title: "Primärer CTA Text",
      type: "string",
      group: "hero",
      description: 'z.B. "Tickets Sichern" (auch für Header-CTA genutzt)',
      initialValue: "Tickets Sichern",
    },
    {
      name: "primaryCtaLink",
      title: "Primärer CTA Link",
      type: "string",
      group: "hero",
      description: 'z.B. "/aktuell"',
      initialValue: "/aktuell",
    },
    {
      name: "secondaryCtaText",
      title: "Sekundärer CTA Text",
      type: "string",
      group: "hero",
      initialValue: "Mehr Erfahren",
    },
    {
      name: "secondaryCtaLink",
      title: "Sekundärer CTA Link",
      type: "string",
      group: "hero",
      initialValue: "/ueber-uns",
    },

    // Homepage Sections
    {
      name: "currentPlaySectionTitle",
      title: "Aktuelles Stück - Titel",
      type: "string",
      group: "homepage",
      description: 'z.B. "Unser neuestes Stück"',
      initialValue: "Unser neuestes Stück",
    },
    {
      name: "currentPlaySectionSubtitle",
      title: "Aktuelles Stück - Untertitel",
      type: "string",
      group: "homepage",
      description: 'z.B. "Aktuell auf der Bühne"',
      initialValue: "Aktuell auf der Bühne",
    },
    {
      name: "currentPlaySectionDescription",
      title: "Aktuelles Stück - Beschreibung",
      type: "text",
      rows: 3,
      group: "homepage",
      initialValue:
        "Sichern Sie sich jetzt Ihre Tickets für dieses unvergessliche Theatererlebnis.",
    },
    {
      name: "newsSectionTitle",
      title: "News - Titel",
      type: "string",
      group: "homepage",
      initialValue: "Aktuelles aus dem Theater",
    },
    {
      name: "newsSectionSubtitle",
      title: "News - Untertitel",
      type: "string",
      group: "homepage",
      initialValue: "Neuigkeiten",
    },
    {
      name: "joinCtaTitle",
      title: "CTA Abschnitt - Titel",
      type: "string",
      group: "homepage",
      initialValue: "Werden Sie Teil unserer Theaterfamilie",
    },
    {
      name: "joinCtaDescription",
      title: "CTA Abschnitt - Beschreibung",
      type: "text",
      rows: 3,
      group: "homepage",
      initialValue:
        "Sie haben Lust auf Theater? Ob auf der Bühne oder hinter den Kulissen – wir freuen uns immer über neue Gesichter und Talente.",
    },
    {
      name: "joinCtaPrimaryText",
      title: "CTA Abschnitt - Primärer CTA Text",
      type: "string",
      group: "homepage",
      initialValue: "Kontakt Aufnehmen",
    },
    {
      name: "joinCtaPrimaryLink",
      title: "CTA Abschnitt - Primärer CTA Link",
      type: "string",
      group: "homepage",
      initialValue: "/ueber-uns#kontakt",
    },
    {
      name: "joinCtaSecondaryText",
      title: "CTA Abschnitt - Sekundärer CTA Text",
      type: "string",
      group: "homepage",
      initialValue: "Unsere Geschichte",
    },
    {
      name: "joinCtaSecondaryLink",
      title: "CTA Abschnitt - Sekundärer CTA Link",
      type: "string",
      group: "homepage",
      initialValue: "/archiv",
    },

    // Contact Information
    {
      name: "contactEmail",
      title: "Kontakt E-Mail",
      type: "string",
      group: "contact",
      validation: (Rule: { email: () => unknown }) => Rule.email(),
      initialValue: "info@theaterpur-weyhe.de",
    },
    {
      name: "contactPhone",
      title: "Telefonnummer",
      type: "string",
      group: "contact",
      initialValue: "+49 421 17890",
    },
    {
      name: "addressStreet",
      title: "Straße",
      type: "string",
      group: "contact",
      initialValue: "Hauptstraße 45",
    },
    {
      name: "addressPostalCode",
      title: "Postleitzahl",
      type: "string",
      group: "contact",
      initialValue: "28844",
    },
    {
      name: "addressCity",
      title: "Stadt",
      type: "string",
      group: "contact",
      initialValue: "Weyhe",
    },
    {
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      group: "contact",
      fields: [
        {
          name: "facebook",
          title: "Facebook",
          type: "url",
        },
        {
          name: "instagram",
          title: "Instagram",
          type: "url",
        },
        {
          name: "youtube",
          title: "YouTube",
          type: "url",
        },
      ],
    },

    // About Section
    {
      name: "aboutTheaterName",
      title: "Theater Name",
      type: "string",
      group: "about",
      description: "Deprecated: ersetzt durch brandName/brandTagline",
      hidden: true,
      readOnly: true,
    },
    {
      name: "aboutTagline",
      title: "Tagline",
      type: "string",
      group: "about",
      description: "Deprecated: ersetzt durch brandName/brandTagline",
      hidden: true,
      readOnly: true,
    },
    {
      name: "aboutDescription",
      title: "Kurzbeschreibung",
      type: "text",
      rows: 3,
      group: "about",
    },
    {
      name: "aboutStory",
      title: "Unsere Geschichte",
      type: "array",
      of: [{ type: "block" }],
      group: "about",
    },
    {
      name: "stats",
      title: "Statistiken",
      type: "array",
      group: "about",
      of: [
        {
          type: "object",
          name: "stat",
          title: "Statistik",
          fields: [
            {
              name: "icon",
              title: "Icon (Lucide Name)",
              type: "string",
              options: {
                list: [
                  { title: "Calendar", value: "calendar" },
                  { title: "Users", value: "users" },
                  { title: "Award", value: "award" },
                ],
              },
              description: "Lucide Icon Name, z.B. calendar, users, award",
            },
            {
              name: "value",
              title: "Wert",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },

    // Footer
    {
      name: "footerCtaTitle",
      title: "Footer CTA Titel",
      type: "string",
      group: "footer",
      description: 'z.B. "Werden Sie Teil unserer Theaterfamilie"',
      initialValue: "Werden Sie Teil unserer Theaterfamilie",
    },
    {
      name: "footerCtaDescription",
      title: "Footer CTA Beschreibung",
      type: "text",
      rows: 2,
      group: "footer",
      initialValue:
        "Sie haben Lust auf Theater? Ob auf der Bühne oder hinter den Kulissen – wir freuen uns immer über neue Gesichter und Talente.",
    },
    {
      name: "footerInfoTitle",
      title: "Footer Infobereich Titel",
      type: "string",
      group: "footer",
      initialValue: "Theaterpur Weyhe",
    },
    {
      name: "footerInfoDescription",
      title: "Footer Infobereich Beschreibung",
      type: "text",
      rows: 3,
      group: "footer",
      initialValue:
        "Ein Amateurtheater mit Leidenschaft seit über 15 Jahren. Wir lieben, was wir tun - und teilen diese Liebe mit unserem Publikum.",
    },
    {
      name: "footerDescription",
      title: "Footer Beschreibung",
      type: "text",
      rows: 3,
      group: "footer",
      description: "Brand-Intro im Footer",
      initialValue:
        "Seit Jahren begeistern wir unser Publikum mit leidenschaftlichen Aufführungen und unvergesslichen Theatererlebnissen.",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Seiteneinstellungen",
      };
    },
  },
};
