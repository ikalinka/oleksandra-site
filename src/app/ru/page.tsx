'use client';

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
        {/* Hero Section */}
        <section id="hero" className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 text-center">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Image
              src="/oleksandra_main_photo.jpg"
              width={280}
              height={280}
              alt="Александра Калинка"
              className="rounded-full border-4 border-purple-200 shadow-2xl mx-auto mb-6"
              priority
            />
            <h1 className="text-4xl sm:text-5xl font-display text-purple-800 font-bold tracking-tight mb-4">
              Александра Калинка
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-700 leading-relaxed">
              Помогаю душам восстановить связь с предназначением, освободить энергетические блоки и пробудить внутреннюю силу.
            </p>
            <motion.button
              onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 rounded-full bg-purple-700 text-white shadow-lg hover:bg-purple-800 transition"
            >
              Записаться
            </motion.button>
          </motion.div>
        </section>

        {/* Обо мне */}
        <section id="about" className="py-24 px-6 bg-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-display text-purple-800 mb-6">Обо мне</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Я Александра — лайф-коуч и кармический гид, помогаю людям вернуться к своему духовному пути.
              Через глубокое кармическое понимание, интуитивную ясность и эмоциональное освобождение я помогаю клиентам обрести свою истинную суть —
              чтобы жить осознанно, в потоке и с внутренней свободой.
            </p>
          </motion.div>
        </section>

        {/* Услуги */}
        <section id="services" className="py-24 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-display font-semibold text-purple-800 mb-6 text-center">
            Мои услуги
          </motion.h2>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-3xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
            <div className="bg-white shadow-md border border-purple-100 rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">🌀 Индивидуальный коучинг</h3>
              <p className="text-gray-700 text-sm">Глубокие персональные сессии для обретения ясности, уверенности и смысла.</p>
            </div>
            <div className="bg-white shadow-md border border-purple-100 rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">🌌 Кармическая карта</h3>
              <p className="text-gray-700 text-sm">Понимание уроков души и причин повторяющихся сценариев вашей жизни.</p>
            </div>
            <div className="bg-white shadow-md border border-purple-100 rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">🔥 Энергетическая чистка</h3>
              <p className="text-gray-700 text-sm">Освобождение от старых энергетических блоков и ограничивающих паттернов.</p>
            </div>
          </motion.div>
        </section>

        {/* Бронирование */}
        <section id="book" className="py-24 px-6 bg-white border-t border-purple-100">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-display font-semibold text-purple-800 mb-6 text-center">
            Забронировать сессию
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl mx-auto text-md text-gray-600 mb-8 text-center">
            Начните путь трансформации уже сегодня. Выберите удобное время и свяжитесь со мной.
          </motion.p>

          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="max-w-4xl mx-auto border border-purple-200 rounded-xl shadow-xl overflow-hidden">
            <div id="calendly-container" style={{ minWidth: "320px", height: "700px" }} className={`w-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`} />
          </motion.div>

          {!loaded && (
            <p className="text-sm text-red-500 mt-4 text-center">
              ⚠️ Календарь не загрузился.{" "}
              <a href="https://calendly.com/oleksandra-kalinka" target="_blank" rel="noopener noreferrer" className="underline text-purple-600">
                Нажмите здесь
              </a>{" "}
              чтобы записаться вручную.
            </p>
          )}
        </section>

        {/* Контакты */}
        <section id="contact" className="py-24 px-6 bg-gradient-to-b from-pink-50 to-purple-50 border-t border-purple-100">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-display font-semibold text-purple-800 mb-6 text-center">
            Связаться
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-2xl mx-auto text-md text-gray-600 mb-8 text-center">
            Напишите мне, если у вас есть вопросы или вы готовы начать трансформацию.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="max-w-md mx-auto space-y-4 text-purple-800 text-base text-center">
            <p>
              📬 <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:oleksandra.kalinka@gmail.com" className="underline hover:text-purple-600">
                oleksandra.kalinka@gmail.com
              </a>
            </p>
            <p>
              📷 <span className="font-semibold">Instagram:</span>{" "}
              <a href="https://instagram.com/coachkalinka" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-600">
                @coachkalinka
              </a>
            </p>
            <p>
              📲 <span className="font-semibold">Telegram:</span>{" "}
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
