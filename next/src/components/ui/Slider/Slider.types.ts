import type { FieldErrors, FieldValues, UseFormSetValue } from 'react-hook-form';

export type Props = {
  register: {
    name: string;
  };
  minValue: number;
  maxValue: number;
  errors: FieldErrors;
  setValue: UseFormSetValue<FieldValues>;
};
