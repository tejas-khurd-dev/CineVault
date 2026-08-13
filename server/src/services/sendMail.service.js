import nodemailer from "nodemailer";
import config from "../config/config.js";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: config.EMAIL,
        pass: config.EMAIL_PASSWORD,
    },
});

export const sendOTP = async (email, otp) => {
    try {
        await transporter.sendMail({
            from: `"CineVault" <${config.EMAIL}>`,
            to: email,
            subject: "Your CineVault verification code",
            text: `Your CineVault verification code is ${otp}. This code is valid for 5 minutes. If you did not request this code, please ignore this email.`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>CineVault Verification</title>
                </head>

                <body style="
                    margin:0;
                    padding:0;
                    background-color:#f4f4f5;
                    font-family:Arial,Helvetica,sans-serif;
                ">

                    <div style="
                        max-width:600px;
                        margin:40px auto;
                        background:#ffffff;
                        border-radius:12px;
                        overflow:hidden;
                        box-shadow:0 4px 15px rgba(0,0,0,0.08);
                    ">

                        <!-- Header -->
                        <div style="
                            background:#111827;
                            padding:28px 30px;
                            text-align:center;
                        ">
                            <h1 style="
                                margin:0;
                                color:#ef4444;
                                font-size:30px;
                                letter-spacing:1px;
                            ">
                                CineVault
                            </h1>

                            <p style="
                                margin:8px 0 0;
                                color:#d1d5db;
                                font-size:14px;
                            ">
                                Your gateway to unforgettable movies
                            </p>
                        </div>

                        <!-- Content -->
                        <div style="padding:35px 30px;">

                            <h2 style="
                                margin:0 0 15px;
                                color:#111827;
                                font-size:24px;
                            ">
                                Verify your account
                            </h2>

                            <p style="
                                color:#4b5563;
                                font-size:15px;
                                line-height:1.6;
                            ">
                                Hello,
                            </p>

                            <p style="
                                color:#4b5563;
                                font-size:15px;
                                line-height:1.6;
                            ">
                                Use the verification code below to complete your
                                CineVault account verification.
                            </p>

                            <!-- OTP -->
                            <div style="
                                margin:30px 0;
                                padding:20px;
                                background:#f9fafb;
                                border:1px solid #e5e7eb;
                                border-radius:10px;
                                text-align:center;
                            ">
                                <div style="
                                    color:#6b7280;
                                    font-size:13px;
                                    margin-bottom:10px;
                                ">
                                    Your verification code
                                </div>

                                <div style="
                                    color:#111827;
                                    font-size:34px;
                                    font-weight:bold;
                                    letter-spacing:10px;
                                ">
                                    ${otp}
                                </div>
                            </div>

                            <p style="
                                color:#4b5563;
                                font-size:14px;
                                line-height:1.6;
                            ">
                                This code will expire in
                                <strong>5 minutes</strong>.
                            </p>

                            <p style="
                                color:#6b7280;
                                font-size:13px;
                                line-height:1.6;
                            ">
                                If you did not request this verification code,
                                you can safely ignore this email.
                            </p>

                        </div>

                        <!-- Footer -->
                        <div style="
                            background:#f9fafb;
                            padding:22px 30px;
                            text-align:center;
                            border-top:1px solid #e5e7eb;
                        ">
                            <p style="
                                margin:0;
                                color:#6b7280;
                                font-size:12px;
                            ">
                                © ${new Date().getFullYear()} CineVault. All rights reserved.
                            </p>

                            <p style="
                                margin:8px 0 0;
                                color:#9ca3af;
                                font-size:11px;
                            ">
                                This is an automated email. Please do not reply.
                            </p>
                        </div>

                    </div>

                </body>
                </html>
            `,
        });

        console.log(`OTP email sent to ${email}`);
    } catch (error) {
        console.error("Error sending OTP email:", error);
        throw error;
    }
};


export const sendBookingConfirmation = async ({
    email,
    bookingId,
    movieTitle,
    seats,
    date,
    time,
    amount,
}) => {
    try {
        await transporter.sendMail({
            from: `"CineVault" <${config.EMAIL}>`,
            to: email,
            subject: `Booking Confirmed - ${movieTitle} | CineVault`,
            text: `
Your CineVault booking is confirmed.

Movie: ${movieTitle}
Date: ${date}
Time: ${time}
Seats: ${seats.join(", ")}
Amount: ₹${amount}
Booking ID: ${bookingId}

Please keep this email for your records.
            `,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Booking Confirmed - CineVault</title>
                </head>

                <body style="
                    margin:0;
                    padding:0;
                    background:#f4f4f5;
                    font-family:Arial,Helvetica,sans-serif;
                ">

                    <div style="
                        max-width:600px;
                        margin:40px auto;
                        background:#ffffff;
                        border-radius:14px;
                        overflow:hidden;
                        box-shadow:0 4px 15px rgba(0,0,0,0.08);
                    ">

                        <!-- Header -->
                        <div style="
                            background:#111827;
                            padding:30px;
                            text-align:center;
                        ">

                            <h1 style="
                                margin:0;
                                color:#ef4444;
                                font-size:30px;
                                letter-spacing:1px;
                            ">
                                CineVault
                            </h1>

                            <p style="
                                margin:8px 0 0;
                                color:#d1d5db;
                                font-size:14px;
                            ">
                                Your movie experience starts here
                            </p>

                        </div>


                        <!-- Success -->
                        <div style="
                            padding:35px 30px 20px;
                            text-align:center;
                        ">

                            <div style="
                                width:55px;
                                height:55px;
                                line-height:55px;
                                margin:0 auto 15px;
                                background:#dcfce7;
                                border-radius:50%;
                                color:#16a34a;
                                font-size:28px;
                                font-weight:bold;
                            ">
                                ✓
                            </div>

                            <h2 style="
                                margin:0;
                                color:#111827;
                                font-size:25px;
                            ">
                                Booking Confirmed!
                            </h2>

                            <p style="
                                color:#6b7280;
                                font-size:14px;
                                line-height:1.6;
                            ">
                                Your payment was successful and your movie
                                tickets have been confirmed.
                            </p>

                        </div>


                        <!-- Movie -->
                        <div style="padding:10px 30px 30px;">

                            <div style="
                                background:#f9fafb;
                                border:1px solid #e5e7eb;
                                border-radius:12px;
                                overflow:hidden;
                            ">

                                <div style="
                                    padding:20px;
                                    border-bottom:1px solid #e5e7eb;
                                ">

                                    <p style="
                                        margin:0 0 7px;
                                        color:#6b7280;
                                        font-size:12px;
                                        text-transform:uppercase;
                                        letter-spacing:1px;
                                    ">
                                        Movie
                                    </p>

                                    <h3 style="
                                        margin:0;
                                        color:#111827;
                                        font-size:21px;
                                    ">
                                        ${movieTitle}
                                    </h3>

                                </div>


                                <!-- Date & Time -->

                                <div style="
                                    display:flex;
                                    padding:20px;
                                    border-bottom:1px solid #e5e7eb;
                                ">

                                    <div style="width:50%;">

                                        <p style="
                                            margin:0 0 7px;
                                            color:#6b7280;
                                            font-size:12px;
                                            text-transform:uppercase;
                                        ">
                                            Date
                                        </p>

                                        <p style="
                                            margin:0;
                                            color:#111827;
                                            font-size:16px;
                                            font-weight:bold;
                                        ">
                                            ${date}
                                        </p>

                                    </div>

                                    <div style="width:50%;">

                                        <p style="
                                            margin:0 0 7px;
                                            color:#6b7280;
                                            font-size:12px;
                                            text-transform:uppercase;
                                        ">
                                            Time
                                        </p>

                                        <p style="
                                            margin:0;
                                            color:#111827;
                                            font-size:16px;
                                            font-weight:bold;
                                        ">
                                            ${time}
                                        </p>

                                    </div>

                                </div>


                                <!-- Seats -->

                                <div style="
                                    padding:20px;
                                    border-bottom:1px solid #e5e7eb;
                                ">

                                    <p style="
                                        margin:0 0 10px;
                                        color:#6b7280;
                                        font-size:12px;
                                        text-transform:uppercase;
                                    ">
                                        Seats
                                    </p>

                                    <div>
                                        ${seats
                                            .map(
                                                (seat) => `
                                                    <span style="
                                                        display:inline-block;
                                                        margin:0 6px 6px 0;
                                                        padding:8px 13px;
                                                        background:#111827;
                                                        color:#ffffff;
                                                        border-radius:6px;
                                                        font-size:13px;
                                                        font-weight:bold;
                                                    ">
                                                        ${seat}
                                                    </span>
                                                `
                                            )
                                            .join("")}
                                    </div>

                                </div>


                                <!-- Amount -->

                                <div style="
                                    padding:20px;
                                ">

                                    <div style="
                                        display:flex;
                                        justify-content:space-between;
                                    ">

                                        <span style="
                                            color:#6b7280;
                                            font-size:14px;
                                        ">
                                            Total Paid
                                        </span>

                                        <strong style="
                                            color:#111827;
                                            font-size:18px;
                                        ">
                                            ₹${amount}
                                        </strong>

                                    </div>

                                </div>

                            </div>


                            <!-- Booking ID -->

                            <div style="
                                margin-top:20px;
                                padding:15px;
                                background:#fff7ed;
                                border:1px solid #fed7aa;
                                border-radius:8px;
                            ">

                                <p style="
                                    margin:0 0 5px;
                                    color:#9a3412;
                                    font-size:12px;
                                ">
                                    Booking ID
                                </p>

                                <p style="
                                    margin:0;
                                    color:#111827;
                                    font-size:13px;
                                    font-weight:bold;
                                    word-break:break-all;
                                ">
                                    ${bookingId}
                                </p>

                            </div>


                            <p style="
                                margin:25px 0 0;
                                color:#6b7280;
                                font-size:13px;
                                line-height:1.6;
                                text-align:center;
                            ">
                                Please show your booking confirmation when
                                entering the cinema.
                            </p>

                        </div>


                        <!-- Footer -->

                        <div style="
                            background:#f9fafb;
                            padding:22px 30px;
                            text-align:center;
                            border-top:1px solid #e5e7eb;
                        ">

                            <p style="
                                margin:0;
                                color:#6b7280;
                                font-size:12px;
                            ">
                                © ${new Date().getFullYear()} CineVault.
                                All rights reserved.
                            </p>

                            <p style="
                                margin:8px 0 0;
                                color:#9ca3af;
                                font-size:11px;
                            ">
                                This is an automated confirmation email.
                            </p>

                        </div>

                    </div>

                </body>
                </html>
            `,
        });

        console.log(`Booking confirmation email sent to ${email}`);
    } catch (error) {
        console.error("Error sending booking confirmation email:", error);
        throw error;
    }
};