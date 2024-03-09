'use server';
import { draftMode } from 'next/headers';
import { createClient, type QueryParams } from 'next-sanity';
import { requestAsyncStorage } from 'next/dist/client/components/request-async-storage.external';

const projectId = process.env.SANITY_PROJECT_ID;
const token = process.env.SANITY_API_TOKEN;
const dataset = 'production';
const apiVersion = '2024-03-08';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  perspective: 'published',
  useCdn: false,
});

export default async function sanityFetch<QueryResponse>({
  query,
  tags,
  params = {},
}: {
  query: string;
  tags?: string[];
  params?: QueryParams;
}): Promise<QueryResponse> {
  const isDraftMode = requestAsyncStorage.getStore() ? draftMode().isEnabled : false;
  if (isDraftMode && !token) {
    throw new Error('The `SANITY_API_TOKEN` environment variable is required.');
  }
  return await client.fetch<QueryResponse>(query, params, {
    ...(isDraftMode && {
      token: token,
      perspective: 'previewDrafts',
    }),
    cache: isDraftMode || !tags ? 'no-cache' : 'default',
    next: {
      tags: tags,
    },
  });
}
