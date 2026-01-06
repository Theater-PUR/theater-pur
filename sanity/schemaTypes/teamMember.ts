// Schema: Team Member (Teammitglied)
// Copy this to your Sanity Studio schemas folder

export default {
  name: 'teamMember',
  title: 'Teammitglied',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Rolle/Position',
      type: 'string',
      description: 'z.B. "Vorsitzender", "Schauspieler", "Technik"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Biografie',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
      description: 'Niedrigere Zahlen werden zuerst angezeigt',
    },
  ],
  orderings: [
    {
      title: 'Reihenfolge',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Name',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
};
