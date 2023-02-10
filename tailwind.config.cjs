/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-pokemon': '#2A75BB',
        'yellow-pokemon': '#FFCB05'
      }
    },
  },
  plugins: [],
}
