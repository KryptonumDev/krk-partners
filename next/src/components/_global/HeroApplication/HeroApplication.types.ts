import type { ContactPersonType, ImgType } from '@/global/types';

export type Props = {
  heading: string;
  subheading: string;
  paragraph: string;
  rating_Value: 1 | 2 | 3 | 4 | 5;
  rating_Count: number;
  rating_Link: string;
  testimonial_Img: ImgType;
  testimonial_Name: string;
  testimonial_Industry: string;
  testimonial_Text: string;
  form_Heading: string;
  form_Features: string[];
  contactPerson?: ContactPersonType;
  globalEmail: string;
};
