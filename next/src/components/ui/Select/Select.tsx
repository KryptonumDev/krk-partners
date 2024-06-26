'use client';
import { useEffect, useRef } from 'react';
import Error from '@/components/ui/Error';
import styles from './Select.module.scss';
import type { Props } from './Select.types';

const Select = ({ register, label, errors, options, selectedOption }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

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
    <div
      className={styles['Select']}
      aria-invalid={!!errors[register.name]}
      ref={ref}
    >
      <p>
        {label && <span dangerouslySetInnerHTML={{ __html: label }} />}
        <Error error={errors[register.name]?.message?.toString()} />
      </p>
      <div
        className={styles.select}
        tabIndex={-1}
      >
        <p>{selectedOption}</p>
        <DropdownIcon className={styles.DropdownIcon} />
        <div className={styles.options}>
          {options.map((option, i) => (
            <label
              key={i}
              onMouseUp={handleClick}
            >
              <input
                defaultChecked={selectedOption === option}
                type='radio'
                {...register}
                name={register.name}
                value={option}
              />
              <span>{option}</span>
              <CheckedOptionIcon />
            </label>
          ))}
        </div>
      </div>
    </div>
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
