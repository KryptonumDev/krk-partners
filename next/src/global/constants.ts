/**
 * Global declaration of themeColor in HEX format.
 * @constant
 */
export const themeColor: string = '#F0F2F7';

/**
 * Global declaration of backgroundColor in HEX format.
 * @constant
 */
export const backgroundColor: string = '#FFFFFF';

/**
 * Global declaration of page language.
 * @constant
 */
export const locale: string = 'pl';

/**
 * Global declaration of domain name of the website. Be aware of the protocol and www or non-www prefix.
 * @constant
 */
export const domain: string = 'https://lp.krk-partners.pl';

/**
 * Global declaration of regex.
 * @constant
 */
export const regex: {
  email: RegExp;
  tel: RegExp;
  string: RegExp;
  registerNumber: RegExp;
  checkDigit: RegExp;
  hasLetters: RegExp;
} = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  tel: /^(?:\+(?:\d{1,3}))?(?:[ -]?\(?\d{1,4}\)?[ -]?(\d\s?){8,})$/,
  string: /^(?!\s+$)(.*?)\s*$/,
  registerNumber: /^[0-9]{8}$/,
  checkDigit: /^[0-9]{1}$/,
  hasLetters: /[a-zA-Z]/,
};

/**
 * Global declaration of easing.
 * @constant
 */
export const easing = [0.65, 0.05, 0.36, 1];
