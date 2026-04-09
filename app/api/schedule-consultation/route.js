// app/api/schedule-consultation/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { SignJWT, importPKCS8 } from 'jose';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

const RESEND_FROM =
  process.env.RESEND_FROM || 'purushotam@devopsguy.in';

/** Zoom legacy JWT (HS256): iss = API key, exp per Zoom docs */
async function generateZoomJwtToken() {
  const apiKey = process.env.ZOOM_API_KEY;
  const apiSecret = process.env.ZOOM_API_SECRET;
  if (!apiKey || !apiSecret) {
    throw new Error('Missing ZOOM_API_KEY or ZOOM_API_SECRET');
  }
  const secret = new TextEncoder().encode(apiSecret);
  return new SignJWT({})
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuer(apiKey)
    .setExpirationTime(Math.floor(Date.now() / 1000) + 3600)
    .sign(secret);
}

async function createZoomMeeting(details) {
  const token = await generateZoomJwtToken();
  const res = await fetch('https://api.zoom.us/v2/users/me/meetings', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      topic: details.topic,
      type: 2,
      start_time: details.start_time,
      duration: details.duration,
      timezone: details.timezone,
      settings: {
        host_video: true,
        participant_video: true,
        join_before_host: false,
        mute_upon_entry: true,
        waiting_room: true,
      },
    }),
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error('Zoom API Error:', body);
    throw new Error(body.message || `Zoom API error: ${res.status}`);
  }
  return body;
}

/** Google service account access token (Calendar scope) */
async function getGoogleAccessToken() {
  const raw = process.env.GOOGLE_CREDENTIALS;
  if (!raw) throw new Error('Missing GOOGLE_CREDENTIALS');

  const credentials = JSON.parse(raw);
  const pem = credentials.private_key.replace(/\\n/g, '\n');
  const key = await importPKCS8(pem, 'RS256');

  const assertion = await new SignJWT({
    scope: 'https://www.googleapis.com/auth/calendar',
  })
    .setProtectedHeader({ alg: 'RS256' })
    .setIssuer(credentials.client_email)
    .setAudience('https://oauth2.googleapis.com/token')
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(key);

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  });

  const tokenJson = await tokenRes.json();
  if (!tokenRes.ok) {
    console.error('Google token error:', tokenJson);
    throw new Error(
      tokenJson.error_description || tokenJson.error || 'Google auth failed'
    );
  }
  return tokenJson.access_token;
}

async function insertCalendarEvent(accessToken, eventBody) {
  const url =
    'https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=1';
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventBody),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error('Calendar API error:', data);
    throw new Error(data.error?.message || `Calendar API error: ${res.status}`);
  }
  return data;
}

export async function POST(req) {
  try {
    const data = await req.json();

    const meetingDateTime = new Date(`${data.date}T${data.time}`);
    const endDateTime = new Date(meetingDateTime.getTime() + 30 * 60000);

    const zoomMeeting = await createZoomMeeting({
      topic: `Consultation with ${data.name} from ${data.company}`,
      start_time: meetingDateTime.toISOString(),
      duration: 30,
      timezone: data.timezone,
    });

    const accessToken = await getGoogleAccessToken();

    const calendarEvent = await insertCalendarEvent(accessToken, {
      summary: `Consultation with ${data.name} from ${data.company}`,
      description: `
          Consultation Meeting Details:

          Name: ${data.name}
          Company: ${data.company}
          Email: ${data.email}

          Zoom Meeting Link: ${zoomMeeting.join_url}
          Meeting ID: ${zoomMeeting.id}

          Note: This is a 30-minute consultation call.
        `,
      start: {
        dateTime: meetingDateTime.toISOString(),
        timeZone: data.timezone,
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: data.timezone,
      },
      attendees: [
        { email: data.email },
        ...(process.env.YOUR_EMAIL ? [{ email: process.env.YOUR_EMAIL }] : []),
      ],
      conferenceData: {
        createRequest: {
          requestId: String(zoomMeeting.id),
          conferenceSolutionKey: {
            type: 'hangoutsMeet',
          },
        },
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 60 },
          { method: 'popup', minutes: 10 },
        ],
      },
    });

    await resend.emails.send({
      from: RESEND_FROM,
      to: [data.email],
      subject: 'Your Consultation is Scheduled!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .button { background-color: #4ADE80; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; }
              .details { background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin: 20px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Your Consultation is Confirmed! 🎉</h1>

              <p>Hi ${data.name},</p>

              <p>Your consultation has been scheduled successfully. Here are the details:</p>

              <div class="details">
                <p><strong>Date:</strong> ${new Date(data.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p><strong>Time:</strong> ${data.time} (${data.timezone})</p>
                <p><strong>Duration:</strong> 30 minutes</p>
              </div>

              <p><strong>Zoom Meeting Details:</strong></p>
              <p>Join URL: <a href="${zoomMeeting.join_url}">${zoomMeeting.join_url}</a></p>
              <p>Meeting ID: ${zoomMeeting.id}</p>

              <p style="margin-top: 30px;">
                <a href="${zoomMeeting.join_url}" class="button">Join Meeting</a>
              </p>

              <p style="margin-top: 30px;">
                <small>This meeting has been added to your calendar. You'll receive a reminder before the meeting.</small>
              </p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      meeting: {
        id: zoomMeeting.id,
        join_url: zoomMeeting.join_url,
        start_time: meetingDateTime.toISOString(),
        calendar_event_id: calendarEvent.id,
      },
    });
  } catch (error) {
    console.error('Scheduling error:', error);
    return NextResponse.json(
      {
        error: 'Failed to schedule consultation',
        details: error.message,
      },
      { status: 500 }
    );
  }
}
