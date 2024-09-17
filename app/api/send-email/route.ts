import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/nodemailer";
import { EmailFormData } from "@/types";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(request: Request) {
  try {
    const data: EmailFormData = await request.json();

    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    const emailContent = {
      subject: `Message from ${name}: ${subject}`,
      body: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    };

    await sendEmail(emailContent, String(process.env.EMAIL_TO));

    return NextResponse.json({ message: "Email sent successfully." });
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Si el error es una instancia de Error, podemos acceder a sus propiedades
      console.error("Error sending email:", error.message);
      return NextResponse.json(
        { message: `Failed to send email: ${error.message}` },
        { status: 500 }
      );
    } else {
      // Manejo de casos donde el error no es una instancia de Error
      console.error("Unknown error sending email");
      return NextResponse.json(
        { message: "Failed to send email due to unknown error" },
        { status: 500 }
      );
    }
  }
}
