import { NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';
import sanityFetch from '@/utils/sanity.fetch';

type RequestType = {
  tag: string;
  id?: string;
};
type QueryType = {
  references: string[];
};

export async function POST(request: NextRequest) {
  const authorizationHeader = request.headers.get('Authorization');
  const { tag, id } = (await request.json()) as RequestType;

  const references = await query(tag, id);

  console.log(references);
  return new Response('Unauthorized', { status: 401 });

  // if (authorizationHeader !== `Bearer ${process.env.SANITY_REVALIDATE_TOKEN}`) {
  //   return new Response('Unauthorized', { status: 401 });
  // }

  // if (tag) {
  //   revalidateTag(tag);
  //   return Response.json({ revalidated: true, now: Date.now() });
  // } else {
  //   return Response.json({ revalidated: false, now: Date.now() });
  // }
}

const query = async (tag: string, id?: string): Promise<QueryType> => {
  let queryHeader = `*[_type == "${tag}"]`;
  if (id) queryHeader = `*[_type == "${tag}" && _id == "${id}"]`;
  return await sanityFetch<QueryType>({
    query: /* groq */ `
      ${queryHeader}{
        "references": *[references(^._id)]._type,
      }
    `,
  });
};
