/** @type {import('tailwindcss').Config} */
export const purge = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'];
export const darkMode = false;
export const theme = {
  extend: {
    margin: {
      '25': '6.25rem', // adiciona uma classe de margem personalizada m-25
      '26': '10rem',
      '27': '5.625',
    },
  },
};
export const variants = {};
export const plugins = [];
