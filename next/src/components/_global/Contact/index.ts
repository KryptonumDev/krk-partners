import { Img_Query } from '@/components/ui/image';
import Contact from './Contact';
export type { Props as ContactProps } from './Contact.types';
export default Contact;

export const Contact_Query = `
  _type == "Contact" => {
    _type,
    heading,
    form_Paragraph,
    contact_Paragraph,
    contact_Person -> {
      img {
        ${Img_Query}
      },
      name,
      tel,
      email,
    },
  },
`;
