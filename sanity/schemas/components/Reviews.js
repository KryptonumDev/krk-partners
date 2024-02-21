import { removeMarkdown } from '../../utils/remove-markdown';

export default {
  name: "Reviews",
  title: "Opinie",
  type: "object",
  icon: () => '🙋‍♀️',
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
          type: 'Reviews_Item'
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
      list: 'list',
    },
    prepare({ heading, subheading, list }) {
      return {
        title: `[Opinie] - ${heading} | ${removeMarkdown(subheading)}`,
        subtitle: `${list?.length || 0} opinii`,
        icon: () => '🙋‍♀️'
      }
    }
  }
}

export const Reviews_Item = {
  name: "Reviews_Item",
  title: "Element",
  type: "object",
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa',
      validation: Rule => Rule.required(),
    },
    {
      name: 'review',
      type: 'text',
      rows: 8,
      title: 'Opinia',
      validation: Rule => Rule.required(),
    },
    {
      name: 'amount',
      type: 'string',
      title: 'Kwota pożyczki (opcjonalnie)',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'review',
      media: 'img'
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle,
        media,
      }
    },
  },
}