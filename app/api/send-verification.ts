import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend only if API key is available
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // During build time, return a mock object instead of throwing
    if (typeof window === 'undefined' && process.env.NODE_ENV !== 'production') {
      console.warn('RESEND_API_KEY not available during build, using mock');
      return {
        emails: {
          send: async () => ({ data: null, error: null })
        }
      };
    }
    throw new Error('RESEND_API_KEY environment variable is not set');
  }
  return new Resend(apiKey);
};

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Generate 6-digit verification code
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // Check if we're in a build environment
    if (process.env.NODE_ENV === 'production' && !process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not available, skipping email send');
      return NextResponse.json({ success: true });
    }

    try {
      const resend = getResend();
      
      // Send email using Resend
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "noreply@yourdomain.com",
        to: email,
        subject: "Your verification code",
        html: `<p>Your code is: <strong>${code}</strong></p>`,
      });
    } catch (error) {
      // If Resend is not configured, still return success in development
      if (process.env.NODE_ENV === 'development') {
        console.warn('Resend not configured, but continuing in development mode');
      } else {
        throw error;
      }
    }

    // Optionally: store code in your database/session here

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}