import type { ContactPersonType, FormStatusType, ImgType } from '@/global/types';
import type {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
} from 'react-hook-form';

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
