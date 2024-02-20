import { ImgType } from '@/global/types';

export type Props = {
  heading: string;
  subheading: string;
  list: {
    icon: ImgType;
    title: string;
    description: string;
  }[];
};
