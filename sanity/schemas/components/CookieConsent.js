import { removeMarkdown } from '../../utils/remove-markdown';

const title = 'Baner z informacją o ciasteczkach';
const icon = '🍪';

export default {
  name: "CookieConsent",
  title: title,
  type: "object",
  icon: () => icon,
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: 'consent_Heading',
      type: 'string',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'consent'
    },
    {
      name: 'consent_Paragraph',
      type: 'text',
      rows: 5,
      title: 'Paragraf',
      validation: Rule => Rule.required(),
      fieldset: 'consent'
    },
    {
      name: 'details',
      type: 'CookieConsent_Details',
      title: 'Szczegóły',
      validation: Rule => Rule.required(),
      fieldset: 'details'
    },
    {
      name: 'info_Heading',
      type: 'string',
      title: 'Nagłówek',
      validation: Rule => Rule.required(),
      fieldset: 'info'
    },
    {
      name: 'info_Paragraph',
      type: 'text',
      rows: 13,
      title: 'Paragraf',
      validation: Rule => Rule.required(),
      fieldset: 'info'
    },
  ],
  fieldsets: [
    {
      name: 'consent',
      title: 'Zgoda',
    },
    {
      name: 'details',
      title: 'Szczegóły',
    },
    {
      name: 'info',
      title: 'O cookies',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `[${icon} ${title}] - ${removeMarkdown(heading)}`,
        icon: () => icon
      }
    }
  }
}

export const CookieConsent_Details = {
  name: "CookieConsent_Details",
  type: "object",
  title: 'Szczegóły',
  fields: [
    {
      name: 'necessary',
      type: 'array',
      of: [
        {
          type: 'CookieConsent_Details_List'
        },
      ],
      title: 'Lista',
      fieldset: 'necessary',
    },
    {
      name: 'necessary_Description',
      type: 'text',
      rows: 5,
      title: 'Opis',
      validation: Rule => Rule.required(),
      fieldset: 'necessary',
    },
    {
      name: 'statistical',
      type: 'array',
      of: [
        {
          type: 'CookieConsent_Details_List'
        },
      ],
      title: 'Lista',
      fieldset: 'statistical',
    },
    {
      name: 'statistical_Description',
      type: 'text',
      rows: 5,
      title: 'Opis',
      validation: Rule => Rule.required(),
      fieldset: 'statistical',
    },
    {
      name: 'marketing',
      type: 'array',
      of: [
        {
          type: 'CookieConsent_Details_List'
        },
      ],
      title: 'Lista',
      fieldset: 'marketing',
    },
    {
      name: 'marketing_Description',
      type: 'text',
      rows: 5,
      title: 'Opis',
      validation: Rule => Rule.required(),
      fieldset: 'marketing',
    },
    {
      name: 'preferences',
      type: 'array',
      of: [
        {
          type: 'CookieConsent_Details_List'
        },
      ],
      title: 'Lista',
      fieldset: 'preferences',
    },
    {
      name: 'preferences_Description',
      type: 'text',
      rows: 5,
      title: 'Opis',
      validation: Rule => Rule.required(),
      fieldset: 'preferences',
    },
    {
      name: 'unclassified',
      type: 'array',
      of: [
        {
          type: 'CookieConsent_Details_List'
        },
      ],
      title: 'Lista',
      fieldset: 'unclassified',
    },
    {
      name: 'unclassified_Description',
      type: 'text',
      rows: 5,
      title: 'Opis',
      validation: Rule => Rule.required(),
      fieldset: 'unclassified',
    },
  ],
  fieldsets: [
    {
      name: 'necessary',
      title: 'Niezbędne',
    },
    {
      name: 'statistical',
      title: 'Statystyka',
    },
    {
      name: 'marketing',
      title: 'Marketing',
    },
    {
      name: 'preferences',
      title: 'Preferencje',
    },
    {
      name: 'unclassified',
      title: 'Nieklasyfikowane',
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({ title, description }) {
      return {
        title: title,
        description: description
      }
    }
  }
}

export const CookieConsent_Details_List = {
  name: "CookieConsent_Details_List",
  type: "object",
  fields: [
    {
      name: 'service',
      type: 'string',
      title: 'Usługa',
      validation: Rule => Rule.required(),
    },
    {
      name: 'cookies',
      type: 'array',
      of: [
        {
          type: 'CookieConsent_Details_List_Cookies',
        }
      ],
      title: 'Ciasteczka',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      service: 'service',
      cookies: 'cookies',
    },
    prepare({ service, cookies }) {
      return {
        title: service,
        subtitle: `${cookies.length || 0} ciasteczek`,
      }
    }
  }
}

export const CookieConsent_Details_List_Cookies = {
  name: "CookieConsent_Details_List_Cookies",
  type: "object",
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nazwa',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      rows: 5,
      title: 'Opis',
      validation: Rule => Rule.required(),
    },
    {
      name: 'expiry',
      type: 'string',
      title: 'Data ważności:',
      validation: Rule => Rule.required(),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Rodzaj:',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: 'name',
      description: 'description',
    },
    prepare({ name, description }) {
      return {
        title: name,
        subtitle: description,
      }
    }
  }
}

