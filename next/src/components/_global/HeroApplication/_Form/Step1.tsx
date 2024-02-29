'use client';
import Slider from '@/components/ui/Slider';
import styles from '../HeroApplication.module.scss';
import Picker from '@/components/ui/Picker';
import type { Step1Props } from '../HeroApplication.types';
import Button from '@/components/ui/Button';

const Step1 = ({ form: { register, setValue, errors, trigger }, setStep, ...props }: Step1Props) => {
  const handleNextStep = async () => {
    const isValid = await trigger(['loanAmount', 'fundingPeriod']);
    if (isValid) setStep(2);
  };

  return (
    <div
      className={styles['Step1']}
      {...props}
    >
      <Slider
        label='Kwota pożyczki'
        register={register('loanAmount', {
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
      <Picker
        label='Okres finansowania w miesiącach (min. 1 max 24)'
        register={register('fundingPeriod', {
          required: { value: true, message: 'Okres finansowania jest wymagany' },
          min: { value: 1, message: 'Minimalnie 1 miesiąc' },
          max: { value: 24, message: 'Maksymalnie 24 miesiące' },
          valueAsNumber: true,
        })}
        setValue={setValue}
        errors={errors}
        options={[6, 12, 24]}
        minValue={1}
        maxValue={24}
      />
      <Button
        type='button'
        onClick={handleNextStep}
      >
        Przejdź do kroku 2
      </Button>
    </div>
  );
};

export default Step1;
