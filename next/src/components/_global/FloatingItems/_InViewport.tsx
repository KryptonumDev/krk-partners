'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import type { InViewportProps } from './FloatingItems.types';

const InViewport = ({ children, ...props }: InViewportProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '0px 0px -33.3% 0px', once: true });

  return (
    <section
      ref={ref}
      {...props}
      data-visible={isInView}
    >
      {children}
    </section>
  );
};

export default InViewport;
