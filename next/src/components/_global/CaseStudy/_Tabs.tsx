'use client';
import { Fragment, useState } from 'react';
import styles from './CaseStudy.module.scss';
import type { TabsProps } from './CaseStudy.types';

const Tabs = ({ list, TabActiveIcon }: TabsProps) => {
  const [tab, setTab] = useState(0);
  const handleTab = (i: number) => setTab(i);

  return (
    <div
      className={styles['Tabs']}
      data-active-tab={tab}
    >
      <div className={styles.switcher}>
        {list.map(({ tab: listTab }, i) => (
          <button
            key={i}
            onClick={() => handleTab(i)}
            data-active={tab === i}
          >
            {TabActiveIcon}
            <span>{listTab}</span>
          </button>
        ))}
      </div>
      {list.map(({ paragraph, ctaPrompt, cta }, i) => (
        <Fragment key={i}>
          {paragraph}
          {ctaPrompt}
          {cta}
        </Fragment>
      ))}
      <div className={styles.img}>
        {list.map(({ icon }, i) => (
          <div
            key={i}
            className={styles.icon}
            data-active={tab === i}
          >
            {icon}
          </div>
        ))}
        <div className={styles.mask}>
          <div style={{ transform: `translateX(${tab * -100}%)` }}>
            {list.map(({ img }, i) => (
              <Fragment key={i}>{img}</Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
