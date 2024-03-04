import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { regex } from '@/global/constants';
import { calculateLoan } from '@/utils/calculate-loan/calculate-loan';
import { removeHtmlTags } from '@/utils/remove-html-tags';
import { ContactPersonType } from '@/global/types';

const resend = new Resend(process.env.RESEND_API_TOKEN);

type LoanCalculationResult = {
  comission: string;
  totalInterest: string;
  earlyPaymentFee: string;
  total: string;
};

const emailData = {
  from: 'biuro@krk-partners.pl',
};

const airtableData = {
  baseId: 'appAPnYmJCKsCs7vP',
  tableId: 'tblmNtpqkDWAxFhSn',
};

type RequestProps = {
  loanAmount: string;
  fundingPeriod: number;
  fullName: string;
  email: string;
  tel: string;
  nip: string;
  companyType: string;
  landRegister_CourtId: string;
  landRegister_RegisterNumber: string;
  landRegister_CheckDigit: string;
  legal1: boolean;
  legal2: boolean;
  legal3: boolean;
  legal4: boolean;
  contactPerson: ContactPersonType;
};

const currentHour = new Date().getHours();
const greeting =
  (currentHour >= 18 && currentHour <= 23) || (currentHour >= 0 && currentHour < 3) ? 'Dobry wieczór' : 'Dzień dobry';

const emailBody = (
  fullName: string,
  loanAmount: string,
  fundingPeriod: number,
  tel: string,
  nip: string,
  landRegister: string,
  companyType: string,
  calculatedLoan: {
    comission: string;
    totalInterest: string;
    earlyPaymentFee: string;
    total: string;
  },
  contactPerson: ContactPersonType
) => `
  ${greeting}, ${fullName},
  <p>Dziękujemy za wysłanie zapytania w sprawie pożyczki pod zastaw nieruchomości.</p>
  <br />
  <p><b>Wypełnione dane:</b></p>
  <p>Kwota pożyczki: <b>${loanAmount}</b> zł</p>
  <p>Okres finansowania (w miesiącach): <b>${fundingPeriod}</b></p>
  <p>Numer telefonu: <b>${tel}</b></p>
  <p>NIP: <b>${nip}</b></p>
  <p>Numer księgi wieczystej: <b>${landRegister}</b></p>
  <p>Rodzaj działalności: <b>${companyType}</b></p>
  <br />
  <p><b><em>Wstępna propozycja:</em></b></p>
  <p>Wstępna propozycja wyceny dla Ciebie to <b>${calculatedLoan.total}</b> zł</p>
  <p>Prowizja za udzielenie pożyczki: <b>${calculatedLoan.comission}</b> zł (12.5% rocznie)</p>
  <p>Odsetki w okresie finansowania: <b>${calculatedLoan.totalInterest}</b> zł</p>
  ${
    calculatedLoan.earlyPaymentFee &&
    `<p>Opłata za wcześniejszą spłatę: <b>${calculatedLoan.earlyPaymentFee}</b> zł</p>`
  }
  <br />
  <p>W ciągu następnego dnia roboczego skontaktuje się z Tobą aby porozmawiać o szczegółach propozycji oraz omówić dalsze kroki w procesie pożyczkowym.</p>
  <p>Aby uzyskać dodatkowe informację skontaktuj się z nami telefonicznie pod numerem <a href='tel:${
    contactPerson.tel
  }'>${contactPerson.tel}</a> Pn-Pt w godzinach 08:00 – 16:00.</p>
  <br />
  <p>Pozdrawiam,</p>
  <p>${contactPerson.name}</p>
  <p>Zespół KRK Partners</p>
  <br />
  <p><a href='mailto:biuro@krk-partners.pl'>biuro@krk-partners.pl</a></p>
  <p>tel <a href='tel:+48 12 307 44 55'>+48 12 307 44 55</a></p>
  <p><a href='https://krk-partners.pl/'>krk-partners.pl</a></p>
`;

export async function POST(request: Request) {
  const {
    loanAmount,
    fundingPeriod,
    fullName,
    email,
    tel,
    nip,
    companyType,
    landRegister_CourtId,
    landRegister_RegisterNumber,
    landRegister_CheckDigit,
    legal1,
    legal2,
    legal3,
    legal4,
    contactPerson,
  }: RequestProps = await request.json();

  const isValidate =
    regex.email.test(email) ||
    regex.registerNumber.test(landRegister_RegisterNumber) ||
    regex.tel.test(tel) ||
    legal1 ||
    legal2 ||
    legal3 ||
    legal4;

  const landRegister = `${landRegister_CourtId} / ${landRegister_RegisterNumber} / ${landRegister_CheckDigit}`;

  if (!isValidate) return NextResponse.json({ success: false }, { status: 422 });

  const calculatedLoan = await calculateLoan(fundingPeriod, loanAmount, companyType);

  const airtableBody = {
    records: [
      {
        fields: {
          'Imię i nazwisko': fullName,
          'Kwota pożyczki': loanAmount,
          'Okres finansowania (miesiące)': fundingPeriod,
          'Adres e-mail': email,
          Telefon: tel,
          NIP: nip,
          'Numer księgi wieczystej': landRegister,
          'Rodzaj działalności': companyType,
        },
      },
    ],
  };

  const renderedEmailBody = emailBody(
    fullName,
    loanAmount,
    fundingPeriod,
    tel,
    nip,
    landRegister,
    companyType,
    calculatedLoan as LoanCalculationResult,
    contactPerson
  );

  try {
    const response = await fetch(`https://api.airtable.com/v0/${airtableData.baseId}/${airtableData.tableId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(airtableBody),
    });
    if (!response.ok) {
      return NextResponse.json({ success: false, message: 'Connectivity to API failed' }, { status: 422 });
    }
    const responseData = await response.json();
    if (!responseData.records) {
      return NextResponse.json({ success: false, message: 'Unable to create new record' }, { status: 422 });
    }

    try {
      await resend.emails.send({
        from: emailData.from,
        to: email,
        subject: `Twój wniosek został pomyślnie przesłany | KRK Partners`,
        html: renderedEmailBody,
        text: removeHtmlTags(renderedEmailBody),
      });
      return NextResponse.json({ success: true, calculation: calculatedLoan }, { status: 200 });
    } catch {
      return NextResponse.json({ success: false, message: 'An error occured while sending email' }, { status: 422 });
    }
  } catch {
    return NextResponse.json({ success: false, message: 'An unexpected error occurred' }, { status: 422 });
  }
}
