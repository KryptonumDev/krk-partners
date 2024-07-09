import Markdown from '@/components/ui/markdown';
import styles from './Reviews.module.scss';
import type { Props } from './Reviews.types';
import Img from '@/components/ui/image';

const Reviews = ({ heading, subheading, list }: Props) => {
  return (
    <section className={`${styles['Reviews']} sec-wo-margin`} id='opinie'>
      <header>
        <h2>{heading}</h2>
        <Markdown.h3>{subheading}</Markdown.h3>
      </header>
      <div className={styles.list}>
        {list.map(({ img, name, review, amount }, i) => (
          <article
            className={styles.item}
            key={i}
          >
            <div className={styles.img}>
              <Img
                data={img}
                sizes='48px'
              />
            </div>
            <div className={styles.header}>
              <p className={styles.name}>{name}</p>
              {amount && (
                <p className={styles.amount}>
                  <WalletIcon />
                  <span>{amount}</span>
                </p>
              )}
            </div>
            <p className={styles.review}>{review}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Reviews;

const WalletIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={17}
    height={17}
    fill='none'
  >
    <path
      d='M3.594 6.594c0-.268.216-.485.482-.485h2.57c.267 0 .483.217.483.485a.484.484 0 0 1-.482.486h-2.57a.484.484 0 0 1-.483-.486Z'
      fill='#376578'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.459 6.854c-.041-.002-.087-.002-.133-.002h-1.849c-1.515 0-2.81 1.157-2.81 2.666 0 1.51 1.295 2.667 2.81 2.667H14.325c.047 0 .093 0 .134-.003.615-.037 1.16-.505 1.205-1.158.003-.042.003-.088.003-.131V8.144c0-.043 0-.09-.003-.132-.046-.653-.59-1.12-1.205-1.158Zm-2.145 3.375c.39 0 .706-.318.706-.71a.708.708 0 0 0-.706-.712.709.709 0 0 0-.706.711c0 .393.316.711.706.711Z'
      fill='#376578'
    />
    <path
      opacity={0.5}
      d='M14.426 6.852c0-.787-.028-1.631-.531-2.236a2.532 2.532 0 0 0-.156-.17c-.499-.5-1.131-.72-1.913-.826-.76-.102-1.73-.102-2.955-.102H7.462c-1.225 0-2.195 0-2.955.102-.781.105-1.414.327-1.913.826-.499.498-.72 1.131-.825 1.913-.102.76-.102 1.73-.102 2.955v.075c0 1.225 0 2.196.102 2.955.105.782.326 1.414.825 1.913.5.5 1.132.72 1.913.826.76.102 1.73.102 2.955.102h1.409c1.225 0 2.196 0 2.955-.102.782-.105 1.414-.327 1.913-.826a2.48 2.48 0 0 0 .35-.44c.301-.48.337-1.067.337-1.633H12.476c-1.514 0-2.81-1.157-2.81-2.666 0-1.51 1.296-2.667 2.81-2.667h1.85l.1.001Z'
      fill='#376578'
    />
    <path
      d='m7.068 1.9-1.401.946-1.156.774c.76-.102 1.728-.102 2.951-.102h1.409c1.225 0 2.196 0 2.955.102.153.02.3.046.441.076L11 2.851 9.592 1.9a2.279 2.279 0 0 0-2.524 0Z'
      fill='#376578'
    />
  </svg>
);
