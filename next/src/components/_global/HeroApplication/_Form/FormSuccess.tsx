import Copy from '@/components/ui/Copy';
import styles from '../HeroApplication.module.scss';
import type { CalculationProps } from '../HeroApplication.types';
import Img from '@/components/ui/image';

const FormSuccess = ({ comission, totalInterest, earlyPaymentFee, total, contactPerson }: CalculationProps) => {
  return (
    <div className={styles['FormSuccess']}>
      <h3>
        Wstępna propozycja wyceny dla Ciebie to <strong>{total}&nbsp;zł</strong>
      </h3>
      <p>W tym uwzględniono koszty</p>
      <div className={styles.attribute}>
        <p>Prowizja za udzielenie pożyczki</p>
        <div>
          <p>
            <strong>{comission}</strong>&nbsp;zł
          </p>
          <p>
            <strong>12,50</strong>% rocznie
          </p>
        </div>
      </div>
      <div className={styles.attribute}>
        <p>Odsetki w okresie finansowania</p>
        <div>
          <p>
            <strong>{totalInterest}</strong>&nbsp;zł
          </p>
        </div>
      </div>
      {earlyPaymentFee && (
        <div className={styles.attribute}>
          <p>Opłata za wcześniejszą spłatę </p>
          <div>
            <p>
              <strong>{earlyPaymentFee}</strong>&nbsp;zł
            </p>
          </div>
        </div>
      )}
      <div className={styles.contact}>
        <p>
          W ciągu kilku dni skonsultuje się z Tobą telefoniczne nasz konsultant, z którym chętnie Ci odpowie na pytania
          na temat pożyczki
        </p>
        {contactPerson && (
          <>
            <div className={styles.person}>
              <div className={styles.img}>
                <Img
                  data={contactPerson.img}
                  sizes='96px'
                />
              </div>
              <p>{contactPerson.name}</p>
            </div>
            {contactPerson.tel && (
              <Copy
                type='tel'
                text={contactPerson.tel}
                className={styles.copy}
              />
            )}
            {contactPerson.email && (
              <Copy
                type='mail'
                text={contactPerson.email}
                className={styles.copy}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FormSuccess;
