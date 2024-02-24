import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './PersonIntroduction.module.scss';
import type { Props } from './PersonIntroduction.types';

const PersonIntroduction = ({ name, position, img, logo, text, signature }: Props) => {
  return (
    <section className={styles['PersonIntroduction']}>
      <div className={styles.name}>
        <h2 className='h3'>{name}</h2>
        {position && <h3>{position}</h3>}
      </div>
      <Img
        data={img}
        className={styles.img}
        sizes='(max-width: 549px) 90vw, (max-width: 1099px) 50vw, (max-width: 1279px) 33vw, 380px'
      />
      <Img
        data={logo}
        sizes='90px'
        className={styles.logo}
      />
      <div className={styles.content}>
        <div className={styles.QuoteIcon}>
          <QuoteIcon />
        </div>
        <Markdown className={styles.text}>{text}</Markdown>
        {signature && (
          <Img
            data={signature}
            sizes='168px'
            className={styles.signature}
          />
        )}
      </div>
    </section>
  );
};

export default PersonIntroduction;

const QuoteIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={17}
    viewBox='0 0 16 17'
    fill='#969799'
  >
    <path d='m6.5 3.464.75.975c-1.566.817-2.583 1.525-3.05 2.125-.466.583-.7 1.233-.7 1.95 0 .583.125.983.375 1.2.25.2.6.316 1.05.35 1.417.15 2.134.775 2.15 1.875 0 .617-.216 1.133-.65 1.55-.416.416-1 .625-1.75.625-.9-.034-1.658-.4-2.275-1.1-.616-.717-.933-1.792-.95-3.225 0-1.533.484-2.842 1.45-3.925.967-1.083 2.167-1.883 3.6-2.4Zm7.5 0 .75.975c-1.566.817-2.583 1.525-3.05 2.125-.466.583-.7 1.233-.7 1.95 0 .583.125.983.375 1.2.25.2.6.316 1.05.35 1.417.15 2.133.775 2.15 1.875 0 .617-.216 1.133-.65 1.55-.417.416-1 .625-1.75.625-.9-.034-1.658-.4-2.275-1.1-.616-.717-.933-1.792-.95-3.225 0-1.533.484-2.842 1.45-3.925.967-1.083 2.167-1.883 3.6-2.4Z' />
  </svg>
);
