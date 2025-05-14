import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Play, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);

  const handleWatchVideo = () => {
    setShowVideo(true);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
      {/* Circular Decoration Elements */}
      <div className="absolute top-0 left-0 w-144 h-144 rounded-full bg-secondary-500 opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-144 h-144 rounded-full bg-primary-500 opacity-10 translate-x-1/2 translate-y-1/2"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 pt-16">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="max-w-lg">
              <span className="inline-block bg-primary-50 text-primary-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                {t('hero.welcome')}
              </span>
              <h1 className="mb-6 text-neutral-800 dark:text-white">{t('hero.title')}</h1>
              <p className="text-neutral-600 dark:text-neutral-300 text-lg mb-8">
                {t('hero.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#consultation" className="btn btn-primary">
                  {t('hero.cta')}
                </a>
                <button 
                  onClick={handleWatchVideo}
                  className="flex items-center gap-2 text-neutral-700 dark:text-white hover:text-primary-500 transition-colors font-medium"
                >
                  <span className="bg-white dark:bg-neutral-700 p-2 rounded-full shadow-md">
                    <Play size={16} className="text-primary-500" />
                  </span>
                  {t('hero.watchVideo')}
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2 z-0"></div>
              <div className="rounded-4xl overflow-hidden relative z-10">
                <img 
                  src="src/assets/drsherif.png" 
                  alt="sherif emad" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary-500 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2 z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 text-white hover:text-primary-500 z-10"
            >
              <X size={24} />
            </button>
            <div className="aspect-w-16 aspect-h-9">
            <video autoPlay loop>
                <source src="src/assets/Nutrition-Clinic.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
