import { removeMarkdown } from '../../utils/remove-markdown';

export default {
  name: "FloatingTilesAndImages",
  title: "Sekcja z obrazami oraz unoszącymi się elementami",
  type: "object",
  icon: () => '☁️',
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
      name: 'paragraphCta',
      type: 'cta',
      title: 'Wezwanie do działania (opcjonalnie)',
    },
    {
      name: 'list_Paragraph',
      type: 'string',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
      fieldset: 'list',
    },
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'FloatingTilesAndImages_List'
        },
      ],
      title: 'Lista elementów',
      validation: Rule => Rule.required(),
      fieldset: 'list',
    },
    {
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'FloatingTilesAndImages_Images'
        },
      ],
      title: 'Zdjęcia',
      validation: Rule => Rule.required(),
    },
    {
      name: 'ctaPrompt',
      type: 'markdown',
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
  fieldsets: [
    {
      name: 'list',
      title: 'Lista',
    }
  ],
  preview: {
    select: {
      heading: 'heading',
      subheading: 'subheading',
      list: 'list',
      images: 'images',
    },
    prepare({ heading, subheading, list, images }) {
      return {
        title: `[Sekcja z obrazami oraz unoszącymi się elementami] - ${heading} | ${removeMarkdown(subheading)}`,
        subtitle: `${list?.length || 0} elementów | ${images?.length || 0} zdjęć`,
        icon: () => '☁️'
      }
    }
  }
}

export const FloatingTilesAndImages_Images = {
  name: "FloatingTilesAndImages_Images",
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
  ],
  preview: {
    select: {
      img: 'img',
      name: 'name'
    },
    prepare({ img, name }) {
      return {
        title: name,
        media: img,
      }
    },
  },
}

export const FloatingTilesAndImages_List = {
  name: "FloatingTilesAndImages_List",
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
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      title: 'Lista',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      icon: 'icon',
      list: 'list'
    },
    prepare({ icon, list }) {
      return {
        title: list.join(', '),
        media: icon,
      }
    },
  },
}
