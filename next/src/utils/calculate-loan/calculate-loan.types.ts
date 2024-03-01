export type calculationData = {
  loanCalculations: {
    JDGSmall: {
      comission: number;
      from: number;
      to: number;
      additionalCalculationsMultiplier: number;
      interest: number;
    };
    JDGMedium: {
      comission: number;
      from: number;
      to: number;
      additionalCalculationsMultiplier: number;
      interest: number;
    };
    JDGHigh: {
      comission: number;
      from: number;
      to: number;
      additionalCalculationsMultiplier: number;
      interest: number;
    };
    SPHSmall: {
      comission: number;
      from: number;
      to: number;
      interest: number;
    };
    SPHMedium: {
      comission: number;
      from: number;
      to: number;
      interest: number;
    };
    SPHHigh: {
      comission: number;
      from: number;
      to: number;
      interest: number;
    };
    earlyPaymentFeeMultiplier: number;
  };
};
