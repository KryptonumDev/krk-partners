import { removeMarkdown } from '../../utils/remove-markdown';

export default {
  name: "Faq",
  title: "Sekcja FAQ",
  type: "object",
  icon: () => '❓',
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
          type: 'Faq_List'
        },
      ],
      title: 'Lista pytań i odpowiedzi',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subheading: 'subheading',
      list: 'list',
    },
    prepare({ heading, subheading, list }) {
      return {
        title: `[Sekcja FAQ] - ${heading} | ${removeMarkdown(subheading)}`,
        subtitle: `${list?.length || 0} elementy/-ów FAQ`,
        icon: () => '❓'
      }
    }
  }
}

export const Faq_List = {
  name: "Faq_List",
  title: "Element",
  type: "object",
  fields: [
    {
      name: 'question',
      type: 'text',
      rows: 2,
      title: 'Pytanie',
      validation: Rule => Rule.required(),
    },
    {
      name: 'answer',
      type: 'markdown',
      title: 'Odpowiedź',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      question: 'question',
      answer: 'answer',
    },
    prepare({ question, answer }) {
      return {
        title: question,
        subtitle: removeMarkdown(answer),
      }
    },
  },
}