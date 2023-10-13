import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: { id: number }
}

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }) {
  // Fetch data from a db
  // If not found, return a 404 error
  // Else return data
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({ id: 1, name: 'Julio' })
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }) {
  // validate the request body
  const body = await request.json();
  // if invalid return 400
  if (!body.name)
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  // fetch user with given id
  // if user doesn't exist return 404
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  // update user
  // return updated user
  return NextResponse.json({ id: 1, name: body.name })
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }) {
  // Fetch the user, return 404 if not found
  if (params.id > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  // Delete the user, return 200 response
  return NextResponse.json({});
}
