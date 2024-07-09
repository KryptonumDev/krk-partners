import { Img_Query } from '@/components/ui/image';
import HeroApplication from './HeroApplication';
export type { Props as HeroApplicationProps } from './HeroApplication.types';
export default HeroApplication;

export const HeroApplication_Query = `
  _type == "HeroApplication" => {
    _type,
    heading,
    subheading,
    paragraph,
    rating_Value,
    rating_Count,
    rating_Link,
    testimonial_Img {
      ${Img_Query}
    },
    testimonial_Name,
    testimonial_Industry,
    testimonial_Text,
    form_Heading,
    form_Features,
  },
`;
