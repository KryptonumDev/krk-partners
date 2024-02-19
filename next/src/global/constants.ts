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
export const domain: string = 'https://krk-partners.pl';

/**
 * Global declaration of regex.
 * @constant
 */
export const regex: { email: RegExp; phone: RegExp; string: RegExp } = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  phone: /^(?:\+(?:\d{1,3}))?(?:[ -]?\(?\d{1,4}\)?[ -]?\d{1,5}[ -]?\d{1,5}[ -]?\d{1,6})$/,
  string: /^(?!\s+$)(.*?)\s*$/,
};

/**
 * Global declaration of easing.
 * @constant
 */
export const easing = [0.65, 0.05, 0.36, 1];
