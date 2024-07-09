import Markdown from '@/components/ui/markdown';
import Button from '@/components/ui/Button';
import Img from '@/components/ui/image';
import styles from './FloatingTilesAndImages.module.scss';
import type { Props } from './FloatingTilesAndImages.types';

const FloatingTilesAndImages = ({
  heading,
  subheading,
  paragraph,
  list_Paragraph,
  list,
  images,
  ctaPrompt,
  cta,
}: Props) => {
  return (
    <section className={styles['FloatingTilesAndImages']} id='oferta'>
      <div className={styles.column}>
        <header>
          <h2>{heading}</h2>
          <Markdown.h3>{subheading}</Markdown.h3>
          <Markdown>{paragraph}</Markdown>
        </header>
        <div className={styles.list}>
          <p>{list_Paragraph}</p>
          <div className={styles.grid}>
            {list.map(({ icon, list }, i) => (
              <div
                key={i}
                className={styles.item}
                style={{ gridArea: `item${i + 1}` }}
              >
                <Img
                  data={icon}
                  sizes='20px'
                />
                <ul>
                  {list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.images}>
        {images.map(({ img, name }, i) => (
          <div
            className={styles.item}
            key={i}
          >
            <Img
              data={img}
              sizes='250px'
            />
            <p>{name}</p>
          </div>
        ))}
      </div>
      <div className={styles.ctaBox}>
        <Markdown className={styles.ctaPrompt}>{ctaPrompt}</Markdown>
        <Button data={cta} />
      </div>
    </section>
  );
};

export default FloatingTilesAndImages;
