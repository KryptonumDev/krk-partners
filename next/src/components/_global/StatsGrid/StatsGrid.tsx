import Markdown from '@/components/ui/markdown';
import Img from '@/components/ui/image';
import styles from './StatsGrid.module.scss';
import type { Props } from './StatsGrid.types';
import Tiles from './_Tiles';

const StatsGrid = ({
  heading,
  subheading,
  paragraph,
  tile1_Heading,
  tile1_Img,
  tile2_Heading,
  tile2_Img,
  tile3_Heading,
  tile3_Img,
  tile4_Heading,
  tile4_Img,
  logo,
}: Props) => {
  const renderedTiles = {
    tile1_Heading,
    tile1_Img: (
      <Img
        data={tile1_Img}
        sizes='270px'
      />
    ),
    tile2_Heading,
    tile2_Img: (
      <Img
        data={tile2_Img}
        sizes='270px'
      />
    ),
    tile3_Heading,
    tile3_Img: (
      <Img
        data={tile3_Img}
        sizes='270px'
      />
    ),
    tile4_Heading,
    tile4_Img: (
      <Img
        data={tile4_Img}
        sizes='48px'
      />
    ),
    logo: (
      <Img
        data={logo}
        sizes='80px'
      />
    ),
  };

  return (
    <section className={styles['StatsGrid']}>
      <header>
        <h2>{heading}</h2>
        <Markdown.h3>{subheading}</Markdown.h3>
        <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      </header>
      <Tiles {...renderedTiles} />
    </section>
  );
};

export default StatsGrid;
