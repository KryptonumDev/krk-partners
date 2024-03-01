import sanityFetch from '../sanity.fetch';
import { calculationData } from './calculate-loan.types';

export async function getCalculationData() {
  const data = await sanityFetch<calculationData>({
    query: /* groq */ `
      *[_type == "landingPage_Collection"][0] {
        loanCalculations {
          JDGSmall {
            comission,
            from,
            to,
            additionalCalculationsMultiplier,
            interest
          },
          JDGMedium {
            comission,
            from,
            to,
            additionalCalculationsMultiplier,
            interest
          },
          JDGHigh {
            comission,
            from,
            to,
            additionalCalculationsMultiplier,
            interest
          },
          SPHSmall {
            comission,
            from,
            to,
            interest
          },
          SPHMedium {
            comission,
            from,
            to,
            interest
          },
          SPHHigh {
            comission,
            from,
            to,
            interest
          },
          earlyPaymentFeeMultiplier,
        }
      }
    `,
  });
  return data;
}
