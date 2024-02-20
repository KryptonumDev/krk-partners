import Markdown from '@/components/ui/markdown';
import Img from '@/components/ui/image';
import styles from './Comparison.module.scss';
import type { Props } from './Comparison.types';

const Comparison = ({ heading, subheading, tableHeader, tableItems }: Props) => {
  return (
    <section className={styles['Comparison']}>
      <header>
        <h2>{heading}</h2>
        <Markdown.h3>{subheading}</Markdown.h3>
      </header>
      <div className={styles.tableHeader}>
        {tableHeader?.map(({ icon, name }, i) => (
          <div key={i}>
            <div className={styles.icon}>
              <Img
                data={icon}
                width={24}
                height={24}
                sizes='24px'
              />
            </div>
            <span>{name}</span>
          </div>
        ))}
      </div>
      <div className={styles.tableItems}>
        {tableItems?.map(
          ({ heading, option1_Name, option2_Name, option3_Name, option1_Color, option2_Color, option3_Color }, i) => (
            <div
              key={i}
              className={styles.item}
            >
              <p className={styles.heading}>{heading}</p>
              <div>
                <p data-color={option1_Color}>{option1_Name}</p>
                <p data-color={option2_Color}>{option2_Name}</p>
                <p data-color={option3_Color}>{option3_Name}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Comparison;
