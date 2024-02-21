import { Img_Query } from '@/components/ui/image';
import Reviews from './Reviews';
export type { Props as ReviewsProps } from './Reviews.types';
export default Reviews;

export const Reviews_Query = `
  _type == "Reviews" => {
    _type,
    heading,
    subheading,
    list[] {
      img {
        ${Img_Query}
      },
      name,
      review,
      amount,
    },
  },
`;
