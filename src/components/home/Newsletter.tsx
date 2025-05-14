import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

const Newsletter: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to a backend service
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 dark:bg-primary-900 rounded-full opacity-10 -translate-y-1/3 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-200 dark:bg-secondary-900 rounded-full opacity-10 translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800 dark:text-white">
            {t('newsletter.title')}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-10 text-lg">
            {t('newsletter.description')}
          </p>
          
          <motion.form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletter.placeholder')}
              className="flex-grow input-field px-6 py-4 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white" 
              required
            />
            <button 
              type="submit" 
              className="btn btn-primary whitespace-nowrap px-8"
            >
              {isSubmitted ? (
                <span className="flex items-center">
                  <Check size={18} className="mr-2" />
                  {t('newsletter.button')}
                </span>
              ) : (
                t('newsletter.button')
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;