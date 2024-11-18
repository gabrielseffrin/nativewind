/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          700: '#6B21A8',
        },
        gray: {
          100: '#F3F4F6',
          800: '#374151',
        },
        red: {
          500: '#EF4444',
        },
      },
    },
  },
  plugins: [],
};
