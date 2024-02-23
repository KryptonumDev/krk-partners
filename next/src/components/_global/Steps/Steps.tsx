import Markdown from '@/components/ui/markdown';
import styles from './Steps.module.scss';
import type { Props } from './Steps.types';
import Img from '@/components/ui/image';
import Button from '@/components/ui/Button';

const Steps = ({ heading, timeline, cta_Heading, cta_Paragraph, cta_Cta, cta_Img }: Props) => {
  return (
    <section className={styles['Steps']}>
      <header>
        <Markdown.h2 className='h3'>{heading}</Markdown.h2>
      </header>
      <div className={styles.timeline}>
        {timeline.map(({ name, when }, i) => (
          <div
            className={styles.item}
            key={i}
          >
            <p>{name}</p>
            <p>{when}</p>
          </div>
        ))}
      </div>
      <div className={styles.ctaBox}>
        <Markdown.h3>{cta_Heading}</Markdown.h3>
        <Markdown className={styles.paragraph}>{cta_Paragraph}</Markdown>
        <Button data={cta_Cta} />
        <div className={styles.img}>
          <Img
            data={cta_Img}
            sizes=''
          />
        </div>
      </div>
    </section>
  );
};

export default Steps;
