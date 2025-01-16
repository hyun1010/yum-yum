import { connectDB } from '@/src/shared/utils/database';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = (await connectDB).db('area');

    const result = await db.collection('list').find().toArray(); // 데이터를 배열로 반환

    return NextResponse.json(
      { message: 'hello world', data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { message: 'Error fetching data' },
      { status: 500 }
    );
  }
}
