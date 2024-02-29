import Error from '@/components/ui/Error';
import Textarea from './_Textarea';
import styles from './Input.module.scss';
import type { Props } from './Input.types';

const Input = ({
  register,
  label,
  errors,
  textarea = false,
  setErrorsUnder = false,
  className = '',
  ...props
}: Props) => {
  return (
    <label
      className={`${styles['Input']} ${className}`}
      aria-invalid={!!errors[register.name]}
    >
      <p>
        <span dangerouslySetInnerHTML={{ __html: label }} />
        {!setErrorsUnder && <Error error={errors[register.name]?.message?.toString()} />}
      </p>
      {textarea ? (
        <Textarea
          {...register}
          name={register.name}
          {...props}
        />
      ) : (
        <input
          {...register}
          name={register.name}
          {...props}
        />
      )}
      {setErrorsUnder && <Error error={errors[register.name]?.message?.toString()} isAbsolute={true}/>}
    </label>
  );
};

export default Input;
