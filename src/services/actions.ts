'use server';

import { sendEmail } from '@/utils/email';
import { z } from 'zod';

const ContactForm = z.object({
  fullName: z.string().min(1, {
    message: 'Please enter your first name.'
  }),
  companyName: z.string().min(1, {
    message: 'Please enter your company name.'
  }),
  email: z.string().min(1, {
    message: 'Please enter your email.'
  }),
  phone: z.number().min(1, {
    message: 'Please enter your phone number.'
  }),
  message: z.string().optional()
});

export async function sendContactForm(formData: FormData) {
  // Validate form using Zod
  const validatedFields = ContactForm.safeParse({
    fullName: formData.get('fullName'),
    companyName: formData.get('companyName'),
    phone: Number(formData.get('phone')),
    email: formData.get('email'),
    message: formData.get('message')
  });
  console.log(validatedFields);
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Send Message.'
    };
  }

  // Prepare data for insertion into the database
  const { fullName, phone, email, message, companyName } = validatedFields.data;
  const htmlMessage = `
<html>
<head>
  <style>
    .body {
      font-family: Montserrat, sans-serif;
      margin: 0;
      padding: 0;
      border-radius: 35px;
      border: 1px solid #495B6E;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }

    .header {
      padding: 20px;
      text-align: center;
      border-bottom: 1px solid #495B6E;
    }
    
    .header h1 {
      margin: 0;
      padding: 0;
      font-size: 3rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    
    .content {
      padding: 20px;
    }
    
    .footer {
      padding: 20px;
      text-align: center;
      font-size: 12px;
      text-transform: uppercase;
      border-top: 1px solid #495B6E;
    }
  </style>
</head>
<body>
<div class="body">
  <div class="container">
    <div class="header">
      <h1>Contact Form</h1>
    </div>
    <div class="content">
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    </div>
    <div class="footer">
      <p>Copyright 2024 © GoGreen. Canadian Web Design by Choice OMG full stack development</p>
    </div>
  </div>
</div>
</body>
</html>

  `;
  try {
    await sendEmail({
      to: process.env.EMAIL_TO || 'illia@choice.marketing',
      // to: email,
      subject: `[Contact Form]: Message from ${fullName}`,
      html: htmlMessage
    });
    return {
      errors: null,
      message: 'Message sent successfully.'
    };
  } catch (error) {
    console.error(error);
    return {
      errors: error,
      message: 'Failed to send message.'
    };
  }
}
