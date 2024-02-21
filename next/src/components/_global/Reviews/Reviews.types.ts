import type { ImgType } from '@/global/types';

export type Props = {
  heading: string;
  subheading: string;
  list: {
    img: ImgType;
    name: string;
    review: string;
    amount?: string;
  }[];
};
