import Button from '../../ui/Button';
import Img from '../../ui/image';
import Markdown from '../../ui/markdown';
import styles from './ListWithIconAndCta.module.scss';
import type { Props } from './ListWithIconAndCta.types';

const ListWithIconAndCta = ({ heading, subheading, paragraph, list, ctaPrompt, cta }: Props) => {
  return (
    <section className={styles['ListWithIconAndCta']}>
      <header>
        <div>
          <h2>{heading}</h2>
          <Markdown.h3>{subheading}</Markdown.h3>
        </div>
        <Markdown.h4 className={styles.paragraph}>{paragraph}</Markdown.h4>
      </header>
      <div className={styles.list}>
        {list.map(({ icon, title }, i) => (
          <div
            key={i}
            className={styles.item}
          >
            <div className={styles.icon}>
              <Img
                data={icon}
                width={20}
                height={20}
                sizes='20px'
              />
            </div>
            <p>{title}</p>
          </div>
        ))}
        <div className={styles.item}>
          <p>{ctaPrompt}</p>
          <Button data={cta} />
        </div>
      </div>
    </section>
  );
};

export default ListWithIconAndCta;
