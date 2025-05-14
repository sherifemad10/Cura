import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CountUp from '../utils/CountUp';

const Stats: React.FC = () => {
  const { t } = useTranslation();
  
  const stats = [
    { 
      value: 1800, 
      suffix: '+', 
      label: t('stats.happyUsers')
    },
    { 
      value: 180, 
      label: t('stats.doctors')
    },
    { 
      value: 100, 
      suffix: '%', 
      label: t('stats.satisfaction')
    },
    { 
      value: 1.522, 
      label: t('stats.happyClients')
    }
  ];

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                <CountUp 
                  end={stat.value} 
                  decimals={Number.isInteger(stat.value) ? 0 : 3} 
                  suffix={stat.suffix || ''} 
                />
              </p>
              <p className="text-neutral-600 dark:text-neutral-300 uppercase text-sm tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;