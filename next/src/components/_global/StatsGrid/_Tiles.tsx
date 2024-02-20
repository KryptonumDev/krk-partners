'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './StatsGrid.module.scss';
import type { TileProps } from './StatsGrid.types';

const Tiles = ({
  tile1_Heading,
  tile1_Img,
  tile2_Heading,
  tile2_Img,
  tile3_Heading,
  tile3_Img,
  tile4_Heading,
  tile4_Img,
  logo,
}: TileProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 64]);
  const progressReversed = useTransform(scrollYProgress, [0, 1], [64, 0]);

  return (
    <div
      className={styles.tiles}
      ref={ref}
    >
      <motion.div
        className={styles.tile}
        style={{ y: progress }}
      >
        <h4>{tile1_Heading}</h4>
        {tile1_Img}
      </motion.div>
      <motion.div
        className={styles.tile}
        style={{ y: progressReversed }}
      >
        <h4>{tile2_Heading}</h4>
        {tile2_Img}
      </motion.div>
      <motion.div
        className={styles.tile}
        style={{ y: progress }}
      >
        <h4>{tile3_Heading}</h4>
        {tile3_Img}
      </motion.div>
      <motion.div
        className={styles.tile}
        style={{ y: progressReversed }}
      >
        <h4>{tile4_Heading}</h4>
        {tile4_Img}
      </motion.div>
      <div className={styles.logo}>{logo}</div>
    </div>
  );
};

export default Tiles;
