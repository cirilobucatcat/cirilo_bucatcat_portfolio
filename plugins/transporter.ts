const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
    host: process.env.NEXT_SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.NEXT_SMTP_USER,
        pass: process.env.NEXT_SMTP_PASS,
    },
});