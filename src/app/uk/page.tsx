'use client';

export const metadata = {
    title: "Олександра Калінка – Кармічний гід та лайф-коуч",
    description: "Запишіться на сесію, щоб розкрити свій потенціал та очистити енергетичні блоки.",
  };
  

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
      }) => void;
    };
  }
}

import { useEffect, useState } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const tryLoadCalendly = () => {
      if (window.Calendly && document.getElementById("calendly-container")) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/oleksandra-kalinka",
          parentElement: document.getElementById("calendly-container"),
        });
        setLoaded(true);
        return true;
      }
      return false;
    };

    if (tryLoadCalendly()) return;

    const interval = setInterval(() => {
      if (tryLoadCalendly()) clearInterval(interval);
    }, 250);

    const timeout = setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen scroll-smooth text-center bg-gradient-to-br from-purple-50 via-white to-pink-50 text-gray-700">
        {/* 🌸 Hero Section */}
        <section id="hero" className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/oleksandra_main_photo.jpg"
              width={280}
              height={280}
              alt="Олександра Калинка"
              className="rounded-full border-4 border-purple-200 shadow-2xl mx-auto mb-6"
              priority
            />
            <h1 className="text-4xl sm:text-5xl font-display text-purple-800 font-bold tracking-tight mb-4">
              Олександра Калинка
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-700 leading-relaxed">
              Допомагаю душам зєднатися зі своїм призначенням, звільнити енергетичні блоки та пробудити справжню силу.
            </p>
            <motion.button
              onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 rounded-full bg-purple-700 text-white shadow-lg hover:bg-purple-800 transition"
            >
              Записатися
            </motion.button>
          </motion.div>
        </section>

        {/* Про мене */}
        <section id="about" className="py-24 px-6 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-display text-purple-800 mb-6">
              Про мене
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Я Олександра — коуч та кармічний гід, яка з пристрастю допомагає людям повернутися на свій духовний шлях.
              Через глибокий кармічний аналіз, інтуїтивну ясність та емоційне звільнення я допомагаю клієнтам відчути, ким вони є насправді —
              щоб жити з наміром, у потоці та свободі.
            </p>
          </motion.div>
        </section>

        {/* Послуги */}
        <section id="services" className="py-24 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-display font-semibold text-purple-800 mb-6 text-center"
          >
            Мої послуги
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left"
          >
            <div className="bg-white shadow-md border border-purple-100 rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">🌀 Індивідуальний коучинг</h3>
              <p className="text-gray-700 text-sm">
                Глибокі персоналізовані сесії для усвідомлення, впевненості та життєвого напрямку.
              </p>
            </div>
            <div className="bg-white shadow-md border border-purple-100 rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">🌌 Кармічна карта</h3>
              <p className="text-gray-700 text-sm">
                Розшифруйте свою кармічну карту та дізнайтеся, які уроки душі ви проходите.
              </p>
            </div>
            <div className="bg-white shadow-md border border-purple-100 rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">🔥 Очищення блоків</h3>
              <p className="text-gray-700 text-sm">
                Звільніться від глибоких енергетичних шаблонів і обмежень.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Бронювання */}
        <section id="book" className="py-24 px-6 bg-white border-t border-purple-100">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-display font-semibold text-purple-800 mb-6 text-center"
          >
            Забронювати сесію
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-md text-gray-600 mb-8 text-center"
          >
            Почніть трансформацію вже сьогодні. Оберіть зручну дату та приєднуйтесь.
          </motion.p>

          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto border border-purple-200 rounded-xl shadow-xl overflow-hidden"
          >
            <div
              id="calendly-container"
              style={{ minWidth: "320px", height: "700px" }}
              className={`w-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            />
          </motion.div>

          {!loaded && (
            <p className="text-sm text-red-500 mt-4 text-center">
              ⚠️ Календар не завантажився.{" "}
              <a
                href="https://calendly.com/oleksandra-kalinka"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-purple-600"
              >
                Натисніть тут
              </a>{" "}
              щоб записатися вручну.
            </p>
          )}
        </section>

        {/* Контакти */}
        <section id="contact" className="py-24 px-6 bg-gradient-to-b from-pink-50 to-purple-50 border-t border-purple-100">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-display font-semibold text-purple-800 mb-6 text-center"
          >
            Зв&apos;язатися
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-md text-gray-600 mb-8 text-center"
          >
            Напишіть мені, якщо у вас є питання, хочете дізнатися більше або готові почати трансформацію.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-md mx-auto space-y-4 text-purple-800 text-base text-center"
          >
            <p>
              📬 <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:oleksandra.kalinka@gmail.com" className="underline hover:text-purple-600">
                oleksandra.kalinka@gmail.com
              </a>
            </p>
            <p>
              📷 <span className="font-semibold">Instagram:</span>{' '}
              <a href="https://instagram.com/coachkalinka" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-600">
                @coachkalinka
              </a>
            </p>
            <p>
              📲 <span className="font-semibold">Telegram:</span>{' '}
              <a href="https://t.me/Oleksandra_Kalinka" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-600">
                @Oleksandra_Kalinka
              </a>
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
