import { CtaType, ImgType } from '@/global/types';

export type Props = {
  heading: string;
  subheading: string;
  paragraph: string;
  list_Paragraph: string;
  list: {
    icon: ImgType;
    list: string[];
  }[];
  images: {
    img: ImgType;
    name: string;
  }[];
  ctaPrompt: string;
  cta: CtaType;
};

export type ImagesProps = {
  images: {
    img: React.ReactNode;
    name: string;
  }[];
};
