import { removeMarkdown } from '../../utils/remove-markdown';

const title = 'Sekcja HERO z wnioskiem';
const icon = '📝';

export default {
  name: "HeroApplication",
  title: title,
  type: "object",
  icon: () => icon,
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
      name: 'rating_Value',
      type: 'number',
      options: {
        list: [1, 2, 3, 4, 5],
      },
      title: 'Ocena (skala 1-5)',
      fieldset: 'testimonial',
      validation: Rule => Rule.required(),
    },
    {
      name: 'rating_Count',
      type: 'number',
      title: 'Ilość opinii',
      fieldset: 'testimonial',
      validation: Rule => Rule.required(),
    },
    {
      name: 'rating_Link',
      type: 'string',
      title: 'Link do opinii',
      fieldset: 'testimonial',
      validation: Rule => Rule.required(),
    },
    {
      name: 'testimonial_Img',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required(),
      fieldset: 'testimonial',
    },
    {
      name: 'testimonial_Name',
      type: 'string',
      title: 'Imię',
      validation: Rule => Rule.required(),
      fieldset: 'testimonial',
    },
    {
      name: 'testimonial_Industry',
      type: 'string',
      title: 'Branża (opcjonalnie)',
      fieldset: 'testimonial',
    },
    {
      name: 'testimonial_Text',
      type: 'text',
      rows: 3,
      title: 'Opinia',
      validation: Rule => Rule.required(),
      fieldset: 'testimonial',
    },
    {
      name: 'form_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'form',
    },
    {
      name: 'form_Features',
      type: 'array',
      of: [
        {
          type: 'string'
        },
      ],
      title: 'Wyznaczniki',
      validation: Rule => Rule.required(),
      fieldset: 'form',
    },
  ],
  fieldsets: [
    {
      name: 'testimonial',
      title: 'Opinia',
    },
    {
      name: 'form',
      title: 'Formularz',
    }
  ],
  preview: {
    select: {
      heading: 'heading',
      subheading: 'subheading',
    },
    prepare({ heading, subheading }) {
      return {
        title: `[${title}] - ${heading} | ${removeMarkdown(subheading)}`,
        icon: () => icon,
      }
    }
  }
}
