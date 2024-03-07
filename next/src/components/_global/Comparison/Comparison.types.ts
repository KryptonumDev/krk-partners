import type { ImgType } from '@/global/types';

export type Props = {
  heading: string;
  subheading: string;
  tableHeader: {
    icon: ImgType;
    name: string;
  }[];
  tableItems: {
    heading: string;
    option1_Name: string;
    option2_Name: string;
    option3_Name: string;
    option1_Color: 'green' | 'orange' | 'red';
    option2_Color: 'green' | 'orange' | 'red';
    option3_Color: 'green' | 'orange' | 'red';
  }[];
};
