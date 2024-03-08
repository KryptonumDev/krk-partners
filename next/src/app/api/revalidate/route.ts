import { NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  const authorizationHeader = request.headers.get('Authorization');

  if (authorizationHeader !== `Bearer ${process.env.SANITY_REVALIDATE_TOKEN}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  const tag = request.nextUrl.searchParams.get('tag');
  if (tag) {
    revalidateTag(tag);
    return Response.json({ revalidated: true, now: Date.now() });
  } else {
    return Response.json({ revalidated: false, now: Date.now() });
  }
}
