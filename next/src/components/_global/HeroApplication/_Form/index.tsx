'use client';
import { useState } from 'react';
import { useForm, type FieldValues } from 'react-hook-form';
import styles from '../HeroApplication.module.scss';
import Steps from './Steps';
import Step1 from './Step1';
import Step2 from './Step2';
import Loading from './Loading';
import FormError from './FormError';
import type { FormStatusType } from '@/global/types';
import type { CalculationProps, FormProps } from '../HeroApplication.types';
import FormSuccess from './FormSuccess';

const steps = ['Pożyczka', 'Informacje', 'Propozycja'];

const Form = ({ email, contactPerson }: FormProps) => {
  const [status, setStatus] = useState<FormStatusType>({ sending: false });
  const [step, setStep] = useState(1);
  const [calculation, setCalculation] = useState<CalculationProps | null>(null);
  const {
    handleSubmit,
    reset,
    register,
    setValue,
    formState: { errors },
    watch,
    trigger,
  } = useForm({ mode: 'onTouched' });

  const onSubmit = async (data: FieldValues) => {
    setStatus({ sending: true });
    try {
      const response = await fetch('/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok && responseData.success) {
        const { comission, totalInterest, earlyPaymentFee, total } = responseData.calculation;
        setCalculation({ comission, totalInterest, earlyPaymentFee, total });
        setStatus({ sending: false, success: true });
        reset();
      } else {
        setStatus({ sending: false, success: false });
      }
    } catch {
      setStatus({ sending: false, success: false });
    }
  };

  return (
    <form
      className={styles['Form']}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Steps
        currentStep={step}
        steps={steps}
        setStep={setStep}
      />
      <Step1
        form={{ register, setValue, errors, trigger }}
        setStep={setStep}
        style={{ display: step !== 1 ? 'none' : undefined }}
      />
      <Step2
        form={{ register, setValue, errors, watch }}
        status={status}
        style={{ display: step !== 2 ? 'none' : undefined }}
      />
      {status?.success !== undefined &&
        (!status.success || calculation == null ? (
          <FormError
            email={email}
            setStatus={setStatus}
          />
        ) : (
          <FormSuccess
            {...calculation}
            contactPerson={contactPerson}
          />
        ))}
      <Loading loading={status?.sending} />
    </form>
  );
};

export default Form;
