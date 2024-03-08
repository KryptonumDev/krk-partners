import { redirect } from 'next/navigation';
import sanityFetch from '@/utils/sanity.fetch';
import Seo, { Seo_Query } from '@/global/Seo';
import type { LandingPageQueryProps, generateStaticParamsProps } from '@/global/types';
import Components, { Components_Query } from '@/components/Components';
import Breadcrumbs from '@/components/_global/Breadcrumbs';
import { Img_Query } from '@/components/ui/image';

const LandingPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const {
    landingPage: { content, name, contactPerson },
    global: { email },
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
      <Components
        data={content}
        contactPerson={contactPerson}
        globalEmail={email}
      />
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
          contactPerson -> {
            img {
              ${Img_Query}
            },
            name,
            tel,
            email,
          },
        },
        "global": *[_type == "global"][0]{
          email,
        },
        "firstLanding": *[_type == "landingPage_Collection"][0] {
          'slug': slug.current,
        }
      }
    `,
    params: { slug },
    tags: ['landingPage_Collection', 'global'],
  });
  !data.landingPage && redirect(data.firstLanding.slug);
  return data;
};

export async function generateStaticParams(): Promise<generateStaticParamsProps> {
  const data = await sanityFetch<generateStaticParamsProps>({
    query: /* groq */ `
      *[_type == "landingPage_Collection"] {
        'slug': slug.current,
      }
    `,
    tags: ['landingPage'],
  });

  return data.map(({ slug }) => ({
    slug,
  }));
}
