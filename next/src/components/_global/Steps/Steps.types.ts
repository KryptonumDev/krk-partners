import type { CtaType, ImgType } from '@/global/types';

export type Props = {
  heading: string;
  timeline: {
    name: string;
    when: string;
  }[];
  cta_Heading: string;
  cta_Paragraph: string;
  cta_Cta: CtaType;
  cta_Img: ImgType;
};

export type TimelineType = {
  timeline: {
    name: string;
    when: string;
  }[];
};
