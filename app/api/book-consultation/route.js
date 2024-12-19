// app/api/book-consultation/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();

    // Send email to client
    await resend.emails.send({
      from: 'purushotam@devopsguy.in', // Use this verified sender for testing
      to: [data.email],
      subject: 'Your Consultation Booking Confirmation',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1>Booking Confirmed!</h1>
          <p>Hello ${data.name},</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2>Consultation Details:</h2>
            <ul style="list-style: none; padding: 0;">
              <li>Date: ${data.date}</li>
              <li>Time: ${data.time}</li>
              <li>Service: ${data.service}</li>
            </ul>
          </div>

          <div style="margin-top: 20px;">
            <h3>Next Steps:</h3>
            <ul>
              <li>You will receive a calendar invite shortly</li>
              <li>Prepare any questions you'd like to discuss</li>
              <li>Zoom link will be sent before the meeting</li>
            </ul>
          </div>

          <p>Looking forward to speaking with you!</p>
          <p>Best regards,<br>Purushotam Sharma</p>
        </div>
      `
    });

    // Send notification to yourself
    await resend.emails.send({
      from: 'purushotam@devopsguy.in',
      to: ['sharmapurushotam57@gmail.com'], // Replace with your email
      subject: 'New Consultation Booking',
      html: `
        <div style="font-family: sans-serif;">
          <h1>New Booking Request</h1>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Service:</strong> ${data.service}</p>
            <p><strong>Date:</strong> ${data.date}</p>
            <p><strong>Time:</strong> ${data.time}</p>
            <p><strong>Description:</strong> ${data.description}</p>
          </div>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}