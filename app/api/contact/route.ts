import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "chokdup15cr@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #ffffff; border-radius: 12px;">
          <div style="border-bottom: 2px solid #0066ff; padding-bottom: 20px; margin-bottom: 20px;">
            <h1 style="color: #0066ff; margin: 0; font-size: 24px;">New Message from Portfolio</h1>
          </div>
          
          <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #0066ff; margin-top: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Sender Details</h2>
            <p style="margin: 8px 0;"><strong style="color: #888;">Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong style="color: #888;">Email:</strong> <a href="mailto:${email}" style="color: #0066ff;">${email}</a></p>
            <p style="margin: 8px 0;"><strong style="color: #888;">Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px;">
            <h2 style="color: #0066ff; margin-top: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message</h2>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #333; text-align: center;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              This message was sent from your portfolio website contact form.
            </p>
          </div>
        </div>
      `,
      text: `
New Portfolio Contact Message

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from your portfolio website contact form.
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }
}
