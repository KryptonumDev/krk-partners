import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import sanityFetch from '@/utils/sanity.fetch';
import Seo, { Seo_Query } from '@/global/Seo';
import type { LandingPageQueryProps, generateStaticParamsProps } from '@/global/types';
import Components, { Components_Query } from '@/components/Components';
import Breadcrumbs from '@/components/_global/Breadcrumbs';

const LandingPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const {
    landingPage: { content, name },
  } = await query(slug);

  return (
    <>
      <Breadcrumbs
        data={[
          {
            name,
            path: `/${slug}`,
          },
        ]}
        visible={false}
      />
      <Components data={content} />
    </>
  );
};

export default LandingPage;

export async function generateMetadata({ params: { slug: paramsSlug } }: { params: { slug: string } }) {
  const {
    landingPage: {
      slug,
      seo: { title, description },
    },
  } = await query(paramsSlug);
  return Seo({
    title,
    description,
    path: `/${slug}`,
  });
}

const query = async (slug: string): Promise<LandingPageQueryProps> => {
  const data = await sanityFetch<LandingPageQueryProps>({
    query: /* groq */ `
      {
        "landingPage": *[_type == "landingPage_Collection" && slug.current == $slug][0] {
          name,
          'slug': slug.current,
          ${Components_Query}
          ${Seo_Query}
        },
        "firstLanding": *[_type == "landingPage_Collection"][0] {
          'slug': slug.current,
        }
      }
    `,
    params: { slug },
    isDraftMode: draftMode().isEnabled,
  });
  !data.landingPage && redirect(data.firstLanding.slug);
  return data as LandingPageQueryProps;
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
