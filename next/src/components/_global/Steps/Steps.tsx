import Markdown from '@/components/ui/markdown';
import Img from '@/components/ui/image';
import Button from '@/components/ui/Button';
import styles from './Steps.module.scss';
import Timeline from './_Timeline';
import type { Props } from './Steps.types';

const Steps = ({ heading, timeline, cta_Heading, cta_Paragraph, cta_Cta, cta_Img }: Props) => {
  return (
    <section className={styles['Steps']}>
      <header>
        <Markdown.h2 className='h3'>{heading}</Markdown.h2>
      </header>
      <Timeline timeline={timeline} />
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
