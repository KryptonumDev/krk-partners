import { regex } from '@/global/constants';
import { calculateLoan } from '@/utils/calculate-loan/calculate-loan';
import { NextResponse } from 'next/server';

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
  landRegiser_CourtId: string;
  landRegister_RegisterNumber: string;
  legal1: boolean;
  legal2: boolean;
  legal3: boolean;
  legal4: boolean;
};

export async function POST(request: Request) {
  const {
    loanAmount,
    fundingPeriod,
    fullName,
    email,
    tel,
    nip,
    companyType,
    landRegiser_CourtId,
    landRegister_RegisterNumber,
    legal1,
    legal2,
    legal3,
    legal4,
  }: RequestProps = await request.json();

  const isValidate =
    regex.email.test(email) ||
    regex.registerNumber.test(landRegister_RegisterNumber) ||
    regex.tel.test(tel) ||
    legal1 ||
    legal2 ||
    legal3 ||
    legal4;

  if (!isValidate) return NextResponse.json({ success: false }, { status: 422 });

  const calculatedLoan = await calculateLoan(fundingPeriod, loanAmount, companyType);

  const body = {
    records: [
      {
        fields: {
          'Imię i nazwisko': fullName,
          'Kwota pożyczki': loanAmount,
          'Okres finansowania (miesiące)': fundingPeriod,
          'Adres e-mail': email,
          Telefon: tel,
          NIP: nip,
          'Numer księgi wieczystej': landRegiser_CourtId,
          'Rodzaj działalności': companyType,
        },
      },
    ],
  };

  try {
    const response = await fetch(`https://api.airtable.com/v0/${airtableData.baseId}/${airtableData.tableId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      return NextResponse.json({ success: false, message: 'Connectivity to API failed' }, { status: 422 });
    }
    const responseData = await response.json();
    if (!responseData.records) {
      return NextResponse.json({ success: false, message: 'Unable to create new record' }, { status: 422 });
    }
    return NextResponse.json({ success: true, calculation: calculatedLoan }, { status: 200 });
  } catch {
    return NextResponse.json({ success: false, message: 'An unexpected error occurred' }, { status: 422 });
  }
}
