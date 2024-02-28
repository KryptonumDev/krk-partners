'use client';
import { useRef, useState } from 'react';
import Error from '@/components/ui/Error';
import styles from './Picker.module.scss';
import { formatToOnlyDigits } from '@/utils/format-to-only-digits';
import type { Props } from './Picker.types';

const Picker = ({ label, register, errors, setValue, minValue, maxValue, options }: Props) => {
  const input = useRef<HTMLInputElement>(null);
  const [checkedOption, setCheckedOption] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(register.name, formatToOnlyDigits(e), { shouldValidate: true });
    setCheckedOption(null);
  };

  return (
    <div
      className={styles['Picker']}
      aria-invalid={!!errors[register.name]}
    >
      <p>
        <span dangerouslySetInnerHTML={{ __html: label }} />
        <Error error={errors[register.name]?.message?.toString()} />
      </p>
      <input
        type='hidden'
        {...register}
        name={register.name}
      />
      <div className={styles.options}>
        {options.map((option, i) => (
          <label key={i}>
            <input
              value={option}
              type='radio'
              checked={checkedOption === option}
              onChange={(e) => {
                setCheckedOption(option);
                setValue(register.name, e.target.value, { shouldValidate: true });
                if (input.current) input.current.value = '';
              }}
            />
            <span>{option}</span>
            <div className={styles.indicator}>
              <IndicatorIcon />
            </div>
          </label>
        ))}
        <input
          ref={input}
          className={styles.input}
          type='text'
          placeholder='Wpisz własny'
          minLength={minValue.toString().length}
          maxLength={maxValue.toString().length}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Picker;

const IndicatorIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={12}
    fill='#376578'
  >
    <path
      opacity={0.5}
      d='M11.1 6a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z'
    />
    <path d='M8.116 4.485a.375.375 0 0 1 0 .53l-2.5 2.5a.375.375 0 0 1-.53 0l-1-1a.375.375 0 1 1 .53-.53l.734.735 1.118-1.118 1.117-1.117a.375.375 0 0 1 .53 0Z' />
  </svg>
);
