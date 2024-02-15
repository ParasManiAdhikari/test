/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pgreen: {
          '700' : '#373d34',
          '800' : '#2d322b',
        }

      },
      width: {
        '100': '30rem', // for width: 20
      },
      height: {
        '100': '30rem', // for height: 20
      },
    },
  },
  plugins: [],
}

