export type QueryType = {
  CookieConsent: {
    consent_Heading: string;
    consent_Paragraph: string;
    details: {
      necessary: {
        service: string;
        cookies: {
          name: string;
          description: string;
          expiry: string;
          type: string;
        }[];
      }[];
      necessary_Description: string;
      statistical: {
        service: string;
        cookies: {
          name: string;
          description: string;
          expiry: string;
          type: string;
        }[];
      }[];
      statistical_Description: string;
      marketing: {
        service: string;
        cookies: {
          name: string;
          description: string;
          expiry: string;
          type: string;
        }[];
      }[];
      marketing_Description: string;
      preferences: {
        service: string;
        cookies: {
          name: string;
          description: string;
          expiry: string;
          type: string;
        }[];
      }[];
      preferences_Description: string;
      unclassified: {
        service: string;
        cookies: {
          name: string;
          description: string;
          expiry: string;
          type: string;
        }[];
      }[];
      unclassified_Description: string;
    };
    info_Heading: string;
    info_Paragraph: string;
  };
};

export type ContentProps = {
  tabs: string[];
  TabActiveIcon: React.ReactNode;
} & QueryType['CookieConsent'];
