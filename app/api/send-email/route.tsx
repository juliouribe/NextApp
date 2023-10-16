import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  resend.emails.send({
    // From have to be a registered DNS domain that you own.
    from: '...',
    to: 'uribejulioc@gmail.com',
    subject: 'something',
    react: <WelcomeTemplate name="Test" />
  })

  return NextResponse.json({});
}
