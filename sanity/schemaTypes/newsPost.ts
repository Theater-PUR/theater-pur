// Schema: News Post (Neuigkeit)
// Copy this to your Sanity Studio schemas folder

export default {
  name: 'newsPost',
  title: 'Neuigkeit',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL-Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Titelbild',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternativtext',
          type: 'string',
        },
      ],
    },
    {
      name: 'excerpt',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 3,
      description: 'Eine kurze Zusammenfassung für die Vorschau',
      validation: (Rule: any) => Rule.required().max(300),
    },
    {
      name: 'content',
      title: 'Inhalt',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alternativtext',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Bildunterschrift',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Veröffentlichungsdatum',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Backstage', value: 'Backstage' },
          { title: 'Ankündigung', value: 'Ankündigung' },
          { title: 'Aufführung', value: 'Aufführung' },
          { title: 'Team', value: 'Team' },
          { title: 'Events', value: 'Events' },
          { title: 'Workshop', value: 'Workshop' },
          { title: 'Sonstiges', value: 'Sonstiges' },
        ],
      },
    },
  ],
  orderings: [
    {
      title: 'Veröffentlichungsdatum (Neueste zuerst)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
      category: 'category',
      media: 'coverImage',
    },
    prepare({ title, date, category, media }: any) {
      return {
        title: title,
        subtitle: `${category || 'Keine Kategorie'} • ${date ? new Date(date).toLocaleDateString('de-DE') : 'Kein Datum'}`,
        media: media,
      };
    },
  },
};
