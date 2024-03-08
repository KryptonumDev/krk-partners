import { NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';

type RequestType = {
  tag: string;
};

export async function POST(request: NextRequest) {
  const authorizationHeader = request.headers.get('Authorization');
  const { tag } = (await request.json()) as RequestType;

  if (authorizationHeader !== `Bearer ${process.env.SANITY_REVALIDATE_TOKEN}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  if (tag) {
    revalidateTag(tag);
    return Response.json({ revalidated: true, now: Date.now() });
  } else {
    return Response.json({ revalidated: false, now: Date.now() });
  }
}
