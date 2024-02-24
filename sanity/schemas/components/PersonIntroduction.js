import { removeMarkdown } from '../../utils/remove-markdown';

export default {
  name: "PersonIntroduction",
  title: "Sekcja przedstawienie osoby",
  type: "object",
  icon: () => '🙋🏻',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Imię i nazwisko',
      validation: Rule => Rule.required(),
    },
    {
      name: 'position',
      type: 'string',
      title: 'Stanowisko (opcjonalnie)',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Zdjęcie',
      validation: Rule => Rule.required(),
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      validation: Rule => Rule.required(),
    },
    {
      name: 'text',
      type: 'markdown',
      title: 'Tekst',
      validation: Rule => Rule.required(),
    },
    {
      name: 'signature',
      type: 'image',
      title: 'Sygnatura (opcjonalnie)',
    },
  ],
  preview: {
    select: {
      name: 'name',
      position: 'position',
      text: 'text',
      media: 'img',
    },
    prepare({ name, position, text, media }) {
      return {
        title: `[Sekcja przedstawienie osoby] - ${name}${position ? ` | ${position}` : ''}`,
        subtitle: removeMarkdown(text),
        media,
        icon: () => '🙋🏻',
      }
    }
  }
}