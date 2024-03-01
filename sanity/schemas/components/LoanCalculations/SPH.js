export default {
  name: 'SPH',
  title: 'Spółki Prawa Handlowego (SPH)',
  type: 'object',
  fields: [
    {
      name: 'from',
      type: 'number',
      title: 'Od',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'to',
      type: 'number',
      title: 'Do',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'comission',
      type: 'number',
      title: 'Prowizja',
      description: 'Wartość prowizji w procentach',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'interest',
      type: 'number',
      title: 'Odsetki',
      description: 'Wartość odsetek w procentach',
      validation: (Rule) => Rule.required(),
    },
  ],
}
