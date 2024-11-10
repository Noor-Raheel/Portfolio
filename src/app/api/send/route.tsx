import { NextResponse } from "next/server";
import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next";

// Resend object initialize kar rahe hain
const resend = new Resend(process.env.RESEND_API_KEY);

// Fallback ke liye fromEmail variable ko assign karna
const fromEmail = process.env.FROM_EMAIL || "default@example.com";  // Agar FROM_EMAIL environment variable set nahi hai, to default email use hoga

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // Request se email, subject aur message le rahe hain
  const { email, subject, message } = req.body;
  console.log(email, subject, message);

  try {
    const data = await resend.emails.send({
      // Ab yahan pe fromEmail use karenge, jo ki ya to environment variable se liya gaya hoga, ya fallback value se
      from: fromEmail,
      to: [fromEmail, email],  // Yahan email bhejne wale aur receive karne wale dono hote hain
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
