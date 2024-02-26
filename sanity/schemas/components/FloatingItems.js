import { removeMarkdown } from '../../utils/remove-markdown';

const title = 'Sekcja z elementami umieszczonymi nieregularnie';
const icon = '🌥️';

export default {
  name: "FloatingItems",
  title: title,
  type: "object",
  icon: () => icon,
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'FloatingItems_List'
        },
      ],
      title: 'Lista elementów',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      list: 'list',
    },
    prepare({ heading, list }) {
      return {
        title: `[${title}] - ${removeMarkdown(heading)}`,
        subtitle: `${list?.length || 0} elementów`,
        icon: () => icon,
      }
    }
  }
}

export const FloatingItems_List = {
  name: "FloatingItems_List",
  title: "Element",
  type: "object",
  fields: [
    {
      name: 'isHighlighted',
      type: 'boolean',
      title: 'Czy ma być wyróżniony graficznie?',
      initialValue: false,
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Ikona',
      description: 'Ikona powinna być w formacie SVG.',
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
      isHighlighted: 'isHighlighted',
      media: 'icon',
      name: 'name'
    },
    prepare({ isHighlighted, media, name }) {
      return {
        title: removeMarkdown(name),
        subtitle: isHighlighted ? '⭐️ Wyróżniony graficznie' : '',
        media,
      }
    },
  },
}
