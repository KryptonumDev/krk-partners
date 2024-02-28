import type { FieldErrors, FieldValues, UseFormSetValue } from 'react-hook-form';

export type Props = {
  label: string;
  register: {
    name: string;
  };
  minValue: number;
  maxValue: number;
  errors: FieldErrors;
  setValue: UseFormSetValue<FieldValues>;
};
