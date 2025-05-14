import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const HealthyEating: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-800 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-primary-500 rounded-full opacity-20 -translate-x-1/4 -translate-y-1/4 z-0"></div>
              <div className="rounded-full overflow-hidden w-80 h-80 mx-auto relative z-10 border-8 border-white dark:border-neutral-700">
                <img 
                  src="https://images.pexels.com/photos/4262012/pexels-photo-4262012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Couple enjoying healthy food" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 lg:pl-16"
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="max-w-lg">
              <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800 dark:text-white">
                {t('healthyEating.title')}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                {t('healthyEating.description')}
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="p-1 bg-primary-100 dark:bg-primary-900 text-primary-500 rounded-full mt-1 mr-2">
                    <Check size={16} />
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-300">{t('healthyEating.point1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="p-1 bg-primary-100 dark:bg-primary-900 text-primary-500 rounded-full mt-1 mr-2">
                    <Check size={16} />
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-300">{t('healthyEating.point2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="p-1 bg-primary-100 dark:bg-primary-900 text-primary-500 rounded-full mt-1 mr-2">
                    <Check size={16} />
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-300">{t('healthyEating.point3')}</span>
                </li>
              </ul>
              
              <button className="btn btn-secondary">
                {t('healthyEating.cta')}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HealthyEating;