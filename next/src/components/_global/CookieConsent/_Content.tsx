'use client';
import { useEffect, useState } from 'react';
import styles from './CookieConsent.module.scss';
import Button from '@/components/ui/Button';
import type { ContentProps } from './CookieConsent.types';
import 'node_modules/@types/gtag.js/index.d.ts';
import Switch from '@/components/ui/Switch';

const Content = ({
  tabs,
  TabActiveIcon,
  consent_Heading,
  consent_Paragraph,
  details,
  info_Heading,
  info_Paragraph,
}: ContentProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTab = (i: number) => setActiveTab(i);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (getCookie('necessary')) {
      gtag('consent', 'default', {
        functionality_storage: getCookie('necessary'),
        analytics_storage: getCookie('statistics'),
        ad_storage: getCookie('marketing'),
        personalization_storage: getCookie('preferences'),
        unclassified_storage: getCookie('unclassified'),
        wait_for_update: 2500,
      });
      gtag('set', 'ads_data_redaction', true);
    } else {
      gtag('consent', 'default', {
        functionality_storage: 'denied',
        analytics_storage: 'denied',
        ad_storage: 'denied',
        personalization_storage: 'denied',
        unclassified_storage: 'denied',
        wait_for_update: 2500,
      });
      gtag('set', 'ads_data_redaction', true);
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    activeCookie.forEach((el) => {
      setCookie(el.name, 'granted', 365);
    });
    gtag('consent', 'update', {
      functionality_storage: 'granted',
      analytics_storage: 'granted',
      ad_storage: 'granted',
      personalization_storage: 'granted',
      unclassified_storage: 'granted',
    });
    setShowBanner(false);
  };
  const acceptPart = () => {
    activeCookie.forEach((el) => {
      setCookie(el.name, el.isActive ? 'granted' : 'denied', 365);
    });
    gtag('consent', 'update', {
      functionality_storage: getCookie('necessary'),
      analytics_storage: getCookie('statistics'),
      ad_storage: getCookie('marketing'),
      personalization_storage: getCookie('preferences'),
      unclassified_storage: getCookie('unclassified'),
    });
    setShowBanner(false);
  };
  const changeTabs = (index) => {
    const arr = [...activeCookie];
    if (arr[index].name === 'necessary') {
      return null;
    }
    arr[index].isActive = !arr[index].isActive;
    setActiveCookie(arr);
  };

  const rejectAll = () => {
    activeCookie.forEach((el) => {
      setCookie(el.name, 'denied', 365);
    });
    gtag('consent', 'update', {
      functionality_storage: 'denied',
      analytics_storage: 'denied',
      ad_storage: 'denied',
      personalization_storage: 'denied',
      unclassified_storage: 'denied',
    });
    setShowBanner(false);
  };

  return (
    <div
      className={styles['Content']}
      aria-hidden={!showBanner}
    >
      <div className={styles.tabs}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => handleTab(i)}
            data-active={activeTab === i}
          >
            {TabActiveIcon}
            <span>{tab}</span>
          </button>
        ))}
      </div>
      <div
        className={styles['Tab0']}
        style={{ display: activeTab !== 0 ? 'none' : undefined }}
      >
        <h2 className='h3'>{consent_Heading}</h2>
        <p className={styles.paragraph}>{consent_Paragraph}</p>
      </div>
      <div
        className={styles['Tab1']}
        style={{ display: activeTab !== 1 ? 'none' : undefined }}
      >
        <div className={styles.item}>
          <label onClick={() => changeTabs(i)}>
            <Switch
              checked={true}
              readOnly={true}
            />
            <span>Niezbędne</span>
          </label>
          <p>{details.necessary_Description}</p>
          {details.necessary?.map(({ service, cookies }, i) => (
            <div
              className={styles.item}
              key={i}
            >
              <p>{service}</p>
              <div className={styles.cookies}>
                {cookies.map(({ name, description, expiry, type }, i) => (
                  <div
                    className={styles.item}
                    key={i}
                  >
                    <p>{name}</p>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.info}>
                      <p>Data ważności: {expiry}</p>
                      <p>Typ: {type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.item}>
          <label onClick={() => changeTabs(i)}>
            <Switch />
            <span>Statystyka</span>
          </label>
          <p>{details.statistical_Description}</p>
          {details.statistical?.map(({ service, cookies }, i) => (
            <div
              className={styles.item}
              key={i}
            >
              <p>{service}</p>
              <div className={styles.cookies}>
                {cookies.map(({ name, description, expiry, type }, i) => (
                  <div
                    className={styles.item}
                    key={i}
                  >
                    <p>{name}</p>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.info}>
                      <p>Data ważności: {expiry}</p>
                      <p>Typ: {type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.item}>
          <label onClick={() => changeTabs(i)}>
            <Switch />
            <span>Marketing</span>
          </label>
          <p>{details.marketing_Description}</p>
          {details.marketing?.map(({ service, cookies }, i) => (
            <div
              className={styles.item}
              key={i}
            >
              <p>{service}</p>
              <div className={styles.cookies}>
                {cookies.map(({ name, description, expiry, type }, i) => (
                  <div
                    className={styles.item}
                    key={i}
                  >
                    <p>{name}</p>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.info}>
                      <p>Data ważności: {expiry}</p>
                      <p>Typ: {type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.item}>
          {' '}
          <label onClick={() => changeTabs(i)}>
            <Switch />
            <span>Preferencje</span>
          </label>
          <p>{details.preferences_Description}</p>
          {details.preferences?.map(({ service, cookies }, i) => (
            <div
              className={styles.item}
              key={i}
            >
              <p>{service}</p>
              <div className={styles.cookies}>
                {cookies.map(({ name, description, expiry, type }, i) => (
                  <div
                    className={styles.item}
                    key={i}
                  >
                    <p>{name}</p>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.info}>
                      <p>Data ważności: {expiry}</p>
                      <p>Typ: {type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.item}>
          <label onClick={() => changeTabs(i)}>
            <Switch />
            <span>Nieklasyfikowane</span>
          </label>
          <p>{details.unclassified_Description}</p>
          {details.unclassified?.map(({ service, cookies }, i) => (
            <div
              className={styles.item}
              key={i}
            >
              <p>{service}</p>
              <div className={styles.cookies}>
                {cookies.map(({ name, description, expiry, type }, i) => (
                  <div
                    className={styles.item}
                    key={i}
                  >
                    <p>{name}</p>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.info}>
                      <p>Data ważności: {expiry}</p>
                      <p>Typ: {type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={styles['Tab2']}
        style={{ display: activeTab !== 2 ? 'none' : undefined }}
      >
        <h2 className='h3'>{info_Heading}</h2>
        <p className={styles.paragraph}>{info_Paragraph}</p>
      </div>
      <div className={styles.controls}>
        <button onClick={() => rejectAll()}>Odmowa</button>
        <button onClick={() => acceptPart()}>Ustaw preferencje</button>
        <Button onClick={() => acceptAll()}>Zgoda na wszystkie</Button>
      </div>
    </div>
  );
};

export default Content;

declare global {
  interface Window {
    dataLayer: any[];
  }
}

function gtag() {
  if (arguments) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  }
}
const setCookie = (name: string, value: string, days: number) => {
  let expires = '';
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/;SameSite=Strict`;
};

const getCookie = (name: string): string | null => {
  let nameEQ: string = name + '=';
  let ca: string[] = document.cookie.split(';');
  let c: string = '';
  for (let i: number = 0; i < ca.length; i++) {
    c = ca[i] as string;
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
