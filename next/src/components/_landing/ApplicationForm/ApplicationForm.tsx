'use client';
import { useRef, useState } from 'react';
import { useForm, type FieldValues } from 'react-hook-form';
import styles from './ApplicationForm.module.scss';
import Steps from './Steps';
import Step1 from './Step1';
import Step2 from './Step2';
import Loading from './Loading';
import FormError from './FormError';
import FormSuccess from './FormSuccess';
import type { FormStatusType } from '@/global/types';
import type { CalculationProps, FormProps } from './ApplicationForm.types';

const steps = ['Pożyczka', 'Informacje', 'Propozycja'];

const ApplicationForm = ({ globalEmail, contactPerson }: FormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
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

  const formRefOffset = formRef.current ? formRef.current?.offsetTop - 134 : undefined;

  const onSubmit = async (data: FieldValues) => {
    setStatus({ sending: true });
    data.contactPerson = contactPerson;
    try {
      const response = await fetch('/api/application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok && responseData.success) {
        const { comission, comissionMultiplier, totalInterest, earlyPaymentFee, total } = responseData.calculation;
        setCalculation({ comission, comissionMultiplier, totalInterest, earlyPaymentFee, total });
        setStatus({ sending: false, success: true });
        reset();
        scrollTo({ top: formRefOffset, behavior: 'smooth' });
      } else {
        setStatus({ sending: false, success: false });
        scrollTo({ top: formRefOffset, behavior: 'smooth' });
      }
    } catch {
      setStatus({ sending: false, success: false });
      scrollTo({ top: formRefOffset, behavior: 'smooth' });
    }
  };

  return (
    <form
      className={styles['Form']}
      onSubmit={handleSubmit(onSubmit)}
      ref={formRef}
    >
      <Steps
        currentStep={step}
        steps={steps}
        setStep={setStep}
        style={{ display: status?.success !== undefined ? 'none' : undefined }}
      />
      <Step1
        form={{ register, setValue, errors, trigger }}
        setStep={setStep}
        style={{ display: status?.success !== undefined ? 'none' : step !== 1 ? 'none' : undefined }}
      />
      <Step2
        form={{ register, setValue, errors, watch }}
        status={status}
        style={{ display: status?.success !== undefined ? 'none' : step !== 2 ? 'none' : undefined }}
      />
      {status?.success !== undefined &&
        (!status.success || calculation == null ? (
          <FormError
            globalEmail={globalEmail}
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

export default ApplicationForm;
