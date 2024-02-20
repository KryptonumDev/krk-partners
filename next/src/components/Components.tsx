import Faq, { Faq_Query, type FaqProps } from '@/components/_global/Faq';
import CaseStudy, { CaseStudy_Query, type CaseStudyProps } from './_global/CaseStudy';
import Comparison, { Comparison_Query, type ComparisonProps } from './_global/Comparison';
import Features, { Features_Query, type FeaturesProps } from './_global/Features';
import StatsGrid, { StatsGrid_Query, type StatsGridProps } from './_global/StatsGrid';
import ListWithIconAndCta, { ListWithIconAndCta_Query, type ListWithIconAndCtaProps } from './ListWithIconAndCta';

type ComponentMap = {
  Faq: FaqProps;
  CaseStudy: CaseStudyProps;
  Comparison: ComparisonProps;
  Features: FeaturesProps;
  StatsGrid: StatsGridProps;
  ListWithIconAndCta: ListWithIconAndCtaProps;
};

export type ComponentProps = ComponentMap[keyof ComponentMap] & { _type: string };

const Components = ({ data }: { data: ComponentProps[] }) => {
  return data?.map((item, index) => {
    const componentType = item._type as keyof ComponentMap;
    const componentMap: Record<string, React.ReactNode> = {
      Faq: (
        <Faq
          {...(item as FaqProps)}
          index={index}
        />
      ),
      CaseStudy: <CaseStudy {...(item as CaseStudyProps)} />,
      Comparison: <Comparison {...(item as ComparisonProps)} />,
      Features: <Features {...(item as FeaturesProps)} />,
      StatsGrid: <StatsGrid {...(item as StatsGridProps)} />,
      ListWithIconAndCta: <ListWithIconAndCta {...(item as ListWithIconAndCtaProps)} />,
    };
    const DynamicComponent = componentMap[componentType];
    if (!DynamicComponent) return null;
    return DynamicComponent;
  });
};

export default Components;

export const Components_Query = /* groq */ `
  content[] {
    ${Faq_Query}
    ${CaseStudy_Query}
    ${Comparison_Query}
    ${Features_Query}
    ${StatsGrid_Query}
    ${ListWithIconAndCta_Query}
  },
`;
