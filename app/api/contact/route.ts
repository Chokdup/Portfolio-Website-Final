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

    // Debug: Log credential info (masked for security)
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS
    console.log("[v0] EMAIL_USER:", emailUser)
    console.log("[v0] EMAIL_PASS length:", emailPass?.length, "chars")
    console.log("[v0] EMAIL_PASS first 4 chars:", emailPass?.substring(0, 4))

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

    // Get current date for the email
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

    // Email options with premium dark theme matching website design
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "chokdup15cr@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #050505; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #050505;">
            <tr>
              <td style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">
                  
                  <!-- Main Card -->
                  <tr>
                    <td style="background: linear-gradient(145deg, #0a0a0a 0%, #111111 100%); border-radius: 16px; border: 2px solid rgba(0, 102, 255, 0.4); box-shadow: 0 0 40px rgba(0, 102, 255, 0.15);">
                      
                      <!-- Header -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="padding: 32px 32px 24px 32px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                              <tr>
                                <td>
                                  <!-- Icon + Title -->
                                  <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                    <tr>
                                      <td style="background: rgba(0, 102, 255, 0.1); border: 1px solid rgba(0, 102, 255, 0.3); border-radius: 12px; padding: 12px; vertical-align: middle;">
                                        <img src="https://img.icons8.com/ios-filled/24/0066ff/new-post.png" alt="Message" width="24" height="24" style="display: block;">
                                      </td>
                                      <td style="padding-left: 16px; vertical-align: middle;">
                                        <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff;">New Message</h1>
                                        <p style="margin: 4px 0 0 0; font-size: 13px; color: #888888;">from your portfolio contact form</p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Content -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="padding: 32px;">
                            
                            <!-- Sender Details Card -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; margin-bottom: 24px;">
                              <tr>
                                <td style="padding: 24px;">
                                  <h2 style="margin: 0 0 20px 0; font-size: 11px; font-weight: 600; color: #0066ff; text-transform: uppercase; letter-spacing: 1.5px;">Sender Details</h2>
                                  
                                  <!-- Name -->
                                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 16px;">
                                    <tr>
                                      <td style="width: 80px; font-size: 13px; color: #666666; vertical-align: top;">Name</td>
                                      <td style="font-size: 15px; color: #ffffff; font-weight: 500;">${name}</td>
                                    </tr>
                                  </table>
                                  
                                  <!-- Email -->
                                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 16px;">
                                    <tr>
                                      <td style="width: 80px; font-size: 13px; color: #666666; vertical-align: top;">Email</td>
                                      <td style="font-size: 15px;">
                                        <a href="mailto:${email}" style="color: #0066ff; text-decoration: none; font-weight: 500;">${email}</a>
                                      </td>
                                    </tr>
                                  </table>
                                  
                                  <!-- Subject -->
                                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                      <td style="width: 80px; font-size: 13px; color: #666666; vertical-align: top;">Subject</td>
                                      <td style="font-size: 15px; color: #ffffff; font-weight: 500;">${subject}</td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                            
                            <!-- Message Card -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px;">
                              <tr>
                                <td style="padding: 24px;">
                                  <h2 style="margin: 0 0 16px 0; font-size: 11px; font-weight: 600; color: #0066ff; text-transform: uppercase; letter-spacing: 1.5px;">Message</h2>
                                  <p style="margin: 0; font-size: 15px; color: #e0e0e0; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                                </td>
                              </tr>
                            </table>
                            
                            <!-- Reply Button -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 24px;">
                              <tr>
                                <td align="center">
                                  <a href="mailto:${email}?subject=Re: ${subject}" style="display: inline-block; background: linear-gradient(135deg, #0066ff 0%, #0052cc 100%); color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 14px 32px; border-radius: 10px; box-shadow: 0 4px 20px rgba(0, 102, 255, 0.3);">Reply to ${name}</a>
                                </td>
                              </tr>
                            </table>
                            
                          </td>
                        </tr>
                      </table>
                      
                      <!-- Footer -->
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="padding: 24px 32px; border-top: 1px solid rgba(255, 255, 255, 0.08); text-align: center;">
                            <p style="margin: 0 0 8px 0; font-size: 12px; color: #666666;">
                              Received on ${currentDate}
                            </p>
                            <p style="margin: 0; font-size: 11px; color: #444444;">
                              Sent from your portfolio website contact form
                            </p>
                          </td>
                        </tr>
                      </table>
                      
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
