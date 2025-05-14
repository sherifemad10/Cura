import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type LanguageContextType = {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
  isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  changeLanguage: () => {},
  isRTL: false,
});

export const useLanguage = () => useContext(LanguageContext);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');
  const isRTL = currentLanguage === 'ar';

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};