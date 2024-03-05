'use client';
import { useEffect, useState } from 'react';
import styles from './CookieConsent.module.scss';
import Button from '@/components/ui/Button';
import type { ContentProps } from './CookieConsent.types';
import Switch from '@/components/ui/Switch';
import { getCookie } from '@/utils/get-cookie';
import { setCookie } from '@/utils/set-cookie';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

function gtag(...args: any) {
  window.dataLayer.push(args);
}

const cookieObjectKeys = ['preferences', 'statistics', 'marketing'];

type CookiesObject = {
  preferences: 'granted' | 'denied';
  statistics: 'granted' | 'denied';
  marketing: 'granted' | 'denied';
};

const activeCookiesObject: CookiesObject = cookieObjectKeys.reduce((acc, name) => {
  acc[name as keyof CookiesObject] = 'denied';
  return acc;
}, {} as CookiesObject);

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
  const [activeCookies, setActiveCookies] = useState(activeCookiesObject);

  useEffect(() => {
    const cookieValue = getCookie('CookieConsent');
    if (cookieValue) {
      const cookie = JSON.parse(cookieValue) as CookiesObject;
      gtag('consent', 'default', {
        ad_personalization: cookie.marketing,
        ad_storage: cookie.marketing,
        ad_user_data: cookie.marketing,
        analytics_storage: cookie.statistics,
        functionality_storage: cookie.preferences,
        personalization_storage: cookie.preferences,
        security_storage: 'granted',
        wait_for_update: 2500,
      });
    } else {
      gtag('consent', 'default', {
        ad_personalization: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        analytics_storage: 'denied',
        functionality_storage: 'denied',
        personalization_storage: 'denied',
        security_storage: 'granted',
        wait_for_update: 2500,
      });
      setShowBanner(true);
    }
    gtag('set', 'ads_data_redaction', true);
  }, []);

  const acceptAll = () => {
    const cookieValue: { [key in (typeof cookieObjectKeys)[number]]: 'denied' | 'granted' } = {};
    cookieObjectKeys.forEach((name) => (cookieValue[name] = 'granted'));
    setCookie('CookieConsent', JSON.stringify(cookieValue), 365);
    gtag('consent', 'update', {
      ad_personalization: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted',
      security_storage: 'granted',
      wait_for_update: 2500,
    });
    setShowBanner(false);
  };

  const rejectAll = () => {
    const cookieValue: { [key in (typeof cookieObjectKeys)[number]]: 'denied' | 'granted' } = {};
    cookieObjectKeys.forEach((name) => (cookieValue[name] = 'denied'));
    setCookie('CookieConsent', JSON.stringify(cookieValue), 365);
    gtag('consent', 'update', {
      ad_personalization: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'granted',
      wait_for_update: 2500,
    });
    setShowBanner(false);
  };

  const changeConsent = (name: keyof CookiesObject, event: React.MouseEvent<HTMLLabelElement>) => {
    const target = event.target as Element;
    if (!target.matches('input'))
      setActiveCookies((prevState) => {
        const newState: CookiesObject = { ...prevState };
        newState[name] = prevState[name] === 'granted' ? 'denied' : 'granted';
        return newState;
      });
  };

  const acceptPart = () => {
    setCookie('CookieConsent', JSON.stringify(activeCookies), 365);
    gtag('consent', 'update', {
      ad_personalization: activeCookies.marketing,
      ad_storage: activeCookies.marketing,
      ad_user_data: activeCookies.marketing,
      analytics_storage: activeCookies.statistics,
      functionality_storage: activeCookies.preferences,
      personalization_storage: activeCookies.preferences,
      security_storage: 'granted',
      wait_for_update: 2500,
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
          <label>
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
          <label onClick={(e) => changeConsent('preferences', e)}>
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
          <label onClick={(e) => changeConsent('statistics', e)}>
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
          <label onClick={(e) => changeConsent('marketing', e)}>
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
          <label>
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
