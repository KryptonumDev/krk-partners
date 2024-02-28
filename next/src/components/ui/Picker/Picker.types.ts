import type { FieldErrors, FieldValues, UseFormSetValue } from 'react-hook-form';

export type Props = {
  label: string;
  register: {
    name: string;
  };
  setValue: UseFormSetValue<FieldValues>;
  minValue: number;
  maxValue: number;
  options: number[];
  errors: FieldErrors;
};
