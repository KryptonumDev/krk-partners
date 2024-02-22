import { removeMarkdown } from '../../utils/remove-markdown';

export default {
  name: "Contact",
  title: "Kontakt",
  type: "object",
  icon: () => '📞',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
    },
    {
      name: 'form_Paragraph',
      type: 'string',
      title: 'Paragraf w formularzu',
      validation: Rule => Rule.required(),
    },
    {
      name: 'contact_Paragraph',
      type: 'string',
      title: 'Paragraf w sekcji skontaktuj się',
      validation: Rule => Rule.required(),
    },
    {
      name: 'contact_Person',
      type: 'reference',
      to: [{ type: 'team_Collection' }],
      title: 'Osoba do kontaktu',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `[Kontakt] - ${removeMarkdown(heading)}`,
        icon: () => '📞'
      }
    }
  }
}
