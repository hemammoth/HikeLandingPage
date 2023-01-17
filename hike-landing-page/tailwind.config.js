/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-blue': '#23C4EA',
        'bright-green': '#00E092',
        'dark-green': '#08313A',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
