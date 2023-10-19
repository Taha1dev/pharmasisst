/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {
        100: '200px',
        200: '200px',
        300: '300px',
        400: '400px',
        500: '500px',
        600: '600px',
      },
      colors: {
        primary: 'var(--mainColor)',
      },
    },
  },
  plugins: [],
};
