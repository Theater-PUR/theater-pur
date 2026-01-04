// Schema: Site Settings (Seiteneinstellungen)
// Copy this to your Sanity Studio schemas folder

export default {
  name: 'siteSettings',
  title: 'Seiteneinstellungen',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Seitentitel',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Seitenbeschreibung',
      type: 'text',
      rows: 3,
      description: 'Für SEO und Social Media',
    },
    {
      name: 'contactEmail',
      title: 'Kontakt E-Mail',
      type: 'string',
      validation: (Rule: any) => Rule.email(),
    },
    {
      name: 'contactPhone',
      title: 'Telefonnummer',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'text',
      rows: 3,
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
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
  ],
  preview: {
    prepare() {
      return {
        title: 'Seiteneinstellungen',
      };
    },
  },
};
