import styles from './CookieConsent.module.scss';
import type { Props } from './CookieConsent.types';

const CookieConsent = ({}: Props) => {
  const cookiesList = [
    {
      heading: 'Necessary',
      description: cookieConsent_List_Necessary,
      name: 'necessary',
      isActive: true,
    },
    {
      heading: 'Statistics',
      description: cookieConsent_List_Statistical,
      name: 'statistics',
      isActive: false,
    },
    {
      heading: 'Marketing',
      description: cookieConsent_List_Marketing,
      name: 'marketing',
      isActive: false,
    },
    {
      heading: 'Preferences',
      description: cookieConsent_List_Preferences,
      name: 'preferences',
      isActive: false,
    },
    {
      heading: 'Unclassified',
      description: cookieConsent_List_Unclassified,
      name: 'unclassified',
      isActive: false,
    },
  ];

  const [showBanner, setShowBanner] = useState(true);
  const [showPreferences, setShowPreferences] = useState(false);

  const [activeCookie, setActiveCookie] = useState(cookiesList);

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
      setShowBanner(false);
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
    }
  }, [showBanner]);

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
    <aside
      className={styles.wrapper}
      aria-hidden={!showBanner}
      data-lenis-prevent
    >
      <button
        className={styles.close}
        onClick={() => rejectAll()}
      >
        Deny
        <Close />
      </button>
      <div className={styles.overflow}>
        <header>
          <p className={styles.heading}>{cookieConsent_Heading}</p>
          <Markdown className={styles.description}>{cookieConsent_Description}</Markdown>
        </header>
        <motion.div
          className={styles.preferences}
          initial={{ height: 0 }}
          animate={{ height: showPreferences ? 'auto' : 0 }}
          exit={{ height: 0 }}
        >
          <p className={styles.preferencesTitle}>{cookieConsent_PreferencesTitle}</p>
          {cookiesList.map(({ heading, description }, i) => (
            <div
              className={styles.item}
              key={i}
            >
              <label
                className={styles.title}
                onClick={() => changeTabs(i)}
              >
                <Markdown>{heading}</Markdown>
                <Switch
                  defaultChecked={i === 0}
                  disabled={i === 0}
                  hasLabel={false}
                />
              </label>
              <p className={styles.description}>{description}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <div className={styles.actionTab}>
        <button
          className={styles.preferences}
          onClick={() => (showPreferences ? acceptPart() : setShowPreferences(true))}
        >
          {showPreferences ? 'Confirm my preferences' : 'Preferences'}
        </button>
        <Button onClick={() => acceptAll()}>Accept all</Button>
      </div>
    </aside>
  );
};
function gtag() {
  if (arguments) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  }
}
const setCookie = (name, value, days) => {
  let expires = '';
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/;SameSite=Strict`;
};
const getCookie = (name) => {
  let nameEQ = name + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export default CookieConsent;

const Close = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='12.75 12.25 23.5 23.5'
    width='22'
    height='22'
  >
    <path
      stroke='#434242'
      d='M35.75 12.75l-22.5 22.5m0-22.5l22.5 22.5'
    ></path>
  </svg>
);
