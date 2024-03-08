import Markdown from '@/components/ui/markdown';
import Img from '@/components/ui/image';
import Button from '@/components/ui/Button';
import styles from './Steps.module.scss';
import Timeline from './_Timeline';
import type { Props } from './Steps.types';

function addWorkdaysToDate(numWorkdays: number): string {
  const currentDate: Date = new Date(new Date().getTime());
  const weekdayNames: string[] = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
  function isWeekend(date: Date): boolean {
    return date.getDay() === 0 || date.getDay() === 6;
  }
  for (let i: number = 0; i < numWorkdays; ) {
    currentDate.setDate(currentDate.getDate() + 1);
    if (!isWeekend(currentDate)) {
      i++;
    }
  }
  const formattedDate: string = `${weekdayNames[currentDate.getDay()]} (${currentDate.getDate()}.${
    currentDate.getMonth() + 1 < 10 ? '0' : ''
  }${currentDate.getMonth() + 1})`;

  return formattedDate;
}

const Steps = ({ heading, timeline, cta_Heading, cta_Paragraph, cta_Cta, cta_Img }: Props) => {
  return (
    <section className={styles['Steps']}>
      <header>
        <Markdown.h2 className='h3'>{heading}</Markdown.h2>
      </header>
      <Timeline timeline={timeline} />
      <div className={styles.ctaBox}>
        <Markdown.h3>{cta_Heading}</Markdown.h3>
        <Markdown className={styles.paragraph}>{cta_Paragraph.replace('${date}', addWorkdaysToDate(6))}</Markdown>
        <Button data={cta_Cta} />
        <div className={styles.img}>
          <Img
            data={cta_Img}
            sizes=''
          />
        </div>
      </div>
    </section>
  );
};

export default Steps;
