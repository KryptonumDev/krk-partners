import styles from './Switch.module.scss';

const Switch = ({ ...props }) => {
  return (
    <div className={styles['Switch']}>
      <input
        type='checkbox'
        {...props}
      />
      <div className={styles.dot}>
        <Tick className={styles.tick} />
      </div>
    </div>
  );
};

export default Switch;

const Tick = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='14'
    height='14'
    viewBox='0 0 16 17'
    fill='none'
    {...props}
  >
    <path
      stroke='#fff'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M14 3.7l-8.4 9.6L2 9.7'
    ></path>
  </svg>
);
