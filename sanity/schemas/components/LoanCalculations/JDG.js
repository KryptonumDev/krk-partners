export default {
  name: 'JDG',
  title: 'Jednoosobowa działalność gospodarcza',
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
    {
      name: 'additionalCalculationsMultiplier',
      type: 'number',
      title: 'Dodatkowy mnożnik przy obliczeniach prowizji',
      description: 'Wartość mnożnika, np. 0.040833333',
      validation: (Rule) => Rule.required(),
    },
  ],
}
