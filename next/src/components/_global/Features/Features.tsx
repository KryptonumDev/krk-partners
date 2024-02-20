import Markdown from '@/components/ui/markdown';
import Img from '@/components/ui/image';
import styles from './Features.module.scss';
import type { Props } from './Features.types';

const Features = ({ heading, subheading, list }: Props) => {
  return (
    <section className={styles['Features']}>
      <header>
        <h2>{heading}</h2>
        <Markdown.h3>{subheading}</Markdown.h3>
      </header>
      <ul className={styles.list}>
        {list?.map(({ icon, title, description }, i) => (
          <li key={i} className={styles.item}>
            <div className={styles.icon}>
              <Img
                data={icon}
                width={20}
                height={20}
                sizes='20px'
              />
            </div>
            <div>
              <p className={styles.title}>{title}</p>
              <Markdown>{description}</Markdown>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
