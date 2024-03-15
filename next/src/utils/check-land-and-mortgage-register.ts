import { regex } from '@/global/constants';

export function checkLandAndMortgageRegister(data: string[], value: string) {
  const mappedLandAndMortgageRegister: string[] = [];
  data.map((input) => {
    if (regex.hasLetters.test(input)) {
      mappedLandAndMortgageRegister.push(input?.substring(0, 4));
    } else if (input) {
      mappedLandAndMortgageRegister.push(input);
    }
  });
  mappedLandAndMortgageRegister.push(value);

  const letterValues = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'X',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'R',
    'S',
    'T',
    'U',
    'W',
    'Y',
    'Z',
  ];

  if (mappedLandAndMortgageRegister.length < 3 || mappedLandAndMortgageRegister[0] == undefined) return true;

  const dataToVerify = `${mappedLandAndMortgageRegister[0]}${mappedLandAndMortgageRegister[1]}`;

  return validateData(dataToVerify, mappedLandAndMortgageRegister[2] as string);

  function getLetterValue(letter: string) {
    for (let j = 0; j < letterValues.length; j++) {
      if (letter == letterValues[j]) {
        return j;
      }
    }
  }

  function validateData(dataToVerify: string, controlDigit: string) {
    const multipliers = [1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7];
    let sum = 0;

    for (let i = 0; i < multipliers.length; i++) {
      sum += (multipliers[i] ?? 0) * (getLetterValue(dataToVerify[i] as string) ?? 0);
    }
    sum %= 10;

    if (sum != parseInt(controlDigit)) {
      return false;
    }
    return true;
  }
}
