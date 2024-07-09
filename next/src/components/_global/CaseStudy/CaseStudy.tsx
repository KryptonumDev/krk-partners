import Markdown from '@/components/ui/markdown';
import styles from './CaseStudy.module.scss';
import type { Props } from './CaseStudy.types';
import Img from '@/components/ui/image';
import Button from '@/components/ui/Button';
import Tabs from './_Tabs';

const CaseStudy = ({ heading, subheading, list }: Props) => {
  const renderedList = list.map(({ tab, paragraph, ctaPrompt, cta, icon, img }, i) => ({
    tab: tab,
    paragraph: (
      <Markdown
        className={styles.paragraph}
        data-index={i}
      >
        {paragraph}
      </Markdown>
    ),
    ctaPrompt: ctaPrompt && (
      <Markdown
        className={styles.ctaPrompt}
        data-index={i}
      >
        {ctaPrompt}
      </Markdown>
    ),
    cta: (
      <Button
        data={cta}
        className={styles.cta}
        data-index={i}
      />
    ),
    icon: (
      <Img
        data={icon}
        width={32}
        height={32}
        sizes='32px'
      />
    ),
    img: (
      <Img
        data={img}
        sizes='(max-width: 549px) 242px, (max-width: 1049px) 50vw, (max-width: 1179px) 50vw, 484px'
      />
    ),
  }));

  return (
    <section className={styles['CaseStudy']} id='branze'>
      <header>
        <Markdown.h2>{heading}</Markdown.h2>
        <Markdown.h3>{subheading}</Markdown.h3>
      </header>
      <Tabs
        list={renderedList}
        TabActiveIcon={TabActiveIcon}
      />
    </section>
  );
};

export default CaseStudy;

const TabActiveIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={13}
    fill='none'
  >
    <path
      opacity={0.5}
      d='M11.6 6.97a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z'
      fill='#376578'
    />
    <path
      d='M8.616 5.456a.375.375 0 0 1 0 .53l-2.5 2.5a.375.375 0 0 1-.53 0l-1-1a.375.375 0 1 1 .53-.53l.734.734 1.118-1.117 1.117-1.117a.375.375 0 0 1 .53 0Z'
      fill='#376578'
    />
  </svg>
);
