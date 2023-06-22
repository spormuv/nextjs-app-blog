import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const headerList = headers();
  const type = headerList.get('Content-Type');

  const cookiesList = cookies();
  const coo1 = cookiesList.get('Cookie_1')?.value;
  // delete post logic
  // redirect('/blog');

  return NextResponse.json({ id, type, coo1 });
}
