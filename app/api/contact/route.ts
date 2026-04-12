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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      )
    }

    // Check if environment variables are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email configuration missing: EMAIL_USER or EMAIL_PASS not set")
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the administrator." },
        { status: 500 }
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

    // Verify transporter configuration
    try {
      await transporter.verify()
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError)
      return NextResponse.json(
        { error: "Email service connection failed. Please try again later." },
        { status: 500 }
      )
    }

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
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        return NextResponse.json(
          { error: "Email authentication failed. Please check credentials." },
          { status: 500 }
        )
      }
      if (error.message.includes("ECONNREFUSED") || error.message.includes("ETIMEDOUT")) {
        return NextResponse.json(
          { error: "Could not connect to email server. Please try again later." },
          { status: 500 }
        )
      }
    }
    
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }
}
