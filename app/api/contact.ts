import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 1. Only allow POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    // 2. Get form data from the request body
    const { name, email, message } = req.body;

    // 3. Validate that all required fields are present
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    // 4. Get your secret credentials from environment variables
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      console.error("Email credentials not set in .env.local file.");
      return res.status(500).json({ error: "Server is not configured to send emails." });
    }

    // 5. Create the Nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: user,
        pass: pass, // Use your Google App Password here
      },
    });

    // 6. Define the email content and format
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "jaichauhan009@gmail.com",
      subject: `New Message from ${name} via Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p>Hi Jai,</p>
          <blockquote style="border-left: 4px solid #ccc; padding-left: 1rem; margin: 1rem 0;">
            <p>${message.replace(/\n/g, "<br>")}</p>
          </blockquote>
          <p>With regards,</p>
          <p><strong>${name}</strong></p>
        </div>
      `,
    };

    // 7. Send the email and return a success response
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Message sent successfully!" });

  } catch (error) {
    // 8. If anything goes wrong, log the error and return a server error response
    console.error("Nodemailer failed to send email:", error);
    return res.status(500).json({ error: "Failed to send the email." });
  }
}
