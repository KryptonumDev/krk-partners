const title = 'Szybka aplikacja wniosku z formularzem'
const icon = '⚡️';

export default {
  name: 'QuickApplication',
  title: title,
  type: 'object',
  icon: () => icon,
  fields: [
    {
      name: 'heading',
      type: 'markdown',
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
    prepare({ heading }) {
      return {
        title: `[${title}] - ${heading}`,
        icon: () => icon,
      }
    },
  },
}
