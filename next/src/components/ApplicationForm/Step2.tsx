import { SyntheticEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import styles from './ApplicationForm.module.scss';
import { regex } from '@/global/constants';
import { formatPhoneNumber } from '@/utils/format-phone-number';
import { isValidateNip } from '@/utils/is-validate-nip';
import { formatToOnlyDigits } from '@/utils/format-to-only-digits';
import { landRegisterList } from './land-register-list';
import { Step2Props } from './ApplicationForm.types';
import Error from '@/components/ui/Error';
import { checkLandAndMortgageRegister } from '@/utils/check-land-and-mortgage-register';

const Step2 = ({ form: { register, setValue, errors, watch }, status, ...props }: Step2Props) => {
  const [isMortgageProperlySet, setIsMortgageProperlySet] = useState(false);

  const handleDigitChange = (event: SyntheticEvent) => {
    const value = (event.target as HTMLInputElement).value.replace(/\D/g, '');
    setValue('landRegister_CheckDigit', value), { shouldValidate: true };
  };

  const checkAll = (checked: boolean) => {
    const checkboxes = ['legal1', 'legal2', 'legal3', 'legal4'];
    checkboxes.forEach((e) => setValue(e, checked, { shouldValidate: true }));
  };

  const isAllChecked = watch(['legal1', 'legal2', 'legal3', 'legal4']).every((value) => !!value);

  useEffect(() => {
    setValue('legal_all', isAllChecked, { shouldValidate: true });
  }, [isAllChecked]);

  const landAndMortgageRegister = watch([
    'landRegister_CourtId',
    'landRegister_RegisterNumber',
    'landRegister_CheckDigit',
  ]);

  useEffect(() => {
    const mappedLandAndMortgageRegister: string[] = [];
    landAndMortgageRegister.map((input) => {
      if (regex.hasLetters.test(input)) {
        mappedLandAndMortgageRegister.push(input?.substring(0, 4));
      } else if (input) {
        mappedLandAndMortgageRegister.push(input);
      }
    });
    setIsMortgageProperlySet(checkLandAndMortgageRegister(mappedLandAndMortgageRegister));
  }, [landAndMortgageRegister]);

  return (
    <div
      className={styles['Step2']}
      {...props}
    >
      <Input
        label='Imię i nazwisko'
        register={register('fullName', {
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
        maxLength={15}
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
      <div className={styles.register}>
        <div className={styles.label}>
          <p>Numer księgi wieczystej</p>
          <p>Potrzebujemy tej informacji, aby wyliczyć pożyczkę</p>
        </div>
        <Select
          label=''
          register={register('landRegister_CourtId', {
            required: { value: true, message: 'Identyfikator sądu jest wymagany' },
          })}
          options={landRegisterList}
          errors={errors}
          setErrorsUnder={true}
        />
        <span>/</span>
        <Input
          label=''
          register={register('landRegister_RegisterNumber', {
            required: { value: true, message: 'Numer księgi wieczystej jest wymagany' },
            pattern: { value: regex.registerNumber, message: 'Niepoprawny numer księgi wieczystej' },
          })}
          errors={errors}
          placeholder='_ _ _ _ _ _ _ _'
          maxLength={8}
          inputMode='numeric'
        />
        <span>/</span>
        <Input
          label=''
          register={register('landRegister_CheckDigit', {
            required: { value: true, message: 'Cyfra kontrolna jest wymagana' },
            onChange: (event: SyntheticEvent) => handleDigitChange(event),
          })}
          errors={errors}
          placeholder='_'
          inputMode='numeric'
          maxLength={1}
        />
        <Error error={errors['landdRegister_CourtId']?.message?.toString()} />
        <Error error={errors['landRegister_RegisterNumber']?.message?.toString()} />
        <Error
          error={
            errors['landRegister_CheckDigit']?.message?.toString()
              ? errors['landRegister_CheckDigit']?.message?.toString()
              : !isMortgageProperlySet
              ? 'Niepoprawnie wypełnione dane'
              : undefined
          }
        />
      </div>
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
        Otrzymaj propozycję pożyczki
      </Button>
    </div>
  );
};

export default Step2;
