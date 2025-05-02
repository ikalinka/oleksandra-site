'use client';

import { useEffect, useState, ChangeEvent, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

// Translation map
const navLabels: Record<string, Record<string, string>> = {
  en: {
    about: 'About',
    services: 'Services',
    book: 'Book a Session',
    contact: 'Contact',
  },
  uk: {
    about: 'Про мене',
    services: 'Послуги',
    book: 'Записатися',
    contact: 'Контакти',
  },
  ru: {
    about: 'Обо мне',
    services: 'Услуги',
    book: 'Записаться',
    contact: 'Контакты',
  },
};

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const locales = ['en', 'uk', 'ru'];
  const currentLocale = pathname.split('/')[1] || 'en';

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <select
      onChange={handleChange}
      defaultValue={currentLocale}
      className="ml-4 px-2 py-1 text-sm border border-purple-200 rounded bg-white text-purple-800 hover:border-purple-400 transition"
    >
      <option value="en">EN</option>
      <option value="uk">UA</option>
      <option value="ru">RU</option>
    </select>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'en';
  const labels = navLabels[currentLocale] || navLabels.en;

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setIsOpen(false);
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg sm:text-xl font-display text-purple-700 font-bold tracking-tight">
          Oleksandra Kalinka
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm text-purple-800 font-medium">
          {Object.keys(labels).map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="hover:text-purple-500 transition-colors duration-200"
            >
              {labels[key]}
            </button>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-purple-800 focus:outline-none transition"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-4 py-4 space-y-2 border-t border-purple-100"
          >
            {Object.keys(labels).map((key) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className="block w-full text-left text-purple-800 py-2 px-3 rounded-md hover:bg-purple-50 transition"
              >
                {labels[key]}
              </button>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
