import type { ComponentProps } from '@/components/Components';

export type CtaType = {
  href: string;
  text: string | React.ReactNode;
};

export type ImgType = {
  asset: {
    url: string;
    altText: string;
    metadata: {
      dimensions: {
        width: number;
        height: number;
      };
      lqip: string;
    };
  };
};

export type generateMetadataProps = {
  slug?: string;
  seo: {
    title: string;
    description: string;
  };
};

export type ContactPersonType = {
  img: ImgType;
  name: string;
  tel: string;
  email: string;
};

export type LandingPageQueryProps = {
  landingPage: {
    name: string;
    slug?: string;
    content: ComponentProps[];
    contactPerson?: ContactPersonType;
  } & generateMetadataProps;
  firstLanding: {
    slug: string;
  };
};

export type generateStaticParamsProps = {
  slug: string;
};

export type FormStatusType = {
  sending: boolean;
  success?: boolean;
};
