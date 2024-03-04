export default {
  name: 'QuickApplication',
  title: 'Szybka aplikacja',
  type: 'object',
  icon: () => '🚀',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Nagłówek',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      title: 'Lista',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({heading}) {
      return {
        title: `[Szybka aplikacja] - ${heading}`,
        icon: () => icon,
      }
    },
  },
}
