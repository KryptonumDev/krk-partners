import HeroApplication, { HeroApplication_Query, type HeroApplicationProps } from './_global/HeroApplication';
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
import Steps, { Steps_Query, type StepsProps } from '@/components/_global/Steps';
import Team, { Team_Query, type TeamProps } from './_global/Team';
import PersonIntroduction, {
  PersonIntroduction_Query,
  type PersonIntroductionProps,
} from './_global/PersonIntroduction';
import FloatingItems, { FloatingItems_Query, type FloatingItemsProps } from './_global/FloatingItems';
import type { ContactPersonType } from '@/global/types';

type ComponentMap = {
  HeroApplication: HeroApplicationProps;
  CaseStudy: CaseStudyProps;
  Comparison: ComparisonProps;
  Features: FeaturesProps;
  StatsGrid: StatsGridProps;
  ListWithIconAndCta: ListWithIconAndCtaProps;
  Reviews: ReviewsProps;
  FloatingTilesAndImages: FloatingTilesAndImagesProps;
  Faq: FaqProps;
  Contact: ContactProps;
  Steps: StepsProps;
  Team: TeamProps;
  PersonIntroduction: PersonIntroductionProps;
  FloatingItems: FloatingItemsProps;
};

export type ComponentProps = ComponentMap[keyof ComponentMap] & { _type: string };

const Components = ({ data, contactPerson }: { data: ComponentProps[]; contactPerson?: ContactPersonType }) => {
  return data?.map((item, index) => {
    const componentType = item._type as keyof ComponentMap;
    const componentMap: Record<string, React.ReactNode> = {
      HeroApplication: (
        <HeroApplication
          {...(item as HeroApplicationProps)}
          contactPerson={contactPerson}
        />
      ),
      CaseStudy: <CaseStudy {...(item as CaseStudyProps)} />,
      Comparison: <Comparison {...(item as ComparisonProps)} />,
      Features: <Features {...(item as FeaturesProps)} />,
      StatsGrid: <StatsGrid {...(item as StatsGridProps)} />,
      ListWithIconAndCta: <ListWithIconAndCta {...(item as ListWithIconAndCtaProps)} />,
      Reviews: <Reviews {...(item as ReviewsProps)} />,
      FloatingTilesAndImages: <FloatingTilesAndImages {...(item as FloatingTilesAndImagesProps)} />,
      Faq: <Faq {...(item as FaqProps)} />,
      Contact: <Contact {...(item as ContactProps)} />,
      Steps: <Steps {...(item as StepsProps)} />,
      Team: <Team {...(item as TeamProps)} />,
      PersonIntroduction: <PersonIntroduction {...(item as PersonIntroductionProps)} />,
      FloatingItems: <FloatingItems {...(item as FloatingItemsProps)} />,
    };
    const DynamicComponent = componentMap[componentType];
    if (!DynamicComponent) return null;
    return DynamicComponent;
  });
};

export default Components;

export const Components_Query = /* groq */ `
  content[] {
    ${HeroApplication_Query}
    ${CaseStudy_Query}
    ${Comparison_Query}
    ${Features_Query}
    ${StatsGrid_Query}
    ${ListWithIconAndCta_Query}
    ${Reviews_Query}
    ${FloatingTilesAndImages_Query}
    ${Faq_Query}
    ${Contact_Query}
    ${Steps_Query}
    ${Team_Query}
    ${PersonIntroduction_Query}
    ${FloatingItems_Query}
  },
`;
