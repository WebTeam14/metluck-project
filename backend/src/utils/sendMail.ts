import nodemailer from "nodemailer";

export const sendMail = async (subject: string, html: string) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: "info@metluckgroup.com.sa",
    subject,
    html
  });
};