// app/api/send-verification/route.ts
import { NextResponse } from 'next/server';
import { sendVerificationEmail } from '@/lib/resend';

function generateVerificationCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const verificationCode = generateVerificationCode();

    // 🛠️ TODO: Store this code in Supabase (or cache) with expiration
    try {
      await sendVerificationEmail({ email, verificationCode });
    } catch (error) {
      // If Resend is not configured, still return success in development
      if (process.env.NODE_ENV === 'development') {
        console.warn('Resend not configured, but continuing in development mode');
      } else {
        throw error;
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Verification email sent successfully',
      ...(process.env.NODE_ENV === 'development' ? { verificationCode } : {}),
    });
  } catch (error) {
    console.error('POST /send-verification error:', error);
    return NextResponse.json(
      { error: 'Failed to send verification email' },
      { status: 500 }
    );
  }
}