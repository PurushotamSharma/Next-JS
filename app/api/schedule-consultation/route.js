// app/api/schedule-consultation/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { google } from 'googleapis';
import axios from 'axios';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

// Function to generate Zoom JWT token
function generateZoomJWTToken() {
  const ZOOM_API_KEY = process.env.ZOOM_API_KEY;
  const ZOOM_API_SECRET = process.env.ZOOM_API_SECRET;
  const payload = {
    iss: ZOOM_API_KEY,
    exp: new Date().getTime() + 5000
  };
  // You'll need to install jsonwebtoken: npm install jsonwebtoken
  const jwt = require('jsonwebtoken');
  return jwt.sign(payload, ZOOM_API_SECRET);
}

// Function to create Zoom meeting
async function createZoomMeeting(details) {
  const token = generateZoomJWTToken();
  
  try {
    const response = await axios.post(
      'https://api.zoom.us/v2/users/me/meetings',
      {
        topic: details.topic,
        type: 2, // Scheduled meeting
        start_time: details.start_time,
        duration: details.duration,
        timezone: details.timezone,
        settings: {
          host_video: true,
          participant_video: true,
          join_before_host: false,
          mute_upon_entry: true,
          waiting_room: true
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    return response.data;
  } catch (error) {
    console.error('Zoom API Error:', error.response?.data || error.message);
    throw error;
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    
    // Format datetime for APIs
    const meetingDateTime = new Date(`${data.date}T${data.time}`);
    const endDateTime = new Date(meetingDateTime.getTime() + 30 * 60000); // Add 30 minutes

    // 1. Create Zoom meeting
    const zoomMeeting = await createZoomMeeting({
      topic: `Consultation with ${data.name} from ${data.company}`,
      start_time: meetingDateTime.toISOString(),
      duration: 30,
      timezone: data.timezone
    });

    // 2. Set up Google Calendar
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
      scopes: ['https://www.googleapis.com/auth/calendar']
    });

    const calendar = google.calendar({ version: 'v3', auth });

    // 3. Create Calendar Event
    const calendarEvent = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: {
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
          timeZone: data.timezone
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: data.timezone
        },
        attendees: [
          { email: data.email },
          { email: process.env.YOUR_EMAIL }
        ],
        conferenceData: {
          createRequest: {
            requestId: zoomMeeting.id,
            conferenceSolutionKey: {
              type: 'hangoutsMeet'
            }
          }
        },
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 60 },
            { method: 'popup', minutes: 10 }
          ]
        }
      },
      conferenceDataVersion: 1
    });

    // 4. Send confirmation email
    await resend.emails.send({
      from: 'Your Company <notifications@yourcompany.com>',
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
      `
    });

    return NextResponse.json({
      success: true,
      meeting: {
        id: zoomMeeting.id,
        join_url: zoomMeeting.join_url,
        start_time: meetingDateTime.toISOString(),
        calendar_event_id: calendarEvent.data.id
      }
    });

  } catch (error) {
    console.error('Scheduling error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to schedule consultation',
        details: error.message 
      },
      { status: 500 }
    );
  }
}