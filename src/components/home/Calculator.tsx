import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CalculationResults {
  bmi: number;
  category: string;
  bmr: number;
  needsConsultation: boolean;
}

const Calculator: React.FC = () => {
  const { t } = useTranslation();
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);
  const [age, setAge] = useState<number>(30);
  const [gender, setGender] = useState<string>('male');
  const [activityLevel, setActivityLevel] = useState<string>('moderate');
  const [results, setResults] = useState<CalculationResults | null>(null);

  const calculateBMI = (): number => {
    // BMI = weight(kg) / (height(m))^2
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  };

  const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return t('calculator.underweight');
    if (bmi < 25) return t('calculator.normal');
    if (bmi < 30) return t('calculator.overweight');
    return t('calculator.obese');
  };

  const calculateBMR = (): number => {
    // Mifflin-St Jeor Equation
    let bmr = 0;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Apply activity multiplier
    const activityMultipliers: Record<string, number> = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };

    return bmr * activityMultipliers[activityLevel];
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const bmi = calculateBMI();
    const bmr = calculateBMR();
    const category = getBMICategory(bmi);
    const needsConsultation = bmi < 18.5 || bmi >= 25;

    setResults({
      bmi,
      category,
      bmr,
      needsConsultation
    });
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-100 dark:bg-neutral-900 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800 dark:text-white">
            {t('calculator.title')}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            {t('calculator.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <motion.div 
              className="p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-neutral-800 dark:text-white">
                {t('calculator.title')}
              </h3>
              
              <form onSubmit={handleCalculate}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {t('calculator.height')}
                  </label>
                  <input
                    type="number"
                    min="100"
                    max="250"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="input-field dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {t('calculator.weight')}
                  </label>
                  <input
                    type="number"
                    min="30"
                    max="300"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="input-field dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {t('calculator.age')}
                  </label>
                  <input
                    type="number"
                    min="18"
                    max="120"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="input-field dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {t('calculator.gender')}
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={() => setGender('male')}
                        className="text-primary-500"
                      />
                      <span className="ml-2 text-neutral-700 dark:text-neutral-300">{t('calculator.male')}</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="female"
                        checked={gender === 'female'}
                        onChange={() => setGender('female')}
                        className="text-primary-500"
                      />
                      <span className="ml-2 text-neutral-700 dark:text-neutral-300">{t('calculator.female')}</span>
                    </label>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {t('calculator.activity')}
                  </label>
                  <select
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value)}
                    className="input-field dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
                  >
                    <option value="sedentary">{t('calculator.sedentary')}</option>
                    <option value="light">{t('calculator.light')}</option>
                    <option value="moderate">{t('calculator.moderate')}</option>
                    <option value="active">{t('calculator.active')}</option>
                    <option value="veryActive">{t('calculator.veryActive')}</option>
                  </select>
                </div>
                
                <button type="submit" className="btn btn-primary w-full">
                  {t('calculator.calculate')}
                </button>
              </form>
            </motion.div>
            
            <motion.div 
              className={`bg-neutral-50 dark:bg-neutral-700 p-8 flex flex-col ${
                results ? 'justify-between' : 'justify-center items-center'
              }`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {results ? (
                <>
                  <div>
                    <h3 className="text-xl font-bold mb-6 text-neutral-800 dark:text-white">
                      {t('calculator.results')}
                    </h3>
                    
                    <div className="mb-6 bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-sm">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                        {t('calculator.bmi')}
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold text-neutral-800 dark:text-white">
                          {results.bmi.toFixed(1)}
                        </p>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          results.category === t('calculator.normal')
                            ? 'bg-success-100 text-success-700 dark:bg-success-900 dark:text-success-300'
                            : 'bg-warning-100 text-warning-700 dark:bg-warning-900 dark:text-warning-300'
                        }`}>
                          {results.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-8 bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-sm">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                        {t('calculator.bmr')}
                      </p>
                      <p className="text-2xl font-bold text-neutral-800 dark:text-white">
                        {Math.round(results.bmr)} <span className="text-sm font-normal">calories/day</span>
                      </p>
                    </div>
                  </div>
                  
                  {results.needsConsultation && (
                    <div className="mt-4">
                      <div className="bg-secondary-50 dark:bg-secondary-900 border-l-4 border-secondary-500 p-4 rounded mb-4">
                        <p className="text-neutral-700 dark:text-neutral-300">
                          {t('calculator.consultation')}
                        </p>
                      </div>
                      <Link to="/consultation" className="btn btn-secondary w-full flex items-center justify-center">
                        {t('calculator.book')}
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center">
                    <ArrowRight size={32} className="text-primary-500" />
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Fill out the form and click calculate to see your results
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;