import Copy from '@/components/ui/Copy';
import Button from '@/components/ui/Button';
import styles from './ApplicationForm.module.scss';
import type { FormErrorProps } from './ApplicationForm.types';

const FormError = ({ email, setStatus }: FormErrorProps) => {
  return (
    <div className={styles['FormError']}>
      <ErrorIcon />
      <h3>Nie udało się wysłać formularza</h3>
      <p>Prawdopodobnie jest to chwilowy błąd. Spróbuj ponownie teraz, lub za jakiś czas.</p>
      <Button
        type='button'
        onClick={() => setStatus({ sending: false, success: undefined })}
      >
        Spróbuj ponownie
      </Button>
      <div className={styles.contact}>
        <p>Jeśli problem się powtarza skontaktuj się z nami mailowo</p>
        <Copy
          type='mail'
          text={email}
        />
      </div>
    </div>
  );
};

export default FormError;

const ErrorIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={49}
    height={48}
    fill='none'
  >
    <path
      opacity={0.5}
      d='M24.5 6c-4.622 0-7.54 5.174-13.377 15.523l-.727 1.29c-4.85 8.6-7.276 12.899-5.084 16.043S12.927 42 23.772 42h1.455c10.845 0 16.268 0 18.46-3.144s-.233-7.444-5.084-16.044l-.727-1.289C32.04 11.174 29.121 6 24.5 6Z'
      fill='#E3204E'
    />
    <path
      d='M24.5 14.5A1.5 1.5 0 0 1 26 16v10a1.5 1.5 0 0 1-3 0V16a1.5 1.5 0 0 1 1.5-1.5Z'
      fill='#E3204E'
    />
    <path
      d='M24.5 34a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
      fill='#E3204E'
    />
  </svg>
);
