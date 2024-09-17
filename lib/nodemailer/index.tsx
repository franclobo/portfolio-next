import nodemailer from "nodemailer";

// Configura el transporte para el servicio de correo
const transporter = nodemailer.createTransport({
  service: "hotmail", // Puedes cambiar el servicio según tus necesidades
  auth: {
    user: process.env.EMAIL_USER, // Asegúrate de tener esta variable de entorno configurada
    pass: process.env.EMAIL_PASSWORD, // Asegúrate de tener esta variable de entorno configurada
  },
});

// Define el tipo de contenido del correo
export interface EmailContent {
  subject: string;
  body: string;
}

// Genera el cuerpo del correo
export const generateEmailBody = (
  name: string,
  email: string,
  subject: string,
  message: string
): EmailContent => {
  return {
    subject: `New message from ${name} - ${subject}`,
    body: `
      <div>
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `,
  };
};

// Envía el correo electrónico
export const sendEmail = async (
  emailContent: EmailContent,
  recipient: string
) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Asegúrate de tener esta variable de entorno configurada
    to: recipient, // La dirección de correo electrónico a la que se enviará el mensaje
    subject: emailContent.subject,
    html: emailContent.body,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
