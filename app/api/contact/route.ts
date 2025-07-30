import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      projectType,
      timeline,
      budget,
      techStack,
      message,
      goals,
    } = body;

    // Validate required fields
    if (
      !name ||
      !email ||
      !projectType ||
      !timeline ||
      !budget ||
      !message ||
      !goals
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const emailContent = `
New Contact Form Submission from Atomix Forge Website

Contact Information:
- Name: ${name}
- Email: ${email}
- Company: ${company || "Not provided"}

Project Details:
- Project Type: ${projectType}
- Timeline: ${timeline}
- Budget Range: ${budget}
- Current Tech Stack: ${techStack || "Not provided"}

Project Description:
${message}

Project Goals/Requirements:
${goals}

---
This message was sent from the Atomix Forge contact form.
    `.trim();

    // Send email
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New Contact Form Submission - ${name}`,
      text: emailContent,
      replyTo: email,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
