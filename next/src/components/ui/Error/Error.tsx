'use client';
import styles from './Error.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import type { Props } from './Error.types';

const Error = ({ error }: Props) => {
  return (
    <AnimatePresence
      initial={false}
      mode='wait'
    >
      {error && (
        <motion.span
          data-error
          className={styles['Error']}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role='alert'
        >
          <ErrorIcon />
          <span>{error}</span>
        </motion.span>
      )}
    </AnimatePresence>
  );
};

export default Error;

const ErrorIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='#E3204E'
  >
    <path
      opacity={0.5}
      d='M10 2.5c-1.926 0-3.142 2.156-5.574 6.468l-.303.537C2.102 13.088 1.09 14.88 2.005 16.19c.913 1.31 3.172 1.31 7.691 1.31h.606c4.52 0 6.779 0 7.692-1.31.913-1.31-.097-3.102-2.118-6.685l-.303-.537C13.14 4.656 11.925 2.5 9.999 2.5Z'
    />
    <path d='M10 6.042c.345 0 .624.28.624.625v4.166a.625.625 0 0 1-1.25 0V6.666c0-.345.28-.625.625-.625Z' />
    <path d='M10 14.166a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666Z' />
  </svg>
);
