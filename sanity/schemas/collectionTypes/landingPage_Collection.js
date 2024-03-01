import {slugify} from '../../utils/slugify'

export default {
  name: 'landingPage_Collection',
  title: 'Strony lądowania',
  type: 'document',
  icon: () => '🛬',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
      description:
        'Do adresu URL zostanie dodany automatycznie prefix "/landing" - np. "/landing/twoj-slug"',
      options: {
        source: 'name',
        slugify: (input) => `${slugify(input)}`,
      },
      validation: (Rule) =>
        Rule.custom(({current: slug}) => {
          if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
            return 'Slug może zawierać tylko małe litery, cyfry oraz łączniki. Upewnij się, że nie zawiera on znaków specjalnych ani wielkich liter.'
          }
          return true
        }).required(),
    },
    {
      name: 'content',
      type: 'content',
      title: 'Komponenty podstrony',
    },
    {
      name: 'contactPerson',
      type: 'reference',
      to: [{type: 'team_Collection'}],
      title: 'Osoba kontaktowa',
      description:
        'Osoba, która wyświetli się jako osoba kontaktowa, np. po poprawnym wysłaniu formularza kontaktowego.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'loanCalculations',
      title: 'Dane do obliczeń kredytowych',
      type: 'LoanCalculations',
      options: {collapsible: true, collapsed: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
    },
  },
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
}
