import { domain, regex } from '@/global/constants';
import { calculateLoan } from '@/utils/calculate-loan';
import { NextResponse } from 'next/server';

const headers = {
  'Access-Control-Allow-Origin': domain,
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'POST',
};

export async function POST(request: Request) {
  const {
    value,
    name,
    checkDigit,
    companyType,
    courtId,
    email,
    legal1,
    legal2,
    legal3,
    legal4,
    legal_all,
    nip,
    registerNumber,
    tel,
  } = (await request.json()) as {
    value: string;
    name: string;
    checkDigit: string;
    companyType: string;
    courtId: string;
    email: string;
    legal1: string;
    legal2: string;
    legal3: string;
    legal4: string;
    legal_all: string;
    nip: string;
    registerNumber: string;
    tel: string;
  };

  if (
    !regex.email.test(email) ||
    !regex.checkDigit.test(checkDigit) ||
    !regex.registerNumber.test(registerNumber) ||
    !regex.tel.test(tel) ||
    !legal1 ||
    !legal2 ||
    !legal3 ||
    !legal4
  ) {
    return NextResponse.json({ success: false }, { status: 422, headers });
  }

  const months = '6';

  const calculatedLoan = calculateLoan(months, value, companyType);

  return NextResponse.json({ success: true, calculatedLoan: calculatedLoan }, { status: 200});
}
