import { Button_Query } from '@/components/ui/Button';
import { Img_Query } from '@/components/ui/image';
import Steps from './Steps';
export type { Props as StepsProps } from './Steps.types';
export default Steps;

export const Steps_Query = `
  _type == "Steps" => {
    _type,
    heading,
    timeline[] {
      name,
      when,
    },
    cta_Heading,
    cta_Paragraph,
    cta_Cta {
      ${Button_Query}
    },
    cta_Img {
      ${Img_Query}
    },
  },
`;
