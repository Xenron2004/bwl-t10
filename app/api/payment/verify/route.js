import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  try {
    const { rsplId, paymentId, status } = await request.json();

    const client = await clientPromise;
    const users = client.db('rspl').collection('users');

    if (status === 'SUCCESS') {
      await users.updateOne(
        { rsplId },
        { 
          $set: { 
            paymentStatus: 'completed',
            paymentId,
            paymentDate: new Date()
          }
        }
      );

      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully'
      });
    }

    return NextResponse.json({
      success: false,
      message: 'Payment verification failed'
    });

  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}