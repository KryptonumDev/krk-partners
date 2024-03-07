import type { CtaType, ImgType } from '@/global/types';

export type Props = {
  heading: string;
  subheading: string;
  list: {
    tab: string;
    paragraph: string;
    ctaPrompt?: string;
    cta: CtaType;
    icon: ImgType;
    img: ImgType;
  }[];
};

export type TabsProps = {
  list: {
    tab: string;
    paragraph: React.ReactNode;
    ctaPrompt?: React.ReactNode;
    cta: React.ReactNode;
    icon: React.ReactNode;
    img: React.ReactNode;
  }[];
  TabActiveIcon: React.ReactNode;
};
