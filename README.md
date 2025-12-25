# Student Website Solutions

A professional website business targeting final-year diploma students, offering affordable and responsive websites for projects, portfolios, and academic presentations.

## Features

- Mobile-responsive design
- Multiple website packages tailored for students
- Easy ordering process
- Contact form with validation
- Modern UI/UX design

## Project Structure

```
student-website-business/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
└── README.md
```

## How to Use

### Frontend Only (Basic Version)
1. Open `index.html` in any modern web browser
2. Navigate through the website to view services and pricing
3. Use the contact form (will show a demo message without backend)

### Full Version with Notifications
1. Install Node.js on your system
2. Navigate to the `server` directory
3. Run `npm install` to install dependencies
4. Create a `.env` file with your configuration (see below)
5. Run `node server.js` to start the server
6. Visit `http://localhost:3000` in your browser
7. Use the contact form to test notifications

### Environment Configuration
Create a `.env` file in the `server` directory with the following variables:

```env
# Email configuration
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-gmail-app-password
NOTIFICATION_EMAIL=your-notification-email@gmail.com

# Twilio SMS configuration (optional)
TWILIO_ACCOUNT_SID=your-twilio-account-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
TWILIO_PHONE_NUMBER=your-twilio-phone-number
YOUR_PHONE_NUMBER=your-personal-phone-number-to-receive-sms

# Server configuration
PORT=3000
```

> **Note:** For the email functionality, you'll need to use a Gmail account with App Passwords enabled. For SMS notifications, you'll need a Twilio account.

## Technologies Used

- HTML5
- CSS3 (with responsive design)
- JavaScript (for mobile menu and form validation)
- Node.js (backend server)
- Express.js (web framework)
- Nodemailer (email notifications)
- Twilio (SMS notifications)

## Browser Compatibility

- Chrome
- Firefox
- Safari
- Edge

## Responsive Design

The website is fully responsive and works on:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)