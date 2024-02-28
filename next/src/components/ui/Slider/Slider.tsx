import { useState } from 'react';
import Error from '@/components/ui/Error';
import styles from './Slider.module.scss';
import { formatToOnlyDigits } from '@/utils/format-to-only-digits';
import type { Props } from './Slider.types';
import { formatNumberToSpaces } from '@/utils/format-number-to-spaces';

const Slider = ({ label, register, minValue, maxValue, errors, setValue }: Props) => {
  const [sliderState, setSliderState] = useState({
    value: minValue,
    percentage: 0,
  });

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(formatToOnlyDigits(e)) || 0;
    setValue('value', formatNumberToSpaces(value), { shouldValidate: true });
    const percentage = Math.max(0, Math.min(((value - minValue) / (maxValue - minValue)) * 100, 100));
    setSliderState({ value, percentage });
  };

  return (
    <div className={styles['Slider']}>
      <p>
        <span dangerouslySetInnerHTML={{ __html: label }} />
        <Error error={errors[register.name]?.message?.toString()} />
      </p>
      <div className={styles.input}>
        <input
          {...register}
          name={register.name}
          type='text'
          defaultValue={formatNumberToSpaces(sliderState.value)}
          onChange={(e) => handleSliderChange(e)}
        />
        <div className={styles.suffix}>
          <span>{formatNumberToSpaces(sliderState.value)}</span>
          <span>&nbsp;zł</span>
        </div>
      </div>
      <div className={styles.slider}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className={styles.dot}
          ></div>
        ))}
        <div
          className={styles.thumb}
          style={{ left: `${sliderState.percentage}%` }}
        >
          <ArrowIcon />
        </div>
        <input
          type='range'
          min={minValue}
          max={maxValue}
          step={100}
          value={sliderState.value}
          onChange={handleSliderChange}
        />
      </div>
      <div className={styles.range}>
        <p>{formatNumberToSpaces(minValue)}</p>
        <p>{formatNumberToSpaces(maxValue)}</p>
      </div>
    </div>
  );
};

export default Slider;

const ArrowIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
  >
    <path
      d='M7.5 4.167 2.5 10l5 5.833'
      stroke='#fff'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='m12.5 4.167 5 5.833-5 5.833'
      stroke='#fff'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
