import { createClient } from 'next-sanity';
import type { QueryParams } from '@sanity/client';

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;
const apiVersion = '2024-02-19';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  perspective: 'published',
  useCdn: false,
});

const DEFAULT_PARAMS = {} as QueryParams;
const NEXT_REVALIDATE = 900;

export default async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  isDraftMode = false,
}: {
  query: string;
  params?: QueryParams;
  isDraftMode?: boolean;
}): Promise<QueryResponse> {
  if (isDraftMode && !token) {
    throw new Error('The `SANITY_API_TOKEN` environment variable is required.');
  }
  return await client.fetch<QueryResponse>(query, params, {
    ...(isDraftMode && {
      token: token,
      perspective: 'previewDrafts',
    }),
    next: {
      revalidate: isDraftMode ? 0 : NEXT_REVALIDATE,
    },
  });
}
