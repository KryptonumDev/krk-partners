import { Img_Query } from '@/components/ui/image';
import Team from './Team';
export type { Props as TeamProps } from './Team.types';
export default Team;

export const Team_Query = `
  _type == "Team" => {
    _type,
    list[] -> {
      img {
        ${Img_Query}
      },
    },
    heading,
    block1_Heading,
    block1_Paragraph,
    block2_Heading,
    block2_Paragraph,
  },
`;
