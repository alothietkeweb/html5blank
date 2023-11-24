/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html',"src/js/*.js"], 
  content: [
    './*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

