import Markdown from '@/components/ui/markdown';
import styles from './Faq.module.scss';
import type { Props } from './Faq.types';
import List from './_List';

const Faq = ({ heading, subheading, list }: Props) => {
  const renderedList = list.map(({ question, answer }) => ({
    question: <span>{question}</span>,
    answer: <Markdown className={styles.anwer}>{answer}</Markdown>,
  }));

  return (
    <section className={styles['Faq']} id='faq'>
      <header>
        <h2>{heading}</h2>
        <Markdown.h3>{subheading}</Markdown.h3>
      </header>
      <List list={renderedList} />
    </section>
  );
};

export default Faq;
