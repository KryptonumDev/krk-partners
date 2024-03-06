import { removeMarkdown } from '../../utils/remove-markdown';

export default {
  name: "ListWithIconAndCta",
  title: "Lista z ikonami i wezwaniem do działania",
  type: "object",
  icon: () => '✅',
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
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'ListWithIconAndCta_Item'
        },
      ],
      title: 'Lista',
      validation: Rule => Rule.required(),
    },
    {
      name: 'ctaPrompt',
      type: 'string',
      title: 'Tekst zachęcający do działania',
      validation: Rule => Rule.required(),
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subheading: 'subheading',
      ctaPrompt: 'ctaPrompt',
    },
    prepare({ heading, subheading, ctaPrompt }) {
      return {
        title: `[Lista z ikonami i wezwaniem do działania] - ${heading} | ${removeMarkdown(subheading)}`,
        subtitle: `${ctaPrompt}`,
        icon: () => '✅'
      }
    }
  }
}

export const ListWithIconAndCta_Item = {
  name: "ListWithIconAndCta_Item",
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
      type: 'text',
      rows: 5,
      title: 'Tytuł',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      icon: 'icon'
    },
    prepare({ title, icon }) {
      return {
        title,
        media: icon,
      }
    },
  },
}