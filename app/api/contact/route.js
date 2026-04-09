import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'edge';

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, service, message } = await req.json();

    // 1. Send emails (existing functionality)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Modern, trendy auto-reply template (existing code)
    const userEmailTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for reaching out!</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(145deg, #1a1f25 0%, #242b38 100%); border-radius: 20px; color: white;">
    <!-- Header Section -->
    <div style="margin-bottom: 40px;">
      <h1 style="color: #fff; font-size: 32px; margin-bottom: 10px;">Hi ${firstName},</h1>
      <p style="color: #94a3b8; font-size: 18px; line-height: 1.6; margin-bottom: 30px;">
        Thanks for getting in touch! I've received your message and will get back to you soon. In the meantime, feel free to:
      </p>
    </div>

    <!-- Interactive Links Section -->
    <div style="margin-bottom: 40px;">
      <a href="https://purushotam.devopsguy.in" style="display: block; background: rgba(0, 255, 153, 0.1); border-left: 4px solid #00ff99; padding: 20px; margin-bottom: 15px; border-radius: 12px; text-decoration: none; color: white; transition: transform 0.2s;">
        <div style="display: flex; align-items: center;">
          <span style="font-size: 24px; margin-right: 15px;">🌐</span>
          <div>
            <div style="font-weight: 600; font-size: 18px; color: #00ff99;">Check out my Portfolio</div>
            <div style="font-size: 14px; color: #94a3b8; margin-top: 4px;">Explore my projects and experiences</div>
          </div>
        </div>
      </a>

      <a href="https://www.linkedin.com/in/purushotamsharma/" style="display: block; background: rgba(0, 255, 153, 0.1); border-left: 4px solid #00ff99; padding: 20px; margin-bottom: 15px; border-radius: 12px; text-decoration: none; color: white; transition: transform 0.2s;">
        <div style="display: flex; align-items: center;">
          <span style="font-size: 24px; margin-right: 15px;">👥</span>
          <div>
            <div style="font-weight: 600; font-size: 18px; color: #00ff99;">Connect on LinkedIn</div>
            <div style="font-size: 14px; color: #94a3b8; margin-top: 4px;">Let's grow our professional network</div>
          </div>
        </div>
      </a>

      <a href="https://github.com/purushotamSharma" style="display: block; background: rgba(0, 255, 153, 0.1); border-left: 4px solid #00ff99; padding: 20px; margin-bottom: 15px; border-radius: 12px; text-decoration: none; color: white; transition: transform 0.2s;">
        <div style="display: flex; align-items: center;">
          <span style="font-size: 24px; margin-right: 15px;">💻</span>
          <div>
            <div style="font-weight: 600; font-size: 18px; color: #00ff99;">Explore my GitHub</div>
            <div style="font-size: 14px; color: #94a3b8; margin-top: 4px;">Check out my open-source contributions</div>
          </div>
        </div>
      </a>
    </div>

    <!-- Signature Section -->
    <div style="border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 30px; margin-top: 30px;">
      <div style="margin-bottom: 25px;">
        <p style="color: #fff; margin: 0 0 5px 0; font-size: 16px;">Best regards,</p>
        <h2 style="color: #00ff99; margin: 0 0 5px 0; font-size: 24px; font-weight: 600;">Purushotam Sharma</h2>
        <p style="color: #94a3b8; margin: 0; font-size: 16px;">DevOps Engineer</p>
      </div>

      <!-- Social Links -->
      <div style="background: rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 15px; display: flex; gap: 15px; justify-content: center;">
        <a href="https://purushotam.devopsguy.in" style="color: #00ff99; text-decoration: none; padding: 8px 15px; border-radius: 8px; background: rgba(0, 255, 153, 0.1);">
          🌐 Portfolio
        </a>
        <a href="https://www.linkedin.com/in/purushotamsharma/" style="color: #00ff99; text-decoration: none; padding: 8px 15px; border-radius: 8px; background: rgba(0, 255, 153, 0.1);">
          👥 LinkedIn
        </a>
        <a href="https://github.com/purushotamSharma" style="color: #00ff99; text-decoration: none; padding: 8px 15px; border-radius: 8px; background: rgba(0, 255, 153, 0.1);">
          💻 GitHub
        </a>
      </div>
    </div>
  </div>
</body>
</html>
`;

    // Modern admin notification template (existing code)
    const adminEmailTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
          </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Inter', sans-serif; line-height: 1.6;">
          <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);">
            <!-- Header -->
            <div style="padding: 40px 20px; background: linear-gradient(135deg, #00DC82 0%, #36E4DA 100%); text-align: center;">
              <h1 style="margin: 0; color: #0F172A; font-size: 28px; font-weight: 700;">New Contact Request 📬</h1>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              <!-- Contact Details -->
              <div style="background: rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 30px; margin-bottom: 20px;">
                <h2 style="color: #00DC82; margin: 0 0 20px 0; font-size: 20px;">Contact Details</h2>
                <div style="margin-bottom: 15px;">
                  <p style="color: #94A3B8; margin: 0 0 5px 0;">Name:</p>
                  <p style="color: #fff; margin: 0; font-size: 16px;">${firstName} ${lastName}</p>
                </div>
                <div style="margin-bottom: 15px;">
                  <p style="color: #94A3B8; margin: 0 0 5px 0;">Email:</p>
                  <p style="color: #fff; margin: 0; font-size: 16px;">${email}</p>
                </div>
                <div style="margin-bottom: 15px;">
                  <p style="color: #94A3B8; margin: 0 0 5px 0;">Phone:</p>
                  <p style="color: #fff; margin: 0; font-size: 16px;">${phone || 'Not provided'}</p>
                </div>
                <div style="margin-bottom: 15px;">
                  <p style="color: #94A3B8; margin: 0 0 5px 0;">Service:</p>
                  <p style="color: #fff; margin: 0; font-size: 16px;">${service || 'Not specified'}</p>
                </div>
              </div>

              <!-- Message -->
              <div style="background: rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 30px;">
                <h2 style="color: #00DC82; margin: 0 0 20px 0; font-size: 20px;">Message</h2>
                <p style="color: #fff; margin: 0; font-size: 16px; line-height: 1.6;">${message}</p>
              </div>
            </div>

            <!-- Footer -->
            <div style="padding: 20px; text-align: center; background: rgba(0, 0, 0, 0.3);">
              <p style="color: #64748B; font-size: 12px; margin: 0;">Contact form submission - ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send emails
    await Promise.all([
      transporter.sendMail({
        from: `"Purushotam Sharma" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: adminEmailTemplate
      }),
      transporter.sendMail({
        from: `"Purushotam Sharma" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Thank you for contacting Purushotam Sharma',
        html: userEmailTemplate
      })
    ]);

    // 2. Send Telegram notification
    await sendTelegramNotification({
      firstName,
      lastName,
      email,
      phone,
      service,
      message
    });

    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
}

// Function to send Telegram notification
async function sendTelegramNotification(formData) {
  try {
    // Format the message for Telegram
    const telegramMessage = `
🔔 *New Contact Form Submission* 🔔

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Service:* ${formData.service || 'Not specified'}

*Message:*
${formData.message}

*Submitted:* ${new Date().toLocaleString()}
`;

    // Your Telegram bot details from environment variables
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    // Construct the API URL
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    // Make the API request
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });
    
    const result = await response.json();
    
    if (!result.ok) {
      throw new Error(`Telegram API error: ${result.description}`);
    }
    
    console.log('Telegram notification sent successfully!');
    return true;
  } catch (error) {
    console.error('Error sending Telegram notification:', error);
    // Don't throw the error to avoid breaking the whole request
    return false;
  }
}