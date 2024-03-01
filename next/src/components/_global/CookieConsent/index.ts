import CookieConsent from './CookieConsent';
export type { Props as CookieConsentProps } from './CookieConsent.types';
export default CookieConsent;

export const CookieConsent_Query = `
  _type == "CookieConsent" => {
    _type,
  },
`;