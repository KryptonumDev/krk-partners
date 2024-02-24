import { Img_Query } from '@/components/ui/image';
import PersonIntroduction from './PersonIntroduction';
export type { Props as PersonIntroductionProps } from './PersonIntroduction.types';
export default PersonIntroduction;

export const PersonIntroduction_Query = `
  _type == "PersonIntroduction" => {
    _type,
    name,
    position,
    img {
      ${Img_Query}
    },
    logo {
      ${Img_Query}
    },
    text,
    signature {
      ${Img_Query}
    },
  },
`;
