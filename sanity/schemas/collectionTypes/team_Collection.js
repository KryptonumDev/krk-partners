export default {
  name: 'team_Collection',
  title: 'Członkowie zespołu',
  type: 'document',
  icon: () => '🙋🏻‍♂️',
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
      title: 'Imię i nazwisko',
      validation: Rule => Rule.required(),
    },
    {
      name: 'position',
      type: 'markdown',
      title: 'Stanowisko',
      validation: Rule => Rule.required(),
    },
    {
      name: 'tel',
      type: 'string',
      title: 'Telefon (opcjonalnie)',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Adres e-mail (opcjonalnie)',
      validation: Rule => Rule.email(),
    }
  ],
  preview: {
    select: {
      title: 'name',
      tel: 'tel',
      email: 'email',
      media: 'img',
    },
    prepare({ title, tel, email, media }) {
      return {
        title: title,
        subtitle: `${tel || 'Brak numeru telefonu'} | ${email || 'Brak adresu e-mail'}`,
        media,
      }
    }
  },
}
