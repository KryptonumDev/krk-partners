'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useForm, type FieldValues } from 'react-hook-form';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import Select from '@/components/ui/Select';
import Slider from '@/components/ui/Slider';
import styles from '../HeroApplication.module.scss';
import Loading from './Loading';
import { regex } from '@/global/constants';
import { landRegisterList } from './land-register-list';
import { formatPhoneNumber } from '@/utils/format-phone-number';
import { isValidateNip } from '@/utils/is-validate-nip';
import { formatToOnlyDigits } from '@/utils/format-to-only-digits';
import type { FormStatusType } from '@/global/types';

const Form = () => {
  const [status, setStatus] = useState<FormStatusType>({ sending: false });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
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
      if (response.ok && responseData.success) {
        setStatus((prevStatus) => ({ ...prevStatus, success: true }));
        reset();
      } else {
        setStatus((prevStatus) => ({ ...prevStatus, success: false }));
      }
    } catch {
      setStatus((prevStatus) => ({ ...prevStatus, success: false }));
    }
  };

  const checkAll = (checked: boolean) => {
    const checkboxes = ['legal1', 'legal2', 'legal3', 'legal4'];
    checkboxes.forEach((e) => setValue(e, checked, { shouldValidate: true }));
  };

  const isAllChecked = watch(['legal1', 'legal2', 'legal3', 'legal4']).every((value) => !!value);

  useEffect(() => {
    setValue('legal_all', isAllChecked, { shouldValidate: true });
  }, [isAllChecked]);

  return (
    <form
      className={styles['Form']}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Slider
        label='Kwota pożyczki'
        register={register('value', {
          required: { value: true, message: 'Kwota jest wymagana' },
          validate: (value) => {
            value = value.replaceAll(' ', '');
            if (value < 200000) {
              return 'Kwota musi być większa niż 200 000 zł';
            } else if (value > 5000000) {
              return 'Kwota nie może być większa niż 5 000 000 zł';
            }
          },
        })}
        setValue={setValue}
        errors={errors}
        minValue={200000}
        maxValue={5000000}
      />
      <Input
        label='Imię i nazwisko'
        register={register('name', {
          required: { value: true, message: 'Imię i nazwisko jest wymagane' },
          pattern: { value: regex.string, message: 'Imię i nazwisko jest wymagane' },
        })}
        errors={errors}
      />
      <Input
        label='E-mail'
        type='email'
        register={register('email', {
          required: { value: true, message: 'Adres e-mail jest wymagany' },
          pattern: { value: regex.email, message: 'Nieprawidłowy adres e-mail' },
        })}
        errors={errors}
      />
      <Input
        label='Telefon'
        type='tel'
        placeholder='_  _  _  -  _  _  _  -  _  _  _'
        register={register('tel', {
          required: { value: true, message: 'Numer telefonu jest wymagany' },
          pattern: { value: regex.tel, message: 'Nieprawidłowy numer telefonu' },
          onChange: (e) => formatPhoneNumber(e),
        })}
        errors={errors}
      />
      <Input
        label='NIP'
        placeholder='_  _  _  -  _  _  _  -  _  _  -  _  _'
        register={register('nip', {
          required: { value: true, message: 'NIP jest wymagany' },
          validate: (value) => isValidateNip(value) || 'Nieprawidłowy NIP',
          onChange: (e) => formatToOnlyDigits(e),
        })}
        errors={errors}
      />
      <Select
        label='Rodzaj działaności'
        register={register('companyType', {
          required: { value: true, message: 'Rodzaj działaności jest wymagany' },
        })}
        defaultValue={'Spółka z.o.o'}
        options={[
          'Spółka z.o.o',
          'Jednoosobowa działalność gospodarcza',
          'Spółka akcyjna',
          'Prosta spółka akcyjna',
          'Spółka jawna',
          'Spółka partnerska',
          'Spółka komandytowa',
          'Spółka komandytowo-akcyjna',
        ]}
        errors={errors}
      />
      <Select
        label=''
        register={register('companyType', {
          required: { value: true, message: 'Rodzaj działaności jest wymagany' },
        })}
        options={landRegisterList}
        errors={errors}
      />
      <div className={styles.legal}>
        <Checkbox
          label='Zaznacz wszystkie'
          register={register('legal_all')}
          errors={errors}
          onChange={(e) => checkAll(e.target.checked)}
        />
        <Checkbox
          label={
            <>
              Wyrażam zgodę na&nbsp;
              <Link
                className='link'
                href='https://krk-partners.pl/polityka-prywatnosci'
                target='_blank'
                rel='noopener noreferrer'
              >
                przetwarzanie moich danych osobowych
              </Link>
              &nbsp;podanych we wniosku o udzielenie pożyczki przez spółki z wymienione w pkt 2 klauzuli informacyjnej
              w celu dokonania przez nie oceny mojej sytuacji majątkowej pod kątem możliwości udzielenia pożyczki przez
              jedną ze spółek.
            </>
          }
          register={register('legal1', {
            required: { value: true, message: 'Zgoda jest wymagana' },
          })}
          errors={errors}
        />
        <Checkbox
          label='Wyrażam zgodę na przetwarzanie moich danych osobowych podanych we wniosku pożyczkowym w celu otrzymywania materiałów o charakterze marketingowym i informacji handlowych. Administratorem danych osobowych jest każda ze spółek wymienionych w pkt 2 klauzuli informacyjnej. Podstawą przetwarzania jest Pana/i zgoda (art. 6 ust. 1 lit. a) RODO).'
          register={register('legal2', {
            required: { value: true, message: 'Zgoda jest wymagana' },
          })}
          errors={errors}
        />
        <Checkbox
          label='Wyrażam zgodę na otrzymywanie informacji handlowych przesyłanych przez każdą ze spółek wymienionych w pkt 2 klauzuli informacyjnej zgodnie z art. 10 ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.'
          register={register('legal3', {
            required: { value: true, message: 'Zgoda jest wymagana' },
          })}
          errors={errors}
        />
        <Checkbox
          label='Wyrażam zgodę na przekazywanie treści marketingowych przez każdą ze spółek wymienionych w pkt 2 klauzuli informacyjnej za pośrednictwem moich urządzeń telekomunikacyjnych, w szczególności takich jak telefon czy smartfon, zgodnie z art. 172 ust. 1 ustawy z dnia 16 lipca 2004 r. Prawo telekomunikacyjne.'
          register={register('legal4', {
            required: { value: true, message: 'Zgoda jest wymagana' },
          })}
          errors={errors}
        />
      </div>
      <Button
        disabled={status?.sending}
        type='submit'
      >
        Wyślij wiadomość
      </Button>
      {/* <FormState
        isSuccess={status?.success}
        setStatus={setStatus}
        email={email}
      /> */}
      <Loading loading={status?.sending} />
    </form>
  );
};

export default Form;
