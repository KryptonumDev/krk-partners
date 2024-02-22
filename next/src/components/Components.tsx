import CaseStudy, { CaseStudy_Query, type CaseStudyProps } from '@/components/_global/CaseStudy';
import Comparison, { Comparison_Query, type ComparisonProps } from '@/components/_global/Comparison';
import Features, { Features_Query, type FeaturesProps } from '@/components/_global/Features';
import StatsGrid, { StatsGrid_Query, type StatsGridProps } from '@/components/_global/StatsGrid';
import ListWithIconAndCta, {
  ListWithIconAndCta_Query,
  type ListWithIconAndCtaProps,
} from '@/components/_global/ListWithIconAndCta';
import Reviews, { Reviews_Query, type ReviewsProps } from '@/components/_global/Reviews';
import FloatingTilesAndImages, {
  FloatingTilesAndImages_Query,
  type FloatingTilesAndImagesProps,
} from '@/components/_global/FloatingTilesAndImages';
import Faq, { Faq_Query, type FaqProps } from '@/components/_global/Faq';
import Contact, { Contact_Query, type ContactProps } from '@/components/_global/Contact';

type ComponentMap = {
  CaseStudy: CaseStudyProps;
  Comparison: ComparisonProps;
  Features: FeaturesProps;
  StatsGrid: StatsGridProps;
  ListWithIconAndCta: ListWithIconAndCtaProps;
  Reviews: ReviewsProps;
  FloatingTilesAndImages: FloatingTilesAndImagesProps;
  Faq: FaqProps;
  Contact: ContactProps;
};

export type ComponentProps = ComponentMap[keyof ComponentMap] & { _type: string };

const Components = ({ data }: { data: ComponentProps[] }) => {
  return data?.map((item, index) => {
    const componentType = item._type as keyof ComponentMap;
    const componentMap: Record<string, React.ReactNode> = {
      CaseStudy: <CaseStudy {...(item as CaseStudyProps)} />,
      Comparison: <Comparison {...(item as ComparisonProps)} />,
      Features: <Features {...(item as FeaturesProps)} />,
      StatsGrid: <StatsGrid {...(item as StatsGridProps)} />,
      ListWithIconAndCta: <ListWithIconAndCta {...(item as ListWithIconAndCtaProps)} />,
      Reviews: <Reviews {...(item as ReviewsProps)} />,
      FloatingTilesAndImages: <FloatingTilesAndImages {...(item as FloatingTilesAndImagesProps)} />,
      Faq: <Faq {...(item as FaqProps)} />,
      Contact: <Contact {...(item as ContactProps)} />,
    };
    const DynamicComponent = componentMap[componentType];
    if (!DynamicComponent) return null;
    return DynamicComponent;
  });
};

export default Components;

export const Components_Query = /* groq */ `
  content[] {
    ${CaseStudy_Query}
    ${Comparison_Query}
    ${Features_Query}
    ${StatsGrid_Query}
    ${ListWithIconAndCta_Query}
    ${Reviews_Query}
    ${FloatingTilesAndImages_Query}
    ${Faq_Query}
    ${Contact_Query}
  },
`;
