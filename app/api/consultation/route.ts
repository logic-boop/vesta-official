import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, org, timeline } = await request.json();

    // LogicTech Professional Email Template
    const data = await resend.emails.send({
      from: 'VESTA Consultation <onboarding@resend.dev>', 
      to: ['vestaofficial26@gmail.com'],
      subject: `New Private Consultation: ${name}`,
      html: `
        <div style="font-family: sans-serif; background-color: #050505; color: #ffffff; padding: 40px; border: 1px solid #D4AF37;">
          <h1 style="color: #D4AF37; font-family: serif; border-bottom: 1px solid #D4AF37; padding-bottom: 10px;">Private Inquiry Received</h1>
          <p style="margin-top: 20px;"><strong>Client Name:</strong> ${name}</p>
          <p><strong>Organization / Title:</strong> ${org || 'Not Specified'}</p>
          <p><strong>Transition Timeline:</strong> ${timeline}</p>
          <div style="margin-top: 40px; font-size: 10px; color: #D4AF37; letter-spacing: 2px; text-transform: uppercase;">
            Engineered by LogicTech
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}