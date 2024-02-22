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
    width={12}
    height={10}
    fill='none'
  >
    <path
      d='M11.373.96a1 1 0 0 1 0 1.414L4.707 9.04a1 1 0 0 1-1.414 0L.626 6.374A1 1 0 1 1 2.04 4.959L4 6.92 9.96.959a1 1 0 0 1 1.413 0Z'
      fill='#15A669'
    />
  </svg>
);
