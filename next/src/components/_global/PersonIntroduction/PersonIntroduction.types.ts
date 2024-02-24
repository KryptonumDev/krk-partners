import { ImgType } from '@/global/types';

export type Props = {
  name: string;
  position?: string;
  img: ImgType;
  logo: ImgType;
  text: string;
  signature?: ImgType;
};
