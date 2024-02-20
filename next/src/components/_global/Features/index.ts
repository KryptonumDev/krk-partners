import { Img_Query } from '@/components/ui/image';
import Features from './Features';
export type { Props as FeaturesProps } from './Features.types';
export default Features;

export const Features_Query = `
  _type == "Features" => {
    _type,
    heading,
    subheading,
    list[] {
      icon {
        ${Img_Query}
      },
      title,
      description,
    },
  },
`;
