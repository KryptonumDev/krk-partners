import { CtaType, ImgType } from '@/global/types';

export type Props = {
  heading: string;
  subheading: string;
  paragraph: string;
  list: {
    icon: ImgType;
    title: string;
  }[];
  ctaPrompt: string;
  cta: CtaType;
};
