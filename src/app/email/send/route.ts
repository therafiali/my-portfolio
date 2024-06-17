import { Resend } from "resend";
import { NextResponse } from "next/server";

// // export async function POST({
// //   useremail,
// //   phone,
// //   username,
// //   message,
// // }: {
// //   useremail: string;
// //   phone: string | null;
// //   username: string | null;
// //   message: string | null;
// // }) {
// //   const resend = new Resend(process.env.emailkey);
// //   console.log(useremail,"useremail")
// //   console.log(phone,"phone")
// //   console.log(username,"username")
// //   console.log(message,"message")
// //   try {

// //     const { data } = await resend.emails.send({
// //       from: 'onboarding@resend.dev',
// //       to: "rafialiofficial810@gmail.com",
// //       subject: `Received message from portfolio web use this number ${phone} `,
// //       html: `<p>email recieved from ${username + useremail}, message is : ${message}</p>`,
// //     });
// //     return NextResponse.json({ hello: "world" });
// //   } catch (error) {
// //     return NextResponse.json({ error });
// //   }
// // }

// // pages/api/send-email.js

// import { Resend } from "resend";
// import { NextResponse } from "next/server";

// export  async function POST(req:any, res:any) {
//   try {
//     const { useremail, phone, username, message } = req.body;

//     // Initialize the Resend client
//     const resend = new Resend(process.env.emailkey);

//     // Send the email
//     const { data } = await resend.emails.send({
//       from: 'onboarding@resend.dev',
//       to: 'rafialiofficial810@gmail.com', // Replace with your recipient email
//       subject: `Received message from portfolio web (Phone: ${phone})`,
//       html: `<p>Email received from ${username} (${useremail}). Message: ${message}</p>`,
//     });

//     // Return a success response
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     // Handle any errors
//     return NextResponse.json({ error: error });
//   }
// }

export async function POST(req, res) {
  const resend = new Resend(process.env.emailkey);
  const { useremail, phone, username, message } = await req.json();
  console.log(phone);
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
