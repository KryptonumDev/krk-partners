import type { ContactPersonType, ImgType } from '@/global/types';

export type Props = {
  heading: string;
  subheading: string;
  paragraph: string;
  testimonial_Img: ImgType;
  testimonial_Name: string;
  testimonial_Industry: string;
  testimonial_Text: string;
  form_Heading: string;
  form_Features: string[];
  contactPerson?: ContactPersonType;
  globalEmail: string;
};
