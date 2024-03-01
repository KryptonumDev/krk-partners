import { ErrorIcon, SuccessIcon } from '@/components/ui/Icons';
import styles from './Contact.module.scss';
import Button from '@/components/ui/Button';
import Copy from '@/components/ui/Copy';
import type { FormStatusType } from '@/global/types';

const getIcon = (isSuccess: boolean) => (isSuccess ? <SuccessIcon /> : <ErrorIcon />);
const getHeading = (isSuccess: boolean) =>
  isSuccess ? 'Pomyślnie wysłano formularz' : 'Nie udało się wysłać formularza';
const getParagraph = (isSuccess: boolean) =>
  isSuccess
    ? 'Odpowiedzi od nas możesz oczekiwać na mailu w ciągu 2 godzin'
    : 'Prawdopodobnie jest to chwilowy błąd. Spróbuj ponownie teraz, lub za jakiś czas.';

const FormState = ({
  isSuccess,
  setStatus,
  email,
}: {
  isSuccess: boolean | undefined;
  setStatus: React.Dispatch<React.SetStateAction<FormStatusType>>;
  email: string;
}) => {
  return (
    isSuccess !== undefined && (
      <div
        className={styles['FormState']}
        data-success={isSuccess}
      >
        {getIcon(isSuccess)}
        <h4>{getHeading(isSuccess)}</h4>
        <p>{getParagraph(isSuccess)}</p>
        {isSuccess === false && (
          <>
            <Button
              type='button'
              onClick={() => setStatus({ sending: false, success: undefined })}
            >
              Spróbuj ponownie
            </Button>
            <div className={styles.tryEmailUs}>
              <p>Jeśli problem się powtarza skontaktuj się z nami mailowo</p>
              <Copy
                type='mail'
                text={email}
                className={styles.copy}
              />
            </div>
          </>
        )}
      </div>
    )
  );
};

export default FormState;
