/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '104':'30rem'
      },
      fontFamily: {
        Aquire: ['Aquire'],
        Ankori: ['Ankori'],
      },
    },
  },
  plugins: [],
}
