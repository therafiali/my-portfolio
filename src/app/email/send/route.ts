import { Resend } from "resend";
import { NextResponse } from "next/server";


export async function POST(req:Request, res:Response) {
  const resend = new Resend(process.env.emailkey);
  const { useremail, phone, username, message } = await req.json();
  try {
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "rafialiofficial810@gmail.com",
      subject: `Received message from Portfolio Website -Therafiali`,
      html: `<p>Welcome Rafi,<br/>
      The Username name is :${username},<br/>
      The User Email is :${useremail},<br/>
      The User Phone is :${phone},<br/>
      The User Message is :${message},<br/>
      </p>`,
    });
    return NextResponse.json({ success: "Email Send Seccesfully" });
  } catch (error) {
    return NextResponse.json({ error: "Email Failed to send" });
  }
}
