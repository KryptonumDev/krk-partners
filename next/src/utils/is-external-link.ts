import { domain } from '@/global/constants';

export const isExternalLink = (href?: string) =>
  href &&
  ((href.startsWith('https://') && !href.startsWith(domain)) || href.startsWith('mailto:') || href.startsWith('tel:'));
