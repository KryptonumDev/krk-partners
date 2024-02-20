import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { isExternalLink } from '@/utils/is-external-link';

const LinkRenderer = ({
  href,
  children,
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: React.ReactNode;
}) => {
  const isExternal = isExternalLink(href);
  const Element = isExternal ? 'a' : Link;

  return (
    <Element
      href={href || ''}
      className='link'
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener',
      })}
    >
      {children}
    </Element>
  );
};

const ListRenderer = ({
  children,
  ordered,
}: React.LiHTMLAttributes<HTMLLIElement> & {
  children?: React.ReactNode;
  ordered?: boolean;
}) => (
  <li>
    {!ordered && <BulletList />}
    <span>{children}</span>
  </li>
);

type MarkdownProps = {
  Tag?: keyof JSX.IntrinsicElements;
  components?: Record<string, React.ReactNode>;
  children: string;
  className?: string;
};

const Markdown = ({ Tag, components, children, className, ...props }: MarkdownProps) => {
  const markdown = (
    <MDXRemote
      source={children}
      components={{
        ...(Tag && {
          p: ({ children }) => <Tag {...props}>{children}</Tag>,
        }),
        a: LinkRenderer,
        li: ListRenderer,
        ol: ({ children }) => <ol className='orderedList'>{children}</ol>,
        ul: ({ children }) => <ul className='unorderedList'>{children}</ul>,
        ...components,
      }}
      {...props}
    />
  );

  return className || Object.keys(props).length > 0 ? (
    <div
      {...(className && { className: className })}
      {...props}
    >
      {markdown}
    </div>
  ) : (
    markdown
  );
};

Markdown.h1 = (props: JSX.IntrinsicAttributes & MarkdownProps) => (
  <Markdown
    Tag='h1'
    {...props}
  />
);
Markdown.h2 = (props: JSX.IntrinsicAttributes & MarkdownProps) => (
  <Markdown
    Tag='h2'
    {...props}
  />
);
Markdown.h3 = (props: JSX.IntrinsicAttributes & MarkdownProps) => (
  <Markdown
    Tag='h3'
    {...props}
  />
);
Markdown.h4 = (props: JSX.IntrinsicAttributes & MarkdownProps) => (
  <Markdown
    Tag='h4'
    {...props}
  />
);
Markdown.h5 = (props: JSX.IntrinsicAttributes & MarkdownProps) => (
  <Markdown
    Tag='h5'
    {...props}
  />
);
Markdown.span = (props: JSX.IntrinsicAttributes & MarkdownProps) => (
  <Markdown
    Tag='span'
    {...props}
  />
);

export default Markdown;

const BulletList = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    fill='none'
  >
    <path
      opacity={0.5}
      d='M14.8 8A6.667 6.667 0 1 1 1.467 8 6.667 6.667 0 0 1 14.8 8Z'
      fill='#377853'
    />
    <path
      d='M10.82 5.98a.5.5 0 0 1 0 .707L7.488 10.02a.5.5 0 0 1-.707 0L5.447 8.687a.5.5 0 1 1 .707-.707l.98.98 1.49-1.49 1.49-1.49a.5.5 0 0 1 .707 0Z'
      fill='#377853'
    />
  </svg>
);
