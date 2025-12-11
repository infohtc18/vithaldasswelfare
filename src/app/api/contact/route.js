import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, mobile, message } = await req.json();
    console.log(name, email, mobile, message);
    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `New Contact Message from ${name} Via Vithaldas Welfare Foundation Website`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email", error);
    return Response.json(
      { success: false, message: "Failed to send message." },
      { status: 500 }
    );
  }
}
