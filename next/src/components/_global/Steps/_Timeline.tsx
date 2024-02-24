'use client';
import { useRef } from 'react';
import { motion, useInView, useScroll } from 'framer-motion';
import styles from './Steps.module.scss';
import type { TimelineType } from './Steps.types';

const Timeline = ({ timeline }: TimelineType) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 50%', 'end 50%'],
  });

  return (
    <div
      className={styles.timeline}
      ref={ref}
    >
      <div className={styles.progressbar}>
        <motion.div style={{ scaleY: scrollYProgress }}></motion.div>
      </div>
      {timeline.map(({ name, when }, i) => (
        <div
          className={styles.item}
          key={i}
        >
          <p className={styles.name}>
            <span>{name}</span>
          </p>
          <When>{when}</When>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

const When = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '0px 0px -50% 0px' });

  return (
    <p
      ref={ref}
      className={styles.when}
      data-active={isInView}
    >
      {children}
    </p>
  );
};
