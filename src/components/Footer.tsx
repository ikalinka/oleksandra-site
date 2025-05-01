'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-purple-50 via-white to-transparent text-center py-8 text-sm text-gray-500 mt-20 border-t border-purple-100">
      <p className="mb-2 font-medium text-purple-800">
        Oleksandra Kalinka – Life Coach & Karmic Guide
      </p>
      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
