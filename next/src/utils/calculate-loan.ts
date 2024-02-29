export function calculateLoan(fundingPeriod: number, amount: string, companyType: string) {
  const parsedAmount = parseInt(amount);

  if (companyType == 'Spółka z.o.o') {
    return calculateJDG(parsedAmount, fundingPeriod);
  } else {
    return calculateSPH(parsedAmount, fundingPeriod);
  }

  function calculateJDG(amount: number, months: number) {
    if (amount < 1000000 && amount >= 200000) {
      return calculateLowJDG(amount, months);
    } else if (amount < 3000000 && amount >= 1000000) {
      return calculateMediumJDG(amount, months);
    } else if (amount <= 5000000 && amount >= 3000000) {
      return calculateHighJDG(amount, months);
    }
  }

  function calculateSPH(amount: number, months: number) {
    if (amount < 1000000 && amount >= 200000) {
      return calculateLowSPH(amount, months);
    } else if (amount < 3000000 && amount >= 1000000) {
      return calculateMediumSPH(amount, months);
    } else if (amount <= 5000000 && amount >= 3000000) {
      return calculateHighSPH(amount, months);
    }
  }

  function calculateLowJDG(amount: number, months: number) {
    const comissionMultiplier = 0.125;
    const interestMultiplier = 0.175;
    const additionalCalculationsMultiplier = 0.0408333333;
    return performJDGCalculations(
      comissionMultiplier,
      interestMultiplier,
      additionalCalculationsMultiplier,
      amount,
      months
    );
  }

  function calculateMediumJDG(amount: number, months: number) {
    const comissionMultiplier = 0.12;
    const interestMultiplier = 0.12;
    const additionalCalculationsMultiplier = 0.035;
    return performJDGCalculations(
      comissionMultiplier,
      interestMultiplier,
      additionalCalculationsMultiplier,
      amount,
      months
    );
  }

  function calculateHighJDG(amount: number, months: number) {
    const comissionMultiplier = 0.1;
    const interestMultiplier = 0.1;
    const additionalCalculationsMultiplier = 0.035;
    return performJDGCalculations(
      comissionMultiplier,
      interestMultiplier,
      additionalCalculationsMultiplier,
      amount,
      months
    );
  }

  function calculateLowSPH(amount: number, months: number) {
    const comissionMultiplier = 0.14;
    const interestMultiplier = 0.16585;
    return performSPHCalculations(comissionMultiplier, interestMultiplier, amount, months);
  }

  function calculateMediumSPH(amount: number, months: number) {
    const comissionMultiplier = 0.12;
    const interestMultiplier = 0.12;
    return performSPHCalculations(comissionMultiplier, interestMultiplier, amount, months);
  }

  function calculateHighSPH(amount: number, months: number) {
    const comissionMultiplier = 0.1;
    const interestMultiplier = 0.1;
    return performSPHCalculations(comissionMultiplier, interestMultiplier, amount, months);
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
      comission: comission,
      totalInterest: totalInterest,
      total: amount + comission + totalInterest,
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
      comission: comission,
      totalInterest: interest,
      earlyPaymentFee: earlyPaymentFee,
      total: interest + comission + earlyPaymentFee + amount,
    };
  }

  function calculateComission(multiplier: number, amount: number, months: number) {
    return Math.ceil((months / 12) * multiplier * amount * 100) / 100;
  }

  function calculateInterest(multiplier: number, amount: number, months: number) {
    return Math.ceil((months / 12) * multiplier * amount * 100) / 100;
  }

  function performAdditionalCalculations(multiplier: number, comission: number, interest: number) {
    return Math.ceil(multiplier * (comission + interest) * 100) / 100;
  }

  function calculateEarlyPaymentFee(amount: number, months: number) {
    const earlyPaymentFeeMultiplier = 0.0535;

    if (months < 12) {
      return Math.ceil(earlyPaymentFeeMultiplier * amount * 100) / 100;
    }
    return 0;
  }
}
