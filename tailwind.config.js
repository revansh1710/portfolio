/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        darkTheme: '#11001F'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}

