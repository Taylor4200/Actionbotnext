// lib/resend.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async ({
  email,
  verificationCode,
}: {
  email: string;
  verificationCode: string;
}) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'ActionBot <verification@actionbot.ai>',
      to: email,
      subject: 'Verify your ActionBot account',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6366f1;">Welcome to ActionBot!</h1>
          <p>Thanks for signing up. To complete your registration, please use the following verification code:</p>
          <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; text-align: center; margin: 24px 0;">
            <code style="font-size: 24px; font-weight: bold; letter-spacing: 4px;">${verificationCode}</code>
          </div>
          <p>This code will expire in 10 minutes.</p>
          <p>If you didn't request this verification code, you can safely ignore this email.</p>
          <hr style="border: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="color: #6b7280; font-size: 14px;">This is an automated message, please do not reply to this email.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }

    return { success: true, data };
  } catch (err) {
    console.error('Send verification email error:', err);
    throw err;
  }
};