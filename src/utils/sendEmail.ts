'use server';
import nodemailer from 'nodemailer';
import { FormikValues } from 'formik';

const sendEmail = async (to: string, formData: FormikValues) => {
  const { name, email, phone } = formData;
  const transporter = nodemailer.createTransport({
    host: 'smtp.ukr.net',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_UKR_NET_EMAIL_USER,
      pass: process.env.UKR_NET_EMAIL_PASSWORD,
    },
  });

  const htmlContent = `
    <h2>Новая заявка с сайта</h2>
    <p><strong>Имя:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Телефон:</strong> ${phone}</p>
  `;

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_UKR_NET_EMAIL_USER,
    to,
    subject: 'Заявка с сайта на аренду/индивидуальный пошив',
    html: htmlContent,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default sendEmail;
