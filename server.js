const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createTransport } = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the parent directory
app.use(express.static('../'));

// Create transporter for email notifications only if credentials are provided
let transporter = null;
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  
  // Verify the transporter configuration
  transporter.verify((error, success) => {
    if (error) {
      console.log('Email configuration error:', error.message);
      transporter = null;
    } else {
      console.log('Email server is ready to send messages');
    }
  });
} else {
  console.log('Email not configured. Please set EMAIL_USER and EMAIL_PASS in your .env file.');
}

// Check if Twilio is configured
const isTwilioConfigured = process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && 
                          process.env.TWILIO_PHONE_NUMBER && process.env.YOUR_PHONE_NUMBER;

if (isTwilioConfigured) {
  console.log('Twilio is configured. SMS notifications will be enabled.');
} else {
  console.log('Twilio not configured. SMS notifications will be skipped. See README for setup instructions.');
}

// Route to handle form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, course, project, message, deadline } = req.body;

    // Validate required fields
    if (!name || !email || !project || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    // Send email notification if transporter is configured
    if (transporter) {
      try {
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER, // Send to notification email or same as sender
          subject: `New Website Order from Student: ${name}`,
          html: `
            <h2>New Website Order Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Course:</strong> ${course || 'Not specified'}</p>
            <p><strong>Project Type:</strong> ${project}</p>
            <p><strong>Expected Deadline:</strong> ${deadline || 'Not specified'}</p>
            <p><strong>Project Details:</strong></p>
            <p>${message}</p>
            <hr>
            <p>This is an automated message from Student Website Solutions.</p>
          `
        };

        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Error sending email notification:', emailError);
        // Continue processing even if email fails
      }
    }

    // Send SMS notification to business owner if Twilio is configured
    if (isTwilioConfigured) {
      try {
        // Dynamically import Twilio only when needed
        const twilio = require('twilio');
        const client = twilio(
          process.env.TWILIO_ACCOUNT_SID,
          process.env.TWILIO_AUTH_TOKEN
        );
        
        const smsContent = `New website order from: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Project: ${project}
Details: ${message.substring(0, 100)}...`;
        
        await client.messages.create({
          body: smsContent,
          from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio number
          to: process.env.YOUR_PHONE_NUMBER    // Your personal phone number
        });
      } catch (smsError) {
        console.error('Error sending SMS notification:', smsError);
        // Don't fail the entire request if SMS fails
      }
    } else {
      console.log('SMS notification skipped. Twilio not configured properly.');
    }

    // Respond with success
    res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully! We will contact you soon.' 
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error processing your request. Please try again.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Serve the main website
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/../index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the website`);
});