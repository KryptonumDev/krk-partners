import styles from '../HeroApplication.module.scss';
import type { StepsProps } from '../HeroApplication.types';

const Steps = ({ steps, currentStep, setStep }: StepsProps) => {
  const progress = currentStep === 1 ? 0.25 : 0.75;

  console.log(currentStep);

  return (
    <div className={styles['Steps']}>
      <div className={styles.progressbar}>
        <div style={{ transform: `scaleX(${progress})` }}></div>
      </div>
      {steps.map((step, i) => (
        <button
          key={i}
          type='button'
          onClick={() => setStep(i + 1)}
          aria-current={currentStep === i + 1}
          data-active={currentStep >= i + 1}
          disabled={currentStep <= i + 1}
        >
          {step}
        </button>
      ))}
    </div>
  );
};

export default Steps;
