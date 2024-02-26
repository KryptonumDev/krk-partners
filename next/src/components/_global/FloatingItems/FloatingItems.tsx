import Markdown from '@/components/ui/markdown';
import styles from './FloatingItems.module.scss';
import type { Props } from './FloatingItems.types';
import Img from '@/components/ui/image';
import InViewport from './_InViewport';

const FloatingItems = ({ heading, list }: Props) => {
  return (
    <InViewport className={styles['FloatingItems']}>
      <header>
        <Markdown.h2 className='h3'>{heading}</Markdown.h2>
      </header>
      <div className={styles.list}>
        {list.map(({ isHighlighted, icon, name }, i) => (
          <div
            key={i}
            className={styles.item}
            data-highlighted={!!isHighlighted}
            style={{
              animationDelay: `${i * 0.08}s`,
            }}
          >
            <div className={styles.icon}>
              <Img
                data={icon}
                sizes='20px'
              />
            </div>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </InViewport>
  );
};

export default FloatingItems;
