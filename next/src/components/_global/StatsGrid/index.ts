import { Img_Query } from '@/components/ui/image';
import StatsGrid from './StatsGrid';
export type { Props as StatsGridProps } from './StatsGrid.types';
export default StatsGrid;

export const StatsGrid_Query = `
  _type == "StatsGrid" => {
    _type,
    heading,
    subheading,
    paragraph,
    tile1_Heading,
    tile1_Img {
      ${Img_Query}
    },
    tile2_Heading,
    tile2_Img {
      ${Img_Query}
    },
    tile3_Heading,
    tile3_Img {
      ${Img_Query}
    },
    tile4_Heading,
    tile4_Img {
      ${Img_Query}
    },
    logo {
      ${Img_Query}
    },
  },
`;
