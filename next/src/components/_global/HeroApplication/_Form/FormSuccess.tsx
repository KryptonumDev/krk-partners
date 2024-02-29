import styles from '../HeroApplication.module.scss';
import type { CalculationProps } from '../HeroApplication.types';

const FormSuccess = ({ calculation }: { calculation: CalculationProps }) => {
  return (
    <div className={styles['FormSuccess']}>
      {calculation !== null && (
        <div className={styles.calculation}>
          <p>{calculation.comission}</p>
          <p>{calculation.totalInterest}</p>
          {calculation?.earlyPaymentFee && <p>{calculation?.earlyPaymentFee}</p>}
          <p>{calculation.total}</p>
        </div>
      )}
    </div>
  );
};

export default FormSuccess;
