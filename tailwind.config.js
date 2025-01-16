/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rocknroll: ['RocknRoll One', 'sans-serif'],
        spiderman: ['SpiderManFont', 'sans-serif'],
         theAmazingSpiderMan: ['TheAmazingSpiderMan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}