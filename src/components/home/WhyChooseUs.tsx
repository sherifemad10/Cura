import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const WhyChooseUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Choose Your Diet
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800 dark:text-white">
            {t('whyUs.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-700 rounded-xl overflow-hidden shadow-md"
          >
            <img 
              src="https://images.pexels.com/photos/7551606/pexels-photo-7551606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Nutrition professionals" 
              className="w-full h-64 object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-700 rounded-xl overflow-hidden shadow-md"
          >
            <img 
              src="https://images.pexels.com/photos/3184195/pexels-photo-3184195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team meeting" 
              className="w-full h-64 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;