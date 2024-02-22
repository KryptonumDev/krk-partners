import Img from '@/components/ui/image';
import CopyToClipboard from '@/components/ui/CopyToClipboard';
import styles from './Contact.module.scss';
import type { CallType } from './Contact.types';
import Copy from '@/components/ui/Copy';

const Call = ({ paragraph, person }: CallType) => {
  return (
    <div className={styles['Call']}>
      <h3>{paragraph}</h3>
      <div className={styles.person}>
        <div className={styles.img}>
          <Img
            data={person.img}
            sizes='48px'
            style={{ width: 48 }}
          />
        </div>
        <p>{person.name}</p>
      </div>
      <Copy
        type='tel'
        text={person.tel}
        className={styles.copy}
      />
      <Copy
        type='mail'
        text={person.email}
        className={styles.copy}
      />
    </div>
  );
};

export default Call;
