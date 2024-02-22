import styles from './Contact.module.scss';
import Loader from '@/components/ui/Loader';

const FormLoading = ({ loading }: { loading: boolean }) => {
  return (
    loading && (
      <div className={styles['FormLoading']}>
        <Loader />
      </div>
    )
  );
};

export default FormLoading;
