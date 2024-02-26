import type { ImgType } from '@/global/types';

export type Props = {
  heading: string;
  list: {
    isHighlighted?: boolean;
    icon: ImgType;
    name: string;
  }[];
};

export type InViewportProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;
