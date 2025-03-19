// import type { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   const { name, email, message } = req.body;

//   // Configure Nodemailer
//   const transporter = nodemailer.createTransport({
//     service: "gmail", // Use your email service (e.g., Gmail, SendGrid)
//     auth: {
//       user: process.env.EMAIL_USER, // Your email address
//       pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER, // Sender email
//     to: process.env.EMAIL_USER, // Receiver email (can be the same as sender)
//     subject: `New Message from ${name} (${email})`,
//     text: message,
//     html: `<p><strong>Name:</strong> ${name}</p>
//            <p><strong>Email:</strong> ${email}</p>
//            <p><strong>Message:</strong> ${message}</p>`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Failed to send email" });
//   }
// }