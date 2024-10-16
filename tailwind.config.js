/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,jsx,ts,tsx}', // Scan only your source files
    './index.html', 
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
