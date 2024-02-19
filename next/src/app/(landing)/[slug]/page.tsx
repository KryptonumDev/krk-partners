import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import sanityFetch from '@/utils/sanity.fetch';
import Seo, { Seo_Query } from '@/global/Seo';
import type { PageQueryProps, generateStaticParamsProps } from '@/global/types';
import Components, { Components_Query } from '@/components/Components';
import Breadcrumbs from '@/components/_global/Breadcrumbs';

const LandingPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const { content, name }: PageQueryProps = await query(slug);

  return (
    <>
      <Breadcrumbs
        data={[
          {
            name,
            path: `/landing/${slug}`,
          },
        ]}
        visible={false}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='484'
        height='575'
        viewBox='0 0 484 575'
        fill='none'
      >
        <path
          d='M484 16C484 7.16344 476.837 0 468 0H119C110.163 0 103 7.16344 103 16V86C103 94.8366 95.8366 102 87 102H16C7.16344 102 0 109.163 0 118V559C0 567.837 7.16345 575 16 575H468C476.837 575 484 567.837 484 559V16Z'
          fill='#f90'
        />
      </svg>
      <Components data={content} />
    </>
  );
};

export default LandingPage;

export async function generateMetadata({ params: { slug: paramsSlug } }: { params: { slug: string } }) {
  const {
    slug,
    seo: { title, description },
  } = await query(paramsSlug);
  return Seo({
    title,
    description,
    path: `/landing/${slug}`,
  });
}

const query = async (slug: string): Promise<PageQueryProps> => {
  const data = await sanityFetch({
    query: /* groq */ `
      *[_type == "landingPage_Collection" && slug.current == $slug][0] {
        name,
        'slug': slug.current,
        ${Components_Query}
        ${Seo_Query}
      }
    `,
    params: { slug },
    isDraftMode: draftMode().isEnabled,
  });
  !data && notFound();
  return data as PageQueryProps;
};

export async function generateStaticParams(): Promise<generateStaticParamsProps[]> {
  const data: generateStaticParamsProps[] = await sanityFetch({
    query: /* groq */ `
      *[_type == "landingPage_Collection"] {
        'slug': slug.current,
      }
    `,
  });

  return data.map(({ slug }) => ({
    slug,
  }));
}
