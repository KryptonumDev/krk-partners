import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { regex } from '@/global/constants';
import { removeHtmlTags } from '@/utils/remove-html-tags';

type RequestProps = {
  message: string;
  email: string;
  legal: string;
};

const resend = new Resend(process.env.RESEND_API_TOKEN);

const emailData = {
  from: 'biuro@krk-partners.pl',
  to: 'm.rebiasz@krk-partners.pl',
};

export async function POST(request: Request) {
  const req = await request.json();
  const { message, email, legal }: RequestProps = req;

  if (!message || (!email && !regex.email.test(email)) || !legal) {
    return NextResponse.json({ success: false }, { status: 422 });
  }

  const body = `<p>Adres e-mail: <b>${email}</b></p>
  <p>${message.trim()}</p>
  <br />
  <br />
  <p><em>Wyrażono zgodnę na politykę prywatności</em></p>
  `;

  try {
    await resend.emails.send({
      from: emailData.from,
      reply_to: email,
      to: emailData.to,
      subject: `${email} wysłał wiadomość przez formularz kontaktowy`,
      html: body,
      text: removeHtmlTags(body),
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 422 });
  }
}
