/** @type {import('tailwindcss').Config} */

const defaultColors = require("tailwindcss/colors");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "0px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors:{
      "gray-light": "#5A5C66",
      "gray-dark": "#474955",
      "green-lime": "#7EBC3C",
    },
  },
}
