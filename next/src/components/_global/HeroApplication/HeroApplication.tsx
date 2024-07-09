import Link from 'next/link';
import Markdown from '@/components/ui/markdown';
import styles from './HeroApplication.module.scss';
import Img from '@/components/ui/image';
import ApplicationForm from '@/components/_landing/ApplicationForm';
import type { Props } from './HeroApplication.types';

const displayRatingCount = (number: number) => `${number} ${number === 1 ? 'opinia' : ([2, 3, 4].includes(number) ? 'opinie' : 'opinii')}`;

const RatingDisplay = (rating: number) => {
  const roundedRating = Math.round(rating);
  const fullStars = roundedRating;
  const emptyStars = 5 - fullStars;
  const stars = [
    ...Array(fullStars).fill(<RatingIcon.Full />),
    ...Array(emptyStars).fill(<RatingIcon.Empty />),
  ];
  return stars;
};

export default async function HeroApplication({
  heading,
  subheading,
  paragraph,
  rating_Value,
  rating_Count,
  rating_Link,
  testimonial_Img,
  testimonial_Name,
  testimonial_Industry,
  testimonial_Text,
  form_Heading,
  form_Features,
  contactPerson,
  globalEmail,
}: Props) {
  return (
    <section className={styles['HeroApplication']}>
      <header>
        <h2>{heading}</h2>
        <Markdown.h1>{subheading}</Markdown.h1>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
        <div className={styles.testimonial}>
          <div className={styles.rating}>
            <p><span>{rating_Value}</span>/5</p>
            <div>
              {RatingDisplay(rating_Value)}
            </div>
            <Link href={rating_Link} className='link'>{displayRatingCount(rating_Count)}</Link>
          </div>
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
        <ApplicationForm
          contactPerson={contactPerson}
          globalEmail={globalEmail}
        />
      </div>
    </section>
  );
}


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
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
  >
    <path
      fill="#377853"
      d="M14.8 8A6.667 6.667 0 1 1 1.467 8 6.667 6.667 0 0 1 14.8 8"
    />
    <path
      fill="#EDF0F2"
      d="M10.82 5.98a.5.5 0 0 1 0 .707L7.487 10.02a.5.5 0 0 1-.707 0L5.447 8.687a.5.5 0 0 1 .707-.707l.98.98 1.49-1.49 1.49-1.49a.5.5 0 0 1 .706 0"
    />
  </svg>
);
const RatingIcon = {
  'Full': () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="none"
    >
      <path
        fill="#376578"
        d="M9.242 8.384A4.25 4.25 0 0 1 4.059 3.54l-.057.048c-.14.106-.315.146-.664.225l-.318.072c-1.23.278-1.845.417-1.991.888-.147.47.273.96 1.111 1.941l.217.254c.238.278.357.418.41.59.055.172.037.358 0 .73l-.032.338c-.127 1.308-.19 1.962.193 2.253.383.29.958.026 2.11-.504l.298-.138c.327-.15.49-.226.664-.226.173 0 .337.076.664.226l.298.138c1.152.53 1.727.795 2.11.504.383-.29.32-.945.193-2.253l-.023-.243Z"
      />
      <path
        fill="#376578"
        d="m4.577 2.704-.164.294c-.18.323-.27.484-.41.59l.056-.047a4.25 4.25 0 0 0 5.183 4.843l-.01-.095c-.036-.372-.054-.558 0-.73s.173-.312.411-.59l.217-.254c.838-.98 1.258-1.47 1.111-1.941-.146-.47-.761-.61-1.99-.888l-.319-.072c-.35-.08-.524-.119-.665-.225-.14-.107-.23-.268-.41-.59l-.164-.295C6.79 1.568 6.473 1 6 1s-.79.568-1.423 1.704"
        opacity={0.5}
      />
    </svg>
  ),
  'Empty': () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      viewBox='0 0 20 20'
      fill="none"
    >
      <path
        stroke="#969799"
        d="M7.627 4.507C8.683 2.613 9.211 1.667 10 1.667s1.317.946 2.372 2.84l.273.49c.3.538.45.807.684.984.234.178.525.244 1.108.376l.53.12c2.05.463 3.074.695 3.318 1.48.244.784-.454 1.6-1.852 3.235l-.361.422c-.397.465-.596.697-.685.984s-.06.597 0 1.217l.055.564c.211 2.18.317 3.27-.322 3.755-.638.484-1.597.042-3.517-.841l-.496-.229c-.545-.251-.818-.377-1.107-.377s-.562.126-1.107.377l-.497.229c-1.919.883-2.879 1.325-3.517.84-.638-.484-.533-1.574-.321-3.754l.054-.564c.06-.62.09-.93.001-1.217-.09-.287-.288-.52-.685-.984l-.361-.422C2.169 9.558 1.47 8.74 1.714 7.956s1.269-1.016 3.319-1.48l.53-.12c.583-.131.874-.197 1.108-.375.233-.177.383-.446.683-.984z"
      />
    </svg>
  ),
};
