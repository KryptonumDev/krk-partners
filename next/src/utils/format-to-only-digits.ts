export const formatToOnlyDigits = (event: React.ChangeEvent<HTMLInputElement>) =>
  (event.target.value = event.target.value.replace(/\D/g, ''));
