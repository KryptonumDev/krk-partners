import Markdown from '@/components/ui/markdown';
import styles from './HeroApplication.module.scss';
import type { Props } from './HeroApplication.types';
import Img from '@/components/ui/image';
import Form from './_Form';
import sanityFetch from '@/utils/sanity.fetch';

const HeroApplication = async ({
  heading,
  subheading,
  paragraph,
  testimonial_Img,
  testimonial_Name,
  testimonial_Industry,
  testimonial_Text,
  form_Heading,
  form_Features,
}: Props) => {
  const { email } = await query();

  return (
    <section className={styles['HeroApplication']}>
      <header>
        <h2>{heading}</h2>
        <Markdown.h1>{subheading}</Markdown.h1>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        <div className={styles.testimonial}>
          <div className={styles.person}>
            <Img
              data={testimonial_Img}
              sizes='48px'
              quality={100}
            />
            <div>
              <p className={styles.name}>{testimonial_Name}</p>
              <p className={styles.industry}>{testimonial_Industry}</p>
            </div>
            <QuoteIcon />
          </div>
          <p className={styles.text}>{testimonial_Text}</p>
        </div>
      </header>
      <div className={styles.application}>
        <div className={styles.introduction}>
          <Markdown.h2 className='h3'>{form_Heading}</Markdown.h2>
          <ul>
            {form_Features.map((feature, i) => (
              <li key={i}>
                <FeatureIcon />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Form email={email} />
      </div>
    </section>
  );
};

export default HeroApplication;

const query = async (): Promise<{ email: string }> => {
  return await sanityFetch({
    query: `
      *[_id == "global"][0]{
        email,
      }
    `,
  });
};

const QuoteIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={14}
    fill='none'
  >
    <path
      d='m7 .344.938 1.219c-1.959 1.02-3.23 1.906-3.813 2.656-.583.729-.875 1.541-.875 2.437 0 .73.156 1.23.469 1.5.312.25.75.396 1.312.438 1.771.187 2.667.969 2.688 2.344 0 .77-.271 1.416-.813 1.937-.52.52-1.25.781-2.187.781-1.125-.041-2.073-.5-2.844-1.375-.77-.896-1.167-2.24-1.188-4.031 0-1.917.605-3.552 1.813-4.906C3.708 1.99 5.208.99 7 .344Zm9.375 0 .938 1.219c-1.959 1.02-3.23 1.906-3.813 2.656-.583.729-.875 1.541-.875 2.437 0 .73.156 1.23.469 1.5.312.25.75.396 1.312.438 1.771.187 2.667.969 2.688 2.344 0 .77-.271 1.416-.813 1.937-.52.52-1.25.781-2.187.781-1.125-.041-2.073-.5-2.844-1.375-.77-.896-1.167-2.24-1.188-4.031 0-1.917.605-3.552 1.813-4.906 1.208-1.354 2.708-2.354 4.5-3Z'
      fill='#F0F2F7'
    />
  </svg>
);

const FeatureIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    fill='#377853'
  >
    <path
      opacity={0.5}
      d='M14.8 8A6.667 6.667 0 1 1 1.467 8 6.667 6.667 0 0 1 14.8 8Z'
    />
    <path d='M10.82 5.98a.5.5 0 0 1 0 .707L7.487 10.02a.5.5 0 0 1-.707 0L5.447 8.687a.5.5 0 0 1 .707-.707l.98.98 1.49-1.49 1.49-1.49a.5.5 0 0 1 .706 0Z' />
  </svg>
);
