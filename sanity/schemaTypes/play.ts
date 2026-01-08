// Schema: Play (Theaterstück)
// Copy this to your Sanity Studio schemas folder

/* eslint-disable @typescript-eslint/no-explicit-any */

const playSchema = {
  name: "play",
  title: "Theaterstück",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "URL-Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "coverImage",
      title: "Titelbild",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternativtext",
          type: "string",
        },
      ],
    },
    {
      name: "author",
      title: "Autor",
      type: "string",
      description: 'z.B. "William Shakespeare"',
    },
    {
      name: "director",
      title: "Regie",
      type: "string",
    },
    {
      name: "year",
      title: "Jahr",
      type: "number",
      validation: (Rule: any) => Rule.required().min(1900).max(2100),
    },
    {
      name: "duration",
      title: "Dauer",
      type: "string",
      description: 'z.B. "ca. 2 Stunden (inkl. Pause)"',
    },
    {
      name: "description",
      title: "Kurzbeschreibung",
      type: "array",
      of: [{ type: "block" }],
      description:
        "Kurze Zusammenfassung (~100-200 Wörter). Wird auf der Homepage, im Archiv und in Vorschaukarten angezeigt.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "synopsis",
      title: "Ausführliche Beschreibung (Optional)",
      type: "array",
      of: [{ type: "block" }],
      description:
        "Detaillierte Beschreibung des Stücks (~300-500 Wörter). Wird nur auf der Detailseite des Stücks angezeigt. Falls nicht ausgefüllt, wird die Kurzbeschreibung verwendet.",
    },
    {
      name: "cast",
      title: "Besetzung",
      type: "array",
      of: [
        {
          type: "object",
          name: "castMember",
          title: "Darsteller",
          fields: [
            {
              name: "actorName",
              title: "Name des Schauspielers",
              type: "string",
            },
            {
              name: "roleName",
              title: "Rolle",
              type: "string",
            },
            {
              name: "photo",
              title: "Foto",
              type: "image",
            },
          ],
          preview: {
            select: {
              title: "actorName",
              subtitle: "roleName",
              media: "photo",
            },
          },
        },
      ],
    },
    {
      name: "gallery",
      title: "Bildergalerie",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              title: "Alternativtext",
              type: "string",
            },
            {
              name: "caption",
              title: "Bildunterschrift",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      year: "year",
      media: "coverImage",
    },
    prepare({ title, year, media }: any) {
      return {
        title: title,
        subtitle: `${year}`,
        media: media,
      };
    },
  },
};

export default playSchema;
