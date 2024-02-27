'use client';
import { useState } from 'react';
import Error from '@/components/ui/Error';
import styles from './Slider.module.scss';
import { formatToOnlyDigits } from '@/utils/format-to-only-digits';
import type { Props } from './Slider.types';

const Slider = ({ register, minValue, maxValue, errors, setValue }: Props) => {
  const [sliderValue, setSliderValue] = useState(minValue);
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(formatToOnlyDigits(e)) || 0;
    setValue('value', value, { shouldValidate: true });
    setSliderValue(value);
  };

  return (
    <div className={styles['Slider']}>
      <Error error={errors[register.name]?.message?.toString()} />
      <input
        {...register}
        name={register.name}
        type='text'
        defaultValue={sliderValue}
        onChange={(e) => handleSliderChange(e)}
      />
      <input
        className={styles.slider}
        type='range'
        min={minValue}
        max={maxValue}
        step={100}
        value={sliderValue}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default Slider;
