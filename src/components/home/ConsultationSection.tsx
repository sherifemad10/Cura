import React, { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';

const ConsultationSection: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    type: 'General Nutrition'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format the data for WhatsApp
    const message = `
*New Consultation Request*
------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Preferred Date:* ${formData.date}
*Type:* ${formData.type}
------------------
    `;
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp click-to-chat URL
    const whatsappUrl = `https://wa.me/201210587417?text=${encodedMessage}`;
    
    // Show success message and open WhatsApp
    setIsSuccess(true);
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        type: 'General Nutrition'
      });
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1000);
  };

  return (
    <section id="consultation" className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-800">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t('consultation.title')}</h2>
          <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12">{t('consultation.description')}</p>
          
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center p-8 bg-success-50 rounded-lg"
            >
              <div className="inline-block p-3 bg-success-100 rounded-full mb-4">
                <Check size={32} className="text-success-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Consultation Request Submitted!</h3>
              <p className="text-neutral-600">You'll be redirected to WhatsApp to connect with our nutritionist.</p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              className="bg-white dark:bg-neutral-800 shadow-lg rounded-xl p-6 md:p-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
                  <label htmlFor="name" className="block mb-2 font-medium text-neutral-700 dark:text-neutral-300">
                    {t('consultation.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="phone" className="block mb-2 font-medium text-neutral-700 dark:text-neutral-300">
                    {t('consultation.phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="email" className="block mb-2 font-medium text-neutral-700 dark:text-neutral-300">
                    {t('consultation.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="date" className="block mb-2 font-medium text-neutral-700 dark:text-neutral-300">
                    {t('consultation.date')} *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="input-field dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="type" className="block mb-2 font-medium text-neutral-700 dark:text-neutral-300">
                    {t('consultation.type')} *
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    className="input-field dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
                  >
                    <option value="General Nutrition">{t('consultation.type1')}</option>
                    <option value="Weight Management">{t('consultation.type2')}</option>
                    <option value="Sports Nutrition">{t('consultation.type3')}</option>
                    <option value="Medical Nutrition Therapy">{t('consultation.type4')}</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? 'Submitting...' : t('consultation.submit')}
                </button>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-3 text-center">
                  {t('consultation.note')}
                </p>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;