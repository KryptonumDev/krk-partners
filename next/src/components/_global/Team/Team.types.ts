import type { ImgType } from '@/global/types';

export type Props = {
  list: {
    img: ImgType;
    name: string;
    position: string;
  }[];
  heading: string;
  block1_Heading: string;
  block1_Paragraph: string;
  block2_Heading: string;
  block2_Paragraph: string;
};

export type ListType = {
  images: {
    img: React.ReactNode;
  }[];
};
