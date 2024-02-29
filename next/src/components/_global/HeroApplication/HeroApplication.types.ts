import type { ContactPersonType, FormStatusType, ImgType } from '@/global/types';
import type {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
} from 'react-hook-form';

export type Props = {
  heading: string;
  subheading: string;
  paragraph: string;
  testimonial_Img: ImgType;
  testimonial_Name: string;
  testimonial_Industry: string;
  testimonial_Text: string;
  form_Heading: string;
  form_Features: string[];
  contactPerson?: ContactPersonType;
};

export type FormProps = {
  email: string;
  contactPerson?: ContactPersonType;
};

export type CalculationProps = {
  comission: string;
  totalInterest: string;
  earlyPaymentFee?: string;
  total: string;
  contactPerson?: ContactPersonType;
};

export type StepsProps = {
  steps: string[];
  currentStep: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export type Step1Props = {
  form: {
    register: UseFormRegister<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    errors: FieldErrors<FieldValues>;
    trigger: UseFormTrigger<FieldValues>;
  };
  setStep: React.Dispatch<React.SetStateAction<number>>;
} & React.HTMLAttributes<HTMLDivElement>;

export type Step2Props = {
  form: {
    register: UseFormRegister<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    errors: FieldErrors<FieldValues>;
    watch: UseFormWatch<FieldValues>;
  };
  status: FormStatusType;
} & React.HTMLAttributes<HTMLDivElement>;

export type FormErrorProps = {
  setStatus: React.Dispatch<React.SetStateAction<FormStatusType>>;
} & FormProps;
