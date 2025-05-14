import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const NutritionTherapy: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-neutral-900 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <motion.div 
            className="w-full lg:w-1/2 lg:pr-16 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="max-w-lg">
              <span className="inline-block bg-secondary-100 dark:bg-secondary-900 text-secondary-600 dark:text-secondary-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
                New Nutritional Therapy Plans
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800 dark:text-white">
                {t('nutrition.title')}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                {t('nutrition.description')}
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="p-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-500 rounded-full mt-1 mr-2">
                    <Check size={16} />
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-300">{t('nutrition.point1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="p-1 bg-secondary-100 dark:bg-secondary-900 text-secondary-500 rounded-full mt-1 mr-2">
                    <Check size={16} />
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-300">{t('nutrition.point2')}</span>
                </li>
              </ul>
              
              <button className="btn btn-secondary">
                {t('nutrition.cta')}
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-500 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2 z-0"></div>
              <div className="rounded-4xl overflow-hidden relative z-10">
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-4 py-3 rounded-full z-20 font-bold">
                  <span className="block text-xs">15+</span>
                  <span className="block text-xs">Years Experience</span>
                </div>
                <img 
                  src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Woman eating healthy food" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-neutral-800 dark:text-white">
            {t('whatIs.title')}
          </h2>
          <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl overflow-hidden">
            <img
              src="./drsherif.png"
              alt="Nutritional Therapy"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionTherapy;