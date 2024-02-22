import { ImgType } from '@/global/types';

export type Props = {
  heading: string;
  subheading: string;
  list: {
    question: string;
    answer: string;
  }[];
  contact_Heading: string;
  form_Paragraph: string;
  contact_Paragraph: string;
  contact_Person: {
    img: ImgType;
    name: string;
    tel: string;
    email: string;
  };
};

export type ListProps = {
  list: {
    question: React.ReactNode;
    answer: React.ReactNode;
  }[];
};
