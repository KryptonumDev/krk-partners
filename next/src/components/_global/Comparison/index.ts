import { Img_Query } from '@/components/ui/image';
import Comparison from './Comparison';
export type { Props as ComparisonProps } from './Comparison.types';
export default Comparison;

export const Comparison_Query = `
  _type == "Comparison" => {
    _type,
    heading,
    subheading,
    tableHeader[] {
      icon {
        ${Img_Query}
      },
      name,
    },
    tableItems[] {
      heading,
      option1_Name,
      option2_Name,
      option3_Name,
      option1_Color,
      option2_Color,
      option3_Color,
    },
  },
`;
