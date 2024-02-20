import { removeMarkdown } from '../../utils/remove-markdown';

export default {
  name: "StatsGrid",
  title: "Statystyki z kafelkami",
  type: "object",
  icon: () => '📈',
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
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
    {
      name: 'tile1_Heading',
      type: 'string',
      title: 'Tytuł do kafelka 1',
      validation: Rule => Rule.required(),
      fieldset: 'tile1',
    },
    {
      name: 'tile1_Img',
      type: 'image',
      title: 'Zdjęcie do kafelka 1',
      validation: Rule => Rule.required(),
      fieldset: 'tile1',
    },
    {
      name: 'tile2_Heading',
      type: 'string',
      title: 'Tytuł do kafelka 2',
      validation: Rule => Rule.required(),
      fieldset: 'tile2',
    },
    {
      name: 'tile2_Img',
      type: 'image',
      title: 'Zdjęcie do kafelka 2',
      validation: Rule => Rule.required(),
      fieldset: 'tile2',
    },
    {
      name: 'tile3_Heading',
      type: 'string',
      title: 'Tytuł do kafelka 3',
      validation: Rule => Rule.required(),
      fieldset: 'tile3',
    },
    {
      name: 'tile3_Img',
      type: 'image',
      title: 'Zdjęcie do kafelka 3',
      validation: Rule => Rule.required(),
      fieldset: 'tile3',
    },
    {
      name: 'tile4_Heading',
      type: 'string',
      title: 'Tytuł do kafelka 4',
      validation: Rule => Rule.required(),
      fieldset: 'tile4',
    },
    {
      name: 'tile4_Img',
      type: 'image',
      title: 'Zdjęcie do kafelka 4',
      validation: Rule => Rule.required(),
      fieldset: 'tile4',
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      validation: Rule => Rule.required(),
    },
  ],
  fieldsets: [
    {
      name: 'tile1',
      title: 'Kafelek 1',
    },
    {
      name: 'tile2',
      title: 'Kafelek 2',
    },
    {
      name: 'tile3',
      title: 'Kafelek 3',
    },
    {
      name: 'tile4',
      title: 'Kafelek 4',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subheading: 'subheading',
    },
    prepare({ heading, subheading }) {
      return {
        title: `[Statystyki z kafelkami] - ${heading} | ${removeMarkdown(subheading)}`,
        icon: () => '📈'
      }
    }
  }
}