import { ImgType } from '@/global/types';

export type Props = {
  heading: string;
  subheading: string;
  paragraph: string;
  tile1_Heading: string;
  tile1_Img: ImgType;
  tile2_Heading: string;
  tile2_Img: ImgType;
  tile3_Heading: string;
  tile3_Img: ImgType;
  tile4_Heading: string;
  tile4_Img: ImgType;
  logo: ImgType;
};

export type TileProps = {
  tile1_Heading: string;
  tile1_Img: React.ReactNode;
  tile2_Heading: string;
  tile2_Img: React.ReactNode;
  tile3_Heading: string;
  tile3_Img: React.ReactNode;
  tile4_Heading: string;
  tile4_Img: React.ReactNode;
  logo: React.ReactNode;
};
