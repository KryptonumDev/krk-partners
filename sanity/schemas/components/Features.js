import { removeMarkdown } from '../../utils/remove-markdown';

export default {
  name: "Features",
  title: "Wyróżniki",
  type: "object",
  icon: () => '⭐️',
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
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'Features_Item'
        },
      ],
      title: 'Lista',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subheading: 'subheading',
    },
    prepare({ heading, subheading }) {
      return {
        title: `[Wyróżniki] - ${heading} | ${removeMarkdown(subheading)}`,
        icon: () => '⭐️'
      }
    }
  }
}

export const Features_Item = {
  name: "Features_Item",
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
      name: 'title',
      type: 'string',
      title: 'Tytuł',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      rows: 3,
      title: 'Opis',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      icon: 'icon'
    },
    prepare({ title, description, icon }) {
      return {
        title,
        subtitle: description,
        media: icon,
      }
    },
  },
}