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
      of: [{type: 'block'}],
    },
    {
      name: 'synopsis',
      title: 'Ausführliche Beschreibung',
      type: 'array',
      of: [{type: 'block'}],
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
              title: 'Veranstaltungsort',
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                  description: 'z.B. "Theater PUR" oder "Gemeindezentrum St. Matthias"',
                },
                {
                  name: 'street',
                  title: 'Straße und Hausnummer',
                  type: 'string',
                  description: 'z.B. "Musterstraße 123"',
                },
                {
                  name: 'postalCode',
                  title: 'Postleitzahl',
                  type: 'string',
                },
                {
                  name: 'city',
                  title: 'Stadt',
                  type: 'string',
                },
                {
                  name: 'remarks',
                  title: 'Zusätzliche Hinweise',
                  type: 'text',
                  description: 'z.B. "Eingang über den Hinterhof" oder "Parkplätze vorhanden"',
                },
              ],
            },
            {
              name: 'ticketsAvailable',
              title: 'Verfügbare Plätze',
              type: 'number',
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
                    prepare({title, price}: any) {
                      return {
                        title: title,
                        subtitle: `${price} €`,
                      }
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              date: 'date',
              time: 'time',
              locationName: 'location.name',
              locationCity: 'location.city',
            },
            prepare({date, time, locationName, locationCity}: any) {
              const location = locationName || locationCity || 'Kein Ort angegeben'
              return {
                title: `${date} - ${time}`,
                subtitle: location,
              }
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
      media: 'coverImage',
    },
    prepare({title, year, media}: any) {
      return {
        title: title,
        subtitle: `${year}`,
        media: media,
      }
    },
  },
}
