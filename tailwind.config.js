/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Enable JIT mode
  content: ['./app/**/*.{hbs,js,ts}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};
