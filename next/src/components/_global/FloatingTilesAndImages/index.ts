import { Img_Query } from '@/components/ui/image';
import FloatingTilesAndImages from './FloatingTilesAndImages';
import { Button_Query } from '@/components/ui/Button';
export type { Props as FloatingTilesAndImagesProps } from './FloatingTilesAndImages.types';
export default FloatingTilesAndImages;

export const FloatingTilesAndImages_Query = `
  _type == "FloatingTilesAndImages" => {
    _type,
    heading,
    subheading,
    paragraph,
    list_Paragraph,
    paragraphCta {
      ${Button_Query}
    },
    list[] {
      icon {
        ${Img_Query}
      },
      list,
    },
    images[] {
      img {
        ${Img_Query}
      },
      name,
    },
    ctaPrompt,
    cta {
      ${Button_Query}
    },
  },
`;
