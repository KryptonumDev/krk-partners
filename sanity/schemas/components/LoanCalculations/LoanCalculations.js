export default {
  name: 'LoanCalculations',
  title: 'Obliczenia kredytowe',
  type: 'object',
  fields: [
    {
      name: 'JDGSmall',
      type: 'JDG',
      title: 'Jednoosobowa działalność gospodarcza (najmniejszy przedział)',
      validation: (Rule) => Rule.required(),
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'JDGMedium',
      type: 'JDG',
      title: 'Jednoosobowa działalność gospodarcza (średni przedział)',
      validation: (Rule) => Rule.required(),
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'JDGHigh',
      type: 'JDG',
      title: 'Jednoosobowa działalność gospodarcza (najwyższy przedział)',
      validation: (Rule) => Rule.required(),
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'SPHSmall',
      type: 'SPH',
      title: 'Spółki Prawa Handlowego (najmniejszy przedział)',
      validation: (Rule) => Rule.required(),
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'SPHMedium',
      type: 'SPH',
      title: 'Spółki Prawa Handlowego (średni przedział)',
      validation: (Rule) => Rule.required(),
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'SPHHigh',
      type: 'SPH',
      title: 'Spółki Prawa Handlowego (najwyższy przedział)',
      validation: (Rule) => Rule.required(),
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'earlyPaymentFeeMultiplier',
      type: 'number',
      title: 'Mnożnik odsetek za wcześniejszą spłatę',
      description: 'Wartość mnożnika, np. 0.0535',
      validation: (Rule) => Rule.required(),
      options: { collapsible: true, collapsed: true },
    },
  ],
}
