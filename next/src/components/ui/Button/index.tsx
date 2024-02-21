import Link from 'next/link';
import styles from './styles.module.scss';
import { isExternalLink } from '@/utils/is-external-link';
import type { CtaType } from '@/global/types';

type ButtonProps = (
  | {
      data: CtaType;
      href?: never;
      children?: never;
    }
  | {
      data?: never;
      href?: CtaType['href'];
      children: CtaType['text'];
      disabled?: boolean;
    }
) &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = ({ data, children, href, className, ...props }: ButtonProps) => {
  if (data) {
    href = data.href;
    children = data.text;
  }

  const isExternal = isExternalLink(href);
  const Element: 'a' | typeof Link | 'button' = href ? (isExternal ? 'a' : Link) : 'button';

  return (
    <Element
      href={href || ''}
      {...(href && isExternal && { target: '_blank', rel: 'noopener' })}
      className={`${styles.wrapper}${className ? ` ${className}` : ''}`}
      {...props}
    >
      <span>{children}</span>
      <div className={styles.icon}>
        <ArrowIcon />
        <ArrowIcon />
      </div>
    </Element>
  );
};

const ArrowIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={21}
    fill='none'
  >
    <path
      d='M3.333 10.542h13.334m0 0-5-5m5 5-5 5'
      stroke='#fff'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default Button;

export const Button_Query = `
  theme,
  text,
  href,
`;
