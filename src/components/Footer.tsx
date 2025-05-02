'use client';

import { usePathname } from 'next/navigation';

const footerTexts: Record<string, { title: string; copyright: string }> = {
  en: {
    title: 'Oleksandra Kalinka – Life Coach & Karmic Guide',
    copyright: 'All rights reserved.',
  },
  uk: {
    title: 'Олександра Калинка – Коуч і Кармічний Гід',
    copyright: 'Всі права захищені.',
  },
  ru: {
    title: 'Александра Калинка – Лайф-коуч и Кармический Гид',
    copyright: 'Все права защищены.',
  },
};

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'en';
  const { title, copyright } = footerTexts[locale] || footerTexts.en;

  return (
    <footer className="w-full bg-gradient-to-t from-purple-50 via-white to-transparent text-center py-8 text-sm text-gray-500 mt-20 border-t border-purple-100">
      <p className="mb-2 font-medium text-purple-800">{title}</p>
      <p className="text-xs text-gray-400">© {new Date().getFullYear()} {copyright}</p>
    </footer>
  );
}
