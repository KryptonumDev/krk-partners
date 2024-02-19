import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles['Footer']}>
      <div className="max-width">
        <p>Ⓒ Stworzone przez <a href="https://kryptonum.eu/pl" className='link'>Kryptonum</a></p>
        <p><a href="https://www.zrobmimamo.pl/" className='link'>Zrób mi mamo</a></p>
      </div>
    </footer>
  );
};

export default Footer;