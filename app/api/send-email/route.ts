//routes.ts
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP_HOST,
      port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
      secure: process.env.NEXT_PUBLIC_SMTP_PORT === '465',
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS,
      },
    });

    // Email to business (receiver)
    const receiverMailOptions = {
      from: `"To Communi Tech" <${process.env.NEXT_PUBLIC_SMTP_USER}>`,
      to: process.env.NEXT_PUBLIC_TO_EMAIL,
      subject: `New Message from ${name}`,
      html: buildReceiverEmail(name, email, message),
    };

    // Confirmation email to sender
    const senderMailOptions = {
      from: `"${process.env.NEXT_PUBLIC_COMPANY_NAME || 'Communi Tech Smart Solutions'}" <${process.env.NEXT_PUBLIC_SMTP_USER}>`,
      to: email,
      subject: `Thanks for contacting us, ${name}!`,
      html: buildSenderEmail(name, process.env.NEXT_PUBLIC_COMPANY_NAME || 'Communi Tech Smart Solutions'),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(receiverMailOptions),
      transporter.sendMail(senderMailOptions),
    ]);

    return new Response(JSON.stringify({ message: 'Message sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500 }
    );
  }
}

function buildReceiverEmail(name: string, email: string, message: string) {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f7fa; border-radius: 8px;">
      <div style="background: linear-gradient(135deg, #3b82f6, #6366f1); padding: 30px; border-radius: 8px 8px 0 0; color: white; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
      </div>
      
      <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
        <div style="margin-bottom: 20px;">
          <h2 style="color: #3b82f6; margin-top: 0;">You've received a new message</h2>
          <p style="color: #4b5563;">From: <strong>${name}</strong> (${email})</p>
        </div>
        
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #3b82f6;">
          <p style="margin: 0; color: #1f2937; white-space: pre-line;">${message}</p>
        </div>
        
        <div style="margin-top: 30px; text-align: center;">
          <a href="mailto:${email}" style="display: inline-block; background-color: #3b82f6; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 500;">Reply to ${name}</a>
        </div>
      </div>
      
      <div style="margin-top: 20px; text-align: center; font-size: 12px; color: #6b7280;">
        <p>This message was sent via your website contact form.</p>
      </div>
    </div>
  `;
}

function buildSenderEmail(name: string, companyName: string) {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f7fa; border-radius: 8px;">
      <div style="background: linear-gradient(135deg, #10b981, #34d399); padding: 30px; border-radius: 8px 8px 0 0; color: white; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">Thank you for contacting us!</h1>
      </div>
      
      <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
        <div style="margin-bottom: 20px;">
          <h2 style="color: #10b981; margin-top: 0;">Hi ${name},</h2>
          <p style="color: #4b5563;">We've received your message and will get back to you as soon as possible.</p>
        </div>
        
        <div style="background-color: #f0fdf4; padding: 15px; border-radius: 6px; border-left: 4px solid #10b981; margin-bottom: 20px;">
          <h3 style="margin-top: 0; color: #065f46;">What to expect next:</h3>
          <ul style="padding-left: 20px; margin-bottom: 0; color: #1f2937;">
            <li>Our team will review your message</li>
            <li>We typically respond within 1-2 business days</li>
            <li>You'll receive a personalized response</li>
          </ul>
        </div>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; color: #4b5563;">
          <p>If you have any urgent questions, please don't hesitate to reply to this email.</p>
          <p style="font-style: italic; margin-bottom: 0;">Best regards,<br>The ${companyName} Team</p>
        </div>
      </div>
      
      <div style="margin-top: 20px; text-align: center; font-size: 12px; color: #6b7280;">
        <p>This is an automated message. Please do not reply directly to this email.</p>
      </div>
    </div>
  `;
}