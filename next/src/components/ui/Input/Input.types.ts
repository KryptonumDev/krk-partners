import { FieldErrors } from 'react-hook-form';

export type Props = {
  register: {
    name: string;
  };
  label: string;
  errors: FieldErrors;
  textarea?: boolean;
  setErrorsUnder?: boolean;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;
