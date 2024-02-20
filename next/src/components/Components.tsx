import Faq, { Faq_Query, type FaqProps } from '@/components/_global/Faq';
import CaseStudy, { CaseStudy_Query, type CaseStudyProps } from './_global/CaseStudy';

type ComponentMap = {
  Faq: FaqProps;
  CaseStudy: CaseStudyProps;
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
  },
`;
