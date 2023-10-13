import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

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
  const validation = schema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })
  // Its convention to have status code set to 201 if successful object creation
  return NextResponse.json({ id: 5, name: body.name }, { status: 201});
}

