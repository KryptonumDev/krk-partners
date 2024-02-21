import Markdown from '@/components/ui/markdown';
import Button from '@/components/ui/Button';
import Img from '@/components/ui/image';
import styles from './FloatingTilesAndImages.module.scss';
import type { Props } from './FloatingTilesAndImages.types';
import Images from './_Images';

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
  const renderedImages = images.map(({ img, name }) => ({
    img: (
      <Img
        data={img}
        sizes='250px'
      />
    ),
    name,
  }));

  return (
    <section className={styles['FloatingTilesAndImages']}>
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
      <Images images={renderedImages} />
      <div className={styles.ctaBox}>
        <Markdown className={styles.ctaPrompt}>{ctaPrompt}</Markdown>
        <Button data={cta} />
      </div>
    </section>
  );
};

export default FloatingTilesAndImages;
