import { useState, useEffect } from 'react';
import { translations } from '../translations';

type Language = 'en' | 'ar';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'ar' ? 'ar' : 'en') as Language;
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(current => current === 'en' ? 'ar' : 'en');
  };

  const t = translations[language];

  return { language, toggleLanguage, t };
}