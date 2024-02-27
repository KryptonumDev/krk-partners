import styles from '../HeroApplication.module.scss';
import Loader from '@/components/ui/Loader';

const Loading = ({ loading }: { loading: boolean }) => {
  return (
    loading && (
      <div className={styles['Loading']}>
        <Loader />
      </div>
    )
  );
};

export default Loading;
