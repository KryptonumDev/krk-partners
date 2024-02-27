import type { FieldErrors } from 'react-hook-form';

export type Props = {
  register: {
    name: string;
  };
  label: string;
  errors: FieldErrors;
  options: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;
