import Img from '@/components/ui/image';
import Markdown from '@/components/ui/markdown';
import styles from './Team.module.scss';
import type { Props } from './Team.types';

const Team = ({ list, heading, block1_Heading, block1_Paragraph, block2_Heading, block2_Paragraph }: Props) => {
  return (
    <section className={styles['Team']}>
      <div className={styles.list}>
        {list.map(({ img }, i) => (
          <Img
            key={i}
            data={img}
            sizes=''
          />
        ))}
      </div>
      <div className={styles.column}>
        <header>
          <Markdown.h2 className='h3'>{heading}</Markdown.h2>
        </header>
        <div className={styles.block1}>
          <Markdown.h3>{block1_Heading}</Markdown.h3>
          <Markdown className={styles.paragraph}>{block1_Paragraph}</Markdown>
        </div>
        <div className={styles.block2}>
          <Markdown.h3>{block2_Heading}</Markdown.h3>
          <Markdown className={styles.paragraph}>{block2_Paragraph}</Markdown>
        </div>
      </div>
    </section>
  );
};

export default Team;
