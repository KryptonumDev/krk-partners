import Markdown from '@/components/ui/markdown';
import styles from './Contact.module.scss';
import Form from './_Form';
import Call from './_Call';
import type { Props } from './Contact.types';
import sanityFetch from '@/utils/sanity.fetch';

const Contact = async ({ heading, form_Paragraph, contact_Paragraph, contact_Person }: Props) => {
  const { email } = await query();

  return (
    <section className={styles['Contact']}>
      <header>
        <Markdown.h2 className='h3'>{heading}</Markdown.h2>
      </header>
      <div className={styles.column}>
        <Form
          paragraph={form_Paragraph}
          email={email}
        />
        <p>lub</p>
        <Call
          paragraph={contact_Paragraph}
          person={contact_Person}
        />
      </div>
    </section>
  );
};

export default Contact;

const query = async (): Promise<{ email: string }> => {
  return await sanityFetch({
    query: `
      *[_id == "global"][0]{
        email,
      }
    `,
  });
};
