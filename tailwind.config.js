/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bankBlue: '#0A2540',
        bankRed: '#E63946',
        lightGray: '#F8F9FA'
      }
    },
  },
  plugins: [],
}