import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'Hobbies route is working' });
}
