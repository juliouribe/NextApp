import { NextRequest, NextResponse } from "next/server";

// including next: NextRequest makes it so next doesn't cache this.
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: 'Julio' },
    { id: 2, name: 'Foolio' },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // validate
  // if invalid, return 400 error
  if (!body.name)
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  // Its convention to have status code set to 201 if successful object creation
  return NextResponse.json({ id: 5, name: body.name }, { status: 201});
}

