'use client';
import { useEffect, useRef, useState } from 'react';
import Error from '@/components/ui/Error';
import styles from './Select.module.scss';
import type { Props } from './Select.types';

const Select = ({ register, label, errors, options, defaultValue, setErrorsUnder = false }: Props) => {
  const ref = useRef<HTMLLabelElement>(null);
  const [option, setOption] = useState(defaultValue);

  const handleClick = () => setTimeout(() => (document.activeElement as HTMLElement)?.blur(), 0);

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      const refCurrent = ref.current;
      if (refCurrent) {
        if (refCurrent.contains(document.activeElement as HTMLElement)) {
          (document.activeElement as HTMLElement)?.blur();
        }
      }
    }
  };

  return (
    <label
      className={styles['Select']}
      aria-invalid={!!errors[register.name]}
      ref={ref}
    >
      <p>
        {label && <span dangerouslySetInnerHTML={{ __html: label }} />}
        {!setErrorsUnder && <Error error={errors[register.name]?.message?.toString()} />}
      </p>
      <div
        className={styles.select}
        tabIndex={-1}
      >
        <p>{option}</p>
        <DropdownIcon className={styles.DropdownIcon} />
        <div className={styles.options}>
          {options.map((option, i) => (
            <label
              key={i}
              onMouseUp={handleClick}
            >
              <input
                defaultChecked={defaultValue === option}
                type='radio'
                {...register}
                onChange={() => setOption(option)}
                name={register.name}
                value={option}
              />
              <span>{option}</span>
              <CheckedOptionIcon />
            </label>
          ))}
        </div>
      </div>
      {setErrorsUnder && <Error error={errors[register.name]?.message?.toString()} />}
    </label>
  );
};

export default Select;

const CheckedOptionIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
  >
    <path
      opacity={0.5}
      d='M18.5 10a8.333 8.333 0 1 1-16.667 0A8.333 8.333 0 0 1 18.5 10Z'
      fill='#376578'
    />
    <path
      d='M13.526 7.475a.625.625 0 0 1 0 .884l-4.167 4.166a.625.625 0 0 1-.884 0L6.81 10.86a.625.625 0 1 1 .883-.884L8.917 11.2l1.863-1.863 1.862-1.862a.625.625 0 0 1 .884 0Z'
      fill='#376578'
    />
  </svg>
);

const DropdownIcon = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
    {...props}
  >
    <path
      d='M15.833 7.5 10 12.5l-5.833-5'
      stroke='#969799'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
