/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // 'media' or 'class'
  purge: {
    content: [
      './app/pages/*.{js,ts,jsx,tsx}',
      './app/components/*.{js,ts,jsx,tsx}'
    ],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}