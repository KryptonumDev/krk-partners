import type { FieldErrors } from 'react-hook-form';

export type Props = {
  register: {
    name: string;
  };
  label: string;
  errors: FieldErrors;
  options: string[];
  setErrorsUnder?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>;
