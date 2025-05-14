import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Moon, Sun } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check for dark mode preference
    if (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && 
          window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-neutral-900 shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="./cura-logo.svg" alt="CURA Logo" className="h-10 w-10" />
            <span className={`text-2xl font-bold ${isScrolled || isDarkMode ? 'text-primary-500' : 'text-dark'} ms-2`}>CURA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isScrolled || isDarkMode ? 'text-neutral-800 dark:text-white' : 'text-dark'} hover:text-primary-500 font-medium`}>
              {t('nav.home')}
            </Link>
            <Link to="/" className={`nav-link ${isScrolled || isDarkMode ? 'text-neutral-800 dark:text-white' : 'text-dark'} hover:text-primary-500 font-medium`}>
              {t('nav.pages')}
            </Link>
            <Link to="/" className={`nav-link ${isScrolled || isDarkMode ? 'text-neutral-800 dark:text-white' : 'text-dark'} hover:text-primary-500 font-medium`}>
              {t('nav.doctors')}
            </Link>
            <Link to="/" className={`nav-link ${isScrolled || isDarkMode ? 'text-neutral-800 dark:text-white' : 'text-dark'} hover:text-primary-500 font-medium`}>
              {t('nav.clinic')}
            </Link>
            <Link to="/" className={`nav-link ${isScrolled || isDarkMode ? 'text-neutral-800 dark:text-white' : 'text-dark'} hover:text-primary-500 font-medium`}>
              {t('nav.blog')}
            </Link>
            <Link to="/" className={`nav-link ${isScrolled || isDarkMode ? 'text-neutral-800 dark:text-white' : 'text-dark'} hover:text-primary-500 font-medium`}>
              {t('nav.shop')}
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/consultation" className="btn btn-primary">
              {t('nav.book')}
            </Link>
            <LanguageSwitcher />
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center lg:hidden">
            <LanguageSwitcher />
            <button 
              onClick={toggleDarkMode} 
              className="p-2 mx-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={toggleMenu}
              className={`p-2 ${isScrolled || isDarkMode ? 'text-neutral-800 dark:text-white' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-neutral-800 shadow-lg">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="nav-link text-neutral-800 dark:text-white hover:text-primary-500 font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.home')}
              </Link>
              <Link to="/" className="nav-link text-neutral-800 dark:text-white hover:text-primary-500 font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.pages')}
              </Link>
              <Link to="/" className="nav-link text-neutral-800 dark:text-white hover:text-primary-500 font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.doctors')}
              </Link>
              <Link to="/" className="nav-link text-neutral-800 dark:text-white hover:text-primary-500 font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.clinic')}
              </Link>
              <Link to="/" className="nav-link text-neutral-800 dark:text-white hover:text-primary-500 font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.blog')}
              </Link>
              <Link to="/" className="nav-link text-neutral-800 dark:text-white hover:text-primary-500 font-medium" onClick={() => setIsMenuOpen(false)}>
                {t('nav.shop')}
              </Link>
              <Link to="/consultation" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
                {t('nav.book')}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;