/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionDuration:{
        '2000':'2000ms',
        '1500':'1500ms',
        '600':'600ms',
      },
    },
  },
  plugins: [],
}

