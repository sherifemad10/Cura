import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    changeLanguage(newLanguage);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-full border border-primary-500 text-primary-500 hover:bg-primary-50 transition-colors text-sm font-medium"
    >
      {currentLanguage === 'en' ? 'عربي' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;