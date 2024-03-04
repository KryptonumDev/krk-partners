import { removeMarkdown } from '../../utils/remove-markdown';

export default {
  name: "Steps",
  title: "Sekcja poszczególne kroki",
  type: "object",
  icon: () => '🦶',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'timeline',
      type: 'array',
      of: [
        {
          type: 'Steps_Timeline'
        }
      ],
      title: 'Kroki',
      validation: Rule => Rule.required(),
    },
    {
      name: 'cta_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'cta',
    },
    {
      name: 'cta_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      description: 'Umieść zmienną: `${date}`, aby pokazać datę 6 dni roboczych od dnia dzisiejszego',
      validation: Rule => Rule.required(),
      fieldset: 'cta',
    },
    {
      name: 'cta_Cta',
      type: 'cta',
      title: 'Wezwanie do działania',
      validation: Rule => Rule.required(),
      fieldset: 'cta',
    },
    {
      name: 'cta_Img',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required(),
      fieldset: 'cta',
    },
  ],
  fieldsets: [
    {
      name: 'cta',
      title: 'Wezwanie do działania',
    }
  ],
  preview: {
    select: {
      heading: 'heading',
      timeline: 'timeline',
    },
    prepare({ heading, timeline }) {
      return {
        title: `[Sekcja poszczególne kroki] - ${removeMarkdown(heading)}`,
        subtitle: timeline?.length > 0 ? `${timeline.length} kroków` : 'Brak kroków',
        icon: () => '🦶'
      }
    }
  }
}

export const Steps_Timeline = {
  name: "Steps_Timeline",
  title: "Element",
  type: "object",
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa kroku',
      validation: Rule => Rule.required(),
    },
    {
      name: 'when',
      type: 'string',
      title: 'Kiedy?',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: 'name',
      when: 'when',
    },
    prepare({ name, when }) {
      return {
        title: name,
        subtitle: when,
      }
    },
  },
}