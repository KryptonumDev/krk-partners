'use client';
import { useState } from 'react';
import styles from './Faq.module.scss';
import { motion } from 'framer-motion';
import type { ListProps } from './Faq.types';
import { easing } from '@/global/constants';

const animation = {
  open: { height: 'auto', marginBlock: '16px' },
  closed: { height: 0, marginBlock: 0 },
};

const List = ({ list }: ListProps) => {
  const [opened, setOpened] = useState(0);
  const handleClick = (e: React.MouseEvent<HTMLElement>, i: number) => {
    e.preventDefault();
    setOpened(i);
  };

  return (
    <div className={styles['List']}>
      {list.map(({ question, answer }, i) => (
        <details
          key={i}
          open
          data-opened={opened === i}
        >
          <summary
            onClick={(e) => handleClick(e, i)}
            tabIndex={opened === i ? -1 : 0}
          >
            <div className={styles.indicator}>
              <span></span>
              <span></span>
            </div>
            {question}
          </summary>
          <motion.div
            className={styles.answer}
            initial={i === 0 ? animation.open : animation.closed}
            animate={opened === i ? animation.open : animation.closed}
            exit={animation.closed}
            transition={{
              duration: 0.5,
              ease: easing,
            }}
          >
            {answer}
          </motion.div>
        </details>
      ))}
    </div>
  );
};

export default List;
