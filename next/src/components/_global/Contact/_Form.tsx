'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useForm, type FieldValues } from 'react-hook-form';
import styles from './Contact.module.scss';
import Input from '@/components/ui/Input';
import Checkbox from '@/components/ui/Checkbox';
import Button from '@/components/ui/Button';
import { regex } from '@/global/constants';
import FormState from './_FormState';
import FormLoading from './_FormLoading';
import type { FormType } from './Contact.types';
import type { FormStatusType } from '@/global/types';

const Form = ({ paragraph, email }: FormType) => {
  const [status, setStatus] = useState<FormStatusType>({ sending: false });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const onSubmit = async (data: FieldValues) => {
    setStatus({ sending: true });
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (responseData.success) {
        setStatus((prevStatus) => ({ ...prevStatus, success: true }));
        reset();
      } else {
        setStatus((prevStatus) => ({ ...prevStatus, success: false }));
      }
    } catch {
      setStatus((prevStatus) => ({ ...prevStatus, success: false }));
    }
  };

  return (
    <form
      className={styles['Form']}
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3>{paragraph}</h3>
      <Input
        label='Pytanie'
        textarea={true}
        register={register('message', {
          required: { value: true, message: 'Pytanie jest wymagane' },
        })}
        errors={errors}
      />
      <Input
        label='E-mail'
        type='email'
        register={register('email', {
          required: { value: true, message: 'Adres e-mail jest wymagany' },
          pattern: { value: regex.email, message: 'Niepoprawny adres e-mail' },
        })}
        errors={errors}
      />
      <Checkbox
        label={
          <>
            Akceptuję{' '}
            <Link
              className='link'
              href='https://krk-partners.pl/polityka-prywatnosci'
              target='_blank'
              rel='noopener noreferrer'
            >
              politykę prywatności
            </Link>
          </>
        }
        register={register('legal', {
          required: { value: true, message: 'Zgoda jest wymagana' },
        })}
        errors={errors}
      />
      <Button
        disabled={status?.sending}
        type='submit'
      >
        Wyślij wiadomość
      </Button>
      <FormState
        isSuccess={status?.success}
        setStatus={setStatus}
        email={email}
      />
      <FormLoading loading={status?.sending} />
    </form>
  );
};

export default Form;
