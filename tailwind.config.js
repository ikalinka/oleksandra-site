/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          display: ['"Playfair Display"', 'serif'],
          body: ['"Geist"', 'sans-serif'],
        },
        colors: {
          primary: '#7c3aed', // purple-600
          accent: '#e879f9', // fuchsia-400
          soft: '#fdf4ff', // purple-50
        },
        boxShadow: {
          glow: '0 0 15px rgba(124, 58, 237, 0.3)',
        },
        borderRadius: {
          xl: '1rem',
          full: '9999px',
        },
      },
    },
    plugins: [],
  }
  