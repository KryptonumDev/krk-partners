import { removeMarkdown } from '../../utils/remove-markdown';

export default {
  name: "Team",
  title: "Sekcja zespół",
  type: "object",
  icon: () => '👥',
  fields: [
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'team_Collection' }]
        },
      ],
      title: 'Lista osób',
      validation: Rule => Rule.required(),
    },
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'block1_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'block1',
    },
    {
      name: 'block1_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
      fieldset: 'block1',
    },
    {
      name: 'block2_Heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'block2',
    },
    {
      name: 'block2_Paragraph',
      type: 'markdown',
      title: 'Paragraf',
      validation: Rule => Rule.required(),
      fieldset: 'block2',
    },
  ],
  fieldsets: [
    {
      name: 'block1',
      title: 'Pierwszy blok tekstu',
    },
    {
      name: 'block2',
      title: 'Drugi blok tekstu',
    }
  ],
  preview: {
    select: {
      heading: 'heading',
      list: 'list',
    },
    prepare({ heading, list }) {
      return {
        title: `[Sekcja zespół] - ${removeMarkdown(heading)}`,
        subtitle: list?.length > 0 ? `${list.length} członków zespołu` : 'Brak członków zespołu',
        icon: () => '👥'
      }
    }
  }
}
