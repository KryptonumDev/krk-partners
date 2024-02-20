import { removeMarkdown } from '../../utils/remove-markdown';

export default {
  name: "Comparison",
  title: "Porównanie",
  type: "object",
  icon: () => '📶',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'subheading',
      type: 'markdown',
      title: 'Podnagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'tableHeader',
      type: 'array',
      of: [
        {
          type: 'Comparison_TableHeader'
        },
      ],
      title: 'Nagłówki tabeli',
      validation: Rule => Rule.required().min(3).max(3),
    },
    {
      name: 'tableItems',
      type: 'array',
      of: [
        {
          type: 'Comparison_TableItems'
        },
      ],
      title: 'Elementy tabeli',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subheading: 'subheading',
    },
    prepare({ heading, subheading }) {
      return {
        title: `[Porównanie] - ${heading} | ${removeMarkdown(subheading)}`,
        icon: () => '📶'
      }
    }
  }
}

export const Comparison_TableHeader = {
  name: "Comparison_TableHeader",
  title: "Element",
  type: "object",
  fields: [
    {
      name: 'icon',
      type: 'image',
      title: 'Ikona',
      description: 'Ikona w formacie SVG.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      icon: 'icon',
      name: 'name',
    },
    prepare({ icon, name }) {
      return {
        title: name,
        media: icon,
      }
    },
  },
}

export const Comparison_TableItems = {
  name: "Comparison_TableItems",
  title: "Element",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'option1_Name',
      type: 'string',
      title: 'Nazwa opcji 1',
      validation: Rule => Rule.required(),
      fieldset: 'elements',
    },
    {
      name: 'option2_Name',
      type: 'string',
      title: 'Nazwa opcji 2',
      validation: Rule => Rule.required(),
      fieldset: 'elements',
    },
    {
      name: 'option3_Name',
      type: 'string',
      title: 'Nazwa opcji 3',
      validation: Rule => Rule.required(),
      fieldset: 'elements',
    },
    {
      name: 'option1_Color',
      type: 'string',
      options: {
        list: [
          { title: 'Zielony', value: 'green' },
          { title: 'Pomarańczowy', value: 'orange' },
          { title: 'Czerwony', value: 'red' },
        ]
      },
      title: 'Kolor opcji 1',
      validation: Rule => Rule.required(),
      fieldset: 'elements',
    },
    {
      name: 'option2_Color',
      type: 'string',
      options: {
        list: [
          { title: 'Zielony', value: 'green' },
          { title: 'Pomarańczowy', value: 'orange' },
          { title: 'Czerwony', value: 'red' },
        ]
      },
      title: 'Kolor opcji 2',
      validation: Rule => Rule.required(),
      fieldset: 'elements',
    },
    {
      name: 'option3_Color',
      type: 'string',
      options: {
        list: [
          { title: 'Zielony', value: 'green' },
          { title: 'Pomarańczowy', value: 'orange' },
          { title: 'Czerwony', value: 'red' },
        ]
      },
      title: 'Kolor opcji 3',
      validation: Rule => Rule.required(),
      fieldset: 'elements',
    },
  ],
  fieldsets: [
    {
      name: 'elements',
      title: 'Elementy',
      options: { columns: 3 },
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      option1_Name: 'option1_Name',
      option2_Name: 'option2_Name',
      option3_Name: 'option3_Name',
    },
    prepare({ heading, option1_Name, option2_Name, option3_Name }) {
      return {
        title: heading,
        subtitle: `${option1_Name} | ${option2_Name} | ${option3_Name}`,
      }
    },
  },
}