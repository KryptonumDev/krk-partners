import { removeMarkdown } from '../../utils/remove-markdown';

export default {
  name: "CaseStudy",
  title: "Studium przypadku",
  type: "object",
  icon: () => '🤝',
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
          type: 'CaseStudy_Item'
        },
      ],
      title: 'Lista',
      validation: Rule => Rule.required().max(3),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subheading: 'subheading',
    },
    prepare({ heading, subheading }) {
      return {
        title: `[Studium przypadku] - ${heading} | ${removeMarkdown(subheading)}`,
        icon: () => '🤝'
      }
    }
  }
}

export const CaseStudy_Item = {
  name: "CaseStudy_Item",
  title: "Element",
  type: "object",
  fields: [
    {
      name: 'tab',
      type: 'string',
      title: 'Zakładka',
      validation: Rule => [
        Rule.required(),
        Rule.max(18).warning('Pamiętaj, aby zakładka była możliwie jak najkrótsza.')
      ],
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
    },
    {
      name: 'ctaPrompt',
      type: 'markdown',
      title: 'Tekst zachęcający do działania (opcjonalnie)',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      validation: Rule => Rule.required(),
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Ikona',
      description: 'Ikona w formacie SVG.',
      validation: Rule => Rule.required(),
    },
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      tab: 'tab',
      paragraph: 'paragraph',
      cta: 'cta',
      media: 'img'
    },
    prepare({ tab, paragraph, cta, media }) {
      return {
        title: `${tab} | ${removeMarkdown(paragraph)}`,
        subtitle: `'${cta.text}' kierujący do '${cta.href}'`,
        media,
      }
    },
  },
}