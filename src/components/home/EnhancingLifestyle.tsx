import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Heart, Activity, Dumbbell, Salad, Apple, Utensils } from 'lucide-react';

const EnhancingLifestyle: React.FC = () => {
  const { t } = useTranslation();
  
  const categories = [
    {
      id: 1,
      icon: <Heart className="text-primary-500" size={24} />,
      title: t('enhancement.lifestyle.title'),
      description: t('enhancement.lifestyle.description'),
      cta: t('enhancement.lifestyle.more')
    },
    {
      id: 2,
      icon: <Activity className="text-primary-500" size={24} />,
      title: t('enhancement.health.title'),
      description: t('enhancement.health.description'),
      cta: t('enhancement.health.more')
    },
    {
      id: 3,
      icon: <Dumbbell className="text-primary-500" size={24} />,
      title: t('enhancement.rehabilitation.title'),
      description: t('enhancement.rehabilitation.description'),
      cta: t('enhancement.rehabilitation.more')
    },
    {
      id: 4,
      icon: <Heart className="text-primary-500" size={24} />,
      title: t('enhancement.workout.title'),
      description: t('enhancement.workout.description'),
      cta: t('enhancement.workout.more')
    },
    {
      id: 5,
      icon: <Salad className="text-primary-500" size={24} />,
      title: t('enhancement.nutrition.title'),
      description: t('enhancement.nutrition.description'),
      cta: t('enhancement.nutrition.more')
    },
    {
      id: 6,
      icon: <Apple className="text-primary-500" size={24} />,
      title: t('enhancement.diet.title'),
      description: t('enhancement.diet.description'),
      cta: t('enhancement.diet.more')
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 } 
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-neutral-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[url('https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-right-bottom opacity-5 pointer-events-none"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800 dark:text-white">
            {t('enhancement.title')}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {t('enhancement.description')}
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {categories.map((category) => (
            <motion.div 
              key={category.id}
              className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-neutral-100 dark:border-neutral-700"
              variants={itemVariants}
            >
              <div className="mb-4 p-3 bg-primary-50 dark:bg-neutral-700 rounded-full inline-block">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-neutral-800 dark:text-white">
                {category.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {category.description}
              </p>
              <a href="#" className="text-primary-500 hover:text-primary-600 font-medium">
                {category.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancingLifestyle;