'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import styles from './FloatingTilesAndImages.module.scss';
import type { ImagesProps } from './FloatingTilesAndImages.types';

const Images = ({ images }: ImagesProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const transform = -ref.current.scrollWidth + ref.current.offsetWidth;
      setTransform(transform < 0 ? transform : 0);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start 25%'],
  });
  const progress = useSpring(useTransform(scrollYProgress, [0, 1], [0, transform]), {
    damping: 15,
    mass: 0.25,
    stiffness: 55,
  });

  return (
    <div className={styles.images}>
      <motion.div
        className={styles.transform}
        ref={ref}
        style={{ x: progress }}
      >
        {images.map(({ img, name }, i) => (
          <div
            className={styles.item}
            key={i}
          >
            {img}
            <p>{name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Images;
