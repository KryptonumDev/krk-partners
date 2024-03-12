import sanityFetch from '@/utils/sanity.fetch';
import type { MetadataRoute } from 'next';
import { domain } from '@/global/constants';

type FetchProps = {
  landings: {
    slug: string;
  }[];
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { landings } = await query();
  const sitemap = [
    ...landings.map(({ slug }) => ({
      url: `${domain}/${slug}`,
      lastModified: new Date(),
    })),
  ];

  return sitemap;
}

const query = async (): Promise<FetchProps> => {
  return await sanityFetch<FetchProps>({
    query: /* groq */ `
      {
        'landings': *[_type == 'landingPage_Collection'] {
          'slug': slug.current
        }
      }
    `,
    tags: ['landingPage_Collection'],
  });
};
