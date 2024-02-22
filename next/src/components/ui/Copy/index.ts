import Copy from './Copy';
export type { Props as CopyProps } from './Copy.types';
export default Copy;

export const Copy_Query = `
  _type == "Copy" => {
    _type,
  },
`;