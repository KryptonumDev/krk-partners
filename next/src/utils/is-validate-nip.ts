export const isValidateNip = (nip: string) => {
  if (typeof nip !== 'string' || nip.length !== 10) return false;

  nip = nip.replace(/[\ \-]/gi, '');

  const weight = [6, 5, 7, 2, 3, 4, 5, 6, 7];
  const controlNumber = Number(nip.charAt(9));
  const sum = nip
    .slice(0, 9)
    .split('')
    .reduce((acc, digit, index) => {
      return acc + Number(digit) * (weight[index] || 0);
    }, 0);

  return sum % 11 === controlNumber;
};
