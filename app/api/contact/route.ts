// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Only initialize Resend if email sending is enabled and API key is provided
const emailEnabled = process.env.ENABLE_EMAIL_SENDING === "true";
const resend = emailEnabled && process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  try {
    let data;
    
    if (emailEnabled && resend) {
      // Send actual email when enabled
      data = await resend.emails.send({
        from: process.env.RESEND_SEND_FROM!,
        to: process.env.RESEND_SEND_TO!,
        subject: `New message from ${name}`,
        replyTo: email,
        text: message,
      });
    } else {
      // Simulate email sending for demo mode
      data = {
        id: `demo-${Date.now()}`,
        from: process.env.RESEND_SEND_FROM || "demo@example.com",
        to: process.env.RESEND_SEND_TO || "demo@example.com",
        created_at: new Date().toISOString(),
        subject: `New message from ${name}`,
        demo: true
      };
      
      // Add a small delay to simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    return NextResponse.json({ 
      success: true, 
      data,
      demo: !emailEnabled || !resend
    });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}