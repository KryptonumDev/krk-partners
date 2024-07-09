export default {
  name: 'global',
  title: 'Globalne',
  type: 'document',
  icon: () => '🌍',
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'Adres e-mail',
      validation: Rule => Rule.required().email(),
    },
    {
      name: 'tel',
      type: 'string',
      title: 'Numer telefonu',
      validation: Rule => Rule.required(),
    },
    {
      name: 'CookieConsent',
      type: 'CookieConsent',
    },
    {
      name: 'seo',
      type: 'global_Seo',
      title: 'Globalne SEO',
    },
    {
      name: 'robotsIndex',
      type: 'boolean',
      title: 'Indeksowanie przez roboty SEO',
      description: 'Po włączeniu roboty SEO (takie jak Google) będą mogły indeksować witrynę w wyszukiwarkach.'
    },
  ],
  fieldsets: [
    {
      name: 'nav',
      title: 'Nawigacja',
      options: {
        collapsible: true
      }
    },
    {
      name: 'social',
      title: 'Social linki',
      options: {
        collapsible: true,
        collapsed: true,
      }
    }
  ]
}

export const global_Seo = {
  name: "global_Seo",
  title: "Global SEO",
  type: "object",
  fields: [
    {
      name: 'og_Img',
      type: 'image',
      title: 'OG Image',
      description: 'Zdjęcie, które jest widoczne przy udostępnianiu strony w mediach społecznościowych. Wymiary zdjęcia powinny mieć 1200x630px'
    },
  ]
}
