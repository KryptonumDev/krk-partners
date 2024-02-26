import { Img_Query } from '@/components/ui/image';
import FloatingItems from './FloatingItems';
export type { Props as FloatingItemsProps } from './FloatingItems.types';
export default FloatingItems;

export const FloatingItems_Query = `
  _type == "FloatingItems" => {
    _type,
    heading,
    list[] {
      isHighlighted,
      icon {
        ${Img_Query}
      },
      name
    },
  },
`;
