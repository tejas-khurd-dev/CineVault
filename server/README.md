# Server

Backend API for CineVault, built with Node.js, Express, and MongoDB.

## What it does

- Handles authentication and Google login
- Manages movies, casts, shows, and bookings
- Sends OTP and booking confirmation emails
- Verifies Razorpay payments

## Setup

```bash
cd server
npm install
```

Create a `.env` file in `server/`:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL=your_email@example.com
EMAIL_PASSWORD=your_email_password
GOOGLE_CLIENT_ID=your_google_client_id
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

## Scripts

- `npm run dev` starts the server with Nodemon
- `npm start` starts the server with Node

## Notes

- Booking cleanup now removes only expired unpaid bookings.
- `admin` is a separate app and was not modified for this task.
