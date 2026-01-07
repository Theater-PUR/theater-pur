// Schema: Site Settings (Seiteneinstellungen)
// Copy this to your Sanity Studio schemas folder

const siteSettingsSchema = {
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
    {
      name: "integrations",
      title: "Integrationen",
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

    // Integrations
    {
      name: "fientaOrganizerId",
      title: "Fienta Organizer ID",
      type: "string",
      group: "integrations",
      description:
        "Die Organizer ID von Fienta.com für das Abrufen von Events/Terminen. Zu finden in der URL der Fienta Settings-Seite.",
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
      initialValue: "04294 / 79 67 550",
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
      name: "aboutHeroTitle",
      title: "Über Uns - Haupttitel",
      type: "string",
      group: "about",
      initialValue: "Theaterpur Weyhe",
    },
    {
      name: "aboutHeroSubtitle",
      title: "Über Uns - Untertitel",
      type: "string",
      group: "about",
      initialValue: "Über Uns",
    },
    {
      name: "aboutHeroDescription",
      title: "Über Uns - Beschreibung",
      type: "text",
      rows: 3,
      group: "about",
      initialValue:
        "Seit 2002 bringen wir Leidenschaft, Kunst und Gemeinschaft auf die Bühne. Unser Amateurtheater vereint Menschen, die eine gemeinsame Liebe zum Theater teilen.",
    },
    {
      name: "aboutStoryTitle",
      title: "Unsere Geschichte - Titel",
      type: "string",
      group: "about",
      initialValue: "Unsere Geschichte",
    },
    {
      name: "aboutStory",
      title: "Unsere Geschichte - Inhalt",
      type: "array",
      of: [{ type: "block" }],
      group: "about",
      initialValue: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Theater Pur wurde 2002 in Weyhe gegründet und ist seitdem ein fester Bestandteil der regionalen Kulturszene. Was uns auszeichnet, ist unsere Vielseitigkeit: Wir bringen Theater an ungewöhnliche Orte und begeistern unser Publikum mit einem breiten Repertoire.",
            },
          ],
          style: "normal",
        },
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Unser Ensemble besteht aus rund 15 engagierten Schauspielerinnen und Schauspielern, die mit Herzblut dabei sind. Von kurzen Sketchen über szenische Darbietungen bis hin zu abendfüllenden Comedy-Veranstaltungen – wir lieben die Vielfalt des Theaters. Dabei haben wir auch eigene Stücke erfolgreich auf die Bühne gebracht.",
            },
          ],
          style: "normal",
        },
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Unsere Hauptspielzeit liegt im Winter, wenn wir in verschiedenen Spielstätten auftreten, darunter das Forum der Kooperativen Gesamtschule Leeste und das Kulturforum der KGS Kirchweyhe. Ob Sie selbst mitspielen oder uns als Zuschauer erleben möchten – wir freuen uns immer über neue Gesichter!",
            },
          ],
          style: "normal",
        },
      ],
    },
    {
      name: "aboutImages",
      title: "Über Uns - Bilder",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alternativtext",
              type: "string",
            },
          ],
        },
      ],
      group: "about",
      description: "Bilder für die Über-Uns-Seite",
    },
    {
      name: "aboutTeamTitle",
      title: "Team - Titel",
      type: "string",
      group: "about",
      initialValue: "Das Ensemble",
    },
    {
      name: "aboutTeamSubtitle",
      title: "Team - Untertitel",
      type: "string",
      group: "about",
      initialValue: "Unser Team",
    },
    {
      name: "aboutTeamDescription",
      title: "Team - Beschreibung",
      type: "text",
      rows: 2,
      group: "about",
      initialValue: "Die Menschen hinter den Kulissen und auf der Bühne.",
    },
    {
      name: "aboutContactTitle",
      title: "Kontakt - Titel",
      type: "string",
      group: "about",
      initialValue: "Schreiben Sie uns",
    },
    {
      name: "aboutContactSubtitle",
      title: "Kontakt - Untertitel",
      type: "string",
      group: "about",
      initialValue: "Kontakt",
    },
    {
      name: "aboutContactDescription",
      title: "Kontakt - Beschreibung",
      type: "text",
      rows: 3,
      group: "about",
      initialValue:
        "Haben Sie Fragen, möchten mitmachen oder einfach Hallo sagen? Wir freuen uns auf Ihre Nachricht!",
    },
    {
      name: "aboutHighlights",
      title: "Highlights & Besonderheiten",
      type: "array",
      group: "about",
      of: [
        {
          type: "object",
          name: "highlight",
          title: "Highlight",
          fields: [
            {
              name: "icon",
              title: "Icon (Lucide Name)",
              type: "string",
              options: {
                list: [
                  { title: "Theater", value: "theater" },
                  { title: "Users", value: "users" },
                  { title: "Lightbulb", value: "lightbulb" },
                  { title: "MapPin", value: "map-pin" },
                  { title: "Calendar", value: "calendar" },
                  { title: "Laugh", value: "laugh" },
                ],
              },
              description: "Icon für das Highlight",
            },
            {
              name: "title",
              title: "Titel",
              type: "string",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "description",
              title: "Beschreibung",
              type: "text",
              rows: 3,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      initialValue: [
        {
          icon: "map-pin",
          title: "Theater an ungewöhnlichen Orten",
          description:
            "Wir bringen Theater dorthin, wo man es nicht erwartet. Von Schulen über Kulturzentren bis zu ganz besonderen Locations – jeder Auftritt ist einzigartig.",
        },
        {
          icon: "laugh",
          title: "Vielseitiges Repertoire",
          description:
            "Von kurzen Sketchen über szenische Darbietungen bis hin zu abendfüllenden Comedy-Veranstaltungen – bei uns ist für jeden etwas dabei.",
        },
        {
          icon: "lightbulb",
          title: "Eigene Produktionen",
          description:
            "Wir entwickeln und inszenieren auch eigene Stücke. Kreativität und Innovation stehen bei uns an erster Stelle.",
        },
        {
          icon: "users",
          title: "Gemeinschaft erleben",
          description:
            "Bei uns sind alle willkommen – ob auf der Bühne oder hinter den Kulissen. Theater ist Teamwork und macht gemeinsam am meisten Spaß!",
        },
      ],
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
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "label",
              title: "Label",
              type: "string",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
      initialValue: [
        {
          icon: "calendar",
          value: "seit 2002",
          label: "Aktiv",
        },
        {
          icon: "users",
          value: "~15",
          label: "Ensemble-Mitglieder",
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
        "Ein Amateurtheater mit Leidenschaft seit 2002. Wir lieben, was wir tun - und teilen diese Liebe mit unserem Publikum an ungewöhnlichen Orten.",
    },
    {
      name: "footerDescription",
      title: "Footer Beschreibung",
      type: "text",
      rows: 3,
      group: "footer",
      description: "Brand-Intro im Footer",
      initialValue:
        "Seit 2002 begeistern wir unser Publikum mit leidenschaftlichen Aufführungen an ungewöhnlichen Orten. Von Sketchen über Comedy bis zu eigenen Stücken – Theater in seiner vielfältigsten Form.",
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

export default siteSettingsSchema;
