import { Img_Query } from '@/components/ui/image';
import { Button_Query } from '@/components/ui/Button';
import CaseStudy from './CaseStudy';
export type { Props as CaseStudyProps } from './CaseStudy.types';
export default CaseStudy;

export const CaseStudy_Query = `
  _type == "CaseStudy" => {
    _type,
    heading,
    subheading,
    list[] {
      tab,
      paragraph,
      ctaPrompt,
      cta {
        ${Button_Query}
      },
      icon {
        ${Img_Query}
      },
      img {
        ${Img_Query}
      },
    },
  },
`;
