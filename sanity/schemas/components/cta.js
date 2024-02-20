export default {
  name: 'cta',
  title: 'Wezwanie do działania',
  type: 'object',
  fields: [
    {
      name: 'theme',
      type: 'string',
      title: 'Rodzaj przycisku',
      options: {
        list: [
          { title: "Główny", value: "primary" },
          { title: "Dodatkowy", value: "secondary" },
        ],
        layout: 'radio',
        direction: "horizontal"
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'primary',
    },
    {
      name: 'text',
      type: 'string',
      title: 'Tekst',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'href',
      type: 'string',
      title: 'Link',
      description: 'Link relatywny lub absolutny (z https://)',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (value && !value.startsWith('/') && !value.startsWith('https://')) {
            return 'Nieprawidłowy adres URL.'
          }
          return true
        }).required(),
    },
  ],
  preview: {
    select: {
      text: 'text',
      href: 'href',
    },
    prepare({ text, href }) {
      return {
        title: `${text}' kierujący do '${href}'`
      }
    }
  },
}