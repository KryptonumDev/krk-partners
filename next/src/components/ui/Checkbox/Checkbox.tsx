import Error from '@/components/ui/Error';
import styles from './Checkbox.module.scss';
import type { Props } from './Checkbox.types';

const Checkbox = ({ register, label, errors, ...props }: Props) => {
  return (
    <label
      className={styles['Checkbox']}
      aria-invalid={!!errors[register.name]}
    >
      <div className={styles.icon}>
        <input
          {...register}
          name={register.name}
          type='checkbox'
          {...props}
        />
        <Checkmark />
      </div>
      <p>
        {label}
        <Error error={errors[register.name]?.message?.toString()} />
      </p>
    </label>
  );
};

export default Checkbox;

const Checkmark = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={10}
    fill='none'
  >
    <path
      d='M1.5 5.5 4.999 9l7.5-8'
      stroke='#15A669'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
