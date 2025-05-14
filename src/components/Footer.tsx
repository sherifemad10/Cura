import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="opacity-75 hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link to="/" className="opacity-75 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/" className="opacity-75 hover:opacity-100 transition-opacity">Blog</Link></li>
              <li><Link to="/" className="opacity-75 hover:opacity-100 transition-opacity">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.ourServices')}</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="opacity-75 hover:opacity-100 transition-opacity">Pricing</Link></li>
              <li><Link to="/" className="opacity-75 hover:opacity-100 transition-opacity">Testimonials</Link></li>
              <li><Link to="/" className="opacity-75 hover:opacity-100 transition-opacity">Get In Touch</Link></li>
              <li><Link to="/" className="opacity-75 hover:opacity-100 transition-opacity">Terms of Service</Link></li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.information')}</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="opacity-75 hover:opacity-100 transition-opacity">Reporting</Link></li>
              <li><Link to="/" className="opacity-75 hover:opacity-100 transition-opacity">Get In Touch</Link></li>
              <li><Link to="/" className="opacity-75 hover:opacity-100 transition-opacity">Management</Link></li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.contactUs')}</h4>
            <address className="not-italic mb-4 opacity-75">
              {t('footer.address')}
            </address>
            <p className="mb-2 opacity-75">{t('footer.phone')}</p>
            <p className="mb-4 opacity-75">{t('footer.hours')}</p>
            
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-sm opacity-75">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;