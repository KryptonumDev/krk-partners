import { Button_Query } from '../ui/Button';
import { Img_Query } from '../ui/image';
import ListWithIconAndCta from './ListWithIconAndCta';
export type { Props as ListWithIconAndCtaProps } from './ListWithIconAndCta.types';
export default ListWithIconAndCta;

export const ListWithIconAndCta_Query = `
  _type == "ListWithIconAndCta" => {
    _type,
    heading,
    subheading,
    paragraph,
    list[] {
      icon {
        ${Img_Query}
      },
      title,
    },
    ctaPrompt,
    cta {
      ${Button_Query}
    }
  },
`;
