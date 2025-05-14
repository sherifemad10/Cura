import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Clock, Award, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <MessageSquare className="text-primary-500" size={36} />,
      title: t('services.service1.title'),
      description: t('services.service1.description')
    },
    {
      icon: <Clock className="text-primary-500" size={36} />,
      title: t('services.service2.title'),
      description: t('services.service2.description')
    },
    {
      icon: <Award className="text-primary-500" size={36} />,
      title: t('services.service3.title'),
      description: t('services.service3.description')
    },
    {
      icon: <Sparkles className="text-primary-500" size={36} />,
      title: t('services.service4.title'),
      description: t('services.service4.description')
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800 dark:text-white">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow bg-white dark:bg-neutral-800"
              variants={itemVariants}
            >
              <div className="mb-4 p-3 bg-primary-50 dark:bg-neutral-700 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-white">{service.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;