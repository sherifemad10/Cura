import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ConsultationPage from './pages/ConsultationPage';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <LanguageProvider>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={`${isRTL ? 'font-arabic' : 'font-sans'}`}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
          </Routes>
        </Layout>
      </div>
    </LanguageProvider>
  );
}

export default App;