require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;
const CONTACT_EMAIL = 'Help@EmergencyDentalArkansas.com';
const TWILIO_TO_NUMBER = '+15013131616';
const twilioAuthCredential = process.env.TWILIO_AUTH_KEY || process.env.TWILIO_AUTH_TOKEN;

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// General rate limiting for all routes (prevents abuse of static file serving)
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // limit each IP to 200 requests per window
  standardHeaders: true,
  legacyHeaders: false
});
app.use(generalLimiter);

// Rate limiting for appointment endpoint
const appointmentLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per window
  message: { success: false, message: 'Too many appointment requests. Please try again later.' }
});

function buildAppointmentLines({ name, phone, email, service, date, time, message }) {
  return [
    'NEW APPOINTMENT REQUEST - Emergency Dental',
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    `Service: ${service}`,
    date ? `Preferred Date: ${date}` : null,
    time ? `Preferred Time: ${time}` : null,
    message ? `Message: ${message}` : null
  ].filter(Boolean);
}

async function sendSmsNotification(smsBody) {
  if (!process.env.TWILIO_ACCOUNT_SID || !twilioAuthCredential || !process.env.TWILIO_FROM_NUMBER) {
    console.log('(Configure TWILIO_ACCOUNT_SID, TWILIO_AUTH_KEY, and TWILIO_FROM_NUMBER to enable SMS notifications)');
    return;
  }

  const twilio = require('twilio');
  const client = twilio(process.env.TWILIO_ACCOUNT_SID, twilioAuthCredential);
  await client.messages.create({
    body: smsBody,
    from: process.env.TWILIO_FROM_NUMBER,
    to: TWILIO_TO_NUMBER
  });
}

async function sendEmailNotification(appointmentLines) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.log('(Configure EMAIL_USER and EMAIL_PASSWORD to enable appointment email notifications)');
    return;
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.EMAIL_USER,
    to: process.env.APPOINTMENT_EMAIL_TO || CONTACT_EMAIL,
    subject: 'NEW APOINTMENT',
    text: appointmentLines.join('\n'),
    html: appointmentLines.map((line) => `<div>${line}</div>`).join('')
  });
}

// Appointment form submission endpoint
app.post('/api/appointment', appointmentLimiter, async (req, res) => {
  const { name, phone, email, service, date, time, message } = req.body;

  // Basic validation
  if (!name || !phone || !service) {
    return res.status(400).json({
      success: false,
      message: 'Please provide your name, phone number, and service type.'
    });
  }

  const appointmentLines = buildAppointmentLines({ name, phone, email, service, date, time, message });
  const smsBody = appointmentLines.join('\n');

  console.log('--- New Appointment Request ---');
  console.log(smsBody);
  console.log('------------------------------');

  const [smsResult, emailResult] = await Promise.allSettled([
    sendSmsNotification(smsBody),
    sendEmailNotification(appointmentLines)
  ]);

  if (smsResult.status === 'rejected') {
    console.error('Twilio SMS error:', smsResult.reason.message);
  }

  if (emailResult.status === 'rejected') {
    console.error('Appointment email error:', emailResult.reason.message);
  }

  res.json({
    success: true,
    message: "Thank you! We've received your appointment request and will contact you shortly."
  });
});

// Serve the main HTML page for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Emergency Dental server running on http://localhost:${PORT}`);
});
