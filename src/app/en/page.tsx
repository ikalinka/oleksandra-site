'use client';

export const metadata = {
    title: "Oleksandra Kalinka – Life Coach & Karmic Guide",
    description: "Book a 1:1 session with Oleksandra to awaken your power and release energetic blocks.",
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
  
    // Try immediately
    if (tryLoadCalendly()) return;
  
    // Retry for 10 seconds
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
              alt="Oleksandra Kalinka"
              className="rounded-full border-4 border-purple-200 shadow-2xl mx-auto mb-6"
              priority
            />
            <h1 className="text-4xl sm:text-5xl font-display text-purple-800 font-bold tracking-tight mb-4">
              Oleksandra Kalinka
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-700 leading-relaxed">
              Empowering souls to reconnect with their purpose, release energetic blocks, and awaken authentic power.
            </p>
            <motion.button
              onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 rounded-full bg-purple-700 text-white shadow-lg hover:bg-purple-800 transition"
            >
              Book a Session
            </motion.button>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="py-24 px-6 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-display text-purple-800 mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m Oleksandra, a life coach and karmic guide passionate about helping you realign with your spiritual path.
              Through deep karmic insight, intuitive clarity, and emotional release, I help clients reconnect with who they truly are —
              so they can live with intention, flow, and freedom.
            </p>
          </motion.div>
        </section>


        {/* Services */}
        <section id="services" className="py-24 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-display font-semibold text-purple-800 mb-6 text-center"
          >
            My Services
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left"
          >
            <div className="bg-white shadow-md border border-purple-100 rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">🌀 1:1 Coaching</h3>
              <p className="text-gray-700 text-sm">
                Personalized deep sessions to unlock clarity, confidence, and purpose.
              </p>
            </div>
            <div className="bg-white shadow-md border border-purple-100 rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">🌌 Karmic Blueprint</h3>
              <p className="text-gray-700 text-sm">
                Decode your karmic map and understand the soul lessons guiding your path.
              </p>
            </div>
            <div className="bg-white shadow-md border border-purple-100 rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">🔥 Block Clearing</h3>
              <p className="text-gray-700 text-sm">
                Clear deep energetic patterns and release what&apos;s holding you back.
              </p>
            </div>
          </motion.div>
        </section>


        {/* Booking */}
        <section id="book" className="py-24 px-6 bg-white border-t border-purple-100">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-display font-semibold text-purple-800 mb-6 text-center"
          >
            Book a 1:1 Session
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-md text-gray-600 mb-8 text-center"
          >
            Start your transformation journey today. Pick a date that works best for you and let&rsquo;s connect.
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
              ⚠️ Calendar failed to load.{" "}
              <a
                href="https://calendly.com/oleksandra-kalinka"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-purple-600"
              >
                Click here
              </a>{" "}
              to book manually.
            </p>
          )}


          <p className="text-sm text-gray-500 mt-4 text-center">
            Trouble loading?{" "}
            <a
              href="https://calendly.com/oleksandra-kalinka"
              className="underline text-purple-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to book directly
            </a>.
          </p>
        </section>


        {/* Contact */}
        <section id="contact" className="py-24 px-6 bg-gradient-to-b from-pink-50 to-purple-50 border-t border-purple-100">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-display font-semibold text-purple-800 mb-6 text-center"
          >
            Get in Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-md text-gray-600 mb-8 text-center"
          >
            I&apos;d love to hear from you. Whether you have a question, want to connect, or are ready to begin your journey—reach out.
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
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          {/* Glowing Ping Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-purple-400 opacity-40 animate-ping"
            style={{ width: 56, height: 56 }}
          />
          {/* Book Button */}
          <motion.button
            onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="relative p-4 rounded-full bg-purple-700 text-white text-xl shadow-xl hover:bg-purple-800 transition"
            aria-label="Book a session"
          >
            🕊️
          </motion.button>
        </div>

      </main>
      <Footer />
    </>
  );
}
