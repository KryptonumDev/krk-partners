import sanityFetch from '@/utils/sanity.fetch';
import styles from './CookieConsent.module.scss';
import Content from './_Content';
import type { QueryType } from './CookieConsent.types';

const tabs = ['Zgoda', 'Szczegóły', 'O cookies'];

const CookieConsent = async () => {
  const { CookieConsent } = await query();

  return (
    <aside className={styles['CookieConsent']}>
      <Content
        tabs={tabs}
        TabActiveIcon={TabActiveIcon}
        {...CookieConsent}
      />
    </aside>
  );
};

export default CookieConsent;

const TabActiveIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={13}
    fill='none'
  >
    <path
      opacity={0.5}
      d='M11.6 6.97a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z'
      fill='#376578'
    />
    <path
      d='M8.616 5.456a.375.375 0 0 1 0 .53l-2.5 2.5a.375.375 0 0 1-.53 0l-1-1a.375.375 0 1 1 .53-.53l.734.734 1.118-1.117 1.117-1.117a.375.375 0 0 1 .53 0Z'
      fill='#376578'
    />
  </svg>
);

const query = async () => {
  return await sanityFetch<QueryType>({
    query: /* groq */ `
      *[_type == "global"][0]{
        CookieConsent {
          consent_Heading,
          consent_Paragraph,
          details {
            necessary[] {
              service,
              cookies[] {
                name,
                description,
                expiry,
                type,
              },
            },
            necessary_Description,
            statistical[] {
              service,
              cookies[] {
                name,
                description,
                expiry,
                type,
              },
            },
            statistical_Description,
            marketing[] {
              service,
              cookies[] {
                name,
                description,
                expiry,
                type,
              },
            },
            marketing_Description,
            preferences[] {
              service,
              cookies[] {
                name,
                description,
                expiry,
                type,
              },
            },
            preferences_Description,
            unclassified[] {
              service,
              cookies[] {
                name,
                description,
                expiry,
                type,
              },
            },
            unclassified_Description,
          },
          info_Heading,
          info_Paragraph,
        }
      }
    `,
    tags: ['global'],
  });
};
