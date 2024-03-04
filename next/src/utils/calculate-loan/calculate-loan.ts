import { formatNumberToSpaces } from '../format-number-to-spaces';
import { getCalculationData } from './get-calculation-data';

export async function calculateLoan(fundingPeriod: number, amount: string, companyType: string) {
  const {
    loanCalculations: { JDGSmall, JDGMedium, JDGHigh, SPHSmall, SPHMedium, SPHHigh, earlyPaymentFeeMultiplier },
  } = await getCalculationData();

  const parsedAmount = parseInt(amount.replace(/\s/g, ''));
  if (companyType == 'Spółka z.o.o') {
    return calculateJDG(parsedAmount, fundingPeriod);
  } else {
    return calculateSPH(parsedAmount, fundingPeriod);
  }

  function calculateJDG(amount: number, months: number) {
    if (amount < JDGSmall.to && amount >= JDGSmall.from) {
      return calculateLowJDG(amount, months);
    } else if (amount < JDGMedium.to && amount >= JDGMedium.from) {
      return calculateMediumJDG(amount, months);
    } else if (amount <= JDGHigh.to && amount >= JDGHigh.from) {
      return calculateHighJDG(amount, months);
    }
  }

  function calculateSPH(amount: number, months: number) {
    if (amount < SPHSmall.to && amount >= SPHSmall.from) {
      return calculateLowSPH(amount, months);
    } else if (amount < SPHMedium.to && amount >= SPHMedium.from) {
      return calculateMediumSPH(amount, months);
    } else if (amount <= SPHHigh.to && amount >= SPHHigh.from) {
      return calculateHighSPH(amount, months);
    }
  }

  function calculateLowJDG(amount: number, months: number) {
    return performJDGCalculations(
      JDGSmall.comission,
      JDGSmall.interest,
      JDGSmall.additionalCalculationsMultiplier,
      amount,
      months
    );
  }

  function calculateMediumJDG(amount: number, months: number) {
    return performJDGCalculations(
      JDGMedium.comission,
      JDGMedium.interest,
      JDGMedium.additionalCalculationsMultiplier,
      amount,
      months
    );
  }

  function calculateHighJDG(amount: number, months: number) {
    return performJDGCalculations(
      JDGHigh.comission,
      JDGHigh.interest,
      JDGHigh.additionalCalculationsMultiplier,
      amount,
      months
    );
  }

  function calculateLowSPH(amount: number, months: number) {
    return performSPHCalculations(SPHSmall.comission, SPHSmall.interest, amount, months);
  }

  function calculateMediumSPH(amount: number, months: number) {
    return performSPHCalculations(SPHMedium.comission, SPHMedium.interest, amount, months);
  }

  function calculateHighSPH(amount: number, months: number) {
    return performSPHCalculations(SPHHigh.comission, SPHHigh.interest, amount, months);
  }

  function performJDGCalculations(
    comissionMultiplier: number,
    interestMultiplier: number,
    additionalCalculationsMultiplier: number,
    amount: number,
    months: number
  ) {
    const comission = calculateComission(comissionMultiplier, amount, months);
    const interest = calculateInterest(interestMultiplier, amount, months);
    const additionalCalculations = performAdditionalCalculations(additionalCalculationsMultiplier, comission, interest);
    const totalInterest = interest + additionalCalculations;
    return {
      comission: formatNumberToSpaces(comission),
      comissionMultiplier: comissionMultiplier,
      totalInterest: formatNumberToSpaces(totalInterest),
      total: formatNumberToSpaces(amount + comission + totalInterest),
    };
  }

  function performSPHCalculations(
    comissionMultiplier: number,
    interestMultiplier: number,
    amount: number,
    months: number
  ) {
    const comission = calculateComission(comissionMultiplier, amount, months);
    const interest = calculateInterest(interestMultiplier, amount, months);
    const earlyPaymentFee = calculateEarlyPaymentFee(amount, months);
    return {
      comission: formatNumberToSpaces(comission),
      comissionMultiplier: comissionMultiplier,
      totalInterest: formatNumberToSpaces(interest),
      earlyPaymentFee: formatNumberToSpaces(earlyPaymentFee),
      total: formatNumberToSpaces(interest + comission + earlyPaymentFee + amount),
    };
  }

  function calculateComission(multiplier: number, amount: number, months: number) {
    return Math.ceil((months / 12) * multiplier * amount * 100) / 10000;
  }

  function calculateInterest(multiplier: number, amount: number, months: number) {
    return Math.ceil((months / 12) * multiplier * amount * 100) / 10000;
  }

  function performAdditionalCalculations(multiplier: number, comission: number, interest: number) {
    return Math.ceil(multiplier * (comission + interest) * 100) / 100;
  }

  function calculateEarlyPaymentFee(amount: number, months: number) {
    if (months < 12) {
      return Math.ceil(earlyPaymentFeeMultiplier * amount * 100) / 100;
    }
    return 0;
  }
}
