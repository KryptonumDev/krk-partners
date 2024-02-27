import { ImgType } from '@/global/types';

export type Props = {
  heading: string;
  form_Paragraph: string;
  contact_Paragraph: string;
  contact_Person: {
    img: ImgType;
    name: string;
    tel: string;
    email: string;
  };
};

export type FormType = {
  paragraph: string;
  email: string;
};

export type CallType = {
  paragraph: string;
  person: Props['contact_Person'];
};
