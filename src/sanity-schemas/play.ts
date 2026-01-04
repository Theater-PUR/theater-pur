// Schema: Play (Theaterstück)
// Copy this to your Sanity Studio schemas folder

export default {
  name: 'play',
  title: 'Theaterstück',
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
      name: 'isCurrent',
      title: 'Aktuelles Stück',
      type: 'boolean',
      description: 'Ist dies das aktuell laufende Stück?',
      initialValue: false,
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
      name: 'author',
      title: 'Autor',
      type: 'string',
      description: 'z.B. "William Shakespeare"',
    },
    {
      name: 'director',
      title: 'Regie',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Jahr',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1900).max(2100),
    },
    {
      name: 'description',
      title: 'Kurzbeschreibung',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'synopsis',
      title: 'Ausführliche Beschreibung',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'cast',
      title: 'Besetzung',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'castMember',
          title: 'Darsteller',
          fields: [
            {
              name: 'actorName',
              title: 'Name des Schauspielers',
              type: 'string',
            },
            {
              name: 'roleName',
              title: 'Rolle',
              type: 'string',
            },
            {
              name: 'photo',
              title: 'Foto',
              type: 'image',
            },
          ],
          preview: {
            select: {
              title: 'actorName',
              subtitle: 'roleName',
              media: 'photo',
            },
          },
        },
      ],
    },
    {
      name: 'performances',
      title: 'Aufführungstermine',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'performance',
          title: 'Aufführung',
          fields: [
            {
              name: 'date',
              title: 'Datum',
              type: 'date',
            },
            {
              name: 'time',
              title: 'Uhrzeit',
              type: 'string',
              description: 'z.B. "19:30 Uhr"',
            },
            {
              name: 'location',
              title: 'Ort',
              type: 'string',
            },
            {
              name: 'ticketsAvailable',
              title: 'Verfügbare Plätze',
              type: 'number',
            },
          ],
          preview: {
            select: {
              date: 'date',
              time: 'time',
              location: 'location',
            },
            prepare({ date, time, location }: any) {
              return {
                title: `${date} - ${time}`,
                subtitle: location,
              };
            },
          },
        },
      ],
    },
    {
      name: 'ticketPrices',
      title: 'Eintrittspreise',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'ticketPrice',
          title: 'Preiskategorie',
          fields: [
            {
              name: 'category',
              title: 'Kategorie',
              type: 'string',
              description: 'z.B. "Normal", "Ermäßigt", "Kinder"',
            },
            {
              name: 'price',
              title: 'Preis (€)',
              type: 'number',
            },
            {
              name: 'description',
              title: 'Beschreibung',
              type: 'string',
              description: 'z.B. "Schüler, Studenten, Schwerbehinderte"',
            },
          ],
          preview: {
            select: {
              title: 'category',
              price: 'price',
            },
            prepare({ title, price }: any) {
              return {
                title: title,
                subtitle: `${price} €`,
              };
            },
          },
        },
      ],
    },
    {
      name: 'gallery',
      title: 'Bildergalerie',
      type: 'array',
      of: [
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
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      isCurrent: 'isCurrent',
      media: 'coverImage',
    },
    prepare({ title, year, isCurrent, media }: any) {
      return {
        title: title,
        subtitle: `${year}${isCurrent ? ' (Aktuell)' : ''}`,
        media: media,
      };
    },
  },
};
