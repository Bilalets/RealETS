// utils/mailer.ts

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'eagletestingservicepvt@gmail.com',
    pass: 'ycofdrdkoebuivkx',
  },
});

export const sendPasswordResetEmail = async (to: string, token: string) => {
  const resetUrl = `https://real-ets.vercel.app/Resetpassword?token=${token}`;
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: 'Password Reset',
    html: `<p>Click <a href="${resetUrl}">here</a> to reset your password.</p>`,
  });
};
